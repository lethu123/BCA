import React, {useCallback, useState} from 'react'
import {Filter, PlusCircle, X} from 'react-feather'
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap'

//***  filter table
import TableAutoFilter from '../components/table/TableAutoFilter'

// *** Filter
import WizardFilter from '../components/step/'

// *** Mutation
import {AutomationMutation} from '@services/automation/'

const INITIALSTATE = {
  _id: null,
  name: '',
  description: '',
  table_type: '',
  account: [],
  filter: {},
}

const AutomationFilter = () => {
  // *** STATE
  const [openModal, setOpenModal] = useState(false)
  const [dataSubmit, setDataSubmit] = useState(INITIALSTATE)

  const handleResetModal = () => {
    setDataSubmit(INITIALSTATE)
    setOpenModal(false)
  }

  // *** MUTATION
  const {mutate: createFilter, isLoadingCreate} =
    AutomationMutation.useCreateFilter(handleResetModal)
  const {mutate: updateFilter, isLoadingUpdate} =
    AutomationMutation.useUpdateFilter(handleResetModal)

  // *** Handle function submit
  const handleSubmit = useCallback(
    customer_settings => {
      let dataRequest = {
        name: dataSubmit.name,
        description: dataSubmit.description,
        configs_customer: JSON.stringify(customer_settings),
        account: JSON.stringify(dataSubmit.account.map(acc => acc._id)),
        filters: JSON.stringify(dataSubmit.filter),
        table_type: JSON.stringify(dataSubmit.table_type),
      }

      let formData = new FormData()
      Object.keys(dataRequest).map(key =>
        formData.append(key, dataRequest[key]),
      )

      if (dataSubmit._id) {
        // Call api cập nhật
        updateFilter({data: formData, _id: dataSubmit._id})
      } else {
        createFilter(formData)
      }
    },
    [createFilter, dataSubmit, updateFilter],
  )

  const toggle = state => setOpenModal(state)

  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={() => toggle(false)} />
  )

  return (
    <div style={{backgroundColor: '#fff'}}>
      <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
        <div className="mt-5 mb-2">
          <div className="text-right mb-3">
            <Button.Ripple
              color="success"
              className="mr-5"
              onClick={() => {
                setDataSubmit(INITIALSTATE)
                toggle(true)
              }}
            >
              <PlusCircle size={20} className="mr-2" /> Tạo bộ lọc
            </Button.Ripple>
          </div>
        </div>
        <TableAutoFilter
          setDataSubmit={setDataSubmit}
          setOpenModal={setOpenModal}
        />
      </div>
      <Modal
        scrollable
        isOpen={openModal}
        toggle={() => toggle(false)}
        className={'modal-dialog-centered modal-xl'}
      >
        <ModalHeader close={CloseBtn} toggle={() => toggle(false)}>
          <Filter size={16} className="mr-2" />
          <span className="align-middle ms-25">
            {dataSubmit.id ? 'Cập nhật' : 'Cài đặt'} bộ lọc
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="horizontal-wizard create-input-data mb-0">
            <WizardFilter
              dataSubmit={dataSubmit}
              setDataSubmit={setDataSubmit}
              onSubmit={handleSubmit}
              isLoadingSubmit={isLoadingCreate || isLoadingUpdate}
            />
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default AutomationFilter
