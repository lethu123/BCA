import {ArrowLeft} from 'react-feather'
import {Button, CardBody, Col, Row} from 'reactstrap'
import parser from 'html-react-parser'

// *** CONTEXT
import {useSettingEmailCtx} from '@services/automation/context'
import {Link} from 'react-router-dom'
import AttachedLinkItem from './AttachedLinkItem'

import ReactDOMServer from 'react-dom/server'
import {useEffect} from 'react'

const AttachedLinkComponent = ({state}) => (
  <div>
    {state.type_attached_link === 'link_system' &&
      state.seo_link_system?.length > 0 && (
        <Row className="py-2">
          {state.seo_link_system?.map(item => (
            <Col
              xl={state.is_use_template_builder ? '6' : '3'}
              lg={state.is_use_template_builder ? '6' : '4'}
              key={item._id}
              className="my-2"
            >
              <AttachedLinkItem classNameCard="h-100" data={item} />
            </Col>
          ))}
        </Row>
      )}

    {state.type_attached_link === 'link_external' &&
      state.seo_link_external?.length > 0 && (
        <Row className="py-5">
          {state.seo_link_external?.map(item => (
            <Col
              xl={state.is_use_template_builder ? '6' : '3'}
              lg={state.is_use_template_builder ? '6' : '4'}
              key={item._id}
              className="my-2"
            >
              <AttachedLinkItem classNameCard="h-100" data={item} />
            </Col>
          ))}
        </Row>
      )}
  </div>
)

const FormEmailAutomationReview = ({setSetting, id, stepper}) => {
  // *** CONTEXT
  const {state, settingSendEmail} = useSettingEmailCtx()

  const html = ReactDOMServer.renderToStaticMarkup(
    <AttachedLinkComponent state={state} />,
  )

  useEffect(() => {
    settingSendEmail({
      name: 'email_content_review',
      value: state.email_content.replaceAll('{{LINKS}}', html),
    })
    settingSendEmail({
      name: 'html_template_email',
      value: state.email_template?.html.replaceAll('{{LINKS}}', html),
    })
  }, [html, state.email_content, state.email_template?.html])

  console.log('state', state)

  return (
    <>
      <div>
        <div className="cursor-pointer card ">
          <CardBody>
            <h5>{state.title}</h5>
            {/*begin::Message Heading*/}
            <div className="d-flex  py-6 flex-column flex-md-row flex-lg-column flex-xxl-row justify-content-between">
              <div className="d-flex align-items-center">
                <span className="symbol symbol-50 mr-4">
                  <span
                    style={{
                      backgroundImage:
                        'url("https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/avatar-s-11.1d46cc62.jpg")',
                    }}
                  />
                </span>
                <div className="d-flex flex-column flex-grow-1 flex-wrap mr-2">
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="font-size-lg font-weight-bolder text-dark-75 text-hover-primary mr-2"
                    >
                      Chris Muller
                    </Link>
                    <small className="font-weight-bold text-muted">
                      {`< ${state.email_system_send} >`}
                    </small>
                  </div>
                  <div className=" ">
                    <span className="font-weight-bold text-muted cursor-pointer">
                      to someone
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex my-2 my-xxl-0 align-items-md-center align-items-lg-start align-items-xxl-center flex-column flex-md-row flex-lg-column flex-xxl-row">
                <div className="font-weight-bold text-muted mx-2">
                  Jul 15, 2019, 11:19AM
                </div>
              </div>
            </div>
            {/*end::Message Heading*/}
            <div className=" pt-3 pb-6  ">
              {/* content email */}
              {state.is_use_template_builder ? (
                <div>
                  <div
                    className="d-flex justify-content-center w-50"
                    style={{marginLeft: '50%', transform: 'translateX(-50%)'}}
                  >
                    {parser(state.html_template_email || '')}
                  </div>
                </div>
              ) : (
                <div>{parser(state.email_content_review)}</div>
              )}

              {/* attached link */}
            </div>
          </CardBody>
        </div>
      </div>
      {/* button */}
      <div className="text-right mt-5">
        <Button.Ripple
          color="secondary"
          outline
          className="btn-prev"
          onClick={() => stepper.previous()}
        >
          <ArrowLeft
            size={14}
            className="align-middle mr-sm-3 mr-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          type="submit"
          onClick={() => {
            console.log('submit', {
              email_system_send: state.email_system_send,
              title: state.title,
              send_email_mode: state.send_email_mode,
              content: state.is_use_template_builder
                ? state.html_template_email
                : state.email_content_review,
            })
            setSetting(
              {
                email_system_send: state.email_system_send,
                title: state.title,
                send_email_mode: state.send_email_mode,
                content: state.is_use_template_builder
                  ? state.html_template_email
                  : state.email_content_review,
              },
              id,
            )
          }}
          color="primary"
          className="btn-next ml-3"
        >
          <span className="align-middle d-sm-inline-block d-none">Lưu</span>
        </Button.Ripple>
      </div>
    </>
  )
}

export default FormEmailAutomationReview
