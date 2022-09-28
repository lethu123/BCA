import React, {useState} from 'react'
import {Row, Col, Button} from 'reactstrap'
import ModalVideo from 'react-modal-video'
import videoBG from 'static/images/resources/video-bg-1-1.jpg'
import 'react-modal-video/scss/modal-video.scss'
import Avatar from '@core/components/avatar'
import imagePDF from 'assets/images/icons/File_PDF-512.png'
import icon1 from 'assets/images/myCourse/icon1.png'
import icon2 from 'assets/images/myCourse/icon2.png'
import icon3 from 'assets/images/myCourse/icon3.png'
import icon4 from 'assets/images/myCourse/icon4.png'
import icon5 from 'assets/images/myCourse/icon5.png'

import {Bell} from 'react-feather'

const UnderstandingCustomer = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  })
  const openModal = e => {
    e.preventDefault()
    setOpen({
      isOpen: true,
    })
  }
  return (
    <React.Fragment>
      <Row className="py-3 align-items-center">
        <Col lg="5" className="pb-2">
          <section
            className="video-one-apiton p-0 m-0"
            style={{
              overflow: 'unset',
              paddingBottom: '50px',
              //   padding: '100px 0',
            }}
          >
            <div
              className="container-fluid"
              style={{
                backgroundImage: `url(${videoBG})`,
                padding: '75px',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <ModalVideo
                channel="youtube"
                isOpen={open.isOpen}
                videoId="g2To_q1MFrc"
                onClose={() => setOpen({isOpen: false})}
              />
              <a
                href="#none"
                onClick={openModal}
                className="video-one-apiton__btn video-popup"
                style={{height: '136px', width: '136px'}}
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </section>
        </Col>
        <Col lg="6" className="pl-3 pb-2">
          <p className="course-details__tab-text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour words which don't look even slightly believable. Lorem Ipsn
            gravida nibh vel velit auctor aliquetn auci elit cons. <br /> There
            are many variations of passages of lorem ipsum available, but the
            majority have suffered alteration in some form, by injected humour
            words which don't look even slightly believable. Lorem Ipsn gravida
            nibh vel velit auctor aliquetn auci elit cons.
          </p>
        </Col>
        <Col lg="5" className="pb-2">
          <p className="course-details__tab-text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour words which don't look even slightly believable. Lorem Ipsn
            gravida nibh vel velit auctor aliquetn auci elit cons. <br /> There
            are many variations of passages of lorem ipsum available, but the
            majority have suffered alteration in some form, by injected humour
            words which don't look even slightly believable. Lorem Ipsn gravida
            nibh vel velit auctor aliquetn auci elit cons.
          </p>
        </Col>
        <Col lg="6" className="pb-2">
          <div className="text-center">
            <img src={icon1} alt="no" />
          </div>
        </Col>

        <Col lg="12">
          <h2 style={{fontWeight: '700'}}>Chân dung khách hàng</h2>
          <p className="course-details__tab-text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour words which don't look even slightly believable. Lorem Ipsn
            gravida nibh vel velit auctor aliquetn auci elit cons. <br /> There
            are many variations of passages of lorem ipsum available, but the
            majority have suffered alteration in some form, by injected humour
            words which don't look even slightly believable. Lorem Ipsn gravida
            nibh vel velit auctor aliquetn auci elit cons.
          </p>
        </Col>

        <Col lg="6" className="pb-2">
          <hr />
          <h3>Tài liệu đính kèm</h3>
          <div className="d-flex justify-content-left align-items-center">
            <Avatar className="mr-1" img={imagePDF} width="32" height="32" />
            <div className="d-flex flex-column">
              <a href="#none" download className="user-name text-truncate mb-0">
                <span className="font-weight-bold">document.pdf</span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg="6" className="pb-2">
          <div className="d-flex align-items-center my-1">
            <Avatar className="mr-1" icon={<Bell />} width="30" height="30" />
            <h3>Công cụ Thực hành HStartup</h3>
          </div>
          <Button.Ripple className="round" color="primary" outline>
            <span className="ml-auto mr-1 badge badge-danger badge-pill">
              2
            </span>
            <span>Xác định và tạo Customer Profile</span>
          </Button.Ripple>
        </Col>
      </Row>
      <Row className="py-3 bg-white">
        <Col lg="12">
          <h2 style={{fontWeight: '700'}}>Jobs-to-be-done</h2>
        </Col>

        <Col lg="6" className="pb-2">
          <div className="text-center">
            <img src={icon2} alt="no" />
          </div>
        </Col>
        <Col lg="6" className="pb-2">
          <p className="course-details__tab-text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour words which don't look even slightly believable. Lorem Ipsn
            gravida nibh vel velit auctor aliquetn auci elit cons. <br /> There
            are many variations of passages of lorem ipsum available, but the
            majority have suffered alteration in some form, by injected humour
            words which don't look even slightly believable. Lorem Ipsn gravida
            nibh vel velit auctor aliquetn auci elit cons.
          </p>
        </Col>

        <Col lg="6" className="pb-2">
          <hr />
          <h3>Tài liệu đính kèm</h3>
          <div className="d-flex justify-content-left align-items-center">
            <Avatar className="mr-1" img={imagePDF} width="32" height="32" />
            <div className="d-flex flex-column">
              <a href="#none" download className="user-name text-truncate mb-0">
                <span className="font-weight-bold">document.pdf</span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg="6" className="pb-2">
          <div className="d-flex align-items-center my-1">
            <Avatar className="mr-1" icon={<Bell />} width="30" height="30" />
            <h3>Công cụ Thực hành HStartup</h3>
          </div>
          <Button.Ripple className="round" color="primary" outline>
            <span className="ml-auto mr-1 badge badge-danger badge-pill">
              2
            </span>
            <span>Xác định và tạo Customer Profile</span>
          </Button.Ripple>
        </Col>
      </Row>
      <Row className="py-3  ">
        <Col lg="12">
          <h2 style={{fontWeight: '700'}}>
            Customer Pains - Nỗi đau khách hàng
          </h2>
        </Col>

        <Col lg="6" className="pb-2">
          <p className="course-details__tab-text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour words which don't look even slightly believable. Lorem Ipsn
            gravida nibh vel velit auctor aliquetn auci elit cons. <br /> There
            are many variations of passages of lorem ipsum available, but the
            majority have suffered alteration in some form, by injected humour
            words which don't look even slightly believable. Lorem Ipsn gravida
            nibh vel velit auctor aliquetn auci elit cons.
          </p>
        </Col>
        <Col lg="6" className="pb-2">
          <div className="text-center">
            <img src={icon3} alt="no" />
          </div>
        </Col>

        <Col lg="6" className="pb-2">
          <hr />
          <h3>Tài liệu đính kèm</h3>
          <div className="d-flex justify-content-left align-items-center">
            <Avatar className="mr-1" img={imagePDF} width="32" height="32" />
            <div className="d-flex flex-column">
              <a href="#none" download className="user-name text-truncate mb-0">
                <span className="font-weight-bold">document.pdf</span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg="6" className="pb-2">
          <div className="d-flex align-items-center my-1">
            <Avatar className="mr-1" icon={<Bell />} width="30" height="30" />
            <h3>Công cụ Thực hành HStartup</h3>
          </div>
          <Button.Ripple className="round" color="primary" outline>
            <span className="ml-auto mr-1 badge badge-danger badge-pill">
              2
            </span>
            <span>Xác định và tạo Customer Profile</span>
          </Button.Ripple>
        </Col>
      </Row>
      <Row className="py-3 bg-white ">
        <Col lg="12">
          <h2 style={{fontWeight: '700'}}>Customer Gains</h2>
        </Col>
        <Col lg="6" className="pb-2">
          <div className="text-center">
            <img src={icon4} alt="no" />
          </div>
        </Col>
        <Col lg="6" className="pb-2">
          <p className="course-details__tab-text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour words which don't look even slightly believable. Lorem Ipsn
            gravida nibh vel velit auctor aliquetn auci elit cons. <br /> There
            are many variations of passages of lorem ipsum available, but the
            majority have suffered alteration in some form, by injected humour
            words which don't look even slightly believable. Lorem Ipsn gravida
            nibh vel velit auctor aliquetn auci elit cons.
          </p>
        </Col>

        <Col lg="6" className="pb-2">
          <hr />
          <h3>Tài liệu đính kèm</h3>
          <div className="d-flex justify-content-left align-items-center">
            <Avatar className="mr-1" img={imagePDF} width="32" height="32" />
            <div className="d-flex flex-column">
              <a href="#none" download className="user-name text-truncate mb-0">
                <span className="font-weight-bold">document.pdf</span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg="6" className="pb-2">
          <div className="d-flex align-items-center my-1">
            <Avatar className="mr-1" icon={<Bell />} width="30" height="30" />
            <h3>Công cụ Thực hành HStartup</h3>
          </div>
          <Button.Ripple className="round" color="primary" outline>
            <span className="ml-auto mr-1 badge badge-danger badge-pill">
              2
            </span>
            <span>Xác định và tạo Customer Profile</span>
          </Button.Ripple>
        </Col>
      </Row>

      <Row className="py-3 ">
        <Col lg="12">
          <h2 style={{fontWeight: '700'}}>
            Kiểm chứng và lựa chọn các vấn đề của khách hàng
          </h2>
        </Col>
        <Col lg="12" className="pb-2">
          <div className="text-center">
            <img src={icon5} alt="no" />
          </div>
        </Col>
        <Col lg="12" className="pb-2">
          <p className="course-details__tab-text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour words which don't look even slightly believable. Lorem Ipsn
            gravida nibh vel velit auctor aliquetn auci elit cons. <br /> There
            are many variations of passages of lorem ipsum available, but the
            majority have suffered alteration in some form, by injected humour
            words which don't look even slightly believable. Lorem Ipsn gravida
            nibh vel velit auctor aliquetn auci elit cons.
          </p>
        </Col>

        <Col lg="6" className="pb-2">
          <hr />
          <h3>Tài liệu đính kèm</h3>
          <div className="d-flex justify-content-left align-items-center">
            <Avatar className="mr-1" img={imagePDF} width="32" height="32" />
            <div className="d-flex flex-column">
              <a href="#none" download className="user-name text-truncate mb-0">
                <span className="font-weight-bold">document.pdf</span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg="6" className="pb-2">
          <div className="d-flex align-items-center my-1">
            <Avatar className="mr-1" icon={<Bell />} width="30" height="30" />
            <h3>Công cụ Thực hành HStartup</h3>
          </div>
          <Button.Ripple className="round" color="primary" outline>
            <span className="ml-auto mr-1 badge badge-danger badge-pill">
              2
            </span>
            <span>Xác định và tạo Customer Profile</span>
          </Button.Ripple>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default UnderstandingCustomer
