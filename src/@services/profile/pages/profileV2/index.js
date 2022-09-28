import {Fragment, useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'
import UILoader from '@core/components/ui-loader'
import ProfilePoll from './ProfilePolls'
import ProfileAbout from './ProfileAbout'
import ProfilePosts from './ProfilePosts'
import ProfileHeader from './ProfileHeader'
import {Row, Col, Button, Alert, Badge} from 'reactstrap'
import ProfileTwitterFeeds from './ProfileTwitterFeeds'
import ProfileLatestPhotos from './ProfileLatestPhotos'
import ProfileSuggestedPages from './ProfileSuggestedPages'
import ProfileFriendsSuggestions from './ProfileFriendsSuggestions'

// *** query
import {UserQuery} from '@services/profile'

import '@core/scss/react/pages/page-profile.scss'

const Profile = () => {
  const {id} = useParams()
  const history = useHistory()
  const {data: userProfile, isFetching} = UserQuery.useGetUserProfile(id)

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

  if (!userProfile?.data)
    return (
      <div>
        <Alert color="primary" className="w-50">
          <div className="alert-body">
            <span className="fw-bold">Tài khoản không tồn tại!</span>
          </div>
        </Alert>
        <Badge
          color="light-primary"
          className="cursor-pointer"
          onClick={() => history.goBack()}
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
              <ProfileHeader data={userProfile?.data} />
            </Col>
          </Row>
          <section id="profile-info">
            <Row>
              <Col lg={{size: 3, order: 1}} sm={{size: 12}} xs={{order: 2}}>
                <ProfileAbout data={data.userAbout} />
                <ProfileSuggestedPages data={data.suggestedPages} />
                <ProfileTwitterFeeds data={data.twitterFeeds} />
              </Col>
              <Col lg={{size: 6, order: 2}} sm={{size: 12}} xs={{order: 1}}>
                <ProfilePosts data={data.post} />
              </Col>
              <Col lg={{size: 3, order: 3}} sm={{size: 12}} xs={{order: 3}}>
                <ProfileLatestPhotos data={data.latestPhotos} />
                <ProfileFriendsSuggestions data={data.suggestions} />
                <ProfilePoll data={data.polls} />
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
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
