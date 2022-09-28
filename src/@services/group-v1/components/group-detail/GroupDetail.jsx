//**UI */
import {useRouter} from 'next/router'
import {
  Card,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'

//**Component */
import CheveronCircleLeft from '@core/components/icon/cheveron-circle/CheveronCircleLeft'
import UploadCoverApi from 'components/upload-cover/UploadCoverApi'
import ModalUploadCover from 'components/upload-cover/UploadCover'
import ModalInviteFriend from '../modal/ModalInviteFriend'

//**Css */
import styles from './group-detail.module.css'
import MyButton from '@core/components/button/MyButton'
import Intro from './step/Intro'
import NewsFeed from './step/NewsFeed'
import Member from './step/Member'
import Photos from './step/Photos'
import {useState} from 'react'

//**Ctx */
import {useAuthCtx} from 'context/auth'

//**Hook */
import {ProfileQuery} from 'hook/profile'

const GroupDetail = () => {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  let query = router.query?.tab

  //**Ctx */
  const {
    state: {userUid},
  } = useAuthCtx()

  //**query */
  const {data: listFollowing} =
    ProfileQuery.useGetListFollowingsByUserId(userUid)

  const GroupDetailData = [
    {
      id: 'intro',
      item: <Intro />,
    },
    {
      id: 'newsfeed',
      item: <NewsFeed />,
    },
    {
      id: 'members',
      item: <Member />,
    },
    {
      id: 'photos',
      item: <Photos />,
    },
  ]

  return (
    <>
      <Card className="position-relative" style={{marginBottom: '180px'}}>
        <div
          className="position-absolute p-2 d-flex align-items-center cursor-pointer"
          style={{top: '0', left: '0'}}
          onClick={() => router.back()}
        >
          <CheveronCircleLeft width="38px" height="38px" fill="#FCFCFC" />
          <span style={{color: '#FCFCFC'}} className="title-24 ms-2">
            Back
          </span>
        </div>
        <ModalUploadCover />
        <div className="position-relative">
          <div
            style={{maxWidth: '1250px'}}
            className={`${styles.profileHeader} square`}
          >
            <div className="d-flex">
              <div className=" position-relative" style={{minWidth: '100px'}}>
                {/* {auth && (
                  <ModalUploadAvatar  type="avatar"/>
                )} */}

                <img
                  style={{objectFit: 'cover'}}
                  className="rounded"
                  // src={
                  //   profile.avatar
                  //     ? profile.avatar
                  //     : 'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
                  // }
                  src="https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg"
                  width={144}
                  height={144}
                  alt=""
                />
              </div>
              <div className="ms-2">
                <p className="mb-2 title-24 text-color-primary-dark">
                  Group_name
                </p>

                <p className="text-15-500-20 text-color-primary-dark">Detail</p>
              </div>
              <div className="ms-auto" style={{minWidth: '115px'}}>
                <MyButton
                  className="title-16-700-24"
                  color="tertiary"
                  text="Invite"
                  onClick={() => setOpen(true)}
                />
                <MyButton
                  className="title-16-700-24 ms-2"
                  color="primary"
                  text="JoinGroup"
                />
              </div>
            </div>
            <div style={{borderTop: '1px solid #E4E4E6'}} className="py-1 mt-1">
              <Navbar
                container={false}
                className="justify-content-end justify-content-md-between w-100"
                expand="md"
                light
              >
                <div className="profile-tabs d-flex flex-wrap mt-1 mt-md-0 w-100">
                  <Nav className="mb-0" pills>
                    <NavItem>
                      <NavLink
                        className="nav-link-custom"
                        active={query === 'intro'}
                        onClick={() => {
                          router.push(
                            `/group/${router.query?.id || 'id'}?tab=intro`,
                          )
                        }}
                      >
                        <span className="title-16">Intro</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link-custom"
                        active={query === 'newsfeed'}
                        onClick={() => {
                          router.push(
                            `/group/${router.query?.id || 'id'}?tab=newsfeed`,
                          )
                        }}
                      >
                        <span className="title-16">NewsFeed</span>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className="nav-link-custom"
                        active={query === 'members'}
                        onClick={() => {
                          router.push(
                            `/group/${router.query?.id || 'id'}?tab=members`,
                          )
                        }}
                      >
                        <span className="title-16">Members</span>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className="nav-link-custom"
                        active={query === 'photos'}
                        onClick={() => {
                          router.push(
                            `/group/${router.query?.id || 'id'}?tab=photos`,
                          )
                        }}
                      >
                        <span className="title-16">Photos</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Navbar>
            </div>
          </div>
        </div>
      </Card>
      <TabContent
        style={{maxWidth: '1250px'}}
        className="py-50 mx-auto pt-2"
        activeTab={query}
      >
        {GroupDetailData?.map(item => (
          <TabPane tabId={item.id} key={item._key}>
            {item.item}
          </TabPane>
        ))}
      </TabContent>
      {listFollowing && listFollowing.data.length > 0 && (
        <ModalInviteFriend
          data={listFollowing.data}
          open={open}
          toggle={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default GroupDetail
