// ** React Imports
import {useEffect, useState} from 'react'
import axios from 'axios'
import {
  Archive,
  ChevronDown,
  Edit,
  FileText,
  MoreVertical,
  Star,
  Trash,
  Plus,
} from 'react-feather'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
  UncontrolledDropdown,
} from 'reactstrap'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Flatpickr from 'react-flatpickr'

// ** Custom Components
import Avatar from '@core/components/avatar'
import ExpandableTable from './ExpandReportCourse.component'
import SelectField from 'components/form/SelectField'

// ** Vars

const formSchema = Yup.object().shape({
  student: Yup.array().min(1).required('Student is required'),
  lecturer: Yup.string().required('Lecturer is required'),
  schadule: Yup.string().required('Schadule is required'),
  date: Yup.date().required('Start date is required'),
  time: Yup.date().required('Time date is required'),
  address: Yup.string().required('Address is required'),
})

const states = [
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'primary',
  'secondary',
]

const status = {
  1: {title: 'Current', color: 'light-primary'},
  2: {title: 'Professional', color: 'light-success'},
  3: {title: 'Rejected', color: 'light-danger'},
  4: {title: 'Resigned', color: 'light-warning'},
  5: {title: 'Applied', color: 'light-info'},
}

const listStudent = [
  {value: 0, label: 'Hatake Kakashi'},
  {value: 1, label: 'Hoang Quyen'},
  {value: 2, label: 'Khac Vu'},
  {value: 3, label: 'Gia Huy'},
  {value: 4, label: 'Hong Huynh'},
  {value: 5, label: 'Nguyen Duong'},
]

// ** Table Common Column
const columns = [
  {
    name: 'Username',
    selector: 'full_name',
    sortable: true,
    minWidth: '350px',
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
    name: 'Course',
    selector: 'full_name',
    sortable: true,
    minWidth: '400px',

    cell: row => (
      <div className="d-flex align-items-center py-1">
        {row.avatar === '' ? (
          <Avatar
            size="xl"
            color={`light-${states[row.status]}`}
            content={row.full_name}
            initials
          />
        ) : (
          <Avatar
            size="xl"
            imgClassName="rounded"
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
          <small>{row.start_date}</small>
        </div>
      </div>
    ),
  },
  {
    name: 'Category',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    },
  },
  {
    name: 'Rating',
    selector: 'rating',
    sortable: true,
    cell: row => (
      <div className="d-flex align-items-center">
        <Star size={17} fill="#EEEE00" stroke="#EEEE00" />
        <Star size={17} fill="#EEEE00" stroke="#EEEE00" />
        <Star size={17} fill="#EEEE00" stroke="#EEEE00" />
        <Star size={17} fill="#fff" stroke="#b8c2cc" />
      </div>
    ),
  },

  {
    name: 'Title',
    selector: 'salary',
    sortable: true,
    minWidth: '150px',
    cell: row => <div>this is title</div>,
  },
]

const CoursesManagement = () => {
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
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        paginationComponent={CustomPagination}
      />

      {/* ========== mdal ============= */}
      <Modal
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered modal-lg"
      >
        <Formik
          initialValues={{
            student: [],
            lecturer: '',
            date: '',
            address: '',
            time: '',
            schadule: '',
          }}
          validationSchema={formSchema}
        >
          {({errors, touched, values, setFieldValue, setFieldTouched}) => (
            <Form>
              <ModalHeader toggle={toggleModal}>
                <span className="text-primary">ADD CLASS</span>
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  {/* Type Solution */}
                  <SelectField
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    options={listStudent.length > 0 ? listStudent : []}
                    label="Multipale Student"
                    isRequired={true}
                    name="student"
                    isMulti={true}
                  />
                </FormGroup>
                <FormGroup>
                  {/* Type Solution */}
                  <SelectField
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    options={listStudent.length > 0 ? listStudent : []}
                    label="Lecturer"
                    isRequired={true}
                    name="lecturer"
                    isMulti={false}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="date-time-picker">
                    Start Date <sup style={{color: '#FF0000'}}>*</sup>
                  </Label>
                  <Flatpickr
                    value={values.date}
                    className="form-control"
                    onChange={date => setFieldValue(date)}
                  />

                  <ErrorMessage
                    name="date"
                    component="div"
                    className="field-error text-danger"
                  />
                </FormGroup>
                <Row className="mb-1">
                  <Col lg="6">
                    <Label for="Address">
                      Schadule <sup style={{color: '#FF0000'}}>*</sup>
                    </Label>
                    <Field
                      name="address"
                      placeholder="Monday, Wednesday, Satuday"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="field-error text-danger"
                    />
                  </Col>
                  <Col lg="6">
                    <Label for="Address">
                      Time <sup style={{color: '#FF0000'}}>*</sup>
                    </Label>
                    <Flatpickr
                      className="form-control"
                      value={new Date()}
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: 'H:i',
                        time_24hr: true,
                      }}
                      onChange={time => setFieldValue(time)}
                    />
                    <ErrorMessage
                      name="time"
                      component="div"
                      className="field-error text-danger"
                    />
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="Address">
                    Address <sup style={{color: '#FF0000'}}>*</sup>
                  </Label>
                  <Field name="address" className="form-control" />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="field-error text-danger"
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" className="mr-1" onClick={toggleModal}>
                  Submit
                </Button>
                <Button color="secondary" onClick={toggleModal} outline>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>

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
          <div className="my-1">
            <Button.Ripple color="primary">
              <Plus size={20} /> Add Student
            </Button.Ripple>
            <Card className="bg-transparent border-success shadow-none  my-1">
              <CardBody>
                <CardTitle tag="h4">Choose multiple Student</CardTitle>
                <small> Hiện khi click add, ẩn khi add xong</small>
                <Select
                  isMulti
                  name="colors"
                  options={listStudent}
                  className="react-select"
                  classNamePrefix="select"
                  theme={selectThemeColors}
                />
              </CardBody>
            </Card>
          </div>

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
                <td className="text-right">
                  <Button.Ripple className="btn-icon" color="danger">
                    <Trash size={20} />
                  </Button.Ripple>
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
                <td className="text-right">
                  <Button.Ripple className="btn-icon" color="danger">
                    <Trash size={20} />
                  </Button.Ripple>
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

export default CoursesManagement
