import React, {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

import InstructorCard from 'pages/home/checkout/InstructorCard'
import InstructorTable from 'pages/home/checkout/InstructorTable'
// import {inviteInstructorApplyTeachingAction} from 'redux/actions/hschools/courseAction'
import {useDispatch, useSelector} from 'react-redux'

const ModalInviteInstructor = ({open, toggle, instructors}) => {
  const dispatch = useDispatch()
  const [instructorSelect, setInstructorSelect] = useState([])
  const course = useSelector(state => state.hSchool.detailCourse)
  const [idRemove, setIdRemove] = useState(null)
  return (
    <Modal
      isOpen={open}
      toggle={toggle}
      className="modal-dialog-centered modal-xl"
    >
      <ModalHeader toggle={toggle} className="bg-primary">
        Invite Instructor to apply for Teaching
      </ModalHeader>
      <ModalBody className="modal-dialog-centered flex-column">
        <h2 className="mb-1">List Instructor Apply for teaching:</h2>
        <div
          style={{
            width: '80%',
            marginLeft: '50%',
            transform: 'translateX(-30%)',
          }}
        >
          <InstructorCard
            instructors={instructorSelect}
            handleRemoveInstructor={(instructors, id) => {
              setInstructorSelect(instructors)
              setIdRemove(id)
            }}
          />
        </div>

        <div>
          {/* <InstructorTable
            instructors={instructors
              .filter(ele => !arrInstructor.includes(ele.id))
              .map(ele => ({
                ...ele,
                toggleSelected: false,
                status: ele.skills.length > 0 ? 'active' : 'inactive',
              }))}
            handleSelectInstructor={data => setInstructorSelect(data)}
            idRemove={idRemove}
          /> */}
          <InstructorTable
            instructors={instructors.map(ele => ({
              ...ele,
              toggleSelected: false,
              status: ele.skills.length > 0 ? 'active' : 'inactive',
            }))}
            handleSelectInstructor={data => setInstructorSelect(data)}
            idRemove={idRemove}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            instructorSelect.forEach(item => {
              // dispatch(
              //   inviteInstructorApplyTeachingAction({
              //     init_message: 'Mời bạn tham gia giảng dạy khóa học',
              //     to_user_id: item.id,
              //     is_accepted: false,
              //     course_id: course.id,
              //     profile_link: `${window.location.origin}/hschool/courses/detail/${course.slug}`,
              //   }),
              // )
            })
            toggle()
          }}
          disabled={!instructorSelect.length > 0}
        >
          Invite
        </Button>{' '}
      </ModalFooter>
    </Modal>
  )
}

export default ModalInviteInstructor
