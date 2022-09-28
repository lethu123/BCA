import React, {useState} from 'react'
import {PersonalColumnTable} from 'pages/columns-table/campaignAdmin/takeCareOfFBCampaign/PersonalColumnTable'
import {Table, Button} from 'reactstrap'
import {Plus} from 'react-feather'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterFBOfUser from './FilterFBOfUser'
import ModalCampaign from './ModalCampaign'

const TableFacebookOfUser = () => {
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
            <td style={{paddingLeft: 20}}>Link Post - FB</td>
            <td>
              <div style={{marginLeft: 15}}>50</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Bình luận Post - FB</td>
            <td>
              <div style={{marginLeft: 15}}>15</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Gửi yêu cầu kết bạn</td>
            <td>
              <div style={{marginLeft: 15}}>18</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Bạn bè</td>
            <td>
              <div style={{marginLeft: 15}}>15</div>
            </td>
          </tr>
          <tr style={{paddingLeft: 20}}>
            <td style={{paddingLeft: 20}}>Nhắn tin FB</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>KH trả lời tin nhắn</td>
            <td>
              <div style={{marginLeft: 15}}>16</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Yêu cầu tham gia nhóm</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Đã tham gia nhóm</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Like Post nhóm</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Bình luận Post - nhóm</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Viết bài Post - nhóm</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Like Fanpage</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Bình luận Post - FP</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft: 20}}>Like Post - FP</td>
            <td>
              <div style={{marginLeft: 15}}>20</div>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
  const [centeredModal, setCenteredModal] = useState(false)
  let columns = [
    {
      name: 'Chiến dịch',
      selector: 'fullnameCampaign',
      maxWidth: '250px',
      cell: row => (
        <p
          className="text-primary cursor-pointer"
          onClick={() => setCenteredModal(true)}
        >
          Tương tác FB
        </p>
      ),
    },
    ...PersonalColumnTable,
  ]
  return (
    <div className="mt-2">
      <div className="text-right mb-3">
        <Button.Ripple color="primary" onClick={() => setCenteredModal(true)}>
          {' '}
          <Plus size={15} /> Tạo chiến dịch
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
        FilterComponent={FilterFBOfUser}
        isExport
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

export default TableFacebookOfUser
