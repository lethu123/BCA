// ** React Imports
import {useEffect, useState} from 'react'
import axios from 'axios'
import {ChevronDown, Edit, Star, Trash, Plus} from 'react-feather'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
// import ReactPlayer from 'react-player'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from 'reactstrap'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Flatpickr from 'react-flatpickr'
import {useHistory} from 'react-router-dom'
import Rating from 'react-rating'

// ** Custom Components
import Avatar from '@core/components/avatar'
import ExpandableTable from './ExpandCourse.component'
import SelectField from 'components/form/SelectField'
import ModalCreateCourse from './ModalCreateCourse.component'
import {useDispatch, useSelector} from 'react-redux'
// import {
//   deleteCourseHschoolAction,
//   getListBenefitCourseAction,
//   getListCourseCategoryAction,
//   getListCourseHschoolAction,
//   getListInstructorCourseAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'
import {createSelector} from 'reselect'
import {useRTL} from 'utility/hooks/useRTL'

//select
const listCourses = createSelector(
  state => state.hSchoolRebuild.management,
  course => course.listCourse,
)

// ** Vars

const formSchema = Yup.object().shape({
  student: Yup.array().min(1).required('Student is required'),
  lecturer: Yup.string().required('Lecturer is required'),
  schadule: Yup.string().required('Schadule is required'),
  date: Yup.date().required('Start date is required'),
  time: Yup.date().required('Time date is required'),
  address: Yup.string().required('Address is required'),
})

const listStudent = [
  {value: 0, label: 'Hatake Kakashi'},
  {value: 1, label: 'Hoang Quyen'},
  {value: 2, label: 'Khac Vu'},
  {value: 3, label: 'Gia Huy'},
  {value: 4, label: 'Hong Huynh'},
  {value: 5, label: 'Nguyen Duong'},
]

const categoryOptions = [
  {value: '4', label: 'All'},
  {value: '1', label: 'Development'},
  {value: '2', label: 'Desingner'},
  {value: '3', label: 'Marketing'},
]

const priceOptions = [
  {value: '1', label: 'All'},
  {value: '2', label: 'Free'},
  {value: '3', label: 'Paid'},
]

const CoursesManagement = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isRtl, setIsRtl] = useRTL()
  //useSelect
  const listCourse = useSelector(listCourses)
  // ** State
  const [centeredModal, setCenteredModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [modal, setModal] = useState(false)
  const [modalStudent, setModalStudent] = useState(false)
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [editCourse, setEditCourse] = useState(null)

  // ** Table Common Column
  const columns = [
    {
      name: 'Course',
      selector: 'full_name',
      sortable: true,
      minWidth: '400px',
      cell: row => (
        <div className="d-flex align-items-center py-1">
          {row.picture ? (
            <Avatar
              size="xl"
              // color={`light-${states[row.status]}`}
              content={row.picture}
              img={row.picture}
              initials
            />
          ) : (
            <Avatar
              size="xl"
              imgClassName="rounded"
              img={require(`assets/images/user/default.png`)}
            />
          )}
          <div
            className="user-info text-truncate ml-1"
            style={{maxWidth: '290px'}}
          >
            <span
              onClick={() =>
                history.push(`/hschool/course/edit-course/${row.slug}`)
              }
              className="d-block font-weight-bold text-truncate text-primary"
            >
              {row.title ?? 'updating'}
            </span>
            {/* <small>{row.start_date}</small> */}
          </div>
        </div>
      ),
    },
    {
      name: 'Category',
      selector: 'status',
      sortable: true,
      minWidth: '200px',
      cell: row => {
        return (
          <Badge color="primary" pill>
            {row.category_name ?? 'updating'}
          </Badge>
        )
      },
    },
    {
      name: 'Rating',
      selector: 'rating',
      sortable: true,
      cell: row => (
        <Rating
          emptySymbol={<Star size={20} fill="#babfc7" stroke="#babfc7" />}
          fullSymbol={<Star size={20} fill="#ff9f43" stroke="#ff9f43" />}
          fractions={2}
          initialRating={row.rating ?? 0}
          direction={isRtl ? 'rtl' : 'ltr'}
          readonly
        />
      ),
    },

    {
      name: 'Price',
      selector: 'salary',
      sortable: true,
      minWidth: '150px',
      cell: row => <div className="font-weight-bold">${row.price ?? 0}</div>,
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: row => {
        return (
          <div>
            <Button.Ripple
              className="btn-icon m-50"
              color="relief-info"
              onClick={() => {
                setEditCourse(row)
                setCenteredModal(!centeredModal)
              }}
            >
              <Edit size={14} />
            </Button.Ripple>

            <Button.Ripple
              className="btn-icon m-50"
              color="relief-danger"
              // onClick={() => dispatch(deleteCourseHschoolAction(row.id))}
            >
              <Trash size={14} />
            </Button.Ripple>
          </div>
        )
      },
    },
  ]

  useEffect(() => {
    // ** Get initial Data
    axios.get('/api/datatables/initial-data').then(response => {
      setData(response.data)
    })
    // dispatch(getListCourseHschoolAction(1, 7))
    // dispatch(getListCourseCategoryAction())
    // dispatch(getListBenefitCourseAction())
    // dispatch(getListInstructorCourseAction())
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
    setCurrentPage(page.selected, 7)
    // dispatch(getListCourseHschoolAction(page.selected + 1, 7))
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={7}
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
      <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
        <div className="filter w-100">
          <Row>
            <Col sm="6" lg="3">
              <h5 className="my-1 text-bold-600">Categories</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={categoryOptions[0]}
                name="color"
                options={categoryOptions}
              />
            </Col>
            {/* <Col lg="2" md="4" sm="6">
              <h5 className="my-1 text-bold-600">Status</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={statusOptions[0]}
                name="color"
                options={statusOptions}
              />
            </Col> */}

            <Col lg="2" md="4" sm="6">
              <h5 className="my-1 text-bold-600">Price</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={priceOptions[0]}
                name="color"
                options={priceOptions}
              />
            </Col>
            <Col md="2">
              <Button
                color="primary"
                className=" btn-block"
                style={{marginTop: '45px'}}
              >
                Filter
              </Button>
            </Col>
          </Row>
        </div>
      </CardHeader>
      <Row className="justify-content-end mx-0 my-1">
        <Col lg="6">
          <Button.Ripple
            color="primary"
            className="mr-1"
            onClick={() => {
              setCenteredModal(!centeredModal)
              setEditCourse(null)
            }}
          >
            <Plus size="18" /> New Course
          </Button.Ripple>
        </Col>
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
          />
        </Col>
        {/* <ReactPlayer
          url="https://media.baotintuc.vn/Upload/m0xCDRsplmYeHmGctyfDUw/files/2021/07/KMQH.mp4"
          className="react-player-video my-2 rounded overflow-hidden"
          width="100%"
          controls={true}
        /> */}
      </Row>
      <DataTable
        noHeader
        pagination
        data={searchValue.length ? filteredData : listCourse ?? []}
        expandableRows
        columns={columns}
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

      {/* ========== model create course ============ */}
      <ModalCreateCourse
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
        editCourse={editCourse}
      />

      {/* ========== modal ============= */}
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
          {({values, setFieldValue, setFieldTouched}) => (
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
                <Button.Ripple color="primary" className="mt-2">
                  <Plus size={20} style={{marginBottom: 4}} /> Add Student
                </Button.Ripple>
              </CardBody>
            </Card>
          </div>

          <Table hover responsive>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center py-1">
                    <Avatar
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
                  <div>
                    <Button.Ripple
                      className="btn-icon m-50"
                      color="relief-danger"
                    >
                      <Trash size={14} />
                    </Button.Ripple>
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

export default CoursesManagement
