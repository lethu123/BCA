import React from 'react'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'

const ModalCreate = ({
  modal2,
  toggleModal2,
  valueCreate,
  setValueCreate,
  handleCreateValueMap,
}) => {
  return (
    <Modal
      isOpen={modal2}
      toggle={toggleModal2}
      className="modal-dialog-centered"
      backdrop={false}
    >
      <ModalHeader toggle={toggleModal2}>Create new value map</ModalHeader>
      <ModalBody>
        <Input
          value={valueCreate}
          type="text"
          placeholder="Value Map Name..."
          style={{paddingLeft: 15}}
          onChange={e => setValueCreate(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <Row style={{margin: 0, justifyContent: 'center', width: '100%'}}>
          <Button color="light" onClick={toggleModal2}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => handleCreateValueMap()}
            style={{marginLeft: 15}}
          >
            Create
          </Button>
        </Row>
      </ModalFooter>
    </Modal>
  )
}

export default ModalCreate
