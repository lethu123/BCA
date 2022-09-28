import React from 'react'
import {Badge, Card} from 'reactstrap'
import {Link, useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
// ** Component
import Avatar from '@core/components/avatar'

// ** Asset
import banner from 'assets/images/banner/banner-30.jpg'
import userBlank from 'assets/images/avatars/avatar-blank.png'
import './CustomStyleItem.style.scss'

const CourseItemTeacher = () => {
  const history = useHistory()
  const userData = useSelector(state => state.auth.userData)
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
                Teacher <Link to={`#`}>Thu Lee</Link>
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
            </div>
            <hr />
            <ul className="workshop-item-2__meta">
              <li>
                <i className="fa fa-user-friends"></i>
                20 Students
              </li>
              <li>
                <i className="fa fa-clock"></i>
                19:00 - 21:00 Thứ 3 -5 -7
              </li>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                Tầng 1 Sharespace, 92 Nguyễn Công Trứ, Nguyễn Thái Bình, Quận 1
              </li>
            </ul>
            <div
              onClick={() =>
                history.push(
                  `/hschool/courses/view-class/test-add-111nkaUfHAldDUKzw`,
                )
              }
              className="course-one__link cursor-pointer"
            >
              View Class
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CourseItemTeacher
