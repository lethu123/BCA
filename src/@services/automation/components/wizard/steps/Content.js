import {useSettingCommentCtx} from '@services/automation/context'
import TextareaField from 'components/form/TextareaField'
import React, {useEffect, useState} from 'react'
import {ArrowLeft, Plus, X} from 'react-feather'
import {Button, Card, Col, Row} from 'reactstrap'

const Content = ({setActiveIndex, setting}) => {
  const {type_comment, manual_datas} = useSettingCommentCtx()

  const [status, setStatus] = useState(true)
  const option = [
    {
      value: true,
      label: 'Nhập nội dung',
    },
    {
      value: false,
      label: 'Bình luận tự động (AI)',
    },
  ]
  const [datas, setDatas] = useState(
    (setting && setting.manual_datas) || [
      {
        id: Math.random(26).toString().substr(2, 5),
        content: '',
      },
    ],
  )

  useEffect(() => {
    manual_datas(datas)
  }, [datas])

  return (
    <div>
      <Row>
        <Col md="4">
          {option.map(item => (
            <div className="d-flex align-items-center mb-5">
              <label className={`radio  radio-lg`} key={item.value}>
                <input
                  type="radio"
                  name="step2"
                  onChange={() => {
                    type_comment(item.value ? 'manual' : 'auto')
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
        {status && (
          <Col md="8">
            {datas.map(ele => (
              <Card key={ele.id} className="px-8">
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle position-absolute"
                  style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: 'rgba(234,84,85,.12)',
                    top: '-10%',
                    right: '-3%',
                    cursor: 'pointer',
                    border: '1px solid #ea5455',
                  }}
                  onClick={() =>
                    setDatas(datas.filter(item => item.id !== ele.id))
                  }
                >
                  <X className="text-danger " />
                </div>
                <TextareaField
                  name="content"
                  minRows={4}
                  placeholder="Nhập nội dung ..."
                  value={ele.content}
                  onChange={(name, value) =>
                    setDatas(
                      datas.map(item =>
                        item.id === ele.id ? {...item, content: value} : item,
                      ),
                    )
                  }
                />
              </Card>
            ))}
            <Button.Ripple
              color="primary"
              onClick={() => {
                setDatas([
                  ...datas,
                  {
                    id: Math.random(26).toString().substr(2, 5),
                    content: '',
                  },
                ])
              }}
            >
              <Plus size={18} className="mb-1" /> Thêm tin nhắn
            </Button.Ripple>
          </Col>
        )}
      </Row>
      <div className="text-right">
        <Button.Ripple
          color="secondary"
          outline
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
      </div>
    </div>
  )
}

export default Content
