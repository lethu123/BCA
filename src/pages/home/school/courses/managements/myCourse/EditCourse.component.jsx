import React, {useEffect, useState} from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import {
  ArrowLeft,
  MessageCircle,
  Info,
  HelpCircle,
  RefreshCw,
} from 'react-feather'
import classnames from 'classnames'
import InforCourse from './tabInfoCourse/InforCourse.component'
import {useDispatch, useSelector} from 'react-redux'
// import {
//   getAllModuleOfCourse,
//   getDetailCourse,
// } from 'redux/actions/hschools/courseAction'
// import {selectDetailCourse} from 'redux/reselects/hschools/course.reselect'
import InstructorsRequest from './tabInstructorRequest/InstructorsRequest.component'
import ReviewCourseEdit from './tabReview/reviewCourseEdit.component'
import FQA from './tabFQA/FQA.component'
import {useHistory, useParams} from 'react-router'

const EditCourse = props => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [active, setActive] = useState('1')
  // const course = useSelector(state => selectDetailCourse(state))
  const {slug} = useParams()
  // useEffect(() => {
  //   if (slug) {
  //     dispatch(getDetailCourse(slug))
  //     dispatch(getAllModuleOfCourse(slug))
  //   }
  // }, [dispatch, slug])

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <React.Fragment>
      <Card>
        <CardHeader className="justify-content-between">
          <div className="card-heading">
            <CardTitle>
              <span className="font-weight-bold">COURSE MANAGER</span>
              {/* {course && (
                <span className="d-block" style={{color: '#506FE4'}}>
                  -- {course.title}
                </span>
              )} */}
            </CardTitle>
          </div>
          <Button.Ripple
            outline
            color="primary"
            onClick={() => history.push('/hschool/course/dashboard/mycourses')}
          >
            <ArrowLeft size={20} /> Go Back
          </Button.Ripple>
        </CardHeader>
        <hr />
        <CardBody>
          <Nav pills className="nav-fill" style={{background: '#e3eaef'}}>
            <NavItem>
              <NavLink
                className={classnames(
                  {
                    active: active === '1',
                  },
                  'py-1 font-size-18',
                )}
                onClick={() => {
                  toggle('1')
                }}
              >
                <Info size={20} className="mr-1" />
                Infomation Course
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames(
                  {
                    active: active === '2',
                  },
                  'py-1 font-size-18',
                )}
                onClick={() => {
                  toggle('2')
                }}
              >
                <RefreshCw size={20} className="mr-1" />
                Instructor Request
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames(
                  {
                    active: active === '3',
                  },
                  'py-1 font-size-18',
                )}
                onClick={() => {
                  toggle('3')
                }}
              >
                <MessageCircle size={20} className="mr-1" />
                Review
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames(
                  {
                    active: active === '4',
                  },
                  'py-1 font-size-18',
                )}
                onClick={() => {
                  toggle('4')
                }}
              >
                <HelpCircle size={20} className="mr-1" />
                Q&A
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={active}>
            <TabPane tabId="1">
              <InforCourse />
            </TabPane>
            <TabPane tabId="2">
              <InstructorsRequest />
            </TabPane>
            <TabPane tabId="3">
              {/* {course && <ReviewCourseEdit reviews={course.reviews.data} />} */}
            </TabPane>
            <TabPane tabId="4">
              <FQA />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default EditCourse
