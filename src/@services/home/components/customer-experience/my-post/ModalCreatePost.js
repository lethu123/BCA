import React from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import Avatar from '@core/components/avatar'
import avatarUser4 from 'assets/media/svg/avatars/002-girl.svg'
import {CameraOff, X} from 'react-feather'
// Third Libary
import UploadImageField from 'components/form/UploadImageField'
import TextareaField from 'components/form/TextareaField'
import {Formik, Form} from 'formik'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalCreatePost = ({isOpen, setIsOpen}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setIsOpen(!isOpen)}
    />
  )

  return (
    <div>
      <Modal
        scrollable
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
          close={CloseBtn}
        >
          Create Post
        </ModalHeader>
        <ModalBody className="modal-dialog-centered" style={{padding: '30px'}}>
          <PerfectScrollbar>
            <Formik
              initialValues={{
                text: '',
                textarea: '',
                picker: [new Date(), new Date('2021-08-30')],
                editor: '',
                select: [],
              }}
              // validationSchema={formSchema}
              onSubmit={values => {
                console.log(values)
              }}
            >
              <Form className="w-100">
                <div className="d-flex flex-column justify-content-center w-100">
                  <div className="d-flex align-items-center w-100">
                    <Avatar
                      className="mr-1"
                      img={avatarUser4}
                      size="lg"
                      style={{flexBasis: '5%'}}
                    />
                    <div className="w-100">
                      <TextareaField
                        maxLength={20}
                        minRows={4}
                        name="textarea"
                        placeholder="Bạn đang nghĩ gì vậy Quyên?"
                        onChange={(name, value) => console.log(value)}
                      />
                    </div>
                  </div>
                  <div className="divider divider-center">
                    <div className="divider-text">
                      <CameraOff size={20} color="#ff6700 " />
                    </div>
                  </div>
                  <div>
                    <UploadImageField
                      name="images_1"
                      // maxFile={2}
                      onChange={(name, value) => console.log(value)}
                    />
                  </div>
                </div>
              </Form>
            </Formik>
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button.Ripple color="primary" onClick={() => setIsOpen(false)}>
            Submit
          </Button.Ripple>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalCreatePost
