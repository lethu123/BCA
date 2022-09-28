import React, {useEffect, useState} from 'react'
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import {CameraOff, X, Globe, ChevronDown, Image} from 'react-feather'
import SmallSpinner from 'components/small-spinner'

// *** Mutation
import {PostMutation} from '@services/post'

//*** */ Form Field
import EditorField from 'components/form/EditorField'
import UploadImageField from 'components/form/UploadImageField'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'

// *** Services
import {uploadSingleImageService} from '@services/ultils'

// *** Styles ********************************
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@core/scss/react/libs/file-uploader/file-uploader.scss'
import '../../scss/ModalAddPost.style.scss'
import avatar from 'assets/images/avatars/avatar-blank.png'

const formSchema = Yup.object().shape({
  content: Yup.string().required('Bạn chưa nhập nội dung bài viết'),
})

const ModalAddPost = ({isOpen, setIsOpen, editData = null, groupId}) => {
  const userLogin =
    localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'))

  const [valueDropdown, setValueDropdown] = useState('Công khai')
  const [initialValue, setInitialValue] = useState({
    content: '',
    image: [],
  })
  const [isChooseImage, setIsChooseImage] = useState(false)

  // *** Mutation ********************************
  const {mutate, isSuccess} = PostMutation.useCreatePostByUser()
  const {mutate: dispatchUpdate, isSuccess: isSuccessUpdate} =
    PostMutation.useUpdatePostByUser()
  const [hasLoading, setHasLoading] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false)
      setHasLoading(false)
    }
    if (isSuccessUpdate) {
      setIsOpen(false)
      setHasLoading(false)
    }
  }, [isSuccess, isSuccessUpdate])

  useEffect(() => {
    if (isOpen) {
      if (editData) {
        setInitialValue({
          content: editData.content,
          image: editData.image?.map(url => ({data: url, name: url})),
        })
      } else {
        setInitialValue({
          content: '',
          image: [],
        })
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (initialValue.image.length > 0) {
      setIsChooseImage(true)
    }
  }, [initialValue])

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
          {editData ? 'Cập nhật' : 'Tạo'} bài viết
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          <div className="d-flex flex-column justify-content-center w-100">
            <Formik
              initialValues={initialValue}
              validationSchema={formSchema}
              enabledReinitial
            >
              {({values, setFieldValue}) => (
                <Form style={{flexBasis: '95%'}}>
                  <FormGroup className="modalAddPost">
                    <div>
                      <div className="d-flex align-items-center">
                        <img
                          alt="avatar"
                          src={(userLogin && userLogin.avatar_url) || avatar}
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            marginRight: 10,
                            objectFit: 'cover',
                          }}
                          onError={e => {
                            e.target.onerror = null
                            e.target.src = avatar
                          }}
                        />
                        <div className="customPost">
                          <p style={{fontSize: 17}} className="mb-0 ml-1">
                            {(userLogin && userLogin.username) || 'Admin'}
                          </p>
                          <UncontrolledButtonDropdown className="pl-0">
                            <DropdownToggle
                              color="flat-secondary"
                              className="p-1"
                            >
                              {valueDropdown === 'Công khai' && (
                                <Globe
                                  size={16}
                                  className="mr-1"
                                  color="#828783"
                                />
                              )}
                              <span style={{color: '#828783'}}>
                                {' '}
                                {valueDropdown}
                              </span>
                              <ChevronDown
                                className="ml-1"
                                size={17}
                                color="#828783"
                              />
                            </DropdownToggle>
                            {/* <DropdownMenu>
                              <DropdownItem
                                onClick={() => {
                                  setValueDropdown(
                                    valueDropdown === 'Công khai'
                                      ? 'Riêng tư'
                                      : 'Công khai',
                                  )
                                }}
                              >
                                {' '}
                                {valueDropdown === 'Công khai'
                                  ? 'Riêng tư'
                                  : 'Công khai'}
                              </DropdownItem>
                            </DropdownMenu> */}
                          </UncontrolledButtonDropdown>
                        </div>
                      </div>
                      <div className="custom-text w-100">
                        {/* <TextareaField
                          minRows={3}
                          name="content"
                          label=""
                          placeholder={`${
                            (userLogin && userLogin.username) || 'Admin'
                          } ơi, bạn đang nghĩ gì ...`}
                          style={{border: 'none'}}
                          limit={false}
                          // className="border-none"
                        /> */}

                        <EditorField
                          name="content"
                          label=""
                          data={values.content}
                          placeholder={`${
                            (userLogin && userLogin.username) || 'Admin'
                          } ơi, bạn đang nghĩ gì ...`}
                        />
                      </div>
                    </div>
                  </FormGroup>

                  {isChooseImage && (
                    <FormGroup>
                      <div className="divider divider-center position-relative">
                        <div className="divider-text">
                          <CameraOff size={20} color="#ff6700 " />
                        </div>
                        <UploadImageField
                          name="image"
                          label=""
                          maxFile={100}
                          isMulti
                          onChange={(name, value) => {
                            setFieldValue(name, value)
                          }}
                          files={values['image']}
                        />
                        <div style={{position: 'absolute', top: 27, right: 0}}>
                          <Button.Ripple
                            className="btn-icon rounded-circle"
                            color="warning"
                            onClick={() => setIsChooseImage(false)}
                          >
                            <X color="white" size={25} />
                          </Button.Ripple>
                        </div>
                      </div>
                    </FormGroup>
                  )}

                  <FormGroup>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 font-weight-bolder mr-3">
                        Thêm vào bài viết
                      </p>
                      <Button.Ripple
                        className="btn-icon"
                        outline
                        color="primary"
                        onClick={() => setIsChooseImage(status => !status)}
                      >
                        <Image className="cursor-pointer" />
                      </Button.Ripple>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className="text-right">
                      <Button.Ripple
                        color="primary"
                        className="mr-2"
                        onClick={async () => {
                          setHasLoading(true)
                          Promise.all(
                            values.image.map(ele =>
                              ele.data && ele.preview
                                ? uploadSingleImageService(ele.data)
                                : ele.data,
                            ),
                          ).then(result => {
                            values.image = result
                            if (!editData) {
                              mutate({
                                ...values,
                                user_id: userLogin.uid,
                                group_id: groupId,
                              })
                            } else {
                              dispatchUpdate({...values, id: editData._id})
                            }
                          })
                        }}
                      >
                        <SmallSpinner
                          text={editData ? 'Cập nhật' : 'Tạo'}
                          isLoading={hasLoading}
                        />
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
