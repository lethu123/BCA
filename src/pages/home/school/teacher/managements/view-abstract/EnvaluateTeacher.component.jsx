import React, {useState} from 'react'
import classnames from 'classnames'
import ReactStars from 'react-rating-stars-component'
// ** assets
import img1 from 'assets/images/avatars/avatar-blank.png'

// ** component
import Avatar from '@core/components/avatar'

const EnvaluateTeacher = () => {
  const [star, setStar] = useState(0)
  const [message, setMessage] = useState('')
  const Rating = {
    size: 50,
    count: 5,
    color: 'aliceblue',
    activeColor: '#f4c150',
    value: 0,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newRating => {
      setStar(newRating)
    },
  }
  return (
    <div>
      <div className="d-flex align-items-center py-1">
        {img1 === '' ? (
          <Avatar
            size="xl"
            color={`light-primary`}
            content={'hatake kakashi'}
            initials
          />
        ) : (
          <Avatar size="xl" imgClassName="rounded" img={img1} />
        )}
        <div className="user-info text-truncate ml-1">
          <h3 className="d-block font-weight-bold text-truncate text-primary">
            Hatake Kakashi
          </h3>
          <span>thu@gmail.com</span>
        </div>
      </div>
      <div>
        <h4>About</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          commodi, officiis nisi numquam illum odit corrupti nihil fuga itaque
          dolore!
        </p>
      </div>
      <form action="#" className="course-details__comment-form">
        <h2 className="course-details__title">Add a review</h2>
        <h6 className="course-details__comment-form-text">
          Rate this Course? <ReactStars {...Rating} />
        </h6>
        <div className="row">
          <div className="col-lg-12">
            <textarea
              placeholder="Write Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
            <div className="thm-btn course-details__comment-form-btn cursor-pointer">
              <span>Leave a Review</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EnvaluateTeacher
