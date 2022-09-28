import React from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {X} from 'react-feather'
import TableCampaignHistory from '@services/campaign/components/datatable/TableCampaignHistory'

const CampaignDetailHistory = ({open, toggle, datas}) => {
  const CloseBtn = <X className="cursor-pointer" size={20} onClick={toggle} />

  return (
    <div>
      <Modal
        isOpen={open}
        toggle={toggle}
        className="modal-dialog-centered modal-xl"
        scrollable
      >
        <ModalHeader toggle={toggle} close={CloseBtn}>
          {(datas && datas.title) || 'thông tin chi tiết của một block'}
        </ModalHeader>
        <ModalBody>
          <TableCampaignHistory datas={datas && datas.history_info} />
        </ModalBody>
        <ModalFooter>
          <Button color="light-danger" onClick={toggle}>
            Đóng
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CampaignDetailHistory
