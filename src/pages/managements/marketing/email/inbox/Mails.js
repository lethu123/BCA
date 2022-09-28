// *** React Imports
import {Fragment, useState} from 'react'

// *** Mail Components Imports
import MailCard from './MailCard'
import MailDetails from './MailDetails'
import ComposePopUp from './ComposePopup'

// *** Utils
import {formatDateToMonthShort} from 'utility/Utils'

// *** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {
  Menu,
  Mail,
  Trash,
  Edit2,
  Info,
  ChevronDown,
  Search,
  MoreHorizontal,
  Plus,
  Settings,
} from 'react-feather'
import {
  AngleLeft,
  AngleRight,
  Duplicate,
  MailOpened,
  MediaFolder,
  Sort1,
  Update,
} from 'components/icon'
import TrashX from 'components/icon/dist/Trash'

const Mails = props => {
  // *** Props
  const {
    query,
    store,
    setQuery,
    dispatch,
    selectMail,
    composeOpen,
    updateMails,
    paginateMail,
    selectAllMail,
    toggleCompose,
    setSidebarOpen,
    updateMailLabel,
    resetSelectedMail,
    selectCurrentMail,
  } = props

  const {mails, selectedMails} = store

  // *** States
  const [openMail, setOpenMail] = useState(false)

  // *** Variables
  const labelColors = {
    personal: 'success',
    company: 'primary',
    important: 'warning',
    private: 'danger',
  }

  // *** Handles Update Functions
  const handleMailClick = id => {
    dispatch(selectCurrentMail(id))
    setOpenMail(true)
  }

  // *** Handles SelectAll
  const handleSelectAll = e => {
    dispatch(selectAllMail(e.target.checked))
  }

  /*eslint-disable */

  // *** Handles Folder Update
  const handleFolderUpdate = (e, folder, ids = selectedMails) => {
    e.preventDefault()
    dispatch(updateMails(ids, {folder}))
    dispatch(resetSelectedMail())
  }

  // *** Handles Label Update
  const handleLabelsUpdate = (e, label, ids = selectedMails) => {
    e.preventDefault()
    dispatch(updateMailLabel(ids, label))
    dispatch(resetSelectedMail())
  }

  // *** Handles Mail Read Update
  const handleMailReadUpdate = (arr, bool) => {
    dispatch(updateMails(arr, {isRead: bool})).then(() =>
      dispatch(resetSelectedMail()),
    )
    dispatch(selectAllMail(false))
  }

  // *** Handles Move to Trash
  const handleMailToTrash = ids => {
    dispatch(updateMails(ids, {folder: 'trash'}))
    dispatch(resetSelectedMail())
  }
  /*eslint-enable */

  // *** Renders Mail
  const renderMails = () => {
    if (mails.length) {
      return mails.map((mail, index) => {
        return (
          <MailCard
            mail={mail}
            key={index}
            dispatch={dispatch}
            selectMail={selectMail}
            updateMails={updateMails}
            labelColors={labelColors}
            selectedMails={selectedMails}
            handleMailClick={handleMailClick}
            handleMailReadUpdate={handleMailReadUpdate}
            formatDateToMonthShort={formatDateToMonthShort}
          />
        )
      })
    }
  }

  return (
    <Fragment>
      <div className="email-app-list bg-white">
        <div className="app-fixed-search d-flex align-items-center">
          <div
            className="sidebar-toggle d-block d-lg-none ml-1"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </div>
          <div className="card-header border-0 w-100 row row-marginless align-items-center flex-wrap py-5 h-auto">
            {/*begin::Toolbar*/}
            <div className="col-12 col-sm-6 col-xxl-4 order-2 order-xxl-1 d-flex flex-wrap align-items-center">
              <div className="d-flex align-items-center mr-1 my-2">
                <label
                  data-inbox="group-select"
                  className="checkbox checkbox-inline checkbox-primary mr-3"
                >
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                      selectedMails.length &&
                      selectedMails.length === mails.length
                    }
                  />
                  <span />
                </label>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="span"
                    className="btn btn-clean btn-icon btn-sm mr-1"
                  >
                    <ChevronDown size="25" />
                  </DropdownToggle>
                  <DropdownMenu className="navi py-3" tag="ul">
                    <DropdownItem tag="li" className="navi-item">
                      <span className="navi-link">
                        <span className="navi-text">All</span>
                      </span>
                    </DropdownItem>
                    <DropdownItem tag="li" className="navi-item">
                      <span className="navi-link">
                        <span className="navi-text">Read</span>
                      </span>
                    </DropdownItem>
                    <DropdownItem tag="li" className="navi-item">
                      <span className="navi-link">
                        <span className="navi-text">Unread</span>
                      </span>
                    </DropdownItem>
                    <DropdownItem tag="li" className="navi-item">
                      <span className="navi-link">
                        <span className="navi-text">Starred</span>
                      </span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <span className="btn btn-clean btn-icon btn-sm mr-2">
                  <Update size="md" />
                </span>
              </div>
              <div className="d-flex align-items-center mr-1 my-2">
                <span
                  onClick={() => handleMailReadUpdate(selectedMails, false)}
                  className="btn btn-default btn-icon btn-sm mr-2"
                >
                  <MailOpened size="md" />
                </span>
                <span
                  className="btn btn-default btn-icon btn-sm mr-2 d-none"
                  data-toggle="tooltip"
                  data-original-title="Spam"
                >
                  <span className="svg-icon svg-icon-md">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Warning-1-circle.svg*/}
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
                        <circle
                          fill="#000000"
                          opacity="0.3"
                          cx={12}
                          cy={12}
                          r={10}
                        />
                        <rect
                          fill="#000000"
                          x={11}
                          y={7}
                          width={2}
                          height={8}
                          rx={1}
                        />
                        <rect
                          fill="#000000"
                          x={11}
                          y={16}
                          width={2}
                          height={2}
                          rx={1}
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                <span
                  onClick={() => handleMailToTrash(selectedMails)}
                  className="btn btn-default btn-icon btn-sm mr-2"
                >
                  <TrashX size="md" />
                </span>
                <span className="btn btn-default btn-icon btn-sm mr-2">
                  <Duplicate size="md" />
                </span>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="span"
                    className="btn btn-default btn-icon btn-sm mr-2"
                  >
                    <MediaFolder size="md" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      tag="div"
                      onClick={e => handleFolderUpdate(e, 'draft')}
                      className="d-flex align-items-center"
                    >
                      <Edit2 className="mr-50" size={18} />
                      <span>Draft</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="a"
                      href="/"
                      onClick={e => handleFolderUpdate(e, 'spam')}
                      className="d-flex align-items-center"
                    >
                      <Info className="mr-50" size={18} />
                      <span>Spam</span>
                    </DropdownItem>
                    <DropdownItem
                      tag="div"
                      onClick={e => handleFolderUpdate(e, 'trash')}
                      className="d-flex align-items-center"
                    >
                      <Trash className="mr-50" size={18} />
                      <span>Trash</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            {/*end::Toolbar*/}
            {/*begin::Search*/}
            <div className="col-xxl-4 d-flex order-1 order-xxl-2 align-items-center justify-content-center">
              <div className="input-group input-group-lg input-group-solid my-2">
                <input
                  type="text"
                  className="form-control pl-4"
                  placeholder="Search email"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <div className="input-group-append">
                  <span className="input-group-text pr-3">
                    <Search size="20" />
                  </span>
                </div>
              </div>
            </div>
            {/*end::Search*/}
            {/*begin::Pagination*/}
            <div className="col-12 col-sm-6 col-xxl-4 order-2 order-xxl-3 d-flex align-items-center justify-content-sm-end text-right my-2">
              {/*begin::Per Page Dropdown*/}
              <UncontrolledDropdown>
                <DropdownToggle tag="div" className="cursor-pointer">
                  <span
                    className="text-muted font-weight-bold mr-2"
                    data-toggle="dropdown"
                  >
                    1 - 50 of 235
                  </span>
                </DropdownToggle>
                <DropdownMenu className="navi py-3" tag="ul">
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link">
                      <span className="navi-text">20 per page</span>
                    </span>
                  </DropdownItem>
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link">
                      <span className="navi-text">50 par page</span>
                    </span>
                  </DropdownItem>
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link">
                      <span className="navi-text">100 par page</span>
                    </span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/*end::Per Page Dropdown*/}
              {/*begin::Arrow Buttons*/}
              <span className="btn btn-default btn-icon btn-sm mr-2">
                <AngleLeft size="md" />
              </span>
              <span className="btn btn-default btn-icon btn-sm mr-2">
                <AngleRight size="md" />
              </span>
              {/*end::Arrow Buttons*/}
              {/*begin::Sort Dropdown*/}
              <UncontrolledDropdown>
                <DropdownToggle tag="div" className="cursor-pointer">
                  <span
                    className="btn btn-default btn-icon btn-sm"
                    data-toggle="dropdown"
                  >
                    <Sort1 size="md" />
                  </span>
                </DropdownToggle>
                <DropdownMenu className="navi py-3" tag="ul">
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link active">
                      <span className="navi-text">Newest</span>
                    </span>
                  </DropdownItem>
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link">
                      <span className="navi-text">Olders</span>
                    </span>
                  </DropdownItem>
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link">
                      <span className="navi-text">Unread</span>
                    </span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/*end::Sort Dropdown*/}
              {/*begin::Options Dropdown*/}
              <UncontrolledDropdown direction="left">
                <DropdownToggle tag="div" className="cursor-pointer">
                  <span
                    className="btn btn-default btn-icon btn-sm"
                    data-toggle="dropdown"
                  >
                    <MoreHorizontal size="20" />
                  </span>
                </DropdownToggle>
                <DropdownMenu className="navi py-3" tag="ul">
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link ">
                      <Plus size="18" />
                      <span className="navi-text ml-1">New Group</span>
                    </span>
                  </DropdownItem>
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link ">
                      <Mail size="18" />
                      <span className="navi-text ml-1">Contact</span>
                    </span>
                  </DropdownItem>
                  <DropdownItem tag="li" className="navi-item">
                    <span className="navi-link ">
                      <Settings size="18" />
                      <span className="navi-text ml-1">Settings</span>
                    </span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/*end::Options Dropdown*/}
            </div>
            {/*end::Pagination*/}
          </div>
        </div>

        <PerfectScrollbar
          className="email-user-list"
          options={{wheelPropagation: false}}
        >
          {mails.length ? (
            <div className="card-body table-responsive px-0">
              <div className="list list-hover min-w-500px">{renderMails()}</div>
            </div>
          ) : (
            <div className="no-results d-block">
              <h5>No Items Found</h5>
            </div>
          )}
        </PerfectScrollbar>
      </div>
      <MailDetails
        openMail={openMail}
        dispatch={dispatch}
        mail={store.currentMail}
        labelColors={labelColors}
        setOpenMail={setOpenMail}
        updateMails={updateMails}
        paginateMail={paginateMail}
        updateMailLabel={updateMailLabel}
        handleMailToTrash={handleMailToTrash}
        handleFolderUpdate={handleFolderUpdate}
        handleLabelsUpdate={handleLabelsUpdate}
        handleMailReadUpdate={handleMailReadUpdate}
        formatDateToMonthShort={formatDateToMonthShort}
      />
      <ComposePopUp composeOpen={composeOpen} toggleCompose={toggleCompose} />
    </Fragment>
  )
}

export default Mails
