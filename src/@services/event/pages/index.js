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
import {Calendar, Plus} from 'react-feather'
import {useState} from 'react'

// ** component
import CalendarEvent from '@services/event/components/list/CalendarEvent'
import InviteEvent from '@services/event/components/list/InviteEvent'
import OrganizationEvent from '@services/event/components/list/OrganizationEvent'
import ModalFormEvent from '@services/event/components/modal/ModalCreateEvent'
import EventJointed from '@services/event/components/list/EventJointed'
import OverdateEvent from '@services/event/components/list/OverdateEvent'

// ** assets
import './../scss/Custom.style.scss'

const EventIndex = () => {
  const [active, setActive] = useState('1')
  const [modal, setModal] = useState(false)

  const toggle = tab => {
    setActive(tab)
  }

  const toggleModal = () => setModal(!modal)

  return (
    <div>
      <Card>
        <CardHeader className="py-2 border-bottom">
          <Row className="w-100">
            <Col lg="9" md="12">
              <div className="d-flex justify-content-start align-items-center mb-1">
                <Calendar className="text-primary mr-2" size="40" />
                <div className="profile-user-info ">
                  <h4 className="mb-0">Sự kiện</h4>
                  <p className="mb-0">Xem và tham dự các Sự kiện nổi bật</p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="12" className="text-right">
              <Button.Ripple color="primary" onClick={toggleModal}>
                <Plus size={14} />
                <span className="align-middle ml-2">Tạo sự kiện</span>
              </Button.Ripple>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Nav tabs className="mt-2 d-block d-sm-flex mb-0">
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
                className="justify-content-start d-inline-block mr-3 border-0"
              >
                Lịch sự kiện
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
                className="justify-content-start d-inline-block mr-3 border-0"
              >
                Lời mời tham gia
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
                className="justify-content-start d-inline-block mr-2 border-0"
              >
                Sự kiện tổ chức
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '4'}
                onClick={() => {
                  toggle('4')
                }}
                className="justify-content-start d-inline-block mr-2 border-0"
              >
                Sẽ tham gia
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                active={active === '6'}
                onClick={() => {
                  toggle('6')
                }}
                className="justify-content-start d-inline-block border-0"
              >
                Sự kiện đã qua
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="pt-0" activeTab={active}>
            <TabPane tabId="1">
              <CalendarEvent />
            </TabPane>
            <TabPane tabId="2">
              <InviteEvent />
            </TabPane>
            <TabPane tabId="3">
              <OrganizationEvent />
            </TabPane>
            <TabPane tabId="4">
              <EventJointed />
            </TabPane>

            <TabPane tabId="6">
              <OverdateEvent />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
      <ModalFormEvent modal={modal} toggleModal={toggleModal} />
    </div>
  )
}

export default EventIndex
