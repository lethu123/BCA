import React, {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Badge,
  Input,
  Spinner,
  Button,
  // CustomInput,
} from 'reactstrap'
import {Check, Search} from 'react-feather'
import moment from 'moment'
import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'
import SweetAlert from 'react-bootstrap-sweetalert'
// import {selectDetailCourse} from 'redux/reselects/hschools/course.reselect'
import ModalInviteInstructor from './ModalInviteInstructor'
import Checkbox from 'components/checkbox/CheckboxesVuexy'

// Action
// import {
//   getListRequestApplyForTeaching,
//   updateRequestApplyForTeaching,
// } from 'redux/actions/hschools/courseAction'
import {useHistory} from 'react-router'

const selectListInstructor = createSelector(
  state => state.hSchool,
  course => course.listInstructors,
)

const InstructorsRequest = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  // const course2 = useSelector(state => selectDetailCourse(state))
  const selectListRequestApplyForTeachings = createSelector(
    state => state.hSchool,
    course => course.listRequestApplyForTeachings,
  )
  const listRequestApplyTeaching = useSelector(
    selectListRequestApplyForTeachings,
  )
  const listInstructors = useSelector(selectListInstructor)
  const [dataInstructorTable, setDataInstructorTable] = useState([])

  const [confirmApplyTeaching, setConfirmApplyTeaching] = useState(false)
  const [course, setCourse] = useState(null)
  const [idSelect, setIdSelect] = useState(null)
  const [type, setType] = useState(null)

  // useEffect(() => {
  //   dispatch(getListRequestApplyForTeaching(true, true))
  // }, [dispatch])

  // useEffect(() => {
  //   if (
  //     course2 &&
  //     listInstructors.length > 0 &&
  //     listRequestApplyTeaching.length > 0
  //   ) {
  //     setDataInstructorTable(
  //       listInstructors.filter(
  //         instructor =>
  //           !listRequestApplyTeaching
  //             .filter(e => e.course_info.id === course2.id)
  //             .map(item => item[`${item.type}_user_info`].id)
  //             .includes(instructor.id),
  //       ),
  //     )
  //   }
  // }, [course2, listInstructors, listRequestApplyTeaching])

  const handleActionApplyForTeaching = (row, type) => {
    setCourse(row.course_info)
    setIdSelect(row.id)
    setType(type)
    setConfirmApplyTeaching(true)
  }
  const [filteredData, setFilteredData] = useState([])
  const [value, setValue] = useState('')

  let count = 0
  const list = {
    columnsApplyTeaching: [
      {
        name: 'STT',
        selector: 'id',
        sortable: true,
        width: '150px',
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{++count}</p>
        ),
      },
      {
        name: 'Name',
        selector: 'name',
        minWidth: '300px',
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-img ml-xl-0 ml-2">
              <img
                className="img-fluid rounded-circle"
                height="36"
                width="36"
                src={row[`${row.type}_user_info`].avatar}
                alt={row[`${row.type}_user_info`].username}
              />
            </div>
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row[`${row.type}_user_info`].username}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row[`${row.type}_user_info`].username}
              </span>
              <small title={row[`${row.type}_user_info`].email}>
                {row[`${row.type}_user_info`].email}
              </small>
            </div>
          </div>
        ),
      },

      {
        name: 'Date Created',
        selector: 'date',
        minWidth: '220px',
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">
            {moment(row.date_created).format('LLL')}
          </p>
        ),
      },
      {
        name: 'Type',
        selector: 'type',
        cell: row => (
          <Badge
            color={row.type === 'apply' ? 'primary' : 'warning'}
            pill
            className="badge-glow"
          >
            {row.type}
          </Badge>
        ),
      },
      {
        name: 'Status',
        selector: 'status',
        cell: row => (
          <Badge
            color={!row.is_accepted ? 'light-danger' : 'light-success'}
            pill
          >
            {row.is_accepted ? 'Approved' : 'Pending'}
          </Badge>
        ),
      },
      {
        name: 'Actions',
        selector: '',
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
                <div>
                  <DropdownItem
                    style={{
                      display:
                        row.is_accepted || row.type === 'invite'
                          ? 'none'
                          : 'block',
                    }}
                    onClick={() =>
                      handleActionApplyForTeaching(row, 'approved')
                    }
                  >
                    <Check className="mr-50" size={16} /> Approve
                  </DropdownItem>
                </div>
                <DropdownItem
                  className="cursor-pointer"
                  onClick={() =>
                    history.push(
                      `/hschool/instructor/${row.apply_user_info.id}/detail`,
                    )
                  }
                >
                  <i className="uil uil-exit mr-50"></i>View detail
                </DropdownItem>
                {!row.is_accepted && row.type === 'apply' && (
                  <>
                    <DropdownItem divider />
                    <DropdownItem
                      className="text-danger"
                      onClick={() =>
                        handleActionApplyForTeaching(row, 'delete')
                      }
                    >
                      <i className="uil uil-trash mr-50"></i>Delete
                    </DropdownItem>
                  </>
                )}
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          )
        },
      },
    ],
    dataBecomeATeacher: [
      {
        id: 1,
        first_name: 'Alyss',
        last_name: 'Lillecrop',
        email: 'alillecrop0@twitpic.com',
        gender: 'Female',
        is_accepted: true,
      },
      {
        id: 2,
        first_name: 'Shep',
        last_name: 'Pentlow',
        email: 'spentlow1@home.pl',
        gender: 'Male',
      },
      {
        id: 3,
        first_name: 'Gasper',
        last_name: 'Morley',
        email: 'gmorley2@chronoengine.com',
        gender: 'Male',
      },
      {
        id: 4,
        first_name: 'Phaedra',
        last_name: 'Jerrard',
        email: 'pjerrard3@blogs.com',
        gender: 'Female',
      },
      {
        id: 5,
        first_name: 'Conn',
        last_name: 'Plose',
        email: 'cplose4@geocities.com',
        gender: 'Male',
      },
      {
        id: 6,
        first_name: 'Tootsie',
        last_name: 'Brandsma',
        email: 'tbrandsma5@theatlantic.com',
        gender: 'Female',
      },
      {
        id: 7,
        first_name: 'Sibley',
        last_name: 'Bum',
        email: 'sbum6@sourceforge.net',
        gender: 'Female',
      },
      {
        id: 8,
        first_name: 'Kristoffer',
        last_name: 'Thew',
        email: 'kthew7@amazon.com',
        gender: 'Male',
      },
      {
        id: 9,
        first_name: 'Fay',
        last_name: 'Hasard',
        email: 'fhasard8@java.com',
        gender: 'Female',
      },
    ],
  }
  const CustomHeader = props => {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        <div>
          <Button.Ripple
            className="mr-1 mb-1 bg-gradient-success"
            color="none"
            onClick={() => setOpenModal(true)}
          >
            Invite Instructor
          </Button.Ripple>
        </div>
        <div className="position-relative has-icon-left mb-1">
          <Input value={props.value} onChange={e => props.handleFilter(e)} />
          <div className="form-control-position">
            <Search size="15" />
          </div>
        </div>
      </div>
    )
  }

  const handleFilter = e => {
    e.preventDefault()
    let _value = e.target.value
    // let data = listRequestApplyTeaching.filter(
    //   e => e.course_info.id === course2.id,
    // )
    let _filteredData = filteredData

    // if (_value.length) {
    //   _filteredData = data.filter(item => {
    //     let includesCondition =
    //       item.apply_user_info.username
    //         .toLowerCase()
    //         .includes(_value.toLowerCase()) ||
    //       item.apply_user_info.email
    //         .toLowerCase()
    //         .includes(_value.toLowerCase())

    //     if (includesCondition) {
    //       return includesCondition
    //     } else return null
    //   })
    //   setFilteredData(_filteredData)
    // }
    setValue(_value)
  }
  // if (!course2) return <Spinner />

  return (
    <div>
      <DataTable
        className="dataTable-custom"
        // data={
        //   value.length
        //     ? filteredData
        //     : listRequestApplyTeaching.filter(
        //         e => e.course_info.id === course2.id,
        //       )
        // }
        data={[]}
        columns={list.columnsApplyTeaching}
        noHeader
        pagination
        selectableRows
        selectableRowsHighlight={true}
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={{
          color: 'primary',
          icon: <Check className="vx-icon" size={12} />,
          label: '',
          size: 'sm',
        }}
        subHeader
        subHeaderComponent={
          <CustomHeader value={value} handleFilter={handleFilter} />
        }
      />

      {course && (
        <SweetAlert
          title={`Are you sure ${type} apply for teaching ${course.title} ?`}
          show={confirmApplyTeaching}
          showCancel
          reverseButtons
          custom
          customIcon={course.avatar}
          cancelBtnBsStyle="danger"
          confirmBtnText={`Yes, ${type} apply`}
          cancelBtnText="Cancel"
          onConfirm={() => {
            // dispatch(updateRequestApplyForTeaching(idSelect, type))

            setConfirmApplyTeaching(false)
          }}
          onCancel={() => setConfirmApplyTeaching(false)}
        >
          You won't be able to revert this!
        </SweetAlert>
      )}
      <ModalInviteInstructor
        open={openModal}
        toggle={() => setOpenModal(false)}
        instructors={dataInstructorTable}
      />
    </div>
  )
}

export default InstructorsRequest
