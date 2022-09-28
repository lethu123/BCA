import React, {memo} from 'react'
import {Check, Edit, Eye, Loader} from 'react-feather'

import {Handle} from 'react-flow-renderer'
import {Badge, Button} from 'reactstrap'

const styleNodeIcon = {
  width: 60,
  height: 60,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  marginLeft: '50%',
  transform: 'translateX(-50%)',
}

const handleColorType = type =>
  type === 'action'
    ? 'primary'
    : type === 'decide'
    ? 'info'
    : type === 'exit'
    ? 'danger'
    : 'warning'

export default memo(({data}) => {
  return (
    <>
      {data.code !== 'data_source' && data.code !== 'auto_task' && (
        <Handle
          type="target"
          position="top"
          className={`bg-${handleColorType(data.type)}`}
          style={{width: 20, height: 20, top: -10}}
        />
      )}
      <div
        className={`d-flex flex-column py-2 px-1 ${
          data.is_called ? 'bg-light-primary' : 'bg-white'
        } rounded text-center`}
      >
        <div style={{...styleNodeIcon, backgroundImage: `url(${data.icon})`}} />

        <Badge className="my-2" color={`light-${handleColorType(data.type)}`}>
          {data.title}
        </Badge>
        {!data.isNoSetting && (
          <div>
            <Button.Ripple outline color={handleColorType(data.type)} size="sm">
              <Edit size={14} />
              <span className="align-middle ml-1">Cài đặt</span>
            </Button.Ripple>
          </div>
        )}
        {data.history_info && data.history_info.length > 0 && (
          <div>
            <Button.Ripple outline color={handleColorType(data.type)} size="sm">
              <Eye size={14} />
              <span className="align-middle ml-1">Xem chi tiết</span>
            </Button.Ripple>
          </div>
        )}
        {data.is_done !== undefined && (
          <Badge color={data.is_done ? 'primary' : 'light-warning'}>
            {data.is_done ? (
              <Check size={16} className="align-middle mr-2" />
            ) : (
              <Loader size={16} className="align-middle mr-2" />
            )}
            <span className="align-middle">
              {data.is_done ? 'Đã hoàn thành' : 'Đang thực hiện'}
            </span>
          </Badge>
        )}
      </div>

      {data.code !== 'exit' && (
        <Handle
          type="source"
          position="bottom"
          className={`bg-${handleColorType(data.type)}`}
          style={{width: 20, height: 20, bottom: -10}}
        />
      )}
    </>
  )
})
