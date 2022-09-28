import React from 'react'
import {Badge, Card} from 'reactstrap'
import {Link} from 'react-router-dom'

// ** Component
import Avatar from '@core/components/avatar'

// ** Asset
import banner from 'assets/images/banner/banner-30.jpg'
import userBlank from 'assets/images/avatars/avatar-blank.png'

const MyCourseItem = () => {
  return (
    <Card className=" ecommerce-card ">
      <div className="course-one__single mb-0">
        <div className="post mb-0 post-grid">
          <div className="thumb top-rounded">
            <Badge
              color="danger"
              pill
              className="badge-glow category-badge position-absolute"
            >
              course category
            </Badge>

            <div style={{display: 'unset'}}>
              <div className="inner">
                <img src={banner} className="w-100 h-100" alt="post-title" />
              </div>
            </div>
          </div>

          <div className="details pt-0">
            <div
              className="course-one__content border-0 px-0 pt-2 pb-0"
              // style={{minHeight: '410px'}}
            >
              <a href="#none" className="course-one__category">
                category
              </a>

              <div className="course-one__admin">
                <Avatar
                  img={userBlank}
                  // size="md"
                  className="mr-1"
                />
                by <Link to={`#`}>Thu Lee</Link>
              </div>

              <h3 className="post-title my-1" style={{minHeight: '50px'}}>
                <Link to={'/#'}>
                  How To Become Better With Building In 1 Month
                </Link>
              </h3>

              {/* Save / Interested */}
              <div className="course-one__meta">
                <div>
                  <i className="far fa-clock"></i> 2 Hours
                </div>
                <div>
                  <i className="far fa-folder-open"></i> 6 Lectures
                </div>
                <div>$18</div>
              </div>
              <Link to={`#`} className="course-one__link">
                See Preview
              </Link>
            </div>
          </div>

          <div className="post-bottom justify-content-between d-flex align-items-center">
            <div className="social-share me-auto cursor-pointer font-weight-bold">
              <div>
                <i style={{fontSize: '17px'}} className="far fa-heart"></i>
                <span className="align-middle ml-25">Save 0</span>
              </div>
            </div>

            <div className="more-button float-end cursor-pointer font-weight-bold">
              <div>
                <i style={{fontSize: '17px'}} className="far fa-thumbs-up"></i>
                <span className="align-middle ml-25">Interest 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default MyCourseItem
