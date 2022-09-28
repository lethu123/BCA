import React, {useCallback, useState} from 'react'
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {
  Check,
  CheckCircle,
  Edit,
  Eye,
  MoreVertical,
  Plus,
  Slash,
  Trash2,
} from 'react-feather'
// Sweet Alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// *** Component
import {CampaignColumnTable} from '../column/CampaignColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterSalesCampaign from '../filter/FilterSalesCampaign'
import {ModalCampaign, ModalDetailCampain} from '@services/campaign'
import BlockCampaignTable from '@services/campaign/components/tabs/campaignCalendar/BlockCampaignTable'

// *** Query
import {AutomationMutation} from '@services/automation'
import {CampaignDatatable} from '@services/campaign'
import {Link} from 'react-router-dom'

const MySwal = withReactContent(Swal)

const TableSalesCampaign = () => {
  const [modalUpsert, setModalUpsert] = useState(false)
  const [modalInfo, setModalInfo] = useState(false)
  const [item, setItem] = useState(null)

  // *** Query
  const {mutate: mutateDelete} = AutomationMutation.useDeleteSaleCampain()
  const {mutate: mutateUpdateStatus} =
    AutomationMutation.useUpdateStatusCampain()
  const query = CampaignDatatable.useGetListSaleCampaign()

  // const {data: listStatus} = useGetListStatusCampain()

  const handleConfirmDelete = useCallback(
    async id => {
      return await MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-danger',
          cancelButton: 'btn btn-outline-secondary ml-1',
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {
          mutateDelete(id)
        }
      })
    },
    [mutateDelete],
  )

  const toggleModal = useCallback(
    () => setModalInfo(modalInfo => !modalInfo),
    [],
  )

  const handleChangeStatus = useCallback(
    (id, value) => {
      let formData = new FormData()
      formData.append('stage_code', value)
      mutateUpdateStatus({id, data: formData})
    },
    [mutateUpdateStatus],
  )

  const ExpandableTable = ({data}) => {
    return <BlockCampaignTable datas={data.block || []} />
  }

  let columns = [
    ...CampaignColumnTable,
    {
      name: 'Thao tác',
      width: '120px',
      center: true,
      cell: row => (
        <div>
          <UncontrolledDropdown>
            <DropdownToggle className="pr-1" tag="span">
              <MoreVertical />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                tag="div"
                onClick={() => {
                  setItem(row)
                  toggleModal()
                }}
              >
                <Eye size="18" className="mr-2" /> Xem chi tiết
              </DropdownItem>
              <Link
                to={`/admin/campaign/${row._id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DropdownItem tag="div">
                  <CheckCircle size="18" className="mr-2" /> Xem lịch sử
                </DropdownItem>
              </Link>

              <DropdownItem
                onClick={() => {
                  setItem(row)
                  setModalUpsert(true)
                }}
                tag="div"
              >
                <Edit size="18" className="mr-2" /> Chỉnh sửa
              </DropdownItem>
              <DropdownItem
                tag="div"
                className="text-success"
                onClick={() => {
                  handleChangeStatus(row._id, 'approved')
                }}
              >
                <Check size="18" className="mr-2" /> Duyệt
              </DropdownItem>
              <DropdownItem
                tag="div"
                className="text-danger"
                onClick={() => {
                  handleChangeStatus(row._id, 'stop')
                }}
              >
                <Slash size="18" className="mr-2" /> Dừng
              </DropdownItem>
              <DropdownItem
                onClick={() => handleConfirmDelete(row._id)}
                tag="div"
                className="text-danger"
              >
                <Trash2 size="18" className="mr-2" /> Xóa
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      ),
    },
  ]

  return (
    <div className="mt-2">
      <div className="text-right mb-3">
        <Button.Ripple
          color="primary"
          onClick={() => {
            setModalUpsert(true)
            setItem(null)
          }}
        >
          <Plus size={17} /> Tạo chiến dịch
        </Button.Ripple>
      </div>
      <DataTableComponent
        // *** required
        columns={columns}
        query={query}
        // ** optional - default undefined
        ExpandableComponent={<ExpandableTable />}
        FilterComponent={FilterSalesCampaign}
        isExport
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
      <ModalCampaign
        open={modalUpsert}
        toggle={() => setModalUpsert(false)}
        item={item}
      />
      <ModalDetailCampain open={modalInfo} item={item} toggle={toggleModal} />
    </div>
  )
}

export default TableSalesCampaign
