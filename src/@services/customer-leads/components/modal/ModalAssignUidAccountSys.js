import React, {useCallback} from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from 'reactstrap'

// *** UI form
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import SelectField from 'components/form/SelectField'

// *** Query
import {UserQuery} from '@services/user'

// *** Mutation
import {CustomerLeadsMutation} from '@services/customer-leads'
import {useHistory} from 'react-router-dom'
import SmallSpinner from 'components/small-spinner'

import defaultAva from 'assets/images/avatars/avatar-blank.png'
import Avatar from '@core/components/avatar'

const listColor = ['secondary', 'danger', 'info', 'warning', 'primary']

const formSchema = Yup.object().shape({
  accounts: Yup.array().required('Tài khoản không được bỏ trống'),
})

const ModalAssignUidAccountSys = ({open, toggle, uids}) => {
  const history = useHistory()
  const {data: userSystem} = UserQuery.useGetListAllUserSys()
  const {mutate: handleAssign, isLoading} =
    CustomerLeadsMutation.useAssignUidAccountSystem()

  const renderAccountOptions = useCallback(() => {
    return userSystem && userSystem.data && userSystem.data.length > 0
      ? userSystem.data.map(acc => ({
          value: acc.user_id,
          label: acc.user_name,
          avatar: acc.avatar || defaultAva,
          email: acc.email,
        }))
      : []
  }, [userSystem])

  const CustomOption = ({data, innerRef, innerProps}) => {
    return (
      <div
        className="d-flex align-items-center m-2 cursor-pointer"
        ref={innerRef}
        {...innerProps}
      >
        <Avatar
          className="mr-2"
          img={data.avatar}
          imgHeight="50"
          imgWidth="50"
          imgClassName="rounded"
        />

        <div>
          <p
            className="text-dark-75 text-hover-primary mb-0 font-size-lg"
            onClick={() => history.push(`/user/${data.value}/profile/feed`)}
          >
            {data.label}
          </p>
          <span className="text-muted font-weight-bold d-block">
            {data.email}
          </span>
        </div>
      </div>
    )
  }

  let uidAssigned = uids.filter(u => u.uid_care)
  let uidUnAssigned = uids.filter(u => !u.uid_care)

  return (
    <Modal
      isOpen={open}
      toggle={toggle}
      className={'modal-dialog-centered modal-lg'}
    >
      <Formik
        initialValues={{
          accounts: [],
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          const accounts = values.accounts.map(account => account.value)
          const users = uidUnAssigned.map(user => user.prf_id)

          handleAssign({
            users,
            accounts,
          })
        }}
      >
        {({errors, touched, setFieldValue, isValid, dirty}) => (
          <Form>
            <ModalHeader toggle={toggle}>
              Chia dữ liệu cho tài khoản trong hệ thống
            </ModalHeader>
            <ModalBody>
              {uidAssigned.length > 0 && (
                <div className="mb-6">
                  <p className="mb-2 font-weight-bolder ">
                    Uid đã chia ({uidAssigned.length}):
                  </p>
                  <div style={{maxHeight: '150px', overflow: 'auto'}}>
                    {uidAssigned.map(uid => (
                      <Badge
                        key={uid.prf_id}
                        color={`light-secondary`}
                        className="mr-1 mb-1 cursor-pointer text-hover-primary"
                        onClick={() =>
                          history.push(
                            `/admin/potential-customers/user/${uid.prf_id}`,
                          )
                        }
                      >
                        {uid.prf_name || 'updating'}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              <div className="mb-6">
                <p className="mb-2 font-weight-bolder ">
                  Uid chưa chia ({uidUnAssigned.length}):
                </p>
                <div style={{maxHeight: '150px', overflow: 'auto'}}>
                  {uidUnAssigned.length > 0 &&
                    uidUnAssigned.map((item, idx) => (
                      <Badge
                        key={item.prf_id}
                        color={`light-${listColor[Math.abs(idx % 5)]}`}
                        className="mr-1 mb-1 cursor-pointer"
                        onClick={() =>
                          history.push(
                            `/admin/potential-customers/user/${item.prf_id}`,
                          )
                        }
                      >
                        {item.prf_name || 'updating'}
                      </Badge>
                    ))}
                </div>
              </div>
              <SelectField
                name="accounts"
                label="Danh sách tài khoản hệ thống"
                isSearchable
                isMulti
                isRequired
                options={renderAccountOptions()}
                components={{Option: CustomOption}}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={toggle}
                type="submit"
                disabled={!isValid || !dirty || uids.length === 0}
              >
                <SmallSpinner isLoading={isLoading} text="Lưu" />
              </Button>
              <Button color="danger" outline onClick={toggle}>
                Đóng
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default ModalAssignUidAccountSys
