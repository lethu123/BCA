import {Fragment} from 'react'

import ProfileHeader from './ProfileHeader'
import {Row, Col} from 'reactstrap'

import '@core/scss/react/pages/page-profile.scss'

const Profile = ({data}) => {
  return (
    <Fragment>
      {data !== null ? (
        <div id="user-profile">
          <Row>
            <Col sm="12">
              <ProfileHeader data={data} />
            </Col>
          </Row>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
