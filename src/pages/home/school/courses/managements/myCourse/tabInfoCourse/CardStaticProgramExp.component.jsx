import React from 'react'
import {Edit3, MoreVertical, Trash} from 'react-feather'
import {
  CardBody,
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import Avatar from 'components/avatar/AvatarComponent'
import {useDispatch} from 'react-redux'
// import {daleteProgramExp} from 'redux/actions/hschools/courseAction'

const CardStaticProgramExp = props => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <div className="blog-one__single ">
        <div className="blog-one__content p-0">
          <div className="blog-one__circle"></div>
          <div className="blog-one__content-inner">
            <CardHeader className="justify-content-end">
              <div className="user-like text-center">
                <UncontrolledDropdown>
                  <DropdownToggle tag="a">
                    <MoreVertical className="cursor-pointer" />
                  </DropdownToggle>
                  <DropdownMenu right tag="ul" style={{zIndex: '1'}}>
                    <DropdownItem
                      onClick={() => {
                        props.handleInitProgramEpx(props.item)
                        props.toggleModal()
                      }}
                      tag="li"
                    >
                      <Edit3 size={14} className="mr-1" /> Edit
                    </DropdownItem>
                    <DropdownItem
                      // onClick={() => dispatch(daleteProgramExp(props.item.id))}
                      tag="li"
                    >
                      <Trash size={14} className="mr-1" /> Delete
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </CardHeader>
            <CardBody
              className={`${
                props.className ? props.className : 'stats-card-body'
              } d-flex  justify-content-center flex-column text-center pt-2`}
            >
              <div className="icon-section">
                <Avatar className="mr-1" img={props.item._image} size="xl" />
              </div>
              <div className="title-section">
                <h2 className="text-bold-600 mt-1 mb-25">
                  {props.item.quantity}
                </h2>
                <p className="mb-0">{props.item.title}</p>
              </div>
            </CardBody>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardStaticProgramExp
