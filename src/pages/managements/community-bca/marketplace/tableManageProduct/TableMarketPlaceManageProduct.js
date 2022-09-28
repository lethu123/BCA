import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import {BarChart2, ChevronDown, FileText, Filter} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {Button, Col, Input, Label, Row} from 'reactstrap'
import {FormattedMessage} from 'react-intl'
// *** Column Table
import {ManageProductColumnTable} from 'pages/columns-table/marketplace/ManageProductColumnTable'
// *** Component
import ModalDetailProduct from './ModalDetailProduct'

//data
const data = [{id: 1}, {id: 2}]
const TableMarketPlaceManageProduct = () => {
  // *** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [centeredModal, setCenteredModal] = useState(false)

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

  return (
    <div className="mt-10">
      <Row className="mx-0 my-5 w-100">
        <Col
          className="d-flex align-items-center justify-content-end mt-1"
          lg="5"
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
            placeholder="Nhập nội dung tìm kiếm ..."
          />
        </Col>
        <Col lg="7" className="text-right">
          <button className="btn btn-success mx-2">
            <FileText size={20} className="mr-2" />
            Xuất excel
          </button>

          <Button.Ripple color="warning" outline className="mr-2">
            <BarChart2 size={20} />
          </Button.Ripple>
          <Button.Ripple color="danger" outline>
            <Filter size={20} />
          </Button.Ripple>
        </Col>
      </Row>
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={[
          {
            name: 'ID',
            selector: 'id',
            maxWidth: '100px',
            cell: row => <p>1234</p>,
          },

          {
            name: 'Tên sản phẩm',
            selector: 'NameProduct',
            maxWidth: '180px',
            cell: row => (
              <p
                className="text-primary cursor-pointer"
                onClick={() => setCenteredModal(true)}
              >
                Sản phẩm số 1
              </p>
            ),
          },

          ...ManageProductColumnTable,
        ]}
        className="react-dataTable"
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={searchValue.length ? filteredData : data}
      />
      <ModalDetailProduct
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default TableMarketPlaceManageProduct
