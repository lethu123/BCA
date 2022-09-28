import React, {useEffect, useState} from 'react'
import {MessageCircle, RefreshCw, UserPlus} from 'react-feather'

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// *** Components
import Post from './Post'
import {ModalInviteMember} from '@services/group'
import InfomationGroup from './InfomationGroup'
import MembersGroup from './MembersGroup'
// import SettingGroup from './SettingGroup'

// *** Mutation
import {GroupMutation} from '@services/group'
import {useHistory} from 'react-router-dom'
import SummarySettingGroup from './SummarySettingGroup'
import {getUserData} from 'utility/Utils'

const MySwal = withReactContent(Swal)

const TabMenuGroup = ({infoGroup}) => {
  // *** Routing
  const history = useHistory()
  const {uid} = getUserData()

  // *** States
  const [active, setActive] = useState(1)
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)

  // *** Mutation
  const {mutate: deleteGroup, isSuccess} = GroupMutation.useDeleteGroup()
  const {mutate: mutateRequestJoinGroup} = GroupMutation.useRequestJoinGroup()

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const handleConfirmDeleteGroup = async () => {
    return await MySwal.fire({
      title: 'Nhập tên nhóm của bạn để xóa',
      input: 'text',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
      buttonsStyling: false,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      showLoaderOnConfirm: true,
    }).then(function (result) {
      if (result.value === infoGroup.group_name) {
        deleteGroup({group_id: infoGroup._id, owner_id: infoGroup.owner_id})
      }
    })
  }

  useEffect(() => {
    if (isSuccess) {
      return history.push('/home/group/kham-pha')
    }
  }, [isSuccess])

  const router = [
    {
      id: 1,
      path: 'Giới thiệu',
      component: <InfomationGroup infoGroup={infoGroup} />,
    },
    {id: 2, path: 'Bài viết', component: <Post />},
    {
      id: 3,
      path: 'Thành viên',
      component: (
        <MembersGroup owner={infoGroup.owner_id} groupId={infoGroup?._id} />
      ),
    },
    {
      id: 4,
      hidden: !infoGroup.is_owner,
      path: 'Cài đặt',
      component: <SummarySettingGroup infoGroup={infoGroup} />,
    },
  ]

  return (
    <React.Fragment>
      <Row>
        <Col md="7">
          <Nav tabs>
            {router
              .filter(item => !item.hidden)
              .map(item => (
                <NavItem key={item.id}>
                  <NavLink
                    active={active === item.id}
                    onClick={() => {
                      toggle(item.id)
                    }}
                    style={{border: 'none', backgroundColor: 'transparent'}}
                  >
                    {item.path}
                  </NavLink>
                </NavItem>
              ))}
          </Nav>
        </Col>
        <Col md="5" className="mt-4 mt-md-0">
          <div className="d-flex align-items-center justify-content-end ">
            <a
              href="https://dev.chat.hspace.biz/dashboard"
              target="_blank"
              rel="noreferrer"
              className="mr-2"
            >
              <Button.Ripple color="primary">
                <MessageCircle size={16} color="white" className="mr-1" />
                Chat
              </Button.Ripple>
            </a>
            {infoGroup.is_owner ? (
              <>
                <Button.Ripple
                  color="success"
                  className="mr-2"
                  onClick={toggleModal}
                >
                  <UserPlus size={16} color="white" className="mr-1" />
                  Thêm thành viên
                </Button.Ripple>
                <Button.Ripple
                  color="danger"
                  className="mr-2"
                  outline
                  onClick={handleConfirmDeleteGroup}
                >
                  Xóa
                </Button.Ripple>
              </>
            ) : (
              <Button.Ripple
                disabled={infoGroup.is_requested}
                color="success"
                className="mr-2"
                onClick={() =>
                  mutateRequestJoinGroup({
                    group_id: infoGroup._id,
                    user_id: uid,
                  })
                }
              >
                <RefreshCw size={16} color="white" className="mr-1" />
                Yêu cầu tham gia
              </Button.Ripple>
            )}
          </div>
        </Col>
      </Row>

      <TabContent className="py-50" activeTab={active}>
        {router
          .filter(item => !item.hidden)
          .map(item => (
            <TabPane tabId={item.id} key={item.id}>
              {item.component}
            </TabPane>
          ))}
      </TabContent>

      <ModalInviteMember
        infoGroup={infoGroup.data}
        modal={modal}
        toggleModal={toggleModal}
      />
    </React.Fragment>
  )
}
export default TabMenuGroup
