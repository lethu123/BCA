import React from 'react'
import {
  Card,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
} from 'reactstrap'

const InfoBizXu = () => {
  return (
    <div className="mt-5">
      <Row className="d-flex justify-content-between align-items-center">
        <Col className="d-flex" lg={6}>
          <Card className="p-5 mr-3">
            <h6>Số lượt bán</h6>
            <h4 className="text-success">328 lượt</h4>
            <p className="mb-0">cập nhật: 30/4/2021</p>
          </Card>

          <Card className="p-5">
            <h6>Doanh số</h6>
            <h4 className="text-danger">245,000,000 Vnđ</h4>
            <p className="mb-0">cập nhật: 30/4/2021</p>
          </Card>
        </Col>
        <Col lg={6} className="text-lg-right text-left mb-3">
          <UncontrolledButtonDropdown direction="left">
            <DropdownToggle color="primary" caret>
              Lọc
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#" tag="a">
                7 ngày qua
              </DropdownItem>
              <DropdownItem href="#" tag="a">
                15 ngày qua
              </DropdownItem>
              <DropdownItem href="#" tag="a">
                30 ngày qua
              </DropdownItem>
              <DropdownItem href="#" tag="a">
                60 ngày qua
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div className="mb-3">
            <h6>ID</h6>
            <p
              className="mb-0 p-1 pl-5"
              style={{backgroundColor: '#eee', borderRadius: '5px'}}
            >
              7883602
            </p>
          </div>
          <div className="mb-3">
            <h6>Tên</h6>
            <p
              className="mb-0 p-1 pl-5"
              style={{backgroundColor: '#eee', borderRadius: '5px'}}
            >
              Gói data gold
            </p>
          </div>
          <div className="mb-3">
            <h6>Giá bán</h6>
            <p
              className="mb-0 p-1 pl-5"
              style={{backgroundColor: '#eee', borderRadius: '5px'}}
            >
              99,000 BizXu
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mb-3">
            <h6>Trạng thái</h6>
            <p
              className="mb-0 p-1 pl-5 text-success"
              style={{backgroundColor: '#eee', borderRadius: '5px'}}
            >
              Hoạt động
            </p>
          </div>
          <div className="mb-3">
            <h6>Số lượng</h6>
            <p
              className="mb-0 p-1 pl-5"
              style={{backgroundColor: '#eee', borderRadius: '5px'}}
            >
              120,000 BizXu
            </p>
          </div>
          <div className="mb-3">
            <h6>Giá gốc</h6>
            <p
              className="mb-0 p-1 pl-5"
              style={{backgroundColor: '#eee', borderRadius: '5px'}}
            >
              120,000 BizXu
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default InfoBizXu
