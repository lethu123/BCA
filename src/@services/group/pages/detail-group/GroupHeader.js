import {useEffect, useState} from 'react'
import {
  AlignJustify,
  Rss,
  Users,
  Settings,
  Camera,
  MessageCircle,
  Delete,
} from 'react-feather'
import {
  Card,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
  Badge,
  Label,
  Input,
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import UploadCover from '@core/components/upload-image/UploadCover'
// ** assets
import avatarGroup from 'assets/images/home/avatarGroup.png'
// *** Mutation
import {GroupMutation} from '@services/group'
import {getUserData} from 'utility/Utils'
import {useHistory} from 'react-router-dom'
import {dataURItoBlob, uploadMedia} from '@services/ultils'
import UploadAvatar from '@core/components/upload-image/UploadAvatar'

const MySwal = withReactContent(Swal)

const GroupHeader = ({data, active, toggleActive}) => {
  const {uid} = getUserData()
  const history = useHistory()

  const [isOpen, setIsOpen] = useState(false)
  const [file, setFile] = useState(null)

  const toggle = () => setIsOpen(!isOpen)

  // *** Mutation
  const {mutate: deleteGroup, isSuccess} = GroupMutation.useDeleteGroup()
  const {mutate: mutateRequestJoinGroup} = GroupMutation.useRequestJoinGroup()
  const {mutate: uploadImage} = GroupMutation.useUpdateImageGroup()

  useEffect(() => {
    if (isSuccess) {
      return history.push('/home/group/kham-pha')
    }
  }, [isSuccess])

  const {
    group_cover_image,
    group_avatar,
    group_name,
    group_type,
    is_owner,
    is_requested,
    owner_id,
    _id,
  } = data

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
      if (result.value === group_name) {
        deleteGroup({group_id: _id, owner_id: owner_id})
      }
    })
  }

  const handleUpload = async blob => {
    const file = dataURItoBlob(blob)
    const ava = await uploadMedia(file)
    uploadImage({
      group_id: _id,
      owner_id,
      cover_image: ava,
    })
  }

  return (
    <Card className="profile-header mb-2">
      <UploadCover
        cover={group_cover_image}
        handleUpload={blob => handleUpload(blob)}
        file={file}
        setFile={setFile}
      />

      <div className="position-relative">
        <div className="profile-img-container d-flex align-items-center">
          <div className="profile-img position-relative">
            <UploadAvatar
              onUpdate={ava => {
                uploadImage({
                  group_id: _id,
                  owner_id,
                  avatar_image: ava,
                })
              }}
            />
            <img
              className="rounded img-fluid h-100"
              src={group_avatar || avatarGroup}
              alt="Card"
              onError={e => {
                e.target.onerror = null
                e.target.src = avatarGroup
              }}
            />
          </div>
          <div className="profile-title ml-3">
            <h2 className="text-white">{group_name}</h2>
            <div>
              {is_owner && (
                <Badge color="warning" className="text-white mr-1 mb-1">
                  Nhóm của bạn
                </Badge>
              )}

              {!!group_type && (
                <Badge color="danger" className="text-white mb-1">
                  {group_type === 'PUBLIC' ? 'Nhóm công khai' : 'Nhóm kín'}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="profile-header-nav">
        <Navbar
          className="justify-content-end justify-content-md-between w-100"
          expand="md"
          light
        >
          <Button color="" className="btn-icon navbar-toggler" onClick={toggle}>
            <AlignJustify size={21} />
          </Button>
          <Collapse isOpen={isOpen} navbar>
            <div className="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0">
              <Nav className="mb-1" pills>
                <NavItem>
                  <NavLink
                    active={active === '1'}
                    onClick={() => {
                      toggleActive('1')
                    }}
                    className="font-weight-bold"
                  >
                    <span className="d-none d-md-block">Bảng tin</span>
                    <Rss className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="font-weight-bold"
                    active={active === '2'}
                    onClick={() => {
                      toggleActive('2')
                    }}
                  >
                    <span className="d-none d-md-block">Thành viên</span>
                    <Users className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
                {is_owner && (
                  <NavItem>
                    <NavLink
                      className="font-weight-bold"
                      active={active === '3'}
                      onClick={() => {
                        toggleActive('3')
                      }}
                    >
                      <span className="d-none d-md-block">Cài đặt</span>
                      <Settings className="d-block d-md-none" size={14} />
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
              <div className="d-flex align-items-center">
                <a
                  href="https://dev.chat.hspace.biz/dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="primary" className="mr-1 mb-1">
                    <MessageCircle className="d-block d-md-none" size={14} />
                    <span className="font-weight-bold d-none d-md-block">
                      Chat
                    </span>
                  </Button>
                </a>
                {is_owner ? (
                  <>
                    <Button.Ripple
                      color="danger"
                      className="mr-1 mb-1"
                      outline
                      onClick={handleConfirmDeleteGroup}
                    >
                      <Delete className="d-block d-md-none" size={14} />
                      <span className="font-weight-bold d-none d-md-block">
                        Xóa nhóm
                      </span>
                    </Button.Ripple>

                    <Button
                      tag={Label}
                      color="secondary"
                      type="button"
                      className="mb-1"
                    >
                      <Camera className="d-block d-md-none" size={14} />
                      <span className="font-weight-bold d-none d-md-block">
                        Đổi ảnh bìa
                      </span>
                      <Input
                        type="file"
                        id="uploadCoverRef"
                        onChange={e => {
                          setFile(e.target.files?.[0])
                        }}
                        hidden
                        accept="image/*"
                      />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      disabled={is_requested}
                      onClick={() =>
                        mutateRequestJoinGroup({
                          group_id: _id,
                          user_id: uid,
                        })
                      }
                      color="success"
                      className="mr-1 mb-1"
                    >
                      <MessageCircle className="d-block d-md-none" size={14} />
                      <span className="font-weight-bold d-none d-md-block">
                        Yêu cầu tham gia
                      </span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </Card>
  )
}

export default GroupHeader
