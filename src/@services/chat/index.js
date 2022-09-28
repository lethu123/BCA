// ** React Imports
import {Fragment, useState, useEffect, useRef} from 'react'

// ** Chat App Component Imports
import Chat from './Chat'
import Sidebar from './SidebarLeft'
import UserProfileSidebar from './UserProfileSidebar'

// ** Third Party Components
import classnames from 'classnames'

// ** Store & Actions
import {useDispatch, useSelector} from 'react-redux'
import {getUserProfile} from './store/actions'

import '@core/scss/base/pages/app-chat.scss'
import '@core/scss/base/pages/app-chat-list.scss'

const AppChat = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.chat)
  const socket = useRef(null)
  const userData =
    (localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData'))) ||
    null
  const selectedGroup = useSelector(state => state.chat.selectedUser)

  // ** States
  const [user, setUser] = useState({})
  const [sidebar, setSidebar] = useState(false)
  const [userSidebarRight, setUserSidebarRight] = useState(false)
  const [userSidebarLeft, setUserSidebarLeft] = useState(false)
  const [members, setMembers] = useState([])

  // ** Sidebar & overlay toggle functions
  const handleSidebar = () => setSidebar(!sidebar)
  const handleUserSidebarLeft = () => setUserSidebarLeft(!userSidebarLeft)
  const handleUserSidebarRight = () => setUserSidebarRight(!userSidebarRight)
  const handleOverlayClick = () => {
    setSidebar(false)
    setUserSidebarRight(false)
    setUserSidebarLeft(false)
  }

  // ** Set user function for Right Sidebar
  const handleUser = obj => setUser(obj)

  // ** Get data on Mount
  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])

  useEffect(() => {
    if (userData && selectedGroup.contact) {
      socket.current = new WebSocket(
        `wss://chat.api.hspaces.biz/ws/chat/${userData.uid}/${selectedGroup.contact.id}`,
      )

      socket.current.onopen = onOpen
      socket.current.onclose = onClose
      socket.current.onmessage = onMessage

      return () => {
        socket.current.close()
      }
    }
  }, [userData])

  useEffect(() => {
    if (store.selectedUser.contact) {
      setMembers(store.selectedUser.contact.members)
    }
  }, [store.selectedUser.contact])

  function onOpen(e) {
    console.log('socket connect group', socket.current.readyState)
    socket.current.send(
      JSON.stringify({
        type: 'connect',
        user,
      }),
    )
  }

  function onClose(e) {
    console.log(e)
    // dispatch({type: 'CLEAR_GROUP_CHAT_SELECT'})
  }
  async function onMessage(e) {
    const data = JSON.parse(e.data)
    console.log(data)

    if (!userData) {
      return
    }

    // <========================================================================>
    // USER JOIN GROUP
    // if (data.user_join_id && data.user_join_group_id) {
    //   if (
    //     selectedGroup.contact &&
    //     selectedGroup.contact.id === data.user_join_group_id
    //   ) {
    //     let member = {}
    //     let members = store.selectedUser.contact.members.map(ele => {
    //       if (parseInt(ele.user_id) === data.user_join_id) {
    //         member = {...ele, status: 'online'}
    //         return member
    //       } else {
    //         return ele
    //       }
    //     })
    //     if (data.user_join_id !== userData.uid) {
    //       toast.info(
    //         `${member.username} has just join ${store.selectedUser.contact.fullName} group chat`,
    //       )
    //     }
    //     setMembers(members)
    //   }
    // }

    // <========================================================================>
    // USER LEFT GROUP
    // if (data.user_left_id && data.user_left_group_id) {
    //   if (
    //     selectedGroup.contact &&
    //     selectedGroup.contact.id === data.user_left_group_id
    //   ) {
    //     let member = {}
    //     let members = store.selectedUser.contact.members.map(ele => {
    //       if (parseInt(ele.user_id) === data.user_left_group_id) {
    //         member = {...ele, status: 'offline'}
    //         return member
    //       } else {
    //         return ele
    //       }
    //     })
    //     setMembers(members)
    //   }
    // }
  }

  return (
    <Fragment>
      <Sidebar
        store={store}
        sidebar={sidebar}
        handleSidebar={handleSidebar}
        userSidebarLeft={userSidebarLeft}
        handleUserSidebarLeft={handleUserSidebarLeft}
      />
      <div className="content-right">
        <div className="content-wrapper">
          <div className="content-body">
            <div
              className={classnames('body-content-overlay', {
                show:
                  userSidebarRight === true ||
                  sidebar === true ||
                  userSidebarLeft === true,
              })}
              onClick={handleOverlayClick}
            ></div>
            <Chat
              store={store}
              handleUser={handleUser}
              handleSidebar={handleSidebar}
              userSidebarLeft={userSidebarLeft}
              handleUserSidebarRight={handleUserSidebarRight}
              memberSelect={members}
            />
            <UserProfileSidebar
              user={user}
              userSidebarRight={userSidebarRight}
              handleUserSidebarRight={handleUserSidebarRight}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AppChat
