import React from 'react'
import {Link} from 'react-router-dom'
import {Col} from 'reactstrap'

const BlogPost = props => {
  return (
    <Col lg={4} md={6} sm={12}>
      <div className="blog-one__single">
        <div className="blog-one__image">
          <img src={props.postImage} alt="" />
        </div>
        <div className="blog-one__content">
          <div className="blog-one__circle"></div>
          <div className="blog-one__content-inner">
            <div className="blog-one__meta-apiton">
              <a href="#none">
                <i className="far fa-clock"></i> {props.postDate}
              </a>
              <a href="#none">
                <i className="far fa-comments"></i> {props.postCommentCount}
              </a>
            </div>
            <h3>
              <Link to={props.postLink}>
                <span>{props.postTitle}</span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BlogPost
