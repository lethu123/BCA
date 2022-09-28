import {useSettingCommentCtx} from '@services/automation/context'
import React from 'react'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {Button} from 'reactstrap'

const ModeComment = ({setActiveIndex}) => {
  const {state: accounts, choose_mode_comment: dispatchModeComment} =
    useSettingCommentCtx()

  const listMode = [
    {
      id: 1,
      title: 'Bình luận',
      value: 'comment',
      color: 'primary',
    },
    {
      id: 2,
      title: 'Trả lời bình luận',
      value: 'reply',
      color: 'danger',
    },
  ]
  return (
    <div>
      <p className="font-weight-bolder">Chọn chế độ bình luận</p>
      {listMode.map(item => (
        <div className="d-flex align-items-center mb-5" key={item.value}>
          <label className={`radio radio-${item.color} radio-lg`}>
            <input
              type="radio"
              name="chooseType"
              onChange={() => dispatchModeComment(item.value)}
              checked={
                accounts.find(ele => ele.active)?.config['mode-comment'] ===
                item.value
                  ? true
                  : false
              }
            />
            <span></span>
          </label>
          <p className="ml-5 mb-1 font-size-lg ">{item.title}</p>
        </div>
      ))}

      <div className="d-flex justify-content-between">
        <Button.Ripple
          color="secondary"
          className="btn-prev"
          onClick={() => {
            setActiveIndex(active => active - 1)
          }}
        >
          <ArrowLeft
            size={14}
            className="align-middle mr-sm-25 mr-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          outline
          color="primary"
          className="btn-next"
          onClick={() => {
            setActiveIndex(active => active + 1)
          }}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
          <ArrowRight
            size={14}
            className="align-middle ml-sm-25 ml-0"
          ></ArrowRight>
        </Button.Ripple>
      </div>
    </div>
  )
}

export default ModeComment
