import React from 'react'
import {Home, Search, Star} from 'react-feather'
import {
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap'

import {Link, useLocation} from 'react-router-dom'

const SidebarEvent = () => {
  const location = useLocation()
  const data = [
    {
      id: 1,
      link: '/v1/event/calendar',
      icon: <i class="fa-solid fa-house"></i>,
      name: 'Lịch sự kiện',
    },
    {
      id: 2,
      link: '/v1/event/invitation',
      icon: <i class="fa-solid fa-calendar-days"></i>,
      name: 'Lời mời tham gia',
    },
    {
      id: 3,
      link: '/v1/event/organization',
      icon: <i class="fa-solid fa-cake-candles"></i>,
      name: 'Sự kiện tổ chức',
    },
    {
      id: 4,
      link: '/v1/event/join',
      icon: <i class="fa-solid fa-calendar-plus"></i>,
      name: 'Sẽ tham gia',
    },
    {
      id: 5,
      link: '/v1/event/past',
      icon: <i class="fa-solid fa-calendar-check"></i>,
      name: 'Sự kiện đã qua',
    },
  ]

  return (
    <>
      <div className="event-sidebar">
        <Card>
          <CardBody tag="div" className="p-2">
            <h3 style={{color: '#000000'}}>Events</h3>
            {data.map(item => (
              <Link
                key={item.id}
                to={item?.link}
                className={`${location.pathname === item.link ? 'active' : ''}`}
              >
                <div className="link d-flex align-items-center py-50 my-1 rounded px-50">
                  <div className="rounded-circle link-icon d-flex align-items-center justify-content-center">
                    {item.icon}
                  </div>
                  <h5 className="mb-0 ml-1">{item.name}</h5>
                </div>
              </Link>
            ))}
            <Link to="/v1/event/create-event">
              <Button.Ripple className="w-100 d-flex align-items-center justify-content-center btn-create">
                <i class="fa-solid fa-plus"></i>
                <h5
                  className="align-middle ml-50 mb-0"
                  style={{color: 'white'}}
                >
                  Create new event
                </h5>
              </Button.Ripple>
            </Link>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default SidebarEvent
