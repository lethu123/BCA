//**UI */
import {
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormFeedback,
  Input,
  Label,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {ChevronDown, Eye, EyeOff, Globe, Users, UserX} from 'react-feather'
import {useState} from 'react'

//**Component */
// import MyButton from '@core/components/button/MyButton'
// import Link from 'next/link'
// import SelectAdvanced from '@core/components/select/SelectAdvanced'
// import {useRouter} from 'next/router'

//**Hooks *//
// import {PostsQuery} from 'hook/posts'

//**Ctx */
// import {useGroupCtx} from 'context/group'

//**form hook */
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
// import {useAuthCtx} from 'context/auth'
import CheveronCircleLeft from '@services/event-v1/components/cheveron-circle/CheveronCircleLeft'
import { Link } from 'react-router-dom';


//** Render Dropdown */
const renderShowPrivacy = code => {
  switch (code) {
    case 'PUBLIC':
      return (
        <>
          <Globe size={25} className="me-1" />
          <span>Public</span>
        </>
      )
    case 'ONLY_ME':
      return (
        <>
          <UserX size={25} className="me-1" />
          <span>Only Me</span>
        </>
      )
    case 'FOLLOWINGS':
      return (
        <>
          <Users size={25} className="me-1" />
          <span>Followings</span>
        </>
      )
    default:
      return 'Choosen Group Privacy Policy'
  }
}

const renderSelectPrivacy = code => {
  switch (code) {
    case 'PUBLIC':
      return <Globe size={25} className="me-1" />
    case 'ONLY_ME':
      return <UserX size={25} className="me-1" />
    case 'FOLLOWINGS':
      return <Users size={25} className="me-1" />
    default:
      return <Globe size={25} className="me-1" />
  }
}

const renderShowPrivacyOnlyMe = code => {
  switch (code) {
    case 'DISPLAY_GROUP':
      return (
        <>
          <Eye size={25} className="me-1" />
          <span>Display</span>
        </>
      )
    case 'HIDDEN_GROUP':
      return (
        <>
          <EyeOff size={25} className="me-1" />
          <span>Hidden</span>
        </>
      )

    default:
      return 'Choosen Type Hidden'
  }
}

const dataOnlyMe = [
  {
    id: 1,
    code: 'DISPLAY_GROUP',
    description: 'Display',
    content: 'Hide groups',
  },
  {
    id: 2,
    code: 'HIDDEN_GROUP',
    description: 'Hidden',
    content: 'Hide groups',
  },
]

//**form hook */
const GroupSchema = yup.object().shape({
  group_name: yup.string().required('Group Name is a required field'),
  privacy: yup.object().required('Privacy is a required field'),
})

// ** Custom Hooks
const defaultValues = {
  group_name: '',
}

const CreateGroupSideBar = () => {
  const [typePrivacyOnlyMe, setTypePrivacy] = useState(false)
  // const router = useRouter()

  // //**Ctx */
  // const {
  //   state: {userLogin},
  // } = useAuthCtx()
  // const {
  //   state: {privacy, privacy_onlyMe, group_name},
  //   setGroupStatePrivacy,
  //   setGroupStatePrivacyOnlyMe,
  //   setGroupName,
  // } = useGroupCtx()

  //**Query */
  // const {data: privacies} = PostsQuery.useGetListPrivacyCreatePost()

  const onSubmit = data => {
    console.log('data', data)
  }

  // ** Hooks
  const {
    reset,
    setError,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm({
    defaultValues: defaultValues,
    mode: 'onChange',
    resolver: yupResolver(GroupSchema),
  })

  const handleReset = () => {
    reset({
      group_name: '',
    })
  }
  return (
    <>
      <Card
        className="pt-2 p-2 rounded w-100"
        style={{
          position: 'sticky',
          top: '105px',
          height: '100vh',
        }}
      >
        <PerfectScrollbar>
          <CardBody className="p-0 d-flex flex-column h-100">
            <div
              className="p-2 d-flex align-items-center cursor-pointer mb-2"
              // onClick={() => router.back()}
            >
              <CheveronCircleLeft width="38px" height="38px" fill="#000000" />
              <span style={{color: '#000000'}} className="title-24 ms-2">
                Back
              </span>
            </div>
            <p className="mb-2 title-24 text-color-black100">Tạo Nhóm</p>
            <div className="d-flex align-items-center">
              <div className="me-2" style={{width: '36px', height: '36px'}}>
                <img
                  className="w-100 h-100 rounded-circle"
                  style={{objectFit: 'cover'}}
                  src={
                    
                      'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
                  }
                  // alt={userLogin?.username || userLogin?.email}
                />
              </div>
              <div>
                <p className="text-14">
                  {/* {userLogin?.username || userLogin?.email} */}
                </p>
                <p className="text-12">Quản trị viên</p>
              </div>
            </div>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="auth-register-form mt-2 h-100 d-flex flex-column"
            >
              <div className="mb-2">
                <Label
                  for="group-name"
                  className="d-flex align-items-center mb-1"
                >
                  <p className="title-16-700-24 m-0 me-1 mb-0"></p>
                </Label>
                <Controller
                  id="group_name"
                  name="group_name"
                  control={control}
                  render={({field}) => (
                    <Input
                      {...field}
                      placeholder="Group Name"
                      invalid={errors.group_name && true}
                      // value={group_name}
                      // onChange={e => setGroupName(e.target.value)}
                    />
                  )}
                />
                {errors.group_name && (
                  <FormFeedback className="text-12">
                    {errors.group_name.message}
                  </FormFeedback>
                )}
              </div>
              <div className="mb-2">
                <UncontrolledButtonDropdown className="w-100">
                  <DropdownToggle
                    color="gray"
                    className="rounded p-2 text-start d-flex align-items-center text-color-black100"
                  >
                    {/* {renderShowPrivacy(privacy.code)} */}
                    <ChevronDown
                      className="ms-auto"
                      color="#000000"
                      size={24}
                    />
                  </DropdownToggle>
                  <DropdownMenu tag="ul" className="w-100 py-2">
                    {/* {privacies &&
                      privacies.data &&
                      privacies.data.map(item => (
                        <DropdownItem
                          key={item.id}
                          className="w-100 d-flex align-items-center"
                          onClick={() => {
                            // setGroupStatePrivacy(item)
                            // setGroupStatePrivacyOnlyMe({})
                          }}
                        >
                          {renderSelectPrivacy(item.code)}
                          <div className="ms-2">
                            <p className="title-16-700-24">{item.content}</p>
                            <p className="text-16">{item.description}</p>
                          </div>
                        </DropdownItem>
                      ))} */}
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
                <p className="mt-1 text-16">
                  To protect member privacy, private group cannot be changed to
                  public.
                  <Link href="/">
                    <span className="cursor-pointer text-15-500-20 text-primary">
                      Looking for more information
                    </span>
                  </Link>
                </p>
              </div>
              {(
                <div className="mb-2">
                  <UncontrolledButtonDropdown className="w-100">
                    <DropdownToggle
                      color="gray"
                      className="rounded p-2 text-start d-flex align-items-center text-color-black100"
                    >
                      {/* {renderShowPrivacyOnlyMe(privacy_onlyMe.code)} */}
                      <ChevronDown
                        className="ms-auto"
                        color="#000000"
                        size={24}
                      />
                    </DropdownToggle>
                    <DropdownMenu tag="ul" className="w-100 py-2">
                      {dataOnlyMe.map(item => (
                        <DropdownItem
                          key={item.id}
                          class
                          className="w-100 d-flex align-items-center"
                          // onClick={() => setGroupStatePrivacyOnlyMe(item)}
                        >
                          {item.code === 'DISPLAY_GROUP' ? (
                            <Eye size={25} />
                          ) : item.code === 'HIDDEN_GROUP' ? (
                            <EyeOff size={25} />
                          ) : (
                            ''
                          )}
                          <div className="ms-2">
                            <p className="title-16-700-24">{item.content}</p>
                            <p className="text-16">{item.description}</p>
                          </div>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              )}

              <p className="d-flex align-items-center mb-1">
                <Label className="title-16-700-24 m-0 me-1" for="select">
                  Mời bạn bè
                </Label>
              </p>
              {/* <div className="w-100">
                <SelectAdvanced />
              </div> */}
              {/* <MyButton
                color="gray-1"
                className="title-16-700-24 mt-1 w-100 mt-auto"
                text="Tạo"
                textcl="#999999"
                type="submit"
              /> */}
            </Form>
          </CardBody>
        </PerfectScrollbar>
      </Card>
    </>
  )
}

export default CreateGroupSideBar
