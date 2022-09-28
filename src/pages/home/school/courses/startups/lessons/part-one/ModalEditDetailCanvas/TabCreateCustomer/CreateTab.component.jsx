import React, {useState} from 'react'
import {
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardHeader,
  CardBody,
} from 'reactstrap'
import classnames from 'classnames'
import '../EditDetalCanvas.style.scss'
import descriptionImage from 'assets/images/opportunityStartUpTool/description.svg'
import defineNoActiveImage from 'assets/images/opportunityStartUpTool/defineNoActive.png'
import InterrelatedNoActiveImage from 'assets/images/opportunityStartUpTool/InterrelatedNoActive.png'
import actNoActiveImage from 'assets/images/opportunityStartUpTool/actNoActive.png'
import defineActiveImage from 'assets/images/opportunityStartUpTool/defineActive.svg'
import InterrelatedActiveImage from 'assets/images/opportunityStartUpTool/InterrelatedActive.svg'
import actActiveImage from 'assets/images/opportunityStartUpTool/actActive.svg'
import PlanningTab1 from './CreateTab1.component'
import PlanningTab2 from './CreateTab2.component'
import EvidenceCapturedTab3 from './EvidenceCapturedTab3.component'
import EvidenceCapturedTab4 from './EvidenceCaptureTab4.component'

const PlanningTab = ({setStatus, status}) => {
  const [active, setActive] = useState('1')
  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  const handleChooseTab1 = () => {
    setStatus({status1: true, status2: false, status3: false, status4: false})
    toggle('1')
  }
  const handleChooseTab2 = () => {
    setStatus({status2: true, status1: true, status3: false, status4: false})
    toggle('2')
  }

  const handleChooseTab3 = () => {
    if (status.status2 === true) {
      setStatus({
        status1: true,
        status2: true,
        status3: true,
        status4: false,
      })
      toggle('3')
    }
  }
  const handleChooseTab4 = () => {
    if (status.status3 === true) {
      setStatus({
        status1: true,
        status2: true,
        status3: true,
        status4: true,
      })
      toggle('4')
    }
  }
  return (
    <div className="planningTab">
      <CardHeader
        className="p-0"
        style={{marginBottom: '20px', marginLeft: 40}}
      >
        <Nav className=" w-100">
          <Row style={{width: '100%'}} className="mt-2 ">
            <NavItem style={{width: '25%'}}>
              <NavLink
                className={classnames({
                  active: active === '1',
                })}
                style={{paddingLeft: 0}}
              >
                <img
                  src={descriptionImage}
                  alt="descriptionImage"
                  className="img-fluid"
                  onClick={() => handleChooseTab1()}
                />
              </NavLink>
            </NavItem>
            <NavItem style={{width: '25%'}}>
              <NavLink
                className={classnames({
                  active: active === '2',
                })}
              >
                <img
                  src={
                    !status.status2 ? defineNoActiveImage : defineActiveImage
                  }
                  alt="defineNoActiveImage"
                  className="img-fluid"
                  onClick={() => handleChooseTab2()}
                />
              </NavLink>
            </NavItem>
            <NavItem style={{width: '25%'}}>
              <NavLink
                className={classnames({
                  active: active === '3',
                })}
              >
                <img
                  src={
                    !status.status3
                      ? InterrelatedNoActiveImage
                      : InterrelatedActiveImage
                  }
                  alt="InterrelatedNoActiveImage"
                  className="img-fluid"
                  onClick={() => handleChooseTab3()}
                />
              </NavLink>
            </NavItem>
            <NavItem style={{width: '25%'}}>
              <NavLink
                className={classnames({
                  active: active === '4',
                })}
                style={{paddingRight: 0}}
              >
                <img
                  src={!status.status4 ? actNoActiveImage : actActiveImage}
                  alt="actNoActive"
                  className="img-fluid"
                  onClick={() => handleChooseTab4()}
                />
              </NavLink>
            </NavItem>
          </Row>
        </Nav>
      </CardHeader>

      <CardBody className="p-0">
        <TabContent activeTab={active} style={{padding: '0 20px'}}>
          <TabPane tabId="1">
            <PlanningTab1 />
          </TabPane>
          <TabPane tabId="2">
            <PlanningTab2 />
          </TabPane>
          <TabPane tabId="3">
            <EvidenceCapturedTab3 />
          </TabPane>
          <TabPane tabId="4">
            <EvidenceCapturedTab4 />
          </TabPane>
        </TabContent>
      </CardBody>
    </div>
  )
}

export default PlanningTab
