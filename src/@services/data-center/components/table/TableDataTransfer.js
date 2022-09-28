import React, {useState} from 'react'
import {Edit, MoreVertical, Trash} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'

// *** components
import ModalRequest from '../modal/ModalRequest'
import {columns} from '../column/DataTransferColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterDataTransfer from '../filter/FilterDataTransfer'

//data
const data = [
  {
    id: 1,
    request: {
      id: 20,
      title: 'Chuyển data',
      ID: '356783',
      image: '',
      link: '',
    },
    user_info: {
      id: 11,
      username: 'Quyên Quyên',
      avatar: '',
      link: '',
      ID: '356783',
    },
    user_reciver_info: {
      id: 11,
      username: 'Quyên Quyên',
      avatar: '',
      link: '',
      ID: '356783',
    },

    flag_source: 'Khác hệ thống', // Cùng hệ thống
    data_transfer: {
      id: 20,
      username: 'Nguyễn Văn A',
      rating: 3.6,
    },
    user_approved_info: null,
    date_request: '12-8-2021',
    status: {id: 1, name: 'Chờ duyệt', time: ''}, //Đã duyệt
  },
  {
    id: 2,
    request: {
      id: 20,
      title: 'Chuyển data',
      ID: '356783',
      image: '',
      link: '',
    },
    user_info: {
      id: 11,
      username: 'Quyên Quyên',
      avatar: '',
      link: '',
      ID: '356783',
    },
    user_reciver_info: {
      id: 11,
      username: 'Quyên Quyên',
      avatar: '',
      link: '',
      ID: '356783',
    },

    flag_source: 'Khác hệ thống', // Cùng hệ thống
    data_transfer: {
      id: 20,
      username: 'Nguyễn Văn A',
      rating: 3.6,
    },
    user_approved_info: {
      id: 11,
      username: 'Quyên 2',
      avatar: '',
      link: '',
      ID: '356783',
    },
    date_request: '10-5-2021',
    status: {id: 1, name: 'Đã duyệt', time: '12-10-2021'}, //Đã duyệt
  },
]

const TableDataTransfer = () => {
  const [modalRequest, setModalRequest] = useState(false)
  const dataColumn = [
    {
      name: 'Trạng thái',
      selector: 'status',
      sortable: true,
      minWidth: '120px',
      cell: row => (
        <div className="text-center">
          <Badge
            color={row.status.name === 'Chờ duyệt' ? 'warning' : 'success'}
            className={
              row.status.name === 'Chờ duyệt'
                ? 'cursor-pointer text-white'
                : 'text-white'
            }
            pill
            onClick={() =>
              row.status.name === 'Chờ duyệt' && setModalRequest(!modalRequest)
            }
          >
            {row.status.name}
          </Badge>
          <span
            className="d-block  text-truncate text-primary"
            style={{fontSize: '11px'}}
          >
            {row.status.time}
          </span>
        </div>
      ),
    },

    {
      name: 'Thao tác',
      allowOverflow: true,
      cell: row => {
        return (
          <div className="d-flex">
            <UncontrolledDropdown>
              <DropdownToggle className="pr-1" tag="span">
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Edit size={15} />
                  <span className="align-middle ml-50">Edit</span>
                </DropdownItem>
                <DropdownItem>
                  <Trash size={15} />
                  <span className="align-middle ml-50">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )
      },
    },
  ]

  return (
    <div className="mt-10 ">
      <DataTableComponent
        // *** required
        columns={[...columns, ...dataColumn]}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={data}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterDataTransfer}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
      <ModalRequest
        modalRequest={modalRequest}
        setModalRequest={setModalRequest}
      />
    </div>
  )
}

export default TableDataTransfer
