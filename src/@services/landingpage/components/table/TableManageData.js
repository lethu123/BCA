import React, {useState} from 'react'
import {CornerDownRight, Trash2} from 'react-feather'
import {Button, Card} from 'reactstrap'

import {columns} from '../column/LandingPageColumnTable'
import ModalTranferData from '../modal/ModalTranferData'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterManageData from '../filter/FilterManageData'

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
    type_LDP: 'KHTN',
    member_flag: 1,
    customer_flag: 1,
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
    type_LDP: 'UVTN',
    member_flag: 1,
    customer_flag: 2,
    data_start: '20-10-2021',
    data_buy: '22-10-2021',
    data_sigin: '25-10-2012',
  },
]

const TableManageData = () => {
  // *** State
  const [modalTranfer, setModalTranfer] = useState(false)

  return (
    <div>
      <Card className="p-2 px-lg-7 mb-3">
        <div className="d-md-flex d-block align-items-center justify-content-md-end text-center">
          <Button.Ripple
            outline
            color="success"
            className="mr-2 mb-5 mb-md-0"
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
        FilterComponent={FilterManageData}
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

export default TableManageData
