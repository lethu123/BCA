import CheveronCircleLeft from '@services/event-v1/components/cheveron-circle/CheveronCircleLeft'
import {useEffect, useState} from 'react'
import {Camera, Plus} from 'react-feather'
import {useHistory, useParams} from 'react-router-dom'
import {
  Badge,
  Button,
  Card,
  CardImg,
  Collapse,
  Input,
  Label,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import Intro from '../components/group-detail/step/Intro'
// import Member from '../components/group-detail/step/Member'
// import NewsFeed from '../components/group-detail/step/NewsFeed'
// import Photos from '../components/group-detail/step/Photos'

const routes = [
  {
    id: '1',
    name: 'Intro',
    path: 'intro',
    component: <Intro />,
  },
  {
    id: '2',
    name: 'Member',
    path: 'member',
    // component: <Member />,
    component: '',
  },
  {
    id: '3',
    name: 'News Feed',
    path: 'newsfeed',
    // component: <NewsFeed />,
    component: '',
  },
  {
    id: '4',
    name: 'Photos',
    path: 'photos',
    // component: <Photos />,
    component: '',
  },
]

const GroupDetailPages = () => {
  const history = useHistory()
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('1')

  //**Set page step  */
  useEffect(() => {
    switch (params.type) {
      case 'intro':
        return setActive('1')
      case 'member':
        return setActive('2')
      case 'newsfeed':
        return setActive('3')
      case 'photos':
        return setActive('4')
      default:
        return
    }
  }, [params])
  //**Handle */
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Card
        className="position-relative"
        style={{marginBottom: '180px', borderRadius: '20px'}}
      >
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
                    'https://yt3.ggpht.com/Gp1ojIZz6Rxs24GBPoWkiMpA_CiAsOvwnPqT8OWDLFp_iDTF-5afR_IKwIA_ACCcyjVJgMaJEWs=s900-c-k-c0x00ffffff-no-rj'
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
                <h5 style={{color: '#000000'}} className="mb-50 ">
                  Group_Name
                </h5>
                <h5 style={{color: '#000000'}} className="mb-50 ">
                  Detail
                </h5>
              </div>
              <div className="ml-auto">
                <Button.Ripple color="green-2" className="mr-1">
                  <span className="align-middle ml-25">Invite</span>
                </Button.Ripple>
                <Button.Ripple color="primary-1">
                  <span className="align-middle ml-25">Join Group</span>
                </Button.Ripple>
              </div>
            </div>
            <div className="profile-header-nav">
              <Navbar
                container={false}
                className="justify-content-end justify-content-md-between w-100"
                expand="md"
                light
              >
                <Collapse isOpen={isOpen} navbar>
                  <div className="profile-tabs d-flex align-items-center flex-wrap mt-1 mt-md-0">
                    <Nav className="mb-0" tabs>
                      {routes.map(item => (
                        <NavItem key={item.id}>
                          <NavLink
                            onClick={() =>
                              history.push(
                                `/v1/group/detail/${params.id}/${item.path}`,
                              )
                            }
                            active={active === item.id}
                            className="fw-bold"
                          >
                            <span className="d-none d-md-block">
                              {item.name}
                            </span>
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </div>
                </Collapse>
              </Navbar>
            </div>
          </div>
        </div>
        <TabContent className="py-50" activeTab={active}>
          {routes.map(item => (
            <TabPane key={item.id} tabId={item.id}>
              {item.component}
            </TabPane>
          ))}
        </TabContent>
      </Card>
    </>
  )
}

export default GroupDetailPages
