import React from 'react'
import {Package, Star} from 'react-feather'
import avatar from 'assets/images/avatars/1.png'
import {Col, Row, Progress} from 'reactstrap'
import Rating from 'react-rating'

const Introduction = () => {
  return (
    <div>
      <h4>Khóa học</h4>
      <h3 className="text-primary">Bài 1: Con Tàu Dinh Dưỡng Miễn Dịch</h3>
      <div className="row">
        <p className="col-md-6">
          <Package size={17} /> Số giờ học: 182 tiếng
        </p>
        <p className="col-md-6">
          <Package size={17} /> Độ khó: Cơ bản
        </p>
      </div>
      <div className="row">
        <p className="col-md-6">
          <Package size={17} /> Ngôn ngữ: Tiếng Việt, Tiếng Anh
        </p>
        <div className="col-md-6 d-flex align-items-center">
          <p>
            {' '}
            <Package size={17} /> Giảng viên:
          </p>
          <div className="d-flex align-center-center ml-3">
            <img
              src={avatar}
              alt="img"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                marginRight: 7,
              }}
            />
            <div>
              <p className="text-primary mb-0">Châu Hằng</p>
              <p className="mb-0">
                ID: <span>823222</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p>
        Học phần 1 giúp các bạn trang bị đầy đủ các kiến thức và kỹ năng thực tế
        để phát triển hệ thống hiệu quả. Từ việc thiết lập định hướng đúng ngay
        từ đầu đến xây dụng mục tiêu và từng bước để có được kế hoạch hành động
        hiệu quả công việc kinh doanh.
      </p>
      <Row style={{marginTop: 50, alignItems: 'center'}}>
        <Col md="3">
          <p
            style={{
              fontSize: 80,
              fontWeight: 'bolder',
              textAlign: 'center',
              fontFamily: 'inherit',
            }}
          >
            4.9
          </p>
          <div className="text-center ">
            <Rating
              emptySymbol={<Star size={27} fill="#babfc7" stroke="#babfc7" />}
              fullSymbol={<Star size={27} fill="#FF9F44" stroke="#FF9F44" />}
              readonly
              initialRating={4}
              className="my-4"
            />
          </div>
          <p className="text-center">44 lượt đánh giá</p>
        </Col>
        <Col md="9">
          <div className="d-flex align-items-center mb-3">
            <p className="mr-3 mb-0">5 sao</p>
            <Progress
              value="90"
              className="w-75 progress-bar-warning"
            ></Progress>
            <p className="mb-0 ml-3">98%</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <p className="mr-3 mb-0">4 sao</p>
            <Progress
              value="25"
              className="w-75 progress-bar-warning"
            ></Progress>
            <p className="mb-0 ml-3">0%</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <p className="mr-3 mb-0">3 sao</p>
            <Progress
              value="0"
              className="w-75 progress-bar-warning"
            ></Progress>
            <p className="mb-0 ml-3">0%</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <p className="mr-3 mb-0">2 sao</p>
            <Progress
              value="0"
              className="w-75 progress-bar-warning"
            ></Progress>
            <p className="mb-0 ml-3">0%</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <p className="mr-3 mb-0">1 sao</p>
            <Progress
              value="0"
              className="w-75 progress-bar-warning"
            ></Progress>
            <p className="mb-0 ml-3">0%</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Introduction
