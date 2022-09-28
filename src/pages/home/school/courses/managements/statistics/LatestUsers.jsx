import React from 'react'
import {useHistory} from 'react-router'
import {
  Card,
  CardBody,
  Media,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from 'reactstrap'

const Member = ({image, name, email, id, major, url}) => {
  const history = useHistory()
  return (
    <Media className="border-top py-50 flex-wrap">
      <img
        src={image}
        className={`avatar rounded mr-1`}
        alt={name}
        width="60"
        height="60"
        style={{marginBottom: 10}}
      />
      <Media body>
        <h6
          className=" mb-0 font-size-15 text-bold-600 cursor-pointer"
          onClick={() => history.push(`/user/${url}/profile/feed`)}
        >
          {name}
        </h6>
        <h6
          className="text-muted font-weight-normal mt-50 mb-50"
          style={{fontStyle: 'italic', fontSize: 12}}
        >
          {email}
        </h6>
        <h6 className="text-muted font-weight-normal mt-50 mb-50">
          Major: {major}
        </h6>
      </Media>
      <UncontrolledButtonDropdown className="align-self-center float-right">
        <DropdownToggle
          tag="button"
          className="btn btn-link p-0 dropdown-toggle text-muted"
        >
          <i className="uil uil-ellipsis-v"></i>
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem>
            <i className="uil uil-edit-alt mr-50"></i>Edit
          </DropdownItem> */}
          <DropdownItem>
            <i className="uil uil-exit mr-50"></i>View detail
          </DropdownItem>
          <DropdownItem divider />
          {/* <DropdownItem className="text-danger">
            <i className="uil uil-trash mr-50"></i>Delete
          </DropdownItem> */}
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </Media>
  )
}

const Performers = ({listLectures, totalLecture}) => {
  return (
    <Card>
      <CardBody className="pb-0 pt-1">
        <h5 className="mb-1 header-title text-bold-600">
          Latest Lectureres
          <div className="badge badge-pill badge-warning float-right">
            <span className="align-middle">
              {totalLecture && totalLecture.count}
            </span>
          </div>
        </h5>

        {listLectures.map(ele => (
          <Member
            key={ele.id}
            image={ele.user_info.picture}
            name={ele.user_info.username}
            email={ele.user_info.email}
            id={ele.user_info.id}
            major={ele.major_info.name}
            url={ele.user_info.url}
          />
        ))}

        <div className="divider divider-primary">
          <div className="divider-text">
            <Button.Ripple
              className="bg-gradient-primary"
              color="none"
              size="sm"
            >
              View more
            </Button.Ripple>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default Performers
