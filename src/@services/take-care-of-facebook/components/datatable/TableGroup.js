import React from 'react'
import {columns} from '../column/GroupFacebookColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import {FilterGroup} from '@services/take-care-of-facebook'

//data
const data = [
  {
    id: 1,
    facebook_sasam: 1,
    facebook_sasam_info: {
      id: 1,
      avatar: '',
      name: 'Đại lý 1',
      link: '',
    },
    impact_group_link: 1024,
    impact_group_link_info: {
      id: 1024,
      avatar: '',
      name: 'Huy vip',
      link: '',
    },
    is_joined: 'Yes', // yes || no || pending
    action_name: 2,
    action_name_info: {
      id: 2,
      name: 'Tham gia group',
    },
    action_type: 'New', // New || Redo
    status: 'pending', // pending  || complete || deleted
    type_group: 'interaction', // interaction || opponent
    campaign: 3,
    campaign_info: {
      id: 3,
      name: 'abcdef',
    },
    date_get_data: '10-10-2022 11:56:27 AM',
    date_of_execution: '10-10-2022 11:56:27 AM',
  },
  {
    id: 2,
    facebook_sasam: 1,
    facebook_sasam_info: {
      id: 1,
      avatar: '',
      name: 'Đại lý 1',
      link: '',
    },
    impact_group_link: 1024,
    impact_group_link_info: {
      id: 1024,
      avatar: '',
      name: 'Huy vip',
      link: '',
    },
    is_joined: 'Yes', // yes || no || pending
    action_name: 2,
    action_name_info: {
      id: 2,
      name: 'Tham gia group',
    },
    action_type: 'New', // New || Redo
    status: 'pending', // pending  || complete || deleted
    type_group: 'interaction', // interaction || opponent
    campaign: 3,
    campaign_info: {
      id: 3,
      name: 'abcdef',
    },
    date_get_data: '10-10-2022 11:56:27 AM',
    date_of_execution: '10-10-2022 11:56:27 AM',
  },
]

const TableGroup = () => {
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
        FilterComponent={FilterGroup}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableGroup
