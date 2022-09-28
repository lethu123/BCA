import React, {useState} from 'react'
import {CornerDownRight, Trash2} from 'react-feather'
import {Button, Card} from 'reactstrap'

import {columns} from 'pages/columns-table/userBCA/MyDataWorkspaceColumnTable'
import ModalTranferData from './ModalTranferData'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterMyData from './FilterMyData'

//data
const data = [
  {
    id: 1,
    user_info: {
      id: 11,
      username: 'Quyên Quyên',
      avatar: '',
      link: '',
      ID: '356783',
    },
    phoneNumber: '094869286',
    email: 'quyen@gmail.com',
    price: '900000',
    data_source: 'Thành viên post', //Thành viên post, BCA post, LandingPage, FacebookGroup,
    label_data: 'KHTN',
    member_flag: 1,
    customer_flag: 2,
    project_source: {id: 1, name: 'Sàng lọc insurance', type: 'Dự án đối tác'},
    leads: 'Quan tâm', // Quan tâm, Tiếp cận, Yêu thích
    rating: 4.3,
    status: 'Chưa bán', // Chưa bán, Đã bán, Trùng
    data_start: '20-10-2021',
    data_buy: '22-10-2021',
    data_sigin: '25-10-2012',
  },
  {
    id: 2,
    user_info: {
      id: 12,
      username: 'Quyên Hoàng',
      avatar: '',
      link: '',
      ID: '456783',
    },
    phoneNumber: '094569286',
    email: 'quyen1@gmail.com',
    price: '900000',
    data_source: 'BCA post', //Thành viên post, BCA post, LandingPage, FacebookGroup,
    label_data: 'UVTN',
    member_flag: 1,
    customer_flag: 2,
    project_source: {id: 1, name: 'Sàng lọc insurance', type: 'Dự án đối tác'},
    leads: 'Yêu thích', // Quan tâm, Tiếp cận, Yêu thích
    rating: 3.2,
    status: 'Đã bán', // Chưa bán, Đã bán, Trùng
    data_start: '20-10-2021',
    data_buy: '22-10-2021',
    data_sigin: '25-10-2012',
  },
]

const TableMyData = () => {
  // *** State
  const [modalTranfer, setModalTranfer] = useState(false)

  return (
    <div className=" mx-3">
      <Card className="p-2 px-lg-7 mb-15 ">
        <div className="d-flex align-items-center justify-content-lg-end">
          <Button.Ripple
            outline
            color="success"
            className="mr-2"
            onClick={() => setModalTranfer(!modalTranfer)}
          >
            <CornerDownRight size={14} />
            <span className="align-middle ml-1">Chuyển dữ liệu</span>
          </Button.Ripple>
          <Button.Ripple outline color="warning">
            <Trash2 size={14} />
            <span className="align-middle ml-1">Xóa Data sọt rác</span>
          </Button.Ripple>
        </div>
      </Card>

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
        FilterComponent={FilterMyData}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm theo link trích xuất"
      />
      <ModalTranferData
        modalTranfer={modalTranfer}
        setModalTranfer={setModalTranfer}
      />
    </div>
  )
}

export default TableMyData
