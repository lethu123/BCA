import React, {memo} from 'react'
import {Card, CardBody} from 'reactstrap'

const StatisticsCards = ({
  isRACI,
  className,
  iconRight,
  hideChart,
  iconBg,
  icon,
  statTitle,
  stat,
  styleColor,
}) => {
  return (
    <Card
      style={{
        cursor: 'pointer',
        minHeight: isRACI && '300px',
      }}
    >
      <CardBody
        className={`${className ? className : 'stats-card-body'} d-flex ${
          !iconRight && !hideChart
            ? 'flex-column align-items-start'
            : iconRight
            ? 'justify-content-between flex-row-reverse align-items-center'
            : hideChart && !iconRight
            ? 'justify-content-center flex-column text-center'
            : null
        } ${!hideChart ? 'pb-0' : 'pb-2'} pt-2`}
      >
        <div className="icon-section">
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              border: '1px solid rgb(244 239 239)',
              textAlign: 'center',
              lineHeight: '45px',
              backgroundColor: 'rgb(244 239 239)',
            }}
          >
            <div className="avatar-content">{icon}</div>
          </div>
        </div>
        <div className="title-section">
          <h2 className="text-bold-600 mt-1 mb-25">{stat || 0}</h2>
          <p className="mb-0">{statTitle}</p>
        </div>
      </CardBody>
      {/* <div style={{height: '100px'}}>

        </div> */}
      {/*{!this.props.hideChart && (*/}
      {/*  <Chart*/}
      {/*    options={this.props.options}*/}
      {/*    series={this.props.series}*/}
      {/*    type={this.props.type}*/}
      {/*    height={this.props.height ? this.props.height : 100}*/}
      {/*  />*/}
      {/*)}*/}
    </Card>
  )
}

export default memo(StatisticsCards)
