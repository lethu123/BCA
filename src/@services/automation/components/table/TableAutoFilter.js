import {useCallback} from 'react'
import {Button} from 'reactstrap'
import {Edit3, Trash2} from 'react-feather'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// *** DataTableComponent
import DataTableComponent from 'components/data-table/DataTableComponent'

// *** column
import {columns} from '../columns/AutoFilter'

// *** query
import {AutomationDatatable, AutomationMutation} from '@services/automation'

const MySwal = withReactContent(Swal)

const TableAutoFilter = ({setDataSubmit, setOpenModal}) => {
  // *** Mutation
  const {mutate: deleteFilter} = AutomationMutation.useDeleteFilter()

  // *** handleDelete
  const handleConfirmDelete = useCallback(
    _id => {
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
          deleteFilter(_id)
        }
      })
    },
    [deleteFilter],
  )

  // *** column
  const renderColumn = useCallback(
    () => [
      ...columns,
      {
        name: 'Thao tác',
        minWidth: '200px',
        cell: row =>
          setOpenModal !== undefined ? (
            <div className="row">
              <div>
                <Button.Ripple
                  className="px-2 mr-2 mt-1"
                  size="sm"
                  color="warning"
                  onClick={() => {
                    setDataSubmit({
                      _id: row._id,
                      name: row.name,
                      description: row.description,
                      account: row.account,
                      filter: row.filters,
                      table_type: row.table_type,
                    })
                    setOpenModal(true)
                  }}
                >
                  <Edit3 size="18" />
                </Button.Ripple>
              </div>
              <div>
                <Button.Ripple
                  className="px-2 mt-1"
                  size="sm"
                  color="danger"
                  onClick={() => handleConfirmDelete(row._id)}
                >
                  <Trash2 size="18" />
                </Button.Ripple>
              </div>
            </div>
          ) : (
            <div
              className="d-inline-block mb-1"
              onClick={() => {
                setDataSubmit({
                  _id: row._id,
                  name: row.name,
                  description: row.description,
                  account: row.account,
                  filter: row.filters,
                  table_type: row.table_type,
                })
              }}
            >
              <Button.Ripple outline color="primary" size="sm">
                Chọn
              </Button.Ripple>
            </div>
          ),
      },
    ],
    [handleConfirmDelete, setDataSubmit, setOpenModal],
  )

  // *** query
  const query = AutomationDatatable.useGetListDataFilter()

  return (
    <DataTableComponent
      columns={renderColumn()}
      query={query}
      searchPlaceholder="Tìm kiếm theo tên, mô tả, tên autojob"
    />
  )
}
export default TableAutoFilter
