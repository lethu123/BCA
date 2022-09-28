import TextField from 'components/form/TextField'
import React from 'react'
import {Button, Card, CardBody, Col, Row} from 'reactstrap'
// *** Component

const PotentialCandidate = () => {
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
      </CardBody>
    </Card>
  )
}

export default PotentialCandidate
