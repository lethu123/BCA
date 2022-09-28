import React, {useState} from 'react'
import {Save, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Media,
  Input,
} from 'reactstrap'
// *** Third Libary
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

// *** components
import RadioField from 'components/form/RadioField'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {uploadMedia} from '@services/ultils'
import {NotificationMutation} from '@services/notification'

const ModalAddNotification = ({centeredModal, setCenteredModal}) => {
  let initialState = {
    title: '',
    description: '',
    picture: null,
    target_role: 'ALL',
  }

  const [avatar, setAvatar] = useState(null)
  const formSchema = Yup.object().shape({
    title: Yup.string().required('Bạn phải nhập tiêu đề'),
    description: Yup.string().required('Bạn phải nhập nội dung '),
  })

  const {mutate: createConfigNoti} = NotificationMutation.useCreateConfigNoti()

  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )

  const onChange = (e, setFieldValue) => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    setFieldValue('picture', files[0])
    reader.readAsDataURL(files[0])
  }
  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg"
      >
        <Formik
          initialValues={initialState}
          enableReinitialize={true}
          validationSchema={formSchema}
          onSubmit={async values => {
            const dataSubmit = {
              ...values,
            }
            if (values.picture) {
              dataSubmit.picture = await uploadMedia(values.picture)
            }
            createConfigNoti(dataSubmit)
            setCenteredModal(!centeredModal)
          }}
        >
          {({values, setFieldValue, errors}) => (
            <Form>
              <ModalHeader
                close={CloseBtn}
                toggle={() => setCenteredModal(!centeredModal)}
              >
                Tạo thông báo mới
              </ModalHeader>
              <ModalBody>
                <PerfectScrollbar>
                  <FormGroup className="uploadImageNotification">
                    <div style={{display: 'inline-block'}}>
                      <Media>
                        {avatar && (
                          <Media className="mr-1" left>
                            <Media
                              object
                              className="rounded mr-50"
                              src={avatar}
                              alt="Generic placeholder image"
                              height="80"
                              width="80"
                            />
                          </Media>
                        )}
                        <Media className="mt-75" body>
                          <Button.Ripple
                            tag={Label}
                            className="mr-75"
                            size="sm"
                            color="primary"
                          >
                            Upload
                            <Input
                              type="file"
                              onChange={e => onChange(e, setFieldValue)}
                              hidden
                              accept="image/*"
                            />
                          </Button.Ripple>
                          <Button.Ripple
                            onClick={() => {
                              setFieldValue('picture', null)
                              setAvatar(null)
                            }}
                            color="secondary"
                            size="sm"
                            outline
                          >
                            Reset
                          </Button.Ripple>
                          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
                        </Media>
                      </Media>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label className="mb-0 font-weight-bolder">
                      Danh mục <span style={{color: 'red'}}>*</span>
                    </Label>
                    <div>
                      <RadioField
                        name="target_role"
                        inline
                        options={[
                          {
                            value: 'ALL',
                            label: 'Tất cả',
                            checked: true,
                          },
                          {
                            value: 'ADMIN',
                            label: 'Admin',
                          },
                          {
                            value: 'PARTNER',
                            label: 'Đối tác',
                          },
                        ]}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="text"
                      name="title"
                      size="lg"
                      label="Tiêu đề"
                      placeholder="Tiêu đề thông báo"
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextareaField
                      name="description"
                      maxLength={20}
                      rows={4}
                      label="Nội dung thông báo"
                      placeholder="Nhập toàn bộ nội dung thông báo ..."
                      // isRequired
                    />
                  </FormGroup>
                </PerfectScrollbar>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary">
                  <Save size={16} /> Tạo
                </Button>{' '}
                <Button
                  type="button"
                  color="secondary"
                  onClick={() => setCenteredModal(!centeredModal)}
                >
                  Hủy
                </Button>{' '}
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

export default ModalAddNotification
