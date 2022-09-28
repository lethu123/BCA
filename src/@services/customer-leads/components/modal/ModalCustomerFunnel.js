import {useCallback, useEffect, useState} from 'react'
// import ReactPaginate from 'react-paginate'

import {Plus, Trash, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Card,
  CardBody,
} from 'reactstrap'

// scss for
import './Custom.style.scss'

import {
  useCreateCustomerFunnel,
  useUpdateFunnelCustomerLead,
  useDeleteFunnelCustomerLead,
} from '@services/customer-leads/hook/mutation'
import TagInputField from 'components/form/TagInputField'
// ** mutation

const initialConditions = {
  id: null,
  name: '',
  like: 0,
  like_condition: '=',
  other_reaction: 0,
  other_reaction_condition: '=',
  comment: 0,
  comment_condition: '=',
  share: 0,
  share_condition: '=',
  tag: 0,
  tag_condition: '=',
  keyword: [],
  keyword_condition: 'Chứa',
}

const listKeywordOperator = ['Chứa', 'Không chứa']

const ModalCustomerFunnel = ({
  open,
  toggle,
  listFunnelAction,
  listFunnelOperator,
  listFunnel,
}) => {
  const [conditions, setConditions] = useState({
    1: initialConditions,
  })
  const [keyword, setKeyword] = useState(null)
  const {mutate: createFunnel} = useCreateCustomerFunnel()
  const {mutate: updateFunnel} = useUpdateFunnelCustomerLead()
  const {mutate: deleteFunnel} = useDeleteFunnelCustomerLead()

  //useEffect

  useEffect(() => {
    if (listFunnel && listFunnel.data) {
      let rule
      console.log(listFunnel)
      let conditons = listFunnel.data.reduce((acc, key, idx) => {
        let list_rule = listFunnel.data[idx].fr_rule

        if (Array.isArray('list_rule')) {
          rule = list_rule.reduce((accument, key, idex) => {
            return {
              ...accument,
              [list_rule[idex].action_code]: list_rule[idex].action_value,
              [`${list_rule[idex].action_code}_condition`]:
                list_rule[idex].operator_value,
            }
          }, {})
        }

        return {
          ...acc,
          [idx + 1]: {
            ...rule,
            name: listFunnel.data[idx].name,
            id: listFunnel.data[idx]._id,
          },
        }
      }, {})
      setConditions(conditons)
    }
  }, [listFunnel])

  const increaseCount = () => {
    setConditions(conditions => ({
      ...conditions,
      [Object.keys(conditions).length + 1]: initialConditions,
    }))
  }

  const deleteForm = useCallback(
    (e, idx) => {
      let newConditions = {...conditions}
      delete newConditions[idx + 1]

      let keys = Object.keys(newConditions)
      newConditions = keys.reduce((acc, key, idx) => {
        return {...acc, [idx + 1]: newConditions[key]}
      }, {})

      setConditions(newConditions)

      // e.preventDefault()
      // e.target.closest('form').remove()
    },
    [conditions],
  )
  const handleKeyword = (value, index) => {
    setKeyword({index, value})
  }
  useEffect(() => {
    if (keyword) {
      setConditions({
        ...conditions,
        [keyword?.index]: {
          ...conditions[keyword?.index],
          keyword: keyword?.value,
        },
      })
    }
  }, [keyword])

  const renderConditions = useCallback(
    (key, idx, placeholder) => {
      return (
        <div className="d-flex">
          <div>
            <UncontrolledButtonDropdown className="text-center mb-50 mr-2">
              <DropdownToggle color="primary" outline caret>
                <span className="ml-2">
                  {conditions[idx] && conditions[idx][`${key}_condition`]}
                </span>
              </DropdownToggle>
              <DropdownMenu>
                {listFunnelOperator?.length > 0 && key !== 'keyword'
                  ? listFunnelOperator.map(ele => (
                      <DropdownItem
                        key={ele.id}
                        onClick={() => {
                          let newConditions = {
                            ...conditions,
                            [idx]: {
                              ...conditions[idx],
                              [`${key}_condition`]: ele.operator_value,
                            },
                          }
                          setConditions(newConditions)
                        }}
                        tag="span"
                      >
                        {ele.operator_name}
                      </DropdownItem>
                    ))
                  : listKeywordOperator.length > 0 &&
                    listKeywordOperator.map(ele => (
                      <DropdownItem
                        key={ele}
                        onClick={() => {
                          let newConditions = {
                            ...conditions,
                            [idx]: {
                              ...conditions[idx],
                              [`${key}_condition`]: ele,
                            },
                          }
                          setConditions(newConditions)
                        }}
                        tag="span"
                      >
                        {ele}
                      </DropdownItem>
                    ))}
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div>
            {conditions[idx] &&
            conditions[idx][`${key}_condition`] &&
            conditions[idx][`${key}_condition`] === 'giữa' ? (
              <>
                <Input
                  value={conditions[idx][key] ? conditions[idx][key][0] : 0}
                  type="number"
                  id={`${key}-${idx}-1`}
                  className={
                    !(
                      Number.isInteger(+conditions[idx]?.[key][0]) &&
                      +conditions[idx]?.[key][0] > -1
                    )
                      ? 'border-danger mb-2'
                      : 'mb-2'
                  }
                  onChange={e => {
                    let newConditions = {
                      ...conditions,
                      [idx]: {
                        ...conditions[idx],
                        [key]: [
                          e.target.value,
                          (conditions[idx][key] && conditions[idx][key][1]) ||
                            0,
                        ],
                      },
                    }
                    setConditions(newConditions)
                  }}
                />

                <Input
                  value={conditions[idx][key] ? conditions[idx][key][1] : 0}
                  type="number"
                  id={`${key}-${idx}-2`}
                  className={
                    !(
                      Number.isInteger(+conditions[idx]?.[key][1]) &&
                      +conditions[idx]?.[key][1] > -1
                    )
                      ? 'border-danger'
                      : ''
                  }
                  onChange={e => {
                    let newConditions = {
                      ...conditions,
                      [idx]: {
                        ...conditions[idx],
                        [key]: [
                          (conditions[idx][key] && conditions[idx][key][0]) ||
                            0,
                          e.target.value,
                        ],
                      },
                    }
                    setConditions(newConditions)
                  }}
                  placeholder={placeholder}
                />
                {conditions[idx][key][1] === conditions[idx][key][0] && (
                  <span className="text-danger w-100">
                    Không được bằng nhau
                  </span>
                )}
              </>
            ) : key === 'keyword' ? (
              <div className="tagInput">
                <TagInputField
                  name={conditions[idx]?.[key]}
                  value={conditions[idx]?.[key]}
                  placeholder={placeholder}
                  blacklist={[]}
                  suggestions={[]}
                  onChange={(e, value) => handleKeyword(value, idx)}
                />
              </div>
            ) : (
              <Input
                value={conditions[idx]?.[key]}
                type="number"
                id={`${key}-${idx}`}
                className={
                  !(
                    Number.isInteger(+conditions[idx]?.[key]) &&
                    +conditions[idx]?.[key] > -1
                  )
                    ? 'border-danger'
                    : ''
                }
                onChange={e => {
                  let newConditions = {
                    ...conditions,
                    [idx]: {
                      ...conditions[idx],
                      [key]: e.target.value,
                    },
                  }
                  setConditions(newConditions)
                }}
                placeholder={placeholder}
              />
            )}
          </div>
        </div>
      )
    },
    [conditions, listFunnelOperator],
  )

  const renderForm = useCallback(
    (id, i) => (
      <div className="position-relative">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr repeat(6, 1fr)',
            columnGap: '15px',
          }}
        >
          {listFunnelAction?.length > 0 &&
            listFunnelAction.map(ele => (
              <div key={ele.id}>
                <FormGroup>
                  <Label
                    for={`${ele.key}-${i}`}
                    className="text-primary font-weight-bold "
                    style={{fontSize: '12px'}}
                  >
                    {ele.name}
                  </Label>
                  {ele.key === 'name' ? (
                    <Input
                      type="text"
                      id={`${ele.key}-${i}`}
                      name={`${ele.key}-${i}`}
                      placeholder="Nhập tên/loại phễu ..."
                      value={conditions[i + 1]?.name || ''}
                      onChange={e => {
                        let newConditions = {
                          ...conditions,
                          [i + 1]: {
                            ...conditions[i + 1],
                            name: e.target.value,
                          },
                        }
                        setConditions(newConditions)
                      }}
                    />
                  ) : (
                    renderConditions(ele.key, +i + 1, ele.placeholder)
                  )}
                </FormGroup>
              </div>
            ))}
        </div>
        <div
          className="position-absolute"
          style={{top: '-42px', right: '-20px'}}
        >
          <Button.Ripple
            className="btn-icon rounded-circle"
            onClick={e => {
              deleteForm(e, i)
              id && deleteFunnel(id)
            }}
            outline
            color="danger"
          >
            <X size={14} />
          </Button.Ripple>
        </div>
      </div>
    ),
    [listFunnelAction, conditions, renderConditions, deleteForm, deleteFunnel],
  )

  const checkIsvalid = useCallback(() => {
    let invalid = false
    let arrName = []
    let keys = Object.keys(conditions)
    keys.forEach(key => {
      let objKeys = Object.keys(conditions[key]).filter(
        el =>
          !el.includes('_condition') &&
          el !== 'name' &&
          el !== 'id' &&
          el !== 'keyword',
      )
      if (conditions[key]['name'] && conditions[key]['keyword']) {
        if (!arrName.includes(`name_${key}`)) {
          arrName.push(`name_${key}`)
        }
      } else {
        arrName = arrName.filter(name => name !== `name_${key}`)
      }

      objKeys.forEach(objkey => {
        let value = conditions[key][objkey]
        if (
          (conditions[key][`${objkey}_condition`] !== 'giữa' &&
            !Number.isInteger(+value)) ||
          +value < 0 ||
          value === ''
        ) {
          invalid = true
        }

        if (
          conditions[key][`${objkey}_condition`] === 'giữa' &&
          key !== 'keyword'
        ) {
          if (
            !Number.isInteger(+value[0]) ||
            !Number.isInteger(+value[1]) ||
            +value[0] < 0 ||
            +value[1] < 0 ||
            +value[0] === +value[1] ||
            value === ''
          ) {
            invalid = true
          }
        }
      })
    })

    return keys.length === 0 || invalid || !(arrName.length === keys.length)
  }, [conditions])

  return (
    <Modal
      isOpen={open}
      toggle={toggle}
      className="modal-dialog-centered modal-xl"
      style={{maxWidth: '96%'}}
    >
      <ModalHeader
        toggle={toggle}
        close={
          <div className="cursor-pointer" onClick={toggle}>
            <X />
          </div>
        }
      >
        Customer Funnel
      </ModalHeader>
      <ModalBody>
        {Object.keys(conditions).map(key => (
          <Form key={key}>
            <Card>
              <CardBody className="px-3 pb-2">
                {renderForm(conditions[key]['id'], key - 1)}
              </CardBody>
            </Card>
          </Form>
        ))}
        {/* <ReactPaginate
          previousLabel=""
          nextLabel=""
          forcePage={0}
          onPageChange={page => handlePagination(page + 1)}
          pageCount={5}
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
          pageLinkClassName="page-link"
          containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center pr-1 mt-1"
        /> */}
        <div className="d-flex">
          <div className="mr-3">
            <Button.Ripple color="warning" onClick={increaseCount}>
              <Plus size={14} />
              <span className="align-middle ml-1">Thêm phễu</span>
            </Button.Ripple>
          </div>
          <div>
            <Button.Ripple
              color="danger"
              onClick={() =>
                setConditions({
                  1: initialConditions,
                })
              }
            >
              <Trash size={14} />
              <span className="align-middle ml-1">Tạo mới từ đầu</span>
            </Button.Ripple>
          </div>
        </div>
      </ModalBody>
      <ModalBody></ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            // toggle()
            let array_condition = []

            Object.keys(conditions).forEach(key => {
              let objKeys = Object.keys(conditions[key]).filter(
                el =>
                  !el.includes('_condition') && el !== 'name' && el !== 'id',
              )

              array_condition = [
                ...array_condition,
                {
                  _id: conditions[key]['id'],
                  name: conditions[key]['name'],
                  rule: objKeys.map(ele => ({
                    action_value: conditions[key][ele],
                    action_code: ele,
                    operator_value: conditions[key][`${ele}_condition`],
                  })),
                },
              ]
            })
            if (listFunnel.length <= 0) {
              createFunnel({data: array_condition})
            } else {
              updateFunnel({data: array_condition})
            }
          }}
          disabled={checkIsvalid()}
        >
          {listFunnel?.length > 0 ? 'Cập nhật' : 'Tạo'}
        </Button>

        <Button color="danger" onClick={toggle} outline>
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalCustomerFunnel
