import React, {useState} from 'react'
// *** Components
import ModalAddPost from '@services/post/components/modal/ModalAddPost'
import ListPost from '@services/post/components/ListPost'

import InstructionGroup from './InstructionGroup'
// *** Image
import Avatar from '@core/components/avatar'
import avatarUser from 'assets/media/svg/avatars/047-girl-25.svg'
import avatarUser3 from 'assets/media/svg/avatars/001-boy.svg'
import avatarUser4 from 'assets/media/svg/avatars/002-girl.svg'
import imagePost from 'assets/media/product-demos/demo2.png'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  Row,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  ListGroup,
  ListGroupItem,
  CustomInput,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
} from 'reactstrap'
import moment from 'moment'
import {Bookmark, Edit, MoreHorizontal, Trash, X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Post = () => {
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
  const question = {
    id: 1,
    user_info: {
      id: 1,
      name: 'Ruby Liam',
      avatar: avatarUser3,
    },
    date_created: new Date(),
    listquestion: [
      {
        id: 1,
        user_created: {
          id: 1,
          name: 'KhacVu',
          avatar: avatarUser3,
        },
        name: 'Bình chọn 1',
      },
      {
        id: 2,
        user_created: {
          id: 2,
          name: 'HoangQuyen',
          avatar: avatarUser3,
        },
        name: 'Bình chọn 2',
      },
      {
        id: 3,
        user_created: {
          id: 3,
          name: 'ABC',
          avatar: avatarUser3,
        },
        name: 'Bình chọn 3',
      },
    ],
  }
  // State
  const [basicModal, setBasicModal] = useState(false)
  return (
    <div>
      <div style={{width: '85%', margin: '7px auto'}}>
        <Row>
          <Col md="8">
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
                      id="roundedInput3"
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
            {/* START POST ITEM */}
            <ListPost listPost={listPost} />
            <Card>
              <CardBody>
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-40 symbol-light-success mr-1">
                    <span>
                      <img
                        src={question.user_info.avatar}
                        className="h-75 align-self-end"
                        alt="imgAvatar"
                        style={{objectFit: 'cover'}}
                      />
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-grow-1">
                    <p className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                      {question.user_info.name}
                    </p>
                    <span className="text-muted font-weight-bold">
                      {moment(question.date_created).format(
                        'MMMM Do YYYY, h:mm:ss a',
                      )}
                    </span>
                  </div>
                  <div
                    className="dropdown dropdown-inline ml-2"
                    data-toggle="tooltip"
                    data-placement="left"
                    data-original-title="Quick actions"
                  >
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="pr-1 cursor-pointer"
                        tag="span"
                      >
                        <MoreHorizontal size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem style={{marginRight: 0, width: '100%'}}>
                          <Bookmark
                            size={15}
                            style={{marginTop: 2, marginRight: 10}}
                          />
                          <span className="align-middle ">Bookmart</span>
                        </DropdownItem>
                        <DropdownItem style={{marginRight: 0, width: '100%'}}>
                          <Edit
                            size={15}
                            style={{marginTop: 2, marginRight: 10}}
                          />
                          <span className="align-middle ">Edit</span>
                        </DropdownItem>
                        <DropdownItem style={{marginRight: 0, width: '100%'}}>
                          <Trash
                            size={15}
                            style={{marginTop: 2, marginRight: 10}}
                          />
                          <span className="align-middle">Delete</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
                <p style={{fontSize: 16}} className="text-center mt-2">
                  Đã tạo một cuộc thăm dò ý kiến
                </p>
                <div>
                  <ListGroup>
                    {question.listquestion.map(item => (
                      <div key={item.id} className="mb-3">
                        <span>
                          Do{' '}
                          <span className="text-primary cursor-pointer">
                            {item.user_created.name}
                          </span>{' '}
                          thêm
                        </span>
                        <ListGroupItem className="d-flex">
                          <span className="mr-1">
                            <CustomInput
                              inline
                              type="checkbox"
                              id={item.id}
                              label={item.name}
                            />
                          </span>
                        </ListGroupItem>
                      </div>
                    ))}
                  </ListGroup>
                  <p
                    style={{
                      backgroundColor: '#eeeeee',
                      padding: 6,
                      cursor: 'pointer',
                    }}
                    onClick={() => setBasicModal(!basicModal)}
                  >
                    + Thêm câu trả lời
                  </p>
                </div>
              </CardBody>
            </Card>
            {/* END POST ITEM */}

            <ModalAddPost isOpen={isOpen} setIsOpen={setIsOpen} />
          </Col>
          <Col md="4">
            <Card>
              <CardBody>
                <h5>Doanh số nhóm</h5>
                <small>Doanh số tính từ ngày 01/04/2021</small>
                <p
                  className="text-primary text-center"
                  style={{fontSize: 24, marginTop: 10}}
                >
                  800000000 đ
                </p>
              </CardBody>
            </Card>
            <InstructionGroup />
          </Col>
        </Row>
      </div>
      <Modal
        scrollable
        isOpen={basicModal}
        toggle={() => setBasicModal(!basicModal)}
      >
        <ModalHeader className="pb-0" toggle={() => setBasicModal(!basicModal)}>
          <div className="d-flex justify-content-between w-100">
            <h5> Thêm câu trả lời</h5>
            <p
              className="cursor-pointer"
              onClick={() => setBasicModal(!basicModal)}
            >
              <X />
            </p>
          </div>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Label>
              Nội dung câu trả lời<span style={{color: 'red'}}>*</span>
            </Label>
            <Input type="text" />
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setBasicModal(!basicModal)}>
            Thêm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Post
