import TextareaField from 'components/form/TextareaField'
import React from 'react'
import {X} from 'react-feather'
import {Badge, FormGroup} from 'reactstrap'

const CardMessageItem = ({setListMessage, item}) => {
  const PARAMS = ['{{danh_xung}}', '{{ten_tai_khoan}}', '{{ten_khach_hang}}']
  return (
    <div
      className="p-5 mt-10  rounded position-relative"
      style={{boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px'}}
    >
      <div
        className="d-flex justify-content-center align-items-center rounded-circle position-absolute"
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(234,84,85,.12)',
          top: '-7%',
          right: '-3%',
          cursor: 'pointer',
          border: '1px solid #ea5455',
        }}
        onClick={() =>
          setListMessage(listMessages =>
            listMessages.filter(ele => ele.id !== item.id),
          )
        }
      >
        <X className="text-danger " />
      </div>
      <div className="d-flex my-2">
        <div className="mr-2 font-weight-bold">Params:</div>
        <div>
          {PARAMS.map(param => (
            <Badge
              key={param}
              color="light-primary"
              className="badge-glow cursor-pointer mx-2"
              onClick={() =>
                setListMessage(listMessages =>
                  listMessages.map(ele =>
                    ele.id === item.id
                      ? {...ele, content: ` ${ele.content} ${param}`}
                      : ele,
                  ),
                )
              }
            >
              {`${param}`}
            </Badge>
          ))}
        </div>
      </div>
      <FormGroup>
        <div style={{border: '1px solid #ccc', borderRadius: 6}}>
          <TextareaField
            name="content"
            rows={2}
            placeholder="Nhập tin nhắn"
            className="form-control border-0 "
            value={item.content}
            onChange={(name, value) =>
              setListMessage(listMessages =>
                listMessages.map(ele =>
                  ele.id === item.id ? {...ele, content: value} : ele,
                ),
              )
            }
          />
        </div>
      </FormGroup>
    </div>
  )
}

export default CardMessageItem
