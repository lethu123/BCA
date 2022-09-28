import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link, useHistory} from 'react-router-dom'
import {Heart} from 'react-feather'
import Avatar from '@core/components/avatar'

// **assets
import img1 from 'assets/images/slider/03.jpg'
import profileImg from 'assets/images/portrait/small/avatar-s-9.jpg'
import {subStr} from 'utility/Utils'

const GroupItem = ({item, type}) => {
  const history = useHistory()
  return (
    <Card className="card-profile">
      <div className="position-relative" style={{height: '220px'}}>
        <CardImg top src={img1} alt="card1" className="h-100 w-100" />
        <UncontrolledDropdown
          className="position-absolute"
          style={{top: 10, right: 0}}
        >
          <DropdownToggle className="p-2 cursor-pointer" tag="span">
            <Badge color="danger">Phân loại </Badge>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <span className="align-middle ml-50">Khách hàng</span>
            </DropdownItem>
            <DropdownItem>
              <span className="align-middle ml-50">Bạn bè</span>
            </DropdownItem>
            <DropdownItem>
              <span className="align-middle ml-50">Đồng nghiệp</span>
            </DropdownItem>
            <DropdownItem>
              <span className="align-middle ml-50">Công việc</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardBody
        className="text-left"
        style={{padding: '5rem 2.3rem 1.5rem 2.3rem'}}
      >
        <div className="profile-image-wrapper">
          <div className="profile-image">
            <Avatar img={profileImg} />
          </div>
        </div>
        <CardTitle tag="div" className="mb-1">
          <h4 className="mb-0">
            <Link to={item.url}>{subStr(item.title, 30)}</Link>
          </h4>
          <small className="text-muted">
            {item.member} thành viên • {item.amout_post} bài viết một tuần
          </small>
          <br />
          <small className="text-muted">Doanh thu: {item.revenue}</small>
        </CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
      <CardFooter className="px-3 py-2">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="#">
            {type === 'explore' ? (
              <Button.Ripple color="primary" outline>
                Tham gia nhóm
              </Button.Ripple>
            ) : type === 'owner' ? (
              <Button.Ripple
                color="primary"
                outline
                onClick={() => history.push('/nhom/chi-tiet-nhom')}
              >
                Quản lý nhóm
              </Button.Ripple>
            ) : (
              <Button.Ripple
                color="primary"
                outline
                onClick={() => history.push('/nhom/chi-tiet-nhom')}
              >
                Xem nhóm
              </Button.Ripple>
            )}
          </Link>

          <div className="d-flex align-items-center text-muted text-nowrap cursor-pointer">
            <Heart size={25} className="profile-likes mr-50" />
            <span>20</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default GroupItem
