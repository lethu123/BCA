import React, {useState} from 'react'
import AppCollapse from '@core/components/app-collapse'
import {
  Badge,
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import {
  Delete,
  Home,
  MoreVertical,
  PlusCircle,
  Settings,
  User,
} from 'react-feather'
import {useHistory} from 'react-router-dom'

// *** Component
import {
  PersionalInfocation,
  ProfileCustomer,
  StatisticProfileUser,
  TableProfileUser,
  ModalTransferData,
  ModalConditionHealth,
  ModalInsurance,
} from '@services/profile-user-admin'

//image
import message from 'assets/images/datacenter/message.png'
import backLanding from 'assets/images/datacenter/back-landing.png'

//scss
import './Project.style.scss'

const data = [
  {id: 1, value: 'Mới đăng kí'},
  {id: 2, value: 'Hẹn gọi lại'},
  {id: 3, value: 'Chưa bắt máy'},
  {id: 4, value: 'Hoàn thành AA'},
  {id: 5, value: 'Hoàn thành FA'},
]

const ProfileUserPage = () => {
  const history = useHistory()
  const [transferData, setTransferData] = useState(false)
  const [conditionHealth, setConditionHealth] = useState(false)
  const [insurance, setInsurance] = useState(false)

  return (
    <div className="CustomerDetail">
      <div>
        {/*begin::Container*/}
        <div>
          {/*begin::Layout*/}
          <div className="row">
            {/*begin::Sidebar*/}
            <div
              className="col-md-4 col-lg-3"
              style={{backgroundColor: 'white'}}
            >
              {/*begin::Card*/}
              <div className="card mb-5 mb-xl-8">
                {/*begin::Card body*/}
                <div className="pt-15">
                  {/*begin::Summary*/}
                  <div className="d-flex flex-center flex-column mb-5">
                    {/*begin::Avatar*/}
                    <img
                      src="https://i.pinimg.com/564x/e6/57/55/e65755e73d8085e30aedfa21fde07f1b.jpg"
                      alt="images"
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        marginBottom: 20,
                      }}
                    />
                    {/*end::Avatar*/}
                    {/*begin::Name*/}
                    <p className="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1 cursor-pointer">
                      Hoàng Quyên
                    </p>
                    <p className="font-weight-bold mb-1">
                      UID: <span className=" text-primary">UD91835</span>
                    </p>
                    <div className="my-2 d-flex align-items-center">
                      <User
                        size={20}
                        className="text-primary mr-2"
                        fill="#E6641F"
                      />
                      <Badge color="light-danger">Group C</Badge>
                    </div>

                    <div className="mb-3">
                      <img
                        src={message}
                        alt="mesage"
                        className="img-fluid h-50px"
                      />
                    </div>

                    <div>
                      <Badge className="mr-2 text-white" color="warning">
                        Mới đăng kí
                      </Badge>
                      <Badge className="mr-2" color="success">
                        AA
                      </Badge>
                      <Badge className="mr-2" color="primary">
                        Quan tâm
                      </Badge>
                    </div>
                    <div className="text-center mt-3">
                      <PlusCircle
                        size={30}
                        className="text-white mr-2"
                        fill="#f64e60"
                        onClick={() => setConditionHealth(!conditionHealth)}
                      />
                      <Home
                        size={30}
                        className="text-white mr-2"
                        fill="#ff6700"
                        onClick={() => setInsurance(!insurance)}
                      />
                    </div>
                    {/*end::Name*/}
                  </div>
                  {/*end::Summary*/}
                  <div>
                    <AppCollapse
                      accordion={true}
                      active={0}
                      data={[
                        {
                          title: 'Thông tin ứng viên',
                          content: (
                            <div>
                              <ProfileCustomer />
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
              {/*begin::Connected Accounts*/}
              <div>
                <AppCollapse
                  accordion={true}
                  active={0}
                  data={[
                    {
                      title: 'Thông tin cá nhân',
                      content: (
                        <div>
                          <PersionalInfocation />
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
              {/*end::Connected Accounts*/}
            </div>
            {/*end::Sidebar*/}
            {/*begin::Content*/}
            <div
              className="col-md-8 col-lg-9"
              style={{backgroundColor: 'white', paddingTop: 20}}
            >
              <div className="text-white d-flex justify-content-between mb-3">
                <div
                  className="pt-3 cursor-pointer mb-3"
                  onClick={() => history.goBack()}
                >
                  <img
                    src={backLanding}
                    alt="dataCenter"
                    className="img-fluid mr-3 h-auto"
                  />
                </div>
                <div className="d-flex">
                  <div
                    style={{
                      width: '170px',
                      height: '55px',
                      backgroundColor: '#E6641F',
                      borderRadius: '10px',
                      fontSize: '18px',
                    }}
                    className="py-1 px-3 mr-3"
                  >
                    <p className="mb-0" style={{fontSize: '11px'}}>
                      Tổng doanh thu
                    </p>
                    14,290,000 Vnđ
                  </div>
                  <UncontrolledButtonDropdown direction="left">
                    <DropdownToggle color="secondary" caret className="  p-1">
                      <MoreVertical size={18} />
                    </DropdownToggle>
                    <DropdownMenu className="w-300px">
                      <DropdownItem
                        onClick={() => setTransferData(!transferData)}
                      >
                        <Settings size={20} className="mr-2 text-primary" />
                        Chuyển đại lý
                      </DropdownItem>
                      <DropdownItem>
                        <Delete size={20} className="mr-2 text-primary" />
                        Chuyển data sọt rác
                      </DropdownItem>
                      <div className="ml-5 mt-3">
                        <Settings size={20} className="mr-2 text-primary" />
                        Chuyển trạng thái dữ liệu
                        {data.length > 0 &&
                          data.map(ele => (
                            <CustomInput
                              key={ele.id}
                              type="radio"
                              id={`CustomRadio${ele.id}`}
                              name={`customRadio`}
                              inline
                              label={ele.value}
                              className="mt-3 ml-3 w-100"
                            />
                          ))}
                      </div>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </div>
              <StatisticProfileUser />
              <TableProfileUser />
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Layout*/}
        </div>
        {/*end::Container*/}
      </div>
      <ModalTransferData
        transferData={transferData}
        setTransferData={setTransferData}
      />
      <ModalConditionHealth
        conditionHealth={conditionHealth}
        setConditionHealth={setConditionHealth}
      />
      <ModalInsurance insurance={insurance} setInsurance={setInsurance} />
    </div>
  )
}

export default ProfileUserPage
