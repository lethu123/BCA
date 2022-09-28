import moment from 'moment'
import {useEffect, useState} from 'react'
import {AlignJustify, Facebook} from 'react-feather'
import {
  Card,
  CardImg,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
  Alert,
  TabContent,
  TabPane,
} from 'reactstrap'

import ProfileAbout from './ProfileAbout'
import ProfileFriends from './ProfileFriends'
import ProfileFilter from './ProfileFilter'
import ProfileCampaign from './ProfileCampaign'
import avatar from 'assets/images/avatars/avatar-blank.png/'
import coverImg from 'assets/images/banner/banner-12.jpg'
import {useHistory, useParams} from 'react-router-dom'
import {useRef} from 'react'

const ProfileHeader = ({data}) => {
  const {id, type} = useParams()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)

  const [active, setActive] = useState('2')

  const time = new Date()

  const toggle = () => setIsOpen(!isOpen)

  const value = useRef(data)
  const routeDataCenter = [
    // {
    //   id: '1',
    //   name: 'Tổng quan',
    //   path: 'about',
    //   component: <ProfileAbout data={value.current} />,
    // },
    {
      id: '2',
      name: 'Bạn bè',
      path: 'friends',
      component: <ProfileFriends data={value.current?.friends} />,
    },
    {
      id: '3',
      name: 'Bộ lọc',
      path: 'filter',
      component: <ProfileFilter data={value.current} />,
    },
    {
      id: '4',
      name: 'Chiến dịch',
      path: 'campaign',
      component: <ProfileCampaign data={value.current} />,
    },
  ]

  useEffect(() => {
    switch (type) {
      // case 'about':
      //   return setActive('1')

      case 'friends':
        return setActive('2')

      case 'filter':
        return setActive('3')

      case 'campaign':
        return setActive('4')

      default:
        return
    }
  }, [type])

  if (!value.current) {
    return (
      <div className="my-3">
        <Alert color="danger">
          <div className="alert-body">
            <span className="fw-bold">Không tìm thấy dữ liệu !!!</span>
          </div>
        </Alert>
        <Button.Ripple
          color="secondary"
          outline
          onClick={() =>
            history.push('/admin/automation/account-facebook/list')
          }
        >
          Quay lại
        </Button.Ripple>
      </div>
    )
  }

  return (
    <>
      <Card className="profile-header mb-2">
        <CardImg src={coverImg} alt="User Profile Image" top />
        <div className="position-relative">
          <div className="profile-img-container d-flex align-items-center">
            <div className="profile-img">
              <img height="115" src={data?.avatar_url || avatar} alt="" />
            </div>
            <div className="profile-title ml-3">
              <h2 className="text-primary">
                {data?.username}
                {/* <span className="text-primary">Active</span> */}
              </h2>
              <p className="text-primary">
                <a href={data?.link} target="_blank ">
                  <Facebook />
                </a>
                <span className="text-white ml-3 mt-1">
                  Thành viên từ: {moment(time).format('DD-MM-YYYY HH:mm:ss')}
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
            <Button
              color=""
              className="btn-icon navbar-toggler d-lg-none"
              onClick={toggle}
            >
              <AlignJustify size={21} />
            </Button>
            <Collapse isOpen={isOpen} navbar>
              <div className="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0">
                <Nav pills className="mt-5">
                  {routeDataCenter.length > 0 &&
                    routeDataCenter.map(ele => (
                      <NavItem key={ele.id}>
                        <NavLink
                          key={ele.id}
                          active={active === ele.id}
                          onClick={() => {
                            history.push(`/admin/automation/${id}/${ele.path}`)
                          }}
                          style={{border: 'none'}}
                        >
                          {ele.name}
                        </NavLink>
                      </NavItem>
                    ))}
                </Nav>
              </div>
            </Collapse>
          </Navbar>
        </div>
      </Card>

      <TabContent className="py-50" activeTab={active}>
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <TabPane tabId={ele.id} key={ele.id}>
              {ele.component}
            </TabPane>
          ))}
      </TabContent>
    </>
  )
}

export default ProfileHeader
