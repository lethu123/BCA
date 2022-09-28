import React, {useState, useEffect} from 'react'

import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'

// ** Component
import MyLecturer from './my-lecture/MyLecturer.component'
import InstructorBecomeATeacher from './instructorRequest/InstructorBecomeATeacher.component'
import InstructorApplyForTeaching from './instructorRequest/InstructorApplyForTeaching.component'
import InstructorInviteForTeaching from './instructorRequest/InstructorInviteForTeaching.component'
// Action
// import {
//   getListLectureOfSystemAction,
//   getListRequestBecomeLectureAction,
//   getListInviteLectureAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'

import {useDispatch} from 'react-redux'
import {createSelector} from 'reselect'
import {useSelector} from 'react-redux'
//Reducer
const selectListLecture = createSelector(
  state => state.hSchoolRebuild.management,
  lecture => lecture.listLectureOfSystem,
)
const selectNumberListLecture = createSelector(
  state => state.hSchoolRebuild.management,
  lecture => lecture.nListLectureOfSystem,
)
const selectListRequestBecomeLecture = createSelector(
  state => state.hSchoolRebuild.management,
  request => request.listRequestBecomeLecture,
)
const selectNumberListRequestBecomeLecture = createSelector(
  state => state.hSchoolRebuild.management,
  request => request.nListRequestBecomeLecture,
)
const selectListInviteLecture = createSelector(
  state => state.hSchoolRebuild.management,
  request => request.listInviteLecture,
)
const selectNumberListInviteLecture = createSelector(
  state => state.hSchoolRebuild.management,
  request => request.nListInviteLecture,
)

const InstructorsCourseDashboardMain = () => {
  // Use Reducer
  const listLecture = useSelector(selectListLecture)
  const numberListLecture = useSelector(selectNumberListLecture)
  const listRequestBecomeLecture = useSelector(selectListRequestBecomeLecture)
  const numberListRequestBecomeLecture = useSelector(
    selectNumberListRequestBecomeLecture,
  )
  const listInviteLecture = useSelector(selectListInviteLecture)
  const numberListInviteLecture = useSelector(selectNumberListInviteLecture)

  const dispatch = useDispatch()
  const [activeDetail, setActiveDetail] = useState('1')

  const toggleDetail = tab => {
    if (activeDetail !== tab) {
      setActiveDetail(tab)
    }
  }
  // dispatch action
  // useEffect(() => {
  //   dispatch(getListLectureOfSystemAction())
  //   dispatch(getListRequestBecomeLectureAction())
  //   dispatch(getListInviteLectureAction())
  // }, [])

  return (
    <React.Fragment>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink
            active={activeDetail === '1'}
            onClick={() => {
              toggleDetail('1')
            }}
          >
            List Lecturer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeDetail === '2'}
            onClick={() => {
              toggleDetail('2')
            }}
          >
            Become a Lecturer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeDetail === '3'}
            onClick={() => {
              toggleDetail('3')
            }}
          >
            Invite for Teaching
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeDetail === '4'}
            onClick={() => {
              toggleDetail('4')
            }}
          >
            Apply for Teaching
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={activeDetail}>
        <TabPane tabId="1">
          <MyLecturer
            listLecture={listLecture}
            numberPage={numberListLecture}
          />
        </TabPane>
        <TabPane tabId="2">
          <InstructorBecomeATeacher
            listRequestBecomeLecture={listRequestBecomeLecture}
            numberPage={numberListRequestBecomeLecture}
          />
        </TabPane>
        <TabPane tabId="3">
          <InstructorInviteForTeaching
            listInviteLecture={listInviteLecture}
            numberPage={numberListInviteLecture}
          />
        </TabPane>
        <TabPane tabId="4">
          <InstructorApplyForTeaching />
        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}

export default InstructorsCourseDashboardMain
