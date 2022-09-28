import {
  Button,
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledButtonDropdown,
} from 'reactstrap'
// import {Export} from 'components/icon'
import {
  Loader,
  Settings,
  Search,
  PlusCircle,
  Filter,
  ExternalLink,
} from 'react-feather'
import {useState} from 'react'
import SettingColumn from 'components/setting-column/SettingColumn'
import TextField from 'components/form/TextField'
import PerfectScrollbar from 'react-perfect-scrollbar'
//scss
import './Custom.style.scss'

const TableHeader = ({
  handleExport,
  handleSearch,
  handleDelete,
  allSelected,
  loading,
  showModal,
  isExport,
  FilterComponent,
  setFilterObject,
  filterObject,
  searchPlaceholder = 'Tìm kiếm...',
  columns,
  setColumns,
  handleRefresh,
  searchValue,
}) => {
  const [modalFilter, setModalFilter] = useState(false)
  const [modalSetting, setModalSetting] = useState(false)
  const [modalExport, setModalExport] = useState(false)
  const [fileName, setFileName] = useState('')
  const [fileFormat, setFileFormat] = useState('xlsx')

  return (
    <>
      <div className="card-header border-0 py-2 mb-0 row table-header">
        <div className="card-title col-12 col-lg-5 col-xl-4">
          <div className=" my-1 ">
            <TextField
              icon={<Search size={16} />}
              type="text"
              name="search_header"
              size="lg"
              placeholder={searchPlaceholder}
              onChange={handleSearch}
              disabled={loading}
              value={searchValue}
            />
          </div>
        </div>

        <div className="card-toolbar text-end w-xl-auto w-100 mb-5 mb-xl-0 col-12 col-lg-7 col-xl-8 text-right mt-5 mt-lg-0">
          {allSelected.length === 0 ? (
            <div>
              <div className="d-sm-flex d-block justify-content-sm-end text-left">
                <UncontrolledButtonDropdown className="mr-5">
                  <DropdownToggle
                    color="none"
                    caret
                    className="p-1 btn-primary text-white"
                  >
                    Thao tác
                  </DropdownToggle>
                  <DropdownMenu>
                    {FilterComponent && (
                      <>
                        <DropdownItem onClick={handleRefresh} className="w-100">
                          <Loader size={17} className="mr-2 text-info" /> Làm
                          mới
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => setModalFilter(true)}
                          className="w-100"
                        >
                          <Filter size={17} className="mr-2 text-primary" />
                          Lọc
                        </DropdownItem>
                      </>
                    )}
                    {isExport && (
                      <DropdownItem
                        onClick={() => setModalExport(true)}
                        className="w-100"
                      >
                        <ExternalLink size={17} className="mr-2 text-danger" />
                        Xuất dữ liệu
                      </DropdownItem>
                    )}
                    <DropdownItem
                      onClick={() => setModalSetting(true)}
                      className="w-100"
                    >
                      <Settings size={17} className="mr-2 text-warning" />
                      Cài đặt cột
                    </DropdownItem>
                    {showModal && (
                      <DropdownItem onClick={showModal} className="w-100">
                        <PlusCircle size={17} className="mr-2 text-success" />
                        Thêm mới
                      </DropdownItem>
                    )}
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
                {/*begin::Filter*/}
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-end align-items-center d-none">
              <div className="fw-bolder me-5">
                <span className="me-2" />
                {allSelected.length} Đã chọn
              </div>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(allSelected)}
              >
                Xóa các hàng đã chọn
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal Filter */}
      {FilterComponent && (
        <Modal
          // scrollable
          isOpen={modalFilter}
          toggle={() => setModalFilter(!modalFilter)}
          className="modal-dialog-centered"
          modalClassName="modal-primary"
        >
          <ModalHeader toggle={() => setModalFilter(!modalFilter)}>
            Tùy chọn lọc
          </ModalHeader>
          <ModalBody>
            {/* <PerfectScrollbar> */}
            <FilterComponent
              filterObject={filterObject}
              setFilterObject={obj => {
                setFilterObject(obj)
                setModalFilter(false)
              }}
            />
            {/* </PerfectScrollbar> */}
          </ModalBody>
        </Modal>
      )}
      {/* Modal Export */}
      <Modal
        isOpen={modalExport}
        toggle={() => setModalExport(!modalExport)}
        className="modal-dialog-centered"
        onClosed={() => setFileName('')}
      >
        <ModalHeader toggle={() => setModalExport(!modalExport)}>
          Export To Excel
        </ModalHeader>
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleExport(fileName, fileFormat)
              setModalExport(false)
            }}
          >
            Export
          </Button>
          <Button color="flat-danger" onClick={() => setModalExport(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal Setting */}
      <Modal
        isOpen={modalSetting}
        toggle={() => setModalSetting(!modalSetting)}
        className="modal-dialog-centered"
        modalClassName="modal-primary"
      >
        <ModalHeader toggle={() => setModalSetting(!modalSetting)}>
          Cài đặt cột hiển thị
        </ModalHeader>
        <ModalBody>
          <SettingColumn columns={columns} setColumns={setColumns} />
        </ModalBody>
        <ModalFooter>
          <button
            onClick={() => setModalSetting(false)}
            className="btn btn-secondary"
          >
            Đóng
          </button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default TableHeader
