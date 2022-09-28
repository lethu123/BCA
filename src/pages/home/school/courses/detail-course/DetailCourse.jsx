import React, {useEffect, useState} from 'react'
import Breadcrumbs from '@core/components/breadcrumbs'
import {useDispatch, useSelector} from 'react-redux'
import {Badge, Col, Container, Row} from 'reactstrap'
import {Link, useHistory, useParams} from 'react-router-dom'
import classnames from 'classnames'
import {Layers, Star} from 'react-feather'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Rating from 'react-rating'

import {
  selectDetailCourse,
  selectListLesson,
  selectProgramExp,
  selectCart,
  selectListRequestApplyForTeachings,
  selectCourseRelated,
} from 'redux/reselects/hschools/course.reselect'

import {
  acceptInviteInstructorApplyTeachingAction,
  getDetailCourse,
  getListLesson,
  getListProgramExp,
  listCourseHschool,
  reviewCourse,
  handleAddCourseToCartAction,
  applyForTeachingCreateAction,
  getListRequestApplyForTeaching,
  getListInstructorReviewAction,
} from 'redux/actions/hschools/courseAction'
import {LIST_COURSE_HSCHOOL} from 'redux/constants/hschool/typesHschool'
import defaultImg from 'assets/images/pages/users/default.png'
import lcImage1 from 'assets/images/pages/users/lc-1-1.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import no_img from 'assets/images/pages/users/noImg.png'
import '@core/scss/react/libs/swiper/swiper.scss'
import SwiperCore, {Navigation} from 'swiper'

import PageHeader from '../../../commons/PageHeader'
import VideoDemoCourse from './VideoDemoCourse'
import Card from 'reactstrap/lib/Card'
import CardBody from 'reactstrap/lib/CardBody'
import OverviewCourseDetail from './OverviewCourseDetail'
import CurriculumCourseDetail from './CurriculumCourseDetail'
import ReviewCourseDetail from './ReviewCourseDetail'
import FaQDetailCourse from './FaQDetailCourse'
import Lecturer from './lecture/Lecturer.component'
import ModalRating from '../lessons/ModalRating'
import Spinner from '@core/components/spinner/Fallback-spinner'
import {useRTL} from 'utility/hooks/useRTL'
import {getListCourseRelatedAction} from 'redux/actions/hschools/courseCenterAction'

const MySwal = withReactContent(Swal)

const DetailCourse = props => {
  const {name_course} = useParams()
  const history = useHistory()
  const _useHistory = useHistory()
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState(1)
  const [instructor, setInstructor] = useState(null)
  const [popoverOpen, setPopoverOpen] = useState({
    popover1: false,
    popover2: false,
    modalRating: false,
  })

  SwiperCore.use([Navigation])
  const params = {
    className: 'swiper-centered-slides p-1',
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,
    navigation: true,
    slideToClickedSlide: true,
  }
  const [isRtl, setIsRtl] = useRTL()

  const auth = useSelector(state => state.auth.userData)
  const course = useSelector(selectDetailCourse)
  const listLesson = useSelector(selectListLesson)
  const carts = useSelector(selectCart)
  const listCourseApplyTeaching = useSelector(
    selectListRequestApplyForTeachings,
  )
  const listRelated = useSelector(selectCourseRelated)

  const programExps = useSelector(selectProgramExp)
  // const wishlists = useSelector(selectWishList)
  // const inWishlist = wishlists.map(ele => ele.id)
  const inCart = carts.map(ele => ele.id)

  useEffect(() => {
    dispatch(getListLesson(name_course))
  }, [name_course])

  useEffect(() => {
    if (course) {
      dispatch(
        listCourseHschool(LIST_COURSE_HSCHOOL, '', null, 6, 1, course.category),
      )
    }
  }, [course])

  useEffect(() => {
    dispatch(getDetailCourse(name_course))
  }, [name_course])

  useEffect(() => {
    dispatch(getListRequestApplyForTeaching())
    dispatch(getListProgramExp())
  }, [])

  useEffect(() => {
    if (course) {
      dispatch(getListInstructorReviewAction(course.id, course.instructors))
      dispatch(getListCourseRelatedAction(course.id))
    }
  }, [course])

  const toggleModalRating = () => {
    setPopoverOpen({...popoverOpen, modalRating: !popoverOpen.modalRating})
  }

  let courseApplyTeaching = []
  if (course) {
    courseApplyTeaching = listCourseApplyTeaching.filter(
      ele =>
        ele.course_info.id === course.id &&
        ele[`${ele.type}_user_info`].id === (auth && auth.id),
    )
  }

  const handleLessonCount = lessons => {
    let lessonCount = 0
    lessons.forEach(element => {
      lessonCount += element.lessons.length
    })
    return lessonCount
  }

  const handleRenderButtonType = () => {
    const isInCart = inCart.includes(course.id)
    if (course.creator.id === (auth && auth.id)) {
      return (
        <span className="thm-btn banner-one__mc-btn cursor-pointer w-100 py-1">
          <span>You are enrolled this course</span>
        </span>
      )
    }
    if (courseApplyTeaching.length > 0) {
      if (
        courseApplyTeaching[0].is_accepted ||
        courseApplyTeaching[0].type === 'invite'
      ) {
        return null
      }
    }
    if (!isInCart && !course.isEnroll) {
      return (
        <span
          onClick={() =>
            dispatch(
              handleAddCourseToCartAction({
                id: course.id,
                isEnroll: course,
                picture: course.picture,
                slug: course.slug,
                title: course.title,
                price: course.price,
                creator: {
                  url: course.creator.url,
                  username: course.creator.username,
                  picture: course.creator.picture,
                },
                rating: course.rating,
                category: course.category,
                instructors: course.instructors,
              }),
            )
          }
          className="thm-btn course-details__price-btn cursor-pointer"
        >
          <span>Add To Cart</span>
        </span>
      )
    }

    if (isInCart && !course.isEnroll) {
      return (
        <span
          onClick={() => _useHistory.push('/hschool/course/checkout')}
          className="thm-btn banner-one__mc-btn cursor-pointer w-100 py-1"
        >
          <span>Go To Checkout</span>
        </span>
      )
    }
    if (course.isEnroll && listLesson && listLesson.length > 0) {
      return (
        <span className="thm-btn banner-one__mc-btn cursor-pointer w-100 py-1">
          <span>You are enrolled this course</span>
        </span>
      )
    } else {
      return (
        <span
          disabled
          className="thm-btn course-details__price-btn cursor-pointer"
        >
          <span>Course comming soon </span>
        </span>
      )
    }
  }
  const handleRenderButtonApplyForTeaching = () => {
    if ((auth && auth.id) === course.creator.id) {
      return null
    }
    if (courseApplyTeaching.length > 0) {
      if (
        !courseApplyTeaching[0].is_accepted &&
        courseApplyTeaching[0].type === 'invite'
      ) {
        return (
          <div
            onClick={() =>
              dispatch(
                acceptInviteInstructorApplyTeachingAction(
                  {
                    course_id: course.id,
                    user_id: auth && auth.id,
                    view_as_id: auth && auth.id,
                    type: 'invite',
                  },
                  course.slug,
                ),
              )
            }
            className="thm-btn course-details__price-btn mt-2 py-1 cursor-pointer"
          >
            <span>Accept Apply for Teaching</span>
          </div>
        )
      }
      if (courseApplyTeaching[0].is_accepted) {
        return (
          <div className="thm-btn banner-one__mc-btn cursor-pointer w-100 py-1">
            <span>Start Teaching</span>
          </div>
        )
      }
      if (
        !courseApplyTeaching[0].is_accepted &&
        courseApplyTeaching[0].type === 'apply'
      ) {
        return (
          <div
            onClick={() =>
              _useHistory.push('/hschool/course/dashboard/statistic')
            }
            className="thm-btn course-details__price-btn mt-2 py-1 cursor-pointer"
          >
            <span>Waiting approve for teaching</span>
          </div>
        )
      }
    } else {
      return (
        <div
          onClick={hadleConfirmApplyTeaching}
          className="thm-btn course-details__price-btn mt-2 py-1 cursor-pointer"
        >
          <span>Apply for Teaching</span>
        </div>
      )
    }
  }

  const hadleConfirmApplyTeaching = () => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Apply now!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1',
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        dispatch(
          applyForTeachingCreateAction(
            {
              course: course.id,
              user: auth && auth.id,
            },
            course.title,
          ),
        )
      }
    })
  }
  console.log(course)

  if (!course) return <Spinner />
  return (
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle={course.category_name}
        breadCrumbParent="Categories"
        breadCrumbParentTo={`/hschool/categories/${course.category_id}`}
        breadCrumbActive={course.title}
        className="w-100"
      />
      {course.background && (
        <PageHeader
          title="Courses Details"
          courseTitl={course.title}
          background={course.background && course.background.image}
        />
      )}

      {course.video_url_introduce && (
        <VideoDemoCourse videoIntro={course.video_url_introduce} />
      )}
      <Card>
        <CardBody>
          <section className="course-details pt-2">
            <div className="row">
              <div className="col-lg-8">
                <div className="course-details__content">
                  <p className="course-details__author">
                    <img
                      src={course.creator.picture ?? defaultImg}
                      alt=""
                      width="50"
                      height="50"
                    />
                    by{' '}
                    <Link to={`/user/${course.creator.url}/profile`}>
                      {course.creator.username}
                    </Link>
                  </p>

                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      <h4
                        className="course-details__title"
                        style={{fontSize: '25px'}}
                      >
                        {course.title}
                      </h4>
                      <div className="course-one__stars mt-1">
                        <span className="course-one__stars-wrap">
                          {[
                            ...Array(Math.round(parseFloat(course.rating))),
                          ].map((_, idx) => (
                            <i className="fa fa-star" key={idx}></i>
                          ))}
                          {[
                            ...Array(Math.round(5 - parseFloat(course.rating))),
                          ].map((_, idx) => (
                            <i className="far fa-star " key={idx}></i>
                          ))}
                        </span>
                        <span className="course-one__count">
                          {course.rating}
                        </span>
                        <span className="course-one__stars-count text-info">
                          {course.c_rating}
                        </span>
                      </div>
                    </div>
                    <div className="course-details__top-right">
                      <Link
                        to={`/hschool/categories/${course.category}`}
                        className="course-one__category"
                      >
                        {course.category}
                      </Link>
                    </div>
                  </div>
                  <div className="course-one__image">
                    <img src={course.picture} alt="" className="img-fluid" />
                  </div>
                </div>
                <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                  <li
                    onClick={() => setActiveTab(1)}
                    style={{cursor: 'pointer'}}
                  >
                    <a
                      className={classnames(activeTab === 1 ? 'active' : '')}
                      role="tab"
                      data-toggle="tab"
                      href="#none"
                      style={{padding: '25px'}}
                    >
                      Overview
                    </a>
                  </li>
                  <li
                    onClick={() => setActiveTab(2)}
                    style={{cursor: 'pointer'}}
                  >
                    <a
                      className={classnames(activeTab === 2 ? 'active' : '')}
                      role="tab"
                      data-toggle="tab"
                      href="#none"
                      style={{padding: '25px'}}
                    >
                      Curriculum
                    </a>
                  </li>
                  <li
                    onClick={() => setActiveTab(5)}
                    style={{cursor: 'pointer'}}
                  >
                    <a
                      className={classnames(activeTab === 5 ? 'active' : '')}
                      role="tab"
                      data-toggle="tab"
                      href="#none"
                      style={{padding: '25px'}}
                    >
                      Lecturer
                    </a>
                  </li>
                  <li
                    onClick={() => setActiveTab(3)}
                    style={{cursor: 'pointer'}}
                  >
                    <a
                      className={classnames(activeTab === 3 ? 'active' : '')}
                      role="tab"
                      data-toggle="tab"
                      href="#none"
                      style={{padding: '25px'}}
                    >
                      Reviews
                    </a>
                  </li>
                  <li
                    onClick={() => setActiveTab(4)}
                    style={{cursor: 'pointer'}}
                  >
                    <a
                      className={classnames(activeTab === 4 ? 'active' : '')}
                      role="tab"
                      data-toggle="tab"
                      href="#none"
                      style={{padding: '25px'}}
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
                <div
                  className="tab-content course-details__tab-content "
                  style={{padding: '50px 30px'}}
                >
                  <OverviewCourseDetail
                    activeTab={activeTab}
                    title={course.title_vi}
                    careerOrientation={course.career_orientation_vi ?? ''}
                    courseFor={course.course_for}
                    benefits={course.benefit}
                  />
                  {listLesson && (
                    <CurriculumCourseDetail
                      activeTab={activeTab}
                      lessons={listLesson.reverse()}
                      timeHour={course.time}
                    />
                  )}
                  <Lecturer activeTab={activeTab} />
                  <ReviewCourseDetail
                    reviews={course.reviews.data}
                    ratingRange={course.rating_range}
                    activeTab={activeTab}
                    countRating={course.c_rating}
                    isRating={course.is_rating}
                    isEnroll={course.isEnroll}
                    onReviewCourse={data =>
                      dispatch(
                        reviewCourse(
                          JSON.stringify({...data, course_id: course.id}),
                          name_course,
                        ),
                      )
                    }
                  />
                  <FaQDetailCourse activeTab={activeTab} course={course} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-details__price">
                  <p className="course-details__price-text">Course price </p>
                  <p className="course-details__price-amount mb-3">
                    {course.price ? `$${course.price}` : 'free'}
                  </p>
                  {handleRenderButtonType()}

                  {auth.is_lecturer && handleRenderButtonApplyForTeaching()}
                </div>

                <div className="course-details__meta">
                  <a href="#none" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock"></i>
                    </span>
                    Modules: {listLesson && <span>{listLesson.length}</span>}
                  </a>
                  <a href="#none" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Lecturer: <span>{course.instructors.length}</span>
                  </a>
                  <a href="#none" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open"></i>
                    </span>
                    Lessons: <span>{course.c_lesson}</span>
                  </a>

                  <a href="#none" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play"></i>
                    </span>
                    Video:{' '}
                    <span>{Math.round(course.c_hours * 1) / 1} hours</span>
                  </a>
                  <a href="#none" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag"></i>
                    </span>
                    Skill Level: <span>{course.level}</span>
                  </a>
                  <a href="#none" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-bell"></i>
                    </span>
                    Language: <span>English</span>
                  </a>
                </div>
                <div className="course-details__list p-1">
                  <h4 className="course-details__list-title">
                    Related {course.category} Courses
                  </h4>
                  {listRelated.length > 0 &&
                    listRelated.map(item => (
                      <div key={item.id} className="d-flex mb-2">
                        <div>
                          <img
                            src={item.picture ?? lcImage1}
                            alt=""
                            className=" mr-1 rounded"
                            width="90px"
                            height="60px"
                          />
                        </div>
                        <div className="course-details__list-content">
                          <div>
                            <div
                              style={{
                                fontWeight: 'bold',
                                fontSize: '14px',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                maxWidth: '210px',
                                cursor: 'pointer',
                              }}
                              onClick={() =>
                                history.push(
                                  `/hschool/courses/detail/${item.slug}`,
                                )
                              }
                            >
                              {item.title}
                            </div>

                            <Rating
                              emptySymbol={
                                <Star
                                  size={15}
                                  fill="#babfc7"
                                  stroke="#babfc7"
                                />
                              }
                              fullSymbol={
                                <Star
                                  size={15}
                                  fill="#ff9f43"
                                  stroke="#ff9f43"
                                />
                              }
                              fractions={2}
                              initialRating={item.rating}
                              direction={isRtl ? 'rtl' : 'ltr'}
                              readonly
                            />
                            <b
                              className="ml-50"
                              style={{fontSize: '11px'}}
                            >{`(${item.c_rating})`}</b>
                          </div>
                          <Badge color="light-warning" className="mt-50">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </CardBody>
      </Card>

      <section className="app1 about video-two" style={{padding: '50px 0'}}>
        <Container>
          <Row>
            <Col lg="6" md="8" className="offset-lg-3 offset-md-2">
              <div className="title title">
                <div className="main-title">
                  <h3 className="text-white mb-2 text-center">
                    Program Experience
                  </h3>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm="12">
              <Row className="set-padding">
                {programExps && (
                  <React.Fragment>
                    {course.program_experience.length > 0 ? (
                      <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
                        {course.program_experience.map((item, index) => (
                          <SwiperSlide
                            className="rounded swiper-shadow"
                            key={item.id}
                          >
                            <div className="icon-section text-center ">
                              <div
                                className="mr-1 text-center mx-auto"
                                style={{height: '70px', width: '100px'}}
                              >
                                <img
                                  src={item._image ?? no_img}
                                  alt=""
                                  className="w-100 h-100 img-thumbnail"
                                />
                              </div>
                            </div>
                            <div className="title-section">
                              <h4 className="text-bold-600 mt-1 mb-0">
                                {item.title}
                              </h4>
                              <p className="swiper-text align-middle pt-md-1 pt-sm-50 mb-0">
                                Quantity: <b>{item.quantity}</b>
                              </p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <div className="text-center w-100">
                        <hr className=" bg-white" />
                        <Layers className="my-3" color="white" size={70} />
                        <h4 className="  text-white">
                          Program Experience Not Yet!
                        </h4>
                      </div>
                    )}
                  </React.Fragment>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <ModalRating
        course_id={course.id}
        isOpen={popoverOpen.modalRating}
        popoverOpen={popoverOpen}
        toggleModalRating={toggleModalRating}
        setPopoverOpen={setPopoverOpen}
        course={course}
        instructor={instructor}
      />
    </React.Fragment>
  )
}

export default DetailCourse
