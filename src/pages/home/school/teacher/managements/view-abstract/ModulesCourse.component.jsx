import React, {useState} from 'react'
import classnames from 'classnames'

import {ChevronDown} from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  UncontrolledCollapse,
  CardBody,
  CardText,
} from 'reactstrap'

const lessons = [
  {id: 1, name: 'Module 1', lessons: [{id: 1, title: 'lesson 1'}]},
  {id: 2, name: 'Module 2', lessons: [{id: 2, title: 'lesson 2'}]},
]
const ModulesCourse = () => {
  const [collapse, setCollapse] = useState({
    collapseItems: [],
    status: 'Closed',
  })
  const toggleCollapse = collapseID => {
    let index = collapse.collapseItems.indexOf(collapseID)
    if (index >= 0) {
      let items = collapse.collapseItems
      items.splice(index, index + 1)
      setCollapse({...collapse, collapseItems: items})
    } else {
      let items = collapse.collapseItems
      items.push(collapseID)
      setCollapse({...collapse, collapseItems: items})
    }
  }

  return (
    <div>
      <CardText> All Modules of Course</CardText>
      <div className="vx-collapse collapse-bordered">
        {lessons &&
          lessons.length > 0 &&
          lessons.map((collapseItem, index) => (
            <Card
              key={collapseItem.id}
              onClick={() => toggleCollapse(collapseItem.id)}
              className="mb-1"
            >
              <CardHeader
                className="justify-content-start"
                id={`item${collapseItem.id}`}
              >
                <ChevronDown
                  size={15}
                  className="collapse-icon mr-1 text-success"
                />
                <CardTitle className="lead collapse-title collapsed my-1">
                  <h5 className="course-details__tab-title">
                    Modules {index + 1}: {collapseItem.name}
                  </h5>
                </CardTitle>
              </CardHeader>
              <UncontrolledCollapse toggler={`#item${collapseItem.id}`}>
                <CardBody>
                  {collapseItem['lessons'].map((e, index) => (
                    <ul
                      key={index}
                      className="course-details__curriculum-list list-unstyled"
                    >
                      <li className="px-2 py-1">
                        <div className="course-details__curriculum-list-left">
                          <div className="course-details__meta-icon video-icon">
                            <i className="fas fa-play"></i>
                          </div>
                          <a href="#none">{e.title}</a>{' '}
                          <span>{index < 3 && 'Preview'}</span>
                        </div>
                        <div className="course-details__curriculum-list-right">
                          {e.duration} minutes
                        </div>
                      </li>
                    </ul>
                  ))}
                  <ul className="course-details__curriculum-list list-unstyled mt-2 mx-2">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Quiz</a>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        6 questions
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </UncontrolledCollapse>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default ModulesCourse
