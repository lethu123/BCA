import React, {useState, memo} from 'react'
import DataTable from 'react-data-table-component'
import {Search} from 'react-feather'
import {
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Button,
} from 'reactstrap'
import CategoriesCourseDashboardModal from './CategoriesCourseDashboardModal.component'
import {Edit, Trash, Plus} from 'react-feather'
// import {deleteCourseCategoryAction} from 'redux/actions/hschools/hSchoolManagementAction'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useDispatch} from 'react-redux'

const CategoriesCourseDashboard = ({listCategory, listTypeCategory}) => {
  const MySwal = withReactContent(Swal)
  const dispatch = useDispatch()

  const list = {
    filteredData: [],
    value: '',
  }
  const columns = React.useMemo(
    () => [
      {
        name: 'Category Name',
        selector: 'categories',
        sortable: true,
        maxWidth: '300px',
        cell: row => <p className="text-truncate">{row.name}</p>,
      },
      {
        name: 'Image',
        selector: 'slug',
        sortable: true,
        maxWidth: '200px',
        cell: row => (
          <img
            src={row.thumb_url}
            alt="imageCategory"
            style={{width: 80, height: 50, borderRadius: 5}}
          />
        ),
      },

      {
        name: 'Type',
        selector: 'Type',
        cell: row => <p>{row.type_info ? row.type_info.name : 'None'}</p>,
      },
      {
        name: 'Actions',
        selector: '',
        sortable: true,
        cell: row => {
          return (
            <div>
              <Button.Ripple
                className="btn-icon m-50"
                color="relief-info"
                size="sm"
                onClick={() => {
                  toggleModalCategory()
                  setEditCategory(row)
                }}
              >
                <Edit size={14} />
              </Button.Ripple>

              <Button.Ripple
                className="btn-icon m-50"
                color="relief-danger"
                size="sm"
                onClick={() => handleConfirmDelete(row.id)}
              >
                <Trash size={14} />
              </Button.Ripple>
            </div>
          )
        },
      },
    ],
    [],
  )

  const [modalStateCategory, setModalStateCategory] = useState(false)

  const toggleModalCategory = () => {
    setModalStateCategory(!modalStateCategory)
  }

  const [valueCategory, setValueCategory] = useState(list.value)
  const [filteredDataCategory, setFilteredDataCategory] = useState(
    list.filteredData,
  )

  const handleFilter = e => {
    let value = e.target.value
    let data = list.data
    let filteredData = filteredDataCategory
    setValueCategory(value)

    if (value && value.length > 0) {
      filteredData = data.filter(item => {
        let startsWithCondition =
          item.categories.toLowerCase().startsWith(value.toLowerCase()) ||
          item.slug.toLowerCase().startsWith(value.toLowerCase())

        let includesCondition =
          item.categories.toLowerCase().includes(value.toLowerCase()) ||
          item.slug.toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })

      setFilteredDataCategory(filteredData)
    }
  }
  const handleConfirmDelete = id => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1',
      },
      buttonsStyling: false,
    }).then(function (result) {
      // if (result.value) {
      //   dispatch(deleteCourseCategoryAction(id))
      // }
    })
  }

  const [editCategory, setEditCategory] = useState(null)

  const customStyles = {
    headCells: {
      style: {
        // fontWeight: 'bold',
        fontSize: '14px',
        // justifyContent: 'center',
      },
    },
    rows: {
      style: {
        margin: '10px 0',
      },
    },
    cells: {
      style: {
        // justifyContent: 'center',
      },
    },
  }

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setEditCategory(null)
            toggleModalCategory()
          }}
          color="gradient-warning"
          style={{cursor: 'pointer'}}
        >
          {' '}
          <Plus size={17} /> Add New
        </Button>
      </div>

      <DataTable
        className="dataTable-custom"
        data={
          valueCategory && valueCategory.length > 0
            ? filteredDataCategory
            : listCategory
        }
        columns={columns}
        noHeader
        pagination
        subHeader
        subHeaderComponent={
          <div className="d-flex flex-wrap justify-content-between">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="add-new"></div>
              <div className="position-relative has-icon-left mb-1">
                <InputGroup className="input-group-merge mb-2">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <Search size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="search..."
                    value={valueCategory}
                    onChange={e => handleFilter(e)}
                  />
                </InputGroup>
              </div>
            </div>
          </div>
        }
        customStyles={customStyles}
      />
      <CategoriesCourseDashboardModal
        editCategory={editCategory}
        modalStateCategory={modalStateCategory}
        toggleModalCategory={toggleModalCategory}
        listTypeCategory={listTypeCategory}
      />
    </div>
  )
}

export default memo(CategoriesCourseDashboard)
