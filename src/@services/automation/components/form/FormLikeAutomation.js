import React, {useRef, useState, useEffect} from 'react'
import {Button} from 'reactstrap'

// ** component
import FilterationCondition from '../wizard/steps-reaction/FilterationCondition'
import TypeReaction from '../wizard/steps-reaction/TypeReaction'

// *** Third Library
import Wizard from '@core/components/wizard'
import {FileText, Frown} from 'react-feather'
import {toast} from 'react-toastify'

// *** Scss
import './FormLikeAutomation.style.scss'

const CommentAutomation = ({setSetting, setting, id, onDelete}) => {
  const [isRandom, setIsRandom] = useState(setting?.isRandom || true)
  const [condition, setCondition] = useState(
    (setting && setting.condition) || {c_comment: 3, c_reaction: 5},
  )
  const [reaction, setReaction] = useState(
    (setting && setting.reaction_value) || null,
  )

  useEffect(() => {
    if (setting) {
      setIsRandom(setting?.isRandom)
    }
  }, [setting])
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'Điều kiện lọc',
      subtitle: 'Filteration Condition',
      icon: <FileText size={18} />,
      content: (
        <FilterationCondition
          stepper={stepper}
          type="wizard-modern"
          condition={condition}
          setCondition={setCondition}
          setting={setting}
        />
      ),
    },

    {
      id: 'reaction',
      title: 'Chọn loại reaction',
      subtitle: 'Type Reaction',
      icon: <Frown size={18} />,
      content: (
        <TypeReaction
          stepper={stepper}
          type="wizard-modern"
          setIsRandom={setIsRandom}
          isRandom={isRandom}
          reaction={reaction}
          setReaction={setReaction}
        />
      ),
    },
  ]

  const handleSave = () => {
    if (condition.c_comment < 3 || condition.c_reaction < 5) {
      toast.error('Điều kiện lọc đang bị lỗi')
    } else {
      setSetting(
        {
          ...setting,
          condition,
          isRandom,
          reaction_value: reaction,
        },
        id,
      )
    }
  }

  return (
    <div className="mt-4 formLikeAutomation">
      <div className="modern-horizontal-wizard">
        <Wizard
          type="modern-horizontal"
          ref={ref}
          steps={steps}
          options={{
            linear: false,
          }}
          instance={el => setStepper(el)}
        />
      </div>
      <div className="text-right">
        <Button
          type="submit"
          className="mr-2"
          color="primary"
          onClick={() => handleSave()}
        >
          Lưu
        </Button>
        <Button onClick={() => onDelete(id)} type="button" color="danger">
          Xóa
        </Button>
      </div>
    </div>
  )
}

export default CommentAutomation
