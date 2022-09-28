import React, {useEffect, useState} from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Collapse,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Alert,
} from 'reactstrap'
import classnames from 'classnames'
import parse from 'html-react-parser'
import './Announcement.style.scss'

import {ChevronDown, Edit2} from 'react-feather'
import AnnouncementEdit from './AnnouncementEdit.component'
// import {selectDetailCourse} from 'redux/reselects/hschools/course.reselect'
import {useDispatch, useSelector} from 'react-redux'
import {createSelector} from 'reselect'
// import {
//   getListCourseAnnouncement,
//   deleteCourseAnnouncement,
//   createCourseAnnouncement,
// } from 'redux/actions/hschools/courseAction'

// Select
const selectListAnnouncement = createSelector(
  state => state.hSchool,
  course => course.listCourseAnnouncement,
)
const AnnouncesClass = () => {
  const dispatch = useDispatch()
  // const course = useSelector(state => selectDetailCourse(state))
  const listAnnouncement = useSelector(selectListAnnouncement)
  // useEffect(() => {
  //   if (course) {
  //     dispatch(getListCourseAnnouncement(course.id))
  //   }
  // }, [dispatch, course])

  const [state, setState] = useState({
    collapse: true,
    reload: false,
    isVisible: true,
    status: 'Opened',
    isVisibleAll: true,
    reloadAll: false,
    collapseAll: true,
    statusAll: 'Opened',
    collapseId: null,
    isOpen: false,
  })
  const [openForm, setOpenForm] = useState(false)
  const [editValue, setEditValue] = useState(null)

  const handleEdit = value => {
    setOpenForm(true)
    setEditValue(value)
  }

  const handleCreate = () => {
    setEditValue(null)
    setOpenForm(true)
  }

  const hanldeDeleteAnnouncement = id => {
    // dispatch(deleteCourseAnnouncement(id))
  }
  const handleClickActive = value => {
    let data = {
      course_id: value.course_info.id,
      title: value.title,
      content: value.content,
      public: true,
    }
    // dispatch(createCourseAnnouncement(data, value.id))
  }
  const handleClickInActive = value => {
    let data = {
      course_id: value.course_info.id,
      title: value.title,
      content: value.content,
      public: false,
    }
    // dispatch(createCourseAnnouncement(data, value.id))
  }
  return (
    <div>
      {!openForm ? (
        <div style={{maxHeight: '1000px', overflowY: 'scroll'}}>
          <Alert color="primary">
            <div className="alert-body">
              <span className="font-weight-bold">
                Chỉ có giảng viên đc tạo thông báo, học viên đc đọc thông báo!
              </span>
            </div>
          </Alert>
          <Row className="mx-0">
            <Button.Ripple outline color="primary" onClick={handleCreate}>
              Add Announcement
            </Button.Ripple>
          </Row>
          <Row className="mx-0 mt-2">
            {listAnnouncement.length > 0 &&
              listAnnouncement.map(ele => {
                return (
                  <Col lg="4" key={ele.id} className="vx-collapse pl-0">
                    <Card
                      className={classnames('card-action card-reload ', {
                        refreshing: state.reloadAll,
                        'card-collapsed':
                          state.collapseId === ele.id && state.isOpen,
                        closing: state.collapseId === ele.id && state.isOpen,
                        opening: state.collapseId === ele.id && state.isOpen,
                      })}
                    >
                      <CardHeader>
                        <Row className="mx-0 w-100 justify-content-between">
                          <div className="d-flex align-items-center">
                            <img
                              className="img-fluid rounded-circle mr-1"
                              height="50"
                              width="50"
                              src={ele.user_info.picture}
                              alt=""
                            ></img>
                            <div>
                              <h5
                                className="mb-0"
                                style={{
                                  paddingBottom: '5px',
                                  fontWeight: 'bold',
                                }}
                              >
                                {ele.user_info.username}
                              </h5>
                              <p
                                style={{
                                  color: '#ff6700',
                                  marginBottom: 0,
                                }}
                              >
                                {ele.course_info.title}
                              </p>
                            </div>
                          </div>
                          <UncontrolledButtonDropdown className="align-self-center float-right">
                            <DropdownToggle
                              tag="button"
                              className="btn btn-link p-0 dropdown-toggle text-muted mt-1"
                            >
                              <i className="uil uil-ellipsis-v"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                              <div>
                                <DropdownItem onClick={() => handleEdit(ele)}>
                                  <Edit2 className="mr-50" size={16} /> Edit
                                </DropdownItem>
                              </div>

                              <DropdownItem divider />
                              <DropdownItem className="text-danger">
                                <div
                                  onClick={() =>
                                    hanldeDeleteAnnouncement(ele.id)
                                  }
                                >
                                  <i className="uil uil-trash mr-50"></i>Delete
                                </div>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                        </Row>

                        <Row
                          className=" align-items-center mx-0 w-100 justify-content-between"
                          onClick={() =>
                            setState({
                              collapseId: ele.id,
                              isOpen: !state.isOpen,
                            })
                          }
                        >
                          <h5 className="mt-1 mb-0 mr-1">{ele.title}</h5>
                          <div className="mt-1">
                            <ChevronDown size={15} className="collapse-icon" />
                          </div>
                        </Row>
                      </CardHeader>
                      <Collapse
                        isOpen={state.collapseId === ele.id && state.isOpen}
                      >
                        <CardBody className="pt-0 imageEditor">
                          <p>{parse(ele.content)}</p>
                          <div className="text-right">
                            <Button.Ripple
                              outline
                              color="success"
                              className="mr-1"
                              disabled={ele.public ? true : false}
                              style={
                                ele.public
                                  ? {
                                      cursor: 'not-allowed',
                                    }
                                  : {cursor: 'pointer'}
                              }
                              onClick={() => handleClickActive(ele)}
                            >
                              Active
                            </Button.Ripple>
                            <Button.Ripple
                              outline
                              color="danger"
                              disabled={ele.public ? false : true}
                              style={
                                !ele.public
                                  ? {
                                      cursor: 'not-allowed',
                                    }
                                  : {cursor: 'pointer'}
                              }
                              onClick={() => handleClickInActive(ele)}
                            >
                              InActive
                            </Button.Ripple>
                          </div>
                        </CardBody>
                      </Collapse>
                    </Card>
                  </Col>
                )
              })}
          </Row>
        </div>
      ) : (
        <AnnouncementEdit
          editValue={editValue}
          setOpenForm={setOpenForm}
          // course={course}
          course={''}
        />
      )}
    </div>
  )
}

export default AnnouncesClass
