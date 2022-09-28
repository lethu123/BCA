import React from 'react'
import {columns} from 'pages/columns-table/crm/take-care-facebook/FacebookOfUserColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterFacebookOfUser from './FilterFacebookOfUser'

//data
const data = [
  {
    id: 1,
    facebook_BCA: {
      id: 11,
      username: 'Dương Hà',
      avatar: '',
    },
    customer_info: {
      id: 13,
      username: 'Hoàng Quyên',
      avatar: '',
    },
    friend: 'Có', // có, không, Chờ
    action: 'Yêu cầu kết bạn', //Like,Bình Luận
    type_action: 'Redo', //New
    type_group: 'Đối thủ', //Tương tác
    campaign: 'adcrf',
    create_date: '05-06-2021',
    use_date: '03-07-2021',
    source: 'Post', //Group, FanPage
    leads: 'Quan tâm', //Tiếp cận, Yêu thích
  },
  {
    id: 2,
    facebook_BCA: {
      id: 12,
      username: 'Dương Hà',
      avatar: '',
    },
    customer_info: {
      id: 14,
      username: 'Thu Kara',
      avatar: '',
    },
    friend: 'Không', // có, không, Chờ
    action: 'Bình luận', //Like,Bình Luận
    type_action: 'New', //New
    type_group: 'Tương tác', //Tương tác
    campaign: 'adcrf',
    create_date: '05-06-2021',
    use_date: '03-07-2021',
    source: 'Group', //Group, FanPage
    leads: 'Yêu thích', //Tiếp cận, Yêu thích
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
        FilterComponent={FilterFacebookOfUser}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Search"
      />
      <div className="font-weight-bold mt-3 ml-10 fs-5">
        Total: <span className="text-success">2000</span>
      </div>
    </div>
  )
}

export default TableFacebookOfUser
