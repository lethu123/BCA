import React, {useCallback} from 'react'
// *** Component

import DataTable from 'react-data-table-component'
import {ChevronDown} from 'react-feather'
import {Button, Spinner} from 'reactstrap'
import ReactPaginate from 'react-paginate'

// ** scss
import avatar1 from 'assets/images/avatars/avatar-blank.png'
// ** query
import {UserQuery} from '@services/user'

const TableAgencyTab = ({page, setPage, data}) => {
  const {data: users} = UserQuery.useGetListAllUserSys()

  console.log('data', users)
  const findUser = uid => {
    return users?.data.find(it => it.user_id === uid)
  }

  const ManagePostColumnTable = [
    {
      name: 'Người đăng',
      minWidth: '300px',
      cell: row => (
        <div className="d-flex align-items-center py-1">
          <img
            src={findUser(row.user_id)?.avatar || avatar1}
            alt="images"
            style={{width: 40, height: 40, borderRadius: '50%', marginRight: 7}}
            onError={e => {
              e.target.onerror = null
              e.target.src = avatar1
            }}
          />
          <div>
            <p className="mb-0 text-primary cursor-pointer">
              {findUser(row.user_id)?.profile?.name || 'Chưa có dữ liệu'}
            </p>
            <small> {findUser(row.user_id)?.email}</small>
          </div>
        </div>
      ),
    },

    {
      name: 'Lượt thích',
      minWidth: '120px',
      center: true,
      cell: row => <p>0</p>,
    },
    {
      name: 'Lượt chia sẻ',
      minWidth: '120px',
      center: true,
      cell: row => <p>{row.count_share || 0}</p>,
    },
    {
      name: 'Lượt bình luận',
      minWidth: '120px',
      center: true,
      cell: row => <p>{row.count_comment || 0}</p>,
    },

    {
      name: 'Lượt quà tặng',
      minWidth: '120px',
      center: true,
      cell: row => <p>0</p>,
    },
    {
      name: 'Số sao được tặng',
      minWidth: '150px',
      center: true,
      cell: row => <p>0</p>,
    },
  ]
  // *** Custom Pagination
  const CustomPagination = useCallback(
    () => (
      <ReactPaginate
        previousLabel=""
        nextLabel=""
        forcePage={page - 1}
        onPageChange={page => setPage(page.selected + 1)}
        pageCount={1}
        breakLabel="..."
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        activeClassName="active"
        pageClassName="page-item"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        nextClassName="page-item next"
        previousClassName="page-item prev"
        previousLinkClassName="page-link"
        pageLinkClassName={`page-link  `}
        containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center p-2 mt-1 mx-3"
      />
    ),
    [page],
  )

  return (
    <div className="mt-2">
      <DataTable
        noHeader
        pagination
        responsive
        highlightOnHover
        paginationServer
        pointerOnHover
        className="react-dataTable mb-10 "
        columns={ManagePostColumnTable}
        paginationPerPage={10}
        paginationDefaultPage={page + 1}
        paginationComponent={CustomPagination}
        data={data || []}
        sortIcon={<ChevronDown size={10} />}
        // progressPending={isLoading}
        progressComponent={
          <div>
            <Button.Ripple color="flat-primary">
              <Spinner color="primary" size="sm" type="grow" />
              <span className="ml-5 text-primary">Loading...</span>
            </Button.Ripple>
          </div>
        }
      />
    </div>
  )
}

export default TableAgencyTab
