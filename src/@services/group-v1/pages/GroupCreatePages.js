import React from 'react'
import {Col, Row} from 'reactstrap'
// import PreviewCreateGroup from '../components/create-group/PreviewCreateGroup'
import CreateGroupSideBar from '../components/sidebar/CreateGroupSideBar'
const GroupCreatePages = () => {
  return (
    <>
      <Row className="m-0">
        <Col xl={3} lg={3} md={4} className="ps-0">
          <CreateGroupSideBar />
        </Col>
        <Col xl={9} lg={9} md={8} className="ps-3 d-flex align-items-center">
          {/* <PreviewCreateGroup /> */}
        </Col>
      </Row>
    </>
  )
}

export default GroupCreatePages
