import React from 'react'
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import Avatar from '@core/components/avatar'
// import avatarUser4 from 'assets/media/svg/avatars/002-girl.svg'
import avatar from 'assets/images/avatars/avatar-blank.png'
import {CameraOff, X} from 'react-feather'
// Third Libary
import {DragDrop} from '@uppy/react'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@core/scss/react/libs/file-uploader/file-uploader.scss'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalAddPost = ({isOpen, setIsOpen}) => {
  // Upload File
  const uppy = new Uppy({
    meta: {type: 'avatar'},
    autoProceed: true,
    restrictions: {maxNumberOfFiles: 2, allowedFileTypes: ['image/*']},
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    const arrPreview = []
    arrPreview.push({data: file.data, preview})
    // setPostState({
    //   ...postState,
    //   image: [...arrPreview],
    // })
  })

  return (
    <div>
      <Modal
        isOpen={isOpen}
        toggle={() => {
          setIsOpen(false)
        }}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          toggle={() => {
            setIsOpen(false)
          }}
          close={
            <X
              className="cursor-pointer"
              size={20}
              onClick={() => setIsOpen(false)}
            />
          }
        >
          Tạo bài viết
        </ModalHeader>
        <ModalBody className="modal-dialog-centered" style={{padding: '30px'}}>
          <div className="d-flex flex-column justify-content-center w-100">
            <div className="d-flex align-items-center w-100">
              <Avatar
                className="mr-1"
                img={avatar}
                size="lg"
                style={{flexBasis: '5%'}}
              />
              <Form style={{flexBasis: '95%'}}>
                <Input
                  className="round"
                  type="textarea"
                  rows="3"
                  id="roundedInput1"
                  placeholder={`Bạn đang nghĩ gì Vũ Vâu ...?`}
                  style={{backgroundColor: 'white', borderColor: '#f1f3f4'}}
                  // value={postState.text}
                  // onChange={e =>
                  //   setPostState({...postState, text: e.target.value})
                  // }
                />
              </Form>
            </div>
            <div className="divider divider-center">
              <div className="divider-text">
                <CameraOff size={20} color="#ff6700 " />
              </div>
            </div>
            <div className="dropImage">
              <DragDrop uppy={uppy} />
              {/* {renderPreview()} */}
            </div>
            {/* <div className=" d-flex justify-self-center align-self-center mt-2">
              <CustomInput
                type="switch"
                // label="Public"
                id="icon-primary"
                name="icon-primary"
                inline
                defaultChecked={true}
              />
              <span>Public</span>
            </div> */}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button.Ripple color="primary" type="submit">
            Tạo
          </Button.Ripple>
          <Button.Ripple
            color="secondary"
            type="button"
            outline
            onClick={() => setIsOpen(false)}
          >
            Hủy
          </Button.Ripple>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalAddPost
