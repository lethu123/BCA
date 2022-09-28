import React from 'react'
import {Card, CardBody} from 'reactstrap'

import no_img from 'assets/images/pages/users/noImg.png'
// import Chart from "react-apexcharts"

const StatisticsCardProgramEpx = props => {
  return (
    <Card
      style={{
        cursor: 'pointer',
        border: '1px solid #ff6700',
      }}
    >
      <CardBody
        className={`${
          props.className ? props.className : 'stats-card-body'
        } d-flex  justify-content-between flex-row-reverse align-items-center pt-2`}
      >
        <div className="icon-section">
          <div className="mr-1" style={{height: '70px', width: '70px'}}>
            <img
              src={props.item._image ?? no_img}
              alt=""
              className="w-100 h-100 img-thumbnail"
            />
          </div>
        </div>
        <div className="title-section">
          <h4 className="text-bold-600 mt-50 mb-25">{props.item.quantity}</h4>
          <p className="mb-0">{props.item.title}</p>
        </div>
      </CardBody>
    </Card>
  )
}
export default StatisticsCardProgramEpx
