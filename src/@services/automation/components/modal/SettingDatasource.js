import React, {useCallback} from 'react'
import {Modal, ModalHeader, ModalBody, Badge} from 'reactstrap'
import {X} from 'react-feather'
// ** modal
import FormNotiAutomation from '@services/automation/components/form/FormNotiAutomation'
import FormSMSAutomation from '@services/automation/components/form/FormSMSAutomation'
import FormEmailAutomation from '@services/automation/components/form/FormEmailAutomation'
import FormChatAutomation from '@services/automation/components/form/FormMessengerAutomation'
import FormPeriodAutomation from '@services/automation/components/form/FormPeriodAutomation'
import FormTimelineAutomation from '@services/automation/components/form/FormTimelineAutomation'
import FormBranchAutomation from '@services/automation/components/form/FormBranchAutomation'
import FormBranchingCondition from '../step'
import FormBranchedRelative from '@services/automation/components/form/FormBranchedRelative'
import FormDatasource from '@services/automation/components/form/FormDatasource'
import FormCommentAutomation from '@services/automation/components/form/FormCommentAutomation'
import FormLikeAutomation from '@services/automation/components/form/FormLikeAutomation'
import FormPostAutomation from '@services/automation/components/form/FormPostAutomation'
import FormAutoTask from '@services/automation/components/form/FormAutoTask'

import './SettingDatasource.style.scss'

const SettingDatasourceModal = ({
  size = 'xl',
  modal,
  toggleModal,
  title,
  type,
  setting,
  setSetting,
  id,
  target,
  onDelete,
  source,
  dataSource,
}) => {
  const renderProps = useCallback(
    (Component, ...rest) => {
      return (
        <Component
          setting={setting}
          setSetting={setSetting}
          id={id}
          target={target}
          onDelete={onDelete}
          source={source}
          dataSource={dataSource}
        />
      )
    },
    [setting, setSetting, id, target, onDelete, source, dataSource],
  )

  const renderContentBody = useCallback(() => {
    switch (type) {
      case 'notification_action':
        return renderProps(FormNotiAutomation)
      case 'sms_action':
        return renderProps(FormSMSAutomation)
      case 'email_action':
        return renderProps(FormEmailAutomation)
      case 'messenger_action':
        return renderProps(FormChatAutomation)
      case 'duration_time':
        return renderProps(FormPeriodAutomation)
      case 'timeline':
        return renderProps(FormTimelineAutomation)
      case 'branching':
        return renderProps(FormBranchAutomation)
      case 'branching_condition':
        return renderProps(FormBranchingCondition)
      case 'fork_interaction':
        return renderProps(FormBranchedRelative)
      case 'send_messenger_facebook_action':
        return renderProps(FormChatAutomation)
      case 'comment_post_facebook_action':
      case 'comment_post_group_facebook_action':
      case 'comment_post_page_facebook_action':
      case 'comment_post_sasam_action':
      case 'reply_comment_sasam_action':
        return renderProps(FormCommentAutomation)
      case 'like_post_facebook_action':
      case 'like_post_group_facebook_action':
      case 'like_post_page_facebook_action':
      case 'like_comment_sasam_action':
        return renderProps(FormLikeAutomation)
      case 'write_post_group_facebook_action':
      case 'create_post_sasam_action':
        return renderProps(FormPostAutomation)
      case 'auto_task':
        return renderProps(FormAutoTask)
      default:
        return renderProps(FormDatasource)
    }
  }, [renderProps, type])

  const listBadges = ['sms', 'email', 'messenger', 'comment', 'add_friend']

  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      style={type === 'email_action' ? {maxWidth: '80%'} : {}}
      className={`modal-dialog-centered modal-${size}
        ${
          [
            'comment_post_facebook_action',
            'comment_post_group_facebook_action',
            'comment_post_page_facebook_action',
            'comment_post_sasam_action',
            'reply_comment_sasam_action',
          ].includes(type) && 'modal-xl'
        } ${['like_post_facebook_action'].includes(type) && 'modal-lg'}`}
    >
      <ModalHeader
        close={
          <div className="cursor-pointer" onClick={toggleModal}>
            <X />
          </div>
        }
        toggle={toggleModal}
      >
        {title}
        {type === 'fork_interaction' &&
          listBadges.find(item => source?.includes(item)) && (
            <Badge color="warning" className="ml-4 text-capitalize text-white">
              {listBadges.find(item => source?.includes(item))}
            </Badge>
          )}
      </ModalHeader>
      <ModalBody>{renderContentBody()}</ModalBody>
    </Modal>
  )
}

export default SettingDatasourceModal
