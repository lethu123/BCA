import TextField from 'components/form/TextField'
import React from 'react'
import {Square} from 'react-feather'
import {Badge, Button, Card, CardBody, Col, Row} from 'reactstrap'
// *** Component
import PotentialCustomersTable from './PotentialCustomersTable'

const PotentialCustomers = () => {
  return (
    <Card>
      <CardBody>
        <h6 className="text-primary">Tìm kiếm khách hàng tiềm năng</h6>
        <div
          style={{
            border: '1px solid #E6641F',
            padding: 20,
            borderRadius: 5,
            marginBottom: 80,
          }}
        >
          <Row>
            <Col md="4">
              <TextField
                type="text"
                name="id"
                size="md"
                label="Mã khách hàng"
                placeholder="Nhập mã khách hàng ..."
                onChange={(name, value) => console.log(value)}
              />
            </Col>

            <Col md="4">
              <TextField
                type="text"
                name="phone"
                size="md"
                label="Số điện thoại"
                placeholder="Nhập số điện thoại ..."
                onChange={(name, value) => console.log(value)}
              />
            </Col>
            <Col md="4">
              <TextField
                type="text"
                name="email"
                size="md"
                label="Email"
                placeholder="Nhập email ..."
                onChange={(name, value) => console.log(value)}
              />
            </Col>
          </Row>
          <div className="mt-2">
            <Button.Ripple color="danger" className="mr-3 my-2">
              Tạo KHTN
            </Button.Ripple>
            <Button.Ripple color="primary" className="mr-3 my-2">
              Tìm kiếm
            </Button.Ripple>
            <Button.Ripple color="secondary" className="my-2">
              Reset
            </Button.Ripple>
          </div>
        </div>
        <div>
          <h6
            className="text-primary "
            style={{
              borderBottom: '3px solid #E6641F',
              paddingBottom: 8,
              marginBottom: 30,
            }}
          >
            Thông tin khách hàng tiềm năng
          </h6>
        </div>
        <Row className="justify-content-between">
          <Col md="3">
            <p>
              Tên khách hàng:{' '}
              <span className="font-weight-bolder">Nguyễn Khắc Vũ</span>{' '}
            </p>
          </Col>
          <Col md="3">
            <p>
              Số điện thoại:{' '}
              <span className="font-weight-bolder">0399652587</span>{' '}
            </p>
          </Col>
          <Col md="3">
            <p>
              Email:{' '}
              <span className="font-weight-bolder"> khacvu0505@gmail.com</span>
            </p>
          </Col>
          <Col md="3">
            <p>
              Ngày sinh: <span className="font-weight-bolder">08/05/2009</span>{' '}
            </p>
          </Col>
          <Col md="3">
            <p>
              Giới tính: <span className="font-weight-bolder">Nam</span>{' '}
            </p>
          </Col>

          <Col md="3">
            <p>
              Tình trạng sức khỏe:{' '}
              <span className="font-weight-bolder">Bình thường</span>
            </p>
          </Col>
          <Col md="3">
            <p>
              Tham gia bảo hiểm:{' '}
              <span className="font-weight-bolder">Nhân thọ</span>{' '}
            </p>
          </Col>
          <Col md="3">
            <p>
              Tính cách:{' '}
              <span className="font-weight-bolder">Người thủ lĩnh</span>{' '}
            </p>
          </Col>
          {/* <Col md="3">
            <p>
              Khách hàng tiềm năng:{' '}
              <span>
                <Badge color="primary">Yêu thích</Badge>
              </span>{' '}
            </p>
          </Col> */}
        </Row>
        <Row>
          <Col md="3">
            <div>
              <Square size={14} fill="#E6641F" stroke="#E6641F" /> Sở thích
            </div>
            <Badge color="light-primary" className="m-1">
              Mua sắm
            </Badge>
            <Badge color="light-primary" className="m-1">
              Chăm sóc sức khỏe
            </Badge>
            <Badge color="light-primary" className="m-1">
              Du lịch
            </Badge>
            <Badge color="light-primary" className="m-1">
              Xe hơi
            </Badge>
            <Badge color="light-primary" className="m-1">
              Tiền
            </Badge>
          </Col>
          <Col md="3">
            <div>
              <Square size={14} fill="#E6641F" stroke="#E6641F" /> Nhân khẩu học
            </div>
            <Badge color="light-primary" className="m-1">
              Nhân viên văn phòng
            </Badge>
            <Badge color="light-primary" className="m-1">
              Giáo viên
            </Badge>
            <Badge color="light-primary" className="m-1">
              Đã kết hôn
            </Badge>
          </Col>
          <Col md="3">
            <div>
              <Square size={14} fill="#E6641F" stroke="#E6641F" /> Chủ đề yêu
              thích
            </div>
            <Badge color="light-primary" className="m-1">
              Chăm sóc sức khỏe
            </Badge>
            <Badge color="light-primary" className="m-1">
              Đầu tư
            </Badge>
            <Badge color="light-primary" className="m-1">
              Kinh doanh online
            </Badge>
            <Badge color="light-primary" className="m-1">
              Khởi nghiệp
            </Badge>
          </Col>
          <Col md="3">
            <div>
              <Square size={14} fill="#E6641F" stroke="#E6641F" /> Chủ đề quan
              tâm
            </div>
            <Badge color="light-primary" className="m-1">
              Kiếm tiềm online
            </Badge>
            <Badge color="light-primary" className="m-1">
              Chứng khoán
            </Badge>
            <Badge color="light-primary" className="m-1">
              Sức khỏe{' '}
            </Badge>
            <Badge color="light-primary" className="m-1">
              Hôn nhân
            </Badge>
            <Badge color="light-primary" className="m-1">
              Bảo hiểm
            </Badge>
          </Col>
        </Row>
        <div className="mt-10">
          <PotentialCustomersTable />
        </div>
      </CardBody>
    </Card>
  )
}

export default PotentialCustomers
