import RadioField from 'components/form/RadioField'
import SelectField from 'components/form/SelectField'
import TextareaField from 'components/form/TextareaField'
import React from 'react'
import {ArrowRight} from 'react-feather'
import {Button, Col, Row} from 'reactstrap'

// *** CONTEXT
import {useSettingEmailCtx} from '@services/automation/context'

const FormEmailAutomationSystem = ({stepper}) => {
  const {settingSendEmail} = useSettingEmailCtx()
  return (
    <div>
      <Row>
        <Col md="6">
          <SelectField
            name="email_system_send"
            label="Chọn email của hệ thống"
            isSearchable
            placeholder="Chọn email ..."
            // isMulti
            options={[
              {
                label: 'admin1@gmail.com',
                value: 'admin1@gmail.com',
              },
              {
                label: 'admin2@gmail.com',
                value: 'admin2@gmail.com',
              },
            ]}
            onChange={(name, value) => {
              settingSendEmail({name, value: value.value})
            }}
          />
        </Col>
        <Col md="6">
          <TextareaField
            // minRows={2}
            maxLength={40}
            name="title"
            label="Tiêu đề"
            placeholder="Nhập tiêu đề ..."
            onChange={(name, value) => settingSendEmail({name, value})}
          />
        </Col>
        <Col md="6">
          <RadioField
            name="send_email_mode"
            label="Chọn chế độ"
            // helpText="Some help text goes here"
            // color="warning"
            // outline
            // accent
            inline
            options={[
              {
                value: 'cc',
                label: 'CC',
                size: 'lg',
                checked: true,
              },
              {
                value: 'bcc',
                label: 'BCC',
                size: 'lg',
              },
            ]}
            onChange={(name, value) => settingSendEmail({name, value})}
          />
        </Col>
      </Row>
      <div className="text-right mt-20">
        <Button.Ripple
          type="submit"
          color="primary"
          className="btn-next"
          size="sm"
          onClick={() => {
            stepper.next()
          }}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
          <ArrowRight size={14} className="align-middle ml-5"></ArrowRight>
        </Button.Ripple>
      </div>
    </div>
  )
}

export default FormEmailAutomationSystem
