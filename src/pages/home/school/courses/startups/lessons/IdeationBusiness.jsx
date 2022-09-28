import React, {useState} from 'react'
import {Row, Col} from 'reactstrap'
import ModalVideo from 'react-modal-video'
import videoBG from 'static/images/resources/video-bg-1-1.jpg'
import 'react-modal-video/scss/modal-video.scss'
import Avatar from '@core/components/avatar'
import imagePDF from 'assets/images/icons/File_PDF-512.png'

const IdeationBusiness = () => {
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
      <Row className="align-items-center py-3">
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
      </Row>
    </React.Fragment>
  )
}

export default IdeationBusiness
