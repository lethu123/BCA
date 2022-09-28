import React, {useEffect, useState} from 'react'
import moment from 'moment'
import {
  MoreHorizontal,
  Edit,
  Trash,
  Bookmark,
  Gift,
  Heart,
  MessageSquare,
} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
} from 'reactstrap'
// import {BizxuImg} from 'components/icon'
import {useHistory, Link} from 'react-router-dom'
import parse from 'html-react-parser'

// *** query
import {PostMutation} from '@services/post'

// *** Components
import AddComment from './comment/AddComment'
import Comment from './comment/Comment'
//***  Style
import '../scss/Post.style.scss'
import defaultAvatar from 'assets/images/avatars/avatar-blank.png'

const PostItem = ({
  item,
  setIsOpen,
  setEditData,
  setPhotoIndex,
  setIsOpenLb,
  setImageList,
  user = [],
}) => {
  const history = useHistory()

  // *** States
  const [like, setlike] = useState(() => ({
    isLike: false,
    count: 0,
  }))

  // *** Use Effect
  useEffect(() => {
    if (item && item.reactors) {
      setlike({
        isLike:
          (item?.reactors &&
            item.reactors.map(r => r.user_id).includes(userLogin?.uid)) ||
          false,
        count: item?.like || 0,
      })
    }
  }, [item])

  const {mutate: dispatchDeletePost} = PostMutation.useDeletePostByUser()
  const {mutate: likePost} = PostMutation.useLikePost(() =>
    setlike(like => ({
      ...like,
      isLike: true,
      count: like.count + 1,
    })),
  )

  const {mutate: unLikePost} = PostMutation.useUnLikePost(() =>
    setlike(like => ({
      ...like,
      isLike: false,
      count: like.count - 1,
    })),
  )

  const userLogin =
    localStorage.getItem('userData') &&
    JSON.parse(localStorage.getItem('userData'))

  const handleUsername = uid => {
    const findUser = user.find(ele => ele.user_id === uid)
    return findUser ? findUser.profile?.name || findUser.user_name : ''
  }

  let isMultipleImages = item?.image?.length < 5
  let isDoubleImage = item?.image?.length === 2

  const renderLayoutImg = idx => {
    switch ((idx + 1) % 5) {
      case 1:
        return isDoubleImage
          ? 'calc(0% + 0px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)'
          : `calc(0% + 0px) calc(50% + 1.01px) calc(${
              isMultipleImages ? '50' : '40'
            }% + 1.01px) calc(0% + 0px)`
      case 2:
        return isDoubleImage
          ? 'calc(0% + 0px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)'
          : `calc(0% + 0px) calc(0% + 0px) calc(${
              isMultipleImages ? '50' : '40'
            }% + 1.01px) calc(50% + 1.01px)`
      case 3:
        return `calc(60% + 1.01px) calc(${
          isMultipleImages ? '50' : '66.6667'
        }% + 1.01px) calc(0% + 0px) calc(0% + 0px)`
      case 4:
        return isMultipleImages
          ? 'calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)'
          : 'calc(60% + 1.01px) calc(33.3333% + 1.01px) calc(0% + 0px)'

      default:
        return 'calc(60% + 1.01px) calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)'
    }
  }

  const handleReactPost = () => {
    let dataRequest = {
      post_id: item._id,
      user_id: userLogin.uid,
    }
    if (like.isLike) {
      unLikePost(dataRequest)
    } else {
      likePost(dataRequest)
    }
  }

  if (!item) return null
  return (
    <div
      className="card card-custom gutter-b"
      onClick={() => setImageList(item.image)}
    >
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div style={{width: '40px', height: '40px', marginRight: '10px'}}>
            <span class="symbol-label">
              <img
                src={
                  user.find(ele => ele.user_id === item.user_id)?.avatar ||
                  defaultAvatar
                }
                className="h-100 w-100 align-self-end rounded"
                alt="imgAvatar"
                onError={e => {
                  e.target.onerror = null
                  e.target.src = defaultAvatar
                }}
                style={{objectFit: 'cover'}}
              />
            </span>
          </div>
          <div className="d-flex flex-column flex-grow-1">
            <span
              className="text-dark-75 text-hover-primary font-size-lg font-weight-bolder cursor-pointer"
              onClick={() => history.push(`/user/${item.user_id}/profile/feed`)}
            >
              {handleUsername(item.user_id)}
            </span>

            <Link
              to={`/post/${item._id}`}
              className="text-muted font-weight-bold text-hover-primary"
            >
              {item.created_at &&
                moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}
            </Link>
          </div>
          {userLogin && userLogin.uid === item.user_id && (
            <div className="dropdown dropdown-inline ml-2">
              <UncontrolledDropdown>
                <DropdownToggle className="pr-1 cursor-pointer" tag="span">
                  <MoreHorizontal size={15} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem style={{marginRight: 0, width: '100%'}}>
                    <Bookmark
                      size={15}
                      style={{marginTop: 2, marginRight: 10}}
                    />
                    <span className="align-middle ">Lưu</span>
                  </DropdownItem>
                  <DropdownItem
                    style={{marginRight: 0, width: '100%'}}
                    onClick={() => {
                      setIsOpen(true)
                      setEditData(item)
                    }}
                  >
                    <Edit size={15} style={{marginTop: 2, marginRight: 10}} />
                    <span className="align-middle ">Chỉnh sửa</span>
                  </DropdownItem>
                  <DropdownItem
                    style={{marginRight: 0, width: '100%'}}
                    onClick={() => {
                      let formData = new FormData()
                      formData.append('id', item._id)
                      dispatchDeletePost(formData)
                    }}
                  >
                    <Trash size={15} style={{marginTop: 2, marginRight: 10}} />
                    <span className="align-middle">Xóa</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          )}
        </div>
        <div className="pt-2">
          <div className="text-dark-75 font-size-lg font-weight-normal mb-2 resize-image-post">
            {item.content && parse(item.content)}
          </div>
          {item.image && item.image.length === 1 && (
            <div>
              <img
                src={item.image[0]}
                alt=""
                className="img-fluid"
                width={'100%'}
              />
            </div>
          )}
          {console.log('item.image', item.image)}
          {item.image && item.image.length > 1 && (
            <div
              style={{
                paddingTop: isDoubleImage
                  ? 'calc(50%)'
                  : isMultipleImages
                  ? 'calc(100%)'
                  : 'calc(83.3333%)',
              }}
              className="position-relative"
              id="post-image-content"
            >
              {item.image.slice(0, 5).map((url, idx) => (
                <div
                  key={url}
                  className="overflow-hidden position-absolute"
                  style={{
                    inset: renderLayoutImg(idx),
                  }}
                >
                  <div
                    className="image-box"
                    onClick={() => {
                      setPhotoIndex(idx)
                      setIsOpenLb(status => !status)
                    }}
                  >
                    <div
                      className={`overflow-hidden ${
                        idx === 4 ? 'overlay-plus' : ''
                      }`}
                    >
                      <div
                        style={{paddingTop: '100%'}}
                        className="overflow-hidden h-0 position-relative"
                      >
                        <div
                          className="position-absolute"
                          style={{
                            top: 0,
                            height: '100%',
                            left: '-16.6667%',
                            width: 'calc(133.333%)',
                          }}
                        >
                          <img
                            src={url}
                            alt="imgs"
                            className="img-fluid position-absolute"
                            style={{
                              width: '100%',
                              inset: 0,
                              height: '100%',
                              bolder: 0,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {idx === 4 && (
                      <div className="number_plus">
                        +{item.image.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="d-flex align-items-center mt-1">
            <p
              onClick={handleReactPost}
              className="m-0 p-0 btn btn-icon-danger btn-sm btn-text-dark-50 rounded font-weight-bolder font-size-sm text-danger align-items-center d-flex"
            >
              <Heart
                color={like.isLike ? 'red' : '#d1d3e0'}
                fill={like.isLike ? 'red' : '#d1d3e0'}
                size="18"
                style={{marginRight: '7px'}}
              />

              {like.count}
            </p>
            <p className="m-0 p-0 btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-0 ml-1 comment-hover">
              <MessageSquare size="18" style={{marginRight: '7px'}} />
              {item?.c_comment ? item._comment : 0}
            </p>
            <div>
              <UncontrolledButtonDropdown
                direction="right"
                className="postStyle"
              >
                <DropdownToggle
                  className="ml-1"
                  color="flat-primary"
                  style={{padding: 10}}
                >
                  <Gift size={18} style={{marginBottom: 4}} className="mr-1" />
                  Tặng quà
                </DropdownToggle>
                {/* <DropdownMenu>
                  <DropdownItem>
                    <Star
                      size={20}
                      fill="#FF9F43"
                      stroke="#FF9F43"
                      className="mr-3"
                    />{' '}
                    Tặng sao
                  </DropdownItem>
                  <DropdownItem>
                    {' '}
                    <BizxuImg color={'primary'} size="x" className="mr-3" />
                    Tặng BizXu
                  </DropdownItem>
                </DropdownMenu> */}
              </UncontrolledButtonDropdown>
            </div>
          </div>
          {/*end::Action*/}
        </div>
        {/*end::Bottom*/}
        {/*begin::Separator*/}
        <div style={{borderTop: '1px solid #ebedf3'}} />
        {/*end::Separator*/}
        {/*begin::Editor*/}
        <Comment idPost={item._id} reply={true} />
        <AddComment idPost={item._id} />
      </div>
    </div>
  )
}

export default PostItem
