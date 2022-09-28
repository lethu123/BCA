import React, {useState} from 'react'
import {
  Badge,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  CardBody,
  Alert,
} from 'reactstrap'
import {Link, useHistory} from 'react-router-dom'

// ** Component
import Avatar from '@core/components/avatar'

import Overview from './Overview.component'

// ** Asset
import banner from 'assets/images/banner/banner-30.jpg'
import userBlank from 'assets/images/avatars/avatar-blank.png'
import '../course-item/CustomStyleItem.style.scss'
import ModulesCourse from './ModulesCourse.component'
import StudentsClass from './StudentsClass.component'
import QandAClass from './QandAClass.component'
import AnnouncesClass from './announcement/AnnouncesClass.component'
import QuizClass from './quiz-course/QuizClass.component'
import {ArrowLeftCircle} from 'react-feather'

const ViewAbstractMain = () => {
  const [active, setActive] = useState(6)
  const history = useHistory()
  return (
    <Row>
      <Col lg="12">
        <Alert
          color="primary"
          className="mb-3 cursor-pointer"
          onClick={() => history.goBack()}
        >
          <div className="alert-body text-center">
            <ArrowLeftCircle size={25} />
            <span className="ml-1">Go Back</span>
          </div>
        </Alert>
      </Col>
      <Col lg="4">
        <Card className=" ecommerce-card ">
          <div className="course-one__single mb-0">
            <div className="post mb-0 post-grid">
              <div className="thumb top-rounded">
                <Badge
                  color="danger"
                  pill
                  className="badge-glow category-badge position-absolute"
                >
                  course category
                </Badge>

                <div style={{display: 'unset'}}>
                  <div className="inner">
                    <img
                      src={banner}
                      className="w-100 h-100"
                      alt="post-title"
                    />
                  </div>
                </div>
              </div>

              <div className="details pt-0">
                <div
                  className="course-one__content border-0 px-0 pt-2 pb-0"
                  // style={{minHeight: '410px'}}
                >
                  <a href="#none" className="course-one__category">
                    category
                  </a>

                  <div className="course-one__admin">
                    <Avatar
                      img={userBlank}
                      // size="md"
                      className="mr-1"
                    />
                    Teacher <Link to={`#`}>Thu Lee</Link>
                  </div>

                  <h3 className="post-title my-1" style={{minHeight: '50px'}}>
                    <Link to={'/#'}>
                      How To Become Better With Building In 1 Month
                    </Link>
                  </h3>

                  {/* Save / Interested */}
                </div>
                <hr />
                <ListGroup tag="div">
                  <ListGroupItem
                    onClick={() => setActive(6)}
                    active={active === 6}
                  >
                    Overview
                  </ListGroupItem>
                  <ListGroupItem
                    onClick={() => setActive(1)}
                    active={active === 1}
                    className="cursor-pointer"
                  >
                    Modules
                  </ListGroupItem>
                  <ListGroupItem
                    onClick={() => setActive(2)}
                    active={active === 2}
                    className="cursor-pointer"
                  >
                    Students
                  </ListGroupItem>
                  <ListGroupItem
                    onClick={() => setActive(3)}
                    active={active === 3}
                    className="cursor-pointer"
                  >
                    Q&As
                  </ListGroupItem>
                  <ListGroupItem
                    onClick={() => setActive(4)}
                    active={active === 4}
                    className="cursor-pointer"
                  >
                    Announces
                  </ListGroupItem>
                  <ListGroupItem
                    active={active === 5}
                    onClick={() => setActive(5)}
                    className="cursor-pointer"
                  >
                    Quizs
                  </ListGroupItem>
                </ListGroup>
                {/* <div
                  onClick={() => history.goBack()}
                  className="course-one__link cursor-pointer rounded"
                >
                  Go back
                </div> */}
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col lg="8">
        <Card>
          <CardBody>
            {active === 6 && <Overview />}
            {active === 1 && <ModulesCourse />}
            {active === 2 && <StudentsClass />}
            {active === 3 && <QandAClass />}
            {active === 4 && <AnnouncesClass />}
            {active === 5 && <QuizClass />}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ViewAbstractMain
