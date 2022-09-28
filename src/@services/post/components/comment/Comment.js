import React, {useEffect, useState} from 'react'
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {MoreHorizontal} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'

// *** component
import AddComment from './AddComment'
//** assets */
import defaultAvatar from 'assets/images/avatars/avatar-blank.png'

// *** QUERY
import {PostQuery, PostMutation} from '@services/post'
import {UserQuery} from '@services/user'

// import PostApi from '@services/post/post-api'
import {useLocation} from 'react-router-dom'

const MySwal = withReactContent(Swal)
const formatter = buildFormatter(englishStrings)

const RenderReplies = ({idCmt, listReply, users}) => {
  // query
  const {mutate} = PostMutation.useDeleteReplyComment()
  const [replies, setReplies] = useState([])

  useEffect(() => {
    setReplies(
      listReply.map(item => ({
        ...item,
        isEdit: false,
        user: users.find(ele => ele.user_id === item.author_id),
      })),
    )
  }, [listReply, users])

  const handleConfirmCancel = id => {
    return MySwal.fire({
      title: 'Bạn muốn xóa bình luận này?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline ml-1',
      },
      showClass: {
        popup: 'animate__animated animate__bounceIn',
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        const formData = new FormData()
        formData.append('id', id)
        mutate(formData)
      }
    })
  }

  return (
    <div>
      {replies?.map(ele => (
        <div key={ele._id}>
          <div className="d-flex pt-1">
            <div style={{width: '40px', height: '40px', margin: '0 20px 0 0'}}>
              <span class="symbol-label">
                <img
                  src={ele.user?.avatar || defaultAvatar}
                  className="rounded h-100 w-100 align-self-end"
                  alt="images"
                  onError={e => {
                    e.target.onerror = null
                    e.target.src = defaultAvatar
                  }}
                />
              </span>
            </div>

            <div className="d-flex flex-column flex-row-fluid w-100">
              <div className="d-flex align-items-center flex-wrap justify-content-between">
                <div
                  style={{
                    background: '#F0F2F5',
                    padding: '10px',
                    marginBottom: '5px',
                  }}
                  className="rounded"
                >
                  <div className="d-flex">
                    <p className="text-dark-75 text-hover-primary  mb-0 font-size-lg font-weight-bolder mr-1">
                      {ele.user?.user_name || 'Ẩn danh'}
                    </p>
                    <small className="text-muted font-weight-normal flex-grow-1 font-size-sm">
                      <TimeAgo date={ele.created_at} formatter={formatter} />
                    </small>
                  </div>
                  <span
                    className="text-dark-75 font-size-sm font-weight-normal my-0"
                    style={{display: 'block', margin: '10px 0'}}
                  >
                    {ele.content}
                  </span>
                </div>
                <UncontrolledDropdown>
                  <DropdownToggle tag="div">
                    <MoreHorizontal
                      size={18}
                      className="cursor-pointer text-muted"
                    />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      tag="span"
                      className="w-100"
                      onClick={() =>
                        setReplies(
                          replies.map(item =>
                            item._id === ele._id
                              ? {...item, isEdit: true}
                              : {...item, isEdit: false},
                          ),
                        )
                      }
                    >
                      Chỉnh sửa
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleConfirmCancel(ele._id)}
                      tag="span"
                      className="w-100"
                    >
                      Xóa
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>

              {/* update reply */}
              {ele.isEdit && (
                <AddComment item={ele} idPost={idCmt} reply={true} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Comment = ({idPost, reply}) => {
  // Router
  const {time} = useLocation()

  // query
  const {useGetListComment, useGetListReplyComment} = PostQuery
  const {data: listComment} = useGetListComment(idPost, time) // list comment
  const {mutate} = PostMutation.useDeleteComment()
  const [comments, setComments] = useState([])
  const [currentCmt, setCurrentCmt] = useState({
    idCmt: '',
    isOpen: false,
  })

  const {data: users} = UserQuery.useGetListAllUserSys()

  const {data: listReply} = useGetListReplyComment(currentCmt.idCmt) // list reply comment

  useEffect(() => {
    setComments(
      listComment?.data?.map(item => ({
        ...item,
        isReply: false,
        isEdit: false,
        isLoadReply: false,
        user: users?.data.find(ele => ele.user_id === item.author_id),
      })),
    )
  }, [listComment, reply, users])

  const handleConfirmCancel = id => {
    return MySwal.fire({
      title: 'Bạn muốn xóa bình luận này?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline ml-1',
      },
      showClass: {
        popup: 'animate__animated animate__bounceIn',
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        const formData = new FormData()
        formData.append('id', id)
        mutate(formData)
      }
    })
  }

  return (
    <div className="mb-2">
      {comments &&
        comments.length > 0 &&
        comments.map(item => (
          <div key={item._id}>
            <div className="d-flex pt-2">
              <div
                style={{width: '40px', height: '40px', margin: '0 20px 0 0'}}
              >
                <span class="symbol-label">
                  <img
                    src={item.user?.avatar || defaultAvatar}
                    className="rounded h-100 w-100 align-self-end"
                    alt="images"
                    onError={e => {
                      e.target.onerror = null
                      e.target.src = defaultAvatar
                    }}
                  />
                </span>
              </div>
              <div
                style={{width: 'calc(100% - 40px)'}}
                className="d-flex flex-column flex-row-fluid"
              >
                <div className="d-flex align-items-center flex-wrap justify-content-between">
                  <div
                    style={{
                      background: '#F0F2F5',
                      padding: '10px',
                      marginBottom: '5px',
                    }}
                    className="rounded"
                  >
                    <div className="d-flex">
                      <p className="text-dark-75 text-hover-primary  mb-0 font-size-lg font-weight-bolder mr-1">
                        {item.user?.user_name || 'Ẩn danh'}
                      </p>
                      <small className="text-muted font-weight-normal flex-grow-1 font-size-sm">
                        <TimeAgo
                          date={item.created_at + 'Z'}
                          formatter={formatter}
                        />
                      </small>
                    </div>
                    <span
                      className="text-dark-75 font-size-sm font-weight-normal my-0"
                      style={{display: 'block', margin: '10px 0'}}
                    >
                      {item.content}
                    </span>
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle tag="div">
                      <MoreHorizontal
                        size={18}
                        className="cursor-pointer text-muted"
                      />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={() => {
                          setComments(
                            comments.map(ele =>
                              ele._id === item._id
                                ? {...ele, isEdit: true}
                                : {...ele, isEdit: false},
                            ),
                          )
                        }}
                        tag="span"
                        className="w-100"
                      >
                        Chỉnh sửa
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleConfirmCancel(item._id)}
                        tag="span"
                        className="w-100"
                      >
                        Xóa
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                {/* <div className="d-flex align-items-center flex-wrap justify-content-between">
                  <p className="text-dark-75 text-hover-primary  mb-0 font-size-lg font-weight-bolder mr-1">
                    {item.user?.user_name || 'Ẩn danh'}
                  </p>
                  <span className="text-muted font-weight-normal flex-grow-1 font-size-sm">
                    <TimeAgo
                      date={item.created_at + 'Z'}
                      formatter={formatter}
                    />
                  </span>

                  <UncontrolledDropdown>
                    <DropdownToggle tag="div">
                      <MoreHorizontal
                        size={18}
                        className="cursor-pointer text-muted"
                      />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={() => {
                          setComments(
                            comments.map(ele =>
                              ele._id === item._id
                                ? {...ele, isEdit: true}
                                : {...ele, isEdit: false},
                            ),
                          )
                        }}
                        tag="span"
                        className="w-100"
                      >
                        Chỉnh sửa
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleConfirmCancel(item._id)}
                        tag="span"
                        className="w-100"
                      >
                        Xóa
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <span
                  className="text-dark-75 font-size-sm font-weight-normal mt-0"
                  style={{display: 'block', margin: '10px 0'}}
                >
                  {item.content}
                </span> */}
                {/* update comment */}
                {item.isEdit && <AddComment item={item} idPost={idPost} />}
                <div className="d-flex">
                  <small className=" text-muted cursor-pointer"> Like</small>
                  <small
                    className="text-muted font-weight-normal mx-2"
                    style={{
                      display: reply ? 'block' : 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setComments(
                        comments.map(ele =>
                          ele._id === item._id
                            ? {
                                ...ele,
                                isReply: !item.isReply,
                                isEdit: false,
                              }
                            : {...ele, isReply: false},
                        ),
                      )
                      setCurrentCmt({
                        ...currentCmt,
                        idCmt: item._id,
                      })
                    }}
                  >
                    Reply
                  </small>
                  <small
                    className="mr-5 text-muted  cursor-pointer"
                    onClick={() => {
                      setCurrentCmt({
                        idCmt: item._id,
                        isOpen:
                          item._id === currentCmt.idCmt
                            ? !currentCmt.isOpen
                            : true,
                      })
                    }}
                  >
                    {item.total_reply_comment || 0} lượt phản hồi
                  </small>
                </div>
                {/* list reply */}
                {currentCmt.isOpen && item._id === currentCmt.idCmt && (
                  <RenderReplies
                    users={users?.data || []}
                    listReply={listReply?.data || []}
                    idCmt={item._id}
                  />
                )}
                {(item.isReply ||
                  (currentCmt.isOpen && item._id === currentCmt.idCmt)) && (
                  <AddComment
                    setCurrentCmt={setCurrentCmt}
                    currentCmt={currentCmt}
                    idPost={item._id}
                    reply={true}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Comment
