import React, {useCallback, useEffect, useState} from 'react'
import {Edit3, PlusCircle, Trash2} from 'react-feather'
import {useHistory} from 'react-router-dom'
import {Button} from 'reactstrap'

import {columns} from '../columns/AutoTaskColumnTable'
import DataTableComponent from 'components/data-table/DataTableComponent'
import FilterAutoTask from '../filter/FilterAutoTask'

// Sweet Alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// ** query
import {
  AutomationDatatable,
  AutomationMutation,
  AutomationQuery,
} from '@services/automation'

const MySwal = withReactContent(Swal)
const TableAutoTask = () => {
  const history = useHistory()
  const query = AutomationDatatable.useGetListAutoTask()
  const {mutate} = AutomationMutation.useDeleteAutoJobAutomation()
  const {data: dataStatus} = AutomationQuery.useGetStatusAutomationApprove({
    get_id_status_approve: true,
  })
  const {mutate: updateAutoJobAutomation} =
    AutomationMutation.useHandleAutojobAutomation('task', 'update')
  const [autoTask, setAutoTask] = useState(null)

  // Confirm Delete Product
  const handleConfirmDelete = id => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1',
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        mutate(id)
      }
    })
  }
  useEffect(() => {
    let statusId = dataStatus?.data?._id
    if (autoTask && statusId) {
      let formData = new FormData()
      formData.append('id', autoTask)
      formData.append('status', statusId)
      updateAutoJobAutomation(formData)
    }
  }, [autoTask, dataStatus])

  const renderColumn = useCallback(
    () => [
      ...columns,
      {
        name: 'Thao tác',
        // selector: 'action',
        width: '200px',
        right: true,
        cell: row => (
          <div>
            {row.status_info?.key === 'DRAFT' && (
              <>
                <Button.Ripple
                  className="px-2 mr-2"
                  size="sm"
                  color="primary"
                  onClick={() => {
                    setAutoTask(row.id)
                  }}
                >
                  {/* <Flag size="18" /> */}
                  Approve
                </Button.Ripple>
                <Button.Ripple
                  className="px-2 mr-2"
                  size="sm"
                  color="warning"
                  onClick={() => {
                    return history.push(`/admin/automation/auto-task/${row.id}`)
                  }}
                >
                  <Edit3 size="18" />
                </Button.Ripple>
              </>
            )}

            <Button.Ripple
              className="px-2"
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
    [],
  )

  return (
    <div className="mt-10">
      <div className="text-right mb-3">
        <button
          className="btn btn-primary mr-2"
          onClick={() => history.push('/admin/automation/auto-task/create')}
        >
          <PlusCircle size={20} className="mr-2" />
          Tạo Auto Task
        </button>
      </div>

      <DataTableComponent
        // *** required
        columns={renderColumn()}
        query={query}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        FilterComponent={FilterAutoTask}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Nhập nội dung tìm kiếm ..."
      />
    </div>
  )
}

export default TableAutoTask
