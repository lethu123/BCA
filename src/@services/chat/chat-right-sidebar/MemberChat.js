import PerfectScrollbar from 'react-perfect-scrollbar'
import SpinnerFallback from '@core/components/spinner/Fallback-spinner'

import ChatQuery from './../hook/query'

import Avatar from '@core/components/avatar'
import {useEffect, useState} from 'react'

const MemberChat = ({setOpenPopup}) => {
  const {data, isLoading} = ChatQuery.useGetListUserRightSidebar()
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      setUsers(
        data.data.map((user, idx) => ({
          ...user,
          status: idx % 3 === 0 ? 'online' : idx % 3 === 1 ? 'offline' : 'busy',
          lastMessageTime: Math.round(Math.random() * 60) || 1,
          unreadCount: Math.round(Math.random() * 10),
          lastMessage: 'Last mesage',
        })),
      )
    }
  }, [data])

  return (
    <>
      <div className="card card-custom">
        <div className="card-body">
          <div className="input-group input-group-solid mb-1">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="svg-icon svg-icon-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x={0} y={0} width={24} height={24} />
                      <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </span>
              </span>
            </div>
            <input
              type="text"
              className="form-control py-1 h-auto"
              placeholder="Email"
            />
          </div>
          {isLoading ? (
            <SpinnerFallback />
          ) : (
            <div className="mt-3" style={{height: '700px', overflowY: 'auto'}}>
              <PerfectScrollbar>
                {users.length > 0 &&
                  users.map(user => (
                    <div
                      key={user.user_id}
                      className="d-flex align-items-center justify-content-between mb-5 cursor-pointer"
                      onClick={setOpenPopup}
                    >
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50 mr-3">
                          <Avatar
                            img={user.avatar}
                            status={user.status}
                            size="lg"
                          />
                        </div>

                        <div className="d-flex flex-column">
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                          >
                            {user.user_name}
                          </a>
                          <span className="text-muted font-weight-bold font-size-sm font-style-italic">
                            {user.lastMessage && user.lastMessage.length > 20
                              ? user.lastMessage.slice(0, 20) + '...'
                              : user.lastMessage}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-end">
                        <span className="text-muted font-weight-bold font-size-sm">
                          {user.lastMessageTime} mins
                        </span>
                        <span className="label label-sm label-primary">
                          {user.unreadCount}
                        </span>
                      </div>
                    </div>
                  ))}

                <div
                  className="ps__rail-x"
                  style={{left: '0px', bottom: '0px'}}
                >
                  <div
                    className="ps__thumb-x"
                    tabIndex={0}
                    style={{left: '0px', width: '0px'}}
                  />
                </div>
                <div
                  className="ps__rail-y"
                  style={{top: '0px', height: '643px', right: '-2px'}}
                >
                  <div
                    className="ps__thumb-y"
                    tabIndex={0}
                    style={{top: '0px', height: '300px'}}
                  />
                </div>
              </PerfectScrollbar>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MemberChat
