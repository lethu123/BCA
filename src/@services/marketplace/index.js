import React, {useState} from 'react'
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap'

import {Card2, News, Users} from 'components/icon'
import {Archive, Calendar} from 'react-feather'
import {useHistory} from 'react-router-dom'

// *** Image
import avatarUser from 'assets/media/svg/avatars/047-girl-25.svg'
import avatarUser3 from 'assets/media/svg/avatars/001-boy.svg'
import imagePost from 'assets/media/product-demos/demo2.png'

// ** assets
import '@core/scss/base/pages/app-ecommerce.scss'

// *** Component
import ListPost from '@services/post/components/ListPost'
// import ModalAddPost from '@services/post/modal/ModalAddPost'
import AddPostNewfeed from '@services/post/components/AddPostNewfeed'
import InviteJoinBCA from 'components/invite-join-BCA/InviteJoinBCA'
import DataPackage from 'components/data-package/DataPackage'
import SuggestionUser from 'components/suggestion-user/SuggestionUser'
import EventNewfeed from '@services/event/pages/EventNewfeed'

import GroupJoinedNewsfeed from '@services/group/components/joined-group/GroupJoinedNewsfeed'

import Products from './components/list/Products'
import PackageDataNewsfeed from '@services/project/buy-data/PackageDataNewsfeed'

// import QuickMenu from './quick-menu/QuickMenu'

const MarketplaceIndex = () => {
  const [active, setActive] = useState('4')
  const history = useHistory()

  const toggle = tab => {
    setActive(tab)
  }
  // data
  const listPost = [
    {
      id: 1,
      user_info: {
        id: 1,
        name: 'Ruby Liam',
        avatar: avatarUser3,
      },
      date_created: new Date(),
      content:
        'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
      picture: [imagePost],
      comments: [
        {
          id: 1,
          content: 'Đây là comment số 1',
          user_info: {
            id: 1,
            username: 'Nguyễn Khắc Vũ',
            avatar: avatarUser,
          },
          replyComments: [
            {
              id: 1,
              content: 'Trả lời Comment',
              user_info: {
                id: 1,
                username: 'Vũ Reply',
                avatar: avatarUser,
              },
              date_created: new Date(),
            },
            {
              id: 2,
              content: 'Trả lời Comment nè',
              date_created: new Date(),
              user_info: {
                id: 1,
                username: 'Vũ Reply 2',
                avatar: avatarUser3,
              },
            },
          ],
          date_created: new Date(),
        },
        {
          id: 2,
          content: 'Đây là comment số 2',
          user_info: {
            id: 2,
            username: 'Hoàng Thị Quyên',
            avatar: avatarUser3,
          },
          replyComments: [],
          date_created: new Date(),
        },
      ],
    },
    {
      id: 2,
      user_info: {
        id: 2,
        name: 'David Neo',
        avatar: avatarUser3,
      },
      date_created: new Date(),
      content:
        'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
      picture: [],
      comments: [],
      replyComments: [],
    },
  ]

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
  // outstanding data
  const outstandingData = [{id: 1}, {id: 2}]
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Row>
        <Col md="7" lg="8">
          <Nav tabs>
            <NavItem style={{flexBasis: '19%'}}>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                  history.push('/home')
                }}
                className="flex-column h-100"
              >
                <News size="2x" color={active === '1' ? '#e6641f' : ''} />
                <span className="mt-2"> Bảng tin</span>
              </NavLink>
            </NavItem>
            <NavItem style={{flexBasis: '19%'}}>
              <NavLink
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
                className="flex-column h-100"
              >
                <Calendar size="35" />
                <span className="mt-2"> Sự kiện</span>
              </NavLink>
            </NavItem>
            <NavItem style={{flexBasis: '19%'}}>
              <NavLink
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
                className="flex-column h-100"
              >
                <Users size="2x" color={active === '3' ? '#e6641f' : ''} />
                <span className="mt-2"> Nhóm</span>
              </NavLink>
            </NavItem>
            <NavItem style={{flexBasis: '19%'}}>
              <NavLink
                active={active === '4'}
                onClick={() => {
                  toggle('4')
                  history.push('/home/marketplace')
                }}
                className="flex-column h-100"
              >
                <Archive size="35" />
                <span className="mt-2"> Marketplace</span>
              </NavLink>
            </NavItem>
            <NavItem style={{flexBasis: '19%'}}>
              <NavLink
                active={active === '5'}
                onClick={() => {
                  toggle('5')
                }}
                className="flex-column h-100"
              >
                <Card2 size="2x" color={active === '5' ? '#e6641f' : ''} />
                <span className="mt-2"> Mua dữ liệu</span>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              {/* Đăng Bài  */}
              <div className="mt-3">
                <AddPostNewfeed value="Bạn đang nghĩ gì thế...?" />
              </div>
              {/* End Đăng Bài*/}
              <ListPost listPost={listPost} />
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
          <DataPackage data={outstandingData} />
          <SuggestionUser data={[]} />
        </Col>
      </Row>
      {/* <ModalAddPost isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  )
}

export default MarketplaceIndex
