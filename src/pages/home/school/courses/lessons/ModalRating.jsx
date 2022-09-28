import React, {useEffect, useState} from 'react'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'

import ReactStars from 'react-rating-stars-component'
import {useDispatch} from 'react-redux'
import {
  createInstructorReviewAction,
  updateReviewInstructorAction,
} from 'redux/actions/hschools/courseAction'

import defaultImg from 'assets/images/pages/hschool/default_medium.png'

const ModalRating = props => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    course_id: props.course_id,
    rating: 0,
    comment: '',
  })

  useEffect(() => {}, [props.isOpen])

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
      setData({...data, rating: newRating})
    },
  }

  const RatingPostHandle = () => {
    if (!props.reviewId) {
      dispatch(
        createInstructorReviewAction(
          {
            content: data.comment,
            rating: data.rating,
            instructor: props.instructor.id,
            course: data.course_id,
            reviewer: JSON.parse(localStorage.getItem('currentUser')).id,
          },
          props.instructor,
        ),
      )
    } else {
      dispatch(
        updateReviewInstructorAction(
          props.reviewId,
          {content: data.comment, rating: data.rating},
          props.instructor.id,
        ),
      )
    }

    props.setPopoverOpen({
      ...props.popoverOpen,
      modalRating: !props.popoverOpen.modalRating,
    })
  }

  return (
    <>
      <Modal isOpen={props.isOpen} toggle={props.toggleModalRating}>
        <ModalHeader toggle={props.toggleModalRating}>
          How would you rate {props.instructor && props.instructor.username}
        </ModalHeader>
        <ModalBody>
          {props.instructor && (
            <div className="team-thumb_img mb-sm-2">
              <img
                src={props.instructor ? props.instructor.avatar : defaultImg}
                alt="team"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  marginLeft: '50%',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
          )}

          <div className={'center-rating'}>
            <ReactStars {...Rating} />
          </div>
          <Input
            disabled={props.instructor && props.instructor.is_rating}
            type="textarea"
            placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"
            rows={5}
            maxLength={200}
            onChange={e => {
              setData({...data, comment: e.target.value})
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="primary"
            onClick={RatingPostHandle}
            disabled={props.instructor && props.instructor.is_rating}
            style={{
              cursor:
                props.instructor && props.instructor.is_rating
                  ? 'not-allowed'
                  : 'pointer',
            }}
          >
            {props.instructor &&
              (!props.instructor.is_rating
                ? props.reviewId
                  ? 'update'
                  : 'Save'
                : 'You done rating!')}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ModalRating
