import React, {useState} from 'react'
import {
  Alert,
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Progress,
  Row,
} from 'reactstrap'

import {
  ArrowLeft,
  Bookmark,
  Camera,
  Edit3,
  ShoppingCart,
  Users,
} from 'react-feather'
import {Link, useHistory} from 'react-router-dom'

// *** Custom Components
import Avatar from '@core/components/avatar'
import ModalUploadAvatar from 'pages/forms-filter-table/uploadAvatar/ModalUploadAvatar'

// **assets
import './DetailProjectCustom.style.scss'
import avatar from 'assets/images/avatars/avatar-blank.png'

const ProjectDetail = () => {
  const [centeredModal, setCenteredModal] = useState(false)
  const history = useHistory()

  return (
    <div className="project-detail">
      <Alert
        color="warning"
        className="p-0 border-0 d-inline-block"
        onClick={() => history.goBack()}
      >
        <div className="alert-body cursor-pointer">
          <span className="font-weight-bold">
            <ArrowLeft className="mr-1" /> Go back
          </span>
        </div>
      </Alert>
      <div className="position-relative">
        <img
          src="https://bacgiangweb.com/wp-content/uploads/dich-vu-thiet-ke-hinh-anh-quang-cao-bgw.jpg"
          alt="bannerGroup"
          style={{width: '100%', height: 400, borderRadius: 13}}
        />
        <p
          style={{
            // width: 30,
            // height: 30,
            border: '1px solid #fffcfc',
            textAlign: 'center',
            lineHeight: '26px',
            borderRadius: '50%',
            top: 0,
            right: 0,
            backgroundColor: '#fffcfc',
          }}
          className="text-primary cursor-pointer position-absolute m-2 p-2"
          onClick={() => setCenteredModal(true)}
        >
          <Camera size={26} />
        </p>
        <p className="mineGroup w-100 mb-0">
          Dự án đối tác: <span className="text-primary">Thi Phương</span>{' '}
        </p>
      </div>
      <div className="mt-4" style={{backgroundColor: 'white', borderRadius: 5}}>
        <CardBody>
          <Row>
            <Col lg="8" md="12">
              <div>
                <Badge color="danger" className="text-white">
                  Dự án đối tác
                </Badge>
                <h3 className="mb-0 text-primary my-2">Thi Phương Insurance</h3>
                <p className="mb-0">
                  Mô tả ngắn về dự án: Đây là một dự án vô cùng hay: It is a
                  long established fact that a reader will be distracted by the
                  readable
                </p>
              </div>
            </Col>
            <Col lg="4" md="12">
              <div className="item-options text-right ">
                <Button
                  className="btn-wishlist mr-2 mb-1 w-100 w-sm-auto"
                  color="primary"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <ShoppingCart className="mr-50" size={14} />
                    Mua
                  </div>
                </Button>
                <Button
                  className="btn-wishlist mr-2 mb-1 w-100 w-sm-auto"
                  color="light"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <Bookmark className="mr-50" size={14} /> Lưu
                  </div>
                </Button>
                <Button
                  className="btn-wishlist mr-2 mb-1 w-100 w-sm-auto"
                  color="light"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <Edit3 className="mr-50" size={14} /> Chỉnh sửa
                  </div>
                </Button>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
      <Row className="mt-4">
        <Col lg="8" md="12">
          <Card className="shadow">
            <CardBody>
              <h4 className="mb-2">Thời gian Dự án: Còn 28 ngày </h4>
              <div>
                <div>Liên hệ được mua: 82/242 liên hệ.</div>
                <Progress multi>
                  <Progress bar color="primary" value="50">
                    50%
                  </Progress>
                  <Progress bar color="light-primary" value="20">
                    20%
                  </Progress>
                </Progress>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="shadow">
            <CardBody>
              <h4 className="mb-2">Liên hệ có sẵn </h4>
              <div className="d-flex justify-content-start align-items-center mb-1">
                <Users className="text-primary" size="40" />
                <div className="profile-user-info ml-2">
                  <h5 className="mb-0 font-weight-bold text-primary">
                    +142 Liên hệ mới
                  </h5>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="8" md="12">
          <Card className="shadow">
            <CardBody>
              <h4 className="mb-2">Mô tả dự án </h4>
              <p>
                Điểm tiện lợi của Google Dịch chính là ứng dụng vẫn hoạt động
                bình thường khi bạn đang ngoại tuyến. Với khả năng dịch 59 ngôn
                ngữ khác nhau khi không có mạng Internet, Google Dịch giúp bạn
                không bỏ lỡ bất kì tình huống nào khi không có mạng internet.
              </p>
              <p>
                Điểm tiện lợi của Google Dịch chính là ứng dụng vẫn hoạt động
                bình thường khi bạn đang ngoại tuyến. Với khả năng dịch 59 ngôn
                ngữ khác nhau khi không có mạng Internet, Google Dịch giúp bạn
                không bỏ lỡ bất kì tình huống nào khi không có mạng internet.
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card className="shadow">
            <CardBody>
              <h4 className="mb-2">Đối tác Dự án </h4>
              <div className="d-flex justify-content-left align-items-center">
                <Avatar
                  className="mr-1"
                  size="lg"
                  img={avatar}
                  width="32"
                  height="32"
                />
                <div className="d-flex flex-column">
                  <Link to="#" className="user-name text-truncate mb-0">
                    <h5 className="font-weight-bold"> Thi Phương</h5>
                  </Link>
                  <p className="text-truncate text-muted mb-0">
                    Đối tác Marketing
                  </p>
                </div>
              </div>
              <p className="mt-2">Hợp tác với BCA từ ngày 20 tháng 11 2015</p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <ModalUploadAvatar
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default ProjectDetail
