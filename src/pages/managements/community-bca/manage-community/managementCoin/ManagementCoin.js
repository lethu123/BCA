import React from 'react'
// *** Component
import ManagementCoinTab from './managementCoinTab/ManagementCoinTab'
import {Bizxu} from 'components/icon'

const ManagementCoin = () => {
  return (
    <div style={{backgroundColor: '#fff', padding: 20}}>
      <div className="d-flex align-items-center">
        <Bizxu color="primary" size="3x" className="mr-5" />
        <h4 className="font-weight-bold">Quản lý tặng xu</h4>
      </div>
      <ManagementCoinTab />
    </div>
  )
}

export default ManagementCoin
