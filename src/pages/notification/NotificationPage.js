// *** Custom Components
import Avatar from '@core/components/avatar'

// *** Third Party Components
import {Clock} from 'react-feather'
import {Media, Row, Col, CardBody, Badge} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import {useEffect, useState} from 'react'
import {readNotification} from 'redux/actions/notification/notificationDataAction'
import {getUserData} from 'utility/Utils'

import image from 'assets/images/avatars/avatar-blank.png'

const formatter = buildFormatter(englishStrings)
const NotificationPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = getUserData()
  const notifications = useSelector(
    state => state.notificationReducer.notifications,
  )
  const notificationsUnread = useSelector(
    state => state.notificationReducer.unreads,
  )
  const [unreadRead, setUnreadRead] = useState(false)
  const [listNoti, setListNoti] = useState([])

  useEffect(() => {
    setListNoti(unreadRead ? notificationsUnread : notifications)
  }, [notifications, notificationsUnread, unreadRead])

  const handleReadNoti = item => {
    dispatch(readNotification(user?.uid, item._id))
    // redirect page

    switch (item.noti_type) {
      case 'GroupRequestJoin':
      case 'GroupAcceptInvitation':
      case 'GroupInvitation':
      case 'GroupAcceptRequestJoin':
      case 'GroupRejectRequestJoin':
        history.push(`/group/${item.target?.group_id}`)
        break
      case 'GroupCreatePost':
        history.push({
          pathname: `/group/post-detail/${item.target?.group_id}?post_id=${item.target?.post_id}`,
          time: new Date().getTime(),
        })
        break
      case 'post':
        history.push({
          pathname: `/post/${item.target?.target_id}`,
          time: new Date().getTime(),
        })
        break
      default:
        break
    }
  }

  return (
    <Row className="my-5">
      <Col lg="7" className="m-auto">
        <CardBody className="shadow round">
          <div className="media-list">
            <Media className="d-flex align-items-start">
              <Media body>
                <h4>Thông báo</h4>
              </Media>
              <Media right>
                <Badge
                  className="mr-1 cursor-pointer"
                  color={!unreadRead ? 'primary' : 'secondary'}
                  onClick={() => setUnreadRead(false)}
                >
                  Tất cả
                </Badge>
                <Badge
                  onClick={() => setUnreadRead(true)}
                  color={unreadRead ? 'primary' : 'secondary'}
                  className="cursor-pointer"
                >
                  Chưa đọc
                </Badge>
              </Media>
            </Media>
            {listNoti?.length > 0 ? (
              listNoti.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex cursor-pointer"
                    onClick={() => {
                      // unread
                      handleReadNoti(item)
                    }}
                  >
                    <Media className="d-flex align-items-start py-1">
                      <Media left>
                        <Avatar
                          {...(item.sender
                            ? {
                                img: item.sender.avatar
                                  ? item.sender.avatar
                                  : image,
                                imgHeight: 32,
                                imgWidth: 32,
                              }
                            : {
                                content: '#',
                                color: item.color,
                              })}
                        />
                      </Media>
                      <Media body>
                        <span className="text-primary">
                          {' '}
                          {item.sender ? item.sender.user_name : 'Bạn'}
                        </span>
                        <span className="text-dark font-weight-bold">
                          {' '}
                          {item.content}{' '}
                        </span>
                        <span className="text-primary font-weight-bold">
                          {' '}
                          {item.target?.group_name}{' '}
                        </span>
                        <br />
                        <small className="text-muted">
                          <Clock size="14" className="mr-2" />
                          <TimeAgo
                            date={item.datetime_created * 1000}
                            formatter={formatter}
                          />
                        </small>
                      </Media>
                      {!item.is_read && (
                        <Media right>
                          <p
                            className="mb-0"
                            style={{
                              width: '15px',
                              height: '15px',
                              background: 'green',
                              borderRadius: '50%',
                            }}
                          ></p>
                        </Media>
                      )}
                    </Media>
                  </div>
                )
              })
            ) : (
              <p className="text-center font-weight-bold">Chưa có thông báo</p>
            )}
          </div>
        </CardBody>
      </Col>
    </Row>
  )
}

export default NotificationPage
