import React from 'react'
import TimeAgo from 'react-timeago'
import {Clock} from 'react-feather'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const NotificationItem = ({data}) => {
  const formatter = buildFormatter(englishStrings)

  return (
    <div>
      {data.length > 0 &&
        data.map(ele => (
          <div
            key={ele.id}
            className="d-flex flex-wrap flex-sm-nowrap align-items-center mb-2"
          >
            <img
              src={ele.image}
              alt="iamges"
              className="img-fluid mr-2"
              width="30px"
              height="30px"
            />
            <div>
              <p className="mb-0">
                <span className="font-weight-bolder">
                  {ele.label && ele.label}
                </span>
                {ele.title}
                <span className="font-weight-bolder">{ele.user}</span>
              </p>
              <p className="text-primary mb-0" style={{fontSize: '12px'}}>
                <Clock size={15} className="text-primary mr-1" />
                <TimeAgo date={ele.time} formatter={formatter} />
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default NotificationItem
