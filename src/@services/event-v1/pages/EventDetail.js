import React, {useState} from 'react'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Input,
  Label,
  Row,
} from 'reactstrap'
import CheveronCircleLeft from '../components/cheveron-circle/CheveronCircleLeft'
import {
  Camera,
  Clock,
  CreditCard,
  Eye,
  Plus,
  Share2,
  Star,
  UserPlus,
} from 'react-feather'
import TitleWithLine from '../components/TitleWithLine'
import { useHistory } from 'react-router-dom';
import ModalInviteEvent from '../components/ModalInviteEvent';
import './SidebarEvent.style.scss'
const data = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
    name: 'Anh Kiệt',
    email: 'pakiet@hspace.biz',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
    name: 'Anh Kiệt',
    email: 'pakiet@hspace.biz',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
    name: 'Anh Kiệt',
    email: 'pakiet@hspace.biz',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png',
    name: 'Anh Kiệt',
    email: 'pakiet@hspace.biz',
  },
]

const EventDetail = () => {
  const history = useHistory()
  const [open,setOpen]=useState()
  return (
    <>
      <Card className="position-relative">
        <div
          className="position-absolute p-2 d-flex align-items-center cursor-pointer "
          style={{top: '0', left: '0'}}
          onClick={() => history.goBack()}
        >
          <CheveronCircleLeft width="30px" height="30px" fill="#FCFCFC" />
          <h4 style={{color: '#FCFCFC'}} className="title-24 ml-50 mb-0">
            Back
          </h4>
        </div>
        <div className="position-releative">
          <CardImg
            style={{
              borderRadius: '20px',
              maxHeight: '250px',
              objectFit: 'cover',
            }}
            src={
              'https://res.cloudinary.com/cloudhspace/image/upload/v1650425326/dev.hspace.biz/event-profile/unsplash_27HiryxnHJk_o9xs42.png'
            }
            alt="User Profile Image"
          />
          <Label
            className="position-absolute  d-flex align-items-center justify-content-center cursor-pointer"
            style={{
              top: '20px',
              right: '13px',
              backgroundColor: 'white',
              width: '165px',
              height: '36px',
              borderRadius: '18px',
            }}
            for={'uploadCoverRef'}
          >
            <Camera size={20} color="#ffffff" fill="black" />
            <p
              style={{color: '#000000', fontSize: '14px'}}
              className=" ml-50 mb-0"
            >
              Edit cover photo
            </p>
            <Input
              type="file"
              id="uploadCoverRef"
              onChange={e => {
                // setFile(e.target.files?.[0])
              }}
              hidden
              accept="image/*"
            />
          </Label>
        </div>
        <div className="position-relative">
          <div
            style={{
              maxWidth: '1000px',
              transform: 'translateY(-50%)',
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              boxShadow:
                '0px 1px 1px rgba(0, 0, 0, 0.06), 0px 2px 2px rgba(0, 0, 0, 0.08)',
            }}
            className={` m-auto py-1 px-2`}
          >
            <div className="d-flex">
              <div className=" position-relative" style={{minWidth: '100px'}}>
                <img
                  style={{objectFit: 'cover'}}
                  className="rounded"
                  src={
                    'https://res.cloudinary.com/cloudhspace/image/upload/v1650488021/dev.hspace.biz/talent-job/job1_itkhn4.png'
                  }
                  width={100}
                  height={100}
                  alt=""
                />
                <Label
                  className="position-absolute rounded-circle d-flex align-items-center justify-content-center cursor-pointer"
                  style={{
                    bottom: '-8px',
                    right: '-8px',
                    width: '25px',
                    height: '25px',
                    backgroundColor: 'gray',
                  }}
                  for={'uploadAvatarRef'}
                >
                  <Camera size={15} fill="#ffffff" />
                  <Input
                    type="file"
                    id="uploadAvatarRef"
                    onChange={e => {
                      // onChange(e)
                    }}
                    hidden
                    accept="image/*"
                  />
                </Label>
              </div>
              <div className="ml-1">
                <Badge
                  style={{backgroundColor: '#E04A56', padding: '7px'}}
                  className="mb-50"
                  color="primary"
                >
                  Owner
                </Badge>
                <h5 style={{color: '#000000'}} className="mb-50 ">
                  Phan Anh Kiệt
                </h5>
                <h5 style={{color: '#000000'}} className="mb-50 ">
                  lethu@hspace.biz
                </h5>
              </div>
              <div className="ml-auto">
                <Button.Ripple color="primary-1">
                  <Plus size={18} />
                  <span className="align-middle ml-25">Tham Gia</span>
                </Button.Ripple>
                {/* <Button.Ripple
                  className="ml-50"
                  
                 
                  color="primary-1"
                  outline
                >
                  <Share2  size={14} />
                  <span className="align-middle ml-25">Tham Gia</span>
                </Button.Ripple> */}
              </div>
            </div>
          </div>
        </div>
        <CardBody
          style={{transform: 'translateY(-50px)', maxWidth: '1000px'}}
          className="m-auto w-100"
        >
          <Row>
            <Col md={4} sm={12}>
              <Row>
                <Col sm={12} className="p-0">
                  <Card className="p-1">
                    <TitleWithLine
                      className="title-24 mb-0"
                      color="#DCF0C6"
                      text="About"
                    />
                    <div className="d-flex mt-1 align-items-center">
                      <Clock />
                      <h5 className="mb-0 ml-50">Thời gian:</h5>
                      <span className="mb-0 ml-50">May 5, 2022 12:00 PM</span>
                    </div>
                    <div className="d-flex mt-1 align-items-center">
                      <CreditCard />
                      <h5 className="mb-0 ml-50">ID:</h5>
                      <span className="mb-0 ml-50">934 5949 4601</span>
                    </div>
                    <div className="d-flex mt-1 align-items-center">
                      <Eye />
                      <h5 className="mb-0 ml-50">Mật khẩu:</h5>
                      <span className="mb-0 ml-50">14052022</span>
                    </div>
                    <div className="mt-1 ">
                      <h5 className="mb-0 mb-50">Tagline:</h5>
                      <div className="d-flex align-items-center">
                        <Badge className="p-50">Viêm phổi</Badge>
                        <Badge className="p-50 ml-50">covid</Badge>
                      </div>
                    </div>
                    <div className="mt-1 ">
                      <h5 className="mb-0 mb-50">Hình thức:</h5>
                      <div className="d-flex align-items-center">
                        <Badge
                          style={{backgroundColor: '#E04A56', padding: '7px'}}
                          className="p-50"
                        >
                          Online
                        </Badge>
                        <Badge
                          style={{
                            backgroundColor: '#DCF0C6',
                            padding: '7px',
                            color: '#1C3218',
                          }}
                          className="p-50 ml-50"
                        >
                          Public
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm={12} className="p-0">
                  <Card className="p-1">
                    <TitleWithLine
                      className="title-24 mb-0"
                      color="#FCEDEE"
                      text="Invite"
                    />
                    {data?.map(item => (
                      <>
                        <div
                          className="d-flex align-items-center mt-1"
                          key={item.id}
                        >
                          <img
                            width={50}
                            height={50}
                            className="rounded-circle"
                            style={{objectFit: 'cover'}}
                            src={
                              item?.url
                                ? item?.url
                                : 'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
                            }
                            size="xl"
                          />
                          <div className="ml-50">
                            <h5 className="mb-0 ml-50">{item?.name}</h5>
                            <span className="mb-0 ml-50">{item?.email}</span>
                          </div>
                        </div>
                      </>
                    ))}
                    <Button.Ripple color="pink" className="mt-1 py-1" onClick={()=>{setOpen(true)}}>
                      <UserPlus color="black" size={18} />
                      <span
                        style={{color: '#1C3218', fontSize: '18px'}}
                        className="align-middle ml-50"
                      >
                        Invite
                      </span>
                    </Button.Ripple>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md={8} sm={12}>
              <Card className="p-1">
                <TitleWithLine
                  className="title-24 mb-0"
                  color="#EFF9FE"
                  text="Mô tả"
                />
                <CardBody>
                  <p style={{color: '#000000'}}>
                    Với sự tham gia của các chuyên gia: 1. PGS.TS. Chu Thị Hạnh
                    - Phó chủ tịch Hội Hô Hấp Việt Nam, Chủ tịch Hội Hô Hấp Hà
                    Nội, Trưởng khoa Hô Hấp Bệnh viện Đa khoa Tâm Anh Hà Nội. 2.
                    PGS.TS. Phan Thu Phương - Phó chủ tịch Hội Hô hấp Hà Nội,
                    Giám đốc Trung tâm Hô Hấp Bệnh viện Bạch Mai. 3. PGS.TS. Vũ
                    Văn Giáp - Tổng thư ký Hội Hô hấp Việt Nam, Phó giám đốc
                    Trung tâm Hô hấp Bệnh viện Bạch Mai. Thông tin này đã được
                    đăng tải công khai trên website của Hội:
                    =======================
                  </p>
                  <Row>
                    <Col xl={6} md={6} sm={12} className="mt-1">
                      <img
                        style={{objectFit: 'cover'}}
                        className="w-100"
                        src="https://res.cloudinary.com/cloudhspace/image/upload/v1650947526/dev.hspace.biz/startup/image_81_cjfycd.png"
                      ></img>
                    </Col>
                    <Col xl={6} md={6} sm={12} className="mt-1">
                      <img
                        style={{objectFit: 'cover'}}
                        className="w-100"
                        src="https://res.cloudinary.com/cloudhspace/image/upload/v1650947526/dev.hspace.biz/startup/image_81_cjfycd.png"
                      ></img>
                    </Col>
                    <Col xl={6} md={6} sm={12} className="mt-1">
                      <img
                        style={{objectFit: 'cover'}}
                        className="w-100"
                        src="https://res.cloudinary.com/cloudhspace/image/upload/v1650947526/dev.hspace.biz/startup/image_81_cjfycd.png"
                      ></img>
                    </Col>
                    <Col xl={6} md={6} sm={12} className="mt-1">
                      <img
                        style={{objectFit: 'cover'}}
                        className="w-100"
                        src="https://res.cloudinary.com/cloudhspace/image/upload/v1650947526/dev.hspace.biz/startup/image_81_cjfycd.png"
                      ></img>
                    </Col>
                    <p style={{color: '#000000'}}>
                      <br />
                      🌐 Trang chủ: http://hoihohapvietnam.org <br />
                      📎 Zalo nhóm Hội viên: https://bit.ly/3jMKeIc <br />
                      📎 Đăng ký Hội viên: https://bit.ly/3KSNg9x <br />
                      🏁 Facebook: https://www.facebook.com/HoihohapVietnam.VNRS{' '}
                      <br />
                      🇻🇳 Hội nghị : http://hoinghi.hoihohapvietnam.org
                    </p>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <ModalInviteEvent open={open} toggle={()=>{
        setOpen(!open)
      }}/>
    </>
  )
}

export default EventDetail
