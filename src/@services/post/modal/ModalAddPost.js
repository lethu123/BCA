import React, {useState} from 'react'
import {Button, FormGroup, Modal, ModalBody, ModalHeader} from 'reactstrap'
import Avatar from '@core/components/avatar'
import avatarUser4 from 'assets/media/svg/avatars/002-girl.svg'
import {CameraOff, X} from 'react-feather'
// Third Libary
import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import UploadImageField from 'components/form/UploadImageField'
import TextareaField from 'components/form/TextareaField'
import {PostMutation} from '@services/post'
// import {uploadSingleImageService} from '@services/ultils'

// import '../scss/Post.style.scss'
const ModalAddPost = ({isOpen, setIsOpen}) => {
  const [initialValue, setInitialValue] = useState({
    content: '',
    image: [],
  })

  const formSchema = Yup.object().shape({
    content: Yup.string().required('Bạn chưa nhập nội dung bài viết'),
  })

  const {mutate} = PostMutation.useCreatePostByUser()

  return (
    <div>
      <Modal
        // scrollable
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
            <Formik
              initialValues={initialValue}
              validationSchema={formSchema}
              enableReinitialize
            >
              {({values, setFieldValue}) => (
                <Form style={{flexBasis: '95%'}}>
                  <FormGroup className="modalAddPost">
                    <div className="d-flex align-items-center w-100">
                      <Avatar
                        className="mr-1"
                        img={avatarUser4}
                        size="lg"
                        style={{flexBasis: '5%'}}
                      />
                      <div className="custom-text w-100">
                        <TextareaField
                          minRows={3}
                          maxLength={300}
                          name="content"
                          label=""
                          placeholder="Bạn đang nghĩ gì ..."
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="divider divider-center">
                      <div className="divider-text">
                        <CameraOff size={20} color="#ff6700 " />
                      </div>
                      <UploadImageField
                        height="150px"
                        name="image"
                        label=""
                        onChange={(name, value) => setFieldValue(name, value)}
                        // defaultInitValues={
                        //   setting?.pictures
                        //     ? typeof setting?.pictures[0] === 'object'
                        //       ? setting?.pictures.map(file =>
                        //           URL.createObjectURL(file),
                        //         )
                        //       : setting?.pictures
                        //     : []
                        // }
                        maxFile={4}
                        isMulti
                      />
                    </div>
                  </FormGroup>
                  {console.log('VALUES', values)}
                  <FormGroup>
                    <div className="text-right">
                      <Button.Ripple
                        color="primary"
                        className="mr-2"
                        onClick={async () => {
                          let {image} = values
                          // image = image.map(
                          //   ele => await uploadSingleImageService(ele, 'post'),
                          // )

                          console.log(values)

                          // let formData = new FormData()
                          // Object.keys(values).map((e, i) =>
                          //   formData.append(e, values[e]),
                          // )

                          // mutate(formData)
                        }}
                      >
                        Tạoo
                      </Button.Ripple>
                      <Button.Ripple
                        color="secondary"
                        type="button"
                        outline
                        onClick={() => setIsOpen(false)}
                      >
                        Hủy
                      </Button.Ripple>
                    </div>
                  </FormGroup>
                </Form>
              )}
            </Formik>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalAddPost
