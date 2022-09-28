import React, {useState} from 'react'
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import ReactStars from 'react-rating-stars-component'

//** Assets */
import defaultImg from 'assets/images/portrait/small/default.jpg'

const Lecturer = ({activeTab}) => {
  const [modal, setModal] = useState(null)

  const toggleModal = () => {
    setModal(!modal)
  }

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
      className={classnames('tab-pane animated fadeInUp fqa-component', {
        'show active': activeTab === 5,
      })}
      role="tabpanel"
      id="lecturer"
    >
      <section className="team-one team-page py-0 w-100">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single-main">
              <div className="team-one__image">
                <img src={defaultImg} alt="" width="200" height="200" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to={`#`}>Thu Kara</Link>
                </h2>
                <p className="team-one__designation">I am developer</p>
                <p className="team-one__text d-flex justify-content-center mb-1">
                  <span className="course-one__stars-wrap">
                    {[...Array(Math.round(parseFloat(2)))].map((_, idx) => (
                      <i className="fa fa-star" key={idx}></i>
                    ))}
                    {[...Array(Math.round(5 - parseFloat(3)))].map((_, idx) => (
                      <i className="far fa-star" key={idx}></i>
                    ))}
                  </span>
                </p>
                <p className="team-one__text mb-1">
                  <Badge
                    pill
                    className="badge-glow mr-1"
                    style={{backgroundColor: 'rgba(83, 105, 248, 0.6)'}}
                  >
                    DevOpps
                  </Badge>
                  <Badge
                    pill
                    className="badge-glow"
                    style={{backgroundColor: 'rgba(83, 105, 248, 0.6)'}}
                  >
                    Development
                  </Badge>
                </p>
                <div>
                  <Button.Ripple className="round mr-1" color="primary">
                    See Profile
                  </Button.Ripple>
                  <Button.Ripple
                    onClick={toggleModal}
                    className="round"
                    outline
                    color="primary"
                  >
                    Rating
                  </Button.Ripple>
                </div>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single-main">
              <div className="team-one__image">
                <img src={defaultImg} alt="" width="200" height="200" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to={`#`}>Thu Kara</Link>
                </h2>
                <p className="team-one__designation">I am developer</p>
                <p className="team-one__text d-flex justify-content-center mb-1">
                  <span className="course-one__stars-wrap">
                    {[...Array(Math.round(parseFloat(2)))].map((_, idx) => (
                      <i className="fa fa-star" key={idx}></i>
                    ))}
                    {[...Array(Math.round(5 - parseFloat(3)))].map((_, idx) => (
                      <i className="far fa-star" key={idx}></i>
                    ))}
                  </span>
                </p>
                <p className="team-one__text mb-1">
                  <Badge
                    pill
                    className="badge-glow mr-1"
                    style={{backgroundColor: 'rgba(83, 105, 248, 0.6)'}}
                  >
                    DevOpps
                  </Badge>
                  <Badge
                    pill
                    className="badge-glow"
                    style={{backgroundColor: 'rgba(83, 105, 248, 0.6)'}}
                  >
                    Development
                  </Badge>
                </p>
                <div>
                  <Button.Ripple className="round mr-1" color="primary">
                    See Profile
                  </Button.Ripple>
                  <Button.Ripple
                    onClick={toggleModal}
                    className="round"
                    outline
                    color="primary"
                  >
                    Rating
                  </Button.Ripple>
                </div>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={toggleModal}>
          <h2 className="course-details__title">Add a review</h2>
        </ModalHeader>
        <ModalBody>
          <form action="#" className="course-details__comment-form">
            <h6 className="course-details__comment-form-text">
              Rate this Lecturer? <ReactStars {...Rating} />
            </h6>
            <div className="row">
              <div className="col-lg-12">
                <textarea
                  placeholder="Write Message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
                <div className="my-2">
                  <div className="thm-btn mr-1 course-details__comment-form-btn cursor-pointer">
                    <span>Leave a Review</span>
                  </div>
                  <div
                    onClick={toggleModal}
                    className="thm-btn   course-details__comment-form-btn cursor-pointer"
                  >
                    <span>Cancel</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Lecturer
