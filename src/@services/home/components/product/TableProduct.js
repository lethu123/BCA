import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import {ProductColumnTable} from 'pages/columns-table/product/ProductColumnTable'
import {Button, Input, Row, Col, Label} from 'reactstrap'
import {BarChart2, ChevronDown, FileText, Filter, Plus} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {FormattedMessage} from 'react-intl'

const TableProduct = ({centeredModal, setCenteredModal}) => {
  // *** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarFilter, setSidebarFilter] = useState(false)
  // data
  const data = [
    {
      id: 1,
      name: 'Sinh nhật',
      create_date: new Date(),
      start_date: new Date(),
      end_date: new Date(),
      result: 'KH mua hàng', // KH từ chối  || KH không trả lời
    },
    {
      id: 2,
      name: 'Sinh nhật',
      create_date: new Date(),
      start_date: new Date(),
      end_date: new Date(),
      result: 'KH từ chối ',
    },
    {
      id: 3,
      name: 'Giáng sinh',
      create_date: new Date(),
      start_date: new Date(),
      end_date: new Date(),
      result: 'KH không trả lời ',
    },
  ]
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
  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
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

  return (
    <div>
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
          <Button.Ripple
            color="danger"
            onClick={() => {
              setCenteredModal(!centeredModal)
            }}
          >
            <Plus size={15} /> Tạo sản phẩm
          </Button.Ripple>
          <button class="btn btn-primary mx-2">
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
      <div style={{marginTop: 40}}>
        <DataTable
          noHeader
          pagination
          responsive
          highlightOnHover
          paginationServer
          pointerOnHover
          className="react-dataTable mb-10"
          columns={ProductColumnTable}
          data={data}
          sortIcon={<ChevronDown size={10} />}
          paginationComponent={CustomPagination}
        />
      </div>
    </div>
  )
}

export default TableProduct
