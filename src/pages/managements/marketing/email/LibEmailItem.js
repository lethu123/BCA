import React, {useState} from 'react'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroupItem,
  UncontrolledDropdown,
} from 'reactstrap'
import AppCollapse from '@core/components/app-collapse'
import {Edit, Link, MoreVertical, Trash} from 'react-feather'
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const LibEmailItem = ({post, setIsOpen, isOpen}) => {
  const [value, setValue] = useState(post.description)
  const [copied, setCopied] = useState(false)
  const formatter = buildFormatter(englishStrings)
  const data = [
    {
      title: (
        <span className=" text-dark " style={{fontSize: 15}}>
          Files
        </span>
      ),
      content: (
        <div>
          {post.files.length > 0 &&
            post.files.map((ele, idx) => (
              <ListGroupItem
                className="d-flex justify-content-between align-items-center"
                key={idx}
              >
                <span>file-demo</span>
                <Badge
                  color="light-danger"
                  className="badge-glow cursor-pointer"
                >
                  <Link className="mr-1" />
                  <a
                    target="_blank"
                    href={ele}
                    style={{color: '#ff6700'}}
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </Badge>
              </ListGroupItem>
            ))}
        </div>
      ),
    },
  ]

  const handleConfirmCancel = () => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          customClass: {
            confirmButton: 'btn btn-success',
          },
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success',
          },
        })
      }
    })
  }
  return (
    <div>
      <div className="card  gutter-b mining-item">
        <div className="card-body pb-0">
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column flex-grow-1">
              <p
                className="text-dark-75 text-hover-primary mb-0  font-size-lg font-weight-bolder"
                style={{fontSize: 12}}
              >
                To: {post.username}
              </p>
              <span className="  font-weight-bold" style={{fontSize: '10.5px'}}>
                Ch??? ?????: Ch??c m???ng sinh nh???t
              </span>
            </div>
            <div style={{cursor: 'pointer'}} className="d-flex">
              <div className="d-flex">
                <UncontrolledDropdown>
                  <DropdownToggle tag="span">
                    <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={() => setIsOpen(!isOpen)}>
                      <Edit size={15} />
                      <span className="align-middle ml-50">Edit</span>
                    </DropdownItem>
                    <DropdownItem onClick={handleConfirmCancel}>
                      <Trash size={15} />
                      <span className="align-middle ml-50">Delete</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <p
              className="text-dark-75 font-size-xs font-weight-normal  mb-2 mt-2"
              style={{minHeight: '90px', maxHeight: '90px'}}
              onClick={() => {
                setValue(post.description)
                setCopied(false)
              }}
            >
              {post.description.slice(0, 150)}{' '}
              <span className="text-primary" style={{cursor: 'pointer'}}>
                ... Xem th??m
              </span>
            </p>
            {post.image.length > 0 &&
              post.image.map((ele, index) => (
                <div
                  key={index}
                  className="bgi-no-repeat bgi-size-cover rounded min-h-200px"
                  style={{
                    backgroundImage: `url(${ele})`,
                  }}
                />
              ))}
            <div className="my-5">
              <AppCollapse data={data} type="border" accordion />
            </div>

            {/*end::Action*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LibEmailItem
