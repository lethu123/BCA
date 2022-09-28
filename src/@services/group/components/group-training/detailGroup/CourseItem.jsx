import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap'
import {Link, useHistory} from 'react-router-dom'
import {Heart} from 'react-feather'

// **assets
import img1 from 'assets/images/slider/03.jpg'
import {subStr} from 'utility/Utils'

const CourseItem = ({item}) => {
  const history = useHistory()
  return (
    <Card className="card-profile h-100">
      <div className="position-relative" style={{height: '220px'}}>
        <CardImg
          top
          src={item.picture || img1}
          alt="card1"
          className="h-100 w-100"
        />
      </div>
      <CardBody className="text-left p-6">
        <CardTitle tag="div" className="mb-2">
          <h4 className="mb-0">
            {/* <Link to={item.url}>{subStr(item.title, 30)}</Link> */}
            <p
              className="cursor-pointer text-primary"
              onClick={() => history.push('/nhom/chi-tiet-nhom')}
            >
              {subStr(item.title, 30)}
            </p>
          </h4>
          <small className="text-muted">
            {item.member} học viên • {item.amout_post} bài giảng
          </small>
          <br />
          {/* <small className="text-muted">Doanh thu: {item.revenue}</small> */}
        </CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
      <CardFooter className="px-5 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="#">
            <Button.Ripple color="primary" outline>
              Bắt đầu học
            </Button.Ripple>
          </Link>

          <div className="d-flex align-items-center text-muted text-nowrap cursor-pointer">
            <Heart size={25} className="profile-likes mr-50" />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CourseItem
