import {
  Button,
  Col,
  CustomInput,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import {Plus, X} from 'react-feather'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import ReactPlayer from 'react-player'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {useState} from 'react'

// ** component
import TextField from 'components/form/TextField'
import EditorField from 'components/form/EditorField'
import TextareaField from 'components/form/TextareaField'
import UploadFile from 'components/form/UploadFile'

const formSchema = Yup.object().shape({
  title: Yup.string().required('Bạn phải nhập tên bài học.'),
  content: Yup.string().required('Bạn phải nhập nội dung chính.'),
  link_document: Yup.string().url('Link chưa đúng định dạng.'),
})

const ModalCreateLesson = ({modal, toggleModal}) => {
  const [source, setSource] = useState()

  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={toggleModal} />
  )

  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-xl"
    >
      <ModalHeader toggle={toggleModal} close={CloseBtn}>
        Tạo Khóa học
      </ModalHeader>
      {/* <ModalBody></ModalBody> */}
      <PerfectScrollbar>
        <Formik
          initialValues={{
            title: '',
            content: '',
            document: '',
            link_document: '',
            link_lesson: '',
            file_video: '',
          }}
          validationSchema={formSchema}
          onSubmit={values => {
            console.log(values)
          }}
        >
          {({values, setFieldValue}) => (
            <Form>
              <ModalBody>
                <TextField
                  type="text"
                  name="title"
                  label="Tên bài học"
                  placeholder="Nhập tên bài học"
                  isRequired
                />
                <EditorField
                  name="content"
                  label="Nhập nội dung chính"
                  isRequired
                />
                <Row>
                  <Col lg="6">
                    <UploadFile
                      name="document"
                      label="File đính kèm"
                      onChange={(name, value) => setFieldValue(name, value)}
                    />
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label>Upload video</Label>
                      <CustomInput
                        type="file"
                        name="file_video"
                        onChange={e => {
                          const file = e.target.files[0]
                          setFieldValue('file_video', e.target.files[0])
                          const url = URL.createObjectURL(file)
                          setSource(url)
                        }}
                        accept=".mp4"
                      />
                    </FormGroup>

                    {source && (
                      <ReactPlayer
                        url={source}
                        className="react-player-audio rounded overflow-hidden"
                        width="100%"
                        height="290px"
                        controls
                      />
                    )}
                  </Col>
                </Row>
                <TextareaField
                  minRows={2}
                  name="link_document"
                  label="Tài liệu tham khảo"
                  placeholder="Nhập link tài liệu tham khảo"
                />
                <TextField
                  type="text"
                  name="link_lesson"
                  label="Link bài học"
                  placeholder="Nhập link bài học"
                />

                {values.link_lesson && (
                  <ReactPlayer
                    url={values.link_lesson}
                    className="react-player-video my-2 rounded overflow-hidden mx-auto"
                    width="100%"
                    height="400px"
                    controls={true}
                  />
                )}
                <FormGroup>
                  <Label>Mini test</Label>
                  <Button.Ripple
                    className="btn-icon round ml-3"
                    size="sm"
                    color="danger"
                  >
                    <Plus size={16} />
                  </Button.Ripple>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button.Ripple
                  size="sm"
                  type="submit"
                  color="success"
                  className="btn-next"
                >
                  <span className="align-middle d-sm-inline-block d-none">
                    Tạo bài học
                  </span>
                </Button.Ripple>
                <Button.Ripple
                  size="sm"
                  type="button"
                  color="danger"
                  className="btn-next ml-3"
                  onClick={toggleModal}
                >
                  <span className="align-middle d-sm-inline-block d-none">
                    Hủy
                  </span>
                </Button.Ripple>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </PerfectScrollbar>
    </Modal>
  )
}

export default ModalCreateLesson
