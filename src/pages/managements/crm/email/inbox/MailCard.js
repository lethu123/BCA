// *** Custom Components & Plugins
import classnames from 'classnames'
import {htmlToString, subStr} from 'utility/Utils'
import {Paperclip} from 'react-feather'
import {Link} from 'react-router-dom'
import {Star} from 'components/icon'
//**asset */
import image from 'assets/media/avatars/150-4.jpg'

const MailCard = props => {
  // *** Props
  const {
    mail,
    dispatch,
    selectMail,
    updateMails,
    selectedMails,
    handleMailClick,
    handleMailReadUpdate,
    formatDateToMonthShort,
  } = props

  // *** Function to handle read & mail click
  const onMailClick = () => {
    handleMailClick(mail.id)
    handleMailReadUpdate([mail.id], true)
  }

  return (
    <>
      <div
        onClick={() => onMailClick(mail.id)}
        className={classnames(
          'd-flex align-items-start list-item card-spacer-x py-3',
          // {active: mail.isRead},
        )}
      >
        {/*begin::Toolbar*/}
        <div className="d-flex align-items-center">
          {/*begin::Actions*/}
          <div className="d-flex align-items-center mr-3" data-inbox="actions">
            <label
              onClick={e => {
                e.stopPropagation()
              }}
              className="checkbox custom-control checkbox-inline checkbox-primary flex-shrink-0 mr-3"
            >
              <input
                type="checkbox"
                id={`${mail.from.name}-${mail.id}`}
                checked={selectedMails.includes(mail.id)}
                onChange={e => e.stopPropagation()}
                onClick={e => {
                  dispatch(selectMail(mail.id))
                  e.stopPropagation()
                }}
              />
              <span />
            </label>
            <Link
              to="#"
              onClick={e => {
                e.stopPropagation()
                dispatch(updateMails([mail.id], {isStarred: !mail.isStarred}))
              }}
              className="btn btn-icon btn-xs btn-hover-text-warning  text-hover-primary"
            >
              <Star size="2x" />
            </Link>
          </div>
          {/*end::Actions*/}
          {/*begin::Author*/}
          <div
            className="d-flex align-items-center   w-xxl-200px mr-3 "
            data-toggle="view"
          >
            <span className="symbol symbol-35 mr-3">
              <span
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            </span>
            <Link
              to="#"
              className="font-weight-bold text-dark-75 text-hover-primary text-truncate"
            >
              {mail.from.name}
            </Link>
          </div>
          {/*end::Author*/}
        </div>
        {/*end::Toolbar*/}
        {/*begin::Info*/}
        <div className="flex-grow-1 mt-2 mr-2" data-toggle="view">
          <div>
            <span className="font-weight-bolder font-size-lg mr-2">
              {mail.subject} -
            </span>
            <span className="text-muted">
              {htmlToString(subStr(mail.message, 200))}
            </span>
          </div>
          <div className="mt-2">
            <span className="label label-light-primary font-weight-bold label-inline mr-1">
              inbox
            </span>
            <span className="label label-light-danger font-weight-bold label-inline">
              task
            </span>
          </div>
        </div>
        {/*end::Info*/}
        {/*begin::Datetime*/}
        <div className="mail-meta-item w-130px text-right">
          {mail.attachments && mail.attachments.length ? (
            <Paperclip size={14} className="mr-1" />
          ) : null}
          <span
            className="mt-2 mr-3 font-weight-bolder text-truncate  text-right"
            data-toggle="view"
          >
            {formatDateToMonthShort(mail.time)}
          </span>
        </div>

        {/*end::Datetime*/}
      </div>
    </>
  )
}

export default MailCard
