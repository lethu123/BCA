import React, {useEffect, useState, forwardRef} from 'react'
import DataTable from 'react-data-table-component'
import {Edit, Search, Trash} from 'react-feather'
import {
  Button,
  Input,
  Row,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap'
import {Check} from 'react-feather'
import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'
import {getListSubCategoryTopicCourse} from 'redux/actions/hschools/courseAction'
// import AutoComplete from 'components/form/AutoComplete.component'
import './CategoriesCourseDashboard.style.scss'
import CategoriesCourseDashboardModalTopic from './CategoriesCourseDashboardModalTopic.component'
import SweetAlert from 'react-bootstrap-sweetalert'
import Select from 'react-select'

import {
  createSkillTopicAction,
  deleteSkillTopicAction,
} from 'redux/actions/hschools/courseAction'

const handleAllData = data => {
  let dataArr = []
  if (data.length > 0) {
    data.forEach(element => {
      dataArr = [
        ...dataArr,
        {name: element.nameSub, label: element.nameSub, id: element.idSub},
      ]
    })

    dataArr = Array.from(new Set(dataArr.map(a => a.id))).map(id => {
      return dataArr.find(a => a.id === id)
    })

    dataArr = [
      {id: 0, name: 'All Topic/Skills', label: 'All Topic/Skills'},
    ].concat(dataArr)
  }
  return dataArr
}

const selectSubListCategoryTopic = createSelector(
  state => state.hSchool,
  course => course.listSubCategoriesTopic,
)

const CategoriesCourseDashboardTopic = () => {
  const dispatch = useDispatch()
  const [rowSelect, setRowSelect] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [subSelect, setSubSelect] = useState(0)
  useEffect(() => {
    dispatch(getListSubCategoryTopicCourse())
  }, [dispatch])
  let listTopicSkill = useSelector(selectSubListCategoryTopic)

  let listOption =
    listTopicSkill.length > 0 ? handleAllData(listTopicSkill) : []

  const [modalStateTopic, setModalStateTopic] = useState(false)

  const toggleModalTopic = () => {
    setModalStateTopic(!modalStateTopic)
  }

  const columns = [
    {
      name: 'Sub Categories',
      selector: 'subcategories',
      sortable: true,
      minWidth: '200px',
      cell: row => {
        return (
          <p
            className="text-bold-500 text-truncate mb-0"
            style={{color: 'black'}}
          >
            {row.nameSub}
          </p>
        )
      },
    },

    {
      name: 'Topic Categories',
      selector: 'topiccategories',
      sortable: true,
      cell: row => (
        <p className="text-bold-500 text-truncate mb-0">{row.name}</p>
      ),
    },
    {
      name: 'Actions',
      selector: '',
      sortable: true,
      cell: row => {
        return (
          // <div className="d-flex ">
          //   <Edit
          //     className="cursor-pointer mr-1"
          //     size={20}
          //     onClick={() => handlleEditTopic(row)}
          //   />
          //   <Trash
          //     className="cursor-pointer"
          //     size={20}
          //     onClick={() => {
          //       setRowSelect(row)
          //       setConfirmDelete(true)
          //     }}
          //   />
          // </div>
          <div>
            <Button.Ripple
              className="btn-icon m-50"
              color="relief-info"
              size="sm"
            >
              <Edit size={14} />
            </Button.Ripple>

            <Button.Ripple
              className="btn-icon m-50"
              color="relief-danger"
              size="sm"
            >
              <Trash size={14} />
            </Button.Ripple>
          </div>
        )
      },
    },
  ]

  const filter = ''
  const value = ''

  const [valueTopic, setValueTopic] = useState(value)
  const [filteredTopic, setFilteredTopic] = useState(filter)

  const handleFilter = e => {
    let value = e.target.value
    let data = listTopicSkill.filter(item => item.name !== undefined)
    let filteredData = filteredTopic
    setValueTopic(value)

    if (value && value.length > 0) {
      filteredData = data.filter(item => {
        let startsWithCondition =
          item.nameSub.toLowerCase().startsWith(value.toLowerCase()) ||
          item.name.toLowerCase().startsWith(value.toLowerCase())

        let includesCondition =
          item.nameSub.toLowerCase().includes(value.toLowerCase()) ||
          item.name.toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })

      setFilteredTopic(filteredData)
    }
  }
  const [editTopic, setEditTopic] = useState(null)
  const handlleEditTopic = item => {
    toggleModalTopic()
    setEditTopic(item)
  }

  const handleAddTopic = () => {
    toggleModalTopic()
    setEditTopic(null)
  }

  const colourStyle = {
    control: styles => ({
      ...styles,
      border: 'none',
      borderRadius: '30px',
      boxShadow: '0 0 0 1px #ff6700',
      cursor: 'pointer',
      color: '#6eb144',
      width: '250px',
    }),
  }
  if (subSelect !== 0) {
    listTopicSkill = listTopicSkill.filter(item => item.idSub === subSelect)
  }
  // ** Bootstrap Checkbox Component
  const BootstrapCheckbox = forwardRef(({onClick, ...rest}, ref) => (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        ref={ref}
        {...rest}
      />
      <label className="custom-control-label" onClick={onClick} />
    </div>
  ))

  return (
    <div>
      <DataTable
        className="dataTable-custom"
        data={
          valueTopic && valueTopic.length > 0
            ? filteredTopic
            : listTopicSkill.filter(item => item.name !== undefined)
        }
        columns={columns}
        noHeader
        pagination
        subHeader
        selectableRows
        selectableRowsComponent={BootstrapCheckbox}
        selectableRowsComponentProps={{
          color: 'primary',
          icon: <Check className="vx-icon" size={12} />,
          label: '',
          size: 'sm',
        }}
        subHeaderComponent={
          <div className="d-flex flex-wrap justify-content-between w-100">
            <div className="add-new">
              <Row className="mx-0">
                <Button.Ripple color="primary" onClick={handleAddTopic}>
                  Add New
                </Button.Ripple>

                {/* <Select
                  className="React ml-0 ml-md-1 my-1 my-md-0"
                  classNamePrefix="select"
                  defaultValue={listOption[0]}
                  name="SubCategory"
                  options={listOption.map(option => ({
                    id: option.id,
                    label: option.name,
                    value: option.name,
                  }))}
                  styles={colourStyle}
                  onChange={item => setSubSelect(item.id)}
                /> */}
              </Row>
            </div>
            <div className="position-relative has-icon-left mb-1">
              <InputGroup className="input-group-merge mb-2">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Search size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="search..."
                  value={valueTopic}
                  onChange={e => handleFilter(e)}
                />
              </InputGroup>
            </div>
          </div>
        }
      />
      <CategoriesCourseDashboardModalTopic
        toggleModalTopic={toggleModalTopic}
        modalStateTopic={modalStateTopic}
        editTopic={editTopic}
        listOption={listOption}
        onSubmit={(data, arrSub) => {
          dispatch(createSkillTopicAction(data, arrSub))
          setValueTopic('')
        }}
      />
      <SweetAlert
        title="Are you sure?"
        warning
        show={confirmDelete}
        showCancel
        reverseButtons
        cancelBtnBsStyle="danger"
        confirmBtnText="Yes, delete it!"
        cancelBtnText="Cancel"
        onConfirm={() => {
          dispatch(deleteSkillTopicAction(rowSelect.idSub, rowSelect.id_delete))
          setValueTopic('')
          setConfirmDelete(false)
        }}
        onCancel={() => setConfirmDelete(false)}
      >
        You won't be able to revert this!
      </SweetAlert>
    </div>
  )
}

export default CategoriesCourseDashboardTopic
