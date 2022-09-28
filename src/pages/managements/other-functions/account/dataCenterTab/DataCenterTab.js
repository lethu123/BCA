import React, {useState} from 'react'
import {Plus} from 'react-feather'
import {Button} from 'reactstrap'

// *** Component
import TableDataCenterTab from './TableDataCenterTab'
import ModalDataCenter from './ModalDataCenter'

const DataCenterTab = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div>
      <div className="text-sm-right ">
        <Button.Ripple
          color="primary"
          onClick={() => setCenteredModal(!centeredModal)}
        >
          {' '}
          <Plus size={17} /> Thêm cấp Data Center
        </Button.Ripple>
      </div>

      <TableDataCenterTab setCenteredModal={setCenteredModal} />
      <ModalDataCenter
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default DataCenterTab
