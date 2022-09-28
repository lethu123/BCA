//**UI */
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  UncontrolledButtonDropdown,
} from 'reactstrap'

import {ChevronDown, Globe, Users, UserX} from 'react-feather'

//**Ctx */
import {useModalCtx} from '@services/news-feed-v1/context/create-post'

//**Component */
import TitleWithLine from '@core/components/title-with-line/TitleWithLine'
// import Category from '../step-modal/category/Category'
import TagPeople from '../step-modal/tag-people/TagPeople'
import AddPhoto from '../step-modal/add-photo/AddPhoto'
import AddVideoPost from '../step-modal/add-vidieo/AddVideoPost'
// import AddPhoto from '../step-modal/add-photo/AddPhoto'
// import CategoryDetail from '../step-modal/category/CategoryDetail'
// import AddVideoPost from '../step-modal/add-vidieo/AddVideoPost'

//**Fake data */
const privacies = {
  data: [
    {
      id: 1,
      content: 'Public',
      code: 'PUBLIC',
      description: 'Anyone on or off hSpace',
      icon: null,
      created_at: '2022-05-16T06:53:40.334Z',
      updated_at: '2022-05-20T07:36:18.872Z',
    },
    {
      id: 2,
      content: 'Public',
      code: 'PUBLIC',
      description: 'Anyone on or off hSpace',
      icon: null,
      created_at: '2022-05-16T06:53:40.334Z',
      updated_at: '2022-05-20T07:36:18.872Z',
    },
    {
      id: 3,
      content: 'Public',
      code: 'PUBLIC',
      description: 'Anyone on or off hSpace',
      icon: null,
      created_at: '2022-05-16T06:53:40.334Z',
      updated_at: '2022-05-20T07:36:18.872Z',
    },
  ],
}

//**Render Privacy */
const renderSwitchPrivacy = code => {
  switch (code) {
    case 'PUBLIC':
      return (
        <>
          <Globe color="#000000" size={15} className="mr-1" />
          <span style={{fontWeight: 'bold'}} className="text-dark">
            Public
          </span>
        </>
      )
    case 'ONLY_ME':
      return (
        <>
          <UserX color="#000000" size={15} className="mr-1" />
          <span style={{fontWeight: 'bold'}} className="text-dark">
            Only Me
          </span>
        </>
      )
    case 'FOLLOWINGS':
      return (
        <>
          <Users color="#000000" size={15} className="mr-1" />
          <span style={{fontWeight: 'bold'}} className="text-dark">
            Followings
          </span>
        </>
      )
    default:
      return (
        <>
          <Globe color="#000000" size={15} className="mr-1" />
          <span style={{fontWeight: 'bold'}} className="text-dark">
            Public
          </span>
        </>
      )
  }
}
const renderPrivacySelector = param => {
  switch (param) {
    case 'Public':
      return <Globe color="#1c3218" size={20} className="mr-1" />
    case 'Only me':
      return <UserX color="#1c3218" size={20} className="mr-1" />
    case 'Followings':
      return <Users color="#1c3218" size={20} className="mr-1" />
    default:
      return <Globe color="#1c3218" size={20} className="mr-1" />
  }
}

//**Render step modal */
const CreateStep = [
  {},
  {
    id: 'Friends',
    // content: <TagPeople userUid={userUid} />,
    content: <TagPeople />,
  },
  {
    id: 'AddPhoto',
    content: <AddPhoto />,
  },
  {
    id: 'Video',
    content: <AddVideoPost />,
  },
]

const CreatePostDetail = () => {
  //**Context */
  const {
    state: {
      isToggleModal,
      stepper,
      id_post,
      img_arr,
      postValue,
      tag_friends,
      with_friends,
      hash_tags,
      privacy,
      post_id,
      embedding_link,
      video,
    },
    toggleModaAction,
    setPositionModal,
    setPostValue,
    toggleSubModalAction,
    deteleImgAction,
    resetFormAction,
    uploadVideoPost,
    deteleVideo,
    setStatePrivacy,
  } = useModalCtx()
  const handleVideo = e => {
    uploadVideoPost(e.target.files)
    setPositionModal(3)
  }
  return (
    <>
      <Modal
        className="modal-dialog-centered custom_modal_job"
        isOpen={isToggleModal}
        toggle={() => {
          toggleModaAction(false)
          resetFormAction()
        }}
        style={{overflowY: 'inherit'}}
        scrollable
      >
        <ModalHeader
          className={`custom_modal_header bg-white pb-2`}
          toggle={() => {
            toggleModaAction(false)
            resetFormAction()
          }}
          style={{border: 'none'}}
        ></ModalHeader>
        <ModalBody className="p-0">
          {stepper === 0 ? (
            <>
              <div className="pt-1 border-bottom pb-2 mb-2">
                <TitleWithLine
                  className="title-24 mb-0"
                  color="#DCF0C6"
                  text="Create post"
                />
              </div>
              <div className="d-flex">
                <div style={{width: '70px', height: '70px'}}>
                  <img
                    className="w-100 h-100 rounded-circle"
                    style={{objectFit: 'cover'}}
                    src="https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-2 custom-create-post-info">
                  <div className="d-flex align-items-center mb-1">
                    <h3 className="text-color-primary-dark m-0">user_name</h3>
                    {with_friends && with_friends.length > 0 && (
                      <h5 className="mb-0">
                        is with
                        {with_friends.map((item, idx) => (
                          <span
                            key={item.id}
                            className="cursor-pointer"
                            onClick={() => setPositionModal(1)}
                          >
                            {item.username}
                            {idx !== with_friends.length - 1 && ','}
                          </span>
                        ))}
                      </h5>
                    )}
                  </div>
                  <UncontrolledButtonDropdown>
                    <DropdownToggle
                      color="gray-1"
                      className="d-inline-flex align-items-center px-2 py-1 rounded-pill cursor-pointer"
                    >
                      {renderSwitchPrivacy('PUBLIC')}
                      <ChevronDown color="#000000" size={15} className="ml-1" />
                    </DropdownToggle>
                    <DropdownMenu
                      style={{backgroundColor: '#F4F5F4', width: '150px'}}
                      className="mt-1"
                    >
                      {privacies.data.map(item => (
                        <DropdownItem
                          style={{backgroundColor: '#F4F5F4'}}
                          className="d-flex align-items-center px-2 py-1 rounded-pill cursor-pointer w-100"
                          onClick={() => setStatePrivacy(item)}
                        >
                          {renderPrivacySelector(item.content)}
                          <span
                            style={{fontWeight: 'bold'}}
                            className="text-dark"
                          >
                            {item.content}
                          </span>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-2 create-post-step-sp-list">
                <div className="create-post-step-sp-item">
                  <p
                    className="d-inline-flex align-items-center cursor-pointer title-20-700-24 mb-0 custom-hover-shinny"
                    onClick={() => setPositionModal(1)}
                  >
                    <i className="fa-solid fa-user-plus mr-1"></i>
                    Tag people
                  </p>
                </div>
                <div className="create-post-step-sp-item">
                  <p
                    className="d-inline-flex align-items-center cursor-pointer title-20-700-24 mb-0 custom-hover-shinny"
                    onClick={() => setPositionModal(2)}
                  >
                    <i className="fa-solid fa-camera mr-1"></i>
                    Photo
                  </p>
                </div>
                <div className="create-post-step-sp-item">
                  <Label
                    for={'video'}
                    className="d-inline-flex align-items-center cursor-pointer title-20-700-24 mb-0 custom-hover-shinny"
                  >
                    <i className="fa-solid fa-photo-film mr-1"></i>
                    Video
                    <Input
                      type="file"
                      hidden
                      id="video"
                      name="video"
                      accept="video/*"
                      onChange={e => {
                        handleVideo(e)
                      }}
                    />
                  </Label>
                </div>
              </div>
            </>
          ) : (
            CreateStep[stepper].content
          )}
        </ModalBody>
      </Modal>
    </>
  )
}

export default CreatePostDetail
