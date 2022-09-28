import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {X} from 'react-feather'

// *** query
import {UserQuery} from '@services/user'
import {EventMutation} from '@services/event'
// *** context
// import TextareaField from 'components/form/TextareaField'
import SelectField from 'components/form/SelectField'
import {getUserData} from 'utility/Utils'
import {useCallback, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import SmallSpinner from 'components/small-spinner'

// assets
import defaultAva from 'assets/images/avatars/avatar-blank.png'
import Avatar from '@core/components/avatar'

const formSchema = Yup.object().shape({
  // description: Yup.string().required('Yêu cầu nhập nội dung lời mời!'),
  members: Yup.array().required('Yêu cầu chọn thành viên!'),
})

const ModalInviteJoinEvent = ({modal, toggleModal}) => {
  // *** Routing
  const {id} = useParams()

  // ** query
  const {data: users} = UserQuery.useGetListAllUserSys()

  // *** mutation
  const {
    mutate: inviteJoinEvent,
    isSuccess,
    isLoading,
  } = EventMutation.useInviteJoinEvent()

  useEffect(() => {
    if (isSuccess) {
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
        <div className="symbol symbol-50 symbol-light mr-2">
          <span className="symbol-label">
            <Avatar
              className="pull-up"
              img={data.avatar || defaultAva}
              alt=""
              onError={e => {
                e.target.onerror = null
                e.target.src = defaultAva
              }}
              imgClassName="rounded"
              imgHeight="50"
              imgWidth="50"
            />
          </span>
        </div>
        <div>
          <p className="text-dark-75 text-hover-primary mb-0 font-size-lg">
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
          members: [],
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          console.log('value', values)
          inviteJoinEvent({
            inviter_id: userProfile?.uid,
            uid: values.members.map(it => it.value),
            event_id: id,
          })
        }}
      >
        {({values}) => (
          <Form>
            <ModalHeader toggle={toggleModal} close={CloseBtn}>
              Mời người tham gia
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
                // onChange={(name, value) =>
                //   setMembers(value.map(member => member.value))
                // }
              />

              <ModalFooter>
                <Button.Ripple
                  color="primary"
                  disabled={values.members.length === 0}
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

export default ModalInviteJoinEvent
