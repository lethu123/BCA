import {Button, Card} from 'reactstrap'
import {Heart, Star} from 'react-feather'
import {subStr} from 'utility/Utils'
import {Link, useHistory} from 'react-router-dom'
import Rating from 'react-rating'

const CourseItem = ({item}) => {
  const history = useHistory()
  return (
    <Card className="h-100">
      <img
        src={
          item.background ||
          'https://img.freepik.com/free-vector/back-school-abstract-banner-vector-image_155957-670.jpg?w=996'
        }
        alt="images"
        className="mx-0 w-100"
        height="180px"
        style={{objectFit: 'cover'}}
      />

      <div className="card-body d-flex flex-column">
        <h4>
          {' '}
          <Link
            to="/home/dao-tao-ki-nang/40"
            className="text-dark font-weight-bold"
          >
            {subStr(item.title, 50)}
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

        <p>{subStr(item.description, 150)}</p>
        <div className="w-100 mt-auto">
          <Button.Ripple
            onClick={() => history.push(`/home/dao-tao-ki-nang/${item.id}`)}
            color="primary"
            outline
            className=" w-100"
          >
            Xem khóa học
          </Button.Ripple>
        </div>
      </div>
    </Card>
  )
}

export default CourseItem
