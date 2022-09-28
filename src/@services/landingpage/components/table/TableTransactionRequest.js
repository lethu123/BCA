import React, {useState} from 'react'
import {Edit, MoreVertical, Trash} from 'react-feather'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import moment from 'moment'

import {columns} from '../column/TransactionRequestColumnTable'
import ModalPending from '../modal/ModalPending'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterTransactionRequest from '../filter/FilterTransactionRequest'

//data
const data = [
  {
    id: 1,
    ID: '#12543',
    user_info: {id: 11, username: 'Dương Hà', avatar: '', ID: 'E39472'},
    type_LDP: 'KHTN',
    type: 'Kích hoạt landingpage',
    price: '576,000',
    date_start: {id: 12, date: '03-23-2021', admin: 'Bùi Quốc Anh'},
    status: {value: 'Chờ xử lý', date: '3-5-2021'},
  },
  {
    id: 2,
    ID: '#12543',
    user_info: {id: 11, username: 'Dương Hà', avatar: '', ID: 'E39472'},
    type_LDP: 'UVTN',
    type: 'Kích hoạt landingpage',
    price: '576,000',
    date_start: {id: 12, date: '03-23-2021', admin: 'Bùi Quốc Anh'},
    status: {value: 'Duyệt', date: '3-5-2021'},
  },
]
const TableTransactionRequest = () => {
  // *** State
  const [modalRequest, setModalRequest] = useState(false)

  //data
  const dataColumn = [
    {
      name: 'Trạng thái',
      selector: 'status',
      sortable: true,
      minWidth: '170px',
      cell: row => (
        <div>
          <Badge
            color={row.status.value === 'Duyệt' ? 'success' : 'danger'}
            className={
              row.status.value === 'Chờ xử lý'
                ? ' cursor-pointer text-white'
                : 'text-white'
            }
            pill
            onClick={() =>
              row.status.value === 'Chờ xử lý' && setModalRequest(!modalRequest)
            }
          >
            {row.status.value}
          </Badge>
          <p className="mb-0" style={{fontSize: '11px'}}>
            Cập nhật: {moment(row.date_start.date).format('DD-MM-yyyy')}
          </p>
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
        FilterComponent={FilterTransactionRequest}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />

      <ModalPending
        modalRequest={modalRequest}
        setModalRequest={setModalRequest}
      />
    </div>
  )
}

export default TableTransactionRequest
