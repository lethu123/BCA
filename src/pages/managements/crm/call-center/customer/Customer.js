import SelectField from 'components/form/SelectField'
import TextField from 'components/form/TextField'
import React from 'react'
import {Badge, Button, Card, CardBody, Col, Row} from 'reactstrap'
// *** Component
import CustomerTable from './CustomerTable'
const Customer = () => {
  return (
    <Card>
      <CardBody>
        <h6 className="text-primary">Tìm kiếm khách hàng</h6>
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
                name="hopdong"
                size="md"
                label="Số hợp đồng"
                placeholder="Nhập số hợp đồng ..."
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
              <SelectField
                name="select"
                label="Tài liệu khách hàng"
                onChange={(name, value) => console.log(value)}
                options={[
                  {
                    label: 'Option 1',
                    value: 'value1',
                  },
                  {
                    label: <Badge color="warning">Option2</Badge>,
                    value: 'value2',
                  },
                ]}
              />
            </Col>
            <Col md="4">
              <TextField
                type="text"
                name="document"
                size="md"
                label="Số tài liệu"
                placeholder="Nhập số tài liệu ..."
                onChange={(name, value) => console.log(value)}
              />
            </Col>
            <Col md="4">
              <TextField
                type="text"
                name="email"
                size="md"
                label="Số tài liệu"
                placeholder="Nhập email ..."
                onChange={(name, value) => console.log(value)}
              />
            </Col>
          </Row>
          <div className="mt-5">
            <Button.Ripple color="primary" className="mr-3">
              Tìm kiếm
            </Button.Ripple>
            <Button.Ripple color="secondary">Reset</Button.Ripple>
          </div>
        </div>
        <div>
          <h6
            className="text-primary mt-5"
            style={{
              borderBottom: '3px solid #E6641F',
              paddingBottom: 8,
              marginBottom: 30,
            }}
          >
            Thông tin khách hàng
          </h6>
          <div className="w-75 mx-auto">
            <Row>
              <Col md="6" className="mb-1">
                <div className="d-flex">
                  <p className="mr-2">Tên khách hàng: </p>
                  <p className="font-weight-bold">Nguyễn Văn A</p>
                </div>
              </Col>
              <Col md="6" className="mb-1">
                <div className="d-flex">
                  <p className="mr-2">Email: </p>
                  <p className="font-weight-bold">khacvu0505@gmail.com</p>
                </div>
              </Col>
              <Col md="6" className="mb-1">
                <div className="d-flex">
                  <p className="mr-2">Ngày sinh: </p>
                  <p className="font-weight-bold">13/09/1991</p>
                </div>
              </Col>
              <Col md="6" className="mb-1">
                <p className="mr-2">
                  Địa chỉ tạm trú:{' '}
                  <span> Thôn 12, xã Mỹ Sơn, huyện Ninh Sơn, tỉnh Đaklak</span>{' '}
                </p>
              </Col>
              <Col md="6" className="mb-1">
                <div className="d-flex">
                  <p className="mr-2">Số điện thoại: </p>
                  <p className="font-weight-bold">0366952584</p>
                </div>
              </Col>
              <Col md="6" className="mb-1">
                <div className="d-flex">
                  <p className="mr-2">CMND/CCCD: </p>
                  <p className="font-weight-bold">265852104</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <CustomerTable />
        </div>
      </CardBody>
    </Card>
  )
}

export default Customer
