//**UI */
import {Col, Row} from 'reactstrap'
import {useEffect, useState} from 'react'

//**Component */
import GroupHeader from './header/GroupHeader'
import GroupHeaderTabWithSearch from './header/GroupHeaderTabWithSearch'
// import GroupCard from './GroupCard'
// import ModalInviteFriend from './modal/ModalInviteFriend'

//**Ctx */
import dataFriend from './modal/dataFriend'
import data from './data'
import GroupCard from './GroupCard'
import ModalInviteFriend from './modal/ModalInviteFriend'
// import {useAuthCtx} from 'context/auth'

//**Hook */
// import {GroupsQuery} from 'hook/group'
// import {ProfileQuery} from 'hook/profile'

const GroupList = () => {
  //**State */
  const [open, setOpen] = useState(false)

  //**Ctx */
  // const {
  //   state: {userUid},
  // } = useAuthCtx()

  //**Query */
  // const {data: listGroup} = GroupsQuery.useGetGroupByUserId(userUid)
  // const {data: listFollowing} =
  //   ProfileQuery.useGetListFollowingsByUserId(userUid)

  return (
    <>
      <GroupHeader />
      <GroupHeaderTabWithSearch />
      <Row>
        {data.map(item => (
          <Col className="mb-4" xl={4} lg={6} md={6} sm={12} key={item.id}>
            <GroupCard openModal={() => setOpen(true)} data={item} />
          </Col>
        ))}
      </Row>
      <ModalInviteFriend
        data={dataFriend}
        open={open}
        toggle={() => setOpen(false)}
      />
    </>
  )
}

export default GroupList
