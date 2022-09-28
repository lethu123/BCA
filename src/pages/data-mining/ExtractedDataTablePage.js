import {Card, CardHeader, CardTitle, Col, Input, Label, Row} from 'reactstrap'
import {ChevronDown} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {FormattedMessage} from 'react-intl'
import DataTable from 'react-data-table-component'
import {useState} from 'react'

// ** component
import {columns} from 'pages/columns-table/customer/MyPostLinkColumnTable'

const data = [
  {
    id: 1,
    link: 'http://fb.com',
    name: 'Pennington Lindsay',
    create_time: '20/11/2021',
    start_date: '20/11/2021',
    end_date: '20/11/2021',
    accumulated_point: 100, // Điểm tích lũy nhận được
    status_info: {
      id: 2,
      name: 'pending',
    },
  },
  {
    id: 1,
    link: 'http://fb.com',
    name: 'Pennington Lindsay',
    create_time: '20/11/2021',
    start_date: '20/11/2021',
    end_date: '20/11/2021',
    accumulated_point: 100, // Điểm tích lũy nhận được
    status_info: {
      id: 2,
      name: 'pending',
    },
  },
  {
    id: 1,
    link: 'http://fb.com',
    name: 'Penelope Collins',
    create_time: '20/11/2021',
    start_date: '20/11/2021',
    end_date: '20/11/2021',
    accumulated_point: 100, // Điểm tích lũy nhận được
    status_info: {
      id: 2,
      name: 'approved',
    },
  },
]
const ExtractedDataTable = () => {
  // *** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // *** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith = item.name
          .toLowerCase()
          .startsWith(value.toLowerCase())

        const includes = item.name.toLowerCase().includes(value.toLowerCase())
        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // *** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={
        searchValue.length ? filteredData.length / 10 : data.length / 10 || 1
      }
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
        'pagination my-3 react-paginate pagination-sm justify-content-center pr-1 mt-1'
      }
      nextLabel={''}
      previousLabel={''}
    />
  )

  return (
    <Card className="mt-10">
      <CardHeader className="border-bottom">
        <CardTitle tag="h4">Danh sách dữ liệu đã trích xuất được</CardTitle>
      </CardHeader>
      <Row className="justify-content-end mx-0 my-5">
        <Col
          className="d-flex align-items-center justify-content-end mt-1"
          md="4"
          sm="12"
        >
          <Label className="mr-1" for="search-input-1">
            <FormattedMessage id="Search" />
          </Label>
          <Input
            className="dataTable-filter mb-50"
            type="text"
            bsSize="sm"
            id="search-input-1"
            value={searchValue}
            onChange={handleFilter}
          />
        </Col>
      </Row>
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={columns}
        className="react-dataTable"
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={searchValue.length ? filteredData : data}
      />
    </Card>
  )
}

export default ExtractedDataTable
