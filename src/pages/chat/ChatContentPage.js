import {useState} from 'react'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from 'reactstrap'
import {Link} from 'react-router-dom'
import {FilePlus, Image, MoreHorizontal} from 'react-feather'
import Avatar from '@core/components/avatar'

// **assets
import image from 'assets/media/avatars/150-6.jpg'
import image1 from 'assets/media/avatars/150-7.jpg'
import '@core/scss/react/pages/page-profile.scss'

// ** component
import AddMemberModal from './AddMemberModal'

// ** css
import './custom.scss'

const ChatContentPage = () => {
  const [isGroup, setIsGroup] = useState(false)
  const [modal, setModal] = useState(false)

  // handle
  const toggleModal = () => setModal(!modal)
  return (
    <div className="chatContentPage">
      <div className="flex-lg-row-fluid  align-item-align-content-between">
        {/*begin::Messenger*/}
        <div className="card" id="kt_chat_messenger" style={{height: '115vh'}}>
          {/*begin::Card header*/}
          <div
            className="card-header border-bottom py-5"
            id="kt_chat_messenger_header"
          >
            {/*begin::Title*/}
            {isGroup ? (
              <div className="card-title d-flex align-items-center">
                <div className="">
                  <div className="avatar-group ml-1">
                    <Avatar
                      className="pull-up"
                      img={image}
                      imgHeight="40"
                      imgWidth="40"
                      id="Uncontrolled1"
                    />

                    <UncontrolledTooltip target="Uncontrolled1" placement="top">
                      Compet
                    </UncontrolledTooltip>
                    <Avatar
                      className="pull-up"
                      img={image}
                      imgHeight="40"
                      imgWidth="40"
                      id="Uncontrolled2"
                    />
                    <UncontrolledTooltip target="Uncontrolled2" placement="top">
                      Kakashi
                    </UncontrolledTooltip>
                    <Avatar
                      className="pull-up"
                      img={image}
                      imgHeight="40"
                      imgWidth="40"
                      id="Uncontrolled3"
                    />
                    <UncontrolledTooltip target="Uncontrolled3" placement="top">
                      Hatake
                    </UncontrolledTooltip>
                  </div>
                  <div className="text-muted text-nowrap ml-50">+140</div>
                </div>
              </div>
            ) : (
              <div className="card-title d-flex align-items-center">
                <div className="symbol symbol-45px symbol-circle">
                  <img alt="Pic" src={image1} />
                  <div
                    className={`symbol-badge bg-secondary start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2 bg-${'success'}`}
                  />
                </div>
                {/*begin::User*/}
                <div className="d-flex justify-content-center flex-column ml-5">
                  <Link
                    to="#"
                    className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                  >
                    Brian Cox
                  </Link>
                  {/*begin::Info*/}
                  <div className="mb-0 lh-1">
                    <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                    <span className="fs-7 fw-bold text-gray-400">Active</span>
                  </div>
                  {/*end::Info*/}
                </div>
                {/*end::User*/}
              </div>
            )}
            {/*end::Title*/}
            {/*begin::Card toolbar*/}
            <div className="card-toolbar">
              {/*begin::Menu*/}
              <div className="me-n3">
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="div"
                    className="btn btn-sm btn-icon btn-active-light-primary"
                  >
                    <MoreHorizontal />
                  </DropdownToggle>
                  <DropdownMenu className="  menu-column  menu-gray-800 menu-state-bg-light-primary fw-bold">
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Contacts
                      </div>
                    </div>

                    <DropdownItem tag="div" className="menu-item p-0">
                      <Link
                        to="#"
                        onClick={toggleModal}
                        className="menu-link p-5"
                      >
                        Add Contact
                      </Link>
                    </DropdownItem>
                    <DropdownItem tag="div" className="menu-item p-0">
                      <Link
                        to="#"
                        onClick={() => setIsGroup(!isGroup)}
                        className="menu-link p-5"
                      >
                        Group chat
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              {/*end::Menu*/}
            </div>
            {/*end::Card toolbar*/}
          </div>
          {/* end::Card header */}
          {/*begin::Card body*/}
          <div
            className="card-body"
            id="kt_chat_messenger_body"
            style={{maxHeight: 600, overflow: 'scroll'}}
          >
            <div
              className="d-flex justify-content-start mb-10 d-none"
              data-kt-element="template-in"
            >
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column align-items-start">
                {/*begin::User*/}
                <div className="d-flex align-items-center mb-2">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src={image1} />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-3">
                    <Link
                      to="#"
                      className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1 ml-3"
                    >
                      Brian Cox
                    </Link>
                    <span className="text-muted fs-7 mb-1 ml-3">Just now</span>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::User*/}
                {/*begin::Text*/}
                <div
                  className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                  data-kt-element="message-text"
                >
                  Right before vacation season we have the next Big Deal for
                  you.
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Message(template for in)*/}
            {/*begin::Messages*/}
            <div
              className="scroll-y me-n5 pe-5 pt-5"
              style={{height: 'calc(74vh - 130px)'}}
            >
              {/*begin::Message(out)*/}
              <div className="d-flex justify-content-end mb-10">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column align-items-end">
                  {/*begin::User*/}
                  <div className="d-flex align-items-center mb-2">
                    {/*begin::Details*/}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1 mr-3">4 Hours</span>
                      <Link
                        to="#"
                        className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1 mr-3"
                      >
                        You
                      </Link>
                    </div>
                    {/*end::Details*/}
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src={image} />
                    </div>
                    {/*end::Avatar*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Text*/}
                  <div
                    className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  >
                    Most purchased Business courses during this sale!
                  </div>
                  {/*end::Text*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Message(out)*/}

              {/*begin::Message(template for in)*/}
              <div
                className="d-flex justify-content-start mb-10 d-none"
                data-kt-element="template-in"
              >
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column align-items-start">
                  {/*begin::User*/}
                  <div className="d-flex align-items-center mb-2">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src={image1} />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-3">
                      <Link
                        to="#"
                        className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1 ml-3"
                      >
                        Brian Cox
                      </Link>
                      <span className="text-muted fs-7 mb-1 ml-3">
                        Just now
                      </span>
                    </div>
                    {/*end::Details*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Text*/}
                  <div
                    className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    Right before vacation season we have the next Big Deal for
                    you.
                  </div>
                  {/*end::Text*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Message(template for in)*/}
            </div>
            {/*end::Messages*/}
          </div>
          {/*end::Card body*/}
          {/*begin::Card footer*/}
          <div className="card-footer pt-4" id="kt_chat_messenger_footer">
            <div className=" d-block d-sm-flex">
              {/*begin::Input*/}
              <textarea
                className="form-control form-control-flush mb-3 mb-sm-0"
                rows={1}
                placeholder="Type a message"
                defaultValue={''}
              />
              {/*end::Input*/}
              {/*begin:Toolbar*/}
              <div className="d-flex flex-stack justify-content-end">
                {/*begin::Actions*/}
                <div className="d-flex align-items-center me-2">
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Coming soon"
                  >
                    <Image size="20" />
                  </button>
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Coming soon"
                  >
                    <FilePlus size="20" />
                  </button>
                </div>
                {/*end::Actions*/}
                {/*begin::Send*/}
                <button
                  className="btn btn-primary ml-3"
                  type="button"
                  data-kt-element="send"
                >
                  Send
                </button>
                {/*end::Send*/}
              </div>
              {/*end::Toolbar*/}
            </div>
          </div>
          {/*end::Card footer*/}
        </div>
        {/*end::Messenger*/}
      </div>
      <AddMemberModal toggleModal={toggleModal} modal={modal} />
    </div>
  )
}

export default ChatContentPage
