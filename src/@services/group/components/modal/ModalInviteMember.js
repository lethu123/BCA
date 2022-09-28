import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {X} from 'react-feather'

// *** query
import {UserQuery} from '@services/user'
import {GroupMutation} from '@services/group'
// *** context
// import TextareaField from 'components/form/TextareaField'
import SelectField from 'components/form/SelectField'
import {getUserData} from 'utility/Utils'
import {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import SmallSpinner from 'components/small-spinner'

const formSchema = Yup.object().shape({
  // description: Yup.string().required('Yêu cầu nhập nội dung lời mời!'),
  members: Yup.array().required('Yêu cầu chọn thành viên!'),
})

const ModalInviteMember = ({modal, toggleModal}) => {
  // *** Routing
  const {id} = useParams()

  // ** query
  const {data: users} = UserQuery.useGetListAllUserSys ()

  // *** mutation
  const {
    mutate: inviteJoinGroup,
    isSuccess,
    isLoading,
  } = GroupMutation.useInviteJoinGroup()

  // *** State
  const [members, setMembers] = useState([])

  useEffect(() => {
    if (isSuccess) {
      toast.success('Gửi mời thành công')
      toggleModal()
    }
  }, [isSuccess])

  const userProfile = getUserData()

  const renderUserOptions = useCallback(() => {
    return users && users.data && users.data.length > 0
      ? users.data
          .filter(u => u.user_id !== userProfile.uid)
          .map(acc => ({
            value: acc.user_id,
            label: acc.user_name,
            avatar: acc.avatar,
            email: acc.email,
          }))
      : []
  }, [userProfile.uid, users])

  const UsersOptions = ({data, innerRef, innerProps}) => {
    return (
      <div
        className="d-flex align-items-center m-2 cursor-pointer"
        ref={innerRef}
        {...innerProps}
      >
        <div className="symbol symbol-50 symbol-light mr-4">
          <span className="symbol-label">
            <img src={data.avatar} className="h-75 align-self-end" alt="" />
          </span>
        </div>
        <div>
          <p className="text-dark-75 text-hover-primary mb-1 font-size-lg">
            {data.label}
          </p>
          <span className="text-muted font-weight-bold d-block">
            {data.email}
          </span>
        </div>
      </div>
    )
  }

  //** Custom close btn
  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={toggleModal} />
  )

  return (
    <Modal
      // scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered"
    >
      <Formik
        initialValues={{
          // description: '',
          members: [],
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          inviteJoinGroup({
            data: {owner_id: userProfile?.uid, list_user_ids: members},
            group_id: id,
          })
        }}
      >
        {({setFieldValue}) => (
          <Form>
            <ModalHeader toggle={toggleModal} close={CloseBtn}>
              Mời thành viên
            </ModalHeader>
            <ModalBody>
              {/* <PerfectScrollbar> */}
              <SelectField
                name="members"
                label="Thành viên"
                isSearchable
                isMulti
                options={renderUserOptions()}
                components={{
                  Option: UsersOptions,
                }}
                isRequired
                onChange={(name, value) =>
                  setMembers(value.map(member => member.value))
                }
              />

              {/* <TextareaField
                name="description"
                label="Nội dung lời mời"
                minRows={2}
                isRequired
                // onChange={(name, value) => {
                //   setFieldValue(name, value)
                // }}
              /> */}
              <ModalFooter>
                <Button.Ripple
                  color="primary"
                  disabled={members.length === 0}
                  type="submit"
                >
                  <SmallSpinner isLoading={isLoading} text="Gửi lời mời" />
                </Button.Ripple>
                <Button
                  color="primary"
                  type="button"
                  onClick={toggleModal}
                  outline
                >
                  Hủy
                </Button>
              </ModalFooter>
              {/* </PerfectScrollbar> */}
            </ModalBody>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default ModalInviteMember
