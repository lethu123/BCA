//**UI */
import {Fragment, useState} from 'react'
import {
  Edit,
  Eye,
  Heart,
  MessageSquare,
  MoreHorizontal,
  Trash2,
} from 'react-feather'
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  UncontrolledTooltip,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap'

//**Third 3rd */
import classnames from 'classnames'

//**Component */
import Avatar from '@core/components/avatar'
import ListsComment from '../comment/ListsComment'
import PostMultiImages from './post-type/PostMultiImages'
import PostImages from './post-type/PostImages'
import PostEmbedLink from './post-type/PostEmbedLink'
import ReactPlayer from 'react-player'

const ava =
  'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
const PostItem = ({data, handleModal}) => {
  //**State */
  const [dropdownOpen, setdropdownOpen] = useState(false)

  //**Action*/
  const toggle = () => {
    setdropdownOpen(!dropdownOpen)
  }

  return (
    <>
      <Card className="post">
        <CardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start align-items-center mb-1">
              <Avatar
                className="mr-1"
                img={ava}
                imgHeight="50"
                imgWidth="50"
                onError={e => {
                  e.target.onerror = null
                  e.target.src = ava
                }}
              />
              <div className="profile-user-info">
                <h6 className="mb-0">le thu</h6>
                <small className="text-muted">{data.created_at}</small>
              </div>
            </div>
            <div>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                  tag="a"
                  onClick={toggle}
                  data-toggle="dropdown"
                  aria-expanded={dropdownOpen}
                  className="position-relative dropdownToggle"
                >
                  <div className="cursor-pointer">
                    <MoreHorizontal />
                  </div>
                </DropdownToggle>
                <DropdownMenu
                  onClick={toggle}
                  style={{width: '250px'}}
                  end
                  tag="ul"
                  className="p-2"
                >
                  <li className="mb-1">
                    <p className="d-inline-flex cursor-pointer align-items-center">
                      <Edit className="mr-1" size={24} />
                      Edit post
                    </p>
                  </li>
                  <li>
                    <p className="d-inline-flex cursor-pointer align-items-center mb-0">
                      <Trash2 className="mr-1" size={24} />
                      Delete post
                    </p>
                  </li>
                  {/* <li className="mt-1">
                    <p
                      className="d-inline-flex cursor-pointer align-items-center mb-0"
                      onClick={handleModal}
                    >
                      <AlertOctagon className="mr-1" size={24} />
                      Report
                    </p>
                  </li> */}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <CardText>{data.content}</CardText>
          {/* {data.postImg && (
            <img
              src={data.postImg}
              alt={data.username}
              className="img-fluid rounded mb-75"
            />
          )} */}
          {data.postImg?.length > 1 && <PostMultiImages data={data.postImg} />}
          {data.postImg?.length === 1 && <PostImages data={data.postImg} />}
          {/* {renderPostType()} */}
          {data.embedding_link &&
          Object.keys(data.embedding_link).length === 0 &&
          Object.getPrototypeOf(data.embedding_link) === Object.prototype ? (
            ''
          ) : (
            <PostEmbedLink embed={data.embedding_link} />
          )}
          {data?.postVid && (
            <ReactPlayer
              width="100%"
              controls={true}
              className="react-player-video"
              url={data?.postVid}
            />
          )}
          <Row className="d-flex justify-content-start align-items-center flex-wrap pb-50 post-actions mt-1">
            <Col
              className="d-flex justify-content-between justify-content-sm-start mb-2"
              sm="6"
            >
              <div className="d-flex align-items-center text-muted text-nowrap cursor-pointer">
                <Heart
                  size={18}
                  className={classnames('mr-50', {
                    'profile-likes': data.youLiked === true,
                  })}
                />
                <span>{data.likes}</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="avatar-group ml-1">
                  {data.likedUsers?.map(user => {
                    return (
                      <Fragment key={user.username}>
                        <Avatar
                          className="pull-up"
                          img={user.avatar}
                          id={user.username.toLowerCase().split(' ').join('-')}
                          imgHeight="26"
                          imgWidth="26"
                        />
                        <UncontrolledTooltip
                          target={user.username
                            .toLowerCase()
                            .split(' ')
                            .join('-')}
                          placement="top"
                        >
                          {user.username}
                        </UncontrolledTooltip>
                      </Fragment>
                    )
                  })}
                </div>
                <p className="text-muted text-nowrap ml-50 mb-0">+140 more</p>
              </div>
            </Col>
            <Col
              className="d-flex justify-content-between justify-content-sm-end align-items-center mb-2"
              sm="6"
            >
              <p className="text-nowrap mb-0">
                <MessageSquare
                  size={18}
                  className="text-body mr-50"
                ></MessageSquare>
                <span className="text-muted mr-1">{data.comments}</span>
              </p>
              <p className="text-nowrap share-post mb-0">
                <Eye size={18} className="text-body mr-50" />
                <span className="text-muted mr-1">{data.share}</span>
              </p>
            </Col>
          </Row>
          <div className="mb-2">
            <div
              className="d-flex py-1 justify-content-around"
              style={{
                borderTop: '1px solid #CCCCCC',
                borderBottom: '1px solid #CCCCCC',
              }}
            >
              <p
                // onClick={() =>
                //   likePost({
                //     user: userUid,
                //     target_type: 'post',
                //     post: data?.id,
                //   })
                // }
                className="d-flex align-items-center cursor-pointer mb-0"
              >
                <Heart
                  fill={data.is_reaction ? 'red' : 'white'}
                  color={data.is_reaction ? 'red' : '#333333'}
                  size={25}
                  className="mr-1"
                />
                Heart
              </p>
              <label
                for={`${data.id && data.id}_0`}
                className="d-flex align-items-center cursor-pointer"
              >
                <MessageSquare size={25} className="mr-1" />
                Comment
              </label>
            </div>
          </div>
          <ListsComment />
        </CardBody>
      </Card>
    </>
  )
}

export default PostItem
