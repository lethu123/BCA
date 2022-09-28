// *** React Imports
import {Fragment, useCallback, useState} from 'react'

// *** Third Party Components
import ReactPaginate from 'react-paginate'
import {ChevronDown, Users} from 'react-feather'
import {FormattedMessage} from 'react-intl'
import DataTable from 'react-data-table-component'
import {Input, Label, Row, Col, CardLink, Alert} from 'reactstrap'
import moment from 'moment'

// ***Components
import AppCollapse from '@core/components/app-collapse'

// *** Asset
import imgDefault from 'assets/images/avatars/avatar-blank.png'
import {useParams} from 'react-router-dom'

const TableCampaignHistory = ({datas}) => {
  const {campaignId} = useParams()
  let isForkInteraction = datas && datas.find(d => d.id)

  console.log(datas)

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
      updatedData = datas.filter(item => {
        const startsWith =
          item.receiver_info?.username
            ?.toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.sender_info?.username
            ?.toLowerCase()
            .startsWith(value.toLowerCase())

        const includes =
          item.receiver_info?.username
            ?.toLowerCase()
            .includes(value.toLowerCase()) ||
          item.sender_info?.username
            ?.toLowerCase()
            .includes(value.toLowerCase())

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
      pageCount={
        searchValue.length ? filteredData.length / 7 : datas.length / 7 || 1
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
        'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'
      }
    />
  )

  // *** Render columns
  const renderColumn = useCallback(() => {
    return [
      {
        name: 'Người gửi',
        cell: row => (
          <div className="d-flex align-items-center mt-5 mb-5">
            <div className="symbol symbol-40 symbol-light-white mr-5">
              <div>
                <img
                  src={imgDefault}
                  className="h-100 rounded align-self-end"
                  alt=""
                />
              </div>
            </div>

            <div className="d-flex flex-column font-weight-bold">
              <a
                href={`https://www.facebook.com/profile.php?id=${row.sender_info?.uid}`}
                target="_blank"
                className="text-dark text-hover-primary mb-1 font-size-lg"
                rel="noreferrer"
              >
                {row.sender_info?.username}
              </a>
              <span className="text-muted">
                <Users className="mr-2" size="12" />
                {row.sender_info?.c_friends}
              </span>
            </div>
          </div>
        ),
      },
      {
        name: 'Người nhận',
        cell: row => (
          <div>
            {row.receiver_info && (
              <CardLink
                href={`/admin/campaign-history/${row.receiver_info.uid}/${campaignId}/`}
                target="_blank"
                className="font-weight-bold"
              >
                {row.receiver_info?.username}
              </CardLink>
            )}
          </div>
        ),
      },
      {
        name: 'Nội dung',
        maxWidth: '400px',
        cell: row => <p className="text-wrap">{row.content}</p>,
      },
      {
        name: 'Thời gian bắt đầu',
        cell: row => (
          <p>
            {row.time_called && moment(new Date(row.time_called)).calendar()}
          </p>
        ),
      },
      {
        name: 'Thời gian kết thúc',
        cell: row => (
          <p>{row.time_done && moment(new Date(row.time_done)).calendar()}</p>
        ),
      },
    ]
  }, [])

  const renderLabelForkInteraction = data =>
    data.type === 'time' && data.config.type
      ? data.label + ` (${data.config?.value} ${data.config.type})`
      : (data.type === 'tag' || data.type === 'checkbox') &&
        data.config?.length > 0
      ? data.label + ` (${data.config?.join(', ')})`
      : data.label

  const renderAppCollapseForkInteraction = () => (
    <AppCollapse
      data={
        (datas &&
          datas.map(ele => ({
            title: (
              <div className="text-primary font-weight-bold">
                {renderLabelForkInteraction(ele)}
              </div>
            ),
            content: (
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
                data={ele.history_info || []}
              />
            ),
          }))) ||
        []
      }
      accordion
    />
  )

  if (!datas)
    return (
      <Alert color="primary">
        <div className="alert-body">Không tìm thấy dữ liệu</div>
      </Alert>
    )

  return (
    <>
      {!isForkInteraction && (
        <Row className="justify-content-end mx-0">
          <Col
            className="d-flex align-items-center justify-content-end mt-1"
            md="6"
            sm="12"
          >
            <Label className="mr-1" for="search-input-26">
              <FormattedMessage id="Search" />
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input-26"
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
      )}
      {isForkInteraction ? (
        renderAppCollapseForkInteraction()
      ) : (
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
          data={searchValue.length ? filteredData : datas}
        />
      )}
    </>
  )
}

export default TableCampaignHistory
