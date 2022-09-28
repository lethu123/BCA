import React, {useState} from 'react'
import {
  Col,
  Row,
  Form,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from 'reactstrap'
import Avatar from '@core/components/avatar'

import avatarUser from 'assets/media/svg/avatars/047-girl-25.svg'
import avatarUser3 from 'assets/media/svg/avatars/001-boy.svg'
import avatarUser4 from 'assets/media/svg/avatars/002-girl.svg'
import avatarUser5 from 'assets/media/svg/avatars/003-girl-1.svg'
import avatarUser6 from 'assets/media/svg/avatars/004-boy-1.svg'
import imagePost from 'assets/media/product-demos/demo2.png'
import {MessageSquare, UserPlus} from 'react-feather'

// *** Components
import ModalAddPost from '@services/post/components/modal/ModalAddPost'
import ListPost from '@services/post/components/ListPost'

const NewFeed = () => {
  const [isOpen, setIsOpen] = useState(false)
  const listPost = [
    {
      id: 1,
      user_info: {
        id: 1,
        name: 'Ruby Liam',
        avatar: avatarUser3,
      },
      date_created: new Date(),
      content:
        'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
      picture: [imagePost],
      comments: [
        {
          id: 1,
          content: 'Đây là comment số 1',
          user_info: {
            id: 1,
            username: 'Nguyễn Khắc Vũ',
            avatar: avatarUser,
          },
          replyComments: [
            {
              id: 1,
              content: 'Trả lời Comment',
              user_info: {
                id: 1,
                username: 'Vũ Reply',
                avatar: avatarUser,
              },
              date_created: new Date(),
            },
            {
              id: 2,
              content: 'Trả lời Comment nè',
              date_created: new Date(),
              user_info: {
                id: 1,
                username: 'Vũ Reply 2',
                avatar: avatarUser3,
              },
            },
          ],
          date_created: new Date(),
        },
        {
          id: 2,
          content: 'Đây là comment số 2',
          user_info: {
            id: 2,
            username: 'Hoàng Thị Quyên',
            avatar: avatarUser3,
          },
          replyComments: [],
          date_created: new Date(),
        },
      ],
    },
    {
      id: 2,
      user_info: {
        id: 2,
        name: 'David Neo',
        avatar: avatarUser3,
      },
      date_created: new Date(),
      content:
        'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
      picture: [],
      comments: [],
      replyComments: [],
    },
  ]
  return (
    <div className=" mx-auto" style={{width: '80%'}}>
      <Row
        style={{
          minHeight: '100vh',
        }}
      >
        <Col md="7">
          {/* Đăng Bài  */}
          <Card>
            <CardHeader>
              <CardTitle>Tạo bài viết</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="d-flex align-items-center">
                <Avatar
                  className="mr-1"
                  img={avatarUser4}
                  size="lg"
                  style={{flexBasis: '5%'}}
                />
                <Form style={{flexBasis: '95%'}}>
                  <Input
                    className="round cursor-pointer"
                    type="button"
                    id="roundedInput5"
                    value={`Bạn đang nghĩ gì Vũ Vâu ...?`}
                    style={{
                      backgroundColor: '#f1f3f4',
                      borderColor: '#f1f3f4',
                    }}
                    onClick={() => {
                      setIsOpen(true)
                    }}
                  />
                </Form>
              </div>
            </CardBody>
          </Card>
          {/* End Đăng Bài*/}
          <ListPost listPost={listPost} />
        </Col>
        <Col md="5">
          <Card>
            <CardBody>
              <h3 style={{fontWeight: 'bold'}}>Gợi ý</h3>
              <p>Những người bạn có thể quen</p>
              <div
                className="d-flex align-items-center justify-content-between"
                style={{marginBottom: 15}}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={avatarUser3}
                    alt="images"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: '50%',
                      marginRight: 10,
                    }}
                  />
                  <div>
                    <p className="mb-0 text-primary">Kendall Lawrices</p>
                    <small>kendall@gmail.com</small>
                  </div>
                </div>
                <div style={{marginRight: 10}}>
                  <UserPlus size={17} style={{cursor: 'pointer'}} />
                  <MessageSquare
                    size={17}
                    style={{marginLeft: 7, cursor: 'pointer'}}
                  />
                </div>
              </div>

              <div
                className="d-flex align-items-center justify-content-between"
                style={{marginBottom: '15px'}}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={avatarUser4}
                    alt="images"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: '50%',
                      marginRight: 10,
                    }}
                  />
                  <div>
                    <p className="mb-0 text-primary">Doja Kissnger</p>
                    <small>kendall@gmail.com</small>
                  </div>
                </div>
                <div style={{marginRight: 10}}>
                  <UserPlus size={17} style={{cursor: 'pointer'}} />
                  <MessageSquare
                    size={17}
                    style={{marginLeft: 7, cursor: 'pointer'}}
                  />
                </div>
              </div>

              <div
                className="d-flex align-items-center justify-content-between"
                style={{marginBottom: '15px'}}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={avatarUser5}
                    alt="images"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: '50%',
                      marginRight: 10,
                    }}
                  />
                  <div>
                    <p className="mb-0 text-primary">Prity Anne</p>
                    <small>anne@gmail.com</small>
                  </div>
                </div>
                <div style={{marginRight: 10}}>
                  <UserPlus size={17} style={{cursor: 'pointer'}} />
                  <MessageSquare
                    size={17}
                    style={{marginLeft: 7, cursor: 'pointer'}}
                  />
                </div>
              </div>

              <div
                className="d-flex align-items-center justify-content-between"
                style={{marginBottom: '15px'}}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={avatarUser6}
                    alt="images"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: '50%',
                      marginRight: 10,
                    }}
                  />
                  <div>
                    <p className="mb-0 text-primary">David Devel</p>
                    <small>devel@gmail.com</small>
                  </div>
                </div>
                <div style={{marginRight: 10}}>
                  <UserPlus size={17} style={{cursor: 'pointer'}} />
                  <MessageSquare
                    size={17}
                    style={{marginLeft: 7, cursor: 'pointer'}}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ModalAddPost isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default NewFeed
