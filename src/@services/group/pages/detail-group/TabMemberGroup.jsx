import React from 'react'

import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
  Alert,
} from 'reactstrap'
import {MoreHorizontal, Trash} from 'react-feather'

// ** query
import {GroupQuery, GroupMutation} from '@services/group'
import {UserQuery} from '@services/user'

import img from 'assets/images/avatars/avatar-blank.png'
import {Link} from 'react-router-dom'
import Avatar from '@core/components/avatar'

const TabMemberGroup = ({groupId, owner, isMember}) => {
  const {data, isFetching} = GroupQuery.useMembersGroup(groupId)
  const {data: users} = UserQuery.useGetListAllUserSys()
  const {mutate: mutateRemoveMember} = GroupMutation.useRemoveMemberGroup()

  if (!data?.data) return null

  const members = users?.data.filter(item =>
    data?.data.members.includes(item.user_id),
  )
  if (isFetching)
    return (
      <Alert color="primary" className="w-50">
        <div className="alert-body">
          <span className="fw-bold">Đang lấy dữ liệu ...</span>
        </div>
      </Alert>
    )
  if (!members) return null
  return (
    <div>
      {members?.length > 0 && (
        <Row className="">
          {members.map(item => (
            <div className="col-xl-4 col-md-6 mb-2" key={item.user_id}>
              {/*begin::Card*/}
              <div className="card card-custom gutter-b h-100 mb-0">
                {/*begin::Body*/}
                <div className="card-body ">
                  {/*begin::Toolbar*/}
                  {isMember && (
                    <div className="d-flex justify-content-end">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="span">
                          <MoreHorizontal />
                        </DropdownToggle>
                        <DropdownMenu right>
                          {data?.data.owner_id === owner && (
                            <DropdownItem
                              onClick={() =>
                                mutateRemoveMember({
                                  group_id: groupId,
                                  owner_id: owner,
                                  list_user_ids: [item.user_id],
                                })
                              }
                              tag={'div'}
                            >
                              <Trash
                                size={20}
                                className="text-danger cursor-pointer"
                              />
                              <span className="align-middle ml-2 text-danger">
                                Xóa thành viên
                              </span>
                            </DropdownItem>
                          )}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  )}

                  {/*end::Toolbar*/}
                  {/*begin::User*/}
                  <div className="d-flex align-items-center mb-2">
                    {/*begin::Pic*/}
                    <div className="flex-shrink-0 mr-2 mt-lg-0 mt-3">
                      <Avatar
                        img={item.avatar || img}
                        size="xl"
                        onError={e => {
                          e.target.onerror = null
                          e.target.src = img
                        }}
                      />
                    </div>
                    {/*end::Pic*/}
                    {/*begin::Title*/}
                    <div className="d-flex flex-column">
                      <Link
                        to={`/user/${item.user_id}/profile/feed`}
                        className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0"
                      >
                        {item.profile?.name}
                      </Link>
                    </div>
                  </div>
                  {/*end::User*/}

                  {/*begin::Info*/}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-dark-75 font-weight-bolder mr-2">
                        Email:
                      </span>
                      <span className="text-muted text-hover-primary">
                        {item.email}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-cente my-1">
                      <span className="text-dark-75 font-weight-bolder mr-2">
                        Phone:
                      </span>
                      <span className="text-muted text-hover-primary">
                        {item.profile?.phone_number}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-dark-75 font-weight-bolder mr-2">
                        Location:
                      </span>
                      <span className="text-muted font-weight-bold">
                        {item.profile?.address}
                      </span>
                    </div>
                  </div>
                  {/*end::Info*/}

                  <div
                    className="btn btn-block btn-sm bg-light-warning font-weight-bolder text-uppercase py-2"
                    data-toggle="modal"
                    data-target="#kt_chat_modal"
                  >
                    write message
                  </div>
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Card*/}
            </div>
          ))}
        </Row>
      )}
    </div>
  )
}

export default TabMemberGroup
