import React, {useEffect, useState} from 'react'
import {Check, Edit, Trash} from 'react-feather'

import DataTable from 'react-data-table-component'
import {useDispatch, useSelector} from 'react-redux'
// import {getCourseFQAs} from 'redux/actions/hschools/courseAction'
// import {selectDetailCourse} from 'redux/reselects/hschools/course.reselect'
import moment from 'moment'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Spinner,
  UncontrolledButtonDropdown,
  // CustomInput,
} from 'reactstrap'
import Checkbox from 'components/checkbox/CheckboxesVuexy'
import FQAHeader from './FQAHeader.component'

// import {selectCourseFQAs} from 'redux/reselects/hschools/course.reselect'

const FQA = () => {
  const dispatch = useDispatch()
  // const [isMyReview, setIsMyReview] = useState(false)
  // const course2 = useSelector(state => selectDetailCourse(state))
  // useEffect(() => {
  //   if (course2) dispatch(getCourseFQAs(course2.id))
  // }, [dispatch, course2])
  // const courseFQAs = useSelector(selectCourseFQAs)

  const ActionsComponent = props => {
    return (
      <div className="data-list-action">
        <Edit className="cursor-pointer mr-1 warning" size={20} />
        <Trash className="cursor-pointer danger" size={20} />
      </div>
    )
  }
  const list = {
    columns: [
      {
        name: 'Interrogator',
        selector: 'interrogator',
        maxWidth: '260px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid rounded-circle"
                height="36"
                width="36"
                src={row.user_info.picture}
                alt={row.user_info.username}
              />
            </div>
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.user_info.username}
                className="d-block font-weight-bold text-truncate mb-0"
              >
                {row.user_info.username}
              </span>
              <small title={row.user_info.email}>{row.user_info.email}</small>
            </div>
          </div>
        ),
      },
      {
        name: 'Content',
        selector: 'content',
        maxWidth: '400px',
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
                {row.content}
              </span>
              <span className="d-block">
                <i>-- {moment(row.date_created).format('LLL')}</i>
              </span>
            </div>
          </div>
        ),
      },
      {
        name: 'Respondent',
        selector: 'respondent',
        maxWidth: '500px',
        style: {flexWrap: 'wrap'},
        cell: row => (
          <React.Fragment>
            {row.reply_info.length > 0 ? (
              <React.Fragment>
                {row.reply_info.map((ele, index) => (
                  <div key={index} className="w-100 border-bottom py-2">
                    <div className="d-flex flex-xl-row flex-column  align-items-start py-xl-0 py-1">
                      <div className="user-img ml-xl-0 ml-2">
                        <img
                          className="img-fluid rounded-circle"
                          height="36"
                          width="36"
                          src={ele.user_info.picture}
                          alt={ele.user_info.username}
                        />
                      </div>
                      <div className="user-info  ml-xl-50 ml-0">
                        <span
                          title={ele.user_info.username}
                          className="d-block font-weight-bold text-truncate mb-0"
                        >
                          {ele.user_info.username}
                        </span>

                        <span title={ele.content}>{ele.content}</span>
                        <small className="d-block">
                          <i>-- {moment(ele.date_created).format('LLL')}</i>
                        </small>
                      </div>
                      <div className="ml-auto">
                        <UncontrolledButtonDropdown className="align-self-center float-right">
                          <DropdownToggle
                            tag="button"
                            className="btn btn-link p-0 dropdown-toggle text-muted"
                          >
                            <i className="uil uil-ellipsis-v"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem className="cursor-pointer">
                              <Edit className="mr-50" size={16} />
                              Edit
                            </DropdownItem>
                            <div>
                              <DropdownItem
                                style={{
                                  display: row.is_accepted ? 'none' : 'block',
                                }}
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
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ) : (
              <span>No answer yet!</span>
            )}
          </React.Fragment>
        ),
      },

      {
        name: 'Actions',
        selector: 'action',
        width: '100px',
        center: true,
        cell: row => <ActionsComponent />,
      },
    ],
    filteredData: [],
    value: '',
  }

  const [valueFQAs, setValueFQAs] = useState('')
  const [filteredDataCourseFQAs, setFilteredDataCourseFQAs] = useState('')

  const handleFilter = e => {
    let value = e.target.value
    // let data = courseFQAs

    let filteredData = filteredDataCourseFQAs
    setValueFQAs(value)

    // if (value.length) {
    //   filteredData = data.filter(item => {
    //     let includesCondition =
    //       item.user_info.username.toLowerCase().includes(value.toLowerCase()) ||
    //       item.user_info.email.toLowerCase().includes(value.toLowerCase()) ||
    //       item.content.toLowerCase().includes(value.toLowerCase()) ||
    //       item.reply_info.filter(
    //         e =>
    //           e.user_info.username
    //             .toLowerCase()
    //             .includes(value.toLowerCase()) ||
    //           e.user_info.email.toLowerCase().includes(value.toLowerCase()) ||
    //           e.content.toLowerCase().includes(value.toLowerCase()),
    //       ).length > 0

    //     if (includesCondition) {
    //       return includesCondition
    //     } else return null
    //   })
    //   console.log(filteredData)

    //   setFilteredDataCourseFQAs(filteredData)
    // }
  }

  // if (!course2) return <Spinner />

  return (
    <div>
      {/* {courseFQAs && (
        <DataTable
          className="dataTable-custom"
          data={valueFQAs.length ? filteredDataCourseFQAs : courseFQAs}
          columns={list.columns}
          noHeader
          pagination
          subHeader
          subHeaderComponent={
            <FQAHeader value={valueFQAs} handleFilter={handleFilter} />
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
      )} */}
    </div>
  )
}

export default FQA
