import React from 'react'
import {
  Briefcase,
  Check,
  // FileText,
  MoreHorizontal,
  Users,
} from 'react-feather'
import {useSelector} from 'react-redux'
import {Row, Col} from 'reactstrap'
// import StatisticsCard from 'components/statisticsCard/StatisticsCard'
import StatsHorizontal from '@core/components/widgets/stats/StatsHorizontal'
import {selectStatisticsMyCourse} from 'redux/reselects/hschools/course.reselect'

const CardStaticMyCourse = () => {
  const statisticsMyCourse = useSelector(selectStatisticsMyCourse)
  return (
    <React.Fragment>
      {statisticsMyCourse && (
        <Row>
          <Col lg="4" md="4" sm="6">
            <StatsHorizontal
              icon={<Users className="primary" size={22} />}
              color="success"
              stats={
                statisticsMyCourse && statisticsMyCourse.owner_course.toString()
              }
              statTitle="Owner courses"
            />
          </Col>
          <Col lg="4" md="4" sm="6">
            <StatsHorizontal
              icon={<Users className="primary" size={22} />}
              color="success"
              stats={
                statisticsMyCourse &&
                statisticsMyCourse.student_course.toString()
              }
              statTitle="Student courses"
            />
          </Col>
          <Col lg="4" md="4" sm="6">
            <StatsHorizontal
              icon={<Users className="primary" size={22} />}
              color="success"
              stats={
                statisticsMyCourse &&
                statisticsMyCourse.teaching_course.toString()
              }
              statTitle="Teaching courses"
            />
          </Col>
        </Row>
      )}

      {statisticsMyCourse && (
        <Row>
          <Col lg="4" md="4" sm="6">
            <StatsHorizontal
              icon={<Check className="primary" size={22} />}
              color="success"
              stats={
                statisticsMyCourse &&
                statisticsMyCourse.active_course.toString()
              }
              statTitle="Active courses"
            />
          </Col>
          <Col lg="4" md="4" sm="6">
            <StatsHorizontal
              icon={<MoreHorizontal className="info" size={22} />}
              color="success"
              stats={
                statisticsMyCourse &&
                statisticsMyCourse.pending_course.toString()
              }
              statTitle="Pendding courses"
            />
          </Col>
          <Col lg="4" md="4" sm="6">
            <StatsHorizontal
              icon={<Briefcase className="danger" size={22} />}
              color="success"
              stats={
                statisticsMyCourse && statisticsMyCourse.free_course.toString()
              }
              statTitle="Free courses"
            />
          </Col>
        </Row>
      )}
    </React.Fragment>
  )
}

export default CardStaticMyCourse
