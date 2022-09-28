// ** React Imports
import React, {useState} from 'react'

// ** Table columns & Expandable Data

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import {ChevronDown, Trash} from 'react-feather'
import DataTable from 'react-data-table-component'
import {Input, Col, Label, Row, CustomInput, Badge, Button} from 'reactstrap'
import defaultImage from 'assets/images/avatars/1.png'
import moment from 'moment'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// ** Custom Components
import Avatar from '@core/components/avatar'
import Table from 'reactstrap/lib/Table'
// import {
//   updateRequestBecomeLectureAction,
//   getListRequestBecomeLectureAction,
//   deleteRequestBecomeLectureAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'
import {useDispatch} from 'react-redux'

// ** Expandable table component
const ExpandableTable = ({data}) => {
  return (
    <Table responsive striped>
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>City</td>
          <td>
            <div className="font-weight-bold">City{data.city}</div>
          </td>
        </tr>
        <tr>
          <td>Experience</td>
          <td>
            <div>{data.experience}</div>
          </td>
        </tr>
        <tr>
          <td>Post</td>
          <td>
            <div>{data.post}</div>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
const MySwal = withReactContent(Swal)
const InstructorBecomeATeacher = ({listRequestBecomeLecture, numberPage}) => {
  const dispatch = useDispatch()
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // ** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
    // dispatch(getListRequestBecomeLectureAction(page.selected + 1, 7))
  }

  // Columns
  const columns = React.useMemo(
    () => [
      {
        name: 'Username',
        selector: 'full_name',
        sortable: true,
        minWidth: '250px',
        maxWidth: '350px',
        cell: row => (
          <div className="py-1">
            <div className="d-flex align-items-center  ">
              <Avatar
                size="lg"
                img={row.user_info ? row.user_info.picture : defaultImage}
              />

              <div className="user-info text-truncate ml-1">
                <span className="d-block font-weight-bold text-truncate">
                  {row.user_info.username}
                </span>
                <small>{row.user_info.email}</small>
              </div>
            </div>
          </div>
        ),
      },

      {
        name: 'Date',
        selector: 'start_date',
        sortable: true,
        minWidth: '150px',
        cell: row => <p>{moment(row.created_at).format('YYYY-MM-DD')}</p>,
      },
      {
        name: 'Status',
        selector: 'status',
        sortable: true,
        minWidth: '150px',
        cell: row => {
          return (
            <Badge color="light-warning">
              {row.is_admin_accept === true
                ? 'Accepted'
                : row.is_admin_accept === false
                ? 'Rejected'
                : 'Pending'}
            </Badge>
          )
        },
      },
      {
        name: 'Accepted',
        selector: 'status',
        sortable: true,
        minWidth: '150px',
        cell: row => {
          return (
            <div>
              <CustomInput
                className="custom-control-primary"
                type="switch"
                id={row.id}
                name="secondary"
                inline
                checked={row.is_admin_accept === true ? true : false}
                onClick={
                  () => {}
                  // dispatch(
                  //   updateRequestBecomeLectureAction(row.id, {
                  //     accept: !row.is_admin_accept,
                  //   }),
                  // )
                }
              />
            </div>
          )
        },
      },
      {
        name: 'Action',
        allowOverflow: true,
        cell: row => {
          return (
            <div>
              <Button.Ripple
                className="btn-icon m-50"
                color="relief-danger"
                size="sm"
                onClick={() => handleConfirmDelete(row.user_info.id)}
              >
                <Trash size={14} />
              </Button.Ripple>
            </div>
          )
        },
      },
    ],
    [listRequestBecomeLecture],
  )
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
        // dispatch(deleteRequestBecomeLectureAction(id))
        // dispatch(deletePostOfTeamAction(postID))
      }
    })
  }

  // ** Function to handle filter
  // const handleFilter = e => {
  //   const value = e.target.value
  //   let updatedData = []
  //   setSearchValue(value)

  //   const status = {
  //     1: {title: 'Current', color: 'light-primary'},
  //     2: {title: 'Professional', color: 'light-success'},
  //     3: {title: 'Rejected', color: 'light-danger'},
  //     4: {title: 'Resigned', color: 'light-warning'},
  //     5: {title: 'Applied', color: 'light-info'},
  //   }

  //   if (value.length) {
  //     updatedData = data.filter(item => {
  //       const startsWith =
  //         item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.post.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.email.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.age.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
  //         status[item.status].title
  //           .toLowerCase()
  //           .startsWith(value.toLowerCase())

  //       const includes =
  //         item.full_name.toLowerCase().includes(value.toLowerCase()) ||
  //         item.post.toLowerCase().includes(value.toLowerCase()) ||
  //         item.email.toLowerCase().includes(value.toLowerCase()) ||
  //         item.age.toLowerCase().includes(value.toLowerCase()) ||
  //         item.salary.toLowerCase().includes(value.toLowerCase()) ||
  //         item.start_date.toLowerCase().includes(value.toLowerCase()) ||
  //         status[item.status].title.toLowerCase().includes(value.toLowerCase())

  //       if (startsWith) {
  //         return startsWith
  //       } else if (!startsWith && includes) {
  //         return includes
  //       } else return null
  //     })
  //     setFilteredData(updatedData)
  //     setSearchValue(value)
  //   }
  // }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={numberPage}
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
        'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1'
      }
    />
  )

  return (
    <div>
      <Row className="justify-content-end mx-0 mb-2 ">
        <Col
          className="d-flex align-items-center justify-content-end  "
          md="6"
          sm="12"
        >
          <Label className="mr-1" for="search-input-1">
            Search
          </Label>
          <Input
            className="dataTable-filter mb-50 "
            type="text"
            bsSize="sm"
            id="search-input-1"
            value={searchValue}
            // onChange={handleFilter}
          />
        </Col>
      </Row>
      <DataTable
        noHeader
        pagination
        data={searchValue.length ? filteredData : listRequestBecomeLecture}
        expandableRows
        columns={columns}
        expandOnRowClicked
        className=""
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        expandableRowsComponent={<ExpandableTable />}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        paginationComponent={CustomPagination}
      />
    </div>
  )
}

export default InstructorBecomeATeacher
