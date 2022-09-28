import React, {useCallback, useEffect, useState} from 'react'
import {Edit3, PlusCircle, Trash2} from 'react-feather'
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {columns} from '../columns/AutoJobColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterAutoJob from '../filter/FilterAutoJob'

// ** query
import {
  AutomationDatatable,
  AutomationMutation,
  AutomationQuery,
} from '@services/automation'

// Sweet Alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const TableAutoJob = () => {
  const history = useHistory()
  const query = AutomationDatatable.useGetListAutoJob()
  const {data: dataStatus} = AutomationQuery.useGetStatusAutomationApprove({
    get_id_status_approve: true,
  })

  const [autoJobId, setAutoJobId] = useState(null)
  const {mutate: deleteAutoJobAutomation} =
    AutomationMutation.useDeleteAutoJobAutomation()
  const {mutate: updateAutoJobAutomation} =
    AutomationMutation.useHandleAutojobAutomation('job', 'update')

  // Confirm Delete Product
  const handleConfirmDelete = id => {
    return MySwal.fire({
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
        deleteAutoJobAutomation(id)
      }
    })
  }

  useEffect(() => {
    let statusId = dataStatus?.data?._id
    if (autoJobId && statusId) {
      let formData = new FormData()
      formData.append('id', autoJobId)
      formData.append('status', statusId)
      updateAutoJobAutomation(formData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoJobId, dataStatus])

  const renderColumn = useCallback(
    () => [
      ...columns,
      {
        name: 'Thao tác',
        minWidth: '200px',
        cell: row => (
          <div>
            {row.status_info?.key === 'DRAFT' && (
              <>
                <Button.Ripple
                  className="px-2 mr-2 mt-1"
                  size="sm"
                  color="primary"
                  onClick={() => {
                    setAutoJobId(row.id)
                  }}
                >
                  {/* <Flag size="18" /> */}
                  Approve
                </Button.Ripple>
                <Button.Ripple
                  className="px-2 mr-2 mt-1"
                  size="sm"
                  color="warning"
                  onClick={() => {
                    return history.push(`/admin/automation/auto-job/${row.id}`)
                  }}
                >
                  <Edit3 size="18" />
                </Button.Ripple>
              </>
            )}

            <Button.Ripple
              className="px-2 mt-1"
              size="sm"
              color="danger"
              onClick={() => handleConfirmDelete(row.id)}
            >
              <Trash2 size="18" />
            </Button.Ripple>
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [history, dataStatus],
  )

  return (
    <div className="mt-5">
      <div className="text-right mb-3">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="success" caret>
            <PlusCircle size={20} className="mr-2" />
            Tạo Auto Job
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() =>
                history.push(`/admin/automation/auto-job/create/sale-campaign`)
              }
              tag="div"
            >
              Bán hàng
            </DropdownItem>
            <DropdownItem
              onClick={() =>
                history.push(`/admin/automation/auto-job/create/interaction`)
              }
              tag="div"
            >
              Tương tác
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>

      <DataTableComponent
        // *** required
        columns={renderColumn()}
        query={query}
        // defaultData={data}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterAutoJob}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableAutoJob
