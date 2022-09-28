import React, {useState} from 'react'
import {Check} from 'react-feather'
import ReviewCourseEditHeader from './reviewCourseEditHeader.component'

import DataTable from 'react-data-table-component'
import Checkbox from 'components/checkbox/CheckboxesVuexy'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap'

const ReviewCourseEdit = ({reviews}) => {
  const list = {
    columns: [
      {
        name: 'Reviewer',
        selector: 'username',
        width: '260px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid rounded-circle"
                height="36"
                width="36"
                src={row.picture}
                alt={row.username}
              />
            </div>
            <div className="user-info text-bold-600 ml-xl-50 ml-0">
              <span
                title={row.username}
                className="d-block text-bold-500 text-bold-600 mb-0"
              >
                {row.username}
              </span>
            </div>
          </div>
        ),
      },
      {
        name: 'Date Created',
        selector: 'comment_date',
        width: '250px',
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.comment_date}</p>
        ),
      },

      {
        name: 'Rating',
        selector: 'rating',
        sortable: true,
        width: '200px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 my-2">
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span className="d-block text-bold-500 text-truncate mb-0">
                {[...Array(Math.round(parseFloat(row.num_star)))].map(
                  (_, idx) => (
                    <i
                      className="fa fa-star"
                      key={idx}
                      style={{
                        color: 'yellow',
                        fontSize: '14px',
                        marginLeft: '1px',
                      }}
                    ></i>
                  ),
                )}
                {[...Array(5 - Math.round(parseFloat(row.num_star)))].map(
                  (_, idx) => (
                    <i
                      className="far fa-star"
                      key={idx}
                      style={{
                        color: 'gray',
                        fontSize: '14px',
                        marginLeft: '1px',
                      }}
                    ></i>
                  ),
                )}
              </span>
            </div>
          </div>
        ),
      },

      {
        name: 'Content',
        selector: 'comment',
        width: '250px',
        cell: row => (
          <div className="d-flex text-truncate flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 my-2">
            <div
              className="user-info text-truncate ml-xl-50 ml-0"
              style={{width: '180px'}}
            >
              <span
                className="d-block text-bold-500 text-truncate mb-0"
                style={{
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis ',
                }}
              >
                {row.comment}
              </span>
            </div>
          </div>
        ),
      },
      {
        name: 'Actions',
        selector: 'action',
        width: '50px',
        cell: row => {
          return (
            <UncontrolledButtonDropdown className="align-self-center float-right">
              <DropdownToggle
                tag="button"
                className="btn btn-link p-0 dropdown-toggle text-muted"
              >
                <i className="uil uil-ellipsis-v"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className="cursor-pointer">
                  <i className="uil uil-exit mr-50"></i>Hide
                </DropdownItem>
                <div>
                  <DropdownItem
                    style={{display: row.is_accepted ? 'none' : 'block'}}
                  >
                    <Check className="mr-50" size={16} /> Report
                  </DropdownItem>
                </div>
                <>
                  <DropdownItem divider />
                  <DropdownItem className="text-danger">
                    <i className="uil uil-trash mr-50"></i>Delete
                  </DropdownItem>
                </>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          )
        },
      },
    ],
    filteredData: [],
    value: '',
  }

  const [valueInstructor, setValueInstructor] = useState('')
  const [filteredDataInstructor, setFilteredDataInstructor] = useState('')

  const handleFilter = e => {
    let value = e.target.value
    let data = reviews

    console.log(data)
    let filteredData = filteredDataInstructor
    setValueInstructor(value)

    if (value.length) {
      filteredData = data.filter(item => {
        let includesCondition =
          item.username.toLowerCase().includes(value.toLowerCase()) ||
          item.comment.toLowerCase().includes(value.toLowerCase())

        if (includesCondition) {
          return includesCondition
        } else return null
      })
      setFilteredDataInstructor(filteredData)
    }
  }

  return (
    <div>
      <DataTable
        className="dataTable-custom"
        data={valueInstructor.length ? filteredDataInstructor : reviews}
        columns={list.columns}
        noHeader
        pagination
        subHeader
        subHeaderComponent={
          <ReviewCourseEditHeader
            value={valueInstructor}
            handleFilter={handleFilter}
          />
        }
        selectableRows
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={{
          color: 'primary',
          icon: <Check className="vx-icon" size={12} />,
          label: '',
          size: 'sm',
        }}
      />
    </div>
  )
}

export default ReviewCourseEdit
