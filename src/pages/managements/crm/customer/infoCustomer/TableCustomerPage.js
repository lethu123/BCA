import React, {useState} from 'react'
import {CustomerColumnTable} from 'pages/columns-table/crm/customer/CustomerColumnTable'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterCustomerPage from './FilterCustomerPage'
import ModalContract from './ModalContract'
import ModalCustomer from './ModalCustomer'
import Table from 'reactstrap/lib/Table'

const TableCustomerPage = () => {
  const [showcontract, setShowcontract] = useState(false)
  const [showCustomer, setShowCustomer] = useState(false)

  let columns = [
    {
      name: 'ID',
      selector: 'id',
      maxWidth: '100px',
      cell: row => <p>1234</p>,
    },
    {
      name: 'Số HD',
      selector: 'contractsID',
      maxWidth: '100px',
      cell: row => (
        <p className="text-primary" onClick={() => setShowcontract(true)}>
          HD01
        </p>
      ),
    },
    {
      name: 'Tên khách hàng',
      selector: 'name',
      maxWidth: '150px',
      cell: row => (
        <p className="text-primary" onClick={() => setShowCustomer(true)}>
          Nguyễn Văn A
        </p>
      ),
    },
    ...CustomerColumnTable,
  ]
  const ExpandableTable = ({data}) => {
    return (
      <Table responsive striped>
        <thead>
          <tr>
            <th style={{width: 500, paddingLeft: 20}}>Thuộc tính</th>
            <th>Giá trị</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{paddingLeft: 20}}>Thu nhập bình quân/năm</td>
            <td>
              <div>200000000</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Địa chỉ</td>
            <td>
              <div>350 Lê Đức Thọ, phường 6, quận Gò Vấp</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Số điện thoại</td>
            <td>
              <div>0366952587</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Email</td>
            <td>
              <div>khacvu0505@gmail.com</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>CMND</td>
            <td>
              <div>264514852</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Link FB</td>
            <td>
              <div>https://www.facebook.com/groups/feed/</div>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }

  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={columns}
        query={{
          key: [],
          params: {},
          url: '',
          headers: '',
        }}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        ExpandableComponent={<ExpandableTable />}
        FilterComponent={FilterCustomerPage}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalContract
        centeredModal={showcontract}
        setCenteredModal={setShowcontract}
      />
      <ModalCustomer
        centeredModal={showCustomer}
        setCenteredModal={setShowCustomer}
      />
    </div>
  )
}

export default TableCustomerPage
