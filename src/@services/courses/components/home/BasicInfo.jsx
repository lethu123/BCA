import React from 'react'
import {Lock} from 'react-feather'
import {Badge, Card, CardBody, Col, FormGroup, Row} from 'reactstrap'

const BasicInfo = () => {
  return (
    <Row className="mt-5">
      <Col lg="6" xl="12" md="12" className="col-xxl-6">
        <Card>
          <CardBody>
            <FormGroup>
              <label className=" text-dark">Trạng thái</label>
              <div className="d-flex align-items-center justify-content-center">
                <span className="switch switch-success">
                  <label>
                    <input type="checkbox" checked="checked" name="status" />
                    <span></span>
                  </label>
                </span>
                <div>Đang hoạt động </div>
              </div>
            </FormGroup>
            <FormGroup>
              <label className=" text-dark">
                ID Khóa học <Lock size="15" />
              </label>
              <div className="bg-custom round py-2 px-3">12345ABC</div>
            </FormGroup>
            <Row>
              <Col xl="6">
                <FormGroup>
                  <label className=" text-dark">Danh mục</label>
                  <div className="bg-custom round py-2 px-3 font-weight-bolder">
                    Nhà phân phối chuẩn
                  </div>
                </FormGroup>
              </Col>
              <Col xl="6">
                <FormGroup>
                  <label className=" text-dark">Chủ đề</label>
                  <div className="bg-custom font-weight-bolder round py-2 px-3">
                    Hệ miễn dịch
                  </div>
                </FormGroup>
              </Col>
              <Col xl="6">
                <FormGroup>
                  <label className="  text-dark">Độ khó</label>
                  <div className="bg-custom round font-weight-bolder py-2 px-3">
                    Cơ bản
                  </div>
                </FormGroup>
              </Col>
              <Col xl="6">
                <FormGroup>
                  <label className="font-weight-bolder text-dark">
                    Ngôn ngữ
                  </label>
                  <div className="bg-custom round py-2 px-3">
                    <Badge color="dark" className="mr-2 my-1 round">
                      Tiếng Anh
                    </Badge>
                    <Badge color="dark" className="mr-2 my-1 round">
                      Tiếng Việt
                    </Badge>
                  </div>
                </FormGroup>
              </Col>
              <Col xl="6">
                <FormGroup>
                  <label className=" text-dark">Số giờ học</label>
                  <div className="bg-custom font-weight-bolder round py-2 px-3">
                    34
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <hr />
            <FormGroup>
              <label className="font-weight-bolder text-dark">
                Tên khóa học
              </label>
              <div className="bg-custom round py-2 px-3">
                21 Ngày xây dựng niềm tin
              </div>
            </FormGroup>
            <FormGroup>
              <label className="font-weight-bolder text-dark">Giới thiệu</label>
              <div className="bg-custom round py-2 px-3">
                Dragée jujubes caramels tootsie roll gummies gummies icing
                bonbon. Candy jujubes cake cotton candy. Jelly-o lollipop oat
                cake marshmallow fruitcake candy canes toffee. Jelly oat cake
                pudding jelly beans brownie lemon drops ice cream halvah muffin.
                Brownie candy tiramisu macaroon tootsie roll danish.
              </div>
            </FormGroup>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6" xl="12" md="12" className="col-xxl-6">
        <FormGroup>
          <label className="font-weight-bolder text-dark">
            Khóa học dành cho ai (Participants)
          </label>
          <div className="bg-custom round py-2 px-3">
            <Badge color="dark" className="mr-2 my-1 round">
              Giáo viên
            </Badge>
            <Badge color="dark" className="mr-2 my-1 round">
              Học sinh
            </Badge>
            <Badge color="dark" className="mr-2 my-1 round">
              Sinh viên
            </Badge>
          </div>
        </FormGroup>
        <FormGroup>
          <label className="font-weight-bolder text-dark">
            Kĩ năng đạt được (Skills)
          </label>
          <div className="bg-custom round py-2 px-3">
            <Badge color="dark" className="mr-2 my-1 round">
              Tự tin giao tiếp
            </Badge>
            <Badge color="dark" className="mr-2 my-1 round">
              Làm việc nhóm
            </Badge>
            <Badge color="dark" className="mr-2 my-1 round">
              Giải quyết vấn đề
            </Badge>
          </div>
        </FormGroup>
        <FormGroup>
          <label className="font-weight-bolder text-dark">
            Lợi ích sau khóa học (Benefits)
          </label>
          <div className="bg-custom round py-2 px-3">
            <Badge color="dark" className="mr-2 my-1 round">
              Benefit 1
            </Badge>
            <Badge color="dark" className="mr-2 my-1 round">
              Benefit 2
            </Badge>
            <Badge color="dark" className="mr-2 my-1 round">
              Benefit 3
            </Badge>
          </div>
        </FormGroup>
        <FormGroup>
          <label className=" text-dark">
            Sau khóa học tôi đạt được gì? (Outcomes)
          </label>
          <div className="bg-custom round py-2 px-3">
            <Badge color="dark" className="mr-2 my-1 round">
              Outcomes 1
            </Badge>
            <Badge color="dark" className="mr-2 my-1 round">
              Outcomes 2
            </Badge>
            <Badge color="dark" className="mr-2 my-1 round">
              Outcomes 3
            </Badge>
          </div>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default BasicInfo
