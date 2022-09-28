import {X} from 'react-feather'
import {
  Button,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'

import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {TwitterPicker} from 'react-color'
import PerfectScrollbar from 'react-perfect-scrollbar'

// *** Custom Components
import SelectField from 'components/form/SelectField'
import TextareaField from 'components/form/TextareaField'
import {useState} from 'react'

const formSchema = Yup.object().shape({
  leval: Yup.number().required('Required'),
  description: Yup.string().required('Required'),
})

const colourOptions = [
  {value: 1, label: 'Cấp FA'},
  {value: 2, label: 'Cấp AA'},
  {value: 3, label: 'Cấp BM'},
  {value: 4, label: 'Cấp PUM'},
]

const ModalAddLeval = ({modal, toggleModal}) => {
  const [color, setColor] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-md"
    >
      <Formik
        initialValues={{leval: '', description: ''}}
        validationSchema={formSchema}
      >
        {({isValid, setFieldValue, values, setFieldTouched}) => (
          <Form>
            <ModalHeader
              close={
                <X className="cursor-pointer" size={20} onClick={toggleModal} />
              }
              toggle={toggleModal}
            >
              <span className="text-primary">Thêm cấp thành viên</span>
            </ModalHeader>
            <ModalBody>
              <PerfectScrollbar>
                <div>
                  <SelectField
                    options={colourOptions}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    name="leval"
                    label="Tên cấp"
                    isRequired={true}
                    value={values.leval}
                  />
                  <TextareaField
                    label="Mô tả"
                    name="description"
                    // isRequired={true}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    value={values.description}
                    placeholder="Nhập mô tả"
                    rows={5}
                  />
                  <Label className="font-weight-bold text-dark">
                    {' '}
                    Chọn màu cấp
                  </Label>
                  <br />
                  <Button
                    className="text-white border w-25 py-5"
                    color="white"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{borderRadius: '1.5rem', background: color}}
                  ></Button>
                  {isOpen && (
                    <TwitterPicker
                      className="mt-3"
                      onChange={option => {
                        console.log(option.hex)
                        setColor(option.hex)
                      }}
                      onChangeComplete={() => setIsOpen(!isOpen)}
                    />
                  )}
                </div>
              </PerfectScrollbar>
            </ModalBody>
            <ModalFooter>
              <Row className="w-100">
                <Col lg="8">
                  <Button
                    color="primary"
                    size="sm"
                    disabled={!isValid}
                    type="submit"
                    block
                  >
                    Xác nhận
                  </Button>
                </Col>
                <Col lg="4">
                  <Button
                    size="sm"
                    color="secondary"
                    type="button"
                    onClick={toggleModal}
                    outline
                    block
                  >
                    Hủy
                  </Button>
                </Col>
              </Row>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default ModalAddLeval
