import React, {useState, useEffect} from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Spinner,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import {useDebounce} from 'ahooks'
import {Link, useLocation} from 'react-router-dom'

// *** Icon
import {Eye, EyeOff, RefreshCcw, Search} from 'react-feather'
import {checkPositiveNumber} from 'utility/Utils'

// *** Components
import {
  ListCustomerLeads,
  ModalExportCustomerLead,
  ModalCustomerFunnel,
  ModalCreateTags,
  FilterCustomerLead,
  ModalDeleteTag,
  ModalAssignUidAccountSys,
} from '@services/customer-leads'

import Statistic from '@services/customer-leads/components/statistic/StatisticCustomerLeads'

// *** Form Field
import TextField from 'components/form/TextField'

// ** QUERY
import {queryClient} from 'react-query/queryClient'

import {CustomerLeadsQuery} from '@services/customer-leads'

//*** SCSS
import 'react-slidedown/lib/slidedown.css'

const handleGetDataFilterLocal = search => {
  let filter = localStorage.getItem('customer_lead_filter')
  if (filter && search && search.includes('automation_filter')) {
    return JSON.parse(filter)
  } else {
    return {}
  }
}

const CustomerLeadsPage = () => {
  // *** Location
  const {search: searchQuery} = useLocation()

  // *** State
  // *** Open modal
  const [modalExport, setModalExport] = useState(false)
  const [modalCustomerFunnel, setModalCustomerFunnel] = useState(false)
  const [modalCreateTags, setCreateTags] = useState(false)
  const [modalDeleteTag, setDeleteTag] = useState(false)
  const [modalAssignUid, setModalAssignUid] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')
  const [limit, setLimit] = useState(20)
  const [filter, setFilter] = useState(handleGetDataFilterLocal(searchQuery))
  const [checkTag, setCheckTag] = useState(false)
  const [titleTags, setTitleTags] = useState(false)
  const [uidSelect, setUidSelect] = useState(0)
  const [uidSelectCustom, setUidSelectCustom] = useState(0)
  const [limitUidCustom, setLimitUidCustom] = useState(0)
  const [dropdownOpenTopUid, setDropdownOpenTopUid] = useState(false)
  const [dropdownOpenSelectMultiUid, setDropdownOpenSelectMultiUid] =
    useState(false)

  const [dataCheked, setDataCheked] = useState([])

  // *** Status Open Filter
  const [openFilter, setOpenFilter] = useState(false)

  const toggleDropdownTopUid = () => {
    setDropdownOpenTopUid(!dropdownOpenTopUid)
  }

  const toggleDropdownSelectMultiUid = () => {
    setDropdownOpenSelectMultiUid(!dropdownOpenSelectMultiUid)
  }

  const debouncedValue = useDebounce(search, {wait: 800})

  // *** Data customers
  const {data: listCustomerLeads, isLoading} =
    CustomerLeadsQuery.useListProfileLeads(
      debouncedValue,
      currentPage + 1,
      limit,
      filter,
    )

  useEffect(() => {
    if (listCustomerLeads) {
      setDataCheked(
        listCustomerLeads.data.map(ele => ({...ele, checked: true})),
      )
    }
  }, [listCustomerLeads])

  // *** Hanlde Filter top n uid select
  useEffect(() => {
    if (uidSelect > 0) {
      setFilter(filter => ({...filter, top_n_uid: uidSelect}))
    }
  }, [uidSelect])

  // *** Data list tags customer lead
  const {data: listTags} = CustomerLeadsQuery.useListTagsCustomerLead()

  console.log('tags', listTags)
  // *** List Funnel Action
  const {data: listFunnelAction} = CustomerLeadsQuery.useListFunnelAction()

  // *** List Funnel operator
  const {data: listFunnelOperator} = CustomerLeadsQuery.useListFunnelOperator()

  // *** List Funnel
  const {data: listFunnel} = CustomerLeadsQuery.useListFunnelCustomerLead()

  // *** Prefetch page 2 ***
  useEffect(() => {
    if (
      listCustomerLeads?.metadata?.total_page ||
      listCustomerLeads?.metadata?.num_pages
    ) {
      let maxPostPage =
        listCustomerLeads?.metadata?.total_page ||
        listCustomerLeads?.metadata?.num_pages
      if (currentPage + 1 < maxPostPage) {
        const nextPage = currentPage + 2

        const {key, fn} = CustomerLeadsQuery.prefectListProfileLeads(
          debouncedValue,
          nextPage,
          limit,
          filter,
        )
        queryClient.prefetchQuery(
          [...key, nextPage, debouncedValue, filter],
          () => fn,
        )
      }
    }
  }, [
    currentPage,
    listCustomerLeads?.metadata?.num_pages,
    listCustomerLeads?.metadata?.total_page,
    debouncedValue,
    filter,
    limit,
  ])

  const handleSearch = (name, value) => {
    setSearch(value)
  }

  const handleChangeLimitUid = value => {
    setLimit(value)
    setDataCheked(data => data.map(d => ({...d, checked: true})))
  }

  return (
    <div className="customer-page ">
      <Breadcrumb className="py-2">
        <BreadcrumbItem>
          <Link to="/home"> Trang Chủ </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Khách Hàng Tiềm Năng </span>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* STATISTIC */}
      <Statistic />

      <div className="row mb-2 d-flex align-items-start">
        <div className=" col-12 col-lg-12">
          <div className="d-flex">
            <div className="mr-1">
              <Button.Ripple
                color="success"
                onClick={() => setOpenFilter(!openFilter)}
              >
                {openFilter ? (
                  <div>
                    <EyeOff size={14} className="mr-1" />
                    <span className="align-middle ms-25">Ẩn bộ lọc</span>
                  </div>
                ) : (
                  <span>
                    <Eye size={14} className="mr-1" />
                    <span className="align-middle ms-25">Hiện bộ lọc</span>
                  </span>
                )}
              </Button.Ripple>
            </div>
            {
              <div className=" mr-1">
                <Button.Ripple
                  color="warning"
                  onClick={() => {
                    setModalExport(true)
                  }}
                  disabled={
                    !(
                      debouncedValue ||
                      Object.keys(filter)?.filter(key => filter[key])?.length
                    )
                  }
                >
                  Xuất excel
                </Button.Ripple>
              </div>
            }

            <div className="mr-1">
              <UncontrolledButtonDropdown>
                <DropdownToggle color={'info'} caret>
                  Thao tác
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    tag="div"
                    onClick={() => {
                      setCreateTags(!modalCreateTags)
                      setTitleTags(false)
                    }}
                  >
                    Gán tags
                  </DropdownItem>

                  <DropdownItem
                    tag="div"
                    onClick={() => setModalCustomerFunnel(true)}
                  >
                    {listFunnel?.length > 0
                      ? 'Cập nhật Customer Funnel'
                      : 'Tạo Customer Funnel'}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>

            <div className="mr-1">
              <ButtonDropdown
                isOpen={dropdownOpenTopUid}
                toggle={toggleDropdownTopUid}
              >
                <DropdownToggle color={'danger'} caret>
                  {uidSelect > 0
                    ? `Top uid gần đây (${uidSelect})`
                    : 'Top uid gần đây'}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="div" onClick={() => setUidSelect(20)}>
                    20
                  </DropdownItem>
                  <DropdownItem tag="div" onClick={() => setUidSelect(50)}>
                    50
                  </DropdownItem>
                  <DropdownItem tag="div" onClick={() => setUidSelect(100)}>
                    100
                  </DropdownItem>
                  <Form className="px-2">
                    <FormGroup>
                      <Input
                        type="number"
                        placeholder="Tự nhập..."
                        name="customTopN"
                        value={uidSelectCustom}
                        className={
                          checkPositiveNumber(uidSelectCustom)
                            ? 'border-danger mb-2'
                            : 'mb-2'
                        }
                        onChange={e => setUidSelectCustom(e.target.value)}
                      />
                      <Button
                        className="mt-2"
                        color="primary"
                        type="button"
                        size="sm"
                        disabled={checkPositiveNumber(uidSelectCustom)}
                        onClick={() => {
                          setUidSelect(uidSelectCustom)
                          toggleDropdownTopUid()
                        }}
                      >
                        Submit
                      </Button>
                    </FormGroup>
                  </Form>
                </DropdownMenu>
              </ButtonDropdown>
            </div>

            <div className="mr-1">
              <UncontrolledButtonDropdown>
                <DropdownToggle color="secondary" caret>
                  Uid đã chọn ({dataCheked.filter(el => el.checked).length})
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => handleChangeLimitUid(10)}
                    href="/"
                    tag="a"
                  >
                    10
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => handleChangeLimitUid(20)}
                    href="/"
                    tag="a"
                  >
                    20
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => handleChangeLimitUid(30)}
                    href="/"
                    tag="a"
                  >
                    50
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => handleChangeLimitUid(100)}
                    href="/"
                    tag="a"
                  >
                    100
                  </DropdownItem>
                  <Form className="px-2">
                    <FormGroup>
                      <Input
                        type="number"
                        placeholder="Tự nhập..."
                        name="customTopN"
                        value={limitUidCustom}
                        className={
                          checkPositiveNumber(limitUidCustom)
                            ? 'border-danger mb-2'
                            : 'mb-2'
                        }
                        onChange={e => setLimitUidCustom(e.target.value)}
                      />
                      <Button.Ripple
                        className=""
                        color="primary"
                        type="button"
                        size="sm"
                        disabled={checkPositiveNumber(uidSelectCustom)}
                        onClick={() => {
                          handleChangeLimitUid(limitUidCustom)
                          toggleDropdownSelectMultiUid()
                        }}
                      >
                        Submit
                      </Button.Ripple>
                      <Button.Ripple
                        className="mt-1"
                        color="danger"
                        type="button"
                        size="sm"
                        outline
                        onClick={() => {
                          setDataCheked(data =>
                            data.map(d => ({...d, checked: false})),
                          )
                          toggleDropdownSelectMultiUid()
                        }}
                      >
                        Bỏ Chọn
                      </Button.Ripple>
                    </FormGroup>
                  </Form>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>

            <div>
              <Button.Ripple
                color="info"
                className="mr-1"
                onClick={() => setModalAssignUid(true)}
              >
                Chia dữ liệu
              </Button.Ripple>
            </div>

            <div>
              <Button.Ripple
                className="btn-icon rounded-circle"
                outline
                color="primary"
                onClick={() => {
                  setFilter({})
                  setSearch('')
                  setCheckTag(false)
                  setUidSelect(0)
                }}
              >
                <RefreshCcw size={14} />
              </Button.Ripple>
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-3">
          <TextField
            icon={<Search size={16} />}
            type="text"
            name="search_header"
            size="lg"
            placeholder="Tìm kiếm theo tên email, địa chỉ,..."
            onChange={handleSearch}
            disabled={isLoading}
            value={search}
          />
        </div>
      </div>
      <FilterCustomerLead
        filter={filter}
        setFilter={setFilter}
        openFilter={openFilter}
      />
      {isLoading ? (
        <Button color="primary" outline>
          <Spinner color="primary" size="sm" type="grow" />
          <span className="ml-2">Đang lấy dữ liệu ...</span>
        </Button>
      ) : (
        <div className="">
          <ListCustomerLeads
            isLoading={isLoading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            datas={dataCheked.length > 0 ? dataCheked : []}
            metadata={listCustomerLeads?.metadata || {}}
            checkTag={checkTag}
            setDataCheked={setDataCheked}
          />
        </div>
      )}

      <ModalExportCustomerLead
        modalExport={modalExport}
        toggleModal={() => setModalExport(false)}
        pages={listCustomerLeads?.metadata?.num_pages || 0}
        data={listCustomerLeads}
        filter={filter}
        debouncedValue={debouncedValue}
        currentPage={currentPage}
      />

      <ModalCustomerFunnel
        open={modalCustomerFunnel}
        toggle={() => setModalCustomerFunnel(false)}
        listFunnelAction={listFunnelAction}
        listFunnelOperator={listFunnelOperator}
        listFunnel={listFunnel}
      />

      <ModalCreateTags
        setCreateTags={setCreateTags}
        modalCreateTags={modalCreateTags}
        titleTags={titleTags}
        listTags={
          (listTags?.data || listTags)?.length > 0
            ? (listTags?.data || listTags).map(item => ({
                id: item.id,
                label: item.label,
                value: item.tag_id,
              }))
            : []
        }
        dataCheked={dataCheked}
      />

      <ModalDeleteTag
        setDeleteTag={setDeleteTag}
        modalDeleteTag={modalDeleteTag}
        listTags={(listTags?.data || listTags)?.map(ele => ({
          ...ele,
          checked: false,
        }))}
      />

      <ModalAssignUidAccountSys
        open={modalAssignUid}
        toggle={() => setModalAssignUid(false)}
        uids={(dataCheked && dataCheked.filter(item => item.checked)) || []}
      />
    </div>
  )
}

export default CustomerLeadsPage
