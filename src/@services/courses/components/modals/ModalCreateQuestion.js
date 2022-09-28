import {
  Button,
  Col,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import {Plus, Trash, X} from 'react-feather'
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import PerfectScrollbar from 'react-perfect-scrollbar'
import React, {useState} from 'react'
import Repeater from '@core/components/repeater'

// ** component
import TextareaField from 'components/form/TextareaField'
import RadioField from 'components/form/RadioField'
import CheckboxField from 'components/form/CheckboxField'

const formSchema = Yup.object().shape({
  type_question: Yup.boolean()
    .required()
    .oneOf([2, 1], 'Bạn phải chọn hình thức câu hỏi'),
  content: Yup.string().required('Bạn phải nhập nội dung chính.'),
  link_document: Yup.string().url('Link chưa đúng định dạng.'),
})

const ModalCreateQuestion = ({modal, toggleModal}) => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('.row-repeat').remove()
  }

  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={toggleModal} />
  )

  return (
    <Formik
      initialValues={{
        type_question: '',
        content: '',
        type_answer: '',
      }}
      validationSchema={formSchema}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {({values, setFieldValue}) => (
        <Form>
          <Modal
            scrollable
            isOpen={modal}
            toggle={toggleModal}
            className="modal-dialog-centered modal-xl"
          >
            <ModalHeader toggle={toggleModal} close={CloseBtn}>
              Câu hỏi 4
            </ModalHeader>
            <PerfectScrollbar>
              <ModalBody>
                <FormGroup>
                  <span className="font-weight-bolder"> Dạng câu hỏi</span>
                  <div class="radio-list mt-3">
                    <label class="radio">
                      <input
                        type="radio"
                        onChange={() => setFieldValue('type_question', 1)}
                        name="type_question"
                      />
                      <span></span>Tự luận
                    </label>
                    <label class="radio">
                      <input
                        type="radio"
                        name="type_question"
                        onChange={() => setFieldValue('type_question', 2)}
                      />
                      <span></span>Nhiều lựa chọn
                    </label>
                  </div>

                  <ErrorMessage
                    name="type_question"
                    component="div"
                    className="field-error text-danger"
                  />
                </FormGroup>
                {values.type_question && (
                  <>
                    <hr />
                    <TextareaField
                      minRows={2}
                      name="question"
                      label="Câu hỏi"
                      placeholder="Nhập câu hỏi"
                      isRequired
                    />
                    <RadioField
                      list
                      name="type_answer"
                      label="Loại đáp án"
                      options={[
                        {
                          value: 'single_answer',
                          label: 'Một đáp án đúng',
                          checked: true,
                        },
                        {value: 'multi_answer', label: 'Nhiều đáp án đúng'},
                      ]}
                      // onChange={(name, value) => console.log(value)}
                    />
                  </>
                )}

                {values.type_question === 2 && (
                  <div>
                    <Row>
                      <Col lg="6">
                        <TextareaField
                          minRows={2}
                          name="answer"
                          label="Câu trả lời 1"
                          placeholder="Nhập câu trả lời"
                          isRequired
                        />

                        <TextareaField
                          minRows={2}
                          name="answer1"
                          label="Câu trả lời 2"
                          placeholder="Nhập câu trả lời"
                          isRequired
                        />
                        <Repeater count={count}>
                          {i => (
                            <Row className="row-repeat align-items-center">
                              <Col lg="10">
                                <TextareaField
                                  minRows={2}
                                  name={`answer${i + 3}`}
                                  label={`Câu trả lời ${i + 3}`}
                                  placeholder="Nhập câu trả lời"
                                />
                              </Col>
                              <Col md={2}>
                                <Button.Ripple
                                  color="danger"
                                  onClick={deleteForm}
                                  size="sm"
                                >
                                  <Trash size={18} />
                                </Button.Ripple>
                              </Col>
                            </Row>
                          )}
                        </Repeater>
                        <Button.Ripple color="warning" onClick={increaseCount}>
                          <Plus size={14} />
                          <span className="align-middle ml-1">
                            Thêm câu trả lời
                          </span>
                        </Button.Ripple>
                      </Col>
                      <Col lg="6">
                        <h4 className="text-center text-primary font-weight-bolder">
                          Xem trước
                        </h4>

                        <div className="mb-2">
                          <span className="text-primary">Câu hỏi 4:</span>
                          <span>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour
                          </span>
                          <div>
                            {values.type_answer === 'multi_answer' ? (
                              <CheckboxField
                                type="list"
                                name="test"
                                // outline
                                inline
                                options={[
                                  {value: 'A', label: 'Dolor'},
                                  {value: 'B', label: 'Nullum'},
                                ]}
                                onChange={(name, value) => console.log(value)}
                              />
                            ) : (
                              <RadioField
                                list
                                name="test"
                                options={[
                                  {value: 'A', label: 'Dolor'},
                                  {value: 'B', label: 'Nullum'},
                                ]}
                                onChange={(name, value) => console.log(value)}
                              />
                            )}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
              </ModalBody>
            </PerfectScrollbar>
            <ModalFooter>
              <Button.Ripple
                size="sm"
                type="submit"
                color="success"
                className="btn-next"
              >
                <span className="align-middle d-sm-inline-block d-none">
                  Tạo
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
          </Modal>
        </Form>
      )}
    </Formik>
  )
}

export default ModalCreateQuestion
