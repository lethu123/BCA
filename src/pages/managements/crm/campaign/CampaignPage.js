import React, {useEffect, useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

// *** Components
import SalesCampaign from './campaignSales/SalesCampaign'
import TakeCareOfFacebookCampaign from './campaignTakeCareFB/TakeCareOfFacebookCampaign'
import {useParams, useHistory} from 'react-router-dom'
// *** Style Scss
import './Index.style.scss'
import {Grid} from 'react-feather'

const CampaignPage = () => {
  const [active, setActive] = useState('1')
  const {type} = useParams()
  const history = useHistory()
  const routeDataCenter = [
    {
      id: '1',
      name: 'Chiến dịch bán hàng',
      path: 'chien-dich-ban-hang',
      component: <SalesCampaign />,
    },
    {
      id: '2',
      name: 'Chiến dịch CSFB',
      path: 'chien-dich-csfb',
      component: <TakeCareOfFacebookCampaign />,
    },
    {
      id: '3',
      name: 'Lịch sử chiến dịch',
      path: 'lich-chien-dich',
      // component: <CampaignCalendar />,
      component: 'Updating',
    },
  ]
  useEffect(() => {
    switch (type) {
      case 'chien-dich-ban-hang':
        return setActive('1')

      case 'chien-dich-csfb':
        return setActive('2')

      case 'lich-chien-dich':
        return setActive('3')

      default:
        return
    }
  }, [type])

  return (
    <div className="indexCampaign">
      <div className="d-flex row align-items-center">
        <div
          className="d-flex col-lg-2 align-items-center my-5"
          style={{marginTop: 20}}
        >
          <Grid
            color="#E6641F"
            stroke="#E6641F"
            fill="#E6641F"
            size={50}
            className="mr-1"
          />
          {/* <img alt="logo" src={Campaign} className="img-fluid mr-2" /> */}
          <h5 className=" mb-0">Chiến dịch</h5>
        </div>
        <div className="col-lg-9">
          <Nav tabs className="my-5">
            {routeDataCenter.length > 0 &&
              routeDataCenter.map(ele => (
                <NavItem key={ele.id}>
                  <NavLink
                    active={active === ele.id}
                    onClick={() => {
                      history.push(`/admin/campaign/${ele.path}`)
                    }}
                    style={{border: 'none'}}
                  >
                    {ele.name}
                  </NavLink>
                </NavItem>
              ))}
          </Nav>
        </div>
      </div>
      <TabContent className="py-50" activeTab={active}>
        {routeDataCenter.length > 0 &&
          routeDataCenter.map(ele => (
            <TabPane tabId={ele.id} key={ele.id}>
              {ele.component}
            </TabPane>
          ))}
      </TabContent>
    </div>
  )
}

export default CampaignPage
