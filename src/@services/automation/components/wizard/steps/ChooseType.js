import {useSettingCommentCtx} from '@services/automation/context'
import React, {useEffect, useState} from 'react'
import {ArrowRight, Clipboard, Grid, Inbox} from 'react-feather'
import {Button, Form} from 'reactstrap'

const ChooseType = ({setShowCondition, setActiveIndex}) => {
  // *** CONTEXT
  const {state: accounts, choose_type: dispatchChooseType} =
    useSettingCommentCtx()
  const [chooseType, setChooseType] = useState('')
  useEffect(() => {
    setChooseType(accounts.find(ele => ele.active)?.config['choose-type'])
  }, [accounts])
  const listType = [
    {
      id: 1,
      title: 'Group',
      subTitle: 'Group Type',
      value: 'group',
      icon: <Grid size={16} />,
      color: 'primary',
      filter: false,
    },
    {
      id: 2,
      title: 'Post',
      subTitle: 'Post Type',
      icon: <Inbox size={16} />,
      value: 'post',
      color: 'danger',
      filter: true,
    },

    {
      id: 3,
      title: 'Fanpage',
      subTitle: 'Fanpage Type',
      value: 'fanpage',
      icon: <Clipboard size={16} />,
      color: 'info',
      filter: false,
    },
  ]
  return (
    <div>
      <Form>
        <div>
          <div className="radio-list">
            {listType.map(item => (
              <div
                className="d-flex align-items-center justify-justify-content-between mb-5"
                key={item.id}
              >
                <div className="row w-100">
                  <div className="col-6 d-flex align-items-center">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-55 symbol-light-primary mr-4">
                      <Button.Ripple className="btn-icon" color={item.color}>
                        {item.icon}
                      </Button.Ripple>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Text*/}
                    <div className="d-flex flex-column flex-grow-1">
                      <span className="  mb-1 font-size-lg font-weight-bolder">
                        {item.title}
                      </span>
                      <span className="text-muted font-weight-bold">
                        {item.subTitle}
                      </span>
                    </div>
                    {/*end::Text*/}
                    {/*begin::label*/}
                  </div>
                  <div className="col-6">
                    <label
                      className={`radio radio-${item.color} radio-lg`}
                      key={item.value}
                    >
                      <input
                        type="radio"
                        name="chooseType"
                        onChange={() => {
                          setShowCondition(item.filter)
                          dispatchChooseType(item.value)
                        }}
                        checked={chooseType === item.value ? true : false}
                      />
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="text-right">
          <Button.Ripple
            outline
            color="primary"
            className="btn-next"
            onClick={() => {
              setActiveIndex(1)
            }}
          >
            <span className="align-middle d-sm-inline-block d-none">
              Tiếp tục
            </span>
            <ArrowRight size={14} className="align-middle ml-2"></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </div>
  )
}

export default ChooseType
