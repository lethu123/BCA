import {Bookmark, Plus} from 'react-feather'
import {Button, Col, Row} from 'reactstrap'

// ** component
import ProductCards from '../card/ProductCard'

const ProjectBookmark = () => {
  return (
    <div className="mt-1">
      <Row className="w-100 mx-0 mb-2">
        <Col lg="9" md="12" className="pl-0">
          <div className="d-flex justify-content-start align-items-center mb-1">
            <Bookmark className="text-primary mr-5" size="40" />
            <div className="profile-user-info ">
              <h4 className="mb-0 ">Dự án Đã lưu</h4>
              <p className="mb-0">Xem lại các Dự án bạn quan tâm</p>
            </div>
          </div>
        </Col>
        <Col lg="3" md="12" className="text-right pr-0">
          <Button.Ripple color="primary">
            <Plus size={14} />
            <span className="align-middle ml-2">Tạo Dự án Thành viên</span>
          </Button.Ripple>
        </Col>
      </Row>
      <div>
        <div className="profile-user-info  mb-3">
          <h5 className="mb-0 font-weight-bold">Dự án InHouse</h5>
          <small className="text-muted">Các Dự án được thực hiện bởi BCA</small>
        </div>
        <Row>
          <Col lg="6">
            <ProductCards type="saved" />
          </Col>
          <Col lg="6">
            <ProductCards type="saved" />
          </Col>
        </Row>
      </div>
      <div>
        <div className="profile-user-info  mb-3">
          <h5 className="mb-0 font-weight-bold">Dự án Thành viên</h5>
          <small className="text-muted">
            Các Dự án được thực hiện bởi Thành viên của BCA
          </small>
        </div>
        <Row>
          <Col lg="6">
            <ProductCards type="saved" />
          </Col>
          <Col lg="6">
            <ProductCards type="saved" />
          </Col>
        </Row>
      </div>
      <div>
        <div className="profile-user-info  mb-3">
          <h5 className="mb-0 font-weight-bold">Dự án Đối tác</h5>
          <small className="text-muted">
            Các Dự án được thực hiện bởi Đối tác Tin cậy của BCA
          </small>
        </div>
        <Row>
          <Col lg="6">
            <ProductCards type="saved" />
          </Col>
          <Col lg="6">
            <ProductCards type="saved" />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProjectBookmark
