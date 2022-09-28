import React, {useState, useRef, useEffect} from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap'

import ReactCrop, {centerCrop, makeAspectCrop} from 'react-image-crop'

import 'react-image-crop/dist/ReactCrop.css'
import {FilePlus} from 'react-feather'
import SmallSpinner from 'components/small-spinner'

const TO_RADIANS = Math.PI / 180

export async function canvasPreview(
  image,
  canvas,
  crop,
  scale = 1,
  rotate = 0,
) {
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('No 2d context')
  }

  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  // devicePixelRatio slightly increases sharpness on retina devices
  // at the expense of slightly slower render times and needing to
  // size the image back down if you want to download/upload and be
  // true to the images natural size.
  const pixelRatio = window.devicePixelRatio || 1
  // const pixelRatio = 1

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio)

  ctx.scale(pixelRatio, pixelRatio)
  ctx.imageSmoothingQuality = 'high'

  const cropX = crop.x * scaleX
  const cropY = crop.y * scaleY

  const rotateRads = rotate * TO_RADIANS
  const centerX = image.naturalWidth / 2
  const centerY = image.naturalHeight / 2

  ctx.save()

  // 5) Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY)
  // 4) Move the origin to the center of the original position
  ctx.translate(centerX, centerY)
  // 3) Rotate around the origin
  ctx.rotate(rotateRads)
  // 2) Scale the image
  ctx.scale(scale, scale)
  // 1) Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY)
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
  )

  ctx.restore()
}

export function useDebounceEffect(fn, waitTime, deps) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, deps)
    }, waitTime)

    return () => {
      clearTimeout(t)
    }
  }, [deps, fn, waitTime])
}

function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1])
  else byteString = unescape(dataURI.split(',')[1])
  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length)
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ia], {type: mimeString})
}

const ModalCropImage = ({open, toggle, onSave, isLoading = false}) => {
  const [imgSrc, setImgSrc] = useState('')
  const previewCanvasRef = useRef(null)
  const imgRef = useRef(null)
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e) {
    imgRef.current = e.currentTarget

    const {width, height} = e.currentTarget

    // This is to demonstate how to make and center a % aspect crop
    // which is a bit trickier so we use some helper functions.

    let objCrop =
      open === 'avatar'
        ? {
            unit: '%',
            width: 60,
            height: 60,
          }
        : {
            unit: '%',
            width: 60,
          }

    const crop = centerCrop(
      makeAspectCrop(objCrop, open === 'avatar' ? 1 : 16 / 9, width, height),
      width,
      height,
    )

    setCrop(crop)
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )

  return (
    <Modal
      isOpen={open}
      toggle={toggle}
      className={'modal-dialog-centered modal-xl'}
    >
      <ModalHeader toggle={toggle}>Chỉnh sửa ảnh</ModalHeader>
      <ModalBody>
        <div className="text-center mb-1">
          <Label type="button" className="text-primary cursor-pointer">
            <FilePlus size={21} />
            Chọn file
            <input
              type="file"
              hidden={true}
              accept="image/*"
              onChange={onSelectFile}
            />
          </Label>
          <div className="d-flex">
            <FormGroup row className="w-50 my-2">
              <Label sm="3" size="lg" for="input-large-horizontal">
                Scale:
              </Label>
              <Col sm="9">
                <Input
                  id="scale-input"
                  type="number"
                  step={0.1}
                  value={scale}
                  disabled={!imgSrc}
                  onChange={e => setScale(Number(e.target.value))}
                />
              </Col>
            </FormGroup>

            <FormGroup row className="w-50 my-2">
              <Label sm="3" size="lg" for="input-large-horizontal">
                Rotate:
              </Label>
              <Col sm="9">
                <Input
                  id="scale-input"
                  type="number"
                  value={rotate}
                  disabled={!imgSrc}
                  onChange={e =>
                    setRotate(
                      Math.min(180, Math.max(-180, Number(e.target.value))),
                    )
                  }
                />
              </Col>
            </FormGroup>
          </div>
        </div>

        {Boolean(imgSrc) && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={c => setCompletedCrop(c)}
            aspect={open === 'avatar' ? 1 : 16 / 9}
          >
            <img
              alt="Crop me"
              src={imgSrc}
              style={{transform: `scale(${scale}) rotate(${rotate}deg)`}}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}
        <div>
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '1px solid black',
              objectFit: 'contain',
              width: completedCrop?.width || 0,
              height: completedCrop?.height || 0,
            }}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          disabled={isLoading}
          onClick={() => {
            if (previewCanvasRef && previewCanvasRef.current) {
              const img = previewCanvasRef.current.toDataURL()

              const file = dataURItoBlob(img)

              onSave(file)
            }
          }}
        >
          <SmallSpinner isLoading={isLoading} text="Lưu" />
        </Button>
        <Button
          color="secondary"
          outline
          onClick={() => {
            toggle()
          }}
        >
          Hủy
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalCropImage
