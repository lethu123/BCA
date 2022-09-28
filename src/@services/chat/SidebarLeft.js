// ** React Imports
import {useCallback, useState} from 'react'

// ** Custom Components
import Avatar from '@core/components/avatar'

// ** Store & Actions
import {useDispatch} from 'react-redux'
import {selectChat} from './store/actions'

// ** Utils
import {formatDateToMonthShort} from 'utility/Utils'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {X, Search, CheckSquare, Bell, User, Trash, Plus} from 'react-feather'
import {
  Card,
  CardText,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Badge,
  CustomInput,
  Button,
  Spinner,
} from 'reactstrap'
import ModalAddGroupChat from './modal/ModalAddGroupChat'
import ChatQuery from './hook/query'

// ** ASSETS --------------------------------
import image from 'assets/images/avatars/avatar-blank.png'

// const colorType = {
//   students: '#C3EFD7',
//   instructors: '#F9CFCF',
//   organizations: '#B8F2F9',
//   followings: '#FFD4B8',
//   suggestions: '#DCDDDF',
// }

const userData = JSON.parse(localStorage.getItem('userData'))

const SidebarLeft = props => {
  // ** Props & Store
  const {
    store,
    sidebar,
    handleSidebar,
    userSidebarLeft,
    handleUserSidebarLeft,
  } = props
  const {chats, contacts, userProfile, selectedUser} = store
  const {data, isLoading} = ChatQuery.useGetListUserRightSidebar()
  const {data: listGroup, isLoading: loadingGroup} =
    ChatQuery.useGetListGroupChat(userData.uid)

  // ** Dispatch
  const dispatch = useDispatch()

  // ** State
  const [about, setAbout] = useState('')
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('online')
  const [filteredChat, setFilteredChat] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [modal, setModal] = useState(false)

  // const [currentSelect, setCurrentSelect] = useState()

  // const {data: messages} = ChatQuery.useGetAllMessageGroup(
  //   currentSelect,
  //   userData.uid,
  // )

  const handleUserClick = useCallback(
    id => {
      if (userData) {
        dispatch(selectChat(id, userData.uid))
        // alert('test')
        // setCurrentSelect(id)
      }
      if (sidebar === true) {
        handleSidebar()
      }
    },
    [handleSidebar, sidebar],
  )
  const toggleModal = () => setModal(!modal)

  // ** Renders Chat
  const renderChats = () => {
    if (chats && chats.length) {
      if (query.length && !filteredChat.length) {
        return (
          <li className="no-results show">
            <h6 className="mb-0">No Chats Found</h6>
          </li>
        )
      } else {
        const arrToMap =
          query.length && filteredChat.length ? filteredChat : chats

        return arrToMap.map(item => {
          const time = formatDateToMonthShort(
            item.chat.lastMessage ? item.chat.lastMessage.time : new Date(),
          )

          return (
            <li
              className={classnames({
                active:
                  selectedUser &&
                  selectedUser.contact &&
                  selectedUser.contact.id === item.id,
              })}
              key={item.id}
              onClick={() => {
                handleUserClick(item.id)
              }}
            >
              <Avatar
                img={item.avatar}
                imgHeight="42"
                imgWidth="42"
                // status={item.status}
              />
              <div className="chat-info flex-grow-1">
                <h5 className="mb-0">{item.fullName}</h5>
                <CardText className="text-truncate">
                  {item.chat.lastMessage
                    ? item.chat.lastMessage.message
                    : chats[chats.length - 1].message}
                </CardText>
              </div>
              <div className="chat-meta text-nowrap">
                <small className="float-right mb-1 chat-time ml-1">
                  {time}
                </small>
                {item.chat.unseenMsgs >= 1 ? (
                  <Badge className="float-right" color="danger" pill>
                    {item.chat.unseenMsgs}
                  </Badge>
                ) : null}
              </div>
            </li>
          )
        })
      }
    } else {
      return null
    }
  }

  // ** Renders Contact
  const renderContacts = () => {
    return listGroup?.groups.map(it => (
      <li
        // className={classnames({
        //   active:
        //     selectedUser &&
        //     selectedUser.contact &&
        //     selectedUser.contact.id === item.id,
        // })}
        key={it._id}
        onClick={() => {
          handleUserClick(it._id)
        }}
        // style={{backgroundColor: colorType[item.type]}}
      >
        <Avatar
          img={it.avatar}
          imgHeight="42"
          imgWidth="42"
          onError={e => {
            e.target.onerror = null
            e.target.src = image
          }}
        />
        <div className="chat-info flex-grow-1">
          <h5 className="mb-0">{it.name}</h5>
          <CardText className="text-truncate">
            {it.last_message?.newest_message}
          </CardText>
        </div>
      </li>
    ))
  }

  // ** Handles Filter
  const handleFilter = e => {
    setQuery(e.target.value)
    const searchFilterFunction = contact =>
      contact.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    const filteredChatsArr = chats.filter(searchFilterFunction)
    const filteredContactssArr = contacts.filter(searchFilterFunction)
    setFilteredChat([...filteredChatsArr])
    setFilteredContacts([...filteredContactssArr])
  }

  return store ? (
    <div className="sidebar-left">
      <div className="sidebar">
        <div
          className={classnames('chat-profile-sidebar', {
            show: userSidebarLeft,
          })}
        >
          <header className="chat-profile-header">
            <div className="close-icon" onClick={handleUserSidebarLeft}>
              <X size={14} />
            </div>
            <div className="header-profile-sidebar">
              <Avatar
                className="box-shadow-1 avatar-border"
                img={userProfile.avatar}
                // status={status}
                size="xl"
              />
              <h4 className="chat-user-name">{userProfile.fullName}</h4>
              <span className="user-post">{userProfile.role}</span>
            </div>
          </header>
          <PerfectScrollbar
            className="profile-sidebar-area"
            options={{wheelPropagation: false}}
          >
            <h6 className="section-label mb-1">About</h6>
            <div className="about-user">
              <Input
                rows="5"
                defaultValue={userProfile.about}
                type="textarea"
                onChange={e => setAbout(e.target.value)}
                className={classnames('char-textarea', {
                  'text-danger': about && about.length > 120,
                })}
              />
              <small className="counter-value float-right">
                <span className="char-count">
                  {userProfile.about ? userProfile.about.length : 0}
                </span>
                / 120
              </small>
            </div>
            <h6 className="section-label mb-1 mt-3">Status</h6>
            <ul className="list-unstyled user-status">
              <li className="pb-1">
                <CustomInput
                  type="radio"
                  className="custom-control-primary"
                  id="online"
                  label="Online"
                  onChange={e => setStatus('online')}
                  checked={status === 'online'}
                />
              </li>
              <li className="pb-1">
                <CustomInput
                  type="radio"
                  className="custom-control-danger"
                  id="busy"
                  label="Do Not Disturb"
                  onChange={e => setStatus('busy')}
                  checked={status === 'busy'}
                />
              </li>
              <li className="pb-1">
                <CustomInput
                  type="radio"
                  className="custom-control-warning"
                  id="away"
                  label="Away"
                  onChange={e => setStatus('away')}
                  checked={status === 'away'}
                />
              </li>
              <li className="pb-1">
                <CustomInput
                  type="radio"
                  className="custom-control-secondary"
                  id="offline"
                  label="Offline"
                  onChange={e => setStatus('offline')}
                  checked={status === 'offline'}
                />
              </li>
            </ul>
            <h6 className="section-label mb-1 mt-2">Settings</h6>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between align-items-center mb-1">
                <div className="d-flex align-items-center">
                  <CheckSquare className="mr-75" size="18" />
                  <span className="align-middle">Two-step Verification</span>
                </div>
                <CustomInput
                  type="switch"
                  id="verification"
                  name="verification"
                  label=""
                  defaultChecked
                />
              </li>
              <li className="d-flex justify-content-between align-items-center mb-1">
                <div className="d-flex align-items-center">
                  <Bell className="mr-75" size="18" />
                  <span className="align-middle">Notification</span>
                </div>
                <CustomInput
                  type="switch"
                  id="notifications"
                  name="notifications"
                  label=""
                />
              </li>
              <li className="d-flex align-items-center cursor-pointer mb-1">
                <User className="mr-75" size="18" />
                <span className="align-middle">Invite Friends</span>
              </li>
              <li className="d-flex align-items-center cursor-pointer">
                <Trash className="mr-75" size="18" />
                <span className="align-middle">Delete Account</span>
              </li>
            </ul>
            <div className="mt-3">
              <Button color="primary">Logout</Button>
            </div>
          </PerfectScrollbar>
        </div>
        <Card
          className={classnames('sidebar-content', {
            show: sidebar === true,
          })}
        >
          <div className="sidebar-close-icon" onClick={handleSidebar}>
            <X size={14} />
          </div>
          <div className="chat-fixed-search">
            <div className="d-flex align-items-center w-100">
              <div
                className="sidebar-profile-toggle"
                onClick={handleUserSidebarLeft}
              >
                {Object.keys(userProfile).length ? (
                  <Avatar
                    className="avatar-border"
                    img={userProfile.avatar}
                    // status={status}
                    imgHeight="42"
                    imgWidth="42"
                  />
                ) : null}
              </div>
              <InputGroup className="input-group-merge ml-1 w-100">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="round">
                    <Search className="text-muted" size={14} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  value={query}
                  className="round"
                  placeholder="Search or start a new chat"
                  onChange={handleFilter}
                />
              </InputGroup>
            </div>
          </div>
          <PerfectScrollbar
            className="chat-user-list-wrapper list-group"
            options={{wheelPropagation: false}}
          >
            <h4 className="chat-list-title">Chats</h4>
            <ul className="chat-users-list chat-list media-list">
              {renderChats()}
            </ul>
            <div className="d-flex justify-content-between align-items-center chat-list-title ">
              <h4 className=" ">Groups Contacts</h4>
              <Button.Ripple
                className="btn-icon"
                outline
                color="success"
                size="sm"
                onClick={toggleModal}
              >
                <Plus size={16} />
              </Button.Ripple>
            </div>

            {loadingGroup ? (
              <div className="text-center">
                <Spinner color="primary" size="sm" />
                <span className="ml-50 ">Loading...</span>
              </div>
            ) : (
              <ul className="chat-users-list contact-list media-list">
                {renderContacts()}
              </ul>
            )}
          </PerfectScrollbar>
        </Card>
      </div>
      <ModalAddGroupChat
        chats={data?.data}
        modal={modal}
        toggleModal={toggleModal}
      />
    </div>
  ) : null
}

export default SidebarLeft
