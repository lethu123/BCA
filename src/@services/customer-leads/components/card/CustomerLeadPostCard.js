// import {
//   Badge,
//   Card,
//   CardBody,
//   CardImg,
//   CardLink,
//   CardTitle,
//   Col,
//   Row,
// } from 'reactstrap'
// import Avatar from '@core/components/avatar'

// import {Eye, Link, MessageSquare, ThumbsUp} from 'react-feather'
// import {Clock} from 'components/icon'
// import PerfectScrollbar from 'react-perfect-scrollbar'

// *** Components
// import CarauselImagePost from '../carousel/CarauselImagePost'

// *** Assets
// import AvatarBlank from 'assets/images/avatars/avatar-blank.png'

import '@core/scss/react/libs/swiper/swiper.scss'
// import {useEffect, useRef, useState} from 'react'

const CustomerLeadPostCard = ({post, owner}) => {
  return (
    <div>
      <div style={{height: '850px'}}>
        <iframe
          src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
            post.post_url,
          )}&show_text=true`}
          height="850px"
          width="100%"
          scrolling="no"
          allowFullScreen={true}
          style={{border: 'none'}}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook"
        ></iframe>

        {/* <div className="d-flex align-items-center p-2">
              <div className="symbol symbol-45 symbol-light mr-5">
                <span className="symbol-label">
                  <Avatar img={owner.avatar} size="lg" />
                </span>
              </div>

              <div className="d-flex flex-column flex-grow-1">
                <CardLink
                  target="_blank"
                  href={owner.link}
                  className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder"
                >
                  {post.username}
                </CardLink>
                <div className="d-flex">
                  <div className="d-flex align-items-center pr-5">
                    <Clock color="primary" />
                    <span className="text-muted font-weight-bold ml-1 mt-1">
                      {post.time}
                    </span>
                    <CardLink href={post.post_url} target="_blank">
                      <Badge
                        color="light-primary"
                        className="mx-2 cursor-pointer font-italic"
                      >
                        <Eye size="12" className="mr-1" />
                        Xem chi tiết
                      </Badge>
                    </CardLink>
                  </div>
                </div>
              </div>
            </div> */}

        <div className="pt-3">
          {/* <p className="text-dark-75 font-size-lg font-weight-normal pt-5 mb-6">
                {post.text}
              </p>

              {post.images?.length === 1 && (
                <CardImg src={post.images[0]} alt="card-top" />
              )} */}

          {/* {post.images?.length === 2 && (
                <Row>
                  <Col md={6}>
                    <img src={post.images[0]} alt="" width="100%" />
                  </Col>
                  <Col md={6}>
                    <img src={post.images[1]} alt="" width="100%" />
                  </Col>
                </Row>
              )} */}

          {/* {post.images?.length > 2 && (
                <>
                  <CarauselImagePost data={post.images} />
                </>
              )} */}

          {/* <div className="pt-6 d-flex">
                <div className="btn btn-light-info btn-sm rounded font-weight-bolder font-size-sm p-2 mr-3">
                  <span className="svg-icon svg-icon-md pr-2">
                    <ThumbsUp />
                  </span>
                  {post.likes} Lượt thích
                </div>
                <div className="btn btn-light-success  btn-sm rounded font-weight-bolder font-size-sm p-2 mr-3">
                  <span className="svg-icon svg-icon-md pr-2">
                    <MessageSquare />
                  </span>
                  {post.comments} Bình luận
                </div>
                <div className="btn btn-light-danger btn-sm rounded font-weight-bolder font-size-sm p-2">
                  <span className="svg-icon svg-icon-md pr-2">
                    <Link />
                  </span>
                  {post.shares} chia sẻ
                </div>
              </div> */}

          {/* {post.comments_full?.length > 0 &&
            post.comments_full.map(comment => (
              <div className="d-flex pt-6" key={comment.comment_id}>
                <div class=" mr-5 mt-1">
                  <span class="symbol-label">
                    <Avatar
                      img={
                        comment.commenter_id === owner.uid
                          ? owner.avatar
                          : AvatarBlank
                      }
                    />
                  </span>
                </div>
                <div className="d-flex flex-column flex-row-fluid">
                  <div className="d-flex align-items-center flex-wrap">
                    <CardLink
                      target="_blank"
                      href={comment.commenter_url}
                      className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder pr-6"
                    >
                      {comment.commenter_name}
                    </CardLink>
                    <span className="text-muted font-weight-normal flex-grow-1 font-size-sm">
                      {comment.comment_time}
                    </span>
                  </div>
                  <div className="mt-2">
                    {comment.comment_text && (
                      <a
                        className="text-secondary font-weight-light font-italic"
                        href={comment.comment_url}
                        target="blank"
                      >
                        {comment.comment_text}
                      </a>
                    )}
                    <div>
                      {comment.comment_image && (
                        <img
                          src={comment.comment_image}
                          width="100"
                          height="100"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  )
}

export default CustomerLeadPostCard
