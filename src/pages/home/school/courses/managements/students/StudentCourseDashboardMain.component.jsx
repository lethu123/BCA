// ** React Imports
import {useEffect, useState} from 'react'
import axios from 'axios'
import {ChevronDown, Edit, Trash} from 'react-feather'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {
  Badge,
  Button,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from 'reactstrap'

// ** Custom Components
import Avatar from '@core/components/avatar'
import ExpandableTable from './ExpandStudent.component'

// ** Vars
const states = [
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'primary',
  'secondary',
]

// ** Table Common Column
const columns = [
  {
    name: 'Username',
    selector: 'full_name',
    sortable: true,
    minWidth: '400px',

    cell: row => (
      <div className="d-flex align-items-center py-1">
        {row.avatar === '' ? (
          <Avatar
            size="md"
            color={`light-${states[row.status]}`}
            content={row.full_name}
            initials
          />
        ) : (
          <Avatar
            size="md"
            img={
              require(`assets/images/portrait/small/avatar-s-${row.avatar}`)
                .default
            }
          />
        )}
        <div className="user-info text-truncate ml-1">
          <span className="d-block font-weight-bold text-truncate text-primary">
            {row.full_name}
          </span>
          <small>{row.email}</small>
        </div>
      </div>
    ),
  },

  {
    name: 'Follower',
    selector: 'age',
    sortable: true,
    minWidth: '150px',
  },
  {
    name: 'Course',
    selector: 'age',
    sortable: true,
    minWidth: '150px',
    cell: () => (
      <div>
        <Badge color="light-primary">20 Courses</Badge>
      </div>
    ),
  },
]

const StudentCourseDashboardMain = () => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [modal, setModal] = useState(false)
  const [modalStudent, setModalStudent] = useState(false)
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    // ** Get initial Data
    axios.get('/api/datatables/initial-data').then(response => {
      setData(response.data)
    })
  }, [])

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: {title: 'Current', color: 'light-primary'},
      2: {title: 'Professional', color: 'light-success'},
      3: {title: 'Rejected', color: 'light-danger'},
      4: {title: 'Resigned', color: 'light-warning'},
      5: {title: 'Applied', color: 'light-info'},
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title
            .toLowerCase()
            .startsWith(value.toLowerCase())

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }
  // ** handel modal
  const toggleModal = () => setModal(!modal)
  const toggleModalStudent = () => setModalStudent(!modalStudent)

  // ** Function to handle filter
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={10}
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
      <Row className="justify-content-end mx-0 my-1">
        <Col
          className="d-flex align-items-center justify-content-end "
          md="6"
          sm="12"
        >
          <Label className="mr-1" for="search-input">
            Search
          </Label>
          <Input
            value={searchValue}
            onChange={handleFilter}
            className="dataTable-filter mb-50"
            type="text"
            bsSize="sm"
            aa
          />
        </Col>
      </Row>
      <DataTable
        noHeader
        pagination
        data={searchValue.length ? filteredData : data}
        expandableRows
        columns={[
          ...columns,
          // {
          //   name: 'Actions',
          //   allowOverflow: true,
          //   cell: row => {
          //     return (
          //       <div>
          //         <Button.Ripple
          //           className="btn-icon m-50"
          //           color="relief-info"
          //           size="sm"
          //         >
          //           <Edit size={14} />
          //         </Button.Ripple>

          //         <Button.Ripple
          //           className="btn-icon m-50"
          //           color="relief-danger"
          //           size="sm"
          //         >
          //           <Trash size={14} />
          //         </Button.Ripple>
          //       </div>
          //     )
          //   },
          // },
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
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        paginationComponent={CustomPagination}
      />

      {/* ========== LIST STUDENT ===== */}
      <Modal
        isOpen={modalStudent}
        toggle={toggleModalStudent}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={toggleModalStudent}>
          List student of class
        </ModalHeader>
        <ModalBody>
          <Table hover responsive>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center py-1">
                    <Avatar
                      size="md"
                      imgClassName="rounded"
                      img={
                        require(`assets/images/avatars/avatar-blank.png`)
                          .default
                      }
                    />
                    <div className="user-info text-truncate ml-1">
                      <span className="d-block font-weight-bold text-truncate text-primary">
                        Hatake Kakashi
                      </span>
                      <small>thule@gmail.com</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center py-1">
                    <Avatar
                      size="md"
                      imgClassName="rounded"
                      img={
                        require(`assets/images/avatars/avatar-blank.png`)
                          .default
                      }
                    />
                    <div className="user-info text-truncate ml-1">
                      <span className="d-block font-weight-bold text-truncate text-primary">
                        Darkcompet
                      </span>
                      <small>thule@gmail.com</small>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModalStudent} outline>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default StudentCourseDashboardMain
