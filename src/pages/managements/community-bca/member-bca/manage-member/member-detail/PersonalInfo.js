import React from 'react'
import {Layers, Mail, MapPin, PhoneCall, User} from 'react-feather'
import {Card, Col, Row} from 'reactstrap'

const PersonalInfo = () => {
  return (
    <Card className="p-5">
      <h4 className="text-primary mb-3">Thông tin cá nhân</h4>
      <Row>
        <Col lg={6}>
          <div className="d-flex ">
            <User size={17} className="text-primary mr-3" />
            <p className="mb-1">Tên thành viên: </p>
          </div>
          <p className="font-weight-bolder ml-15">Hoàng Quyên </p>
        </Col>
        <Col lg={6}>
          <div className="d-flex ">
            <MapPin size={17} className="text-primary mr-3" />
            <p className="mb-1">Nơi ở: </p>
          </div>
          <p className="font-weight-bolder ml-15">Thành phố Hồ Chí Minh </p>
        </Col>
        <Col lg={6}>
          <div className="d-flex ">
            <Mail size={17} className="text-primary mr-3" />
            <p className="mb-1">Email:</p>
          </div>
          <p className="font-weight-bolder ml-15">hoangquyen@gmail.com </p>
        </Col>
        <Col lg={6}>
          <div className="d-flex ">
            <PhoneCall size={17} className="text-primary mr-3" />
            <p className="mb-1">Số điện thoại: </p>
          </div>
          <p className="font-weight-bolder ml-15">09286429746</p>
        </Col>
      </Row>
      <hr className="mb-3" />
      <Row>
        <Col lg={6}>
          <div className="d-flex ">
            <Layers size={17} className="text-primary mr-3" />
            <p className="mb-1">Ngày tạo tài khoản: </p>
          </div>
          <p className="font-weight-bolder ml-15">20 tháng 11 năm 2021 </p>
        </Col>
        <Col lg={6}>
          <div className="d-flex ">
            <Layers size={17} className="text-primary mr-3" />
            <p className="mb-1">Loại tài khoàn hệ thống: </p>
          </div>
          <p className="font-weight-bolder ml-15">Quản trị viên A1 </p>
        </Col>
        <Col lg={6}>
          <div className="d-flex ">
            <Layers size={17} className="text-primary mr-3" />
            <p className="mb-1">Người tạo tài khoản: </p>
          </div>
          <p className="font-weight-bolder ml-15">
            Đại lý Phụ trách: Bùi Quốc Anh
          </p>
        </Col>
        <Col lg={6}>
          <div className="d-flex ">
            <Layers size={17} className="text-primary mr-3" />
            <p className="mb-1">Trạng thái tài khoản: </p>
          </div>
          <p className="font-weight-bolder ml-15">Đã xác nhận</p>
        </Col>
      </Row>
    </Card>
  )
}

export default PersonalInfo
