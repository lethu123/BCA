import React from 'react'
import {Alert, Badge, Card, CardBody, CardImg, Col, Row} from 'reactstrap'
import {useHistory, useLocation, useParams} from 'react-router-dom'
import {getUserData} from 'utility/Utils'
// *** assets
import './DetailGroup.style.scss'
import avatarGroup from 'assets/images/home/avatarGroup.png'

// *** query
import {GroupQuery} from '@services/group'
import PostDetailComponent from '@services/post/components/PostDetailComponent'

const GroupPostDetail = () => {
  // *** Routing
  const {id} = useParams()
  const {search} = useLocation()
  const history = useHistory()

  const post_id = search.slice(9)

  console.log('params', post_id)

  const {uid} = getUserData()
  // *** query
  const {data: infoGroup} = GroupQuery.useInfoGroup(id, uid)

  if (!infoGroup?.data)
    return (
      <div>
        <Alert color="primary" className="w-50">
          <div className="alert-body">
            <span className="fw-bold">nhóm không tồn tại!</span>
          </div>
        </Alert>
        <Badge
          color="light-primary"
          className="cursor-pointer"
          onClick={() => history.push('/home/group/kham-pha')}
        >
          Quay lại
        </Badge>
      </div>
    )
  const {
    group_cover_image,
    group_avatar,
    group_name,
    group_description,
    group_type,
    is_owner,
  } = infoGroup.data
  return (
    <div>
      <Card>
        <div className="position-relative overflow-hidden">
          <CardImg
            top
            src={
              group_cover_image ||
              'https://newalpha.asia/uploads/10/hinh-anh/b8e0302e7c8f9ad1c39e-1.jpg'
            }
            alt="card1"
            style={{height: '60vh'}}
          />
        </div>
        <CardBody>
          <Row>
            <Col lg="6" className="col-xxl-7 mb-4">
              <div className="d-flex align-items-center mt-3">
                <div style={{position: 'relative'}}>
                  <img
                    src={group_avatar || avatarGroup}
                    alt="avatarGroup"
                    style={{
                      height: 120,
                      width: 120,
                      borderRadius: '50%',
                    }}
                    onError={e => {
                      e.target.onerror = null
                      e.target.src = avatarGroup
                    }}
                  />
                </div>

                <div style={{marginLeft: 20}}>
                  {is_owner && (
                    <Badge color="warning" className="text-white mr-2">
                      Nhóm của bạn
                    </Badge>
                  )}

                  {!!group_type && (
                    <Badge color="light-info" className="text-white">
                      {group_type === 'PUBLIC' ? 'Nhóm công khai' : 'Nhóm kín'}
                    </Badge>
                  )}

                  <h4 className="mb-0 text-primary my-1">{group_name}</h4>
                  <p>{group_description}</p>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <div>
        <PostDetailComponent id={post_id} />
      </div>
    </div>
  )
}

export default GroupPostDetail
