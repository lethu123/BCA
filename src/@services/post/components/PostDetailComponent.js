import React, {useEffect, useState} from 'react'
import {Col, Row} from 'reactstrap'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

// ** assets
import '@core/scss/base/pages/app-ecommerce.scss'
// import './Custom.style.scss'

// *** Component
import PostItem from '@services/post/components/PostItem'
import ModalAddPost from '@services/post/components/modal/ModalAddPost'

// *** Query ********************************
import ChatQuery from '@services/chat/hook/query'
import {PostQuery} from '@services/post'
import {UserQuery} from '@services/user'

const PostDetailComponent = ({id}) => {
  const {data: listUser} = UserQuery.useGetListAllUserSys()
  const {data: postItem} = PostQuery.useGetInfoPost(id)

  const [photoIndex, setPhotoIndex] = useState(0)
  const [imageList, setImageList] = useState([])
  const [isOpenLb, setIsOpenLb] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [editData, setEditData] = useState(null)

  const userLogin =
    (localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData'))) ||
    null
  // *** Query ********************************
  const {data: userSys} = ChatQuery.useGetListUserRightSidebar()

  useEffect(() => {
    if (userSys && userSys.data && userLogin) {
      let user = userSys.data.find(u => u.user_id === userLogin.uid)
      if (user) {
        localStorage.setItem(
          'userData',
          JSON.stringify({
            ...userLogin,
            avatar: user.avatar,
            username: user.user_name,
          }),
        )
      }
    }
  }, [userLogin, userSys])

  return (
    <div className="NavHome">
      <Row>
        <Col md="7" className="m-auto">
          <PostItem
            item={postItem?.data}
            setImageList={setImageList}
            setPhotoIndex={setPhotoIndex}
            setIsOpenLb={setIsOpenLb}
            user={listUser?.data || []}
            setIsOpen={setIsOpen}
            setEditData={setEditData}
          />
        </Col>
      </Row>
      {isOpenLb && (
        <Lightbox
          mainSrc={imageList.length > 0 && imageList[photoIndex]}
          nextSrc={
            imageList.length > 0 &&
            imageList[(photoIndex + 1) % imageList.length]
          }
          prevSrc={
            imageList.length > 0 &&
            imageList[(photoIndex + imageList.length - 1) % imageList.length]
          }
          onCloseRequest={() => setIsOpenLb(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageList.length - 1) % imageList.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageList.length)
          }
        />
      )}
      <ModalAddPost editData={editData} isOpen={isOpen} setIsOpen={setIsOpen} />{' '}
    </div>
  )
}

export default PostDetailComponent
