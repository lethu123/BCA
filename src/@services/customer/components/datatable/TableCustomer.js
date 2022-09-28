import React from 'react'

//component
import {columns} from '../column/CustomerColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import {FilterCustomer} from '@services/customer'

//data
const data = [
  {
    id: 1,
    fullname: 'Huy Dominicus',
    phone: '0930123123',
    email: 'huy@gmail.com',
    address: '123 Trần Nhân Thông, Hò Chí Minh',
    uid: '123',
    birthday: 'xx/xx/2000',
    status: {
      id: 1,
      name: 'đã liên lạc',
    },
    status_leads: {
      id: 1,
      name: 'Quan tâm',
    },
    kind_of_interest: {
      id: 1,
      name: 'Khớp',
    },
    age: 51,
    gender: 'Nam',
    connect_fb: true,
    is_friend: true,
    // payment_method: {
    //   type: 'MOMO',
    //   account_name: 'NGUYEN LE GIA HUY',
    //   account_number: '1234567890934',
    //   code: 'BARC0032UK',
    // },
    create_date: '9/1/2021',
  },
  {
    id: 2,
    fullname: 'Vũ vâu',
    phone: '0930123123',
    email: 'vuvau@gmail.com',
    address: '123 Trần Nhân Thông, Hò Chí Minh',
    uid: '123',
    birthday: 'xx/xx/2000',
    status: {
      id: 1,
      name: 'đã liên lạc',
    },
    status_leads: {
      id: 1,
      name: 'Quan tâm',
    },
    kind_of_interest: {
      id: 1,
      name: 'Khớp',
    },
    age: 51,
    gender: 'Nam',
    connect_fb: true,
    is_friend: true,
    create_date: '1/1/2021',
  },
  {
    id: 4,
    fullname: 'Thu kara',
    phone: '0930123123',
    email: 'thu@gmail.com',
    address: '123 Trần Nhân Thông, Hò Chí Minh',
    uid: '123',
    birthday: 'xx/xx/2000',
    status: {
      id: 1,
      name: 'mở',
    },
    status_leads: {
      id: 1,
      name: 'Quan tâm',
    },
    kind_of_interest: {
      id: 1,
      name: 'Khớp',
    },
    age: 51,
    gender: 'Nam',
    connect_fb: true,
    is_friend: true,
    create_date: '1/2/2021',
  },
  {
    id: 3,
    fullname: 'Quyên Quyên',
    phone: '0930123123',
    email: 'quyen@gmail.com',
    address: '123 Trần Nhân Thông, Hò Chí Minh',
    uid: '123',
    birthday: 'xx/xx/2000',
    status: {
      id: 1,
      name: 'đã liên lạc',
    },
    status_leads: {
      id: 1,
      name: 'Quan tâm',
    },
    kind_of_interest: {
      id: 1,
      name: 'Khớp',
    },
    age: 51,
    gender: 'Nam',
    connect_fb: true,
    is_friend: true,
    create_date: '4/1/2021',
  },
]

const TableCustomer = () => {
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
        FilterComponent={FilterCustomer}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableCustomer
