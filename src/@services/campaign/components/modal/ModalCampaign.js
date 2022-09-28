import React, {useRef, useState, useEffect} from 'react'
import {X} from 'react-feather'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import Wizard from '@core/components/wizard'

// *** Component

import CampaignStep1 from '../tabs/campaignSales/CampaignStep1'
import CampaignStep2 from '../tabs/campaignSales/CampaignStep2'
// query
import {AutomationQuery} from '@services/automation'

const ModalCampaignSales = ({open, toggle, item}) => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const [requestData, setRequestData] = useState({})

  const {data: autojobs} = AutomationQuery.useGetListAutojobSelect()

  useEffect(() => {
    if (item) {
      setRequestData(requestData => ({...requestData, ...item}))
    } else {
      setRequestData({})
    }
  }, [item])

  const steps = [
    {
      id: 'campain',
      title: 'Chiến dịch',
      subtitle: 'Campain',
      content: (
        <CampaignStep1
          stepper={stepper}
          type="wizard-horizontal"
          autojobs={autojobs}
          requestData={requestData}
          setRequestData={values => setRequestData({...requestData, ...values})}
        />
      ),
    },
    {
      id: 'time',
      title: 'Cài đặt thời gian',
      subtitle: 'Time',
      content: (
        <CampaignStep2
          stepper={stepper}
          type="wizard-horizontal"
          requestData={requestData}
          closeModal={toggle}
        />
      ),
    },
  ]

  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={() => toggle(false)} />
  )

  return (
    <div>
      <Modal
        isOpen={open}
        toggle={() => toggle(!open)}
        className="modal-dialog-centered modal-xl"
        scrollable
      >
        <ModalHeader close={CloseBtn} toggle={() => toggle(!open)}>
          <span className="text-primary">
            {item ? 'Cập nhật chiến dịch' : 'Tạo chiến dịch'}{' '}
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="horizontal-wizard create-input-data mb-0">
            <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalCampaignSales
