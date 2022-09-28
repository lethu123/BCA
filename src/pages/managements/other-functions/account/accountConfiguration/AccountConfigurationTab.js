import React, {useState} from 'react'
import {Plus} from 'react-feather'
import {Button, Card} from 'reactstrap'
// *** Components
import TableAccountConfigurationTab from './TableAccountConfigurationTab'
import ModalAccountConfigurationTab from './ModalAccountConfigurationTab'

const AccountConfigurationTab = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div>
      <div className="text-sm-right">
        <Button.Ripple
          color="primary"
          onClick={() => setCenteredModal(!centeredModal)}
        >
          {' '}
          <Plus size={17} /> Thêm vai trò quản trị
        </Button.Ripple>
      </div>
      <Card className="mt-3">
        <div className="d-flex p-5">
          <div>
            <h6 className="font-weight-bolder">
              Tổng số các vị trí vai trò quản trị
            </h6>
            <p
              className="mb-0 text-primary"
              style={{fontSize: 20, fontWeight: 'bold'}}
            >
              7 vai trò
            </p>
          </div>
        </div>
      </Card>
      <TableAccountConfigurationTab setCenteredModal={setCenteredModal} />
      <ModalAccountConfigurationTab
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default AccountConfigurationTab
