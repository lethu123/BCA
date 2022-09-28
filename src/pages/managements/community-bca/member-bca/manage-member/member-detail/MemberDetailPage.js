import {
  Link as LinkIcon,
  Award,
  Camera,
  Circle,
  MoreVertical,
  Settings,
  Database,
  UserCheck,
  Lock,
} from 'react-feather'
import {
  Card,
  CardImg,
  Badge,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledDropdown,
} from 'reactstrap'
import {useState} from 'react'
import {Link} from 'react-router-dom'

//scss
import '../../MemberBCA.style.scss'
import '@core/scss/react/pages/page-profile.scss'
import './MemberDetail.style.scss'

//image
import banner from 'assets/images/banner/banner.png'

//component
import ProfileMember from './ProfileMember'
import PersonalInfo from './PersonalInfo'
import ModalSettingAdminRole from './ModalSettingAdminRole'

const MemberDetailPage = () => {
  const [adminRole, setAdminRole] = useState(false)
  return (
    <div id="user-profile">
      <Breadcrumb className="py-3 mb-0">
        <BreadcrumbItem>
          <Link to="/home"> Trang Chủ </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/admin/thanh-vien-new-alpha/quan-ly-thanh-vien">
            Quản lý thành viên BCA{' '}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Hoàng Quyên </span>
        </BreadcrumbItem>
      </Breadcrumb>
      <Card className="profile-header mb-2 position-relative">
        <CardImg
          src={banner}
          alt="User Profile Image"
          top
          style={{
            backgroundColor: '#eee',
            border: '12px solid #fff',
            height: '300px',
          }}
          className="banner-image-member"
        />

        <div>
          <div className="profile-img-container d-flex align-items-center">
            <div className="position-relative">
              <div className="profile-img">
                <img
                  className="rounded img-fluid"
                  src="https://res.cloudinary.com/duca7llkq-hinnox/image/upload/c_thumb,h_180,w_180/v1611280681/p00adeffrt3hlwlsowtz.png"
                  alt="Cardimage"
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 35,
                  height: 35,
                  lineHeight: '35px',
                  borderRadius: '50%',
                  border: '1px solid white',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                }}
              >
                <Camera size={17} className="text-danger" />
              </div>
            </div>

            <div className="profile-title ml-md-8 ml-4">
              <div className="text-primary">
                <h2 className="text-secondary ">
                  Hoàng Quyên
                  <Link to="#">
                    {' '}
                    <LinkIcon className="text-primary" size={18} />{' '}
                  </Link>
                </h2>
                <div className="text-primary font-weight-bolder active-text">
                  <Circle
                    size={12}
                    className="text-white mr-3 "
                    fill="#ffa800"
                  />
                  Đăng nhập 2 ngày trước
                </div>
                <div className="mt-2 d-block d-md-flex followerMember">
                  <Badge
                    color="primary"
                    className="font-weight-bolder mr-2 mt-2"
                  >
                    AA
                  </Badge>
                  <Badge
                    color="danger"
                    className="font-weight-bolder mr-2 mt-2"
                  >
                    Data Center 1
                  </Badge>
                  <Badge
                    color="success"
                    className="font-weight-bolder text-white mt-2"
                  >
                    Admin
                  </Badge>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-3 ">
                <div className="followerMember">
                  <p className="text-secondary cursor-pointer mb-0 font-weight-bold text-follower">
                    8 Followers/ 18 Following
                  </p>
                  <u
                    className="text-primary cursor-pointer font-weight-bold"
                    style={{fontStyle: 'italic'}}
                  >
                    https://mxh.bcavietnam.com/HoangQuyen
                  </u>
                </div>
              </div>
            </div>
          </div>
          <div className="revenueProfile">
            <div className="d-flex align-items-center">
              <div
                style={{
                  height: '55px',
                  backgroundColor: '#E6641F',
                  borderRadius: '10px',
                  fontSize: '18px',
                }}
                className="py-1 px-3 mr-3 text-white total-price"
              >
                <p className="mb-0" style={{fontSize: '11px'}}>
                  Tổng doanh thu
                </p>
                14,290,000 Vnđ
              </div>
              <div>
                <UncontrolledButtonDropdown
                  direction="left"
                  className="memberDetail"
                >
                  <DropdownToggle
                    color="secondary"
                    caret
                    className=" p-1 more-vertical-btn"
                  >
                    <MoreVertical size={18} />
                  </DropdownToggle>
                  <DropdownMenu className="w-250px">
                    {/* <DropdownItem>
                      <Settings size={20} className="mr-2 text-primary" />
                      Thiết lập cấp đại lý bán hàng
                    </DropdownItem> */}
                    <UncontrolledDropdown className="d-block" direction="right">
                      <DropdownToggle
                        caret
                        className="dropdown-item"
                        color="default"
                        tag="a"
                      >
                        <Settings size={20} className="mr-2 text-primary" />
                        <span>Thiết lập cấp đại lý bán hàng</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Cấp AA
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Cấp FA
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Cấp UM
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Cấp PUM
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Cấp BM
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Cấp PBM
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown className="d-block" direction="right">
                      <DropdownToggle
                        caret
                        className="dropdown-item"
                        color="default"
                        tag="a"
                      >
                        <Database size={20} className="mr-2 text-primary" />
                        <span>Thiết lập cấp DataCenter</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span> Data Center 1</span>
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Data Center 2
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Data Center 3
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Data Center đối tác
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <DropdownItem onClick={() => setAdminRole(!adminRole)}>
                      <UserCheck size={20} className="mr-2 text-primary" />
                      Thiết lập vai trò quản trị
                    </DropdownItem>
                    <DropdownItem>
                      <Lock size={20} className="mr-2 text-primary" />
                      Khóa tài khoản
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
            </div>
          </div>
          <div className="scoreProfile w-100">
            <div className="d-flex d-md-block pt-5 justify-content-center justify-content-md-end">
              <p className="text-secondary font-weight-bolder ">
                <Award size={17} stroke="white" fill="#F64E60" /> Điểm tuyển
                dụng:{' '}
                <span
                  className="text-danger mr-2 mr-md-0"
                  style={{fontSize: 17}}
                >
                  85/100
                </span>
              </p>
              <p className="text-secondary font-weight-bolder">
                <Award size={17} fill="#FFA800" stroke="white" /> Điểm bán hàng:{' '}
                <span className="text-warning" style={{fontSize: 17}}>
                  90/100
                </span>
              </p>
            </div>
          </div>
        </div>
      </Card>
      <Row>
        <Col lg={4}>
          {' '}
          <ProfileMember />
        </Col>
        <Col lg={8}>
          <PersonalInfo />
        </Col>
      </Row>

      <ModalSettingAdminRole
        adminRole={adminRole}
        setAdminRole={setAdminRole}
      />
    </div>
  )
}

export default MemberDetailPage
