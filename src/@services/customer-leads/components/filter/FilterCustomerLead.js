import React, {useCallback, useState, useEffect} from 'react'
import SelectField from 'components/form/SelectField'
import DatePickerField from 'components/form/DatePickerField'
import moment from 'moment'
import TextField from 'components/form/TextField'
import {Search} from 'react-feather'
import {CustomerLeadsQuery} from '@services/customer-leads'
import {
  Card,
  CardBody,
  Col,
  Row,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  CustomInput,
} from 'reactstrap'
import {checkPositiveNumber} from 'utility/Utils'
import {CustomerQuery} from '@services/customer'
import TagInputField from 'components/form/TagInputField'

const genderOptions = [
  {
    value: 'Male',
    label: 'Nam',
  },
  {
    value: 'Female',
    label: 'Nữ',
  },
  {
    value: 'Other',
    label: 'Khác',
  },
]
const operatorOptions = [
  {
    value: '>=',
    label: 'Lớn hơn hoặc bằng',
  },
  {
    value: '<=',
    label: 'Nhỏ hơn hoặc bằng',
  },
]

const timeSlots = [
  {value: '0-6', label: '0h - 6h'},
  {value: '6-12', label: '6h - 12h'},
  {value: '12-18', label: '12h - 18h'},
  {value: '18-24', label: '18h - 24h'},
]

const formatDataOptionSelect = datas =>
  datas && datas.length > 0
    ? datas.map(d => ({
        label: d.name || d.label,
        value: d.name || d.label,
      }))
    : []

const formatDataOptionTagify = datas =>
  datas && datas.length > 0 ? datas.map(d => ({value: d.name || d.label})) : []

const renderLabelSelect = label => (
  <div>
    <p className="mb-0 ">
      {label}
      <small className="font-weight-normal font-italic text-muted ml-1">
        ( Nhấn phím Alt để chọn những trường đã tìm kiếm )
      </small>
    </p>
  </div>
)

const FilterCustomerLead = ({
  setFilter,
  filter,
  openFilter,
  showTopUid,
  setSearchValue,
  isEdit,
}) => {
  // *** State
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [uidSelect, setUidSelect] = useState(0)
  const [uidSelectCustom, setUidSelectCustom] = useState(0)

  // *** Query
  // *** Data list tags customer lead
  const {data: listTags} = CustomerLeadsQuery.useListTagsCustomerLead()

  // *** List Funnel
  const {data: listFunnel} = CustomerLeadsQuery.useListFunnelCustomerLead()

  // *** List Education of Customer Lead
  const {data: listEducation} =
    CustomerLeadsQuery.useListEducationOfCustomerLead()

  // *** List Job of Customer Lead
  const {data: listJobs} = CustomerLeadsQuery.useListJobOfCustomerLead()

  // *** List Place Live Customer Lead
  const {data: listPlaceLive} =
    CustomerLeadsQuery.useListPlaceLiveCustomerLead()

  // *** List KeyWord
  const {data: listKeywords} = CustomerQuery.useListCustomerKeywords()

  // *** list relationship
  const {data: listRelationship} = CustomerLeadsQuery.useListRelationship()

  // *** LIST GROUP
  const {data: listGroup} = CustomerLeadsQuery.useListGroupFB()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const onKeyDownSelect = useCallback(
    (e, options, key) => {
      if (e.keyCode === 18) {
        let value = e.target.value
        let lists =
          formatDataOptionSelect(options).filter(tag =>
            tag.label?.toLowerCase()?.includes(value?.toLowerCase()),
          ) || []

        if (lists.length > 0) {
          lists = lists.map(el => el.label)
          setFilter({
            ...filter,
            [key]: JSON.stringify(lists),
          })
        }
      }
    },
    [filter, setFilter],
  )

  const [options, setOptions] = useState([])

  useEffect(() => {
    setOptions(filter.options ? JSON.parse(filter.options) : [])
  }, [filter.options])

  const listData = useCallback(() => {
    return [
      {
        label: 'Phễu khách hàng',
        key: 'funnels',
        element: (
          <SelectField
            name="funnels"
            label={renderLabelSelect('')}
            isSearchable
            isMulti
            // isCheckAll
            options={formatDataOptionSelect(listFunnel?.data)}
            value={
              filter.funnels
                ? JSON.parse(filter.funnels)
                  ? formatDataOptionSelect(listFunnel?.data).filter(el =>
                      JSON.parse(filter.funnels).includes(el.label),
                    )
                  : []
                : []
            }
            onChange={(name, option) => {
              setFilter({
                ...filter,
                funnels:
                  option?.length > 0
                    ? JSON.stringify(option.map(el => el.label))
                    : null,
              })
            }}
          />
        ),
      },
      {
        label: 'Gắn thẻ',
        key: 'tags',
        element: (
          <SelectField
            disabled={!isEdit}
            name="tags"
            label={renderLabelSelect('')}
            isSearchable
            isMulti
            // isCheckAll
            options={formatDataOptionSelect(listTags?.data)}
            value={
              filter.tags
                ? JSON.parse(filter.tags)
                  ? formatDataOptionSelect(listTags?.data).filter(el =>
                      JSON.parse(filter.tags).includes(el.label),
                    )
                  : []
                : []
            }
            onChange={(name, option) => {
              setFilter({
                ...filter,
                tags:
                  option?.length > 0
                    ? JSON.stringify(option.map(el => el.label))
                    : null,
              })
            }}
            onKeyDown={e => onKeyDownSelect(e, listTags, 'tags')}
          />
        ),
      },

      {
        label: 'Chủ đề quan tâm',
        key: 'keywords',
        element: (
          <TagInputField
            name="keywords"
            placeholder="Nhấn enter hoặc tab"
            suggestions={formatDataOptionTagify(listKeywords?.data)}
            onChange={(name, value) => {
              setFilter({
                ...filter,
                keywords: value.length > 0 ? JSON.stringify(value) : null,
              })
            }}
          />
        ),
      },
      {
        label: 'Học vấn',
        key: 'education',
        element: (
          <TagInputField
            name="education"
            placeholder="Nhấn enter hoặc tab"
            suggestions={formatDataOptionTagify(listEducation?.data)}
            onChange={(name, value) => {
              setFilter({
                ...filter,
                education: value.length > 0 ? JSON.stringify(value) : null,
              })
            }}
          />
        ),
      },

      {
        label: 'Nghề nghiệp/ Nơi làm việc',
        key: 'work',
        element: (
          <TagInputField
            name="work"
            placeholder="Nhấn enter hoặc tab"
            suggestions={formatDataOptionTagify(listJobs?.data)}
            onChange={(name, value) => {
              setFilter({
                ...filter,
                work: value.length > 0 ? JSON.stringify(value) : null,
              })
            }}
          />
        ),
      },

      {
        label: 'Địa chỉ',
        key: 'address',
        element: (
          <TagInputField
            name="address"
            placeholder="Nhấn enter hoặc tab"
            suggestions={formatDataOptionTagify(listPlaceLive?.data)}
            onChange={(name, value) => {
              setFilter({
                ...filter,
                address: value.length > 0 ? JSON.stringify(value) : null,
              })
            }}
          />
        ),
      },
      {
        label: 'Giới tính',
        key: 'gender',
        element: (
          <SelectField
            disabled={!isEdit}
            name="gender"
            label={
              <small className="font-weight-normal font-italic text-muted ml-1">
                ( Chọn giới tính )
              </small>
            }
            isSearchable
            isMulti
            // isCheckAll
            options={genderOptions}
            value={
              filter.gender
                ? JSON.parse(filter.gender)
                  ? genderOptions.filter(el =>
                      JSON.parse(filter.gender).includes(el.value),
                    )
                  : []
                : []
            }
            onChange={(name, option) => {
              setFilter({
                ...filter,
                gender:
                  option.length > 0
                    ? JSON.stringify(option.map(el => el.value))
                    : null,
              })
            }}
          />
        ),
      },
      {
        label: 'Bạn bè',
        key: 'friend_count',
        element: (
          <Row>
            <Col sm="6">
              <SelectField
                disabled={!isEdit}
                name="friend_count_1"
                label={
                  <small className="font-weight-normal font-italic text-muted ml-1">
                    ( Chọn biểu thức so sánh )
                  </small>
                }
                isSearchable
                options={operatorOptions}
                onChange={(name, option) => {
                  setFilter({
                    ...filter,
                    friend_count_1: option.value,
                  })
                }}
              />
            </Col>
            {filter.friend_count_1 && (
              <Col sm="6">
                <TextField
                  type="number"
                  name="friend_count_2"
                  label="Giá trị"
                  isRequired
                  onChange={(name, value) => {
                    setFilter({
                      ...filter,
                      friend_count: {key: filter.friend_count_1, value: value},
                    })
                  }}
                />
              </Col>
            )}
          </Row>
        ),
      },
      {
        label: 'Điện thoại liên hệ',
        key: 'phone_number',
      },
      {
        label: 'Email liên hệ',
        key: 'email_account',
      },
      {
        label: 'Tình trạng quan hệ',
        key: 'prf_relationship',
        element: (
          <TagInputField
            name="prf_relationship"
            placeholder="Nhấn enter hoặc tab"
            suggestions={formatDataOptionTagify(listRelationship?.data)}
            onChange={(name, value) => {
              setFilter({
                ...filter,
                prf_relationship:
                  value.length > 0 ? JSON.stringify(value) : null,
              })
            }}
          />
        ),
      },
      {
        label: 'Lượt bình luận trung bình / bài viết',
        key: 'comment_count',
        element: (
          <Row>
            <Col sm="6">
              <SelectField
                disabled={!isEdit}
                name="comment_count_1"
                label={
                  <small className="font-weight-normal font-italic text-muted ml-1">
                    ( Chọn biểu thức so sánh )
                  </small>
                }
                isSearchable
                options={operatorOptions}
                onChange={(name, option) => {
                  setFilter({
                    ...filter,
                    comment_count_1: option.value,
                  })
                }}
              />
            </Col>
            {filter.comment_count_1 && (
              <Col sm="6">
                <TextField
                  type="number"
                  name="comment_count_2"
                  label="Giá trị"
                  isRequired
                  onChange={(name, value) => {
                    setFilter({
                      ...filter,
                      comment_count: {
                        key: filter.comment_count_1,
                        value: value,
                      },
                    })
                  }}
                />
              </Col>
            )}
          </Row>
        ),
      },
      {
        label: 'Lượt like trung bình / bài viết',
        key: 'like_count',
        element: (
          <Row>
            <Col sm="6">
              <SelectField
                disabled={!isEdit}
                name="like_count_1"
                label={
                  <small className="font-weight-normal font-italic text-muted ml-1">
                    ( Chọn biểu thức so sánh )
                  </small>
                }
                isSearchable
                options={operatorOptions}
                onChange={(name, option) => {
                  setFilter({
                    ...filter,
                    like_count_1: option.value,
                  })
                }}
              />
            </Col>
            {filter.like_count_1 && (
              <Col sm="6">
                <TextField
                  type="number"
                  name="like_count_2"
                  label="Giá trị"
                  isRequired
                  onChange={(name, value) => {
                    setFilter({
                      ...filter,
                      like_count: {key: filter.like_count_1, value: value},
                    })
                  }}
                />
              </Col>
            )}
          </Row>
        ),
      },
      {
        label: 'Có tương tác trong vòng 1 tuần',
        key: 'actions',
        // element: (
        //   <Row>
        //     <Col sm="6">
        //       <SelectField
        //         disabled={!isEdit}
        //         name="reaction_count_1"
        //         label={
        //           <small className="font-weight-normal font-italic text-muted ml-1">
        //             ( Chọn biểu thức so sánh )
        //           </small>
        //         }
        //         isSearchable
        //         options={operatorOptions}
        //         onChange={(name, option) => {
        //           setFilter({
        //             ...filter,
        //             reaction_count_1: option.value,
        //           })
        //         }}
        //       />
        //     </Col>
        //     <Col sm="6">
        //       <TextField
        //         type="number"
        //         name="reaction_count_2"
        //         label="Giá trị"
        //         isRequired
        //         onChange={(name, value) => {
        //           setFilter({
        //             ...filter,
        //             reaction_count: {
        //               key: filter.reaction_count_1,
        //               value: value,
        //             },
        //           })
        //         }}
        //       />
        //     </Col>
        //   </Row>
        // ),
      },
      {
        label: 'Nhóm',
        key: 'group',
        element: (
          <TagInputField
            name="group"
            placeholder="Nhấn enter hoặc tab"
            suggestions={formatDataOptionTagify(listGroup?.data)}
            onChange={(name, value) => {
              setFilter({
                ...filter,
                group: value.length > 0 ? JSON.stringify(value) : null,
              })
            }}
          />
        ),
      },
    ]
  }, [
    filter,
    isEdit,
    listEducation?.data,
    listFunnel?.data,
    listGroup?.data,
    listJobs?.data,
    listKeywords?.data,
    listPlaceLive?.data,
    listRelationship?.data,
    listTags,
    onKeyDownSelect,
    setFilter,
  ])

  return (
    <div className="filter-customer-leads">
      {openFilter && (
        <div>
          <Card>
            <CardBody>
              {showTopUid && (
                <div>
                  <div className="divider divider-left-center divider-warning">
                    <div className="divider-text">Tìm kiếm</div>
                  </div>
                  <Row className="align-items-center">
                    <Col lg={8}>
                      <TextField
                        icon={<Search size={16} />}
                        type="text"
                        name="search_header"
                        size="lg"
                        placeholder="Tìm kiếm theo tên email, địa chỉ,..."
                        onChange={(name, value) => {
                          setSearchValue(value)
                        }}
                      />
                    </Col>
                    <Col lg={4}>
                      <div>
                        <ButtonDropdown
                          isOpen={dropdownOpen}
                          toggle={toggleDropdown}
                        >
                          <DropdownToggle color={'danger'} caret>
                            {uidSelect > 0
                              ? `Top uid gần đây (${uidSelect})`
                              : 'Top uid gần đây'}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem
                              tag="div"
                              onClick={() => setUidSelect(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => setUidSelect(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => setUidSelect(100)}
                            >
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
                                  onChange={e =>
                                    setUidSelectCustom(e.target.value)
                                  }
                                />
                                <Button
                                  className="mt-2"
                                  color="primary"
                                  type="button"
                                  size="sm"
                                  disabled={checkPositiveNumber(
                                    uidSelectCustom,
                                  )}
                                  onClick={() => {
                                    setUidSelect(uidSelectCustom)
                                    toggleDropdown()
                                  }}
                                >
                                  Submit
                                </Button>
                              </FormGroup>
                            </Form>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
              <div className="divider divider-left-center divider-warning">
                <div className="divider-text">Lọc theo trường dữ liệu</div>
              </div>

              <Row>
                {listData().map(item => (
                  <Col lg="6" key={item.key}>
                    <CustomInput
                      inline
                      type="checkbox"
                      id={item.key}
                      name={item.key}
                      checked={
                        filter.options &&
                        JSON.parse(filter.options).find(it => it === item.key)
                      }
                      label={
                        <label
                          htmlFor={item.key}
                          className="font-weight-bold text-dark"
                        >
                          {item.label}
                        </label>
                      }
                      // defaultChecked
                      onChange={e => {
                        if (
                          e.target.checked &&
                          !options?.includes(e.target.name)
                        ) {
                          setFilter({
                            ...filter,
                            options: JSON.stringify([
                              ...options,
                              e.target.name,
                            ]),
                          })
                        } else {
                          Object.keys(filter).map(
                            it =>
                              it.includes(e.target.name) && delete filter[it],
                          )
                          setFilter({
                            ...filter,
                            options: JSON.stringify(
                              options.filter(it => it !== e.target.name),
                            ),
                          })
                        }
                      }}
                    />

                    {options.includes(item.key) && item.element}
                  </Col>
                ))}
              </Row>

              <div className="divider divider-left-center divider-warning">
                <div className="divider-text">Lọc theo thời gian</div>
              </div>
              <Row>
                <Col lg="6">
                  <DatePickerField
                    disabled={isEdit}
                    name="from_to_date"
                    label="Từ ngày đến ngày"
                    options={{mode: 'range'}}
                    value={
                      filter.date_from && filter.date_to
                        ? `${filter.date_from} to ${filter.date_to}`
                        : ''
                    }
                    onChange={(name, value) => {
                      setFilter({
                        ...filter,
                        date_from: moment(value[0]).format('YYYY-MM-DD'),
                        date_to: moment(value[1]).format('YYYY-MM-DD'),
                      })
                    }}
                  />
                </Col>

                {filter.date_from && filter.date_to && (
                  <Col lg="6">
                    <SelectField
                      disabled={!isEdit}
                      name="time_slot"
                      label="Khung giờ"
                      isSearchable
                      options={timeSlots}
                      isMulti
                      // isCheckAll
                      value={
                        filter.time_slot
                          ? JSON.parse(filter.time_slot)
                            ? timeSlots.filter(el =>
                                JSON.parse(filter.time_slot).includes(el.value),
                              )
                            : []
                          : []
                      }
                      onChange={(name, option) => {
                        setFilter({
                          ...filter,
                          time_slot:
                            option.length > 0
                              ? JSON.stringify(option.map(el => el.value))
                              : null,
                        })
                      }}
                    />
                  </Col>
                )}
              </Row>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  )
}

export default FilterCustomerLead
