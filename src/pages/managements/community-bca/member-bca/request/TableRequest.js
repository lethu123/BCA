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

import {columns} from 'pages/columns-table/manage-community-bca/member-bca/RequestColumnTable'
import ModalRequest from './ModalRequest'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterRequest from './FilterRequest'

//data

const data = [
  {
    id: 1,
    code: '#817263',
    request_info: {
      id: 11,
      name: 'Báo cáo trang cá nhân',
      avatar: '',
      ID: '73652',
    },
    category: 'Báo cáo trang cá nhân',
    content_violations: 'Spam nội dung',
    date_use: {id: 12, date: '11-20-2021', admin: 'Bùi Quốc Anh'},
    status_info: {status: 'Mới', date: '3-5-2021'},
  },
  {
    id: 2,
    code: '#817263',
    request_info: {
      id: 11,
      name: 'Báo cáo trang cá nhân',
      avatar: '',
      ID: '73652',
    },
    category: 'Báo cáo trang cá nhân',
    content_violations: 'Spam nội dung',
    date_use: {id: 12, date: '11-20-2021', admin: 'Bùi Quốc Anh'},
    status_info: {status: 'Duyệt', date: '3-5-2021'},
  },
]
const TableRequest = () => {
  const [modalRequest, setModalRequest] = useState(false)

  const dataColumn = [
    {
      name: 'Trạng thái',
      selector: 'status_info',
      sortable: true,
      minWidth: '170px',
      cell: row => (
        <div>
          <Badge
            color={row.status_info.status === 'Mới' ? 'danger' : 'success'}
            className={
              row.status_info.status === 'Mới'
                ? 'text-white cursor-pointer'
                : 'text-white'
            }
            pill
            onClick={() =>
              row.status_info.status === 'Mới' && setModalRequest(!modalRequest)
            }
          >
            {row.status_info.status}
          </Badge>
          <span className="d-block  text-truncate " style={{fontSize: '11px'}}>
            {moment(row.status_info.date).format('DD-MM-yyyy')}
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
    <div className="mt-10 mx-5">
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
        FilterComponent={FilterRequest}
        isExport
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />

      <ModalRequest
        modalRequest={modalRequest}
        setModalRequest={setModalRequest}
      />
    </div>
  )
}

export default TableRequest
