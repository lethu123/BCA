import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Row,
  UncontrolledDropdown,
} from 'reactstrap'
import Avatar from '@core/components/avatar'

// ** image
import image from 'assets/images/icons/opera.png'
import {MoreVertical} from 'react-feather'

const NotificationCourse = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col md="6">
          <Card className="card-browser-states">
            <CardHeader>
              <Media>
                <Avatar img={image} />
                <div className="ml-2">
                  <CardTitle tag="h4" className="font-weight-bolder">
                    Thông báo khóa học 07/07!
                  </CardTitle>
                  <CardText className="font-small-3 ">
                    <span className="text-muted">6-7-2021 bởi</span>
                    <span className="ml-1">Bùi Quốc Anh</span>
                  </CardText>
                </div>
              </Media>
              <UncontrolledDropdown className="chart-dropdown">
                <DropdownToggle
                  color=""
                  className="bg-transparent btn-sm border-0 p-50"
                >
                  <MoreVertical size={18} className="cursor-pointer" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="w-100">Last 28 Days</DropdownItem>
                  <DropdownItem className="w-100">Last Month</DropdownItem>
                  <DropdownItem className="w-100">Last Year</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardHeader>
            <CardBody>
              Design high-quality designs, graphics, mock-ups and layouts for
              both new and existing web sites/ web applications / mobile
              applications.
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="card-browser-states">
            <CardHeader>
              <Media>
                <Avatar img={image} />
                <div className="ml-2">
                  <CardTitle tag="h4" className="font-weight-bolder">
                    Thông báo khóa học 07/07!
                  </CardTitle>
                  <CardText className="font-small-3 ">
                    <span className="text-muted">6-7-2021 bởi</span>
                    <span className="ml-1">Bùi Quốc Anh</span>
                  </CardText>
                </div>
              </Media>
              <UncontrolledDropdown className="chart-dropdown">
                <DropdownToggle
                  color=""
                  className="bg-transparent btn-sm border-0 p-50"
                >
                  <MoreVertical size={18} className="cursor-pointer" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="w-100">Last 28 Days</DropdownItem>
                  <DropdownItem className="w-100">Last Month</DropdownItem>
                  <DropdownItem className="w-100">Last Year</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardHeader>
            <CardBody>
              Design high-quality designs, graphics, mock-ups and layouts for
              both new and existing web sites/ web applications / mobile
              applications.
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card className="card-browser-states">
            <CardHeader>
              <Media>
                <Avatar img={image} />
                <div className="ml-2">
                  <CardTitle tag="h4" className="font-weight-bolder">
                    Thông báo khóa học 07/07!
                  </CardTitle>
                  <CardText className="font-small-3 ">
                    <span className="text-muted">6-7-2021 bởi</span>
                    <span className="ml-1">Bùi Quốc Anh</span>
                  </CardText>
                </div>
              </Media>
              <UncontrolledDropdown className="chart-dropdown">
                <DropdownToggle
                  color=""
                  className="bg-transparent btn-sm border-0 p-50"
                >
                  <MoreVertical size={18} className="cursor-pointer" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="w-100">Last 28 Days</DropdownItem>
                  <DropdownItem className="w-100">Last Month</DropdownItem>
                  <DropdownItem className="w-100">Last Year</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardHeader>
            <CardBody>
              Design high-quality designs, graphics, mock-ups and layouts for
              both new and existing web sites/ web applications / mobile
              applications.
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default NotificationCourse
