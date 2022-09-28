import React from 'react'

import {columns} from 'pages/columns-table/manage-community-bca/member-bca/ManageMemberColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterManageMember from './FilterManageMember'

const data = [
  {
    id: 1,
    user_info: {id: 11, username: 'Hoàng Quyên', avatar: '', ID: '72653'},
    phone_number: '094768463',
    email: 'quyen@gmail.com',
    level: 'Cấp FA',
    community_level: 'Đại lý',
    activity_level: 'Thành viên mới',
    recruitment_point: 6.5,
    point_sale: 5.6,
    agent_charge: {name: 'Bùi Quốc Anh', phoneNumber: '037426293'},
    role: 'Thành viên BCA',
    data_center: 'DataCenter 1',
    status_info: {status: 'Hoạt động', date: '11-20-2021'},
    date_start: {date: '11-20-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 2,
    user_info: {id: 11, username: 'Itachi Uchiha', avatar: '', ID: '72653'},
    phone_number: '094768463',
    email: 'itachi@gmail.com',
    level: 'Cấp PM',
    community_level: 'UVTN',
    activity_level: 'Năng nổ',
    recruitment_point: 6.5,
    point_sale: 5.6,
    agent_charge: {name: 'Bùi Quốc Anh', phoneNumber: '037426293'},
    role: 'Admin',
    data_center: 'DataCenter 2',
    status_info: {status: 'Ngừng hoạt động', date: '11-20-2021'},
    date_start: {date: '11-20-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 3,
    user_info: {id: 11, username: 'Vũ Vâu', avatar: '', ID: '72653'},
    phone_number: '094768463',
    email: 'vuvau@gmail.com',
    level: 'Cấp PUM',
    community_level: 'KHTN',
    activity_level: 'Tàu ngầm',
    recruitment_point: 6.5,
    point_sale: 5.6,
    agent_charge: {name: 'Bùi Quốc Anh', phoneNumber: '037426293'},
    role: 'Tiềm năng',
    data_center: 'DataCenter 2',
    status_info: {status: 'Ngừng hoạt động', date: '11-20-2021'},
    date_start: {date: '11-20-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 4,
    user_info: {id: 11, username: 'Huy Domini', avatar: '', ID: '72653'},
    phone_number: '094768463',
    email: 'huydomini@gmail.com',
    level: 'Cấp UM',
    community_level: 'Đại lý',
    activity_level: 'Sáng tạo',
    recruitment_point: 6.5,
    point_sale: 5.6,
    agent_charge: {name: 'Bùi Quốc Anh', phoneNumber: '037426293'},
    role: 'Admin',
    data_center: 'DataCenter 2',
    status_info: {status: 'Ngừng hoạt động', date: '11-20-2021'},
    date_start: {date: '11-20-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 5,
    user_info: {id: 11, username: 'Huy Domini', avatar: '', ID: '72653'},
    phone_number: '094768463',
    email: 'huydomini@gmail.com',
    level: 'Cấp BM',
    community_level: 'Đại lý',
    activity_level: 'Lười biếng',
    recruitment_point: 6.5,
    point_sale: 5.6,
    agent_charge: {name: 'Bùi Quốc Anh', phoneNumber: '037426293'},
    role: 'Admin',
    data_center: 'DataCenter 2',
    status_info: {status: 'Ngừng hoạt động', date: '11-20-2021'},
    date_start: {date: '11-20-2021', admin: 'Bùi Quốc Anh'},
  },
  {
    id: 6,
    user_info: {id: 11, username: 'Huy Domini', avatar: '', ID: '72653'},
    phone_number: '094768463',
    email: 'huydomini@gmail.com',
    level: 'Cấp FA',
    community_level: 'Đại lý',
    activity_level: 'Ảnh hưởng',
    recruitment_point: 6.5,
    point_sale: 5.6,
    agent_charge: {name: 'Bùi Quốc Anh', phoneNumber: '037426293'},
    role: 'Admin',
    data_center: 'DataCenter 2',
    status_info: {status: 'Ngừng hoạt động', date: '11-20-2021'},
    date_start: {date: '11-20-2021', admin: 'Bùi Quốc Anh'},
  },
]
const TableManageMember = () => {
  return (
    <div className="mt-10">
      <DataTableComponent
        // *** required
        columns={columns}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={data}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterManageMember}
        isExport
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableManageMember
