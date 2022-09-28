import React from 'react'
import {useParams} from 'react-router-dom'
import {Row, Col} from 'reactstrap'
import SidebarEvent from '../components/SidebarEvent'
import CalendarEvent from './CalendarEvent'
import CreateEvent from './CreateEvent'
import IvitationEvent from './IvitationEvent'
import OrganizationEvent from './OrganizationEvent'
import PastEvent from './PastEvent'
import WillJoinEvent from './WillJoinEvent'
import './SidebarEvent.style.scss'
const Event = () => {
  const {type} = useParams()
  const renderType = param => {
    switch (param) {
      case 'calendar':
        return <CalendarEvent />
      case 'invitation':
        return <IvitationEvent />
      case 'organization':
        return <OrganizationEvent />
      case 'join':
        return <WillJoinEvent />
      case 'past':
        return <PastEvent />
      case 'create-event':
        return <CreateEvent />
      default:
        return <CalendarEvent />
    }
  }

  return (
    <>
      <Row>
        <Col xl={3} md={5} sm={5}>
          <SidebarEvent />
        </Col>
        <Col xl={9} md={7} sm={7}>
          {renderType(type)}
        </Col>
      </Row>
    </>
  )
}

export default Event
