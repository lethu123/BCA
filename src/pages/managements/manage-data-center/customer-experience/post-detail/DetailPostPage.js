import React from 'react'
import {useHistory} from 'react-router-dom'

//image
import customerExperience from 'assets/images/datacenter/customer-experience.png'
import backLanding from 'assets/images/datacenter/back-landing.png'

//component
import StatisticDetailPost from './StatisticDetailPost'
import TableDetailPost from './TableDetailPost'

const DetailPostPage = () => {
  const history = useHistory()
  //useState

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <div className="pt-3 cursor-pointer" onClick={() => history.goBack()}>
            <img
              src={backLanding}
              alt="dataCenter"
              className="img-fluid mr-3 h-auto"
            />
          </div>

          <img
            src={customerExperience}
            alt="dataCenter"
            className="img-fluid mr-3"
            width="50px"
            height="50px"
          />
          <div>
            <h4 className="font-weight-bold">
              Dự án đất Bắc được rất nhiều người quan tâm{' '}
            </h4>
            <p className="mb-0">
              URL:{' '}
              <span className="text-primary">
                http://bcavietnam.com/post/90
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{backgroundColor: '#fff', borderRadius: '20px'}}
        className="px-5 py-2"
      >
        <StatisticDetailPost />
        <TableDetailPost />
      </div>
    </div>
  )
}

export default DetailPostPage
