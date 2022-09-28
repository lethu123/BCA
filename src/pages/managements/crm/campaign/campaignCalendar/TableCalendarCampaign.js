import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import {BarChart2, ChevronDown, FileText, Filter, Settings} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {Button, Col, Input, Label, Row} from 'reactstrap'
import {FormattedMessage} from 'react-intl'
import SettingColumnFBOfUser from './SettingColumnFBOfUser'
import FilterFBOfUser from './FilterFBOfUser'
// *** Column Table
import {CalendarCampaignColumnTable} from 'pages/columns-table/campaignAdmin/calendarCampaign/CalendarCampaignColumnTable'
import {CalendarCampaignExpandColumnTable} from 'pages/columns-table/campaignAdmin/calendarCampaign/CalendarCampaignExpandColumnTable'
// *** Custom scss
import './Table.style.scss'

//data
const data = [
  {
    id: 1,
    user_info: {
      id: 31,
      username: 'Hoàng Quyên',
      avatar: '',
      url: '',
    },
    link_info: {
      id: 11,
      name: 'Natalya',
      avatar: '',
      url: '',
    },
    status: 'Hoạt động',
    action: 'Like',
    type: 'Khớp',
    create_date: '10-10-2022',
    use_date: '08-10-2022',
  },
  {
    id: 2,
    user_info: {
      id: 31,
      username: 'Thu Kara',
      avatar: '',
      url: '',
    },
    link_info: {
      id: 11,
      name: 'Capheny',
      avatar: '',
      url: '',
    },
    status: 'Hoạt động',
    action: 'Like',
    type: 'Khớp',
    create_date: '10-10-2022',
    use_date: '08-10-2022',
  },
  {
    id: 3,
    user_info: {
      id: 31,
      username: 'Huy dominicus',
      avatar: '',
      url: '',
    },
    link_info: {
      id: 11,
      name: 'Zuka',
      avatar: '',
      url: '',
    },
    status: 'Hoạt động',
    action: 'Like',
    type: 'Khớp',
    create_date: '10-10-2022',
    use_date: '08-10-2022',
  },
  {
    id: 4,
    user_info: {
      id: 31,
      username: 'Vũ vâu',
      avatar: '',
      url: '',
    },
    link_info: {
      id: 11,
      name: 'Amily',
      avatar: '',
      url: '',
    },
    status: 'Hoạt động',
    action: 'Like',
    type: 'Khớp',
    create_date: '10-10-2022',
    use_date: '08-10-2022',
  },
]
// data Expand
const dataExpand = [
  {
    id: 1,
    name: 'Lấy dữ liệu',
    startTime: new Date(),
    endTine: new Date(),
    executionTime: '5h',
    totalTime: '2h',
    totalCustomer: 200,
    status: 'Hoàn thành',
    typeCampaign: 'Lấy dữ liệu',
  },
  {
    id: 2,
    name: 'Gửi email',
    startTime: new Date(),
    endTine: new Date(),
    executionTime: '5h',
    totalTime: '2h',
    totalCustomer: 200,
    status: 'Hoàn thành',
    typeCampaign: 'Gửi email',
  },
  {
    id: 3,
    name: 'Thêm bạn bè',
    startTime: new Date(),
    endTine: new Date(),
    executionTime: '5h',
    totalTime: '2h',
    totalCustomer: 200,
    status: 'Hoàn thành',
    typeCampaign: 'Thêm bạn bè',
  },
  {
    id: 4,
    name: 'Nhắn tin FB',
    startTime: new Date(),
    endTine: new Date(),
    executionTime: '5h',
    totalTime: '2h',
    totalCustomer: 200,
    status: 'Hoàn thành',
    typeCampaign: 'Nhắn tin FB',
  },
]

const TableCalendarCampaign = () => {
  // *** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarFilter, setSidebarFilter] = useState(false)

  // *** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.user_info.username
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.link_info.name.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.user_info.username.toLowerCase().includes(value.toLowerCase()) ||
          item.link_info.name.toLowerCase().includes(value.toLowerCase())
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
  const ExpandableTable = ({data}) => {
    return (
      <DataTable
        noHeader
        // pagination
        data={dataExpand}
        columns={CalendarCampaignExpandColumnTable}
        className="react-dataTable expandTableCalendarCampaign"
        sortIcon={<ChevronDown size={10} />}
        // paginationRowsPerPageOptions={[10, 25, 50, 100]}
      />
    )
  }
  return (
    <div className="mt-10">
      <Row className="mx-0 my-5 w-100">
        <Col
          className="d-flex align-items-center justify-content-end mt-1"
          md="5"
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
            placeholder="Nhập thông tin tìm kiếm ..."
          />
        </Col>
        <Col md="7" sm="12" className="text-right">
          <button class="btn btn-warning mr-2">
            <FileText size={20} className="mr-2" />
            Xuất excel
          </button>

          <Button.Ripple
            color="warning"
            outline
            className="mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <BarChart2 size={20} />
          </Button.Ripple>
          <Button.Ripple
            color="danger"
            outline
            onClick={() => setSidebarFilter(!sidebarFilter)}
          >
            <Filter size={20} />
          </Button.Ripple>
        </Col>
      </Row>
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={CalendarCampaignColumnTable}
        className="react-dataTable"
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={searchValue.length ? filteredData : data}
        // ExpandableTable
        expandableRows
        expandableRowsComponent={<ExpandableTable />}
      />

      <SettingColumnFBOfUser
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <FilterFBOfUser
        setSidebarFilter={setSidebarFilter}
        sidebarFilter={sidebarFilter}
      />
    </div>
  )
}

export default TableCalendarCampaign
