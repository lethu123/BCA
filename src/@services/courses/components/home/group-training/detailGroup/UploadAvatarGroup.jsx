import React, {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import Uppy from '@uppy/core'
import {DragDrop} from '@uppy/react'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@core/scss/react/libs/file-uploader/file-uploader.scss'
import './DetailGroup.style.scss'
import {X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
const UploadAvatarGroup = ({centeredModal, setCenteredModal}) => {
  // Upload Image
  const [img, setImg] = useState(null)

  const uppy = new Uppy({
    meta: {type: 'avatar'},
    restrictions: {maxNumberOfFiles: 1},
    autoProceed: true,
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setImg(preview)
  })
  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg modalUploadAvatar"
      >
        <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>
          <div className="d-flex justify-content-between">
            <h5> Upload Avatar Group</h5>

            <p
              className="cursor-pointer"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              <X />
            </p>
          </div>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <DragDrop uppy={uppy} />
            {img !== null ? (
              <img
                className="rounded mt-2"
                src={img}
                alt="avatar"
                style={{width: 300, height: 180, marginTop: 15}}
              />
            ) : null}
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Update
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default UploadAvatarGroup
