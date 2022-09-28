import React from 'react'
import {ListGroup, ListGroupItem, Card, CardBody} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Briefcase,
  BookOpen,
  Users,
  Check,
  AlignJustify,
  GitPullRequest,
  MessageCircle,
  Settings,
  DollarSign,
  Flag,
  Truck,
  HelpCircle,
  BarChart,
} from 'react-feather'
// import '@core/scss/react/libs/editor/editor.scss'
import './CourseDashboardSidebar.style.scss'

const CourseDashboardSidebar = ({
  activeMenu,
  setActiveMenu,
  toggleSidebar,
  mql,
  heightContainer,
}) => {
  return (
    <React.Fragment>
      <Card style={{minHeight: `${heightContainer}px`}}>
        <CardBody style={{minHeight: '100vh'}}>
          <div className="email-app-menu">
            {/* {activeMenu === 1 && (
              <FormGroup className="form-group-compose text-center compose-btn">
                <Button
                  block
                  className="my-2 btn-block"
                  color="primary"
                  onClick={() => setSidebarAdd(true)}
                >
                  <Edit size={14} />
                  <span className="align-middle ml-50">Create Course</span>
                </Button>
              </FormGroup>
            )} */}
            <PerfectScrollbar
              className="sidebar-menu-list"
              options={{
                wheelPropagation: false,
              }}
            >
              <ListGroup className="list-group-messages font-medium-1">
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(0)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 0}
                  className="border-0 cursor-pointer list-custom"
                >
                  <AlignJustify size={21} />
                  <span className="align-middle ml-1">Dashboard</span>
                  {/* <div className="badge badge-pill badge-warning mt-25 float-right">
                    <span className="align-middle">{countMyCourse}</span>
                  </div> */}
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(1)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 1}
                  className="border-0 cursor-pointer list-custom"
                >
                  <GitPullRequest size={21} />
                  <span className="align-middle ml-1">Categories</span>
                  {/* <div className="badge badge-pill badge-warning mt-25 float-right">
                    <span className="align-middle">{countMyCourse}</span>
                  </div> */}
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(2)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 2}
                  className="border-0 cursor-pointer list-custom"
                >
                  <Briefcase size={21} />
                  <span className="align-middle ml-1">My courses</span>
                  {/* <div className="badge badge-pill badge-warning mt-25 float-right">
                    <span className="align-middle">{countMyCourse}</span>
                  </div> */}
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(3)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 3}
                  className="border-0 cursor-pointer list-custom"
                >
                  <BookOpen size={21} />
                  <span className="align-middle ml-1">Instructors</span>
                  {/* <div className="badge badge-pill badge-warning mt-25 float-right">
                    <span className="align-middle">{countInstructors}</span>
                  </div> */}
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(4)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 4}
                  className="border-0 cursor-pointer list-custom"
                >
                  <Users size={21} />
                  <span className="align-middle ml-1">Students</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(5)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 5}
                  className="border-0 cursor-pointer list-custom"
                >
                  <DollarSign size={21} />
                  <span className="align-middle ml-1">Enrolments</span>
                  {/* <div className="badge badge-pill badge-warning mt-25 float-right">
                    <span className="align-middle">{countWishList}</span>
                  </div> */}
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(11)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 11}
                  className="border-0 cursor-pointer list-custom"
                >
                  <HelpCircle size={21} />
                  <span className="align-middle ml-1">My Quizzes</span>
                  {/* <div className="badge badge-pill badge-danger mt-25 float-right">
                    <span className="align-middle">3</span>
                  </div> */}
                </ListGroupItem>

                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(12)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 12}
                  className="border-0 cursor-pointer list-custom"
                >
                  <BarChart size={21} />
                  <span className="align-middle ml-1">My Pathways</span>
                  {/* <div className="badge badge-pill badge-danger mt-25 float-right">
                    <span className="align-middle">3</span>
                  </div> */}
                </ListGroupItem>

                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(6)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 6}
                  className="border-0 cursor-pointer list-custom"
                >
                  <Check size={21} />
                  <span className="align-middle ml-1">Certificates</span>
                  {/* <div className="badge badge-pill badge-danger mt-25 float-right">
                    <span className="align-middle">3</span>
                  </div> */}
                </ListGroupItem>

                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(10)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 10}
                  className="border-0 cursor-pointer list-custom"
                >
                  <Truck size={21} />
                  <span className="align-middle ml-1">My Activities</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(8)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 8}
                  className="border-0 cursor-pointer list-custom"
                >
                  <Flag size={21} />
                  <span className="align-middle ml-1">Reports</span>
                </ListGroupItem>
                <ListGroupItem
                  onClick={() => {
                    setActiveMenu(9)
                    if (!mql) {
                      toggleSidebar()
                    }
                  }}
                  active={activeMenu === 9}
                  className="border-0 cursor-pointer list-custom"
                >
                  <Settings size={21} />
                  <span className="align-middle ml-1">Settings</span>
                </ListGroupItem>
              </ListGroup>
              <hr />
              {/* <h5 className="my-2 pt-25">Status Course</h5>
              <ListGroup className="list-group-labels font-medium-1">
                <ListGroupItem
                  className="border-0 d-flex align-items-center cursor-pointer"
                  onClick={() => {}}
                  active={false}
                >
                  <span className="bullet bullet-success bullet-bordered mr-1" />
                  <span>Approved</span>
                </ListGroupItem>

                <ListGroupItem
                  className="border-0 d-flex align-items-center cursor-pointer"
                  onClick={() => {}}
                  active={false}
                >
                  <span className="bullet bullet-warning bullet-bordered mr-1" />
                  <span>Pending</span>
                </ListGroupItem>
                <ListGroupItem
                  className="border-0 d-flex align-items-center cursor-pointer"
                  onClick={() => {}}
                  active={false}
                >
                  <span className="bullet bullet-danger bullet-bordered mr-1" />
                  <span>Denied</span>
                </ListGroupItem>
              </ListGroup> */}
            </PerfectScrollbar>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default CourseDashboardSidebar
