import React, {useEffect, useState, forwardRef} from 'react'
import {Check} from 'react-feather'
import ReviewInstructorHeader from './reviewInstructorHeader.component'

import DataTable from 'react-data-table-component'
import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'
import {getListReviewAllInstructor} from 'redux/actions/hschools/courseAction'

const selectListReviewAllInstructor = createSelector(
  state => state.hSchool,
  course => course.listReviewAllInstructor,
)

const ReviewInstructor = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListReviewAllInstructor(true))
  }, [dispatch])
  const listReviewAllInstructor = useSelector(selectListReviewAllInstructor)
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
  const list = {
    columns: [
      {
        name: 'Instructor',
        selector: 'instructor',
        width: '260px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid rounded-circle"
                height="36"
                width="36"
                src={row.instructor_info.picture}
                alt={row.instructor_info.username}
              />
            </div>
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.instructor_info.username}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row.instructor_info.username}
              </span>
              <small title={row.instructor_info.email}>
                {row.instructor_info.email}
              </small>
            </div>
          </div>
        ),
      },
      {
        name: 'Reviewer',
        selector: 'reviewer',
        width: '260px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid rounded-circle"
                height="36"
                width="36"
                src={row.reviewer_info.picture}
                alt={row.reviewer_info.username}
              />
            </div>
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.reviewer_info.username}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row.reviewer_info.username}
              </span>
              <small title={row.reviewer_info.email}>
                {row.reviewer_info.email}
              </small>
            </div>
          </div>
        ),
      },
      {
        name: 'Course',
        selector: 'course',
        width: '450px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid"
                height="36"
                width="36"
                src={row.course_info.picture}
                alt={row.course_info.title}
                style={{width: '58px', height: '33px'}}
              />
            </div>
            <div
              className="user-info text-truncate ml-xl-50 ml-0"
              style={{width: '400px', cursor: 'pointer'}}
            >
              <span
                title={row.course_info.title}
                className="d-block text-bold-500 text-truncate mb-0"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {row.course_info.title}
              </span>
              <small
                title={row.course_info.slug}
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {row.course_info.slug}
              </small>
            </div>
          </div>
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
                {[...Array(Math.round(parseFloat(row.rating)))].map(
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
                {[...Array(5 - Math.round(parseFloat(row.rating)))].map(
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
        selector: 'content',
        width: '150px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1 my-2">
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
                {row.content}
              </span>
            </div>
          </div>
        ),
      },
    ],
    filteredData: [],
    value: '',
  }

  useEffect(() => {
    setDataReviewInstructor(listReviewAllInstructor)
  }, [listReviewAllInstructor])

  const [dataReviewInstructor, setDataReviewInstructor] = useState(
    listReviewAllInstructor,
  )
  const [columsReviewInstructor, setColumsReviewInstructor] = useState(
    list.columns,
  )
  const [valueInstructor, setValueInstructor] = useState(list.value)
  const [filteredDataInstructor, setFilteredDataInstructor] = useState(
    list.filteredData,
  )

  const handleFilter = e => {
    let value = e.target.value
    let data = dataReviewInstructor
    let filteredData = filteredDataInstructor
    setValueInstructor(value)

    if (value && value.length > 0) {
      filteredData = data.filter(item => {
        let startsWithCondition =
          item.instructor_info.username
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.instructor_info.email
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.reviewer_info.username
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.reviewer_info.email
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.course_info.title
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.course_info.slug.toLowerCase().startsWith(value.toLowerCase())

        let includesCondition =
          item.instructor_info.username
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.instructor_info.email
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.reviewer_info.username
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.reviewer_info.email
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.course_info.title
            .toLowerCase()
            .startsWith(value.toLowerCase()) ||
          item.course_info.slug.toLowerCase().startsWith(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })

      setFilteredDataInstructor(filteredData)
    }
  }

  return (
    <div>
      {dataReviewInstructor && (
        <DataTable
          className="dataTable-custom"
          data={dataReviewInstructor}
          columns={columsReviewInstructor}
          noHeader
          pagination
          subHeader
          subHeaderComponent={
            <ReviewInstructorHeader
              value={valueInstructor}
              handleFilter={handleFilter}
            />
          }
          selectableRows
          selectableRowsComponent={BootstrapCheckbox}
          selectableRowsComponentProps={{
            color: 'primary',
            icon: <Check className="vx-icon" size={12} />,
            label: '',
            size: 'sm',
          }}
        />
      )}
    </div>
  )
}

export default ReviewInstructor
