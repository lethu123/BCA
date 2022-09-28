//**UI */
// import Link from 'next/link'
import {Edit, Heart, MessageSquare, MoreHorizontal, Trash2} from 'react-feather'
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap'
import {useState} from 'react'

//**Component */
import AddComment from './AddComment'

//**Data */

const Comment = ({
  data,
  replies,
  CommentCurrentUserID,
  deleteComment,
  editComment,
  setActiveComment,
  activeComment,
  addComment,
  parentId = null,
}) => {
  // const fiveMinutes = 300000
  // const timePassed = new Date() - new Date(data.createAt) > fiveMinutes
  const isEditing =
    activeComment &&
    activeComment.id === data.id &&
    activeComment.type === 'editing'
  const isReplying =
    activeComment &&
    activeComment.id === data.id &&
    activeComment.type === 'replying'
  const canReply = Boolean(CommentCurrentUserID)
  const canEdit = CommentCurrentUserID === data.userId
  const canDelete = CommentCurrentUserID === data.userId
  const replyId = parentId ? parentId : data.id
  //**State */
  //**State */
  const [dropdownOpen, setdropdownOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [img, setImg] = useState(data.image)
  const [limit, setLimit] = useState(2)
  const [isShowMore, setIsShowMore] = useState(
    () => data.content && data.content.length > 300,
  )

  const [openTooltip, setOpenTooltip] = useState(false)

  const toggle = () => {
    setdropdownOpen(!dropdownOpen)
  }

  return (
    <>
      <div key={data.name} className="d-flex">
        <div
          style={{width: '50px', height: '50px'}}
          className="mr-1"
          // onMouseEnter={() => setOpenTooltip(true)}
          // onMouseLeave={() => setOpenTooltip(false)}
        >
          {/* <img
            className="w-100 h-100 rounded-circle cursor-pointer"
            style={{objectFit: 'cover'}}
            src={
              data.user_info.avatar
                ? data.user_info.avatar
                : 'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
            }
            alt=""
          /> */}
          <img
            className="w-100 h-100 rounded-circle cursor-pointer"
            style={{objectFit: 'cover'}}
            src="https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg"
            alt=""
          />
        </div>
        <div style={{width: 'calc(100% - 65px)'}}>
          <div className="d-flex justify-content-between align-items-start">
            <div
              className="rounded p-1 d-inline-block"
              style={{backgroundColor: '#fafafa'}}
            >
              <p className="cursor-pointer d-flex justify-content-between align-items-center mb-0">
                <span className="title-16-bold">{data.name}</span>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle
                    tag="a"
                    onClick={toggle}
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                    className="position-relative dropdownToggle"
                  >
                    <MoreHorizontal size={24} />
                  </DropdownToggle>
                  <DropdownMenu
                    style={{width: '180px'}}
                    className="p-2 rounded"
                    end
                    tag="ul"
                  >
                    <li
                      className="title-16-700-24 cursor-pointer mb-2 d-flex align-items-center"
                      onClick={() => {
                        setActiveComment({id: data.id, type: 'editing'})
                        toggle()
                      }}
                    >
                      <Edit className="me-1" size={18} />
                      Edit post
                    </li>
                    <li
                      className="title-16-700-24 cursor-pointer d-flex align-items-center"
                      onClick={() => {
                        deleteComment(data.id)
                        toggle()
                      }}
                    >
                      <Trash2 className="me-1" size={18} />
                      Delete post
                    </li>
                  </DropdownMenu>
                </Dropdown>
              </p>
              {!isEdit && (
                <>
                  <pre
                    style={{fontSize: '1.1rem'}}
                    className="custom-pretag mb-0"
                  >
                    {isShowMore ? data.comment.slice(0, 300) : data.comment}
                    {data.comment && data.comment.length > 300 && (
                      <span
                        className="cursor-pointer"
                        style={{fontWeight: 'bold', fontSize: '0.8rem'}}
                        onClick={() => setIsShowMore(!isShowMore)}
                      >
                        {isShowMore ? ' ...view more' : ' ...view less'}
                      </span>
                    )}
                  </pre>
                </>
              )}
            </div>
          </div>
          {isReplying && (
            <AddComment handleSubmit={text => addComment(text, replyId)} />
          )}

          {isEditing && (
            <AddComment
              hasCancelButton
              initialText={data.comment}
              handleSubmit={text => editComment(text, data.id)}
              handleCancel={() => {
                setActiveComment(null)
              }}
            />
          )}
          <div className={` mt-2 mb-2 d-flex align-items-center`}>
            <p className="d-flex align-items-center mb-0 cursor-pointer mr-1">
              <Heart size={15} className="mr-1" />
              Yêu thích
            </p>
            <p
              className="d-flex align-items-center mb-0 cursor-pointer"
              // onClick={() => setActiveComment({id: data.id, type: 'replying'})}
            >
              <MessageSquare size={15} className="mr-1" />
              Trả lời
            </p>
          </div>
          {replies.length > 0 && (
            <div className="replies">
              {replies.map(reply => (
                <Comment
                  CommentCurrentUserID={CommentCurrentUserID}
                  data={reply}
                  key={reply.id}
                  replies={[]}
                  setActiveComment={setActiveComment}
                  activeComment={activeComment}
                  editComment={editComment}
                  deleteComment={deleteComment}
                  addComment={addComment}
                  parentId={data.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Comment
