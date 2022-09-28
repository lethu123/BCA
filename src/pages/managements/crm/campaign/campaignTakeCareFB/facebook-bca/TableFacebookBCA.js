import React, {useState} from 'react'
import {FanpageSaSamColumnTable} from 'pages/columns-table/campaignAdmin/takeCareOfFBCampaign/FanpageSaSamColumnTable'
import {Button} from 'reactstrap'
import {Plus} from 'react-feather'
// *** Component
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterFBOfUser from './FilterFBOfUser'
import ModalCampaign from './ModalCampaign'

const TableFacebookBCA = () => {
  const [centeredModal, setCenteredModal] = useState(false)
  let columns = [
    {
      name: 'Chiến dịch',
      selector: 'facebook_sasam_info',
      sortable: true,
      minWidth: '170px',
      cell: row => (
        <p
          className="text-primary cursor-pointer"
          onClick={() => setCenteredModal(true)}
        >
          Bình Luận
        </p>
      ),
    },

    ...FanpageSaSamColumnTable,
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
        // ExpandableComponent={<ExpandableTable />}
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

export default TableFacebookBCA
