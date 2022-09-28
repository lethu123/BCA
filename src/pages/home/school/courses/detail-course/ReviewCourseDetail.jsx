import React, {useState} from 'react'
import classnames from 'classnames'
import ReactStars from 'react-rating-stars-component'

const ReviewCourseDetail = ({
  activeTab,
  reviews,
  ratingRange,
  countRating,
  onReviewCourse,
  isRating,
  isEnroll,
}) => {
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
    <div
      className={classnames('tab-pane animated fadeInUp', {
        'show active': activeTab === 3,
      })}
      role="tabpanel"
      id="review"
    >
      <div className="row">
        <div className="col-xl-7 d-flex">
          <div className="course-details__progress my-auto">
            <div className="course-details__progress-item">
              <p className="course-details__progress-text">Excellent</p>
              <div className="course-details__progress-bar">
                <span
                  style={{width: `${ratingRange['5']}%`}}
                  className={classnames({
                    'no-bubble': ratingRange['c_5'] === 0,
                  })}
                ></span>
              </div>
              <p className="course-details__progress-count">
                {ratingRange['c_5']}
              </p>
            </div>
            <div className="course-details__progress-item">
              <p className="course-details__progress-text">Very Good</p>
              <div className="course-details__progress-bar">
                <span
                  style={{width: `${ratingRange['4']}%`}}
                  className={classnames({
                    'no-bubble': ratingRange['c_4'] === 0,
                  })}
                ></span>
              </div>
              <p className="course-details__progress-count">
                {ratingRange['c_4']}
              </p>
            </div>
            <div className="course-details__progress-item">
              <p className="course-details__progress-text">Average</p>
              <div className="course-details__progress-bar">
                <span
                  style={{width: `${ratingRange['3']}%`}}
                  className={classnames({
                    'no-bubble': ratingRange['c_3'] === 0,
                  })}
                ></span>
              </div>
              <p className="course-details__progress-count">
                {ratingRange['c_3']}
              </p>
            </div>
            <div className="course-details__progress-item">
              <p className="course-details__progress-text">Poor</p>
              <div className="course-details__progress-bar">
                <span
                  style={{width: `${ratingRange['2']}%`}}
                  className={classnames({
                    'no-bubble': ratingRange['c_2'] === 0,
                  })}
                ></span>
              </div>
              <p className="course-details__progress-count">
                {ratingRange['c_2']}
              </p>
            </div>
            <div className="course-details__progress-item">
              <p className="course-details__progress-text">Terrible</p>
              <div className="course-details__progress-bar">
                <span
                  style={{width: `${ratingRange['1']}%`}}
                  className={classnames({
                    'no-bubble': ratingRange['c_1'] === 0,
                  })}
                ></span>
              </div>
              <p className="course-details__progress-count">
                {ratingRange['c_1']}
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
          <div className="course-details__review-box">
            <p className="course-details__review-count">{ratingRange.sum}</p>
            <div className="course-details__review-stars">
              {[...Array(Math.round(parseFloat(ratingRange.sum)))].map(
                (_, idx) => (
                  <i className="fa fa-star" key={idx}></i>
                ),
              )}
              {[...Array(5 - Math.round(parseFloat(ratingRange.sum)))].map(
                (_, idx) => (
                  <i className="far fa-star" key={idx}></i>
                ),
              )}
            </div>
            <p className="course-details__review-text">{countRating} reviews</p>
          </div>
        </div>
      </div>

      <div className="course-details__comment">
        {reviews.length > 0 &&
          reviews.map(ele => (
            <div className="course-details__comment-single" key={ele.id}>
              <div className="course-details__comment-top">
                <div className="course-details__comment-img">
                  <img src={ele.picture} alt="" />
                </div>
                <div className="course-details__comment-right">
                  <h2 className="course-details__comment-name">
                    {ele.username}
                  </h2>
                  <div className="course-details__comment-meta">
                    <p className="course-details__comment-date">
                      {ele.comment_date}
                    </p>
                    <div className="course-details__comment-stars">
                      {[...Array(Math.round(parseFloat(ele.num_star)))].map(
                        (_, idx) => (
                          <i className="fa fa-star" key={idx}></i>
                        ),
                      )}
                      {[...Array(Math.round(5 - parseFloat(ele.num_star)))].map(
                        (_, idx) => (
                          <i className="far fa-star " key={idx}></i>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p className="course-details__comment-text">{ele.comment}</p>
            </div>
          ))}
      </div>
      {!isRating && isEnroll && (
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
              <div
                onClick={() => {
                  onReviewCourse({
                    rating: star,
                    comment: message,
                  })
                }}
                className="thm-btn course-details__comment-form-btn cursor-pointer"
              >
                <span>Leave a Review</span>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default ReviewCourseDetail
