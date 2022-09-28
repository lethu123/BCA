import React from 'react'
import {Database, Square, Star, Heart} from 'react-feather'
import {Card, Button, CardBody} from 'reactstrap'
import Rating from 'react-rating'
import {Link, useHistory} from 'react-router-dom'

const CourseDetailRight = ({info}) => {
  const history = useHistory()
  return (
    <div>
      <Card>
        <CardBody>
          <h6 className="text-primary font-weight-bold mb-0">Giá khóa học</h6>
          <div className="d-flex align-items-center my-7 justify-content-center">
            {+info.price ? (
              <>
                <Database className="text-primary mr-3" />
                <h2 className="font-weight-bolder mb-0">{+info.price}</h2>
              </>
            ) : (
              <h2 className="font-weight-bolder mb-0">Miễn phí</h2>
            )}
          </div>
          <Button.Ripple
            color="primary"
            className="mt-1 mr-sm-1"
            block
            onClick={() =>
              history.push(`/my-course/start/co-hoi-khoi-nghiep/introduction`)
            }
          >
            Tham gia khóa học
          </Button.Ripple>
          <Button.Ripple block className="my-1 " color="secondary">
            Lưu khóa học
          </Button.Ripple>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <div className="d-flex align-items-center my-1">
            <Square size={15} className="text-primary mr-1" fill="#e6641f" />
            <p className="mb-0">Số chương học: 6</p>
          </div>
          <div className="d-flex align-items-center  my-1">
            <Square size={15} className="text-primary mr-1" fill="#e6641f" />
            <p className="mb-0">Số giờ học: 181</p>
          </div>
          <div className="d-flex align-items-center  my-1">
            <Square size={15} className="text-primary mr-1" fill="#e6641f" />
            <p className="mb-0">Chương tối đa: 6 chương</p>
          </div>
          <div className="d-flex align-items-center  my-1">
            <Square size={15} className="text-primary mr-1" fill="#e6641f" />
            <p className="mb-0">Độ khó: Cơ bản</p>
          </div>
          <div className="d-flex align-items-center  my-1">
            <Square size={15} className="text-primary mr-1" fill="#e6641f" />
            <p className="mb-0">Học viên tối đa: 12</p>
          </div>
          <div className="d-flex align-items-center  my-1">
            <Square size={15} className="text-primary mr-1" fill="#e6641f" />
            <p className="mb-0">Ngôn ngữ: Tiếng Việt, Tiếng Anh</p>
          </div>
        </CardBody>
      </Card>

      <Card>
        <img
          src="https://img.freepik.com/free-vector/back-school-abstract-banner-vector-image_155957-670.jpg?w=996"
          alt="images"
          className="mx-0 "
          height="220px"
          style={{objectFit: 'cover'}}
        />
        <div className="card-body">
          <h4>
            <Link
              to="/home/dao-tao-ki-nang/40"
              className="text-dark font-weight-bold"
            >
              Chuyên mục tọa đàm
            </Link>
          </h4>
          <div className="d-flex justify-content-between align-items-center py-1">
            <div className="d-flex align-items-center  ">
              <Rating
                emptySymbol={<Star size={15} fill="#babfc7" stroke="#babfc7" />}
                fullSymbol={<Star size={15} fill="#ffa800" stroke="#ffa800" />}
                readonly
                initialRating={3.6}
                direction={'ltr'}
              />
              <p className="mb-0 ml-2">3.6</p>
            </div>
            <div>
              <Heart size="20" className="text-danger" fill="#f64e60" />
            </div>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{' '}
          </p>
          <div className="w-100">
            <Button.Ripple color="primary" outline className=" w-100">
              Bắt đầu khóa học
            </Button.Ripple>
          </div>
        </div>
      </Card>

      <Card>
        <img
          src="https://img.freepik.com/free-vector/online-school-digital-internet-tutorials-courses-online-education-banner-template-website-mobile-app-development-doodle-style-illustration_155957-60.jpg?w=996"
          alt="images"
          className="mx-0 w-100"
          height="220px"
          style={{objectFit: 'cover'}}
        />

        <div className="card-body">
          <h4>
            {' '}
            <Link
              to="/home/dao-tao-ki-nang/40"
              className="text-dark font-weight-bold"
            >
              Chuyên mục khởi động
            </Link>{' '}
          </h4>
          <div className="d-flex justify-content-between align-items-center py-1">
            <div className="d-flex align-items-center">
              <Rating
                emptySymbol={<Star size={15} fill="#babfc7" stroke="#babfc7" />}
                fullSymbol={<Star size={15} fill="#ffa800" stroke="#ffa800" />}
                readonly
                initialRating={3.6}
                direction={'ltr'}
              />
              <p className="mb-0 ml-2">3.6</p>
            </div>
            <div>
              <Heart size="20" className="text-danger" fill="#f64e60" />
            </div>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{' '}
          </p>
          <div className="w-100">
            <Button.Ripple color="primary" outline className=" w-100">
              Bắt đầu khóa học
            </Button.Ripple>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CourseDetailRight
