import React, {useEffect, useState} from 'react'
import classnames from 'classnames'
import {
  CardHeader,
  Button,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
} from 'reactstrap'
import FaQDetailCourseCardCollapse from './FaQDetailCourseCardCollapse'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import '@core/scss/react/libs/editor/editor.scss'
import {Editor} from 'react-draft-wysiwyg'
import {EditorState, convertToRaw} from 'draft-js'
import draftToHtml from 'draftjs-to-html'

// import 'theme/assets/scss/pages/card-analytics.scss'
import './DetailCourse.style.scss'
import {
  createQuestionForInstructor,
  getCourseFQAs,
} from 'redux/actions/hschools/courseAction'
import {useDispatch, useSelector} from 'react-redux'
import {selectCourseFQAs} from 'redux/reselects/hschools/course.reselect'
import {ToastContainer} from 'react-toastify'

const FaQDetailCourse = ({activeTab, course}) => {
  const dispatch = useDispatch()
  const courseFQAs = useSelector(selectCourseFQAs)
  const [modalAddFQA, setModalAddFQA] = useState(false)
  const [question, setQuestion] = useState(EditorState.createEmpty())
  useEffect(() => {
    if (course) dispatch(getCourseFQAs(course.id))
  }, [dispatch, course])

  const toggleModalAddFQA = () => {
    setModalAddFQA(!modalAddFQA)
  }
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      createQuestionForInstructor(
        course.id,
        draftToHtml(convertToRaw(question.getCurrentContent())),
      ),
    )
    setQuestion(EditorState.createEmpty())
    toggleModalAddFQA()
  }

  if (!courseFQAs) return <Spinner />
  return (
    <div
      className={classnames('tab-pane animated fadeInUp fqa-component', {
        'show active': activeTab === 4,
      })}
      role="tabpanel"
      id="faq"
    >
      <CardHeader className=" pb-1">
        <div className="tasks-info">
          <p className="mb-75">
            <strong>1 Questions in this course </strong>out of 10
          </p>
        </div>
        <Button.Ripple
          className="mr-1 mb-1 bg-gradient-info"
          color="none"
          onClick={toggleModalAddFQA}
        >
          Add a new question
        </Button.Ripple>
      </CardHeader>

      <FaQDetailCourseCardCollapse />

      {/* ================== MODAL =================== */}
      <Modal
        isOpen={modalAddFQA}
        toggle={toggleModalAddFQA}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={toggleModalAddFQA} className="bg-primary">
          Add Question for Instructor
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          <FormGroup>
            <Label for="data-about" className="text-bold-600">
              Question
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Editor
              editorState={question}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={e => {
                setQuestion(e)
              }}
              toolbar={{
                inline: {inDropdown: true},
                list: {inDropdown: true},
                textAlign: {inDropdown: true},
                link: {inDropdown: true},
                history: {inDropdown: true},
              }}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={
              draftToHtml(convertToRaw(question.getCurrentContent())).length > 8
                ? false
                : true
            }
            color="primary"
            className="mr-1"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button color="light" onClick={toggleModalAddFQA}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <ToastContainer />
    </div>
  )
}

export default FaQDetailCourse
