import React, {useState} from 'react'
import {Plus} from 'react-feather'
import {Button} from 'reactstrap'

// *** Component
import TableDepartmentTab from './TableDepartmentTab'
import ModalDepartmentTab from './ModalDepartmentTab'

const DepartmentTab = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div>
      <div className="text-sm-right">
        <Button.Ripple
          color="primary"
          onClick={() => setCenteredModal(!centeredModal)}
        >
          {' '}
          <Plus size={17} /> Thêm phòng ban
        </Button.Ripple>
      </div>

      <TableDepartmentTab setCenteredModal={setCenteredModal} />
      <ModalDepartmentTab
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default DepartmentTab
