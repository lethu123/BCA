import React, {useState} from 'react'
import {Copy, MoreVertical, Plus, Trash2} from 'react-feather'
import {
  Button,
  Card,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'

// *** Component
import TableStatusTab from './TableStatusTab'
import ModalStatusTab from './ModalStatusTab'

const StatusTab = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div>
      <div className="text-right">
        <Button.Ripple
          color="primary"
          onClick={() => setCenteredModal(!centeredModal)}
          className="mr-1"
        >
          {' '}
          <Plus size={17} /> Thêm quy định
        </Button.Ripple>
        <UncontrolledButtonDropdown>
          <DropdownToggle color="flat-primary" style={{padding: 0}}>
            <MoreVertical />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <div>
                <Copy size={19} className="mr-3" />
                <span>Nhân bản sự kiện</span>
              </div>
            </DropdownItem>
            <DropdownItem>
              <Trash2 size={19} className="mr-3" />
              <span>Xóa sự kiện</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>

      <TableStatusTab setCenteredModal={setCenteredModal} />
      <ModalStatusTab
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
      <Card
        style={{
          display: 'inline-block',
          padding: '10px 30px ',
          marginTop: 30,
        }}
      >
        <h6
          style={{
            color: 'red',
            textDecoration: 'underline',
            fontStyle: 'italic',
          }}
        >
          Chú thích:
        </h6>
        <p>
          Cờ trạng thái ban đầu = 1 là Data mới được đưa vào sẽ có trạng thái
          này
        </p>
        <p>
          Level trạng thái: Mô tả điều kiện chuyển, chỉ được chuyển lên không
          được chuyển xuống
        </p>
      </Card>
    </div>
  )
}

export default StatusTab
