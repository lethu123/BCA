import React, {useEffect} from 'react'
import {Col, Row} from 'reactstrap'
import CardStatisticOverview from './CardStatisticOverview'
import LatestUsers from './LatestUsers'
import LatestOrders from './LatestOrders'

import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'

// import {
//   listCourseHschool,
//   getListRequestApplyForTeaching,
//   getListInstructorsAction,
// } from 'redux/actions/hschools/courseAction'
// import {
//   getDashboardHschoolManagementAction,
//   getListLectureAction,
//   getListEnrolmentAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'
// import {LIST_COURSE_HSCHOOL} from 'redux/constants/hschool/typesHschool'

const selectDashboardStatistic = createSelector(
  state => state.hSchoolRebuild.management,
  course => course.dashboardHschool,
)

const selectListLecture = createSelector(
  state => state.hSchoolRebuild.management,
  course => course.listLecture,
)

const selectTotalLecture = createSelector(
  state => state.hSchoolRebuild.management,
  course => course.metaDataLecture,
)

const selecListEnrolment = createSelector(
  state => state.hSchoolRebuild.management,
  enrolment => enrolment.listEnrolment,
)
const selecTotalEnrolment = createSelector(
  state => state.hSchoolRebuild.management,
  enrolment => enrolment.metaDataListEnrolment,
)

const CourseDashboardStatistics = () => {
  const dispatch = useDispatch()
  const listLectures = useSelector(selectListLecture)
  const totalLecture = useSelector(selectTotalLecture)

  const dashboardStatistic = useSelector(selectDashboardStatistic)

  const listEnrolment = useSelector(selecListEnrolment)
  const totalEnrolment = useSelector(selecTotalEnrolment)
  useEffect(() => {
    // dispatch(
    //   listCourseHschool(
    //     LIST_COURSE_HSCHOOL,
    //     '',
    //     null,
    //     6,
    //     null,
    //     null,
    //     false,
    //     false,
    //   ),
    // )
    // dispatch(getListInstructorsAction('', 1, 7))
    // dispatch(getListRequestApplyForTeaching(true))
    // dispatch(getDashboardStatisticsAction())
    // dispatch(getListLectureAction())
    // dispatch(getDashboardHschoolManagementAction())
    // dispatch(getListEnrolmentAction())
  }, [])
  return (
    <React.Fragment>
      <div className="ml-50">
        {dashboardStatistic && (
          <CardStatisticOverview dashboardStatistic={dashboardStatistic} />
        )}
        <Row>
          <Col lg="4">
            {listLectures.length > 0 && (
              <LatestUsers
                listLectures={listLectures}
                totalLecture={totalLecture}
              />
            )}
          </Col>
          <Col lg="8">
            {listEnrolment && listEnrolment.length > 0 && (
              <LatestOrders
                listEnronment={listEnrolment}
                totalEnrolment={totalEnrolment}
              />
            )}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default CourseDashboardStatistics
