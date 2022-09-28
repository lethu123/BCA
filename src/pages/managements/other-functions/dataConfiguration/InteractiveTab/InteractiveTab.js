import React, {useState} from 'react'
import {Copy, MoreVertical, Plus, Trash2} from 'react-feather'
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'

// *** Component
import TableInteractiveTab from './TableInteractiveTab'
import ModalInteractiveTab from './ModalInteractiveTab'

const InteractiveTab = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div>
      <div className="text-right ">
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

      <TableInteractiveTab setCenteredModal={setCenteredModal} />
      <ModalInteractiveTab
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default InteractiveTab
