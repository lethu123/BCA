import {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import UILoader from '@core/components/ui-loader'

import ProfilePosts from './GroupPosts'
import ProfileHeader from './GroupHeader'
import {Row, Col, Button, Alert, Badge, TabContent, TabPane} from 'reactstrap'

import ProfileLatestPhotos from './GroupLatestPhotos'
import ProfileFriendsSuggestions from './GroupFriendsSuggestions'
import InstructionGroup from './InstructionGroup'
// *** query
import {GroupQuery} from '@services/group'
import {getUserData} from 'utility/Utils'
// ** assets
import '@core/scss/react/pages/page-profile.scss'
import {useHistory, useParams} from 'react-router-dom'
import FormInviteMember from './FormInviteMember'
import MembersGroup from './MembersGroup'
import SummarySettingGroup from './SummarySettingGroup'

const Profile = () => {
  // *** Routing
  const {id} = useParams()
  const history = useHistory()

  const {uid} = getUserData()
  // const [centeredModal, setCenteredModal] = useState(false)
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  // *** query
  const {data: infoGroup, isFetching} = GroupQuery.useInfoGroup(id, uid)

  // ** theme
  const [data, setData] = useState(null)
  const [block, setBlock] = useState(false)

  const handleBlock = () => {
    setBlock(true)
    setTimeout(() => {
      setBlock(false)
    }, 2000)
  }

  useEffect(() => {
    axios.get('/profile/data').then(response => setData(response.data))
  }, [])

  if (isFetching)
    return (
      <div>
        <Alert color="primary" className="w-50">
          <div className="alert-body">
            <span className="fw-bold">Đang lấy dữ liệu ...</span>
          </div>
        </Alert>
      </div>
    )

  if (!infoGroup?.data)
    return (
      <div>
        <Alert color="primary" className="w-50">
          <div className="alert-body">
            <span className="fw-bold">nhóm không tồn tại!</span>
          </div>
        </Alert>
        <Badge
          color="light-primary"
          className="cursor-pointer"
          onClick={() => history.push('/home/group/kham-pha')}
        >
          Quay lại
        </Badge>
      </div>
    )

  return (
    <Fragment>
      {data !== null ? (
        <div id="user-profile">
          <Row>
            <Col sm="12">
              <ProfileHeader
                active={active}
                toggleActive={toggle}
                data={infoGroup.data}
              />
            </Col>
          </Row>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <section id="profile-info">
                <Row>
                  <Col lg={{size: 3, order: 1}} sm={{size: 12}} xs={{order: 1}}>
                    <InstructionGroup infoGroup={infoGroup.data} />
                  </Col>
                  <Col lg={{size: 6, order: 2}} sm={{size: 12}} xs={{order: 3}}>
                    <ProfilePosts data={data.post} />
                  </Col>
                  <Col lg={{size: 3, order: 3}} sm={{size: 12}} xs={{order: 2}}>
                    <Row>
                      {(infoGroup.data.is_member ||
                        infoGroup.data?.is_owner) && (
                        <Col lg="12" md="6" sm="6">
                          <FormInviteMember />
                          <ProfileFriendsSuggestions data={data.suggestions} />
                        </Col>
                      )}

                      <Col lg="12" md="6" sm="6">
                        <ProfileLatestPhotos data={data.latestPhotos} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center" sm="12">
                    <Button
                      color="primary"
                      className="border-0 mb-1 profile-load-more"
                      size="sm"
                      onClick={handleBlock}
                    >
                      <UILoader
                        blocking={block}
                        overlayColor="rgba(255,255,255, .5)"
                      >
                        <span> Load More</span>
                      </UILoader>
                    </Button>
                  </Col>
                </Row>
              </section>
            </TabPane>
            <TabPane tabId="2">
              <MembersGroup
                owner={infoGroup.data?.owner_id}
                is_member={infoGroup.data?.is_member}
                groupId={infoGroup.data?._id}
              />
            </TabPane>
            <TabPane tabId="3">
              <SummarySettingGroup infoGroup={infoGroup.data} />
            </TabPane>
          </TabContent>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
