import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
} from 'reactstrap'
import {Link, useHistory} from 'react-router-dom'
import {Heart} from 'react-feather'

// **assets
import img1 from 'assets/images/slider/03.jpg'
import '../../scss/Custom.style.scss'
import {subStr} from 'utility/Utils'

const EventItemNewfeed = ({item}) => {
  const history = useHistory()
  return (
    <Card className="card-profile event-item-newsfeed">
      <div className="position-relative" style={{height: '220px'}}>
        <CardImg
          top
          src={item.cover || img1}
          alt="card1"
          className="h-100 w-100"
        />
      </div>
      <CardBody
        className="text-left"
        style={{padding: '3rem 2.3rem 1.5rem 2.3rem'}}
      >
        <CardTitle tag="div" className="mb-1 text-center">
          <h4 className="mb-0 text-truncate">
            <Link to={`/home/event/${item.id}`}>{subStr(item.name, 30)}</Link>
          </h4>
          <small className="text-muted">
            {item.event_participant_info?.length || 0} người tham gia
          </small>
          <br />
        </CardTitle>
      </CardBody>
      <CardFooter className="px-3 py-2">
        <div className="d-flex justify-content-between align-items-center">
          <Button.Ripple
            onClick={() => history.push(`/home/event/${item.id}`)}
            block
            color="primary"
            outline
          >
            Tham gia sự kiện
          </Button.Ripple>
        </div>
      </CardFooter>
    </Card>
  )
}

export default EventItemNewfeed
