import React, {Fragment, useEffect, useRef, useState} from 'react'

import Wizard from '@core/components/wizard'

// *** components ***
import FormEmailAutomationLib from './FormEmailAutomationLib'
import FormEmailAutomationAttachedLink from './FormEmailAutomationAttachedLink'
import FormEmailAutomationSystem from './FormEmailAutomationSystem'
import FormEmailAutomationReview from './FormEmailAutomationReview'

import './Custom.style.scss'

// *** CONTEXT
import {useSettingEmailCtx} from '@services/automation/context'
import {AutomationQuery} from '@services/automation'

const FormEmailAutomation = ({setSetting, setting, id, onDelete, target}) => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  // *** CONTEXT
  const {getSeoLinkSystem} = useSettingEmailCtx()

  useEffect(() => {
    AutomationQuery.getAllMetadataWebsite({limit: 8, url: true}).then(res => {
      getSeoLinkSystem(res)
    })
  }, [])

  const steps = [
    {
      id: 'choose-from-email',
      title: 'Chọn email của hệ thống',
      subtitle: 'Choose email in system',
      content: <FormEmailAutomationSystem stepper={stepper} />,
    },

    {
      id: 'email-lib',
      title: 'Chọn template email từ thư viện',
      subtitle: 'Choose template Email in library',
      content: <FormEmailAutomationLib stepper={stepper} />,
    },

    {
      id: 'attached-link',
      title: 'Link đính kèm',
      subtitle: 'Attached link',
      content: <FormEmailAutomationAttachedLink stepper={stepper} />,
    },
    {
      id: 'review',
      title: 'Xem chi tiết',
      subtitle: 'Review',
      content: (
        <FormEmailAutomationReview
          setSetting={setSetting}
          id={id}
          stepper={stepper}
        />
      ),
    },
  ]

  return (
    <Fragment>
      <div>
        <div className="horizontal-wizard custom-wizard-email">
          <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
        </div>
      </div>
    </Fragment>
  )
}

export default FormEmailAutomation
