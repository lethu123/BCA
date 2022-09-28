import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {Heart} from 'react-feather'
// import Avatar from '@core/components/avatar'

// **assets
// import img1 from 'assets/images/slider/03.jpg'
// import profileImg from 'assets/images/portrait/small/avatar-s-9.jpg'
import {subStr} from 'utility/Utils'
import Avatar from '@core/components/avatar'

const GroupItem = ({item, type}) => {
  const history = useHistory()

  const {is_owner, is_member} = item

  const renderActionButton = () => {
    if (is_owner || type === 'owner') {
      return (
        <Button.Ripple
          color="primary"
          outline
          onClick={() => history.push(`/group/${item._id}`)}
        >
          Quản lý nhóm
        </Button.Ripple>
      )
    }
    if (is_member || type === 'joined') {
      return (
        <Button.Ripple
          color="primary"
          onClick={() => history.push(`/group/${item._id}`)}
        >
          Xem nhóm
        </Button.Ripple>
      )
    }

    return (
      <Button.Ripple
        onClick={() => history.push(`/group/${item._id}`)}
        color="primary"
      >
        Tham gia nhóm
      </Button.Ripple>
    )
  }

  return (
    <Card className="card-profile h-100 mb-0">
      <div className="position-relative" style={{height: '220px'}}>
        <CardImg
          top
          src={
            item.group_cover_image ||
            'https://newalpha.asia/uploads/10/hinh-anh/b8e0302e7c8f9ad1c39e-1.jpg'
          }
          alt="card1"
          className="h-100 w-100"
        />
      </div>
      <CardBody
        className="text-left"
        style={{padding: '5rem 2.3rem 2.5rem 2.3rem'}}
      >
        <div className="profile-image-wrapper">
          <div className="profile-image">
            <Avatar
              img={
                item.group_avatar ||
                'https://viennewalpha.com/wp-content/uploads/2021/12/logo-newalpha-full-800x800.png'
              }
            />
          </div>
        </div>
        <CardTitle tag="div" className="text-center mt-10">
          <h4
            className="cursor-pointer text-primary"
            onClick={() => history.push(`/group/${item._id}`)}
          >
            {subStr(item.group_name, 30)}
          </h4>
          <div>
            <Badge color="light-secondary">{item.group_label}</Badge>
          </div>
          {item.num_members && (
            <small className="text-muted">{item.num_members} thành viên</small>
          )}
        </CardTitle>
        <CardText>
          {item.group_description && subStr(item.group_description, 100)}
        </CardText>
      </CardBody>
      <CardFooter className="px-3 py-2">
        <div className="d-flex justify-content-between align-items-center">
          {renderActionButton()}

          <div className="d-flex align-items-center text-muted text-nowrap cursor-pointer">
            <Heart size={25} className="profile-likes mr-50" />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default GroupItem
