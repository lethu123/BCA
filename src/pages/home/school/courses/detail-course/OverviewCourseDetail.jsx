import React from 'react'
import classnames from 'classnames'
import {ListGroup, ListGroupItem} from 'reactstrap'
import parse from 'html-react-parser'
const OverviewCourseDetail = ({
  activeTab,
  title,
  careerOrientation,
  courseFor,
  benefits,
}) => {
  return (
    <div
      className={classnames('tab-pane ', {
        'show active': activeTab === 1,
      })}
      role="tabpanel"
      id="overview"
    >
      <h4 className="course-details__list-title">
        {`Why Enroll For ${title} Course?`}
      </h4>

      <h5 className="course-details__tab-text">{parse(careerOrientation)}</h5>
      <br />
      <h4 className="course-details__list-title">Who Is This Course For?</h4>

      <p className="course-details__tab-text">
        Participants by job function include:
      </p>

      <ListGroup flush>
        {courseFor.length > 0 &&
          courseFor.map(ele => (
            <ListGroupItem key={ele.id}>{ele.name}</ListGroupItem>
          ))}
      </ListGroup>
      <br />
      <h4 className="course-details__list-title">Benefits?</h4>
      <ListGroup flush>
        {benefits.length > 0 &&
          benefits.map(ele => (
            <ListGroupItem key={ele.id}>{ele.content}</ListGroupItem>
          ))}
      </ListGroup>
    </div>
  )
}

export default OverviewCourseDetail
