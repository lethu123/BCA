import React, {useState} from 'react'
import {Button} from 'reactstrap'
import {UserPlus, Grid} from 'react-feather'
// import Flatpickr from 'react-flatpickr'
// ** scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

// *** Components
import StatisticStatisticAccess from '../components/statistics/StatisticRequestAccess'
import ModalAddMember from '../components/modal/ModalInviteMember'
import TableRequestAccessAdmin from '../components/table/TableRequestAccessAdmin'

const RequestAccessPage = () => {
  //useState
  const [statusAddMember, setStatusAddMember] = useState(false)
  // const [picker, setPicker] = useState(new Date())

  return (
    <div className="p-2" style={{backgroundColor: 'white'}}>
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-8 d-flex">
          <Grid
            color="#E6641F"
            stroke="#E6641F"
            fill="#E6641F"
            size={50}
            className="mr-2"
          />
          <div>
            <h4 className="font-weight-bold">Quản trị yêu cầu truy cập</h4>
            <p className="mb-1">
              Quản lý tất cả yêu cầu truy cập và giới thiệu thành viên cộng đồng
              BCA
            </p>
          </div>
        </div>
        <div className="col-lg-4 text-right ">
          <Button.Ripple
            color="primary"
            className="mr-2"
            onClick={() => setStatusAddMember(true)}
          >
            <UserPlus className="mr-1" size={20} />
            Mời thành viên
          </Button.Ripple>
        </div>
      </div>

      {/* <div className="text-right">
        {' '}
        <div>
          <Calendar className="text-primary" />
          <div style={{display: 'inline-block', width: 220, marginLeft: 5}}>
            <Flatpickr
              value={picker}
              id="range-picker"
              className="form-control"
              onChange={date => setPicker(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
          </div>
        </div>
      </div> */}
      <div
        style={{backgroundColor: '#fff', borderRadius: '20px'}}
        className="py-2"
      >
        <div className="pb-3">
          {/* <StatisticStatisticAccess /> */}
          <TableRequestAccessAdmin />
        </div>
        <ModalAddMember
          toggleModal={() => setStatusAddMember(!statusAddMember)}
          modal={statusAddMember}
        />
      </div>
    </div>
  )
}

export default RequestAccessPage
