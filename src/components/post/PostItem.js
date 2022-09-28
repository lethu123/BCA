import React from 'react'
import moment from 'moment'
import Comment from './Comment'
import {MoreHorizontal, Edit, Trash, Bookmark, Gift, Star} from 'react-feather'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
} from 'reactstrap'
// *** Components
import AddComment from './AddComment'

//***  Style
import './Post.style.scss'

const PostItem = ({listPost}) => {
  return (
    <div>
      {listPost.map(item => (
        <div className="card card-custom gutter-b" key={item.id}>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-40 symbol-light-success mr-1">
                <span className="symbol-label">
                  <img
                    src={item.user_info.avatar}
                    className="h-75 align-self-end"
                    alt="imgAvatar"
                    style={{objectFit: 'cover'}}
                  />
                </span>
              </div>
              <div className="d-flex flex-column flex-grow-1">
                <p className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder">
                  {item.user_info.name}
                </p>
                <span className="text-muted font-weight-bold">
                  {moment(item.date_created).format('MMMM Do YYYY, h:mm:ss a')}
                </span>
              </div>
              <div className="dropdown dropdown-inline ml-2">
                <UncontrolledDropdown>
                  <DropdownToggle className="pr-1 cursor-pointer" tag="span">
                    <MoreHorizontal size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem style={{marginRight: 0, width: '100%'}}>
                      <Bookmark
                        size={15}
                        style={{marginTop: 2, marginRight: 10}}
                      />
                      <span className="align-middle ">Bookmart</span>
                    </DropdownItem>
                    <DropdownItem style={{marginRight: 0, width: '100%'}}>
                      <Edit size={15} style={{marginTop: 2, marginRight: 10}} />
                      <span className="align-middle ">Edit</span>
                    </DropdownItem>
                    <DropdownItem style={{marginRight: 0, width: '100%'}}>
                      <Trash
                        size={15}
                        style={{marginTop: 2, marginRight: 10}}
                      />
                      <span className="align-middle">Delete</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="pt-4">
              {item.picture.length > 0 &&
                item.picture.map((ele, index) => (
                  <div
                    key={index}
                    className="bgi-no-repeat bgi-size-cover rounded min-h-265px"
                    style={{
                      backgroundImage: `url(${ele})`,
                    }}
                  />
                ))}

              <p className="text-dark-75 font-size-lg font-weight-normal pt-5 mb-2">
                Outlines keep you honest. They stop you from indulging in poorly
                thought-out metaphors about driving and keep you focused on the
                overall structure of your post
              </p>

              <div className="d-flex align-items-center">
                <p className="btn btn-icon-danger btn-sm btn-text-dark-50 bg-hover-light-danger btn-hover-text-danger rounded font-weight-bolder font-size-sm p-2">
                  <span className="svg-icon svg-icon-md svg-icon-danger pr-1">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/General/Heart.svg*/}
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
                        <polygon points="0 0 24 0 24 24 0 24" />
                        <path
                          d="M16.5,4.5 C14.8905,4.5 13.00825,6.32463215 12,7.5 C10.99175,6.32463215 9.1095,4.5 7.5,4.5 C4.651,4.5 3,6.72217984 3,9.55040872 C3,12.6834696 6,16 12,19.5 C18,16 21,12.75 21,9.75 C21,6.92177112 19.349,4.5 16.5,4.5 Z"
                          fill="#000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                  75
                </p>
                <p className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2">
                  <span className="svg-icon svg-icon-md svg-icon-dark-25 pr-2">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg*/}
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
                          d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                          fill="#000000"
                        />
                        <path
                          d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                          fill="#000000"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                  24
                </p>
                <div>
                  <UncontrolledButtonDropdown
                    direction="right"
                    className="postStyle"
                  >
                    <DropdownToggle color="flat-primary" style={{padding: 10}}>
                      <Gift
                        size={18}
                        style={{marginBottom: 4}}
                        className="mr-1"
                      />
                      Tặng quà
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <Star
                          size={20}
                          fill="#FF9F43"
                          stroke="#FF9F43"
                          className="mr-3"
                        />
                        Tặng sao
                      </DropdownItem>
                      <DropdownItem>
                        {/* <BizxuImg color={'primary'} size="x" className="mr-3" /> */}
                        Tặng BizXu
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </div>
              {/*end::Action*/}
            </div>
            {/*end::Bottom*/}
            {/*begin::Separator*/}
            <div className="separator separator-solid mt-2 mb-4 " />
            {/*end::Separator*/}
            {/*begin::Editor*/}
            <Comment listComment={item.comments} reply={true} />
            <AddComment />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostItem
