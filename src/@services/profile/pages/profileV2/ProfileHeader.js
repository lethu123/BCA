import UploadCover from '@core/components/upload-image/UploadCover'
import {dataURItoBlob, uploadMedia} from '@services/ultils'
import {useState} from 'react'
import {AlignJustify, Rss, Info, Image, Users, Edit} from 'react-feather'
import {Card, Collapse, Navbar, Nav, NavItem, NavLink, Button} from 'reactstrap'

import avaDefault from 'assets/images/avatars/avatar-blank.png'
import UploadAvatar from '@core/components/upload-image/UploadAvatar'

const ProfileHeader = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [file, setFile] = useState(null)
  const toggle = () => setIsOpen(!isOpen)

  console.log('data', data)

  const {avatar_url, background_url, name, email} = data

  const handleUpload = async blob => {
    const file = dataURItoBlob(blob)
    const ava = await uploadMedia(file)
    // upload here
  }

  return (
    <Card className="profile-header mb-2">
      <UploadCover
        cover={background_url}
        handleUpload={blob => handleUpload(blob)}
        file={file}
        setFile={setFile}
      />
      <div className="position-relative">
        <div className="profile-img-container d-flex align-items-center">
          <div className="profile-img position-relative">
            <UploadAvatar
              onUpdate={ava => {
                // handle upload avatar
              }}
            />
            <img
              className="rounded img-fluid h-100"
              src={avatar_url || avaDefault}
              alt="Card"
              onError={e => {
                e.target.onerror = null
                e.target.src = avaDefault
              }}
            />
          </div>
          <div className="profile-title ml-3">
            <h2 className="text-white">{name}</h2>
            <p className="text-white">{email}</p>
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
              <Nav className="mb-0" tabs>
                <NavItem>
                  <NavLink className="font-weight-bold" active>
                    <span className="d-none d-md-block">Feed</span>
                    <Rss className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-bold">
                    <span className="d-none d-md-block">About</span>
                    <Info className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-bold">
                    <span className="d-none d-md-block">Photos</span>
                    <Image className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-bold">
                    <span className="d-none d-md-block">Friends</span>
                    <Users className="d-block d-md-none" size={14} />
                  </NavLink>
                </NavItem>
              </Nav>
              <Button color="primary">
                <Edit className="d-block d-md-none" size={14} />
                <span className="font-weight-bold d-none d-md-block">Edit</span>
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </Card>
  )
}

export default ProfileHeader
