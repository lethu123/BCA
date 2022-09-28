import React, {useState} from 'react'
// *** Components
import ModalAddPost from 'components/post/ModalAddPost'
import {Col, Row} from 'reactstrap'
import AddPostNewfeed from '@services/post/components/AddPostNewfeed'
import ListPost from './ListPost'
import Lightbox from 'react-image-lightbox'
import {UserQuery} from '@services/user'
import {useParams} from 'react-router-dom'

const Post = () => {
  // *** Routing
  const {id} = useParams()

  // *** Query
  const {data: listUser} = UserQuery.useGetListAllUserSys()

  const [isOpen, setIsOpen] = useState(false)
  const [editData, setEditData] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [imageList, setImageList] = useState([])
  const [isOpenLb, setIsOpenLb] = useState(false)

  return (
    <>
      <div className="mt-1">
        <Row>
          <Col lg={{size: 9, order: 1}} sm={{size: 12}} xs={{order: 1}}>
            {/* Đăng Bài  */}
            <div className="">
              <AddPostNewfeed value="Bạn đang nghĩ gì...?" groupId={id} />
            </div>
            {/* End Đăng Bài*/}
            <ListPost
              setImageList={setImageList}
              setIsOpen={setIsOpen}
              setEditData={setEditData}
              setPhotoIndex={setPhotoIndex}
              setIsOpenLb={setIsOpenLb}
              user={listUser?.data || []}
              groupId={id}
            />
          </Col>
          <Col lg={{size: 3, order: 2}} sm={{size: 12}} xs={{order: 3}}></Col>
        </Row>
      </div>
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
      <ModalAddPost editData={editData} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Post
