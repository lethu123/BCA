import React, {useEffect, useState} from 'react'
import './chat-right.style.scss'
import {ArrowLeft, ArrowRight, Search} from 'react-feather'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  // Badge,
} from 'reactstrap'

// *** Components
import PopupChat from './PopupChat'
import MemberChat from './MemberChat'

import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Action
import {
  createChatGroupAction,
  getListChatGroupAction,
} from '@services/chat/store/actions'

const ChatRightSidebar = () => {
  const user =
    localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'))
  const dispatch = useDispatch()
  const isShow = useSelector(state => state.chat.isShowRightSidebar)
  const openPopup = useSelector(state => state.chat.isShowPopup)
  // const [item, setItem] = useState(null)

  // Chat reducer
  const setOpenPopup = state =>
    dispatch({
      type: 'TOGGLE_SHOW_POPUP_CHAT',
      payload: state,
    })

  useEffect(() => {
    if (user) {
      dispatch(getListChatGroupAction(user.uid))
    }
  }, [user])

  const setIsShow = state =>
    dispatch({type: 'TOGGLE_SHOW_RIGHT_SIDEBAR', payload: state})

  // useEffect(() => {
  //   if (item) {
  //     MySwal.fire({
  //       title: 'Your group name !',
  //       input: 'text',
  //       customClass: {
  //         confirmButton: 'btn btn-primary',
  //         cancelButton: 'btn btn-danger ml-1',
  //       },
  //       buttonsStyling: false,
  //       inputAttributes: {
  //         autocapitalize: 'off',
  //       },
  //       showCancelButton: true,
  //       confirmButtonText: `Invite ${item && item.name}`,
  //       showLoaderOnConfirm: true,
  //       onClose() {
  //         setItem(null)
  //       },

  //       preConfirm(value) {
  //         dispatch(
  //           createChatGroupAction(
  //             {
  //               owner: {
  //                 user_id: user && user.uid,
  //                 username: user && user.username,
  //                 dev_token_web: null,
  //                 dev_token_android: null,
  //                 dev_token_ios: null,
  //               },
  //               name: value,
  //               members: [user && user.uid],
  //               datetime_created: new Date(),
  //               datetime_updated: new Date(),
  //               active_members: [],
  //               icon: item.picture,
  //               icon_base64: null,
  //             },
  //             item.user_id || item.owner_id || item.id,
  //             user,
  //             item.name,
  //           ),
  //         )
  //       },
  //     })
  //   }
  // }, [item])

  return (
    <React.Fragment>
      <div className={`right-sidebar-mini ${!isShow ? 'right-sidebar' : ''}`}>
        <MemberChat
          setOpenPopup={() => {
            dispatch({type: 'TOGGLE_SHOW_RIGHT_SIDEBAR', payload: false})
            dispatch({type: 'TOGGLE_SHOW_POPUP_CHAT', payload: true})
          }}
        />
        <div
          className="right-sidebar-toggle bg-primary mt-3"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? <ArrowRight size="18" /> : <ArrowLeft size="18" />}
        </div>
      </div>
      {/* POPUP CHAT */}
      <PopupChat openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </React.Fragment>
  )
}

export default ChatRightSidebar
