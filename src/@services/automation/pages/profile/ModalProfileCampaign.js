import React from 'react'
import {X} from 'react-feather'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import HistoryCampaign from './HistoryCampaign'

const ModalDemoCampaign = ({modalCampaign, setModalCampaign, data}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setModalCampaign(!modalCampaign)}
    />
  )
  return (
    <div>
      <Modal
        isOpen={modalCampaign}
        toggle={() => setModalCampaign(!modalCampaign)}
        className="modal-dialog-centered modal-xl"
      >
        <ModalHeader
          toggle={() => setModalCampaign(!modalCampaign)}
          close={CloseBtn}
        >
          {data?.title || 'Chi tiết lịch sử hoạt động'}
        </ModalHeader>
        <ModalBody>
          <HistoryCampaign data={data} />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setModalCampaign(!modalCampaign)}
          >
            Accept
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalDemoCampaign
