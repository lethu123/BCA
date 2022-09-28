import {useEffect, useState} from 'react'
import {Bell, Book, Bookmark, Compass, RefreshCcw} from 'react-feather'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
} from 'reactstrap'

// ** component
import ProjectDiscovery from '../components/project-discovery/ProjectDiscovery'
import DataExtension from '../components/data-extension/DataExtension'
import HistoryBuyData from '../components/history-buy-data/HistoryBuyData'
import ProjectNotification from '../components/project-notification/ProjectNotification'
import ProjectBookmark from '../components/project-bookmark/ProjectBookmark'
import {useHistory, useParams} from 'react-router-dom'

const BuyDataIndex = () => {
  const [active, setActive] = useState('1')

  const routeDataCenter = [
    {
      id: '1',
      name: 'Khám phá dự án',
      icon: <Compass size="18" />,
      path: 'kham-pha',
      component: <ProjectDiscovery />,
    },
    {
      id: '2',
      name: 'Gói gia hạn Data',
      icon: <RefreshCcw size="18" />,
      path: 'goi-gia-han-data',
      component: <DataExtension />,
    },
    {
      id: '3',
      name: 'Lịch sử Mua Dữ liệu',
      icon: <Book size="18" />,
      path: 'lich-su-mua-du-lieu',
      component: <HistoryBuyData />,
    },
    {
      id: '4',
      name: 'Thông báo Dự án',
      icon: <Bell size="18" />,
      path: 'thong-bao-du-an',
      component: <ProjectNotification />,
    },
    {
      id: '5',
      name: 'Dự án Đã lưu',
      icon: <RefreshCcw size="18" />,
      path: 'du-an-da-luu',
      component: <ProjectBookmark />,
    },
  ]
  const {type} = useParams()
  const history = useHistory()

  useEffect(() => {
    switch (type) {
      case 'kham-pha':
        return setActive('1')

      case 'goi-gia-han-data':
        return setActive('2')

      case 'lich-su-mua-du-lieu':
        return setActive('3')

      case 'thong-bao-du-an':
        return setActive('4')

      case 'du-an-da-luu':
        return setActive('5')

      default:
        return
    }
  }, [type])

  return (
    <Card>
      <CardBody>
        <Nav pills>
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/home/mua-du-lieu-du-an/${ele.path}`)
                  }}
                  className="border-0"
                >
                  {ele.icon} {ele.name}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
        <TabContent className="py-50 mt-1" activeTab={active}>
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <TabPane tabId={ele.id} key={ele.id}>
                {ele.component}
              </TabPane>
            ))}
        </TabContent>
      </CardBody>
    </Card>
  )
}

export default BuyDataIndex
