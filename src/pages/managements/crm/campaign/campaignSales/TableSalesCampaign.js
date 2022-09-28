import React, {useState} from 'react'
import {CampaignColumnTable} from 'pages/columns-table/campaignAdmin/salesCampaign/CampaignColumnTable'
import {Button, Table} from 'reactstrap'
import moment from 'moment'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterSalesCampaign from './FilterSalesCampaign'
import ModalCampaignSales from './ModalCampaignSales'
import {Plus} from 'react-feather'

const TableSalesCampaign = () => {
  const [centeredModal, setCenteredModal] = useState(false)
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
            <td style={{paddingLeft: 20}}>Số KH được nhắn tin trên BCA</td>
            <td>
              <div style={{marginLeft: 15}}>50</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Số KH trả lời tin nhắn trên BCA</td>
            <td>
              <div style={{marginLeft: 15}}>15</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Số KH được nhắn tin FB</td>
            <td>
              <div style={{marginLeft: 15}}>18</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Số KH trả lời qua FB</td>
            <td>
              <div style={{marginLeft: 15}}>15</div>
            </td>
          </tr>
          <tr style={{paddingLeft: 20}}>
            <td style={{paddingLeft: 20}}>Số thông báo</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Số người đã xem</td>
            <td>
              <div style={{marginLeft: 15}}>16</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Số SMS đã gửi</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Ngày bắt đầu</td>
            <td>
              <div style={{marginLeft: 15}}>
                {moment(new Date()).format('DD/MM/YYYY')}
              </div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Ngày kết thúc</td>
            <td>
              <div style={{marginLeft: 15}}>
                {moment(new Date()).format('DD/MM/YYYY')}
              </div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Ngày ngừng chiến dịch</td>
            <td>
              <div style={{marginLeft: 15}}>
                {moment(new Date()).format('DD/MM/YYYY')}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
  let columns = [
    {
      name: 'Chiến dịch',
      maxWidth: '250px',
      selector: 'campaign',
      cell: row => (
        <p className="text-primary" onClick={() => setCenteredModal(true)}>
          Tri ân tháng 7
        </p>
      ),
    },
    ...CampaignColumnTable,
  ]
  return (
    <div className="mt-2">
      <div className="text-sm-right mb-3">
        <Button.Ripple color="primary" onClick={() => setCenteredModal(true)}>
          {' '}
          <Plus size={17} /> Tạo chiến dịch
        </Button.Ripple>
      </div>
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
        FilterComponent={FilterSalesCampaign}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalCampaignSales
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default TableSalesCampaign
