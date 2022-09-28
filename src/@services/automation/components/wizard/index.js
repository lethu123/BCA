import {useRef, useState, useCallback} from 'react'
import Wizard from './WizardComponent'
// step

import Condition from './steps/Condition'

import Content from './steps/Content'
// *** scss
import './WizardCustom.style.scss'
import {useSettingCommentCtx} from '@services/automation/context'

const WizardHorizontal = ({activeIndex, setActiveIndex, setting}) => {
  // *** CONTEXT

  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const arrStep = useCallback(
    () => [
      {
        id: 'filteration-condition',
        title: 'Điều kiện lọc',
        subtitle: 'filteration condition',
        content: (
          <Condition
            stepper={stepper}
            type="wizard-horizontal"
            setActiveIndex={setActiveIndex}
          />
        ),
      },
      {
        id: 'add-content',
        title: 'Loại bình luận',
        subtitle: 'Type Comment',
        content: (
          <Content
            stepper={stepper}
            type="wizard-horizontal"
            setActiveIndex={setActiveIndex}
            setting={setting}
          />
        ),
      },
    ],
    [stepper],
  )

  return (
    <div className="horizontal-wizard">
      <Wizard
        instance={el => setStepper(el)}
        ref={ref}
        // options={{
        //   linear: false,
        // }}
        steps={arrStep()}
        customStep={true}
        noShadow
        activeIndex={activeIndex}
      />
    </div>
  )
}

export default WizardHorizontal
