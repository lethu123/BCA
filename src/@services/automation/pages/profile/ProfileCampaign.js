import React, {useState} from 'react'
import {Button} from 'reactstrap'

// *** Component
import {CampaignColumnTable} from '@services/campaign/components/column/CampaignColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterSalesCampaign from '@services/campaign/components/filter/FilterSalesCampaign'
import ModalProfileCampaign from './ModalProfileCampaign'

// *** Query
import {CampaignDatatable} from '@services/campaign'
import {useParams} from 'react-router-dom'

const AccountFbCampaign = () => {
  // *** react hook
  const {id} = useParams()

  // *** State
  const [modalCampaign, setModalCampaign] = useState(false)
  const [infoCampaign, setInfoCampaign] = useState(null)

  // *** Query
  const query = CampaignDatatable.useGetListSaleCampaign()

  let columns = [
    ...CampaignColumnTable,
    {
      name: 'Thao tác',
      minWidth: '150px',
      center: true,
      cell: row => (
        <div>
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              setModalCampaign(!modalCampaign)
              setInfoCampaign(row)
            }}
          >
            Xem chi tiết
          </Button.Ripple>
        </div>
      ),
    },
  ]

  return (
    <div className="mt-2 w-100 ">
      <DataTableComponent
        // *** required
        columns={columns}
        query={{...query, params: {account_uid: id}}}
        FilterComponent={FilterSalesCampaign}
        isExport
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalProfileCampaign
        modalCampaign={modalCampaign}
        setModalCampaign={setModalCampaign}
        data={infoCampaign}
      />
    </div>
  )
}

export default AccountFbCampaign
