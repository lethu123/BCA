import React, {useState} from 'react'

import {Table} from 'reactstrap'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import {DetailCampaignColumnTable} from '../column/DetailCampaignColumnTable'
import {ModalCampaign} from '@services/campaign'

const TableDetailCampaign = () => {
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
            <td style={{paddingLeft: 20}}>Like post FB</td>
            <td>
              <div style={{marginLeft: 15}}>Có</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Bình luận FB</td>
            <td>
              <div style={{marginLeft: 15}}>Có</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Gửi yêu cầu kết bạn</td>
            <td>
              <div style={{marginLeft: 15}}>Có</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Bạn bè FB</td>
            <td>
              <div style={{marginLeft: 15}}>Có</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Gửi Email</td>
            <td>
              <div style={{marginLeft: 15}}>Có</div>
            </td>
          </tr>
          <tr style={{paddingLeft: 20}}>
            <td style={{paddingLeft: 20}}>KH xem Email</td>
            <td>
              <div style={{marginLeft: 15}}>Có</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Nhắn tin FB</td>
            <td>
              <div style={{marginLeft: 15}}>Có</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>KH trả lời</td>
            <td>
              <div style={{marginLeft: 15}}>Có</div>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }

  const defaultQuery = {
    key: [],
    params: '',
    uid: '',
    url: '',
    headers: '',
  }
  return (
    <div className="mt-2">
      <DataTableComponent
        // *** required
        columns={DetailCampaignColumnTable}
        query={defaultQuery}
        defaultData={[{id: 123}, {id: 456}]}
        // ** optional - default undefined
        ExpandableComponent={<ExpandableTable />}
        // FilterComponent={FilterSalesCampaign}
        // isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalCampaign
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default TableDetailCampaign
