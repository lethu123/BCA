import React, {useState} from 'react'
import {ArrowRight} from 'react-feather'
import {Button, Nav, NavItem, TabContent, TabPane, NavLink} from 'reactstrap'
import classnames from 'classnames'
import '../EditDetalCanvas.style.scss'
import EvidenceCaptureTab4Job from './EvidenceCaptureTab4Job.component'
import EvidenceCaptureTab4Pain from './EvidenceCaptureTab4Pain.component'
import EvidenceCaptureTab4Gain from './EvidenceCaptureTab4Gain.component'
import {useHistory} from 'react-router'

const EvidenceCaptureTab4 = () => {
  const history = useHistory()
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div className="modalTab4">
      <div className="text-right mb-1">
        <Button.Ripple
          color="success"
          onClick={() =>
            history.push('/hStartup/ideations/startup/modal-completed-customer')
          }
        >
          <ArrowRight className="mr-1" size={16} />
          Complete
        </Button.Ripple>
      </div>

      <h3>Ranking Jobs, Pains, and Gains</h3>
      <p>
        Get a sence of customer preferences priorities. Investigate which jobs
        the 20 majority consider important or insignficant. Find out which pains
        thay find extreme verus merely moderatr. Learn which gains they find
        essential and which are simply nice to have.
      </p>
      <div className="nav-toolbar">
        <Nav pills>
          <NavItem>
            <NavLink
              className={classnames({
                active: active === '1',
              })}
              onClick={() => {
                toggle('1')
              }}
            >
              Jobs(8)
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: active === '2',
              })}
              onClick={() => {
                toggle('2')
              }}
            >
              Pains(8)
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: active === '3',
              })}
              onClick={() => {
                toggle('3')
              }}
            >
              Gains(8)
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={active}>
          <TabPane tabId="1">
            <EvidenceCaptureTab4Job />
          </TabPane>
          <TabPane tabId="2">
            <EvidenceCaptureTab4Pain />
          </TabPane>
          <TabPane tabId="3">
            <EvidenceCaptureTab4Gain />
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
}

export default EvidenceCaptureTab4
