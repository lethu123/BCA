// ** React Imports
import React, {useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import {ChevronDown, Plus, Trash} from 'react-feather'
import DataTable from 'react-data-table-component'
import {
  Button,
  Badge,
  Table,
  CustomInput,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
} from 'reactstrap'
import parse from 'html-react-parser'

// ** Custom Components
import Avatar from '@core/components/avatar'
import moment from 'moment'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'

// ** Action
// import {
//   deleteInviteLectureAction,
//   getListInviteLectureAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'
import {useDispatch} from 'react-redux'

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
          <td>Name Course</td>
          <td>
            <div>{data.course_info.title}</div>
          </td>
        </tr>
        <tr>
          <td>Type Course</td>
          <td>
            <div>
              {data.course_info &&
                data.course_info.course_category_id_info &&
                data.course_info.course_category_id_info.name}
            </div>
          </td>
        </tr>
        <tr>
          <td>Level</td>
          <td>
            <div>{data.course_info.level}</div>
          </td>
        </tr>
        <tr>
          <td>Skill Requirment Of Lecture</td>
          <td>
            <div>
              {data.course_info.skills_accquired_info.map((item, index) => (
                <Badge color="light-warning" key={index}>
                  {item.name}
                </Badge>
              ))}
            </div>
          </td>
        </tr>
        <tr>
          <td>About</td>
          <td>
            <div>{parse(data.course_info.about)}</div>
          </td>
        </tr>
        <tr>
          <td>Career Orientation</td>
          <td>
            <div>{parse(data.course_info.career_orientation)}</div>
          </td>
        </tr>
        {data.course_info.benefits_info.length > 0 && (
          <tr>
            <td>Benefits</td>
            <td>
              <div>
                {data.course_info.benefits_info.map((item, index) => (
                  <p key={index}>{item.content}</p>
                ))}
              </div>
            </td>
          </tr>
        )}

        <tr>
          <td>Onlines hours</td>
          <td>
            <div>{data.course_info.online_hours}</div>
          </td>
        </tr>
        <tr>
          <td>Creator</td>
          <td>
            <p>{data.course_info.creator_info.email}</p>
          </td>
        </tr>
        <tr>
          <td>Price</td>
          <td>
            <div>
              <Badge color="warning" className="badge-glow">
                {data.course_info.price !== 0
                  ? `$ ${data.course_info.price}`
                  : 'Free'}
              </Badge>
            </div>
          </td>
        </tr>
        <tr>
          <td>Date Created</td>
          <td>
            <p>{moment(data.course_info.date_created).format('YYYY-MM-DD')}</p>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

const MySwal = withReactContent(Swal)
const InstructorInviteForTeaching = ({listInviteLecture, numberPage}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [basicModal, setBasicModal] = useState(false)

  // Columns
  const columns = React.useMemo(
    () => [
      {
        name: 'Info Lecture',
        selector: 'full_name',
        sortable: true,
        minWidth: '270px',
        maxWidth: '350px',
        cell: row => (
          <div className="py-1">
            <div className="d-flex align-items-center  ">
              <Avatar
                size="md"
                img={
                  row.to_user_info
                    ? row.to_user_info.picture
                    : require(`assets/images/portrait/small/avatar-s-${row.avatar}`)
                        .default
                }
              />
              <div className="user-info text-truncate ml-1">
                <span
                  className="d-block font-weight-bold text-truncate text-primary"
                  onClick={() =>
                    history.push(`/user/${row.to_user_info.url}/profile/feed`)
                  }
                >
                  {row.to_user_info.username}
                </span>
                <small>{row.to_user_info.email}</small>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: 'Course',
        selector: 'full_name',
        sortable: true,
        minWidth: '500px',
        cell: row => (
          <div className="d-flex align-items-center">
            <img
              src={row.course_info.thumb_url}
              alt="images"
              style={{width: 90, height: 50, borderRadius: 5, marginRight: 15}}
            />
            <p
              style={{maxWidth: 360}}
              className="text-truncate text-primary"
              onClick={() =>
                history.push(`/hschool/courses/detail/${row.course_info.slug}`)
              }
            >
              {row.course_info && row.course_info.title}
            </p>
          </div>
        ),
      },
      {
        name: 'Status',
        sortable: true,
        minWidth: '150px',
        maxWidth: '160px',
        cell: row => (
          <CustomInput
            type="switch"
            id="is_public"
            name="is_public"
            checked={row.is_accepted}
            label={row.is_accepted && 'Accepted'}
          />
        ),
      },
      {
        name: 'Actions',
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
    ],
    [listInviteLecture],
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
        // dispatch(deleteInviteLectureAction(id))
      }
    })
  }

  // ** handle
  const toggleModal = () => setBasicModal(!basicModal)

  // ** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
    // dispatch(getListInviteLectureAction('COURSE', page.selected + 1, 7))
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

  const formatOptionLabel = ({value, label, title, image}) => (
    <div style={{display: 'flex'}}>
      <div>
        <img
          src={image}
          alt=""
          className="img-fluid rounded-circle"
          style={{width: '45px', height: 45}}
        />
      </div>
      <div style={{marginLeft: '10px', color: '#ccc'}}>
        <h4 className="mb-0" style={{fontWeight: 'bold'}}>
          {label}
        </h4>
        <p className="mb-0" style={{color: '#626262'}}>
          {title}
        </p>
      </div>
    </div>
  )
  return (
    <div>
      <div>
        <Button.Ripple color="success" onClick={toggleModal} outline>
          <Plus /> Add New Request
        </Button.Ripple>
      </div>
      <div className="w-50 mx-auto">
        <Select
          // isMulti
          // isDisabled={true}
          className="React w-100"
          classNamePrefix="select"
          name="instructors"
          // value={defaultOption.instructors}
          formatOptionLabel={formatOptionLabel}
          options={[]}
          theme={selectThemeColors}
          // onChange={option => {
          //   setFieldValue(
          //     'instructors',
          //     option && option.length > 0 ? option.map(ele => ele.id) : [],
          //   )
          //   setDefaultOption({
          //     ...defaultOption,
          //     instructors: option,
          //   })
          // }}
        />
      </div>

      <DataTable
        noHeader
        pagination
        data={listInviteLecture}
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

      <div>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>
            New Request
          </ModalHeader>
          <ModalBody>
            <h5>Check First Paragraph</h5>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy
            dragée apple pie. Brownie carrot cake candy canes bonbon fruitcake
            topping halvah. Cake sweet roll cake cheesecake cookie chocolate
            cake liquorice.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setBasicModal(!basicModal)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* <ModalInviteInstructor
        open={openModal}
        toggle={toggleModal}
        instructors={listInstructors || []}
      /> */}
    </div>
  )
}

export default InstructorInviteForTeaching
