// *** Third Party Components
import classnames from 'classnames'
import {Link, useParams} from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Button} from 'reactstrap'

import {
  HalfStar,
  InfoCircle,
  MailHeart,
  PenAndRuller,
  Sending,
  Trash,
} from 'components/icon'

const Sidebar = props => {
  // *** Props
  const {
    store,
    sidebarOpen,
    toggleCompose,
    dispatch,
    getMails,
    resetSelectedMail,
    setSidebarOpen,
  } = props

  // *** Vars
  const params = useParams()

  // *** Functions To Handle Folder, Label & Compose
  const handleFolder = folder => {
    dispatch(getMails({...store.params, folder}))
    dispatch(resetSelectedMail())
  }

  const handleComposeClick = () => {
    toggleCompose()
    setSidebarOpen(false)
  }

  // *** Functions To Active List Item
  const handleActiveItem = value => {
    if (
      (params.folder && params.folder === value) ||
      (params.label && params.label === value)
    ) {
      return true
    } else {
      return false
    }
  }

  return (
    <div
      className={classnames('sidebar-left', {
        show: sidebarOpen,
      })}
    >
      <div className="sidebar">
        <div className="sidebar-content email-app-sidebar">
          <div className="email-app-menu">
            {/*begin::Compose*/}
            <div className="form-group-compose text-center compose-btn">
              <Button.Ripple
                className="compose-email font-weight-bold text-uppercase py-4 px-6 text-center"
                color="primary"
                block
                onClick={handleComposeClick}
              >
                New Message
              </Button.Ripple>
            </div>
            {/*end::Compose*/}

            <PerfectScrollbar
              className="sidebar-menu-list"
              options={{wheelPropagation: false}}
            >
              <div className="card-body px-5 pt-0">
                {/*begin::Navigations*/}
                <div className="navi navi-hover navi-active navi-link-rounded navi-bold navi-icon-center navi-light-icon">
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link
                      to="/admin/email-inbox/inbox"
                      className={`navi-link ${
                        handleActiveItem('inbox') ? 'active' : ''
                      }`}
                      onClick={() => handleFolder('inbox')}
                    >
                      <span className="navi-icon mr-4">
                        <MailHeart size="lg" />
                        {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-heart.svg*/}
                      </span>
                      <span className="navi-text font-weight-bolder font-size-lg">
                        Inbox
                      </span>
                      {store.emailsMeta.inbox ? (
                        <span className="navi-label">
                          <span className="label label-rounded label-light-success font-weight-bolder">
                            {store.emailsMeta.inbox}
                          </span>
                        </span>
                      ) : null}
                    </Link>
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link
                      className={`navi-link ${
                        handleActiveItem('starred') ? 'active' : ''
                      }`}
                      to="/admin/email-inbox/starred"
                      onClick={() => handleFolder('starred')}
                    >
                      <span className="navi-icon mr-4">
                        <HalfStar size="lg" />
                        {/*begin::Svg Icon | path:assets/media/svg/icons/General/Half-star.svg*/}
                      </span>
                      <span className="navi-text font-weight-bolder font-size-lg">
                        Marked
                      </span>
                    </Link>
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link
                      className={`navi-link ${
                        handleActiveItem('draft') ? 'active' : ''
                      }`}
                      to="/admin/email-inbox/draft"
                      onClick={() => handleFolder('draft')}
                    >
                      <span className="navi-icon mr-4">
                        <PenAndRuller size="lg" />
                        {/*begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg*/}
                      </span>
                      <span className="navi-text font-weight-bolder font-size-lg">
                        Draft
                      </span>
                      {store.emailsMeta.draft ? (
                        <span className="navi-label">
                          <span className="label label-rounded label-light-warning font-weight-bolder">
                            {store.emailsMeta.draft}
                          </span>
                        </span>
                      ) : null}
                    </Link>
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link
                      className={`navi-link ${
                        handleActiveItem('sent') ? 'active' : ''
                      }`}
                      to="/admin/email-inbox/sent"
                      onClick={() => handleFolder('sent')}
                    >
                      <span className="navi-icon mr-4">
                        <Sending size="lg" />
                        {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Sending.svg*/}
                      </span>
                      <span className="navi-text font-weight-bolder font-size-lg">
                        Sent
                      </span>
                    </Link>
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link
                      className={`navi-link ${
                        handleActiveItem('spam') ? 'active' : ''
                      }`}
                      to="/admin/email-inbox/spam"
                      onClick={() => handleFolder('spam')}
                    >
                      <span className="navi-icon mr-4">
                        <InfoCircle size="lg" />
                        {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                      </span>
                      <span className="navi-text font-weight-bolder font-size-lg">
                        Spam
                      </span>
                    </Link>
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link
                      className={`navi-link ${
                        handleActiveItem('trash') ? 'active' : ''
                      }`}
                      to="/admin/email-inbox/trash"
                      onClick={() => handleFolder('trash')}
                    >
                      <span className="navi-icon mr-4">
                        <Trash size="lg" />
                        {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                      </span>
                      <span className="navi-text font-weight-bolder font-size-lg">
                        Trash
                      </span>
                    </Link>
                  </div>
                  {/*end::Item*/}
                  {/*begin::Separator*/}
                  <div className="navi-item my-10" />
                  {/*end::Separator*/}
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link to="#" className="navi-link">
                      <span className="navi-icon mr-4">
                        <i className="fa fa-genderless text-danger" />
                      </span>
                      <span className="navi-text">Custom Work</span>
                      <span className="navi-label">
                        <span className="label label-rounded label-light-danger font-weight-bolder">
                          6
                        </span>
                      </span>
                    </Link>
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link to="#" className="navi-link">
                      <span className="navi-icon mr-4">
                        <i className="fa fa-genderless text-success" />
                      </span>
                      <span className="navi-text">Partnership</span>
                    </Link>
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className="navi-item my-2">
                    <Link to="#" className="navi-link">
                      <span className="navi-icon mr-4">
                        <i className="fa fa-genderless text-info" />
                      </span>
                      <span className="navi-text">In Progres</span>
                    </Link>
                  </div>
                  {/*end::Item*/}
                </div>
              </div>
            </PerfectScrollbar>
            {/*end::Navigations*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
