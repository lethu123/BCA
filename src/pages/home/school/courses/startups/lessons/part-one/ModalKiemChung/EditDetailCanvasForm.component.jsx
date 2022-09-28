import React, {useState} from 'react'
import {Row, UncontrolledTooltip} from 'reactstrap'
import * as Icon from 'react-feather'
import EditDetailCanvasWizard1 from './TabWizard/EditDetailCanvasWizard1.component'
import EditDetailCanvasWizard2 from './TabWizard/EditDetailCanvasWizard2.component'
import EditDetailCanvasWizard3 from './TabWizard/EditDetailCanvasWizard3.component'
import EditDetailCanvasWizard4 from './TabWizard/EditDetailCanvasWizard4.component'
import PlanningTab from './TabCreateCustomer/CreateTab.component'
import EditDetalCanvasTooltip from './EditDetalCanvasTooltip.component'
import customerFit from 'assets/images/ideationStartUpTool/customerFit.svg'

function EditDetailCanvasForm() {
  const [status, setStatus] = useState({
    status1: true,
    status2: false,
    status3: false,
    status4: false,
  })

  return (
    <div className="modalEditDetailCanvasForm">
      <Row style={{margin: '10px 0', justifyContent: 'space-between'}}>
        <p>Edited Nov 26, 2020 6:35 am</p>
        <div>
          <Row
            style={{justifyContent: 'space-between', margin: 0}}
            id="UncontrolledEditDetailCanvas"
          >
            <div>
              <Icon.AlertCircle style={{marginBottom: 4}} size={16} />
              <span>2</span>
            </div>
            <div>
              <Icon.Clock style={{marginBottom: 4, marginLeft: 10}} size={16} />
              <span>2</span>
            </div>
          </Row>
          <UncontrolledTooltip
            autohide={false}
            hideArrow={true}
            placement="bottom"
            // trigger="click"
            target="UncontrolledEditDetailCanvas"
            style={{
              background: '#fff',
              fontWeight: 'normal',
              cursor: 'pointer',
            }}
          >
            <EditDetalCanvasTooltip />
          </UncontrolledTooltip>
        </div>
      </Row>

      <div style={{maxHeight: '960px', overflowY: 'scroll'}}>
        <div className="text-center w-100">
          <img src={customerFit} alt="customerFit" className="img-fluid" />
          <p
            className="mt-1 mb-2"
            style={{
              color: '#FF6700',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: '18px',
            }}
          >
            Customer Problem FIT
          </p>
        </div>
        <div>
          {status.status1 &&
            !status.status2 &&
            !status.status3 &&
            !status.status4 && <EditDetailCanvasWizard1 />}
          {status.status1 &&
            status.status2 &&
            !status.status3 &&
            !status.status4 && <EditDetailCanvasWizard2 />}
          {status.status1 &&
            status.status2 &&
            status.status3 &&
            !status.status4 && <EditDetailCanvasWizard3 />}
          {status.status1 &&
            status.status2 &&
            status.status3 &&
            status.status4 && <EditDetailCanvasWizard4 />}
        </div>
        <div>
          <PlanningTab status={status} setStatus={setStatus} />
        </div>
      </div>
    </div>
  )
}

export default EditDetailCanvasForm
