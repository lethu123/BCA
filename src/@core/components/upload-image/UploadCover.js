import React, {useEffect, useRef, useState} from 'react'
import {Button, CardImg} from 'reactstrap'
import AvatarEditor from 'react-avatar-editor'

import './style.scss'
const avaDefault =
  'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/timeline.91041dd4.jpg'

const UploadCover = ({cover, handleUpload, file, setFile}) => {
  // ** start updaload cover

  const editor = useRef()
  const widthref = useRef()

  const defaultCutImage = {
    allowZoomOut: false,
    position: {x: 0, y: 0},
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    preview: undefined,
    height: 300,
    disableCanvasRotation: false,
    isTransparent: true,
  }
  const [editImage, setEditImage] = useState(defaultCutImage)

  useEffect(() => {
    setEditImage({...editImage, width: widthref.current?.offsetWidth})
  }, [widthref.current?.offsetWidth])

  const handlePositionChange = position => {
    setEditImage({...editImage, position: position})
  }

  useEffect(() => {
    setEditImage({...editImage, image: file})
  }, [file])

  // ** end upload cover

  return (
    <div>
      {file === null ? (
        <div className="custom-cover">
          <CardImg
            src={cover || avaDefault}
            alt="User Profile Image"
            top
            className="h-100"
          />
        </div>
      ) : (
        <div className="position-releative" ref={widthref}>
          <div
            className="position-absolute w-100 text-right p-2"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
          >
            <Button.Ripple
              color="primary"
              onClick={() =>
                handleUpload(
                  editor.current?.getImageScaledToCanvas().toDataURL(),
                )
              }
            >
              Save
            </Button.Ripple>
            <Button.Ripple
              outline
              color="primary"
              className="ml-1"
              onClick={() => {
                setFile(null)
              }}
            >
              Cancel
            </Button.Ripple>
          </div>
          <AvatarEditor
            ref={editor}
            scale={editImage.scale}
            width={editImage.width}
            height={editImage.height}
            position={editImage.position}
            onPositionChange={handlePositionChange}
            rotate={editImage.rotate}
            borderRadius={editImage.width / (100 / editImage.borderRadius)}
            backgroundColor={editImage.backgroundColor}
            image={editImage.image}
            disableCanvasRotation={editImage.disableCanvasRotation}
          />
        </div>
      )}
    </div>
  )
}

export default UploadCover
