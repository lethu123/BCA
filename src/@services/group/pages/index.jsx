import {Users} from 'components/icon'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap'
import {Plus} from 'react-feather'
import {useEffect, useState} from 'react'

// ** component
import ExploreGroup from '../components/group-training/explored-group/ExploreGroup'
import MyGroup from '../components/group-training/my-group/MyGroup'
import GroupJoined from '../components/group-training/joined-group/GroupJoined'
import {ModalCreateGroup} from '@services/group'
import RequestedJoinGroup from '@services/group/components/datatable/RequestedJoinGroup'
import InvitedJoinGroup from '@services/group/components/datatable/InvitedJoinGroup'

// ** context
import {GroupProvider} from '@services/group'
import {useHistory, useParams} from 'react-router-dom'

const routes = [
  {
    id: '1',
    name: 'Khám phá nhóm',
    path: 'kham-pha',
    component: <ExploreGroup />,
  },
  {
    id: '2',
    name: 'Nhóm do bạn quản lý',
    path: 'diem-hoc-tap-cua-toi',
    component: <MyGroup />,
  },
  {
    id: '3',
    name: 'Nhóm bạn tham gia',
    path: 'tham-gia',
    component: <GroupJoined />,
  },
  {
    id: '4',
    name: 'Yêu cầu tham gia',
    path: 'yeu-cau-tham-gia',
    component: <RequestedJoinGroup />,
  },
  {
    id: '5',
    name: 'Lời mời tham gia',
    path: 'loi-moi-tham-gia',
    component: <InvitedJoinGroup />,
  },
]

const GroupIndex = () => {
  // *** Routing
  const history = useHistory()
  const {type} = useParams()

  // *** States
  const [active, setActive] = useState('1')
  const [modal, setModal] = useState(false)

  useEffect(() => {
    switch (type) {
      case 'kham-pha':
        return setActive('1')
      case 'diem-hoc-tap-cua-toi':
        return setActive('2')
      case 'tham-gia':
        return setActive('3')
      case 'yeu-cau-tham-gia':
        return setActive('4')
      case 'loi-moi-tham-gia':
        return setActive('5')

      default:
        return
    }
  }, [type])

  const toggleModal = () => setModal(!modal)

  return (
    <GroupProvider>
      <Card>
        <CardHeader className=" border-bottom">
          <Row className="w-100">
            <Col xl="6" md="8" sm="12">
              <div className="d-flex my-1 justify-content-start align-items-center">
                <Users color="primary" size="25" />
                <div className="profile-user-info ml-1 ">
                  <h5 className="mb-0 font-weight-bolder text-primary">Nhóm</h5>
                  <p className="text-muted mb-0">
                    Xem và quản lý các nhóm của bạn hoặc bạn đang tham gia
                  </p>
                </div>
              </div>
            </Col>
            <Col xl="6" md="4" sm="12">
              <div className="d-flex align-items-center my-1  justify-content-md-end">
                {/* <Select
                  theme={selectThemeColors}
                  className="react-select w-50 mr-1"
                  classNamePrefix="select"
                  placeholder="Phân loại ..."
                  // defaultValue={colourOptions[0]}
                  options={colourOptions}
                /> */}
                <Button.Ripple color="primary" onClick={toggleModal}>
                  <Plus size={14} />
                  <span className="align-middle ml-1">Tạo nhóm</span>
                </Button.Ripple>
              </div>
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="pt-1">
          <Nav tabs>
            {routes.map(r => (
              <NavItem>
                <NavLink
                  active={active === r.id}
                  onClick={() => history.push(`/home/group/${r.path}`)}
                  style={{border: 'none'}}
                >
                  {r.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent className="py-50" activeTab={active}>
            {routes.map(r => (
              <TabPane key={r.id} tabId={r.id}>
                {r.component}
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
      <ModalCreateGroup modal={modal} toggleModal={toggleModal} />
    </GroupProvider>
  )
}

export default GroupIndex
