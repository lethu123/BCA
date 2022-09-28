import React, {Fragment, useEffect, useState} from 'react'

// *** Components
import ProfileHeader from './ProfileHeader'
import TimeLine from './timeLine/TimeLine'
import System from './system/System'
import Setting from './setting/Setting'
import Work from './work/Work'
import WorkSpace from './workSpace/WorkSpace'

// *** query
import {UserQuery} from '@services/profile'

//*** Third Libary
import {Row, Col, TabContent, TabPane, Alert} from 'reactstrap'
import {useParams} from 'react-router-dom'
import {getUserData} from 'utility/Utils'

const User = () => {
  const [active, setActive] = useState('1')
  const {id} = useParams()
  const {data: userProfile} = UserQuery.useGetUserProfile(id)
  const userData = getUserData()

  const routeDataCenter = [
    {
      id: '1',
      name: 'Dòng thời gian',
      path: 'feed',
      component: userProfile?.data && (
        <TimeLine isOwner={true} user={userProfile?.data} />
      ),
    },
    {
      id: '2',
      name: 'Workspace',
      path: 'workspace',
      component: <WorkSpace />,
    },
    {
      id: '3',
      name: 'Hệ thống',
      path: 'system',
      component: <System />,
    },
    {
      id: '4',
      name: 'Cài đặt',
      path: 'setting',
      component: <Setting user={userProfile?.data} />,
    },
    {
      id: '5',
      name: 'Công việc',
      path: 'work',
      component: <Work />,
    },
  ]
  const {type} = useParams()
  useEffect(() => {
    switch (type) {
      case 'feed':
        return setActive('1')

      case 'workspace':
        return setActive('2')

      case 'system':
        return setActive('3')

      case 'setting':
        return setActive('4')

      case 'work':
        return setActive('5')

      default:
        return
    }
  }, [type])

  if (!userProfile)
    return (
      <Alert color="danger">
        <div className="alert-body">
          <span className="fw-bold">Người dùng không tồn tại!</span>
        </div>
      </Alert>
    )
  return (
    <Fragment>
      <div id="user-profile">
        <Row>
          <Col sm="12">
            <ProfileHeader
              active={active}
              setActive={setActive}
              routeDataCenter={routeDataCenter}
              user={userProfile?.data}
              isOwner={id === userData?.uid}
            />
          </Col>
        </Row>

        <div>
          {id === userData?.uid ? (
            <TabContent className="py-50" activeTab={active}>
              {routeDataCenter.length > 0 &&
                routeDataCenter.map(ele => (
                  <TabPane tabId={ele.id} key={ele.id}>
                    {ele.component}
                  </TabPane>
                ))}
            </TabContent>
          ) : (
            <TimeLine user={userProfile?.data} />
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default User
