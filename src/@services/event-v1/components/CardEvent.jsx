// ** Reactstrap Imports
import {Card, CardBody, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import moment from 'moment'
import { Edit, MoreVertical, Trash } from 'react-feather'
import { Link } from 'react-router-dom';
const CardEvent = ({item}) => {
  return (
    <>
      <Card className="card-developer-meetup position-relative">
      { 
            <div className=" mb-3 position-absolute rounded-circle" style={{right:"5px",top:"5px",width:"30px",height:"30px",backgroundColor:"rgba(255,255,255,0.5)"}}>
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                  tag="span"
                >
                  <MoreVertical size={15} color="#000000"/>
                </DropdownToggle>
                <DropdownMenu right tag="ul">
                  <DropdownItem
                    tag="li"
                    // onClick={() => {
                    //   setId(item.id)
                    // }}
                  >
                    <Edit size={15} />
                    <span className="align-middle ml-50">Edit</span>
                  </DropdownItem>
                  <DropdownItem tag="li" >
                    <Trash size={15} />
                    <span className="align-middle ml-50">Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          }
        <div className="meetup-img-wrapper rounded-top text-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/cloudhspace/image/upload/v1654151725/BCA/event/email_yf5go1.svg"
            height="170"
            style={{objectFit: 'cover', maxWidth: '100%'}}
          />
        </div>
        <CardBody className="p-1">
          <h6 className="mb-50">{moment(item?.from_date).format('lll')}</h6>
          <Link to="/v1/event/detail/3">
          <h4 style={{color: '#000000'}} className="three-dot-2 mb-1">
            {item?.name}
          </h4></Link>
          <h5 className="lh-sm three-dot-2">
            Mô tả: {item?.short_description}
          </h5>
          <div className="d-flex align-items-center my-1">
            <i
              class="fa-solid fa-user-check"
              style={{fontSize: '20px', color: '#000000'}}
            ></i>
            <h5 className="mb-0 ml-1" style={{color: '#000000'}}>
              {item?.event_participant_info?.length || 0} người tham gia
            </h5>
          </div>
          <Button.Ripple
            color="#D7DADE"
            style={{backgroundColor: '#D7DADE'}}
            className="w-100 mt-1"
          >
            <p
              style={{color: '#050505', fontWeight: '700', fontSize: '16px'}}
              className="mb-0 align-middle ms-25"
            >
              Xem chi tiết
            </p>
          </Button.Ripple>
        </CardBody>
      </Card>
    </>
  )
}

export default CardEvent
