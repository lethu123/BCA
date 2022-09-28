// ** Third Party Components
import Proptypes from 'prop-types'
import classnames from 'classnames'
import {Check, Minus} from 'react-feather'
import {Badge} from 'reactstrap'
import {useState} from 'react'
import './timeline.scss'

const Timeline = ({toolActive, setToolActive}) => {
  // ** Props

  const [active, setActive] = useState([])
  // const [currrentActive, setCurrentActive] = useState(1)

  const data = [
    {
      title: 'Học việc',
      content: 'Invoices have been paid to the company.',
      icon: <Check size={14} />,
      meta: '12 min ago',
      className: active.find(e => e === 0) ? 'active' : '',
      color: 'primary',
    },
    {
      title: 'Quản lý nhóm',
      content: 'Project meeting with john @10:15am.',
      meta: '45 min ago',
      icon: active.find(e => e === 1) ? (
        <Check size={14} />
      ) : (
        <Minus size={14} />
      ),
      color: active.find(e => e === 1) ? 'primary' : 'secondary',
      className: active.find(e => e === 1) ? 'active' : '',
    },
    {
      title: 'Nhà khởi nghiệp',
      content: 'Click the button below to read financial reports',
      meta: '2 hours ago',
      icon: active.find(e => e === 2) ? (
        <Check size={14} />
      ) : (
        <Minus size={14} />
      ),
      color: active.find(e => e === 2) ? 'primary' : 'secondary',
      className: active.find(e => e === 2) ? 'active' : '',
    },
    {
      title: 'Nhà quản lý',
      content: 'Have to interview Katy Turner for the developer job.',
      meta: '03:00 PM',
      icon: active.find(e => e === 3) ? (
        <Check size={14} />
      ) : (
        <Minus size={14} />
      ),
      color: active.find(e => e === 3) ? 'primary' : 'secondary',
      className: active.find(e => e === 3) ? 'active' : '',
    },
    {
      title: 'Nhà lãnh đạo',
      content:
        'Our main goal is to design a new mobile application for our client. The customer wants a clean & flat design.',
      meta: (
        <Badge color="light-primary" pill>
          Design
        </Badge>
      ),
      icon: active.find(e => e === 5) ? (
        <Check size={14} />
      ) : (
        <Minus size={14} />
      ),
      color: active.find(e => e === 5) ? 'primary' : 'secondary',
      className: active.find(e => e === 5) ? 'active' : '',
    },
  ]

  return (
    <ul className="timeline_tool mt-3">
      {data.map((item, i) => {
        return (
          <li
            key={i}
            className={classnames('timeline-item_tool', {
              active: active.find(e => e - 1 === i),
            })}
          >
            <span
              className={classnames('timeline-point_tool', {
                [`timeline-point_tool-${item.color}`]: item.color,
                'timeline-point-indicator_tool': !item.icon,
              })}
            >
              {item.icon ? item.icon : null}
            </span>
            <div className="timeline-event_tool">
              <div
                className={classnames(
                  'd-flex justify-content-between flex-sm-row flex-column',
                  {
                    'mb-sm-0 mb-1': item.meta,
                  },
                )}
                onClick={() => {
                  let ele = active.find(e => e === i)
                  if (!ele) {
                    let listActive = [...active, i]
                    setActive(listActive.sort())
                  }
                  setToolActive(i)
                }}
              >
                <h6
                  className={
                    'cursor-pointer ' +
                    classnames({
                      active_title: toolActive === i,
                    })
                  }
                >
                  {item.title}
                </h6>
                {item.meta ? (
                  <span
                    className={classnames('timeline-event-time_tool', {
                      [item.metaClassName]: item.metaClassName,
                    })}
                  >
                    {item.meta}
                  </span>
                ) : null}
              </div>
              <p
                className={classnames({
                  'mb-0': i === data.length - 1 && !item.customContent,
                })}
              >
                {item.content}
              </p>
              {/* {item.customContent ? item.customContent : null} */}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Timeline

// ** PropTypes
Timeline.propTypes = {
  data: Proptypes.array.isRequired,
  className: Proptypes.string,
  tag: Proptypes.string,
}
