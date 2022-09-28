import React, {useState} from 'react'
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  Media,
  Spinner,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
} from 'reactstrap'
import classnames from 'classnames'
import noAvatar from 'assets/images/pages/users/default.png'
import {Flag, Plus, X} from 'react-feather'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import {selectCourseFQAs} from 'redux/reselects/hschools/course.reselect'
import parse from 'html-react-parser'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import '@core/scss/react/libs/editor/editor.scss'
import {Editor} from 'react-draft-wysiwyg'
import {EditorState, convertToRaw} from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import {
  createReplyQuestion,
  deleteQuestionOrReply,
} from 'redux/actions/hschools/courseAction'
import {ToastContainer} from 'react-toastify'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const FaQDetailCourseCardCollapse = () => {
  const [openCollapse, setOpenCollapse] = useState(true)
  const dispatch = useDispatch()
  const [modalAddReplyFQA, setModalAddReplyFQA] = useState(false)
  const courseFQAs = useSelector(selectCourseFQAs)
  const userInfo = JSON.parse(localStorage.getItem('userData'))
  const [reply, setReply] = useState(EditorState.createEmpty())
  const [idQuestion, setIdQuestion] = useState(null)

  // ** Function to handle Collapse Toggle
  const handleCollapseToggle = id => {
    if (id === openCollapse) {
      setOpenCollapse(null)
    } else {
      setOpenCollapse(id)
    }
  }

  const toggleModalAddReplyFQA = () => {
    setModalAddReplyFQA(!modalAddReplyFQA)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (idQuestion)
      dispatch(
        createReplyQuestion(
          idQuestion,
          draftToHtml(convertToRaw(reply.getCurrentContent())),
        ),
      )
    setReply(EditorState.createEmpty())
    toggleModalAddReplyFQA()
  }

  const handleDelete = (id, questionId = null) => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1',
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        dispatch(deleteQuestionOrReply(id, questionId))
      }
    })
  }

  if (!courseFQAs) return <Spinner />
  return (
    <React.Fragment>
      <div
        className="collapse-icon collapse-shadow"
        style={{boxShadow: 'none'}}
      >
        {courseFQAs.map((collapseItem, index) => (
          <Card
            key={index}
            className={classnames('app-collapse', {
              open: openCollapse === index,
            })}
            style={{boxShadow: '0px 0px 8px 0px rgba(34, 41, 47, 0.1)'}}
          >
            <CardHeader
              className={classnames('align-items-center', {
                collapsed: openCollapse !== index,
              })}
              /*eslint-disable */
              onClick={() => handleCollapseToggle(index)}
              /*eslint-enable */
            >
              <CardTitle
                style={{maxWidth: '100%'}}
                className="collapse-title w-100"
              >
                <ListGroup>
                  <ListGroupItem className="d-lg-flex justify-content-between align-items-center py-1 border-0">
                    <div className="float-left">
                      <Media>
                        <Media left href="#">
                          <Media
                            className="rounded-circle mr-1"
                            object
                            src={
                              collapseItem.user_info.picture
                                ? collapseItem.user_info.picture
                                : noAvatar
                            }
                            height="40"
                            width="40"
                            alt="Generic placeholder image"
                          />
                        </Media>
                        <Media body>
                          <Media className="font-weight-bolder text-black">
                            {collapseItem.user_info.username}
                          </Media>
                          <span>{parse(collapseItem.content)}</span>
                          <Media className="mt-1">
                            <small>
                              <i>
                                --{' '}
                                {moment(collapseItem.date_created).format(
                                  'LLL',
                                )}
                              </i>
                            </small>
                          </Media>
                        </Media>
                      </Media>
                    </div>
                    <div
                      className="float-right ml-1"
                      style={{minWidth: '95px'}}
                    >
                      <Button
                        color="primary"
                        outline
                        className="btn-icon rounded-circle mr-50"
                        size="sm"
                        onClick={() => {
                          toggleModalAddReplyFQA()
                          setIdQuestion(collapseItem.id)
                        }}
                      >
                        <Plus size="15" />
                      </Button>
                      {userInfo.id === collapseItem.user_info.id ? (
                        <Button
                          color="primary"
                          outline
                          className="btn-icon rounded-circle mr-50"
                          size="sm"
                          onClick={() => handleDelete(collapseItem.id)}
                        >
                          <X size="15" />
                        </Button>
                      ) : (
                        <Button
                          color="primary"
                          outline
                          className="btn-icon rounded-circle mr-50"
                          size="sm"
                        >
                          <Flag size="15" />
                        </Button>
                      )}
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardTitle>
            </CardHeader>
            <Collapse isOpen={openCollapse === index}>
              <CardBody>
                <CardBody>
                  <div
                    className="media-list media-bordered"
                    style={{marginLeft: '35px', marginTop: '-30px'}}
                  >
                    {collapseItem.reply_info.map((repEle, index) => (
                      <Media key={index}>
                        <Media left href="#">
                          <Media
                            object
                            src={
                              repEle.user_info.picture
                                ? repEle.user_info.picture
                                : noAvatar
                            }
                            height="40"
                            width="40"
                            alt="Generic placeholder image"
                          />
                        </Media>
                        <Media body>
                          <Media
                            heading
                            style={{fontSize: '1rem', fontWeight: 'bold'}}
                          >
                            {repEle.user_info.username}
                          </Media>
                          <small>{parse(repEle.content)}</small>
                        </Media>
                        <div>
                          {userInfo.id === repEle.user_info.id ? (
                            <Button
                              color="flat-primary"
                              className="btn-icon rounded-circle mr-25"
                              size="sm"
                              onClick={() =>
                                handleDelete(repEle.id, collapseItem.id)
                              }
                            >
                              <X size="17" />
                            </Button>
                          ) : (
                            <Button
                              color="flat-primary"
                              className="btn-icon rounded-circle mr-25"
                              size="sm"
                            >
                              <Flag size="17" />
                            </Button>
                          )}
                        </div>
                      </Media>
                    ))}
                  </div>
                </CardBody>
              </CardBody>
            </Collapse>
          </Card>
        ))}
      </div>
      {/* ================== MODAL =================== */}
      <Modal
        isOpen={modalAddReplyFQA}
        toggle={toggleModalAddReplyFQA}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={toggleModalAddReplyFQA} className="bg-primary">
          Create Reply Question
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          <FormGroup>
            <Label for="data-about" className="text-bold-600">
              Reply Question
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Editor
              editorState={reply}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={e => {
                setReply(e)
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
              draftToHtml(convertToRaw(reply.getCurrentContent())).length > 8
                ? false
                : true
            }
            color="primary"
            className="mr-1"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button color="light" onClick={toggleModalAddReplyFQA}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <ToastContainer />
    </React.Fragment>
  )
}
export default FaQDetailCourseCardCollapse
