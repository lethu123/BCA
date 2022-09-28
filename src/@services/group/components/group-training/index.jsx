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
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'
import {Plus} from 'react-feather'
import {useState} from 'react'

// ** component
import ExploreGroup from './explored-group/ExploreGroup'
import MyGroup from './my-group/MyGroup'
import GroupJoined from './joined-group/GroupJoined'
import {ModalCreateGroup} from '@services/courses'

// ** context
import {CourseProvider} from '@services/courses'

const colourOptions = [
  {value: 'ocean', label: 'Tất cả'},
  {value: 'blue', label: 'Khách hàng'},
  {value: 'purple', label: 'Bạn bè'},
  {value: 'red', label: 'Đồng nghiệp'},
  {value: 'orange', label: 'Công việc'},
]

const GroupIndex = () => {
  const [active, setActive] = useState('1')
  const [modal, setModal] = useState(false)

  const toggle = tab => {
    setActive(tab)
  }

  const toggleModal = () => setModal(!modal)

  return (
    <CourseProvider>
      <Card>
        <CardHeader className=" py-5 border-bottom">
          <Row className="w-100">
            <Col xl="6" md="12">
              <div className="d-flex justify-content-start align-items-center mb-1">
                <Users color="primary" size="3x" />
                <div className="profile-user-info ml-2">
                  <h5 className="mb-0 font-weight-bolder text-primary">nhóm</h5>
                  <p className="text-muted mb-0">
                    Xem và quản lý các nhóm của bạn hoặc bạn đang tham gia
                  </p>
                </div>
              </div>
            </Col>
            <Col xl="6" md="12">
              <Row className=" justify-content-end align-items-center">
                <Col sm="6" xs="12" className="mb-1">
                  <Select
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Phân loại ..."
                    // defaultValue={colourOptions[0]}
                    options={colourOptions}
                  />
                </Col>
                {/* <Col sm="4" xs="12" className="my-1">
                  <Button.Ripple color="primary" onClick={toggleModal}>
                    <Plus size={14} />
                    <span className="align-middle ml-2">Tạo nhóm</span>
                  </Button.Ripple>
                </Col> */}
              </Row>
            </Col>
          </Row>
          <div className="text-right w-100 mr-7 mt-3">
            <Button.Ripple color="primary" onClick={toggleModal}>
              <Plus size={14} />
              <span className="align-middle ml-2">Tạo nhóm</span>
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody className="pt-3">
          <Nav tabs>
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
                style={{border: 'none'}}
              >
                Khám phá nhóm
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
                style={{border: 'none'}}
              >
                Nhóm do bạn quản lý
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
                style={{border: 'none'}}
              >
                nhóm đã tham gia
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <MyGroup />
            </TabPane>
            <TabPane tabId="2">
              <ExploreGroup />
            </TabPane>
            <TabPane tabId="3">
              <GroupJoined />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
      <ModalCreateGroup modal={modal} toggleModal={toggleModal} />
    </CourseProvider>
  )
}

export default GroupIndex
