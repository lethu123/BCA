import React, {useEffect} from 'react'
// *** Third Libary
import {Col, Alert, Button, Badge} from 'reactstrap'
import {AlertCircle} from 'react-feather'
import WizardComponent from '../wizard'
import {toast} from 'react-toastify'

// *** CONTEXT
import {useSettingCommentCtx} from '@services/automation/context/'
import {useState} from 'react'

const FormCommentAutomation = ({
  setSetting,
  setting,
  id,
  onDelete,
  target,
  dataSource,
}) => {
  // *** CONTEXT
  const {state, add_friend} = useSettingCommentCtx()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    console.log(dataSource)

    if (dataSource && dataSource.account) {
      add_friend(dataSource.account)
    }
  }, [dataSource])

  let targetForkInteraction =
    target?.length > 0 &&
    target.find(el => el.id && el.id.includes('fork_interaction'))
  let idTargetForkInteraction = targetForkInteraction?.id || false

  const handleSave = () => {
    if (state.condition.c_comment < 3 || state.condition.c_reaction < 5) {
      toast.error('Điều kiện lọc đang bị lỗi')
    } else {
      setSetting({...state}, id)
    }
  }

  return (
    <div>
      <div className="text-center">
        {state.accounts.length > 0 &&
          state.accounts.map(item => (
            <Badge color="warning" className="mr-3 cursor-pointer text-white">
              {item.username}
            </Badge>
          ))}
      </div>
      {state.accounts.length > 0 && (
        <div className="mt-3 customWizard">
          <WizardComponent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setting={setting}
          />
        </div>
      )}

      <Col sm={12}>
        <hr />
      </Col>
      <Col md="12" className="m-auto">
        {idTargetForkInteraction && (
          <Alert color="danger">
            <div className="alert-body py-0">
              <AlertCircle size={15} />{' '}
              <span className="ml-1">
                <strong>{targetForkInteraction.title}</strong> đã được liên kết,
                không thể xóa!
              </span>
            </div>
          </Alert>
        )}
        <div className="text-right">
          <Button
            type="submit"
            className="mr-2"
            color="primary"
            onClick={handleSave}
          >
            Lưu
          </Button>
          <Button
            onClick={() => onDelete(id)}
            type="button"
            color="danger"
            disabled={idTargetForkInteraction}
            style={{
              cursor: idTargetForkInteraction ? 'not-allowed' : 'pointer',
            }}
          >
            Xóa
          </Button>
        </div>
      </Col>
    </div>
  )
}

export default FormCommentAutomation
