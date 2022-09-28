import {
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  ModalFooter,
} from 'reactstrap'
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import {useRef, useEffect, useCallback, useState} from 'react'
import {Plus, Minus, Crop} from 'react-feather'
import {Button} from 'reactstrap'

const ModalUpload = ({open, toggle, avatar, handleUpload}) => {
  const defaultCutImage = {
    allowZoomOut: false,
    position: {x: 0.5, y: 0.5},
    scale: 1,
    rotate: 0,
    borderRadius: 10,
    preview: undefined,
    width: 300,
    height: 300,
    disableCanvasRotation: false,
    isTransparent: false,
    backgroundColor: undefined,
  }
  const [editImage, setEditImage] = useState(defaultCutImage)

  const editor = useRef()

  const handlePositionChange = position => {
    setEditImage({...editImage, position: position})
    // handleSave()
  }
  const handleNewImage = e => {
    if (e.target.files?.[0]) {
      setEditImage({...editImage, image: e.target.files[0]})
    }
  }
  const handleScale = e => {
    const scale = parseFloat(e.target.value)
    setEditImage({...editImage, scale: scale})
    // handleSave();
  }

  const handleReset = () => {
    editImage.preview = ''
    toggle()
  }

  useEffect(() => {
    if (avatar) {
      setEditImage({...editImage, image: avatar})
    }
  }, [avatar])

  const renderImgPreview = useCallback(() => {
    const img = editor.current.getImageScaledToCanvas().toDataURL()
    const rect = editor.current.getCroppingRect()

    if (!img || !rect) return

    setEditImage(editImage => ({
      ...editImage,
      preview: {
        img,
        rect,
        scale: editImage.scale,
        width: editImage.width,
        height: editImage.height,
        borderRadius: editImage.borderRadius,
      },
    }))
  }, [setEditImage])

  return (
    <>
      <div>
        <Modal
          className="modal-dialog-centered modal-lg"
          isOpen={open}
          toggle={toggle}
          scrollable
        >
          <ModalHeader toggle={toggle}>Upload Image</ModalHeader>
          <ModalBody className="py-5">
            <Row className=" ">
              <Col
                md={6}
                className="d-flex align-items-center justify-content-center"
              >
                <Dropzone
                  onDrop={([image]) =>
                    setEditImage({...editImage, image: image})
                  }
                  noClick
                  multiple={false}
                >
                  {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()} className="preview">
                      <AvatarEditor
                        ref={editor}
                        scale={editImage.scale}
                        width={editImage.width}
                        height={editImage.height}
                        position={editImage.position}
                        onPositionChange={handlePositionChange}
                        rotate={editImage.rotate}
                        borderRadius={
                          editImage.width / (100 / editImage.borderRadius)
                        }
                        backgroundColor={editImage.backgroundColor}
                        // onLoadFailure={this.logCallback.bind(this, 'onLoadFailed')}
                        // onLoadSuccess={this.logCallback.bind(this, 'onLoadSuccess')}
                        // onImageReady={this.logCallback.bind(this, 'onImageReady')}
                        image={editImage.image}
                        disableCanvasRotation={editImage.disableCanvasRotation}
                        onImageChange={e => renderImgPreview()}
                      />
                      <input
                        name="newImage"
                        type="file"
                        onChange={handleNewImage}
                        {...getInputProps()}
                      />
                    </div>
                  )}
                </Dropzone>
              </Col>
              <Col
                md={6}
                className="d-flex align-items-center justify-content-center"
              >
                {editImage.preview && (
                  <>
                    <img
                      src={editImage.preview.img}
                      style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: `${
                          (Math.min(
                            editImage.preview.height,
                            editImage.preview.width,
                          ) +
                            10) *
                          (editImage.preview.borderRadius / 2 / 100)
                        }px`,
                      }}
                      alt=""
                    />
                  </>
                )}
              </Col>
            </Row>
            <div
              className="m-auto mt-3 d-flex align-items-center justify-content-center"
              style={{maxWidth: '50%'}}
            >
              <Minus size={24} />
              <Input
                color="info"
                name="default-range scale"
                id="default-range"
                type="range"
                onChange={handleScale}
                min={editImage.allowZoomOut ? '0.1' : '1'}
                max="2"
                step="0.01"
                defaultValue="1"
              />
              <Plus size={24} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" outline onClick={handleReset}>
              Huỷ
            </Button>
            <Button
              color="primary"
              onClick={() =>
                handleUpload(
                  editor.current?.getImageScaledToCanvas().toDataURL(),
                )
              }
            >
              Lưu
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  )
}

export default ModalUpload
