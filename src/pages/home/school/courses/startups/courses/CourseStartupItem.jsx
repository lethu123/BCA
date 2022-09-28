import Chart from 'react-apexcharts'
import {Card, CardTitle, CardBody, CardText, Table, Button} from 'reactstrap'

import '../CourseStartup.style.scss'
import '@core/scss/react/libs/charts/apex-charts.scss'
import {ArrowRight, Box, CheckCircle, Lock} from 'react-feather'
import {Link, useHistory} from 'react-router-dom'
import img_fire from 'assets/images/icons/fire-icon.svg'

import {ThemeColors} from 'utility/context/ThemeColors'
import {useContext} from 'react'

const CourseStartupItem = ({item, index}) => {
  const context = useContext(ThemeColors)
  const history = useHistory()
  const optionsRadial = {
    chart: {
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1,
      },
    },
    colors: ['#51e5a8'],
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: '70%',

          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 1,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#ebe9f1',
          strokeWidth: '67%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            color: '#FFFFFF',
            fontFamily: 'Montserrat',
            fontSize: '2.86rem',
            fontWeight: '600',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [context.colors.success.main],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    // labels: [''],
  }
  const seriesRadial = [item.percentage]

  return (
    <Card className="card-developer-meetup">
      <div className="meetup-img-wrapper rounded-top text-center position-relative">
        <img
          src={item.picture}
          height="290"
          className="w-100 rounded"
          alt="imgage"
        />
        <div className="percen">
          <div className=" radial-chart">
            <Chart
              options={optionsRadial}
              series={seriesRadial}
              type="radialBar"
              width="150"
            />
          </div>
        </div>

        <div className="total-lesson w-100 py-1 px-2 d-flex align-items-center cursor-pointer">
          <div className="mr-3">
            <Box size="17" />
            <span className="ml-1">
              <span className="text-success">{item.total_lesson_complete}</span>
              /{item.total_lesson} Bài giảng
            </span>
          </div>
          <div>
            <Box size="17" />
            <span className="ml-1">
              <span className="text-success">
                {item.total_exercise_complete}
              </span>
              /{item.total_exercise} Bài tập
            </span>
          </div>
          <ArrowRight className="ml-auto" />
        </div>
      </div>
      <CardBody>
        <div className="meetup-header d-flex align-items-center">
          <div className="meetup-day">
            <h6 className="mb-0">PHẦN</h6>
            <h3 className="mb-0 ">{index}</h3>
          </div>
          <div className="my-auto">
            <CardTitle tag="h2" className="mb-25 text-dark">
              <Link to={`/home/dao-tao-ki-nang/${item.id}`}>{item.name}</Link>
            </CardTitle>
            <CardText className="mb-0">{item.description}</CardText>
          </div>
        </div>
        <div>
          <Table responsive>
            <thead>
              <tr>
                <th className="text-dark">Bài giảng</th>
                <th className="text-right text-dark">Bài tập</th>
              </tr>
            </thead>
            <tbody>
              {item.lessons.map((lesson, i) => (
                <tr key={i}>
                  {lesson.complete === lesson.total && (
                    <>
                      <td>
                        <Link
                          to={
                            '/hschool/course/start-up/' +
                            item.slug +
                            '/' +
                            lesson.slug
                          }
                          className="text-success font-weight-bold d-flex align-items-center"
                        >
                          <span>{lesson.title}</span>
                          <CheckCircle className="ml-1 " size="15" />
                        </Link>
                      </td>
                      <td className="text-right">
                        <span className="text-success">{lesson.complete}</span>
                        <span className="text-success">/{lesson.total}</span>
                      </td>
                    </>
                  )}

                  {lesson.complete !== 0 && lesson.complete < lesson.total && (
                    <>
                      <td>
                        <Link
                          to={
                            '/hschool/course/start-up/' +
                            item.slug +
                            '/' +
                            lesson.slug
                          }
                          className=" font-weight-bold d-flex align-items-center"
                        >
                          <span className="text-danger">{lesson.title}</span>
                          <img src={img_fire} alt="" height="25px" />
                        </Link>
                      </td>
                      <td className="text-right">
                        <span className="text-danger">{lesson.complete}</span>
                        <span className="text-success">/{lesson.total}</span>
                      </td>
                    </>
                  )}
                  {lesson.complete === 0 && (
                    <>
                      <td>
                        <Link
                          to={
                            '/hschool/course/start-up/' +
                            item.slug +
                            '/' +
                            lesson.slug
                          }
                          className="text-dark font-weight-bold d-flex align-items-center"
                        >
                          <span>{lesson.title}</span>
                        </Link>
                      </td>
                      <td className="text-right">
                        <span>{lesson.complete}</span>
                        <span>/{lesson.total}</span>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
          {item.isStart ? (
            <Button.Ripple
              color="success"
              block
              className="my-1 "
              onClick={() =>
                history.push(`/hschool/course/start-up/${item.slug}`)
              }
            >
              Tiếp tục khóa học
            </Button.Ripple>
          ) : (
            <Button.Ripple
              color="gradient-secondary"
              block
              className="my-1  d-flex align-items-end justify-content-center"
              style={{cursor: 'not-allowed'}}
            >
              <Lock style={{marginRight: '5px'}} size="16" />
              Bắt đầu khóa học
            </Button.Ripple>
          )}
        </div>
      </CardBody>
    </Card>
  )
}

export default CourseStartupItem
