import TextareaField from 'components/form/TextareaField'
import TextField from 'components/form/TextField'
import React, {useCallback, useEffect, useState} from 'react'
import {ArrowLeft, ArrowRight, Search} from 'react-feather'
import ReactPaginate from 'react-paginate'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import {X} from 'react-feather'
import {useDebounce} from 'ahooks'
import {uid} from 'uid'

// *** component
import AttachedLinkItem from './AttachedLinkItem'

// *** CONTEXT
import {useSettingEmailCtx} from '@services/automation/context'

// ** query
import {AutomationQuery} from '@services/automation'

const FormEmailAutomationAttachedLink = ({stepper}) => {
  // *** CONTEXT
  const {
    state,
    settingSendEmail,
    addSeoLinkExternal,
    deleteSeoLinkExternal,
    getSeoLinkSystem,
    updateSeoLinkExternal,
  } = useSettingEmailCtx()

  // *** state
  const [currentPage, setCurrentPage] = useState(0)
  // const [isLoading, setIsLoading] = useState(false)

  const [sid, setSid] = useState({
    sid: null,
    url: '',
  })
  const [duplicateUrlErr, setDuplicateUrlErr] = useState('')

  const debouncedValue = useDebounce(sid.url, {
    wait: 1000,
  })

  // const {data} = AutomationQuery.getAllMetadataWebsite()

  // const {data: dataItem, mutate: mutateUpdate} =
  //   AutomationMutation.useCreateMetadata()

  useEffect(() => {
    let listURL = state.seo_link_external.map(ele => ele.url)

    if (state.sid_current.url) {
      if (listURL.filter(item => item === state.sid_current.url).length < 2)
        setSid(state.sid_current)
      else setDuplicateUrlErr('Link đã tồn tại! 🕵🏻‍♀️')
    }
  }, [state.seo_link_external, state.sid_current, state.sid_current.url])

  useEffect(() => {
    if (debouncedValue) {
      // call api
      // setIsLoading(true)
      const regexURL = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm
      if (regexURL.test(debouncedValue)) {
        //call api
        AutomationQuery.createMetadata(debouncedValue)
          .then(res => {
            updateSeoLinkExternal({
              ...res.data,
              sid: sid.sid,
            })
            setDuplicateUrlErr('')
          })
          .catch(() => {
            updateSeoLinkExternal({
              sid: sid.sid,
              url: debouncedValue,
              title: '',
              description: '',
              icon: '',
              image: '',
              keywords: [],
              language: '',
              provider: '',
              type: '',
            })
            setDuplicateUrlErr('Không tìm thấy nội dung! 🕵🏻‍♀️')

            // remove current item in list seo link external
          })
      } else {
        setDuplicateUrlErr('Link không hợp lệ! 🕵🏻‍♀️')
      }
    }
  }, [debouncedValue])

  // *** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)

    AutomationQuery.getAllMetadataWebsite({
      limit: 8,
      page: page.selected + 1,
      url: true,
    }).then(res => {
      getSeoLinkSystem(res)
    })
  }

  const increaseCount = useCallback(() => {
    addSeoLinkExternal({
      sid: uid(),
      url: '',
    })
  }, [addSeoLinkExternal])

  const decreaseCount = useCallback(
    id => {
      deleteSeoLinkExternal(id)
    },
    [deleteSeoLinkExternal],
  )

  return (
    <div>
      <div className="radio-list">
        <p className="font-weight-bolder">
          Chọn nguồn link đính kèm trên email của bạn!
        </p>
        <label className="radio radio-lg">
          <input
            type="radio"
            name="type_attached_link"
            value="link_system"
            defaultChecked
            onChange={e => {
              settingSendEmail({
                name: 'type_attached_link',
                value: e.target.value,
              })
            }}
          />
          <span></span>
          Chọn link đính kèm từ hệ thống
        </label>
        <label className="radio radio-lg">
          <input
            type="radio"
            name="type_attached_link"
            value="link_external"
            onChange={e => {
              settingSendEmail({
                name: 'type_attached_link',
                value: e.target.value,
              })
            }}
          />
          <span></span>
          Link đính kèm của bạn
        </label>
      </div>

      <div className="divider divider-primary mb-5">
        <div className="divider-text">
          {state.type_attached_link === 'link_system'
            ? 'chọn link đính kèm từ hệ thống'
            : 'Tạo link đính kèm'}
        </div>
      </div>
      {/* chọn link từ hệ thống */}
      {state.type_attached_link === 'link_system' && (
        <div>
          <div className="row mb-3">
            <div className=" col-12 col-lg-6 ">
              <TextField
                icon={<Search size={16} />}
                type="text"
                name="search_header"
                size="lg"
                placeholder="Tìm kiếm..."
                onChange={() => {}}
                //   disabled={isLoading}
                //   value={search}
              />
            </div>
            <div className=" col-12 col-lg-6">
              <div className="mt-3 d-flex">
                <div className="mr-3">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle color="primary" caret>
                      Bộ lọc
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="span">Option 1</DropdownItem>
                      <DropdownItem tag="span">Option 2</DropdownItem>
                      <DropdownItem tag="span">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>

                <div>
                  <Button.Ripple
                    color="secondary"
                    onClick={() => {
                      AutomationQuery.getAllMetadataWebsite({
                        limit: 8,
                        url: true,
                      }).then(res => {
                        getSeoLinkSystem(res)
                      })
                    }}
                  >
                    Làm mới
                  </Button.Ripple>
                </div>
              </div>
            </div>
          </div>
          <Row>
            {state.list_seo_link_system?.map(item => (
              <Col lg="3" key={item._id} className="my-2">
                <AttachedLinkItem data={item} isSystem classNameCard="h-100" />
              </Col>
            ))}
          </Row>

          <ReactPaginate
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={state?.metadata?.num_pages || 1}
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
        </div>
      )}

      {/* nhập link */}
      {state.type_attached_link === 'link_external' && (
        <>
          <Row>
            {state.seo_link_external?.length > 0 &&
              state.seo_link_external.map(item => (
                <Col key={item.sid} lg="3" className="my-3 remove-col">
                  <Card className="h-100 mb-0 position-relative">
                    <CardBody className="p-5">
                      <TextareaField
                        maxLength={300}
                        name="attached_link_external"
                        label="Link của bạn"
                        placeholder="Nhập vào link của bạn"
                        isRequired
                        minRows={3}
                        value={item.url}
                        onChange={(name, value) => {
                          updateSeoLinkExternal({
                            _id: item._id,
                            url: value,
                            sid: item.sid,
                          })
                        }}
                      />
                      <AttachedLinkItem
                        data={item}
                        duplicateUrlErr={duplicateUrlErr}
                      />
                    </CardBody>
                    <div
                      style={{
                        position: 'absolute',
                        top: -7,
                        right: -10,
                        zIndex: 9,
                        cursor: 'pointer',
                      }}
                      onClick={() => decreaseCount(item.sid)}
                    >
                      <Badge color="danger" pill>
                        <X />
                      </Badge>
                    </div>
                  </Card>
                </Col>
              ))}
          </Row>

          <div className="mt-5">
            <Button.Ripple
              onClick={increaseCount}
              type="submit"
              outline
              color="primary"
            >
              Thêm link
            </Button.Ripple>
          </div>
        </>
      )}

      <hr />
      <div className="text-right mt-20">
        <Button.Ripple
          color="secondary"
          outline
          className="btn-prev"
          size="sm"
          onClick={() => stepper.previous()}
        >
          <ArrowLeft
            size={14}
            className="align-middle mr-sm-3 mr-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          type="submit"
          color="primary"
          className="btn-next ml-2"
          size="sm"
          onClick={() => {
            stepper.next()
          }}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
          <ArrowRight size={14} className="align-middle ml-5"></ArrowRight>
        </Button.Ripple>
      </div>
    </div>
  )
}

export default FormEmailAutomationAttachedLink
