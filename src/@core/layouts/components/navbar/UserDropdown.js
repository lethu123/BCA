// *** React Imports
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

// *** Custom Components
import Avatar from '@core/components/avatar'

// *** Utils
import {isUserLoggedIn} from 'utility/Utils'

// *** Store & Actions
import {useDispatch} from 'react-redux'
import {handleLogout} from 'redux/actions/auth'

// *** Third Party Components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap'
import {LogIn} from 'react-feather'
import {useHistory} from 'react-router-dom'

// *** Default Avatar Image
import defaultAvatar from 'assets/images/avatars/avatar-blank.png'
import {UserQuery} from '@services/profile'

const UserDropdown = () => {
  const userLogin =
    (localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData'))) ||
    null

  const {data: userProfile} = UserQuery.useGetUserProfile(userLogin?.uid)
  // *** Store Vars
  const dispatch = useDispatch()

  // *** State
  const history = useHistory()

  if (!userProfile?.data) return null
  return (
    <>
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle
          href="/"
          tag="a"
          className="nav-link dropdown-user-link"
          onClick={e => e.preventDefault()}
        >
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name font-weight-bold">
              {userProfile?.data?.name ||
                userProfile?.data?.username ||
                'Khách'}
            </span>
            <span className="user-status">{userProfile?.data?.role}</span>
          </div>
          <Avatar
            img={userProfile?.data?.avatar_url || defaultAvatar}
            imgHeight="40"
            imgWidth="40"
            status="online"
            onError={e => {
              e.target.onerror = null
              e.target.src = defaultAvatar
            }}
          />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/user/${userProfile?.data?.uid}/profile/feed`}
          >
            <span className="align-middle"> My Profile</span>
          </DropdownItem>
          {/* 
          <DropdownItem tag={Link} to="#">
            <span className="align-middle"> My Tasks</span>
          </DropdownItem>
          <DropdownItem tag={Link} to="#">
            <span className="align-middle">My Message</span>
          </DropdownItem>
          <DropdownItem tag={Link} to="#">
            <span className="align-middle">Account Settings</span>
          </DropdownItem> */}
          <hr />
          <DropdownItem
            tag="dev"
            onClick={() => {
              dispatch(handleLogout())
              history.push('/login')
            }}
          >
            <LogIn size={14} className="mr-75" />
            <span className="align-middle"> Sign Out</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  )
}

export default UserDropdown
