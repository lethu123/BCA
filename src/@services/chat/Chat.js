// ** React Imports
import React, {useState, useEffect, useRef, useCallback} from 'react'
import ReactDOM from 'react-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// ** Custom Components
import Avatar from '@core/components/avatar'
import AvatarGroup from '@core/components/avatar-group'
import EditDefaultGroupChat from './EditDefaultGroupChat'
import MessengerDetail from './MessengerDetail'

// ** Store & Actions
import {useDispatch, useSelector} from 'react-redux'
import {
  sendMessageChatGroupsAction,
  deleteChatGroupAction,
  editChatGroupAction,
  deleteMessageChatGroupsAction,
  updateMessageChatGroupsAction,
} from './store/actions'

// style
import './Chat.style.scss'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  MessageSquare,
  Menu,
  // PhoneCall,
  // Video,
  // Search,
  MoreVertical,
  // Mic,
  Image,
  Send,
  Trash2,
  PlusCircle,
} from 'react-feather'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button,
} from 'reactstrap'

import TimeAgo from 'react-timeago'
import moment from 'moment'
import vnStrings from 'react-timeago/lib/language-strings/vi'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import {useHistory} from 'react-router'

import {createSelector} from 'reselect'
import {useDropzone} from 'react-dropzone'
import {ChatQuery} from './hook'

const defaultAvatar =
  'https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png'

const formatter = buildFormatter(vnStrings)
const MySwal = withReactContent(Swal)

const selectUserSuggestion = createSelector(
  state => state.chat,
  chat => chat.userSys,
)

const ChatLog = props => {
  const history = useHistory()
  const loading = useSelector(state => state.async.loading)
  const userData =
    (localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData'))) ||
    null
  const userSuggestion = useSelector(selectUserSuggestion)
  // ** Props & Store
  const {
    // handleUser,
    // handleUserSidebarRight,
    memberSelect,
    handleSidebar,
    store,
    userSidebarLeft,
  } = props
  const {userProfile, selectedUser} = store

  // ** Refs & Dispatch
  const chatArea = useRef(null)
  // const inputFileRef = useRef(null)
  const dispatch = useDispatch()

  // ** State
  const [msg, setMsg] = useState('')
  const [files, setFiles] = useState([])
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalMessengerDetail, setOpenModalMessengerDetail] =
    useState(false)
  const [messengerDetail, setMessengerDetail] = useState(null)
  const {data: infoGroup} = ChatQuery.useGetInfomationGroup(
    selectedUser?.groupId,
    userData.uid,
  )

  console.log('info', infoGroup)

  // ** Scroll to chat bottom
  const scrollToBottom = () => {
    const chatContainer = ReactDOM.findDOMNode(chatArea.current)
    chatContainer.scrollTop = Number.MAX_SAFE_INTEGER
  }

  // ** If user chat is not empty scrollToBottom
  useEffect(() => {
    const selectedUserLen = Object.keys(selectedUser).length

    if (selectedUserLen) {
      scrollToBottom()
    }
  }, [selectedUser])

  useEffect(() => {
    if (!loading) {
      setOpenModalEdit(false)
      setOpenModalMessengerDetail(false)
    }
  }, [loading])

  // ** Formats chat data based on sender
  const formattedChatData = () => {
    let chatLog = []
    if (selectedUser.chat) {
      chatLog = selectedUser.chat.chat
    }

    const formattedChatLog = []
    let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined
    let msgGroup = {
      senderId: chatMessageSenderId,
      messages: [],
    }
    chatLog.forEach((msg, index) => {
      if (chatMessageSenderId === msg.senderId) {
        msgGroup.messages.push({
          id: msg.id,
          msg: msg.message,
          time: msg.time,
          images: msg.images,
          senderId: msg.senderId,
          viewerIds: msg.viewerIds,
        })
      } else {
        chatMessageSenderId = msg.senderId
        formattedChatLog.push(msgGroup)
        msgGroup = {
          senderId: msg.senderId,
          messages: [
            {
              id: msg.id,
              msg: msg.message,
              time: msg.time,
              images: msg.images,
              senderId: msg.senderId,
              viewerIds: msg.viewerIds,
            },
          ],
        }
      }
      if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
    })
    return formattedChatLog
  }

  // ** Renders user chat
  const renderChats = () => {
    console.log(selectedUser)
    return selectedUser.contacts.map((item, index) => {
      return (
        <div
          key={index}
          className={classnames('chat', {
            'chat-left': item !== userData.uid,
          })}
        >
          <div className="chat-avatar">
            <Avatar
              className="box-shadow-1 cursor-pointer"
              img={item === userData.uid ? userData.avatar : defaultAvatar}
            />
          </div>

          <div className="chat-body">
            {selectedUser.chats
              ?.filter(ele => ele.user_id === item)
              .map((ele, index) => (
                <div key={index} className="chat-content cursor-pointer">
                  <p>{ele.content}</p>
                  <div className="d-flex ">
                    {ele.attachment_image_url.length > 0 &&
                      ele.attachment_image_url.map((it, indx) => (
                        <img
                          className="mt-50"
                          alt="img user"
                          key={indx}
                          src={it}
                          // height="100"
                          width="120"
                          style={{
                            marginRight: '5px',
                            borderRadius: '4px',
                          }}
                        />
                      ))}
                  </div>
                </div>
              ))}

            {/* {item.messages.map((chat, idx) => (
              <div
                key={idx}
                className="chat-content cursor-pointer"
                onClick={() => {
                  setOpenModalMessengerDetail(true)
                  setMessengerDetail({
                    ...chat,
                    time: moment(chat.time).format('LLL'),
                  })
                }}
              >
                <p>{chat.msg}</p>
                <div className="d-flex ">
                  {chat.images.length > 0 &&
                    chat.images.map((ele, indx) => (
                      <img
                        className="mt-50"
                        alt="img user"
                        key={indx}
                        src={ele}
                        // height="100"
                        width="120"
                        style={{
                          marginRight: '5px',
                          borderRadius: '4px',
                        }}
                      />
                    ))}
                </div>
              </div>
            ))} */}
          </div>

          <div className="divider divider-dotted">
            <div className="divider-text">
              {/* <TimeAgo
                date={moment(
                  new Date(
                    new Date(
                      selectedUser.chats?.filter(ele => ele.user_id === item)[
                        selectedUser.chats?.filter(ele => ele.user_id === item)
                          .length - 1
                      ].time,
                    ).getTime() +
                      7 * 60 * 60 * 1000,
                  ),
                ).format('LLL')}
                formatter={formatter}
              /> */}
            </div>
          </div>
        </div>
      )
    })
  }

  // // ** Opens right sidebar & handles its data
  // const handleAvatarClick = obj => {
  //   handleUserSidebarRight()
  //   handleUser(obj)
  // }

  // ** On mobile screen open left sidebar on Start Conversation Click
  const handleStartConversation = () => {
    if (
      !Object.keys(selectedUser).length &&
      !userSidebarLeft &&
      window.innerWidth <= 1200
    ) {
      handleSidebar()
    }
  }

  // ** Sends New Msg
  const handleSendMsg = e => {
    e.preventDefault()
    if (msg.length) {
      dispatch(
        sendMessageChatGroupsAction(selectedUser.groupId, {
          user_id: userData.uid,
          content: msg ? msg : '',
          attachment_image_url: [],
        }),
      )
      setMsg('')
      setFiles([])
    }
  }

  // ** ChatWrapper tag based on chat's length
  const ChatWrapper =
    Object.keys(selectedUser).length && selectedUser.chats
      ? PerfectScrollbar
      : 'div'

  // DELETE GROUP CHAT
  const handleConfirmDeleteGroupChat = () => {
    MySwal.fire({
      title: `Enter "YES"`,
      input: 'text',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
      buttonsStyling: false,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Delete',
      showLoaderOnConfirm: true,
      preConfirm(value) {
        if (value.toLowerCase() === 'yes') {
          dispatch(deleteChatGroupAction(selectedUser.contact.id, userData.uid))
        }
      },
    })
  }

  // DELETE MESSENGER
  const handleConfirmDeleteMessengerDetail = () => {
    MySwal.fire({
      title: `Enter "YES"`,
      input: 'text',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
      buttonsStyling: false,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Delete',
      showLoaderOnConfirm: true,
      preConfirm(value) {
        if (value.toLowerCase() === 'yes') {
          dispatch(
            deleteMessageChatGroupsAction(
              messengerDetail.id,
              userData.uid,
              selectedUser.contact.id,
            ),
          )
        }
      },
    })
  }

  const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]
  }

  const onDrop = useCallback(
    acceptedFiles => {
      let arr = files.concat(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
      setFiles(getUniqueListBy(arr, 'name'))
    },
    [files],
  )

  const {getRootProps, getInputProps, inputRef} = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  return (
    <div className="chat-app-window">
      <div
        className={classnames('start-chat-area', {
          'd-none': Object.keys(selectedUser).length,
        })}
      >
        <div className="start-chat-icon mb-1">
          <MessageSquare />
        </div>
        <h4
          className="sidebar-toggle start-chat-text"
          onClick={handleStartConversation}
        >
          Start Conversation
        </h4>
      </div>
      {Object.keys(selectedUser).length ? (
        <div
          className={classnames('active-chat', {
            'd-none': selectedUser === null,
          })}
          style={{outline: 'unset'}}
          {...getRootProps({
            onClick: event => event.stopPropagation(),
          })}
        >
          <div className="chat-navbar">
            <header className="chat-header">
              <div className="d-flex align-items-center w-100">
                <div
                  className="sidebar-toggle d-block d-lg-none mr-1"
                  onClick={handleSidebar}
                >
                  <Menu size={21} />
                </div>

                {/* <h6 className="mb-0 mr-5">{selectedUser.contact.fullName}</h6> */}

                {/* <AvatarGroup
                  data={selectedUser.chats?.map(ele => ({
                    title: ele.user_id,
                    img: ele.picture || defaultAvatar,
                    // status: ele.status,
                    // onClick: () =>
                    //   history.push(`/user/${ele.user_id}/profile/feed`),
                  }))}
                /> */}
              </div>
              <div className="d-flex align-items-center">
                {/* <PhoneCall
                  size={18}
                  className="cursor-pointer d-sm-block d-none mr-1"
                />
                <Video
                  size={18}
                  className="cursor-pointer d-sm-block d-none mr-1"
                />
                <Search
                  size={18}
                  className="cursor-pointer d-sm-block d-none"
                /> */}
                {/* {selectedUser &&
                  parseInt(selectedUser.contact.members[0].user_id) ===
                    userData.uid && (
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn-icon"
                        color="transparent"
                        size="sm"
                      >
                        <MoreVertical size="18" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          href="/"
                          onClick={e => {
                            e.preventDefault()
                            setOpenModalEdit(true)
                          }}
                        >
                          Edit
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          onClick={e => {
                            e.preventDefault()
                            handleConfirmDeleteGroupChat()
                          }}
                        >
                          Delete
                        </DropdownItem> 
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )} */}
              </div>
            </header>
          </div>

          <ChatWrapper
            ref={chatArea}
            className={`user-chats ${files.length > 0 ? 'file' : ''}`}
            options={{wheelPropagation: false}}
          >
            {selectedUser.chats ? (
              <div className="chats">{renderChats()}</div>
            ) : null}
          </ChatWrapper>

          <Form
            className="chat-app-form flex-column"
            onSubmit={e => {
              handleSendMsg(e)
            }}
          >
            <div className="d-flex w-100 mt-3">
              <InputGroup className="input-group-merge mr-1 form-send-message">
                <Input
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                  placeholder="Type your message or use speech to text"
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <Label className="attachment-icon mb-0" for="attach-doc">
                      <Image
                        className="cursor-pointer text-secondary"
                        size={14}
                      />
                      <input
                        ref={inputRef}
                        type="file"
                        id="attach-doc"
                        hidden
                        {...getInputProps()}
                      />
                    </Label>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <Button className="send" color="primary">
                <Send size={14} className="d-lg-none" />
                <span className="d-none d-lg-block">Send</span>
              </Button>
            </div>
            {files.length > 0 && (
              <div className="thumb-container w-100">
                {files.length > 0 &&
                  files.map((file, index) => (
                    <div
                      className="dz-thumb cursor-pointer position-relative"
                      key={index}
                      onClick={() =>
                        setFiles(files.filter(ele => ele.name !== file.name))
                      }
                    >
                      <Trash2
                        size={20}
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                        }}
                        fill="#fff"
                        stroke="#ff6700"
                      />
                      <div className="dz-thumb-inner">
                        <img
                          src={file.preview}
                          className="dz-img"
                          alt={file.name}
                        />
                      </div>
                    </div>
                  ))}
                <Button.Ripple
                  key="add-plus"
                  className="mr-1 mb-1 mt-50"
                  outline
                  color="primary"
                  onClick={() => inputRef.current.click()}
                >
                  <PlusCircle size={26} />
                </Button.Ripple>
              </div>
            )}
          </Form>
        </div>
      ) : null}

      {selectedUser.contact && (
        <EditDefaultGroupChat
          closeEditModal={() => setOpenModalEdit(false)}
          modalEditDefault={openModalEdit}
          infoGroupChatSelect={selectedUser.contact}
          listUserChatSuggest={userSuggestion}
          handleEditInfoGroupChat={(data, groupId, newMember) => {
            dispatch(
              editChatGroupAction(
                {...data, user_id: userData.uid},
                groupId,
                newMember,
              ),
            )
          }}
        />
      )}

      {selectedUser.contact && (
        <MessengerDetail
          open={openModalMessengerDetail}
          close={() => setOpenModalMessengerDetail(false)}
          content={messengerDetail}
          setContent={value =>
            setMessengerDetail({...messengerDetail, msg: value})
          }
          currentUser={userData}
          groupId={selectedUser.contact.id}
          deleteMessenger={handleConfirmDeleteMessengerDetail}
          updateMessenger={() => {
            dispatch(
              updateMessageChatGroupsAction(
                messengerDetail.id,
                messengerDetail,
                userData.uid,
              ),
            )
          }}
        />
      )}
    </div>
  )
}

export default ChatLog
