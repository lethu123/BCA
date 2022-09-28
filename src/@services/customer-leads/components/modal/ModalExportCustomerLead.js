import React, {useState} from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  CustomInput,
  Spinner,
} from 'reactstrap'
import XLSX from 'xlsx'

// *** query
import {CustomerLeadsQuery} from '@services/customer-leads'

const ModalExportCustomerLead = ({
  modalExport,
  toggleModal,
  pages,
  data,
  filter,
  debouncedValue,
  currentPage,
}) => {
  const [fileName, setFileName] = useState('')
  const [fileFormat, setFileFormat] = useState('xlsx')

  const {data: dataExport, isLoading: isLoadingExport} =
    CustomerLeadsQuery.useListProfileLeadExports(
      debouncedValue,
      currentPage + 1,
      data?.metadata?.num_pages ? data.metadata.num_pages * 20 : 0,
      filter,
      debouncedValue || Object.keys(filter).length,
    )

  const handleExport = () => {
    toggleModal()
    let fileType = `${fileName}.${fileFormat}`
    const ws = XLSX.utils.json_to_sheet(dataExport?.data || [])
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws)
    XLSX.writeFile(wb, fileType)
  }

  return (
    <Modal
      isOpen={modalExport}
      toggle={() => toggleModal()}
      className="modal-dialog-centered"
      onClosed={() => setFileName('')}
    >
      <ModalHeader toggle={() => toggleModal()}>
        Xuất {dataExport?.data?.length || 0} dữ liệu của {pages} trang
      </ModalHeader>
      <ModalBody>
        {!isLoadingExport ? (
          <>
            <FormGroup>
              <Input
                type="text"
                value={fileName}
                onChange={e => setFileName(e.target.value)}
                placeholder="Enter File Name"
              />
            </FormGroup>
            <FormGroup>
              <CustomInput
                type="select"
                id="selectFileFormat"
                name="customSelect"
                value={fileFormat}
                onChange={e => setFileFormat(e.target.value)}
              >
                <option>xlsx</option>
                <option>csv</option>
                <option>txt</option>
              </CustomInput>
            </FormGroup>
          </>
        ) : (
          <Button.Ripple color="flat-primary">
            <Spinner color="primary" size="sm" type="grow" />
            <span className="ml-5 text-primary">Export(Get data)...</span>
          </Button.Ripple>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => handleExport()}>
          Export
        </Button>
        <Button color="flat-danger" onClick={() => toggleModal()}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalExportCustomerLead
