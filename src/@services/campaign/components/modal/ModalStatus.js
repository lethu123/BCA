import RadioField from 'components/form/RadioField'
import {useState} from 'react'
import {X} from 'react-feather'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'

const ModalStatus = ({open, toggle, listStatus, confirm}) => {
  const CloseBtn = <X className="cursor-pointer" size={20} onClick={toggle} />

  const [id, setId] = useState(null)

  return (
    <>
      <Modal isOpen={open} toggle={toggle} className="modal-dialog-centered">
        <ModalHeader close={CloseBtn} toggle={toggle}>
          Thay đổi trạng thái
        </ModalHeader>
        <ModalBody>
          <RadioField
            name="radio"
            label=""
            options={
              listStatus
                ? listStatus.map(el => ({value: el._id, label: el.name}))
                : []
            }
            onChange={(name, value) => {
              setId(value)
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              confirm(id)
              toggle()
            }}
          >
            Chọn
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ModalStatus
