import React, {useState} from 'react'
import {ArrowLeftCircle, PlayCircle} from 'react-feather'
import {Badge, Button, Card, CardBody, CardHeader, Col, Row} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Countdown from 'react-countdown'

// ** component

// ** assets
import RadioField from 'components/form/RadioField'

const question = [
  {
    id: 1,
    title:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    answer: ['A: Dolor', 'B: Nullum', 'C: Consectetur', 'D: Pele'],
  },
  {
    id: 2,
    title:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    answer: ['A: Dolor', 'B: Nullum', 'C: Consectetur', 'D: Pele'],
  },
  {
    id: 3,
    title:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    answer: ['A: Dolor', 'B: Nullum', 'C: Consectetur', 'D: Pele'],
  },
  {
    id: 4,
    title:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    answer: ['A: Dolor', 'B: Nullum', 'C: Consectetur', 'D: Pele'],
  },
]

const TestCourse = () => {
  const [step, setStep] = useState(1)
  const [answer, setAnswer] = useState([1, 2, 3])
  const history = useHistory()

  const renderTimeCount = ({minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      setStep(3)
      return
    } else {
      // Render a countdown
      return (
        <h1 className="text-info" style={{fontSize: '50px'}}>
          {minutes}:{seconds}
        </h1>
      )
    }
  }

  return (
    <div>
      <Card>
        <CardHeader className="border-bottom">
          <div className="my-2 d-flex align-items-center ">
            <ArrowLeftCircle
              onClick={() => history.goBack()}
              className="text-primary"
              size="50"
            />
            <div className="ml-4" style={{cursor: 'default'}}>
              <p className="mb-2">
                <Badge
                  className="text-white"
                  style={{borderRadius: '15px', background: '#FF4D13'}}
                >
                  Kh??a h???c
                </Badge>{' '}
                <Badge className="text-white round" color="primary">
                  Ki???m tra
                </Badge>
              </p>
              <h3 className="mb-0 text-primary">21 Ng??y x??y d???ng ni???n tin</h3>
            </div>
          </div>
          {step === 3 ? (
            <div className="my-2">
              <Button.Ripple
                onClick={() => history.push('/home/hoc-phan-1')}
                className="round"
                color="primary"
              >
                ???? ho??n th??nh
              </Button.Ripple>
            </div>
          ) : (
            <div className="my-2">
              <Button.Ripple className="round" color="info">
                L??m B??i ki???m tra
              </Button.Ripple>
              <Button.Ripple
                className="round ml-3"
                color="primary"
                type="button"
              >
                Ch??a ho??n th??nh
              </Button.Ripple>
            </div>
          )}
        </CardHeader>

        {step === 1 && (
          <CardBody
            className="pt-5 row justify-content-center align-items-center"
            style={{minHeight: '70vh'}}
          >
            <div className="col-12">
              <Card>
                <div className="card-body flex-wrap d-flex justify-content-between align-items-center">
                  <div className="text-md-center mr-3">
                    <h3 className="text-warning mb-5">K???t qu??? g???n ????y nh???t</h3>
                    <span className="text-info font-weight-bolder font-size-lg">
                      16/20
                    </span>
                  </div>
                  <div className="text-md-center mr-3">
                    <h3 className="text-warning mb-5">K???t qu??? cao nh???t</h3>
                    <span className="text-danger font-weight-bolder font-size-lg">
                      16/20
                    </span>
                  </div>
                  <div className="text-md-center">
                    <h3 className="text-warning mb-5">Th???i gian l??m b??i</h3>
                    <span className="text-dark font-weight-bolder font-size-lg">
                      16/20
                    </span>
                  </div>
                </div>
              </Card>
              <div className="text-center pt-10">
                <div onClick={() => setStep(2)}>
                  <PlayCircle
                    className="text-primary cursor-pointer"
                    size="150"
                  />
                  <h3 className="mt-3 font-weight-bolder">B???t ?????u ki???m tra</h3>
                </div>
              </div>
            </div>
          </CardBody>
        )}
        {step === 2 && (
          <CardBody className="mt-5">
            <Row>
              <Col lg="8">
                <div style={{height: '65vh'}}>
                  <PerfectScrollbar className="pr-4">
                    {question.map(item => (
                      <div key={item.id}>
                        <div className="mb-2">
                          <span className="text-primary">
                            {' '}
                            C??u h???i {item.id}:
                          </span>
                          <span> {item.title}</span>
                          <div>
                            <RadioField
                              name={item.id}
                              list
                              options={item.answer.map(ele => ({
                                label: ele,
                                value: ele,
                              }))}
                              onChange={(name, value) => console.log(value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </PerfectScrollbar>
                </div>
              </Col>
              <Col lg="4">
                <div>
                  <h3 className="font-weight-bolder">Th???i gian c??n l???i</h3>
                  <Countdown
                    date={Date.now() + 900000}
                    renderer={renderTimeCount}
                  />
                </div>
                <div className="mt-10">
                  <h3 className="font-weight-bolder">???? l??m </h3>
                  <h1 className="text-info" style={{fontSize: '50px'}}>
                    3/10
                  </h1>
                </div>
                <div className="mt-10">
                  <h3 className="font-weight-bolder">Danh m???c </h3>
                  <div className="d-flex  flex-wrap">
                    {Array.apply(null, new Array(20)).map((e, i) => (
                      <div
                        className={`mr-5 cursor-pointer rounded h-35px w-35px my-3 d-flex justify-content-center align-items-center ${
                          answer.includes(i + 1)
                            ? 'bg-primary text-white'
                            : 'bg-secondary'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
                <div className="pt-5">
                  <Button.Ripple
                    onClick={() => setStep(3)}
                    color="primary"
                    className="round"
                    block
                  >
                    N???p b??i
                  </Button.Ripple>
                </div>
              </Col>
            </Row>
          </CardBody>
        )}
        {step === 3 && (
          <div>
            <Row
              className="justify-content-center align-items-center"
              style={{minHeight: '70vh'}}
            >
              <Col lg="6">
                <Card className="bg-primary">
                  <CardBody>
                    <div className="align-items-center d-flex flex-wrap">
                      <div className="pr-10 ">
                        <div className="d-flex align-items-end ">
                          <h1
                            className="mb-0 text-white"
                            style={{fontSize: '50px'}}
                          >
                            16
                          </h1>
                          <h1 className="text-white">/20</h1>
                        </div>
                      </div>
                      <div className="pl-10 border-left-sm">
                        <h1 className="text-white">Ho??n th??nh ba?? ki???m tra</h1>
                        <h2 className="font-weight-bolder text-white">
                          Trung b??nh
                        </h2>
                        <p className="text-white">
                          ????nh gi??: B???n c???n chu???n b??? b??i ki???m tra k?? h??n
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Card>
    </div>
  )
}

export default TestCourse
