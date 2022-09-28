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
import TableNumberTab from './TableNumberTab'
import ModalNumberTab from './ModalNumberTab'

// ** query
import {DataCenterDatatable} from '@services/data-center'

const NumberTab = () => {
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
      </div>

      <TableNumberTab setCenteredModal={setCenteredModal} />
      <ModalNumberTab
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default NumberTab
