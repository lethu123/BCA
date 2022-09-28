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
              Bạn chưa thể tạo ?
            </PopoverHeader>
            <PopoverBody>
              {validations?.unconnects?.length > 0 &&
                renderValidationType(
                  validations.unconnects,
                  'không liên kết với nguồn dữ liệu, bạn phải xóa thì mới có thể tạo mới',
                )}
              {validations?.noSettings?.length > 0 &&
                renderValidationType1(
                  validations.noSettings,
                  'chưa có cài đặt',
                )}
              {validations?.decideInvalids?.length > 0 &&
                renderValidationType2(validations.decideInvalids)}
              {validations?.noExits?.length > 0 &&
                renderValidationType1(
                  validations.noExits,
                  'chưa có liên kết hoặc kết thúc',
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
            {isEdit ? 'Cập nhật' : 'Tạo mới'}{' '}
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
          <span className="align-middle ml-1">Quay lại</span>
        </Badge>
      )}
      {/* {isNext && (
        <Badge
          color="secondary"
          className="cursor-pointer mr-2"
          onClick={onNext}
        >
          <RotateCw size={12} className="align-middle" />
          <span className="align-middle ml-1">Tiếp tục</span>
        </Badge>
      )} */}
      {!isEdit && (
        <Badge color="info" className="cursor-pointer mr-2" onClick={onReset}>
          <RefreshCcw size={12} className="align-middle" />
          <span className="align-middle ml-1">Làm mới</span>
        </Badge>
      )}
      {isEdit && (
        <Badge
          color="light-danger"
          className="cursor-pointer mr-2"
          onClick={onDelete}
        >
          <Trash2 size={12} className="align-middle" />
          <span className="align-middle ml-1">Xóa</span>
        </Badge>
      )}
    </div>
  )
}

export default HandleButtonFlow
