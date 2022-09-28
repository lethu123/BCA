import React from 'react'

// *** Core datatable
import DataTableComponent from 'components/data-table/DataTableComponent'

// *** Column
import {PotentialCustomersColumnTable} from './columns'

import {CustomerLeadsDatatable} from '@services/customer-leads'
import {useParams} from 'react-router-dom'

const PotentialCustomers = () => {
  let {id} = useParams()

  const query = CustomerLeadsDatatable.useGetListCustomerLeadAssigned(id)

  return (
    <div>
      <h4 className="font-weight-bolder">Danh sách khách hàng tiềm năng</h4>
      <DataTableComponent
        // *** required
        query={query}
        columns={PotentialCustomersColumnTable}
        // ** optional - default undefined
        // ExpandableComponent={ExpandableTable}
        // FilterComponent={FilterComponent}
        isExport
        // handleModal={handleModal}
        // handleDelete={handleDelete}
        searchPlaceholder="Tìm kiếm"
      />
    </div>
  )
}

export default PotentialCustomers
