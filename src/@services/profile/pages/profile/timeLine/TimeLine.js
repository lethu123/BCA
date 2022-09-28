import React, {useState} from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  Row,
} from 'reactstrap'
import Avatar from '@core/components/avatar'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import {useParams} from 'react-router-dom'
// *** assets
import avatarUser4 from 'assets/images/avatars/avatar-blank.png'
import './invite.style.scss'

//*** Components
import ModalAddPost from '@services/post/components/modal/ModalAddPost'
import ListPost from '@services/post/components/ListPost'
import ProfileAbout from './ProfileAbout'

// *** query
import {PostQuery} from '@services/post'
import {UserQuery} from '@services/user'

const TimeLine = ({user, isOwner}) => {
  const {id} = useParams()

  const {data} = PostQuery.useGetListPostByUser(id)
  const {data: listUser} = UserQuery.useGetListAllUserSys()

  const [isOpenLb, setIsOpenLb] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [imageList, setImageList] = useState([])

  const [editData, setEditData] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <section>
        <Row className="w-100 mx-0">
          <Col
            // xl={{size: 3, order: 1}}
            // lg={{size: 3, order: 1}}
            // sm={{size: 12}}
            // xs={{size: 3, order: 1}}
            lg={3}
            // md={4}
            md={{size: 4, order: 1}}
            className="pl-0"
          >
            {/* <Card>
              <CardBody>
                <h5>Doanh số cá nhân</h5>
                <p
                  style={{fontSize: 22}}
                  className="text-primary text-center mb-0"
                >
                  80000000 đ
                </p>
              </CardBody>
            </Card> */}

            <ProfileAbout user={user} />
          </Col>
          <Col
            // xl={{size: 6, order: 2}}
            // lg={{size: 6, order: 2}}
            // sm={{size: 6}}
            // xs={{size: 6, order: 2}}
            lg={6}
            // md={8}
            md={{size: 8, order: 2}}
            clasName="px-0"
          >
            {isOwner && (
              <Card>
                <CardHeader>
                  <CardTitle>Tạo bài viết</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="d-flex align-items-center">
                    <Avatar
                      className="mr-1"
                      img={user.avatar_url || avatarUser4}
                      size="lg"
                      style={{flexBasis: '5%'}}
                      onError={e => {
                        e.target.onerror = null
                        e.target.src = avatarUser4
                      }}
                    />
                    <Form style={{flexBasis: '95%'}}>
                      <Input
                        className="round cursor-pointer"
                        type="button"
                        id="roundedInput6"
                        value={`Bạn đang nghĩ gì  ...?`}
                        style={{
                          backgroundColor: '#f1f3f4',
                          borderColor: '#f1f3f4',
                        }}
                        onClick={() => {
                          setIsOpen(true)
                          setEditData(null)
                        }}
                      />
                    </Form>
                  </div>
                </CardBody>
              </Card>
            )}
            {/* Modal Add Post */}
            <ModalAddPost
              editData={editData}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            {/* End Modal Add Post */}
            <ListPost
              setIsOpenLb={setIsOpenLb}
              setPhotoIndex={setPhotoIndex}
              setImageList={setImageList}
              setEditData={setEditData}
              setIsOpen={setIsOpen}
              listPost={data?.data.length > 0 ? data.data : []}
              user={listUser?.data || []}
              userId={id || null}
            />
          </Col>
          <Col
            lg={3}
            md={{size: 4, order: 3}}
            // md={4}
            className="pr-0 d-none d-lg-block"
          >
            {/* Mời tham gia cộng đồng */}
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
      </section>
    </div>
  )
}

export default TimeLine
