import React, {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import {Edit, Trash} from 'react-feather'
import {Button, Badge} from 'reactstrap'
import Select from 'react-select'
// import {getListCategoryCourse} from 'redux/actions/hschools/courseAction'
import {useDispatch, useSelector} from 'react-redux'
import CatrgoriesCourseDashboardModalSub from './CatrgoriesCourseDashboardModalSub.component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import {deleteCourseSubCategoryAction} from 'redux/actions/hschools/hSchoolManagementAction'

const CategoriesCourseDashboardSub = ({
  listCategory,
  setSubCategory,
  subCategory,
  listCourseSubCategory,
  listArea,
}) => {
  const MySwal = withReactContent(Swal)
  const colourStyle = {
    control: styles => ({
      ...styles,
      border: '1px solid #FF6700',
      borderRadius: '5px',
      boxShadow: '0 0 0 1px #ff6700',
      cursor: 'pointer',
      color: '#6eb144',
      width: '450px',
      height: '50px',
    }),
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
      if (result.value) {
        // dispatch(deleteCourseSubCategoryAction(id))
      }
    })
  }

  const [modalStateSub, setModalStateSub] = useState(false)
  const loading = useSelector(state => state.async.loading)
  const toggleModalSub = () => {
    if (!loading) {
      setModalStateSub(!modalStateSub)
      setCoverImgSub(null)
    }
  }
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getListCategoryCourse())
  // }, [dispatch])

  const [coverImgSub, setCoverImgSub] = useState(null)
  const [option, setOption] = useState([])
  const [defaultOption, setDefaultOption] = useState(null)
  useEffect(() => {
    if (listCategory.length > 0) {
      setOption(
        listCategory.map(item => ({
          id: item.id,
          label: (
            <div>
              <img
                src={item.thumb_url}
                alt="imageCategory"
                style={{
                  marginLeft: 10,
                  borderRadius: 5,
                  marginRight: 15,
                  width: 40,
                  height: 40,
                }}
              />
              {item.name}
            </div>
          ),
          value: item.name,
        })),
      )
      setSubCategory(listCategory[0].id)
    }
  }, [listCategory])

  const [editSub, setEditSub] = useState(null)

  const handleEditSub = item => {
    toggleModalSub()
    setEditSub(item)
  }
  const handleAddNew = () => {
    toggleModalSub()
    setEditSub(null)
  }

  const columns = [
    {
      name: 'Image',
      minWidth: '120px',
      maxWidth: '150px',
      cell: row => {
        return (
          <div>
            <img
              src={row.thumb_url}
              alt="imageSubCategory"
              style={{width: 100, height: 60, borderRadius: 5}}
            />
          </div>
        )
      },
    },

    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      minWidth: '250px',
      maxWidth: '300px',
      cell: row => <p>{row.name}</p>,
    },
    {
      name: 'Type Category',
      selector: 'typeCategory',
      minWidth: '180px',
      maxWidth: '220px',
      cell: row => (
        <div className="text-truncate">
          {' '}
          <Badge color="warning" className="badge-glow">
            {row.category_info.name}
          </Badge>
        </div>
      ),
    },
    {
      name: 'Actions',
      cell: row => {
        return (
          <div>
            <Button.Ripple
              className="btn-icon m-50"
              color="relief-info"
              size="sm"
              onClick={() => handleEditSub(row)}
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
  ]

  const customStyles = {
    headCells: {
      style: {
        fontSize: '14px',
        justifyContent: 'center',
        borderColor: '#FF6700',
      },
    },
    rows: {
      style: {
        margin: '5px 0',
        fontSize: 13,
      },
    },
    cells: {
      style: {
        justifyContent: 'center',
        margin: 5,
      },
    },
  }

  return (
    <div>
      <div className="addnew mb-2 d-flex align-items-center">
        <Button.Ripple
          color="primary"
          onClick={handleAddNew}
          style={{
            display: listCategory.length > 0 ? 'block' : 'none',
          }}
        >
          Add New
        </Button.Ripple>
        <div>
          <Select
            className="React ml-0 ml-md-1 my-1 my-md-0"
            classNamePrefix="select"
            name="Category"
            options={option}
            value={!defaultOption ? option[0] : defaultOption}
            onChange={option => {
              setSubCategory(option.id)
              setDefaultOption(option)
            }}
            styles={colourStyle}
          />
        </div>
      </div>
      <DataTable
        className="dataTable-custom"
        data={listCourseSubCategory || []}
        columns={columns}
        noHeader
        pagination
        subHeader
        // selectableRows
        // selectableRowsComponent={BootstrapCheckbox}
        // selectableRowsComponentProps={{
        //   color: 'primary',
        //   icon: <Check className="vx-icon" size={12} />,
        //   label: '',
        //   size: 'sm',
        // }}
        customStyles={customStyles}

        // subHeaderComponent={
        //   <div className="d-flex flex-wrap justify-content-between w-100">
        //     <div className="position-relative has-icon-left mb-1">
        //       <InputGroup className="input-group-merge mb-2">
        //         <InputGroupAddon addonType="prepend">
        //           <InputGroupText>
        //             <Search size={15} />
        //           </InputGroupText>
        //         </InputGroupAddon>
        //         <Input
        //           placeholder="search..."
        //           value={valueSubCategory}
        //           // onChange={e => handleFilter(e)}
        //         />
        //       </InputGroup>
        //     </div>
        //   </div>
        // }
      />
      <CatrgoriesCourseDashboardModalSub
        optionsSub={[]}
        toggleModalSub={toggleModalSub}
        modalStateSub={modalStateSub}
        editSub={editSub}
        coverImgSub={coverImgSub}
        subCategory={subCategory}
        listArea={listArea}
      />
    </div>
  )
}

export default CategoriesCourseDashboardSub
