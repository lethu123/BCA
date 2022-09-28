import {useState} from 'react'
import {
  AlignJustify,
  Plus,
  Link as LinkIcon,
  Award,
  Camera,
  MoreVertical,
  Search,
  Target,
} from 'react-feather'
import {
  Card,
  CardImg,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
  Badge,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Alert,
} from 'reactstrap'
import '@core/scss/react/pages/page-profile.scss'
import {Link, useHistory, useParams} from 'react-router-dom'

// ** asset
import image from 'assets/images/user/bg.png'
import ImgBiznet from 'assets/images/home/biznet.png'

//*** SCSS
import './Profile.style.scss'
import defaultAva from 'assets/images/avatars/avatar-blank.png'
// *** Component
import ModalBiznet from './ModalBiznet'

const ProfileHeader = ({active, setActive, routeDataCenter, user, isOwner}) => {
  const {id} = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => setIsOpen(!isOpen)
  const [centeredModal, setCenteredModal] = useState(false)

  const history = useHistory()

  if (!user)
    return (
      <Alert color="danger">
        <div className="alert-body">
          <p>
            <i
              className="fa fa-exclamation-triangle text-warning"
              size="20px"
            />{' '}
            Người dùng không tồn tại
          </p>
        </div>
      </Alert>
    )

  return (
    <Card className="profile-header mb-2">
      <CardImg
        className="cardImg"
        src={image}
        alt="User Profile Image"
        top
        style={{height: '45vh'}}
      />

      <div className="position-relative p-relative">
        <div className="profile-img-container d-flex align-items-center">
          <div className="position-relative">
            <div className="profile-img avatarProfile">
              <img
                className="rounded img-fluid"
                src={user.avatar || defaultAva}
                alt="Cardimage"
                onError={e => {
                  e.target.onerror = null
                  e.target.src = defaultAva
                }}
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

          <div className="profile-title ml-2">
            <div className="text-white d-block d-md-flex">
              <h3 className="text-white mr-4">
                {user.name || user.username}
                <Link to="#">
                  {' '}
                  <LinkIcon style={{color: 'white'}} size={18} />{' '}
                </Link>
              </h3>
              <div className="mb-2">
                <Badge color="success " className="cursor-pointer mr-2">
                  AA
                </Badge>
                <Badge color="danger" className="cursor-pointer">
                  <Plus /> Theo dõi
                </Badge>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>
                <p className="text-white cursor-pointer mb-8 mb-md-0">
                  8 Followers/ 18 Following
                </p>
                <p
                  className="text-white cursor-pointer d-none d-md-block"
                  style={{fontStyle: 'italic'}}
                >
                  https://mxh.bcavietnam.com/{user.user_name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="scoreProfile d-none d-lg-block">
          <div>
            <p className="text-white">
              <Award size={17} stroke="white" fill="#F64E60" /> Điểm tuyển dụng:{' '}
              <span
                className="text-danger"
                style={{fontSize: 17, fontWeight: 'bold'}}
              >
                100
              </span>
            </p>
            <p className="text-white">
              <Award size={17} fill="#FFA800" stroke="white" /> Điểm bán hàng:{' '}
              <span
                className="text-warning"
                style={{fontSize: 17, fontWeight: 'bold'}}
              >
                150
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="profile-header-nav">
        <Navbar
          className="justify-content-end justify-content-md-between w-100"
          expand="md"
          light
        >
          <div className="responsiveMenu">
            <Button
              color=""
              className="btn-icon navbar-toggler"
              onClick={toggleCollapse}
            >
              <AlignJustify size={21} />
            </Button>
          </div>

          <Collapse isOpen={isOpen} navbar>
            <div
              className={`profile-tabs  flex-wrap mt-1 mt-md-0 d-flex  align-items-center ${
                isOwner ? 'justify-content-between' : 'justify-content-end'
              }`}
            >
              {isOwner && (
                <Nav tabs className="mt-2">
                  {routeDataCenter.length > 0 &&
                    routeDataCenter.map(ele => (
                      <NavItem key={ele.id}>
                        <NavLink
                          active={active === ele.id}
                          onClick={() => {
                            history.push(`/user/${id}/profile/${ele.path}`)
                          }}
                          style={{border: 'none'}}
                        >
                          {ele.name}
                        </NavLink>
                      </NavItem>
                    ))}
                </Nav>
              )}

              <div className="d-flex align-items-center justify-content-end mt-2">
                <Button.Ripple
                  color="primary"
                  onClick={() => setCenteredModal(true)}
                >
                  <img
                    src={ImgBiznet}
                    alt="images"
                    style={{width: 18, height: 18, marginRight: 5}}
                  />
                  Đăng ký Biznet
                </Button.Ripple>
                <UncontrolledButtonDropdown
                  direction="up"
                  className="dropdownStyle ml-1"
                >
                  <DropdownToggle
                    color="flat-primary"
                    style={{
                      padding: 0,
                      width: '30px',
                      height: '30px',
                      borderRadius: '0',
                    }}
                  >
                    <MoreVertical />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem className="w-100">
                      <Target
                        size={16}
                        style={{marginTop: 3, marginRight: 5}}
                      />{' '}
                      Báo cáo trang cá nhân này
                    </DropdownItem>
                    <DropdownItem className="w-100">
                      <Search
                        size={16}
                        style={{marginTop: 3, marginRight: 5}}
                      />{' '}
                      Tìm kiếm trên trang cá nhân này
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
            </div>
          </Collapse>
        </Navbar>
      </div>
      <ModalBiznet
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </Card>
  )
}

export default ProfileHeader
