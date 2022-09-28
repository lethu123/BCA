import React from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

import {StatisticCustomer, TableCustomer} from '@services/customer'

//scss
import './Customer.style.scss'

const CustomerPage = () => {
  return (
    <div className="customer-page " style={{backgroundColor: '#fff'}}>
      <Breadcrumb className="py-3 mb-0">
        <BreadcrumbItem>
          <Link to="/home"> Trang Chủ </Link>
        </BreadcrumbItem>

        <BreadcrumbItem active style={{cursor: 'context-menu'}}>
          <span> Khách Hàng </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        <StatisticCustomer />
        <TableCustomer />
      </div>
    </div>
  )
}

export default CustomerPage
