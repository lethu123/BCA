import React from 'react'
import {Star} from 'react-feather'
import Rating from 'react-rating'
import {Button, Card} from 'reactstrap'
import TextareaField from 'components/form/TextareaField'
import moment from 'moment'

const RatingCourseDetail = () => {
  return (
    <div>
      <Card className="p-5 mt-5">
        <h4 className="text-primary">Để lại đánh giá của bạn</h4>
        <p>Bạn đang nhận xét và đánh giá cho khóa học "Khởi nghiệp 4.0"</p>
        <Rating
          emptySymbol={<Star size={32} fill="#babfc7" stroke="#babfc7" />}
          fullSymbol={<Star size={32} fill="#ffa800" stroke="#ffa800" />}
          initialRating={3.6}
          direction={'ltr'}
        />
        <div className="d-flex align-items-center mb-5">
          <img
            src="https://img.freepik.com/free-vector/angry-man-with-crossed-arms-crowd_23-2148409553.jpg?w=740"
            alt="images"
            className="rounded-circle mr-2"
            width="50px"
            height="50px"
            style={{objectFit: 'cover'}}
          />
          <TextareaField
            maxLength={500}
            name="textarea"
            placeholder="Để lại bình luận"
            onChange={() => {}}
          />
        </div>
        <div className="d-flex justify-content-end">
          <Button.Ripple color="primary">Gửi đánh giá</Button.Ripple>
        </div>
      </Card>
      <Card className="p-5 mt-5">
        <h4 className="text-primary">Tất cả đánh giá</h4>
        <div className="d-flex align-items-center mb-5">
          <h3 className="ml-5 mb-0 mr-5">3.8 |</h3>
          <Rating
            emptySymbol={<Star size={22} fill="#babfc7" stroke="#babfc7" />}
            fullSymbol={<Star size={22} fill="#ffa800" stroke="#ffa800" />}
            readonly
            initialRating={3.6}
            direction={'ltr'}
          />
        </div>
        <div className="d-flex ">
          <img
            src="https://img.freepik.com/free-vector/happy-couple-walking-with-dog_133260-809.jpg?w=740"
            alt="images"
            className="rounded-circle mr-3"
            width="50px"
            height="50px"
            style={{objectFit: 'cover'}}
          />
          <div>
            <h6 className="mb-1">Hoang Quyen</h6>
            <p className="text-muted font-weight-bold mb-2">
              {moment().startOf(new Date()).fromNow()}
            </p>
            <Rating
              emptySymbol={<Star size={22} fill="#babfc7" stroke="#babfc7" />}
              fullSymbol={<Star size={22} fill="#ffa800" stroke="#ffa800" />}
              readonly
              initialRating={4.2}
              direction={'ltr'}
            />
            <p className="mt-2"> Khóa học rất tốt, đáng để thử</p>
          </div>
        </div>
        <hr />
        <div className="d-flex ">
          <img
            src="https://img.freepik.com/free-vector/happy-couple-walking-with-dog_133260-809.jpg?w=740"
            alt="images"
            className="rounded-circle mr-3"
            width="50px"
            height="50px"
            style={{objectFit: 'cover'}}
          />
          <div>
            <h6 className="mb-1">Hoang Quyen</h6>
            <p className="text-muted font-weight-bold mb-2">
              {moment().startOf(new Date()).fromNow()}
            </p>
            <Rating
              emptySymbol={<Star size={22} fill="#babfc7" stroke="#babfc7" />}
              fullSymbol={<Star size={22} fill="#ffa800" stroke="#ffa800" />}
              readonly
              initialRating={4.2}
              direction={'ltr'}
            />
            <p className="mt-2"> Khóa học rất tốt, đáng để thử</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default RatingCourseDetail
