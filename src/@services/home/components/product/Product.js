import React, {useState} from 'react'
import {Home, PieChart} from 'react-feather'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import './Product.style.scss'

// *** Components
import ModalAddProduct from './ModalAddProduct'
import StatisticProduct from './StatisticProduct'
import TableProduct from './TableProduct'

const Product = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div className="campaign px-15" style={{backgroundColor: 'white'}}>
      <div style={{borderBottom: '1px solid #C8C8C8'}}>
        <Breadcrumb className="py-3 mb-0">
          <BreadcrumbItem className="mb-0">
            <Link to="/home">
              <Home size={16} style={{marginRight: 5, marginBottom: 2}} /> Trang
              chủ{' '}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="mb-0" active>
            <span> Chiến dịch </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="static">
        <div className="mt-4 mb-5">
          <PieChart
            size={40}
            fill="#1EAC52"
            stroke="white"
            style={{marginBottom: 4}}
          />
          <span style={{fontSize: 20, color: '#1EAC52'}}>Thống Kê</span>
        </div>

        <StatisticProduct />
      </div>
      <TableProduct
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />

      <ModalAddProduct
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default Product
