import React, {useEffect, useState} from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Button,
  Spinner,
} from 'reactstrap'

// *** Data config
// import {salesCampaignActions, decides} from './config'

import ActionList from '../list/ActionList'
import DecideList from '../list/DecideList'
import {useLocation} from 'react-router-dom'

const LeftSidebar = ({dataBlockTypeAction, dataBlockTypeDecision, type}) => {
  // *** Hook param
  // const {type} = useParams()
  const location = useLocation()

  // *** State
  const [active, setActive] = useState('1')
  const [dataBlock, setDataBlock] = useState([])

  useEffect(() => {
    if (
      dataBlockTypeAction &&
      dataBlockTypeAction.data &&
      dataBlockTypeAction.data.length
    ) {
      let blocks = dataBlockTypeAction.data

      console.log(type)

      if (type === 'sale-campaign') {
        setDataBlock(
          blocks.filter(bl => !(bl.code && bl.code.includes('_facebook'))),
        )
      }
      if (type === 'interaction') {
        setDataBlock(
          blocks.filter(bl => bl.code && bl.code.includes('_facebook')),
        )
      }
    }
  }, [dataBlockTypeAction, type])

  console.log('Data Block', dataBlock)

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Nav pills fill>
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
              >
                Hành động
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
              >
                Quyết định
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="py-3" activeTab={active}>
            <TabPane tabId="1">
              {dataBlock.length > 0 ? (
                <ActionList data={dataBlock} metadata={{}} />
              ) : (
                <Button.Ripple color="flat-primary">
                  <Spinner color="green" size="sm" type="grow" />
                  <span className="ml-50 text-primary">Loading...</span>
                </Button.Ripple>
              )}
            </TabPane>
            <TabPane tabId="2">
              {dataBlockTypeDecision?.data ? (
                <DecideList
                  data={
                    location.pathname.includes('auto-job')
                      ? dataBlockTypeDecision.data.filter(
                          ele => ele.code !== 'branching_condition',
                        )
                      : dataBlockTypeDecision.data.filter(
                          ele =>
                            ele.code === 'duration_time' ||
                            ele.code === 'concurrently' ||
                            ele.code === 'exit',
                        )
                  }
                />
              ) : (
                <Button.Ripple color="flat-primary">
                  <Spinner color="green" size="sm" type="grow" />
                  <span className="ml-50 text-primary">Loading...</span>
                </Button.Ripple>
              )}
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
export default LeftSidebar
