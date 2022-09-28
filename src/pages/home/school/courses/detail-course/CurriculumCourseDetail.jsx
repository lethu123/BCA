import React, {useState} from 'react'
import classnames from 'classnames'

// import StatisticsCard from 'theme/components/@vuexy/statisticsCard/StatisticsCard'
// import {ChevronDown, FileText, ShoppingBag} from 'react-feather'
import {ChevronDown} from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  UncontrolledCollapse,
  CardBody,
} from 'reactstrap'

const CurriculumCourseDetail = ({activeTab, lessons, timeHour}) => {
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
    <div
      className={classnames('tab-pane animated fadeInUp', {
        'show active': activeTab === 2,
      })}
      role="tabpanel"
      id="curriculum"
    >
      {/* <Row>
        <Col lg="4" sm="6">
          <StatisticsCard
            hideChart
            iconBg="primary"
            icon={<ShoppingBag className="primary" size={22} />}
            stat={lessons.length}
            statTitle="Modules"
          />
        </Col>
        <Col lg="4" sm="6">
          <StatisticsCard
            hideChart
            iconBg="success"
            icon={<FileText className="success" size={22} />}
            stat={lessonCount}
            statTitle="lectures"
          />
        </Col>
        <Col lg="4" sm="6">
          <StatisticsCard
            hideChart
            iconBg="warning"
            icon={
              <i
                className="far fa-hourglass warning"
                style={{fontSize: '22px'}}
              ></i>
            }
            stat={timeHour}
            statTitle="Hours"
          />
        </Col>
      </Row> */}

      <div className="vx-collapse collapse-bordered">
        {lessons &&
          lessons.length > 0 &&
          lessons.map((collapseItem, index) => (
            <Card
              key={collapseItem.id}
              onClick={() => toggleCollapse(collapseItem.id)}
            >
              <CardHeader
                className="justify-content-start"
                id={`item${collapseItem.id}`}
              >
                <ChevronDown
                  size={15}
                  className="collapse-icon mr-1 text-success"
                />
                <CardTitle className="lead collapse-title collapsed">
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

export default CurriculumCourseDetail
