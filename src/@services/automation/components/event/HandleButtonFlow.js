import {useEffect, useState} from 'react'
import {
  AlertCircle,
  AlertTriangle,
  RefreshCcw,
  RotateCcw,
  Share,
  Trash2,
} from 'react-feather'
import {Alert, Badge, PopoverBody, PopoverHeader, Popover} from 'reactstrap'

const HandleButtonFlow = ({
  validations,
  onRestore,
  // onNext,
  // onSave,
  onReset,
  onSubmit,
  isPrev,
  isEdit,
  isApproved,
  onDelete,
  popoverWarnningOpen,
  setPopoverWarnningOpen,
}) => {
  const [count, setCount] = useState(0)

  let isCanSubmit = count === 0
  useEffect(() => {
    let c = 0
    let keyValids = Object.keys(validations)
    keyValids.forEach(key => {
      if (validations[key] && validations[key].length > 0) {
        c += 1
      }
    })
    setCount(c)
  }, [validations])

  const renderValidationType = (lists, text) => (
    <Alert color="warning" className="p-1 mt-1">
      <div className="alert-body">
        <AlertCircle size={15} />
        <span className="ml-1">
          {lists?.map((el, idx) => (
            <strong key={el}>
              {el} {idx !== lists.length - 1 ? ', ' : ''}
            </strong>
          ))}{' '}
          {text}
        </span>
      </div>
    </Alert>
  )

  // *** un connect, no setting
  const renderValidationType1 = (lists, text) => (
    <Alert color="danger" className="p-1 mt-1">
      <div className="alert-body">
        <AlertCircle size={15} />
        <span className="ml-1">
          {lists?.map((el, idx) => (
            <strong key={el}>
              {el} {idx !== lists.length - 1 ? ', ' : ''}
            </strong>
          ))}{' '}
          {text}
        </span>
      </div>
    </Alert>
  )

  // *** decide invalid, no connect exit
  const renderValidationType2 = lists =>
    lists.map(validation => (
      <Alert color="danger" className="p-1 mt-1" key={validation}>
        <div className="alert-body">
          <AlertCircle size={15} />
          <span className="ml-1">{validation}</span>
        </div>
      </Alert>
    ))

  return (
    <div className="d-flex save__controls mt-1">
      {count > 0 && (
        <>
          <div
            className="position-relative mr-4 cursor-pointer"
            id="warnningError"
          >
            <Badge pill color="danger" className="badge-up">
              {count}
            </Badge>
            <AlertTriangle className="text-danger" size={22} />
          </div>

          <Popover
            placement="bottom"
            target="warnningError"
            hideArrow
            isOpen={popoverWarnningOpen}
            toggle={() => setPopoverWarnningOpen(!popoverWarnningOpen)}
          >
            <PopoverHeader style={{border: 'unset'}}>
              B???n ch??a th??? t???o ?
            </PopoverHeader>
            <PopoverBody>
              {validations?.unconnects?.length > 0 &&
                renderValidationType(
                  validations.unconnects,
                  'kh??ng li??n k???t v???i ngu???n d??? li???u, b???n ph???i x??a th?? m???i c?? th??? t???o m???i',
                )}
              {validations?.noSettings?.length > 0 &&
                renderValidationType1(
                  validations.noSettings,
                  'ch??a c?? c??i ?????t',
                )}
              {validations?.decideInvalids?.length > 0 &&
                renderValidationType2(validations.decideInvalids)}
              {validations?.noExits?.length > 0 &&
                renderValidationType1(
                  validations.noExits,
                  'ch??a c?? li??n k???t ho???c k???t th??c',
                )}
            </PopoverBody>
          </Popover>
        </>
      )}

      {!isApproved && (
        <Badge
          color="danger"
          className={`mr-2 ${
            isCanSubmit ? 'cursor-pointer' : 'cursor-not-allowed'
          } `}
          onClick={() => {
            if (isCanSubmit) {
              onSubmit()
            }
          }}
        >
          <Share size={12} className="align-middle" />
          <span className="align-middle ml-1">
            {isEdit ? 'C???p nh???t' : 'T???o m???i'}{' '}
          </span>
        </Badge>
      )}
      {isPrev && (
        <Badge
          color="secondary"
          className="cursor-pointer mr-2"
          onClick={onRestore}
        >
          <RotateCcw size={12} className="align-middle" />
          <span className="align-middle ml-1">Quay l???i</span>
        </Badge>
      )}
      {/* {isNext && (
        <Badge
          color="secondary"
          className="cursor-pointer mr-2"
          onClick={onNext}
        >
          <RotateCw size={12} className="align-middle" />
          <span className="align-middle ml-1">Ti???p t???c</span>
        </Badge>
      )} */}
      {!isEdit && (
        <Badge color="info" className="cursor-pointer mr-2" onClick={onReset}>
          <RefreshCcw size={12} className="align-middle" />
          <span className="align-middle ml-1">L??m m???i</span>
        </Badge>
      )}
      {isEdit && (
        <Badge
          color="light-danger"
          className="cursor-pointer mr-2"
          onClick={onDelete}
        >
          <Trash2 size={12} className="align-middle" />
          <span className="align-middle ml-1">X??a</span>
        </Badge>
      )}
    </div>
  )
}

export default HandleButtonFlow
