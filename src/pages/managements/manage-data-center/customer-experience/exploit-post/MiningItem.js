import React, {useState, Fragment} from 'react'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroupItem,
  UncontrolledDropdown,
} from 'reactstrap'
import AppCollapse from '@core/components/app-collapse'
import {Check, Copy, Edit, Link, MoreVertical, Trash} from 'react-feather'
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Avatar from '@core/components/avatar'
import {toast} from 'react-toastify'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//scss
import './MiningItem.scss'

const MySwal = withReactContent(Swal)

const ToastSuccess = () => (
  <Fragment>
    <div className="toastify-header pb-0">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Check />} />
        <h6 className="toast-title">Copied To Clipboard !</h6>
      </div>
    </div>
  </Fragment>
)

const MiningItem = ({post, setIsOpen, isOpen}) => {
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

  const onCopy = () => {
    setCopied(true)
    toast.success(<ToastSuccess />, {
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
    })
  }

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
      <div className="card border-0 gutter-b mining-item">
        <div className="card-body pb-0">
          <div className="d-flex align-items-center">
            <div className="symbol symbol-35 symbol-light-success mr-5">
              <span>
                <img
                  src={post.avatar}
                  className="h-75 align-self-end"
                  alt="imgAvatar"
                />
              </span>
            </div>
            <div className="d-flex flex-column flex-grow-1">
              <p
                className="text-dark-75 text-hover-primary mb-0  font-size-lg font-weight-bolder"
                style={{fontSize: 12}}
              >
                {post.username}
              </p>
              <span
                className="text-muted font-weight-bold"
                style={{fontSize: '10.5px'}}
              >
                <TimeAgo date={new Date()} formatter={formatter} />
              </span>
            </div>
            <div style={{cursor: 'pointer'}} className="d-flex">
              <CopyToClipboard onCopy={onCopy} text={value} className="mr-3">
                <Badge color="light-warning">
                  <Copy size={15} />
                </Badge>
              </CopyToClipboard>
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
                ... Xem thêm
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
            <div className="mt-5">
              <AppCollapse data={data} type="border" accordion />
            </div>

            <div className="d-flex align-items-center mt-4">
              <p className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2">
                <span className="svg-icon svg-icon-primary svg-icon-2x">
                  {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo3\dist/../src/media/svg/icons\General\Like.svg*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x={0} y={0} width={24} height={24} />
                      <path
                        d="M9,10 L9,19 L10.1525987,19.3841996 C11.3761964,19.7920655 12.6575468,20 13.9473319,20 L17.5405883,20 C18.9706314,20 20.2018758,18.990621 20.4823303,17.5883484 L21.231529,13.8423552 C21.5564648,12.217676 20.5028146,10.6372006 18.8781353,10.3122648 C18.6189212,10.260422 18.353992,10.2430672 18.0902299,10.2606513 L14.5,10.5 L14.8641964,6.49383981 C14.9326895,5.74041495 14.3774427,5.07411874 13.6240179,5.00562558 C13.5827848,5.00187712 13.5414031,5 13.5,5 L13.5,5 C12.5694044,5 11.7070439,5.48826024 11.2282564,6.28623939 L9,10 Z"
                        fill="#000000"
                      />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        x={2}
                        y={9}
                        width={5}
                        height={11}
                        rx={1}
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                {post.like}
              </p>
            </div>
            {/*end::Action*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiningItem
