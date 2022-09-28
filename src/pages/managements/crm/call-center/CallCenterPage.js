import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router'
import {Nav, NavItem, NavLink, TabContent, TabPane, Badge} from 'reactstrap'
import {PhoneCall} from 'react-feather'

// *** Components
import Customer from './customer/Customer'
import PotentialCustomers from './potentialCustomers/PotentialCustomers'
import PotentialCandidate from './potentialCandidate/PotentialCandidate'
import TextareaField from 'components/form/TextareaField'
import SelectField from 'components/form/SelectField'

const CallCenterPage = () => {
  const [active, setActive] = useState('1')
  const {type} = useParams()
  const history = useHistory()
  const routeDataCenter = [
    {
      id: '1',
      name: 'Khách hàng',
      path: 'khach-hang',
      component: <Customer />,
    },
    {
      id: '2',
      name: 'Khách hàng tiềm năng',
      path: 'khach-hang-tiem-nang',
      component: <PotentialCustomers />,
    },
    {
      id: '3',
      name: 'Ứng viên tiềm năng',
      path: 'ung-vien-tiem-nang',
      component: <PotentialCandidate />,
    },
  ]
  useEffect(() => {
    switch (type) {
      case 'khach-hang':
        return setActive('1')

      case 'khach-hang-tiem-nang':
        return setActive('2')

      case 'ung-vien-tiem-nang':
        return setActive('3')

      default:
        return
    }
  }, [type])
  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="d-flex align-items-center mb-10 mt-5">
          <PhoneCall size={30} className="text-primary mr-2" />
          <div>
            <p className="mb-0 font-weight-bolder">Inbound Calls</p>
            <p className="mb-0">0399652547</p>
          </div>
        </div>
        <div>
          <p>Thời gian gọi: 02:00:00</p>
          <p>Start Time: 10:05:20</p>
          <p>End Time: 10:07:20</p>
          <p>Mã khách hàng: 123</p>
          <p>Họ tên: Nguyễn Văn A</p>
          <div>
            <TextareaField
              label="Mô tả"
              placeholder="Nhập mô tả ..."
              // isRequired={true}
              name="description"
              onChange={(name, value) => console.log(value)}
              minRows={2}
            />{' '}
          </div>
          <div>
            <SelectField
              name="select"
              label="Trạng thái cuộc gọi"
              options={[
                {
                  label: 'Mới đăng kí',
                  value: 'Mới đăng kí',
                },
                {
                  label: 'Hẹn gọi lại',
                  value: 'Hẹn gọi lại',
                },
                {
                  label: 'Chưa bắt máy',
                  value: 'Chưa bắt máy',
                },
                {
                  label: 'Hoàn thành FA',
                  value: 'Hoàn thành FA',
                },
                {
                  label: 'Hoàn thành AA',
                  value: 'Hoàn thành AA',
                },
              ]}
              placeholder="Chọn trạng thái"
              onChange={(name, value) => console.log(value)}
            />
          </div>
          <div className="text-right mt-10 cursor-pointer">
            <Badge color="primary">Save</Badge>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <Nav tabs className="mt-5">
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <NavItem key={ele.id}>
                <NavLink
                  active={active === ele.id}
                  onClick={() => {
                    history.push(`/admin/call-center/${ele.path}`)
                  }}
                  style={{border: 'none'}}
                >
                  {ele.name}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
        <TabContent className="py-50" activeTab={active}>
          {routeDataCenter.length > 0 &&
            routeDataCenter.map(ele => (
              <TabPane tabId={ele.id} key={ele.id}>
                {ele.component}
              </TabPane>
            ))}
        </TabContent>
      </div>
    </div>
  )
}

export default CallCenterPage
