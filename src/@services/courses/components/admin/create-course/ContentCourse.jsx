import React, {useState} from 'react'

import classnames from 'classnames'
import parse from 'html-react-parser'
import ReactPlayer from 'react-player'

// *** Third Party Components
import {Col, Row, Badge, Button, Card, CardHeader, CardBody} from 'reactstrap'
import {ArrowLeft, ArrowRight, Clock, Edit3, Lock} from 'react-feather'

// *** component
import {ModalCreateLesson} from '@services/courses'

const data = [
  {
    id: 1,
    title: ' Bài 1: Con tàu dinh dưỡng miễn dịch',
    duration: 5,
    content: `<div>
    <div className="text-center"> 
      <img
        src="https://vinmec-prod.s3.amazonaws.com/images/20200426_021946_155535_xay-dung-che-do-an-.max-1800x1800.jpg"
        alt=""
      />
    </div>
    <p className="mt-3">
      Trong số các bệnh lý không lây nhiễm liên quan đến dinh dưỡng, đứng
      đầu là các bệnh tim mạch, đái tháo đường, ung thư, thừa cân - béo phì,
      Gout, rối loạn mỡ máu...Chế độ dinh dưỡng không hợp lý là một yếu tố
      nguy cơ quan trọng hàng đầu dẫn đến sự gia tăng nhanh chóng của phần
      lớn các bệnh mạn tính không lây này.
    </p>
  </div>`,
    link_lesson: 'https://www.youtube.com/watch?v=DnyFJO_zqFc&t=188s',
    link_document:
      'https://xd.adobe.com/view/17a488dd-4ac1-494a-993a-93b8adbd8db0-42f7/screen/f1a54574-9dbf-43fd-9a8d-794068f78af8?fullscreen',
  },
  {
    id: 2,
    title: 'Bài 2: Chiến dịch xây dựng gia đình Alpha',
    duration: 5,
    content: `<div >
    <div className="text-center"> 
      <img
        src="https://vinmec-prod.s3.amazonaws.com/images/20200426_021946_155535_xay-dung-che-do-an-.max-1800x1800.jpg"
        alt=""
      />
    </div>
    <p className="mt-3">
      Trong số các bệnh lý không lây nhiễm liên quan đến dinh dưỡng, đứng
      đầu là các bệnh tim mạch, đái tháo đường, ung thư, thừa cân - béo phì,
      Gout, rối loạn mỡ máu...Chế độ dinh dưỡng không hợp lý là một yếu tố
      nguy cơ quan trọng hàng đầu dẫn đến sự gia tăng nhanh chóng của phần
      lớn các bệnh mạn tính không lây này.
    </p>
  </div>`,
    link_lesson: 'https://www.youtube.com/watch?v=DnyFJO_zqFc&t=188s',
    link_document:
      'https://xd.adobe.com/view/17a488dd-4ac1-494a-993a-93b8adbd8db0-42f7/screen/f1a54574-9dbf-43fd-9a8d-794068f78af8?fullscreen',
  },
]

const ContentCourse = ({stepper}) => {
  const [modal, setModal] = useState(false)
  const [item, setItem] = useState(data ? data[0] : null)

  const toggleModal = () => setModal(!modal)

  return (
    <div>
      <div className="mb-3">
        <Button.Ripple
          size="sm"
          type="button"
          color="primary"
          onClick={toggleModal}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tạo bài học
          </span>
        </Button.Ripple>
      </div>
      <Row>
        {item && (
          <Col xl="7" className="mb-10 mb-xl-0 order-xl-2">
            <Card className="overflow-hidden">
              <CardHeader className="text-white bg-info">
                Nội dung {item.title}
              </CardHeader>
              <CardBody className="pt-5">
                <div>
                  <div className="font-weight-bolder mb-3">Nội dung chính:</div>
                  <div>{parse(item.content)}</div>
                </div>
                <div className="my-4">
                  <div className="font-weight-bolder mb-3">Video:</div>
                  <Row>
                    <Col lg="10" className="m-auto">
                      <ReactPlayer
                        url={item.link_lesson}
                        className="react-player-video video-course-lesson h-300px"
                        width="100%"
                        controls={true}
                        style={{borderRadius: '15px', overflow: 'hidden'}}
                      />
                    </Col>
                  </Row>
                </div>
                <div>
                  <div className="font-weight-bolder mb-3">
                    Tài liệu tham khảo:
                  </div>
                  <a href={item.link_document} download>
                    {item.link_document}
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        )}

        <Col xl="5" className=" order-xl-1">
          <ul className="timeline">
            {data.map((ele, i) => (
              <li key={i} className="timeline-item">
                <span className="timeline-point timeline-point-secondary">
                  <Lock size={14} />
                </span>
                <div className="timeline-event">
                  <div className="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                    <h6
                      onClick={() => setItem(ele)}
                      className={`font-weight-bolder text-truncate cursor-pointer ${
                        ele.id === item?.id ? 'text-primary' : ''
                      }`}
                    >
                      {ele.title}
                    </h6>
                    <span className="timeline-event-time" onClick={toggleModal}>
                      <Badge
                        color="warning"
                        className="text-white font-size-base cursor-pointer"
                      >
                        Chỉnh sửa <Edit3 size="16" />
                      </Badge>
                    </span>
                  </div>
                  <div
                    className={classnames({
                      'mb-0': i === data.length - 1,
                    })}
                  >
                    <span className="media text-muted">
                      <Clock size="18" className="mr-1" />
                      <span className="media-body">{ele.duration} phút</span>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      <hr />
      <div className="text-center">
        <Button.Ripple
          color="secondary"
          className="btn-prev"
          outline
          type="button"
          onClick={() => stepper.previous()}
        >
          <ArrowLeft
            size={14}
            className="align-middle mr-sm-3 mr-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          type="button"
          color="primary"
          className="btn-next ml-3"
          onClick={() => stepper.next()}
          disabled={!data || data.length === 0}
        >
          <span className="align-middle d-sm-inline-block d-none">Tiếp</span>
          <ArrowRight
            size={14}
            className="align-middle ml-sm-3 ml-0"
          ></ArrowRight>
        </Button.Ripple>
        <Button.Ripple type="button" color="danger" className="ml-2">
          <span className="align-middle d-sm-inline-block d-none">Hủy</span>
        </Button.Ripple>
      </div>

      <ModalCreateLesson modal={modal} toggleModal={toggleModal} />
    </div>
  )
}

export default ContentCourse
