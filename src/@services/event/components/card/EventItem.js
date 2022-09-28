import {Edit, MoreVertical, Trash, Users} from 'react-feather'
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import {subStr} from 'utility/Utils'
import {EventMutation} from '@services/event'

import image from 'assets/images/home/avatarGroup.png'

const EventItem = ({item, setId = () => {}}) => {
  const history = useHistory()

  const {mutate: deleteEvent} = EventMutation.useDeleteEvent()

  return (
    <Card className="card-custom gutter-b   mb-0  h-100 shadow rounded">
      {/*begin::Body*/}
      <CardBody>
        <div className="d-flex align-items-center ">
          {/*begin::Info*/}
          <div className="d-flex flex-column mr-auto mb-1">
            {/*begin: Title*/}
            <div className="d-flex flex-column mr-auto">
              <div className="text-dark   font-size-h4 font-weight-bolder">
                {moment(item.from_date).format('LLLL')}
              </div>
            </div>
            {/*end::Title*/}
          </div>
          {/*end::Info*/}
          {/*begin::Toolbar*/}
          {item.is_owner && (
            <div className="card-toolbar mb-3">
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                  tag="span"
                >
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu right tag="ul">
                  <DropdownItem
                    tag="li"
                    onClick={() => {
                      setId(item.id)
                    }}
                  >
                    <Edit size={15} />
                    <span className="align-middle ml-50">Edit</span>
                  </DropdownItem>
                  <DropdownItem tag="li" onClick={() => deleteEvent(item.id)}>
                    <Trash size={15} />
                    <span className="align-middle ml-50">Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          )}
          {/*end::Toolbar*/}
        </div>
        {/*begin::Info*/}
        <div className="d-flex align-items-start">
          {/*begin::Pic*/}
          <div>
            <div className="mr-2" style={{width: '60px', height: '60px'}}>
              <img
                style={{width: '100%', height: '100%', borderRadius: '50%'}}
                src={item.cover || image}
                alt=""
                onError={e => {
                  e.target.onerror = null
                  e.target.src = image
                }}
              />
            </div>
          </div>
          {/*end::Pic*/}
          {/*begin::Info*/}

          {/*begin: Title*/}
          <div className="d-flex flex-column mr-auto overflow-hidden">
            <Link
              to={`/home/event/${item.id}`}
              className="text-dark text-hover-primary font-weight-bolder three-dot-2"
              style={{fontSize: '1.35rem', marginBottom: '5px'}}
            >
              {item.name || 'Tên sự kiện'}
            </Link>
            <span className="text-muted font-weight-bold">
              {item.formality_info?.code !== 'ONLINE' ? (
                <span> {item.venue || 'Địa điểm tổ chức'}</span>
              ) : (
                item.formality_info?.name
              )}
            </span>
          </div>

          {/*end::Info*/}
        </div>
        {/*end::Info*/}
        {/*begin::Description*/}
        <div className="my-2 font-weight-bold">
          {item.short_description
            ? subStr(item.short_description, 200)
            : 'Mô tả ngắn'}
        </div>

        {/*end::Description*/}
        {/*begin::Data*/}
        {item.from_date && (
          <div className=" mb-1">
            <div className="d-flex align-items-center mr-3">
              <span className="font-weight-bold mr-2">Bắt đầu</span>
              <Badge color="light-primary">
                {moment(item.from_date).format('lll')}
              </Badge>
            </div>
            {item.to_date && (
              <div className="d-flex align-items-center mt-1">
                <span className="font-weight-bold mr-2">Kết thúc</span>
                <Badge color="light-danger">
                  {moment(item.to_date).format('lll')}
                </Badge>
              </div>
            )}
          </div>
        )}
      </CardBody>
      {/*end::Body*/}
      {/*begin::Footer*/}

      <CardFooter className=" d-flex justify-content-between align-items-center ">
        <div className="  ">
          <div className=" d-flex justify-content-center align-items-center">
            <Users size="18" />
            <span className="text-primary ml-1 font-medium-5 font-weight-bolder">
              {item.event_participant_info?.length || 0}
            </span>
          </div>
          <p className="font-weight-bolder text-dark mb-0 text-center">
            Người tham gia
          </p>
        </div>
        <button
          type="button"
          className="btn mt-2 btn-primary text-uppercase font-weight-bolder mt-5 mt-sm-0 mr-auto mr-sm-0 ml-sm-auto"
          onClick={() => history.push(`/home/event/${item.id}`)}
        >
          Xem chi tiết
        </button>
      </CardFooter>
      {/*end::Footer*/}
    </Card>
  )
}

export default EventItem
