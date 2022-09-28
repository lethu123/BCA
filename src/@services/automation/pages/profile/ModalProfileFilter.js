import WizardFilter from '@services/automation/components/step'
import React, {useState} from 'react'
import {X} from 'react-feather'
import {Modal, ModalBody, ModalHeader} from 'reactstrap'

const ModalDemo = ({openModal, setOpenModal, dataSubmit, setDataSubmit}) => {
  const [showWizard, setShowWizard] = useState(false)
  // const handleSubmit = useCallback(
  //   configs_customer => {
  //     setSetting(
  //       {
  //         ...dataSubmit,
  //         configs_customer,
  //       },
  //       id,
  //     )
  //   },
  //   [dataSubmit, id, setSetting],
  // )

  // ** Custom close btn
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setOpenModal(!openModal)}
    />
  )

  return (
    <Modal
      isOpen={openModal}
      toggle={() => setOpenModal(!openModal)}
      className="modal-dialog-centered modal-xl"
    >
      <ModalHeader toggle={() => setOpenModal(!openModal)} close={CloseBtn}>
        {dataSubmit?.name}
      </ModalHeader>
      <ModalBody>
        <WizardFilter
          dataSubmit={dataSubmit}
          setDataSubmit={setDataSubmit}
          onSubmit={
            ''
            // handleSubmit
          }
          handlePrevious={() => setShowWizard(false)}
          isEdit={dataSubmit._id === null}
        />
      </ModalBody>
    </Modal>
  )
}

export default ModalDemo
