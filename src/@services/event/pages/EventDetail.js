import React, {useState} from 'react'
import {Badge, Button, Card, Alert, CardBody} from 'reactstrap'
import './EventDetail.style.scss'
import {UserPlus, ChevronLeft, Share2, Users, MapPin} from 'react-feather'
import moment from 'moment'
import parser from 'html-react-parser'
import {useHistory, useParams} from 'react-router-dom'
// ** query
import {EventQuery, EventMutation} from '@services/event'
import {UserQuery} from '@services/user'
// ** assets
import avatarUser from 'assets/images/avatars/avatar-blank.png'
import {getUserData} from 'utility/Utils'
import ModalInviteJoinEvent from '../components/modal/ModalInviteJoinEvent'
import ModalParticipant from '../components/modal/ModalParticipant'

const EventDetail = () => {
  const history = useHistory()
  const {id} = useParams()
  const user = getUserData()

  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)
  const [modalParticipant, setModalParticipant] = useState(false)
  const toggleModalParticipant = () => setModalParticipant(!modalParticipant)

  // ** query
  const {data: event, isFetching} = EventQuery.useDetailEvent(id)
  const {data: users} = UserQuery.useGetListAllUserSys()
  const {mutate: joinEvent} = EventMutation.useJoinEvent()

  if (isFetching)
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="fw-bold">Đang lấy dữ liệu</span>
        </div>
      </Alert>
    )

  if (!event)
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="fw-bold">
            Sự kiện không tồn tại hoặc đang xảy ra lỗi
          </span>
        </div>
      </Alert>
    )

  const owner = users?.data.find(it => it.user_id === event.owner_info.id)
  const co_hosts = users?.data.filter(it =>
    event.co_host_info.map(host => host.id).includes(it.user_id),
  )

  let host = []
  if (owner) {
    host = [{...owner, isOwner: true}, ...co_hosts]
  }

  return (
    <div style={{backgroundColor: '#fff'}}>
      <div
        className="cursor-pointer text-hover-primary py-1"
        onClick={() => history.goBack()}
      >
        <ChevronLeft size={30} /> Quay lại
      </div>

      <div className="position-relative">
        <img
          src={
            event.cover ||
            'https://bacgiangweb.com/wp-content/uploads/dich-vu-thiet-ke-hinh-anh-quang-cao-bgw.jpg'
          }
          alt="bannerGroup"
          style={{width: '100%', height: 400}}
          onError={e => {
            e.target.onerror = null
            e.target.src =
              'https://bacgiangweb.com/wp-content/uploads/dich-vu-thiet-ke-hinh-anh-quang-cao-bgw.jpg'
          }}
        />

        <p className="mineGroup w-100 mb-0 text-white">
          Sự kiện của thành viên:{' '}
          <span className="text-white font-weight-bolder cursor-pointer ">
            {event.owner_info?.full_name}
          </span>{' '}
        </p>
      </div>
      <div className="mt-2 p-2">
        <div className="">
          <Badge color="danger" className="cursor-pointer mb-1">
            {event.privacy_info?.name}
          </Badge>
          <Badge color="info" className="cursor-pointer mb-1  ml-2 text-white">
            {event.formality_info?.name}
          </Badge>

          {!event.is_owner && event.is_joined && (
            <Badge
              color="light-success"
              className="cursor-pointer mb-1  ml-2 text-white"
            >
              Đã tham gia
            </Badge>
          )}

          <h1 className="font-weight-bolder ">{event.name}</h1>
          {!!event.venue && (
            <span className="text-muted">
              <MapPin size={15} className="mr-1" />
              {event.venue}
            </span>
          )}
        </div>
        <div className="text-right mb-3">
          <Button
            outline
            color="primary"
            className="mr-2"
            onClick={toggleModalParticipant}
          >
            <Users size={20} className="mr-1" /> Người tham gia
          </Button>

          {!event.is_owner && !event.is_joined && (
            <Button
              outline
              color="primary"
              className="mr-2"
              onClick={() => joinEvent({uid: user?.uid, event_id: +id})}
            >
              <Users size={20} className="mr-1" />
              Tham gia
            </Button>
          )}

          <Button
            outline
            color="primary"
            className="mr-2"
            onClick={toggleModal}
          >
            <UserPlus size={20} className="mr-1" /> Mời
          </Button>
          <Button outline color="primary" className="mr-2">
            <Share2 size={18} className="mr-1" />
            Chia sẻ
          </Button>
          {/* <Button outline color="primary" className="mr-2 ">
            <Edit size={18} className="mb-1 mr-2" />
            Chỉnh sửa
          </Button> */}
        </div>
        <div className="row mx-0 ml-10 mt-10">
          <div className="col-md-7 pl-0">
            <div>
              <h4 className="font-weight-bolder">Thời gian</h4>
              <div>
                {/* <Badge
                  color="danger"
                  className="cursor-pointer mb-1 text-white"
                >
                  Sắp diễn ra
                </Badge> */}
                <p> {moment(event.from_date).format('lll')}</p>
              </div>
            </div>
            <div>
              <h4 className="font-weight-bolder">Giới thiệu</h4>
              <div>{parser(event.description)}</div>
            </div>
          </div>
          <div className="col-md-5 pr-0">
            <Card>
              <CardBody>
                <h5 className="font-weight-bolder">Người tổ chức</h5>

                {host.map(_host => (
                  <div
                    key={_host.user_id}
                    className="d-flex align-items-center justify-content-between"
                    style={{marginBottom: 15}}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={_host?.avatar || avatarUser}
                        alt="images"
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: '50%',
                          marginRight: 10,
                        }}
                        onError={e => {
                          e.target.onerror = null
                          e.target.src = avatarUser
                        }}
                      />
                      <div>
                        <p className="mb-0 text-primary">
                          {_host.user_name}
                          {_host.isOwner && (
                            <Badge
                              color="light-success"
                              className="cursor-pointer ml-1"
                            >
                              Owner
                            </Badge>
                          )}
                        </p>
                        <small>{_host.email}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
            {event.tagline && (
              <Card>
                <CardBody>
                  <h5 className="font-weight-bolder">Tagline</h5>
                  {JSON.parse(event.tagline).map((it, idx) => (
                    <Badge
                      key={idx}
                      color="info"
                      className="cursor-pointer  mr-1 mb-1 text-white"
                    >
                      {it}
                    </Badge>
                  ))}
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      </div>
      <ModalInviteJoinEvent toggleModal={toggleModal} modal={modal} />
      <ModalParticipant
        modal={modalParticipant}
        toggleModal={toggleModalParticipant}
        id={id}
      />
    </div>
  )
}

export default EventDetail
