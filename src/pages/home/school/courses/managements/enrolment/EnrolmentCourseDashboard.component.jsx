import React, {useEffect, useState, forwardRef} from 'react'
import DataTable from 'react-data-table-component'
import moment from 'moment'
import {ChevronDown, Eye, Trash} from 'react-feather'
import {Check} from 'react-feather'
import SweetAlert from 'react-bootstrap-sweetalert'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap'
import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'

// ** action
// import {getListEnrolledHistory} from 'redux/actions/hschools/courseAction'

const colourOptions = [
  {value: 'ocean', label: 'Khóa học 1'},
  {value: 'blue', label: 'Khóa học 12'},
  {value: 'purple', label: 'Khóa học 2'},
  {value: 'red', label: 'Khóa học 3'},
  {value: 'orange', label: 'Khóa học 4'},
]

const selectListEnrolled = createSelector(
  state => state.hSchool,
  course => course.listEnrolledHistory,
)

const EnrolmentCourseDashboard = () => {
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
  const columns = [
    {
      name: 'Username',
      selector: 'username',
      sortable: true,
      minWidth: '250px',
      cell: row => (
        <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
          <div className="user-img ml-xl-0 ml-2">
            <img
              className="img-fluid rounded-circle"
              height="36"
              width="36"
              src={row.student_info.picture}
              alt={row.student_info.id}
            />
          </div>
          <div className="user-info text-truncate ml-xl-50 ml-0">
            <span
              title={row.student_info.username}
              className="d-block text-bold-500 text-truncate mb-0"
            >
              {row.student_info.username}
            </span>
            <small title={row.student_info.email}>
              {row.student_info.email}
            </small>
          </div>
        </div>
      ),
    },
    {
      name: 'Enrolled course',
      selector: 'slug',
      sortable: true,
      minWidth: '450px',
      cell: row => (
        <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
          <div className="user-img ml-xl-0 ml-2">
            <img
              className="img-fluid"
              height="40"
              width="40"
              src={row.course_info.thumb}
              alt={row.course_info_thumb}
            />
          </div>
          <div className="user-info text-truncate ml-xl-50 ml-0">
            <span
              title={row.course_info.title}
              className="d-block text-bold-500 text-truncate mb-0"
            >
              {row.course_info.title}
            </span>
          </div>
        </div>
      ),
    },
    {
      name: 'Category Name',
      selector: 'categoryname',
      sortable: true,
      cell: row => (
        <p className="text-bold-500 text-truncate mb-0">
          {row.course_info.category_name}
        </p>
      ),
    },
    {
      name: 'Enrolment date',
      selector: 'enrolmentdate',
      sortable: true,
      cell: row => (
        <p className="text-bold-500 text-truncate mb-0">{row.date_created}</p>
      ),
    },
    {
      name: 'Price',
      selector: 'price',
      sortable: true,
      minWidth: '100px',
      cell: row => (
        <p className="text-bold-500 text-truncate mb-0">
          ${row.course_info.price}
        </p>
      ),
    },

    {
      name: 'Actions',
      selector: '',
      sortable: true,
      minWidth: '100px',
      cell: row => (
        <div>
          <Eye
            className="cursor-pointer mr-1"
            size={20}
            color="#ea5455"
            onClick={toggleModal}
          />
          <Trash
            className="cursor-pointer"
            size={20}
            color="#ea5455"
            onClick={() => hanldeDeleteEnrol(true)}
          />
        </div>
      ),
    },
  ]

  const [modal, setModal] = useState(false)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getListEnrolledHistory())
  // }, [dispatch])

  const toggleModal = () => setModal(!modal)

  const listEnrolled = useSelector(selectListEnrolled)

  const [columsEnrolment, setColumsEnrolment] = useState(columns)
  let nowDate = new Date().getTime()
  var today = new Date()
  const [dropTimeEnd, setDropTimeEnd] = useState(
    moment(nowDate).format('MMMM Do YYYY'),
  )
  const [dropTimeStart, setDropTimeStart] = useState(
    moment(nowDate).format('MMMM Do YYYY'),
  )
  const milisecond = 24 * 3600 * 1000

  const hanldeDropdown = value => {
    let timeDateEnd, timeDateStart
    switch (value) {
      case 'all':
        setFirstData(false)
        break
      case 'today':
        timeDateEnd = nowDate
        break
      case 'yesterday':
        timeDateEnd = nowDate - 1 * milisecond
        break
      case 'last7days':
        timeDateEnd = nowDate - 7 * milisecond
        break
      case 'last30days':
        timeDateEnd = nowDate - 30 * milisecond
        break
      case 'thismonth':
        timeDateEnd = new Date(today.getFullYear(), today.getMonth(), 1)
        timeDateStart = new Date(today.getFullYear(), today.getMonth() + 1, 0)
        break
      case 'lastmonth':
        timeDateEnd = new Date(today.getFullYear(), today.getMonth() - 1, 1)
        timeDateStart = new Date(today.getFullYear(), today.getMonth(), 0)
        break
      default:
        break
    }
    setDropTimeEnd(moment(timeDateEnd).format('MMMM Do YYYY'))
    setDropTimeStart(moment(timeDateStart).format('MMMM Do YYYY'))
  }

  // const [preloadRange, setPreloadRange] = useState(new Date())
  const [successAlert, setSuccessAlert] = useState(false)
  const hanldeDeleteEnrol = value => {
    setSuccessAlert(value)
  }

  const [dataFilter, setDataFilter] = useState([])
  const [firstData, setFirstData] = useState(false)

  const handleFilter = () => {
    setFirstData(true)
    if (listEnrolled.length > 0) {
      let data = listEnrolled.filter(
        item =>
          moment(item.date_created, 'DD MM YYYY Z').valueOf() >=
            moment(dropTimeEnd, 'MMMM Do YYYY Z').valueOf() &&
          moment(item.date_created, 'DD MM YYYY Z').valueOf() <=
            moment(dropTimeStart, 'MMMM Do YYYY Z').valueOf(),
      )
      setDataFilter(data)
    }
  }

  return (
    <div>
      <DataTable
        className="dataTable-custom"
        data={firstData ? dataFilter : listEnrolled}
        columns={columsEnrolment}
        noHeader
        pagination
        subHeader
        selectableRows
        selectableRowsComponent={BootstrapCheckbox}
        selectableRowsComponentProps={{
          color: 'primary',
          icon: <Check className="vx-icon" size={12} />,
          label: '',
          size: 'sm',
        }}
        subHeaderComponent={
          <div className="w-100   mx-auto">
            <Row className="justify-content-center">
              <Col lg="5">
                <Select
                  theme={selectThemeColors}
                  className="react-select"
                  classNamePrefix="select"
                  defaultValue={colourOptions[0]}
                  options={colourOptions}
                  isClearable={false}
                />
              </Col>
              <Col lg="3">
                <UncontrolledButtonDropdown className="w-100">
                  <DropdownToggle
                    outline
                    color="primary"
                    style={{width: 'auto', textAlign: 'left'}}
                  >
                    {dropTimeEnd} {dropTimeEnd ? '-' : ''} {dropTimeStart}
                    <ChevronDown size={15} />
                  </DropdownToggle>
                  <DropdownMenu className="w-100" style={{cursor: 'pointer'}}>
                    <DropdownItem
                      className="w-100"
                      style={{outline: 'none'}}
                      onClick={() => {
                        hanldeDropdown('all')
                      }}
                    >
                      All
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      style={{outline: 'none'}}
                      onClick={() => {
                        hanldeDropdown('today')
                      }}
                    >
                      Today
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      style={{outline: 'none'}}
                      onClick={() => {
                        hanldeDropdown('yesterday')
                      }}
                    >
                      Yesterday
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      style={{outline: 'none'}}
                      onClick={() => {
                        hanldeDropdown('last7days')
                      }}
                    >
                      Last 7 Days
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      style={{outline: 'none'}}
                      onClick={() => {
                        hanldeDropdown('last30days')
                      }}
                    >
                      Last 30 Days
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      style={{outline: 'none'}}
                      onClick={() => {
                        hanldeDropdown('thismonth')
                      }}
                    >
                      This Month
                    </DropdownItem>
                    <DropdownItem
                      className="w-100"
                      style={{outline: 'none'}}
                      onClick={() => {
                        hanldeDropdown('lastmonth')
                      }}
                    >
                      Last Month
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </Col>
              <Col lg="1">
                <Button.Ripple
                  color="primary"
                  className="ml-0 ml-md-2 mt-1 mt-md-0"
                  onClick={handleFilter}
                >
                  Filter
                </Button.Ripple>
              </Col>
            </Row>
          </div>
        }
      />
      <SweetAlert
        success
        title="Xóa thành công"
        show={successAlert}
        onConfirm={() => hanldeDeleteEnrol(false)}
      >
        <p className="sweet-alert-text">You clicked the button!</p>
      </SweetAlert>

      {/* modal info checkout */}
      <div className="theme-modal-primary">
        <Modal
          isOpen={modal}
          toggle={toggleModal}
          className="modal-dialog-centered modal-lg"
        >
          <ModalHeader toggle={toggleModal}>Billing Information</ModalHeader>
          <ModalBody>
            Một số thông tin của thanh toán sẽ được hiển thị ở đây
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleModal} outline>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default EnrolmentCourseDashboard
