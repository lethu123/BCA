import React, {useState} from 'react'
import {useParams} from 'react-router'
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap'
import {TableCalendarCampaign} from '@services/campaign'
const CustomerLeadHistory = () => {
  const [active, setActive] = useState('1')
  const {uid} = useParams()

  const toggle = tab => {
    setActive(tab)
  }
  return (
    <TableCalendarCampaign uid={uid} />
    // <Row>
    //   <Col md="2" sm="12">
    //     <Nav pills vertical>
    //       <NavItem>
    //         <NavLink
    //           active={active === '1'}
    //           onClick={() => {
    //             toggle('1')
    //           }}
    //         >
    //           Chiến dịch
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           active={active === '2'}
    //           onClick={() => {
    //             toggle('2')
    //           }}
    //         >
    //           SMS
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           active={active === '3'}
    //           onClick={() => {
    //             toggle('3')
    //           }}
    //         >
    //           Email
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink
    //           active={active === '4'}
    //           onClick={() => {
    //             toggle('4')
    //           }}
    //         >
    //           Call
    //         </NavLink>
    //       </NavItem>
    //     </Nav>
    //   </Col>
    //   <Col md="10" sm="12">
    //     <TabContent activeTab={active}>
    //       <TabPane tabId="1">
    //         <TableCalendarCampaign uid={uid} />
    //       </TabPane>
    //       <TabPane tabId="2">
    //         <p>
    //           Pudding candy canes sugar plum cookie chocolate cake powder
    //           croissant. Carrot cake tiramisu danish candy cake muffin croissant
    //           tart dessert. Tiramisu caramels candy canes chocolate cake sweet
    //           roll liquorice icing cupcake. Sesame snaps wafer marshmallow
    //           danish dragée candy muffin jelly beans tootsie roll. Jelly beans
    //           oat cake chocolate cake tiramisu sweet.
    //         </p>
    //       </TabPane>
    //       <TabPane tabId="3">
    //         <p>
    //           Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies
    //           dragée. Chocolate bar liquorice cheesecake cookie chupa chups
    //           marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream
    //           powder tootsie roll cake. Macaroon brownie lemon drops croissant
    //           marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon
    //           bear claw gummi bears apple pie.
    //         </p>
    //       </TabPane>
    //     </TabContent>
    //   </Col>
    // </Row>
  )
}
export default CustomerLeadHistory
