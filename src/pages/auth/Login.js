// ** React Imports
import {useContext, useSate, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

// ** Custom Hookst
import {useSkin} from 'utility/hooks/useSkin'
import useJwt from 'auth/jwt/useJwt'

// ** Third Party Components
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import {useForm, Controller} from 'react-hook-form'
import {
  // Facebook,
  // Twitter,
  // Mail,
  // GitHub,
  // HelpCircle,
  Coffee,
  X,
} from 'react-feather'

// ** Actions
import {handleLogin} from 'redux/actions/auth'

// ** Context
import {AbilityContext} from 'utility/context/Can'

// ** Custom Components
import Avatar from '@core/components/avatar'
import InputPasswordToggle from '@core/components/input-password-toggle'

// ** Utils
import {deviceId, getHomeRouteForLoggedInUser} from 'utility/Utils'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Input,
  Label,
  // Alert,
  Button,
  // CardText,
  CardTitle,
  Spinner,
  // UncontrolledTooltip,
} from 'reactstrap'

const ToastContent = ({t, name, role}) => {
  return (
    <div className="d-flex">
      <div className="me-1">
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <h6>{name}</h6>
          <X
            size={12}
            className="cursor-pointer"
            onClick={() => toast.dismiss(t.id)}
          />
        </div>
        <span>
          You have successfully logged in as {role} to B-Alpha. Now you can
          start to explore. Enjoy!
        </span>
      </div>
    </div>
  )
}

const serializeAbility = privileges => {
  let data = []

  if (privileges === null) return []
  Object.keys(privileges).forEach(MODULE => {
    data.push({action: 'READ', subject: MODULE})
    if (privileges[MODULE] && Object.keys(privileges[MODULE]).length > 0) {
      Object.keys(privileges[MODULE]).forEach(FEATURE => {
        let listFeatures = privileges[MODULE][FEATURE]
        if (listFeatures && listFeatures.length > 0) {
          listFeatures.forEach(OBJECT => {
            data.push({
              action: OBJECT.fea_code,
              subject: `${MODULE}_${FEATURE}`,
            })
          })
        }
      })
    }
  })

  return data
}

const Login = () => {
  // *** State
  const [isLoading, setIsLoading] = useState(false)

  // ** Hooks
  const {skin} = useSkin()
  const dispatch = useDispatch()
  const history = useHistory()
  const ability = useContext(AbilityContext)
  const {
    control,
    setError,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    setIsLoading(true)

    if (Object.values(data).every(field => field.length > 0)) {
      let dataSubmit = {
        email: data.email,
        password: data.password,
        device_id: deviceId(),
      }

      useJwt
        .login(dataSubmit)
        .then(res => res.data)
        .then(res => {
          const data = {
            ...res,
            ability: serializeAbility(res.privileges),
            accessToken: res.token?.access_token,
            refreshToken: res.token?.access_token,
          }

          if (res.roles && res.roles.length > 0) {
            data.role =
              res.roles[0].rol_code && res.roles[0].rol_code === 'FULL_ACCESS'
                ? 'admin'
                : 'member'
            data.ability = [
              ...data.ability,
              {action: 'READ', subject: 'DASHBOARD'},
            ]
          } else {
            data.role = 'member'
          }

          data.ability.push({action: 'READ', subject: 'TEST'})

          dispatch(handleLogin(data))

          ability.update(data.ability)
          history.push(getHomeRouteForLoggedInUser(data.role))
          // toast(t => (
          //   <ToastContent
          //     t={t}
          //     role={data.role}
          //     name={data.fullName || data.username || 'Admin'}
          //   />
          // ))
          setIsLoading(false)
        })
        .catch(err => {
          setIsLoading(false)
          console.log(err)
        })
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
          })
        }
      }
    }
  }

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/">
          <img
            width={150}
            src="https://b-alpha.vn/templates/protostar/images/logo-vertical.svg"
            alt=""
          />
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome to BCA
            </CardTitle>

            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Controller
                  id="email"
                  name="email"
                  control={control}
                  render={({field}) => (
                    <Input
                      autoFocus
                      type="text"
                      placeholder="john@example.com"
                      invalid={errors.email && true}
                      {...field}
                    />
                  )}
                />
                {console.log('errors?.email?.message', errors)}
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/forgot-password">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <Controller
                  id="password"
                  name="password"
                  control={control}
                  render={({field}) => (
                    <InputPasswordToggle
                      className="input-group-merge"
                      invalid={errors.password && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Remember Me
                </Label>
              </div>
              {!isLoading ? (
                <Button type="submit" color="primary" block>
                  Sign in
                </Button>
              ) : (
                <Button color="primary" block>
                  <Spinner color="white" size="sm" type="grow" />
                  <span className="ms-50">Loading...</span>
                </Button>
              )}
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
            {/* <div className="divider my-2">
              <div className="divider-text">or</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              <Button color="facebook">
                <Facebook size={14} />
              </Button>
              <Button color="twitter">
                <Twitter size={14} />
              </Button>
              <Button color="google">
                <Mail size={14} />
              </Button>
              <Button className="me-0" color="github">
                <GitHub size={14} />
              </Button>
            </div> */}
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
