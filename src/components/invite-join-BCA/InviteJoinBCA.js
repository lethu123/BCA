import {Fragment, useEffect, useState} from 'react'
import {ThumbsUp, Link, Check} from 'react-feather'

// *** Component ui
import {Badge, Button, Card, Input, InputGroup, Spinner} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Avatar from '@core/components/avatar'

import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {toast} from 'react-toastify'

// *** Mutation
import {UserMutation} from '@services/profile'

// *** Style
import './invite.style.scss'
import themeConfig from 'configs/themeConfig'

const MySwal = withReactContent(Swal)

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .required('Email người tham gia không được để trống'),
})

const ToastSuccess = () => (
  <Fragment>
    <div className="toastify-header pb-0">
      <div className="title-wrapper">
        <Avatar size="sm" color="success" icon={<Check />} />
        <h6 className="toast-title">Copied To Clipboard !</h6>
      </div>
    </div>
  </Fragment>
)

const InviteJoinBCA = () => {
  const userLocal = localStorage.getItem('userData')
  // ***State
  const [email, setEmail] = useState('')

  // *** Mutate
  const {
    mutate: onCreateUserReference,
    isLoading,
    isSuccess,
  } = UserMutation.useCreateProfileReference(() => {})

  let ref_code = null
  if (userLocal) {
    let data = JSON.parse(userLocal)
    ref_code = data.uid
  }
  const refLink = `${window.location.origin}/login`

  const onCopy = () => {
    toast.success(<ToastSuccess />, {
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
    })
  }

  const handleHTMLAlert = () => {
    return MySwal.fire({
      title: '<strong>Mời thành viên thành công</strong>',
      icon: 'success',
      html: (
        <div>
          <p>
            Bạn đã mời <span className="text-primary">{email}</span> tham gia
            vào cộng đồng {themeConfig.app.company}.
          </p>
          <p className="mb-1">Bạn có thể gửi liên kết bên dưới để mời: </p>
          <div
            style={{
              border: '1px solid #E6641F',
              padding: 20,
              borderRadius: 5,
              display: 'inline-block',
            }}
          >
            <p>Chia sẻ liên kết này để thêm người vào Workspace của bạn</p>
            <p className="text-primary">
              <Link size={16} className="text-primary" />
              <a
                href={refLink + `?ref_code=${ref_code}`}
                target="_blank"
                rel="noreferrer"
              >
                {`${window.location.origin}/register?ref_code=${ref_code}`}
              </a>
            </p>
            <CopyToClipboard
              onCopy={onCopy}
              text={`${window.location.origin}/register`}
            >
              <Badge color="light-primary" className="cursor-pointer">
                Sao chép liên kết
              </Badge>
            </CopyToClipboard>
          </div>
          {/* <p style={{width: '70%', margin: '0 auto'}}>
            Bạn có thể chia sẻ liên kết với tối đa 300 người và liên kết hết hạn
            sau 2 tuần.Đặt lại liên kết
          </p>
          <Badge className="cursor-pointer" color="light-warning mt-2">
            Reset Link
          </Badge> */}
        </div>
      ),
      focusConfirm: false,
      confirmButtonText: (
        <span className="align-middle">
          <ThumbsUp className="mr-50" size={15} />
          <span className="align-middle">OK!</span>
        </span>
      ),
      // cancelButtonText: <ThumbsDown size={15} />,
      customClass: {
        confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
    })
  }

  useEffect(() => {
    if (isSuccess) {
      handleHTMLAlert()
    }
  }, [isSuccess])

  return (
    <Card className="p-1 inviteJoinBCA">
      <h5>Mời bạn</h5>
      <p style={{fontSize: 12, marginBottom: 0}} className="text-muted">
        Mời bạn tham giao vào cộng đồng {themeConfig.app.company}
      </p>
      <Formik
        initialValues={{
          email: '',
        }}
        // validationSchema={formSchema}
        onSubmit={({email}) => {
          let dataRequest = {
            email,
            register_link: refLink,
            ref_code,
          }
          // console.log(dataRequest)
          setEmail(email)
          onCreateUserReference(dataRequest)
          // handleHTMLAlert()
        }}
      >
        {({errors, touched, setFieldValue, isValid, dirty}) => (
          <Form>
            <InputGroup className="mt-1 ">
              <Field
                className="form-control form-control-lg form-control-solid border"
                placeholder="Email người tham gia ..."
                style={{borderRadius: 5}}
                type="email"
                name="email"
              />

              {isLoading ? (
                <Button color="primary" className="ml-2">
                  <Spinner color="white" size="sm" type="grow" />
                </Button>
              ) : (
                <Button
                  color="primary"
                  type="submit"
                  disabled={!isValid || !dirty}
                  className="ml-2 cursor-pointer"
                >
                  Mời
                </Button>
              )}
            </InputGroup>
            <ErrorMessage
              name="email"
              component="div"
              className="field-error text-danger mt-1"
            />
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default InviteJoinBCA
