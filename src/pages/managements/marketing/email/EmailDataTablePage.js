// *** React Imports
import {Fragment, useState, forwardRef} from 'react'

// *** Table Data & Columns
import {columns} from 'pages/columns-table/marketing/EmailColumnTable'
// *** Third Party Components
import ReactPaginate from 'react-paginate'

// ** asset
import image from 'assets/media/avatars/150-4.jpg'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterEmail from './FilterEmail'

const data = [
  {
    id: 1,
    title: 'Chúc mừng sinh nhật',
    send_date: '20/10/2021',
    campain: 'Chúc mừng sinh nhật',
    c_viewer: 1000,
    user_info: {
      id: 1234,
      avatar: image,
      username: 'Hatake Kakashi',
      url: '',
    },
  },
  {
    id: 2,
    title: 'Tri ân khách hàng thân thiết',
    send_date: '20/10/2021',
    campain: 'Tri ân khách hàng',
    c_viewer: 200,
    user_info: {
      id: 1234,
      avatar: image,
      username: 'Itachi',
      url: '',
    },
  },
]

const EmailDataTablePage = ({toggleCompose}) => {
  const handleModal = () => {
    toggleCompose()
  }

  return (
    <div>
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
        FilterComponent={FilterEmail}
        isExport
        handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default EmailDataTablePage
