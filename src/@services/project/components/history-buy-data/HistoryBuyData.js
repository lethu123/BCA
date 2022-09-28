import {Book} from 'react-feather'
import {Button, Col, Row} from 'reactstrap'
import {Bizxu} from 'components/icon'
// ** component
import {columns} from 'pages/columns-table/home/history-buy-data/HistoryDataBoughtColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterHistoryBuyData from '../filter/FilterHistoryBuyData'

//data
const data = [
  {
    id: 1,
    category: {id: 11, name: 'Dữ liệu mới'},
    count: 1,
    price: 10000,
    total: 100000,
    name: 'Thi Phương Insurance',
    date_bought: '10/11/2021',
  },
  {
    id: 2,
    category: {id: 11, name: 'Dữ liệu mới'},
    count: 1,
    price: 10000,
    total: 100000,
    name: 'Thi Phương Insurance',
    date_bought: '10/11/2021',
  },
  {
    id: 3,
    category: {id: 11, name: 'Dữ liệu mới'},
    count: 1,
    price: 10000,
    total: 100000,
    name: 'Thi Phương Insurance',
    date_bought: '10/11/2021',
  },
  {
    id: 4,
    category: {id: 11, name: 'Dữ liệu mới'},
    count: 1,
    price: 10000,
    total: 100000,
    name: 'Thi Phương Insurance',
    date_bought: '10/11/2021',
  },
]
const HistoryBuyData = () => {
  return (
    <div className="mt-1">
      <Row className="w-100">
        <Col lg="9" md="19">
          <div className="d-flex justify-content-start align-items-center mb-1">
            <Book className="text-primary mr-2" size="40" />
            <div className="profile-user-info">
              <h4 className="mb-0 ">Dự án Đã lưu</h4>
              <p className="mb-0">Xem lại các Dự án bạn quan tâm</p>
            </div>
          </div>
        </Col>
        <Col lg="3" md="12" className="text-right">
          <Button.Ripple color="primary" className="text-left">
            <div>Số Bizxu đã mua: </div>
            <h5 className="text-white">
              <span className="align-middle mr-2">400000 Bizxu</span>
              <Bizxu color="white" fill="#ffffff" />
            </h5>
          </Button.Ripple>
        </Col>
      </Row>
      <div className="ml-5">
        <h5 className=" font-weight-bold">
          Tổng giao giao dịch trong 30 ngày qua
        </h5>
        <h2 className="ml-10"> 89 Giao dịch</h2>
        <p>
          Lần cập nhật gần nhất:{' '}
          <span className="font-weight-bold">3 tháng 5, 2021</span>
        </p>
      </div>
      <div className="mt-10 mx-1 border border-primary-1 rounded">
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
          FilterComponent={FilterHistoryBuyData}
          isExport
          // handleModal={handleModal}
          // handleDelete={handleDelete}
          searchPlaceholder="Search"
        />
      </div>
    </div>
  )
}

export default HistoryBuyData
