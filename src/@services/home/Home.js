import React, {useEffect, useState} from 'react'
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap'
import {News, Users, Card2} from 'components/icon'
import Lightbox from 'react-image-lightbox'
import {Archive, Calendar} from 'react-feather'
// ** assets
import '@core/scss/base/pages/app-ecommerce.scss'
import 'react-image-lightbox/style.css'
// *** Component
import ListPost from '@services/post/components/ListPost'
// import ModalAddPost from '@services/post/modal/ModalAddPost'
import AddPostNewfeed from '@services/post/components/AddPostNewfeed'
import InviteJoinBCA from 'components/invite-join-BCA/InviteJoinBCA'
import DataPackage from 'components/data-package/DataPackage'
// import SuggestionUser from 'components/suggestion-user/SuggestionUser'
import EventNewfeed from '@services/event/pages/EventNewfeed'
import GroupJoinedNewsfeed from '@services/group/components/joined-group/GroupJoinedNewsfeed'
import Products from '@services/marketplace/components/list/Products'
import PackageDataNewsfeed from '../project/buy-data/PackageDataNewsfeed'
import ModalAddPost from '@services/post/components/modal/ModalAddPost'

// import QuickMenu from './quick-menu/QuickMenu'

// *** Query ********************************
import ChatQuery from '@services/chat/hook/query'
import {PostQuery} from '@services/post'
import {UserQuery} from '@services/user'

//scss
import './Custom.style.scss'

const Home = () => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    setActive(tab)
  }

  const {data} = PostQuery.useGetListAllPost()
  const {data: listUser} = UserQuery.useGetListAllUserSys()

  const products = [
    {
      id: 1,
      name: 'VicTsing Wireless Mouse,',
      slug: '3-year-unlimited-cloud-storage-service-activation-card-other-1',
      description:
        'After thousands of samples of palm data, we designed this ergonomic mouse. The laptop mouse has a streamlined arc and thumb rest to help reduce the stress caused by prolonged use of the laptop mouse.',
      brand: 'VicTsing',
      price: 10.99,
      image: require('assets/images/pages/eCommerce/27.png').default,
      hasFreeShipping: true,
      rating: 2,
    },
    {
      id: 2,
      name: 'Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses',
      slug: '360fly-panoramic-360-hd-video-camera-black-2',
      description:
        'Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen',
      brand: 'Bose',
      price: 249.0,
      image: require('assets/images/pages/eCommerce/26.png').default,
      hasFreeShipping: false,
      rating: 5,
    },
    {
      id: 3,
      name: 'Willful Smart Watch for Men Women 2020,',
      slug: '3-dr-backpack-for-solo-black-3',
      description:
        'Are you looking for a smart watch, which can not only easily keep tracking of your steps, calories, heart rate and sleep quality, but also keep you informed of incoming calls.',
      brand: 'Willful',
      price: 29.99,
      image: require('assets/images/pages/eCommerce/25.png').default,
      hasFreeShipping: false,
      rating: 5,
    },
    {
      id: 4,
      name: 'Ronyes Unisex College Bag Bookbags for Women',
      slug: '3-dr-propellers-for-3-dr-solo-drones-2-pack-black-4',
      description:
        'Made of high quality water-resistant material; padded and adjustable shoulder straps; external USB with built-in charging cable offers a convenient charging',
      brand: 'Ronyes',
      price: 23.99,
      image: require('assets/images/pages/eCommerce/24.png').default,
      hasFreeShipping: false,
      rating: 2,
    },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [editData, setEditData] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [imageList, setImageList] = useState([])
  const [isOpenLb, setIsOpenLb] = useState(false)

  const userLogin =
    (localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData'))) ||
    null
  // *** Query ********************************
  const {data: userSys} = ChatQuery.useGetListUserRightSidebar()

  useEffect(() => {
    if (userSys && userSys.data && userLogin) {
      let user = userSys.data.find(u => u.user_id === userLogin.uid)
      if (user) {
        localStorage.setItem(
          'userData',
          JSON.stringify({
            ...userLogin,
            avatar: user.avatar,
            username: user.user_name,
          }),
        )
      }
    }
  }, [userLogin, userSys])

  return (
    <div style={{maxWidth: '1200px', margin: '0 auto'}} className="NavHome">
      <Row>
        <Col md="7" lg="8">
          <div className="custom_hidescroll" style={{overflowX: 'scroll'}}>
            <Nav style={{flexWrap: 'nowrap', width: '750px'}} tabs fill>
              <NavItem>
                <NavLink
                  active={active === '1'}
                  onClick={() => {
                    toggle('1')
                  }}
                  className="flex-column h-100 border-0"
                >
                  <News size="2x" color={active === '1' ? '#e6641f' : ''} />
                  <span className="mt-1"> Bảng tin</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === '2'}
                  onClick={() => {
                    toggle('2')
                  }}
                  className="flex-column h-100 border-0"
                >
                  <Calendar size="30" />
                  <span className="mt-1"> Sự kiện</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === '3'}
                  onClick={() => {
                    toggle('3')
                  }}
                  className="flex-column h-100 border-0"
                >
                  <Users size="2x" color={active === '3' ? '#e6641f' : ''} />
                  <span className="mt-1"> Nhóm</span>
                </NavLink>
              </NavItem>
              {/* <NavItem style={{width: '20%'}}>
                <NavLink
                  active={active === '4'}
                  onClick={() => {
                    toggle('4')
                  }}
                  className="flex-column h-100 border-0"
                >
                  <Archive size="29" />
                  <span className="mt-1"> Marketplace</span>
                </NavLink>
              </NavItem>
              <NavItem style={{width: '20%'}}>
                <NavLink
                  active={active === '5'}
                  onClick={() => {
                    toggle('5')
                  }}
                  className="flex-column h-100 border-0"
                >
                  <Card2 size="2x" color={active === '5' ? '#e6641f' : ''} />
                  <span className="mt-1"> Mua dữ liệu</span>
                </NavLink>
              </NavItem> */}
            </Nav>
          </div>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              {/* Đăng Bài  */}
              <div className="mt-1">
                <AddPostNewfeed value="Bạn đang nghĩ gì...?" />
              </div>
              {/* End Đăng Bài*/}

              <ListPost
                setImageList={setImageList}
                setIsOpen={setIsOpen}
                setEditData={setEditData}
                listPost={data?.data.length > 0 ? data.data : []}
                setPhotoIndex={setPhotoIndex}
                setIsOpenLb={setIsOpenLb}
                user={listUser?.data || []}
              />
            </TabPane>
            <TabPane tabId="2">
              <EventNewfeed />
            </TabPane>
            <TabPane tabId="3">
              <GroupJoinedNewsfeed />
            </TabPane>
            <TabPane tabId="4">
              {/* End Đăng Bài*/}
              <Products data={products} />
            </TabPane>
            <TabPane tabId="5">
              <PackageDataNewsfeed />
            </TabPane>
          </TabContent>
        </Col>
        <Col md="5" lg="4">
          <InviteJoinBCA />
          <DataPackage />
          {/* <SuggestionUser data={[]} /> */}
        </Col>
      </Row>
      {isOpenLb && (
        <Lightbox
          mainSrc={imageList.length > 0 && imageList[photoIndex]}
          nextSrc={
            imageList.length > 0 &&
            imageList[(photoIndex + 1) % imageList.length]
          }
          prevSrc={
            imageList.length > 0 &&
            imageList[(photoIndex + imageList.length - 1) % imageList.length]
          }
          onCloseRequest={() => setIsOpenLb(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageList.length - 1) % imageList.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageList.length)
          }
        />
      )}
      <ModalAddPost editData={editData} isOpen={isOpen} setIsOpen={setIsOpen} />{' '}
    </div>
  )
}

export default Home
