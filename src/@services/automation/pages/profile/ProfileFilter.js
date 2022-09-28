import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {Button} from 'reactstrap'

// *** DataTableComponent
import DataTableComponent from 'components/data-table/DataTableComponent'
import ModalProfileFilter from './ModalProfileFilter'

// *** column
import {columns} from '@services/automation/components/columns/AutoFilter'

// *** query
import {AutomationDatatable} from '@services/automation'

const ProfileFilter = () => {
  // *** react hook
  const {id} = useParams()

  // *** State
  const [dataSubmit, setDataSubmit] = useState({})
  // *** column
  const renderColumn = [
    ...columns,
    {
      name: 'Thao tác',
      minWidth: '200px',
      cell: row => (
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
            setOpenModal(!openModal)
          }}
        >
          <Button.Ripple outline color="primary" size="sm">
            Chọn
          </Button.Ripple>
        </div>
      ),
    },
  ]

  // *** query
  const query = AutomationDatatable.useGetListDataFilter()

  // *** useState
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <DataTableComponent
        columns={renderColumn.filter(el => el.selector !== 'account')}
        query={{...query, params: {account_uid: id}}}
        searchPlaceholder="Tìm kiếm theo tên, mô tả, tên autojob"
      />
      <ModalProfileFilter
        openModal={openModal}
        setOpenModal={setOpenModal}
        dataSubmit={dataSubmit}
        setDataSubmit={setDataSubmit}
      />
    </div>
  )
}
export default ProfileFilter
