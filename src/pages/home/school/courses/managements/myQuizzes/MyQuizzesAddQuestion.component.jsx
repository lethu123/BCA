import React, {useEffect, useState, forwardRef} from 'react'
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  CardBody,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Row,
  Col,
} from 'reactstrap'
import {
  ArrowLeft,
  HelpCircle,
  MoreHorizontal,
  MoreVertical,
  Trash2,
} from 'react-feather'

import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'
import DataTable from 'react-data-table-component'
import {Check, Edit2} from 'react-feather'
// import Checkbox from 'theme/components/@vuexy/checkbox/CheckboxesVuexy'
import MyQuizzesEditHeader from './MyQuizzesEditHeader.component'
import './MyQuizzes.style.scss'
import {useHistory, useParams} from 'react-router-dom'
// import {
//   createQuestionMyQuizzes,
//   getQuestionMyQuizzes,
//   deleteQuestionMyQuizzes,
//   updateQuestionMyQuizzes,
// } from 'redux/actions/hschools/courseAction'
import Select from 'react-select'
import {createSelector} from 'reselect'
// import {
//   deleteQuestionMyQuizzes,
//   updateQuestionMyQuizzes,
// } from 'theme/redux/actions/hschools/courseAction'

const listQuestion = createSelector(
  state => state.hSchool,
  course => course.listQuestionMyQuizzes,
)
const MyQuizzesAddQuestion = props => {
  const params = useParams()
  let history = useHistory()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getQuestionMyQuizzes())
  // }, [dispatch])

  const [detailUser, setDetailUser] = useState([])
  const listQuestions = useSelector(listQuestion)

  const [activeModal, setActiveModal] = useState(false)
  let toggleModalDetailUser = () => {
    setActiveModal(!activeModal)
  }
  const handleDetailUser = value => {
    if (listQuestions.length > 0) {
      let arrTmp = []
      listQuestions.forEach(item => {
        if (item.id === value.id) {
          arrTmp.push(item)
        }
      })
      setDetailUser(arrTmp)
      setActiveModal(true)
    }
  }

  const [modalState, setModalState] = useState(false)
  let toggleModal = () => {
    setModalState(!modalState)
  }

  const chooseIsCorrect = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
  ]

  const list = {
    columns: [
      {
        name: 'Question',
        selector: 'question',
        sortable: true,
        minWidth: '380px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 my-2">
            <p>{row.title}</p>
          </div>
        ),
      },
      {
        name: '1 - Option ',
        selector: 'a',
        sortable: true,
        width: '220px',
        cell: (row, index) => (
          <p className="text-bold-500 mb-0" style={{fontSize: '14px'}}>
            {row.answer_set ? row.answer_set[0].content : ''}
          </p>
        ),
      },
      {
        name: '2 - Option ',
        selector: 'b',
        sortable: true,
        width: '250px',

        cell: (row, index) => (
          <p className="text-bold-500 mb-0" style={{fontSize: '14px'}}>
            {row.answer_set ? row.answer_set[1].content : ''}
          </p>
        ),
      },

      {
        name: '3 - Option ',
        selector: 'c',
        sortable: true,
        width: '220px',
        cell: (row, index) => (
          <p className="text-bold-500 mb-0" style={{fontSize: '14px'}}>
            {row.answer_set ? row.answer_set[2].content : ''}
          </p>
        ),
      },
      {
        name: 'IsCorrect ',
        selector: 'answer',
        width: '100px',
        cell: (row, index) => (
          <p
            className="text-bold-500 mb-0"
            style={{fontSize: '14px', textTransform: 'uppercase'}}
          >
            {row.answer_set[0].is_correct
              ? '1'
              : row.answer_set[1].is_correct
              ? '2'
              : '3'}
          </p>
        ),
      },
      {
        name: 'User Detail',
        selector: '',
        cell: row => {
          return (
            <Button.Ripple
              className="bg-gradient-info"
              color="none"
              size="sm"
              onClick={() => handleDetailUser(row)}
            >
              <HelpCircle size={14} className="mr-25" />
              Detail
            </Button.Ripple>
          )
        },
      },

      {
        name: 'Action',
        selector: 'action',
        sortable: true,
        cell: row => {
          return (
            <UncontrolledButtonDropdown className="align-self-center float-right">
              <DropdownToggle
                tag="button"
                className="btn btn-link p-0 dropdown-toggle text-muted"
              >
                {/* <i className="uil uil-ellipsis-v"></i> */}
                <MoreVertical />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  className="editButtonMyQuizzes"
                  style={{background: 'none', outline: 'none'}}
                  onClick={() => handleEditQuestion(row)}
                >
                  <Edit2 size={15} style={{color: 'green'}} />
                  <span style={{color: 'green'}}> Edit</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  className="text-danger"
                  onClick={() => handleDeleteQuestion(row.id)}
                  style={{background: 'none', outline: 'none'}}
                >
                  <Trash2 size={16} style={{marginBottom: 4}} /> Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          )
        },
      },
    ],

    filteredData: [],
    value: '',
  }

  const [colums, setColums] = useState(list.columns)
  const [initialState, setInitialState] = useState({
    title: '',
    answer1: '',
    answer2: '',
    answer3: '',
    select: '',
  })
  const [infoEdit, setInfoEdit] = useState({})
  // const [valueEdit, setValueEdit] = useState({})

  const formSchema = Yup.object().shape({
    title: Yup.string().required('Title is equired!'),
    answer1: Yup.string().required('Title is equired!'),
    answer2: Yup.string().required('Title is equired!'),
    answer3: Yup.string().required('Title is equired!'),
    select: Yup.string().required('Title is equired!'),
  })
  const handleSubmit = values => {
    if (initialState.title.length === 0) {
      let itemAdd = {
        topic: parseInt(params.id),
        title: values.title,
        type: 1,
        answer_set: [
          {
            content: values.answer1,
            is_correct: values.select.value === '1' ? true : false,
          },
          {
            content: values.answer2,
            is_correct: values.select.value === '2' ? true : false,
          },
          {
            content: values.answer3,
            is_correct: values.select.value === '3' ? true : false,
          },
        ],
      }
      setModalState(false)
      // dispatch(createQuestionMyQuizzes(itemAdd))
    } else {
      let itemEdit = {
        id: infoEdit.id,
        topic: infoEdit.topic,
        type: infoEdit.type,
        title: values.title,
        answer_set: [
          {
            answer_id: infoEdit.answer_set[0].id,
            content: values.answer1,
            is_correct: values.select.value === '1' ? true : false,
          },
          {
            answer_id: infoEdit.answer_set[1].id,
            content: values.answer2,
            is_correct: values.select.value === '2' ? true : false,
          },
          {
            answer_id: infoEdit.answer_set[2].id,
            content: values.answer3,
            is_correct: values.select.value === '3' ? true : false,
          },
        ],
      }

      // dispatch(updateQuestionMyQuizzes(itemEdit, infoEdit.id))
      setModalState(false)
    }
  }
  const handleDeleteQuestion = id => {
    // dispatch(deleteQuestionMyQuizzes(id))
  }
  const handleEditQuestion = value => {
    setInitialState({
      title: value.title,
      answer1: value.answer_set[0].content,
      answer2: value.answer_set[1].content,
      answer3: value.answer_set[2].content,
      select: value.answer_set[0].is_correct
        ? '1'
        : value.answer_set[1].is_correct
        ? '2'
        : '3',
    })
    setInfoEdit(value)

    setModalState(!modalState)
    // setValueEdit(value)
  }
  // ** Bootstrap Checkbox Component
  const BootstrapCheckbox = forwardRef(({onClick, ...rest}, ref) => (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        ref={ref}
        {...rest}
      />
      <label className="custom-control-label" onClick={onClick} />
    </div>
  ))
  return (
    <div className="editQuestionMyQuizzes">
      <Card>
        <CardBody>
          <Row style={{justifyContent: 'space-between'}}>
            <h1>Add Question For Topic</h1>
            <Button.Ripple
              outline
              color="warning"
              onClick={() =>
                history.push('/hschool/course/dashboard/myquizzes')
              }
            >
              <ArrowLeft size={16} />
              Go Back
            </Button.Ripple>
          </Row>
          <DataTable
            className="dataTable-custom"
            data={
              listQuestions.length > 0 &&
              listQuestions.filter(item => item.topic === parseInt(params.id))
            }
            columns={colums}
            noHeader
            pagination
            subHeader
            subHeaderComponent={
              <MyQuizzesEditHeader
                setModalState={setModalState}
                setInitialState={setInitialState}
              />
            }
            selectableRows
            selectableRowsComponent={BootstrapCheckbox}
            selectableRowsComponentProps={{
              color: 'primary',
              icon: <Check className="vx-icon" size={12} />,
              label: '',
              size: 'sm',
            }}
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={modalState}
        toggle={() => toggleModal()}
        className="modal-dialog-centered  modal-lg"
      >
        <ModalHeader toggle={() => toggleModal()}>
          {initialState.title && initialState.title.length > 0
            ? 'Edit Question'
            : 'Add Question'}
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialState}
            validationSchema={formSchema}
            enableReinitialize={true}
            onSubmit={values => handleSubmit(values)}
          >
            {({
              values,
              isValid,
              isSubmitting,
              dirty,
              errors,
              touched,
              placeHolder,
              setFieldValue,
            }) => (
              <Form className="w-100">
                <Row>
                  <Col xl="6">
                    <FormGroup className="mb-1">
                      <Label for="data-name" className="text-bold-600">
                        Question
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Field
                        name="title"
                        id="title"
                        as="textarea"
                        rows="7"
                        className={`form-control ${
                          errors.title && touched.title && 'is-invalid'
                        }`}
                      />
                      {errors.title && touched.title ? (
                        <div className="text-danger mt-25">{errors.title}</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col xl="6">
                    <FormGroup className="mb-1">
                      <Label for="data-name" className="text-bold-600">
                        1 - Option
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Field
                        name="answer1"
                        id="answer1"
                        as="textarea"
                        rows="2"
                        className={`form-control ${
                          errors.answer1 && touched.answer1 && 'is-invalid'
                        }`}
                      />
                      {errors.answer1 && touched.answer1 ? (
                        <div className="text-danger mt-25">
                          {errors.answer1}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="mb-1">
                      <Label for="data-name" className="text-bold-600">
                        2 - Option
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Field
                        name="answer2"
                        id="answer2"
                        as="textarea"
                        rows="2"
                        className={`form-control ${
                          errors.answer2 && touched.answer2 && 'is-invalid'
                        }`}
                      />
                      {errors.answer2 && touched.answer2 ? (
                        <div className="text-danger mt-25">
                          {errors.answer2}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="mb-1">
                      <Label for="data-name" className="text-bold-600">
                        3 - Option
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Field
                        name="answer3"
                        id="answer3"
                        as="textarea"
                        rows="2"
                        className={`form-control ${
                          errors.answer3 && touched.answer3 && 'is-invalid'
                        }`}
                      />
                      {errors.answer3 && touched.answer3 ? (
                        <div className="text-danger mt-25">
                          {errors.answer3}
                        </div>
                      ) : null}
                    </FormGroup>

                    <FormGroup className="mb-1">
                      <Label for="data-name" className="text-bold-600">
                        IsCorrect
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>

                      <Select
                        className="React"
                        classNamePrefix="select"
                        // value={values.select}
                        defaultInputValue={initialState.select}
                        placeholder="Choose answer is correct ... "
                        name="select"
                        options={chooseIsCorrect}
                        onChange={option => {
                          setFieldValue('select', option)
                        }}
                        style={{color: 'black'}}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup className="my-2 text-right">
                  <Button
                    color="primary"
                    type="submit"
                    className="mr-1"
                    disabled={
                      values.select === 0 ||
                      values.title.length === 0 ||
                      values.answer2 === 0 ||
                      values.answer3 === 0
                    }
                  >
                    <span>
                      {initialState.title && initialState.title.length > 0
                        ? 'Edit '
                        : 'Add'}
                    </span>
                  </Button>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={activeModal}
        toggle={() => toggleModalDetailUser()}
        className="modal-dialog-centered  modal-md"
      >
        <ModalHeader toggle={() => toggleModalDetailUser()}>
          List User Answer
        </ModalHeader>
        <ModalBody>
          {detailUser.length > 0 && detailUser[0].user_answer.length > 0 ? (
            <ol>
              {detailUser[0].user_answer.map((item, index) => (
                <li key={index}>{item.username}</li>
              ))}
            </ol>
          ) : (
            'Chưa có user trả lời câu hỏi này'
          )}
        </ModalBody>
      </Modal>
    </div>
  )
}

export default MyQuizzesAddQuestion
