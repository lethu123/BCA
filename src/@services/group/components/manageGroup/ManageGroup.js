import React from 'react'
import AvatarImg from 'assets/images/home/GroupAdmin.png'

// *** Components
import StatisticManageGroup from '../statistic/StatisticManageGroup'
import TableManageGroup from '../datatable/TableManageGroup'

const ManageGroup = () => {
  return (
    <div style={{backgroundColor: '#fff', padding: 20}}>
      <div className="d-flex">
        <img
          src={AvatarImg}
          alt="images"
          className="img-fluid mr-2"
          width="50px"
          height="50px"
        />
        <div>
          <h4 className="font-weight-bold">Quản trị Nhóm</h4>
          <p className="mb-0">Xem và quản lý các nhóm trên BCA</p>
        </div>
      </div>

      <div>
        <StatisticManageGroup />
        <TableManageGroup />
      </div>
    </div>
  )
}

export default ManageGroup
