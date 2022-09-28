import React, {useEffect, useState} from 'react'

// *** Third Libary
import {ArrowRight} from 'react-feather'
import {Button, Col, Input, Row} from 'reactstrap'
import NumberInput from '@core/components/number-input'

// *** Context
import {useSettingCommentCtx} from '@services/automation/context'

const Condition = ({setActiveIndex}) => {
  const [status, setStatus] = useState('comment')
  const {state, filter_condition} = useSettingCommentCtx()
  const [validation, setValidation] = useState({
    c_comment: '',
    c_reaction: '',
  })

  useEffect(() => {
    let valueComment = +state.condition.c_comment
    if (
      valueComment < 3 ||
      valueComment === '' ||
      !Number.isInteger(valueComment)
    ) {
      setValidation(val => ({
        ...val,
        c_comment: 'Số bình luận phải lớn hơn 2 và là số nguyên',
      }))
    } else {
      setValidation(val => ({
        ...val,
        c_comment: '',
      }))
    }
  }, [state.condition.c_comment])

  useEffect(() => {
    let valueReaction = +state.condition.c_reaction
    if (
      valueReaction < 5 ||
      valueReaction === '' ||
      !Number.isInteger(valueReaction)
    ) {
      setValidation(val => ({
        ...val,
        c_reaction: 'Số tương tác phải lớn hơn 4 và là số nguyên',
      }))
    } else {
      setValidation(val => ({
        ...val,
        c_reaction: '',
      }))
    }
  }, [state.condition.c_reaction])

  const optionFilter = [
    {
      value: 'comment',
      label: 'Số lượng bình luận tối thiểu trên mỗi bài viết',
    },
    {
      value: 'react',
      label: 'Số lượng tương tác, cảm xúc trên mỗi bài viết',
    },
  ]

  return (
    <div>
      <Row>
        <Col md="6">
          {optionFilter.map(item => (
            <div className="d-flex align-items-center mb-5">
              <label className={`radio  radio-lg`} key={item.value}>
                <input
                  type="radio"
                  name="filter-condition"
                  onChange={() => {
                    setStatus(item.value)
                  }}
                  checked={status === item.value}
                />
                <span></span>
              </label>
              <p className="mb-0 ml-5">{item.label}</p>
            </div>
          ))}
        </Col>
        <Col md="4">
          {status === 'comment' ? (
            <div>
              <Input
                type="number"
                value={state.condition.c_comment}
                onChange={e => {
                  filter_condition({
                    key: 'c_comment',
                    value: e.target.value,
                  })
                }}
              />
              {validation.c_comment !== '' && (
                <p className="text-danger">{validation.c_comment}</p>
              )}
            </div>
          ) : (
            <div>
              <Input
                type="number"
                value={state.condition.c_reaction}
                onChange={e => {
                  filter_condition({
                    key: 'c_reaction',
                    value: e.target.value,
                  })
                }}
              />
              {validation.c_reaction !== '' && (
                <p className="text-danger">{validation.c_reaction}</p>
              )}
            </div>
          )}
        </Col>
      </Row>
      <div className="text-right">
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

export default Condition
