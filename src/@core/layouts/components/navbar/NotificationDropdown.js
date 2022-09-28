// *** Custom Components
import Avatar from '@core/components/avatar'

// *** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Bell, Clock} from 'react-feather'
import {
  Button,
  Badge,
  Media,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import {useDispatch, useSelector} from 'react-redux'
import {getUserData} from 'utility/Utils'
import {readNotification} from 'redux/actions/notification/notificationDataAction'
import {useHistory} from 'react-router-dom'

import image from 'assets/images/avatars/avatar-blank.png'

const formatter = buildFormatter(englishStrings)
const NotificationDropdown = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  //***  query notification
  const user = getUserData()
  const notifications = useSelector(state => state.notificationReducer.unreads)

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
      case 'Comment':
      case 'Replycomment':
        history.push({
          pathname: `/post/${item.target?.target_id}`,
          time: new Date().getTime(),
        })
        break
      default:
        break
    }
  }

  // *** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component="li"
        className="media-list scrollable-container"
        options={{
          wheelPropagation: false,
        }}
      >
        {notifications?.map((item, index) => {
          return (
            <div
              key={index}
              className="d-flex cursor-pointer"
              onClick={() => {
                handleReadNoti(item)
              }}
            >
              <Media className="d-flex align-items-start">
                <Media left>
                  <Avatar
                    {...(item.sender
                      ? {
                          img: item.sender.avatar ? item.sender.avatar : image,
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
                  <div>
                    <small className="notification-text">
                      <Clock size="14" className="mr-1" />
                      <TimeAgo
                        date={item.datetime_created * 1000}
                        formatter={formatter}
                      />
                    </small>
                  </div>
                </Media>
              </Media>
            </div>
          )
        })}
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */

  return (
    <UncontrolledDropdown
      tag="li"
      className="dropdown-notification nav-item mr-1"
    >
      <DropdownToggle
        tag="a"
        className="nav-link"
        href="/"
        onClick={e => e.preventDefault()}
      >
        <Bell size={21} />
        <Badge pill color="danger" className="badge-up">
          {notifications?.length || 0}
        </Badge>
      </DropdownToggle>
      <DropdownMenu tag="ul" right className="dropdown-menu-media mt-0">
        <li className="dropdown-menu-header">
          <DropdownItem className="d-flex" tag="div" header>
            <h4 className="notification-title mb-0 mr-auto">Thông báo</h4>
            <Badge tag="div" color="light-primary" pill>
              {notifications?.length || 0} Thông báo mới
            </Badge>
          </DropdownItem>
        </li>
        {renderNotificationItems()}
        <li className="dropdown-menu-footer">
          <Button.Ripple
            onClick={() => {
              dispatch(readNotification(user?.uid))
            }}
            color="primary"
            block
          >
            Đánh dấu đã đọc tất cả
          </Button.Ripple>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NotificationDropdown
