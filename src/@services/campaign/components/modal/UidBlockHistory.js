import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import TableUidBlockHistory from '@services/campaign/components/datatable/TableUidBlockHistory'

const UidBlockHistoryModal = ({open, toggle, data}) => {
  return (
    <Modal
      isOpen={open}
      toggle={toggle}
      className={'modal-dialog-centered modal-lg'}
    >
      <ModalHeader toggle={toggle}>
        {data && data.title ? data.title : 'Thông tin chi tiết của 1 block'}
      </ModalHeader>
      <ModalBody>
        <TableUidBlockHistory data={data} />
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle} outline>
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default UidBlockHistoryModal
