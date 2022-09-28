import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Col, Row} from 'reactstrap'
import {getListCourseAnnouncementPublic} from 'redux/actions/hschools/courseAction'
import {createSelector} from 'reselect'
import parse from 'html-react-parser'

const selectListAnnouncement = createSelector(
  state => state.hSchool,
  course => course.listAnnouncementPublic,
)
const Announcement = ({idCourse}) => {
  const dispatch = useDispatch()
  const listAnnouncementPublic = useSelector(selectListAnnouncement)
  console.log(listAnnouncementPublic)
  useEffect(() => {
    dispatch(getListCourseAnnouncementPublic(idCourse))
  }, [dispatch, idCourse])
  return (
    listAnnouncementPublic.length > 0 &&
    listAnnouncementPublic.map(item => {
      return (
        <Row>
          <Col lg={10} sm={12} className="m-auto mt-3">
            <div className="list-comment font-size-17">
              <div className="d-flex justify-content-start align-items-center mb-1 ">
                <div className="avatar mr-50">
                  <img
                    src={item.user_info.picture}
                    alt="Avatar"
                    height="60"
                    width="60"
                  />
                </div>
                <div className="user-page-info ">
                  <h6 className="mb-0 font-size-16 font-weight-bold ">
                    {item.user_info.username}
                  </h6>
                  <span className="font-small-2 font-size-16">
                    {item.course_info.title}
                  </span>
                </div>
              </div>
            </div>
            <div className="content-announce">
              <h3 className="font-weight-bold">{item.title}</h3>
              <p>{parse(item.content)}</p>
            </div>
            {/* <div className="list-comment font-size-17">
              <div className="d-flex justify-content-start align-items-center mb-1 ">
                <div className="avatar mr-50">
                  <img
                    src={item.user_info.picture}
                    alt="Avatar"
                    height="50"
                    width="50"
                  />
                </div>
                <div
                  className="user-page-info ml-1 "
                  style={{flexBasis: '100%'}}
                >
                  <Input type="text" placeholder="comment" />
                </div>
              </div>
            </div> */}
          </Col>
        </Row>
      )
    })
  )
}

export default Announcement
