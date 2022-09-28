// *** React Imports
import {Fragment, useCallback, useState} from 'react'

// *** Third Party Components
import ReactPaginate from 'react-paginate'
import {ChevronDown} from 'react-feather'
import {FormattedMessage} from 'react-intl'
import DataTable from 'react-data-table-component'
import {Badge, CardLink} from 'reactstrap'

const datas = [
  {
    id: '100071892007465',
    username: 'Trung Le',
    action: 'Kết bạn',
    start_date: '12/31/2021',
    end_date: '01/01/2022',
    result: 'Thất bại',
  },
  {
    id: '100072405606368',
    username: 'Tran Hiep Hoa',
    action: 'Kết bạn',
    start_date: '12/31/2021',
    end_date: '01/01/2022',
    result: 'Thất bại',
  },
]

const TableCampaign = ({data}) => {
  const campaignId = data?._id || ''

  // *** State
  const [currentPage, setCurrentPage] = useState(0)

  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // *** Pagination Previous Component
  const Previous = () => {
    return (
      <Fragment>
        <span className="align-middle d-none d-md-inline-block">
          <FormattedMessage id="Prev" />
        </span>
      </Fragment>
    )
  }

  // *** Pagination Next Component
  const Next = () => {
    return (
      <Fragment>
        <span className="align-middle d-none d-md-inline-block">
          <FormattedMessage id="Next" />
        </span>
      </Fragment>
    )
  }

  // *** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName={
        'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'
      }
    />
  )

  // *** Render columns
  const renderColumn = useCallback(() => {
    return [
      {
        name: 'Người nhận',
        cell: row => (
          <div>
            <CardLink
              href={`/admin/campaign-history/${row.id}/${campaignId}/`}
              target="_blank"
              className="font-weight-bold"
            >
              {row.username}
            </CardLink>
          </div>
        ),
      },
      {
        name: 'Tên hành động',
        maxWidth: '400px',
        cell: row => <p className="text-wrap">{row.action}</p>,
      },
      {
        name: 'Thời gian bắt đầu',
        cell: row => (
          <p>
            {/* {row.time_called && moment(new Date(row.time_called)).calendar()} */}
            {row.start_date}
          </p>
        ),
      },
      {
        name: 'Thời gian kết thúc',
        cell: row => <p>{row.end_date}</p>,
      },
      {
        name: 'Kết quả',
        cell: row => (
          <Badge color="light-danger" pill>
            {row.result}
          </Badge>
        ),
      },
    ]
  }, [campaignId])

  return (
    <>
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={renderColumn()}
        className="react-dataTable"
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={datas}
      />
    </>
  )
}

export default TableCampaign
