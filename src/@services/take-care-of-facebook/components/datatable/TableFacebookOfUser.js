import React from 'react'

import {columns} from '../column/PersonalFacebookDataColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import {FilterFBUser} from '@services/take-care-of-facebook'
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
    impact_user_link: 1024,
    impact_user_link_info: {
      id: 1024,
      avatar: '',
      name: 'Quyên',
      link: '',
    },
    is_friend: 'yes', // yes || no || pending
    action_name: 2,
    action_name_info: {
      id: 2,
      name: 'Thêm bạn bè',
    },
    action_type: 'New', // New || Redo
    status: 'pending', // pending  || complete || deleted
    campaign: 3,
    campaign_info: {
      id: 3,
      name: 'abcdef',
    },
    date_get_data: '10-10-2022 11:56:27 AM',
    date_of_execution: '10-10-2022 11:56:27 AM',
    data_sources: 2,
    data_source_info: {
      id: 2,
      type: 'Post', // Post || Group || Fanpage
      link: '',
    },
    type_lead: 2,
    type_lead_info: {
      id: 2,
      name: 'Quan tâm',
    },
    kind_of_interest: 1,
    kind_of_interest_info: {
      id: 1,
      name: 'Xương Khớp',
    },
  },
  {
    id: 3,
    facebook_sasam: 2,
    facebook_sasam_info: {
      id: 2,
      avatar: '',
      name: 'Đại lý 2',
      link: '',
    },
    impact_user_link: 124,
    impact_user_link_info: {
      id: 124,
      avatar: '',
      name: 'Quyên 1',
      link: '',
    },
    is_friend: 'no', // yes || no || pending
    action_name: 2,
    action_name_info: {
      id: 2,
      name: 'Like',
    },
    action_type: 'Redo', // New || Redo
    status: 'complete', // pending  || complete || deleted
    campaign: 4,
    campaign_info: {
      id: 4,
      name: 'campaign_info',
    },
    date_get_data: '10-10-2022 11:56:27 AM',
    date_of_execution: '10-10-2022 11:56:27 AM',
    data_sources: 3,
    data_source_info: {
      id: 3,
      type: 'Group', // Post || Group || Fanpage
      link: '',
    },
    type_lead: 5,
    type_lead_info: {
      id: 5,
      name: 'Không quan tâm',
    },
    kind_of_interest: 1,
    kind_of_interest_info: {
      id: 1,
      name: 'Mĩ phẩm',
    },
  },
  {
    id: 2,
    facebook_sasam: 2,
    facebook_sasam_info: {
      id: 2,
      avatar: '',
      name: 'Đại lý 3',
      link: '',
    },
    impact_user_link: 124,
    impact_user_link_info: {
      id: 124,
      avatar: '',
      name: 'Quyên 2',
      link: '',
    },
    is_friend: 'pending', // yes || no || pending
    action_name: 2,
    action_name_info: {
      id: 2,
      name: 'Like',
    },
    action_type: 'Redo', // New || Redo
    status: 'deleted', // pending  || complete || deleted
    campaign: 4,
    campaign_info: {
      id: 4,
      name: 'campaign_info',
    },
    date_get_data: '10-10-2022 11:56:27 AM',
    date_of_execution: '10-10-2022 11:56:27 AM',
    data_sources: 3,
    data_source_info: {
      id: 3,
      type: 'Fanpage', // Post || Group || Fanpage
      link: '',
    },
    type_lead: 5,
    type_lead_info: {
      id: 5,
      name: 'Không quan tâm',
    },
    kind_of_interest: 1,
    kind_of_interest_info: {
      id: 1,
      name: 'Xương khớp',
    },
  },
]

const TableFacebookOfUser = () => {
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
        FilterComponent={FilterFBUser}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
    </div>
  )
}

export default TableFacebookOfUser
