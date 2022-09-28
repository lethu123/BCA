import React from 'react'
import StatisticDetailLandingpage from './components/statistic/StatisticDetailLandingpage'
import TableDetailLandingpage from './components/table/TableDetailLandingpage'

//image
import landing from 'assets/images/datacenter/landing.png'
import backLanding from 'assets/images/datacenter/back-landing.png'
import {useHistory} from 'react-router-dom'

const DetailLandingpage = () => {
  const history = useHistory()
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <div
            className="pt-3 cursor-pointer"
            onClick={() =>
              history.push('/admin/landingpage/landingpage-thanh-vien')
            }
          >
            <img
              src={backLanding}
              alt="dataCenter"
              className="img-fluid mr-3 h-auto"
            />
          </div>

          <img
            src={landing}
            alt="dataCenter"
            className="img-fluid mr-3"
            width="50px"
            height="50px"
          />
          <div>
            <h4 className="font-weight-bold">
              Landingpage của <span className="text-primary"> Hoang Quyen</span>
            </h4>
            <p className="mb-0">
              URL:{' '}
              <span className="text-primary">
                http://bcavietnam.com/hoangquyen/90
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{backgroundColor: '#fff', borderRadius: '20px'}}
        className="px-5 py-2"
      >
        <StatisticDetailLandingpage />
        <TableDetailLandingpage />
      </div>
    </div>
  )
}

export default DetailLandingpage
