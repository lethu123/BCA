import {Col, Row} from 'reactstrap'
import GroupMainSideBar from '../components/sidebar/GroupMainSideBar'
import GroupList from '../components/GroupList'

const GroupMain = () => {
  return (
    <>
      <Row>
        <Col xl={3} md={5} sm={12}>
          <GroupMainSideBar />
        </Col>
        <Col xl={9} md={7} sm={12}>
          <GroupList />
        </Col>
      </Row>
    </>
  )
}

export default GroupMain
