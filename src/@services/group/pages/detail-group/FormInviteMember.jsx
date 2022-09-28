import React, {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Button, Card, CardBody} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
// *** query
import {UserQuery} from '@services/user'
import {GroupMutation} from '@services/group'
import {toast} from 'react-toastify'
import {getUserData} from 'utility/Utils'

import SmallSpinner from 'components/small-spinner'
import SelectField from 'components/form/SelectField'
import Avatar from '@core/components/avatar'

// assest
import avaDefaut from 'assets/images/avatars/avatar-blank.png'

const formSchema = Yup.object().shape({
  members: Yup.array().required('Yêu cầu chọn thành viên!'),
})
const FormInviteMember = () => {
  const {id} = useParams()

  // ** query
  const {data: users} = UserQuery.useGetListAllUserSys()

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
        <Avatar img={data.avatar || avaDefaut} size="md" />

        <div className="ml-1">
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

  return (
    <Card>
      <CardBody>
        <h6 className="mb-2">Mời thành viên</h6>
        <Formik
          initialValues={{
            members: [],
          }}
          validationSchema={formSchema}
          onSubmit={values => {
            inviteJoinGroup({
              data: {
                user_id: userProfile?.uid,
                list_user_ids: members.map(member => member.value),
              },
              group_id: id,
            })
            setMembers([])
          }}
        >
          {({setFieldValue}) => (
            <Form>
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
                value={members}
                onChange={(name, value) => setMembers(value)}
              />

              <div className="text-right">
                <Button.Ripple
                  color="primary"
                  disabled={members.length === 0}
                  type="submit"
                  block
                >
                  <SmallSpinner isLoading={isLoading} text="Gửi lời mời" />
                </Button.Ripple>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default FormInviteMember
