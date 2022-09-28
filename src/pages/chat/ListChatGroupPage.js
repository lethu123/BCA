import React, {useState} from 'react'
import {Fragment} from 'react'
import {Link} from 'react-router-dom'

// ** assets
import './custom.scss'
import image from 'assets/media/avatars/150-6.jpg'
const user = [
  {
    name: 'Group BCA',
    picture: image,
    content: 'test message by me ...',
    status: true,
    new: 2,
  },
  {
    name: 'Team DEV',
    content: 'test message by me ...',
    status: false,
  },
  {
    name: 'Team Quản lý',
    picture: image,
    content: 'test message by me ...',
    status: false,
    new: 5,
  },
  {
    name: 'Bảo hiểm',
    picture: image,
    content: 'test message by me ...',
    status: true,
  },
]
const ListChatGroupPage = () => {
  const [active, setActive] = useState(0)
  return (
    <div className="list list-hover pt-5" id="kt_chat_contacts_body ">
      <div className="scroll-y  h-200px h-lg-auto">
        {user.map((item, indx) => (
          <Fragment key={indx}>
            <div
              onClick={() => setActive(indx)}
              className={`d-flex flex-stack py-4 list-item hoverable px-1 ${
                active === indx ? 'active' : ''
              }`}
            >
              <div className="d-flex align-items-center">
                <div className="symbol symbol-45px symbol-circle">
                  {item.picture ? (
                    <img alt="Pic" src={image} />
                  ) : (
                    <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">
                      M
                    </span>
                  )}
                  <div
                    className={`symbol-badge bg-secondary start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2 bg-${
                      item.status ? 'success' : 'secondary'
                    }`}
                  />
                </div>

                <div className="ms-5">
                  <Link
                    to="#"
                    className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                  >
                    {item.name}
                  </Link>
                  <div className="fw-bold text-gray-400">{item.content}</div>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::Details*/}
              {/*begin::Lat seen*/}
              <div className="d-flex flex-column align-items-end m-2">
                <span className="text-muted fs-7 mb-1">1 day</span>
                {item.new && (
                  <span className="badge badge-sm badge-circle badge-light-danger">
                    {item.new}
                  </span>
                )}
              </div>
              {/*end::Lat seen*/}
            </div>

            <div className="separator separator-dashed d-none" />
          </Fragment>
        ))}
      </div>
      {/*end::List*/}
    </div>
  )
}

export default ListChatGroupPage
