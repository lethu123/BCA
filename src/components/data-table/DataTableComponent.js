// *** React Imports
import React, {
  Fragment,
  useState,
  forwardRef,
  useCallback,
  useEffect,
} from 'react'
import {useDebounce} from 'ahooks'
import axios from 'axios'

// *** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown} from 'react-feather'
import {
  Button,
  Card,
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Spinner,
  UncontrolledAlert,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import XLSX from 'xlsx'
import {useLocation} from 'react-router-dom'

// *** My component
import TableHeader from './TableHeader'

// *** Query
import {useQuery, useQueryClient} from 'react-query'

// *** utils
import {formatViDate} from 'utility/Utils'
// import {toast} from 'react-toastify'

// *** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({onClick, ...rest}, ref) => (
  <div className="form-check form-check-sm form-check-custom form-check-solid me-3 border border-primary-1">
    <input
      className="form-check-input"
      type="checkbox"
      ref={ref}
      {...rest}
      onClick={onClick}
    />
  </div>
))

const initialParamQuery = {
  searchValue: '',
  currentPage: 0,
  paginationPerPage: 10,
  filterObject: {},
  sortData: {name: '', is_asc: true},
}

const DataTableComponent = ({
  columns = [],
  ExpandableComponent,
  FilterComponent,
  isExport,
  handleModal,
  handleDelete,
  query,
  searchPlaceholder,
  defaultData = [],
  isNoShadow = true,
}) => {
  // *** location
  const {pathname} = useLocation()

  // *** States
  const [isAlertNoData, setIsAlertNoData] = useState(false)
  const [allSelected, setAllSelected] = useState([])
  let queryLocal = localStorage.getItem('data-table')

  if (queryLocal) {
    queryLocal = JSON.parse(queryLocal)
  }

  // const handleLocalQuery = queryParam => ({
  //   searchValue: queryParam[0],
  //   currentPage: queryParam[1],
  //   paginationPerPage: queryParam[2],
  //   filterObject: queryParam[3],
  //   sortData: queryParam[4],
  // })

  const [paramQuery, setParamQuery] = useState(initialParamQuery)

  let {searchValue, currentPage, paginationPerPage, filterObject, sortData} =
    paramQuery

  const debouncedValue = useDebounce(searchValue, {wait: 1200})
  const [columnSetting, setColumnSetting] = useState(
    columns
      .filter(ele => !ele.hidden)
      .map(ele => ({...ele, checked: true, id: ele.name})),
  )

  // *** Save local
  useEffect(() => {
    localStorage.setItem(
      'data-table',
      JSON.stringify({
        ...queryLocal,
        [pathname]: [
          searchValue,
          currentPage,
          paginationPerPage,
          filterObject,
          sortData,
        ],
      }),
    )
  }, [
    pathname,
    searchValue,
    currentPage,
    paginationPerPage,
    filterObject,
    sortData,
    queryLocal,
  ])

  // *** Call Api
  const handleCallApi = useCallback(
    async page => {
      return await axios
        .get(query.url, {
          params: {
            search: debouncedValue.length > 0 ? debouncedValue : null,
            page: page + 1,
            limit: paginationPerPage,
            uid: query.uid ? query.uid : null,
            order: sortData.name?.length > 0 ? sortData.name : null,
            order_type:
              sortData.name?.length > 0
                ? sortData.is_asc
                  ? 'ASC'
                  : 'DESC'
                : null,

            ...query.params,
            ...filterObject,
          },
          headers: query?.headers,
        })
        .then(res => {
          return res.data
        })
    },
    [
      debouncedValue,
      filterObject,
      paginationPerPage,
      query?.headers,
      query.params,
      query.uid,
      query.url,
      sortData?.is_asc,
      sortData?.name,
    ],
  )

  // *** useQuery
  const {data, isLoading} = useQuery(
    [
      ...query.key, //Key định danh
      debouncedValue, //search
      currentPage, // page
      paginationPerPage, //limit
      filterObject, // Lọc
      sortData, // sort
      query.params,
    ],
    () => handleCallApi(currentPage),
    {
      staleTime: 0,
      refetchOnMount: true,
    },
  )

  const queryClient = useQueryClient()
  // *** Prefetch
  useEffect(() => {
    if (
      query.key &&
      (data?.metadata?.total_page || data?.metadata?.num_pages)
    ) {
      let maxPostPage = data?.metadata?.total_page || data?.metadata?.num_pages
      if (currentPage + 1 < maxPostPage) {
        const nextPage = currentPage + 1
        queryClient.prefetchQuery(
          [
            ...query.key,
            debouncedValue,
            nextPage,
            paginationPerPage,
            filterObject,
            sortData,
            query.params || null,
          ],
          () => handleCallApi(nextPage),
        )
      }
    }
  }, [data])

  // *** Check that page contains no results
  useEffect(() => {
    if (
      data &&
      data.data?.length === 0 &&
      ((data.metadata && !data.metadata.valid_page) ||
        data.metadata?.total_page < paramQuery.currentPage + 1)
    ) {
      setParamQuery(initialParamQuery)
      setIsAlertNoData(true)
    }
  }, [data, paramQuery.currentPage])

  useEffect(() => {
    let timer1 = null
    if (isAlertNoData) {
      timer1 = setTimeout(() => setIsAlertNoData(false), 5000)
    }
    return () => {
      clearTimeout(timer1)
    }
  }, [isAlertNoData])

  // *** Function to handle search
  const handleSearch = (name, value) => {
    setParamQuery({...paramQuery, searchValue: value.toLowerCase()})
  }

  // *** Function to handle Pagination
  const handlePagination = useCallback(
    page => {
      setParamQuery({...paramQuery, currentPage: page.selected})
    },
    [paramQuery],
  )

  // *** Custom Pagination
  const CustomPagination = useCallback(
    () => (
      <div
        className={`d-md-flex align-items-center justify-content-md-between mx-10 ${
          data?.data?.length > 1 ? 'mt-3' : 'mt-20'
        }`}
      >
        <ReactPaginate
          previousLabel=""
          nextLabel=""
          forcePage={currentPage}
          onPageChange={page => handlePagination(page)}
          pageCount={
            data?.metadata?.total_page || data?.metadata?.num_pages || 1
          }
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
          pageLinkClassName={`page-link ${
            data?.metadata?.total_page > 1000 ? 'mx-3 p-5' : ''
          }`}
          containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center p-2 mt-1 mx-3"
        />
        <div className="text-center text-md-right mb-md-0 mb-3">
          <UncontrolledButtonDropdown>
            <DropdownToggle color="primary" size="sm" caret>
              {paginationPerPage}
            </DropdownToggle>
            <DropdownMenu>
              {[5, 10, 20, 50, 100].map(ele => (
                <DropdownItem
                  className="text-center"
                  key={ele}
                  tag="a"
                  onClick={() => {
                    setParamQuery({...paramQuery, paginationPerPage: ele})
                  }}
                >
                  {ele}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <span className="datatable-pager-detail ml-2 ">
            Showing {currentPage * paginationPerPage + 1} -{' '}
            {currentPage + 1 === data?.metadata?.total_page
              ? currentPage * paginationPerPage + data?.metadata?.result
              : (currentPage + 1) * paginationPerPage}{' '}
            of {data?.metadata?.count || 5}
          </span>
        </div>
      </div>
    ),
    [
      data?.data?.length,
      data?.metadata?.total_page,
      data?.metadata?.num_pages,
      data?.metadata?.result,
      data?.metadata?.count,
      currentPage,
      paginationPerPage,
      handlePagination,
      paramQuery,
    ],
  )

  // *** Export file
  function handleExport(fileName, fileFormat) {
    let fileType = `${fileName}.${fileFormat}`
    let array = handleFormatDataExport()
    const ws = XLSX.utils.json_to_sheet(array)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws)
    XLSX.writeFile(wb, fileType)
  }

  // *** Handle select row
  const handleOnSelectRowsChange = ({
    allSelected,
    selectedCount,
    selectedRows,
  }) => {
    setAllSelected(selectedRows)
  }

  // *** Handle on sort
  const handleOnSort = useCallback(
    (column, sortDirection) => {
      setParamQuery({
        ...paramQuery,
        sortData: {
          name: column.selector,
          is_asc: sortDirection !== 'asc',
        },
      })
    },
    [paramQuery],
  )

  // *** Chuyển dòng đầu tiên trong excel thành tiếng việt
  const handleFormatDataExport = useCallback(() => {
    if (data && data.data && data.data.length > 0) {
      let objKeys = columns.reduce((previousValue, currentValue) => {
        if (currentValue.selector) {
          return {...previousValue, [currentValue.selector]: currentValue.name}
        } else {
          return {...previousValue}
        }
      }, {})
      return data.data.reduce((previousValue, currentValue) => {
        let newObj = {}
        Object.keys(objKeys).forEach(key => {
          if (currentValue[key] && currentValue[key].id) {
            newObj = {
              ...newObj,
              [objKeys[key]]:
                currentValue[key].name || currentValue[key].username,
            }
          } else if (
            currentValue[key] &&
            new Date(currentValue[key]).getFullYear() > 2000
          ) {
            newObj = {
              ...newObj,
              [objKeys[key]]: formatViDate(currentValue[key]),
            }
          } else {
            newObj = {...newObj, [objKeys[key]]: currentValue[key]}
          }
        })
        return [...previousValue, newObj]
      }, [])
    } else {
      return []
    }
  }, [columns, data])

  return (
    <Fragment>
      <Card className={isNoShadow ? 'no-boxshow' : ''}>
        <TableHeader
          handleSearch={handleSearch}
          handleDelete={handleDelete}
          handleExport={handleExport}
          allSelected={allSelected}
          loading={isLoading}
          showModal={handleModal}
          isExport={isExport}
          FilterComponent={FilterComponent}
          setFilterObject={obj =>
            setParamQuery({...paramQuery, filterObject: obj})
          }
          filterObject={filterObject}
          searchPlaceholder={searchPlaceholder}
          columns={columnSetting}
          setColumns={setColumnSetting}
          handleRefresh={() => {
            setParamQuery(initialParamQuery)
          }}
          searchValue={paramQuery.searchValue}
        />
        {isAlertNoData && (
          <CardHeader className="d-flex p-1 align-items-center">
            <UncontrolledAlert
              color="danger"
              className="mb-0 d-flex align-items-center p-1"
              style={{width: '270px', height: '40px'}}
            >
              <div className="alert-body p-0">
                Dữ liệu bạn tìm không tồn tại!
              </div>
            </UncontrolledAlert>
          </CardHeader>
        )}

        <DataTable
          noHeader
          pagination
          selectableRows={!(handleDelete === undefined)}
          expandableRows={!(ExpandableComponent === undefined)}
          responsive
          highlightOnHover
          paginationServer
          pointerOnHover
          className="react-dataTable mb-10 "
          columns={columnSetting.filter(ele => ele.checked)}
          paginationPerPage={paginationPerPage}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={defaultData.length > 0 ? defaultData : data?.data || []}
          selectableRowsComponent={BootstrapCheckbox}
          onSelectedRowsChange={handleOnSelectRowsChange}
          expandableRowsComponent={
            ExpandableComponent !== undefined && ExpandableComponent
          }
          sortIcon={<ChevronDown size={10} />}
          onSort={handleOnSort}
          progressPending={defaultData.length > 0 ? false : isLoading}
          progressComponent={
            <div>
              <Button.Ripple color="flat-primary">
                <Spinner color="primary" size="sm" type="grow" />
                <span className="ml-5 text-primary">Loading...</span>
              </Button.Ripple>
            </div>
          }
        />
      </Card>
    </Fragment>
  )
}

export default DataTableComponent
