import React, {useState} from 'react'
import {Plus} from 'react-feather'
import {Button} from 'reactstrap'

// *** Components
import TableAgencyTab from './TableAgencyTab'
import ModalAgencyTab from './ModalAgencyTab'

const AgencyTab = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div>
      <div className="text-sm-right ">
        <Button.Ripple
          color="primary"
          onClick={() => setCenteredModal(!centeredModal)}
        >
          {' '}
          <Plus size={17} /> Thêm cấp DLBH
        </Button.Ripple>
      </div>

      <TableAgencyTab setCenteredModal={setCenteredModal} />
      <ModalAgencyTab
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default AgencyTab
