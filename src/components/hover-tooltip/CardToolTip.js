import MyAvatar from '@core/components/avatar/MyAvatar'
import MyBadge from '@core/components/badge/MyBadge'
import MyButton from '@core/components/button/MyButton'
import {useAuthCtx} from 'context/auth'
import {ProfileMutation} from 'hook/profile'
import React, {useEffect, useState} from 'react'
import {Navigation, Tool} from 'react-feather'
import {Col, Row} from 'reactstrap'

const CardToolTip = ({data, open, toggle}) => {
  const [isFollow, setIsFollow] = useState(() =>
    data ? data.is_following : false,
  )
  //**Query and Ctx */
  const {
    state: {userUid},
  } = useAuthCtx()

  // *** Mutations */
  const {mutate: onFollow, isSuccess} = ProfileMutation.useFollow(userUid)

  useEffect(() => {
    if (isSuccess) {
      setIsFollow(!isFollow)
    }
  }, [isSuccess])

  return (
    <div
      className="mb-1 position-absolute p-2 rounded d-flex flex-column"
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      style={{
        transition: 'all 0.3s',
        width: 'max-content',
        minWidth: '330px',
        minHeight: '180px',
        backgroundColor: '#FFFFFF',
        zIndex: '1',
        top: '-200px',
        left: '-5px',
        opacity: `${open ? '1' : '0'}`,
        visibility: `${open ? 'visible' : 'hidden'}`,
        boxShadow:
          '1px 2px 6px rgba(0, 0, 0, 0.1),1px 2px 6px rgba(0, 0, 0, 0.1),1px 2px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="d-flex">
        <MyAvatar
          style={{width: '60px', height: '60px'}}
          img_alt={data?.name ? data?.name : data?.username}
          img_src={
            data?.avatar
              ? data?.avatar
              : 'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
          }
        />
        <div className="text-start ms-2">
          <p className="title-20 mb-1">
            {data?.name ? data?.name : data?.username}
          </p>
          <MyBadge color="gray-1" text="Data Analyst" />
        </div>
      </div>
      <div className="text-start mt-1">
        {data?.educations &&
          data?.educations.slice(0, 1).map(item => (
            <p key={item.degree} className="d-flex">
              <Tool size={15} className="me-1" />
              <span className="text-12">{item.degree}</span>
            </p>
          ))}

        {data?.address && (
          <p className="d-flex">
            <Navigation size={15} className="me-1" />
            <span className="text-12">{data?.address}</span>
          </p>
        )}
      </div>
      {userUid !== data?.user_id ? (
        <Row className="mt-1">
          <Col md={5}>
            <MyButton
              className="w-100 p-1 mt-auto"
              color={'tertiary'}
              text={isFollow ? 'Unfollow' : 'Follow'}
              onClick={() =>
                onFollow({
                  user: userUid,
                  target_user: data.user_id,
                })
              }
              fz="text-12"
            />
          </Col>
          {/* <Col md={5}>
                <MyButton
                  className="w-100 p-1"
                  color="gray-1"
                  text="Message"
                  fz="text-12"
                  textcl="#1c3218"
                />
              </Col>
              <Col md={2}>
                <Dropdown
                  className="w-100 h-100"
                  isOpen={dropdownOpen}
                  toggle={toggle}
                >
                  <DropdownToggle
                    tag="a"
                    onClick={toggle}
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                    className="position-relative dropdownToggle"
                  >
                    <MyButton
                      className="w-100 h-100 text-10-600-12 p-1 d-flex align-items-center justify-content-center"
                      color="gray-1"
                      icon={<MoreHorizontal color="#1c3218" size={15} />}
                    />
                  </DropdownToggle>
                  <DropdownMenu
                    style={{width: '180px'}}
                    className="p-2 rounded"
                    end
                    tag="ul"
                  >
                    <li className="d-flex align-items-center title-16-700-24 cursor-pointer">
                      <UserX size={20} className="me-1" />
                      Report
                    </li>
                  </DropdownMenu>
                </Dropdown>
              </Col> */}
        </Row>
      ) : (
        <Row className="mt-1">
          <Col md={5}>
            <MyButton
              className="w-100 p-1 mt-auto"
              color={'tertiary'}
              text={'Edit profile'}
              onClick={() => {}}
              fz="text-12"
            />
          </Col>
        </Row>
      )}
    </div>
  )
}

export default CardToolTip
