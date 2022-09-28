// ** React Imports
import React, {useState, memo, useEffect} from 'react'
import {ChevronDown, Trash} from 'react-feather'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {Button, Col, Input, Label, Row} from 'reactstrap'
// ** Custom Components
import Avatar from '@core/components/avatar'
import ExpandableTable from './ExpandLecturer.component'
import defaultImage from 'assets/images/avatars/1.png'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// Action
// import {
//   getListLectureOfSystemAction,
//   deleteLectureAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'

const MySwal = withReactContent(Swal)
const InstructorsCourseDashboardMain = ({listLecture, numberPage}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [modal, setModal] = useState(false)
  const [modalStudent, setModalStudent] = useState(false)
  const [value, setValue] = useState(null)
  // useEffect(() => {
  // if (value === '') {
  //   dispatch(getListLectureOfSystemAction())
  // }
  // }, [value])

  // ** Table Common Column

  const columns = React.useMemo(
    () => [
      {
        name: 'Lecturer',
        selector: 'full_name',
        sortable: true,
        minWidth: '300px',
        maxWidth: '400px',
        cell: row => (
          <div className="d-flex align-items-center py-1">
            <Avatar size="lg" img={row.avatar ? row.avatar : defaultImage} />
            <div className="user-info text-truncate ml-1">
              <span
                className="d-block font-weight-bold text-truncate text-primary"
                onClick={() => history.push(`/user/${row.url}/profile/feed`)}
              >
                {row.username}
              </span>
              <small>{row.email}</small>
            </div>
          </div>
        ),
      },

      {
        name: 'Rating',
        selector: 'rating',
        sortable: true,
        minWidth: '130px',
        maxWidth: '200px',
        cell: row =>
          row.c_rating > 0 ? (
            <div>
              {[...Array(Math.round(parseFloat(row.c_rating)))].map(
                (_, idx) => (
                  <i className="fa fa-star" key={idx}></i>
                ),
              )}
              {[...Array(Math.round(5 - parseFloat(row.c_rating)))].map(
                (_, idx) => (
                  <i className="far fa-star" key={idx}></i>
                ),
              )}
            </div>
          ) : (
            'Not yet rated'
          ),
      },

      // {
      //   name: 'Educator Skills',
      //   selector: 'skill',
      //   sortable: true,
      //   minWidth: '100px',
      //   maxWidth: '150px',
      //   center: true,
      //   cell: row => (
      //     <p
      //       style={{
      //         fontStyle: 'italic',
      //         textDecoration: 'underline',
      //         color: '#FF6700',
      //         fontSize: 12,
      //       }}
      //       onClick={() => {
      //         setSkill(row.skills)
      //       }}
      //     >
      //       view_skill
      //     </p>
      //   ),
      // },
      {
        name: 'Total course taught',
        selector: 'total',
        sortable: true,
        minWidth: '150px',
        maxWidth: '180px',
        center: true,
        cell: row => <p>{row.c_course}</p>,
      },

      {
        name: 'Follwer',
        selector: 'follwer',
        sortable: true,
        minWidth: '60px',
        maxWidth: '100px',
        center: true,
        cell: row => <p>{row.c_follower}</p>,
      },
    ],
    [listLecture],
  )

  // ** handel modal
  const toggleModal = () => setModal(!modal)
  const toggleModalStudent = () => setModalStudent(!modalStudent)

  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
    // dispatch(getListLectureOfSystemAction(page.selected + 1, 7))
  }

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
        // dispatch(deletePostOfTeamAction(postID))
        // dispatch(deleteLectureAction(id))
      }
    })
  }

  return (
    <div>
      <Row className="justify-content-end mx-0 my-1">
        <Col
          className="d-flex align-items-center justify-content-end "
          md="6"
          sm="12"
        >
          <form
            onSubmit={e => {
              e.preventDefault()
              // console.log(value)
              // dispatch(getListLectureOfSystemAction(1, 7, value))
            }}
          >
            <Label className="mr-1" for="search-input">
              Search
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </form>
        </Col>
      </Row>
      <DataTable
        noHeader
        pagination
        expandableRows
        columns={[
          ...columns,
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
                    onClick={() => handleConfirmDelete(row.id)}
                  >
                    <Trash size={14} />
                  </Button.Ripple>
                </div>
              )
            },
          },
        ]}
        expandOnRowClicked
        className=""
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        expandableRowsComponent={
          <ExpandableTable
            toggleModalStudent={toggleModalStudent}
            toggleModal={toggleModal}
          />
        }
        // paginationRowsPerPageOptions={[10, 25, 50, 100]}
        paginationComponent={CustomPagination}
        data={listLecture}
      />
    </div>
  )
}

export default InstructorsCourseDashboardMain
