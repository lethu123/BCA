// ** React Imports
import {useState} from 'react'

// ** Table columns & Expandable Data
import ExpandableTable, {data} from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import {
  Archive,
  ChevronDown,
  FileText,
  MoreVertical,
  Star,
  Trash,
} from 'react-feather'
import DataTable from 'react-data-table-component'
import {
  Input,
  Col,
  Label,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

// ** Custom Components
import Avatar from '@core/components/avatar'

// ** Vars
const states = [
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'primary',
  'secondary',
]

const columns = [
  {
    name: 'Sudent',
    selector: 'full_name',
    sortable: true,
    minWidth: '250px',
    maxWidth: '350px',
    cell: row => (
      <div className="py-1">
        <div className="d-flex align-items-center  ">
          {row.avatar === '' ? (
            <Avatar
              color={`light-${states[row.status]}`}
              content={row.full_name}
              initials
              size="lg"
            />
          ) : (
            <Avatar
              size="lg"
              img={
                require(`assets/images/portrait/small/avatar-s-${row.avatar}`)
                  .default
              }
            />
          )}
          <div className="user-info text-truncate ml-1">
            <span className="d-block font-weight-bold text-truncate">
              {row.full_name}
            </span>
            <small>{row.post}</small>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px',
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px',
  },
]

const StudentsClass = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // ** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: {title: 'Current', color: 'light-primary'},
      2: {title: 'Professional', color: 'light-success'},
      3: {title: 'Rejected', color: 'light-danger'},
      4: {title: 'Resigned', color: 'light-warning'},
      5: {title: 'Applied', color: 'light-info'},
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title
            .toLowerCase()
            .startsWith(value.toLowerCase())

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.post.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.age.toLowerCase().includes(value.toLowerCase()) ||
          item.salary.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

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

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={10}
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
        'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1'
      }
    />
  )

  return (
    <div>
      <Row className="justify-content-end mx-0 my-2 ">
        <Col
          className="d-flex align-items-center justify-content-end  "
          md="6"
          sm="12"
        >
          <Label className="mr-1" for="search-input-1">
            Search
          </Label>
          <Input
            className="dataTable-filter mb-50 "
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
        data={searchValue.length ? filteredData : data}
        expandableRows
        columns={columns}
        expandOnRowClicked
        className=""
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        expandableRowsComponent={<ExpandableTable />}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        paginationComponent={CustomPagination}
      />
    </div>
  )
}

export default StudentsClass
