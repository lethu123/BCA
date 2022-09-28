import React, {useState} from 'react'
import {X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  CustomInput,
} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
//*** component */
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import AvatarUploadFieldV1 from 'components/form/AvatarUploadField.v1'
import Avatar from '@core/components/avatar'
import {useDispatch} from 'react-redux'
import {createChatGroupAction} from '../store/actions'

import {ChatMutation} from '@services/chat/hook'

const formSchema = Yup.object().shape({
  group_name: Yup.string().required('Yêu cầu nhập tên nhóm!'),
})

// const arr = ['Simon', 'Mike', 'Jake', 'Lara', 'Susi', 'Blake', 'James']
// const arr = [
//   {
//     avatar: 'https://upload.wikimedia.org/wikipedia/vi/a/a1/Man_Utd_FC_.svg',
//     user_id: '6156b45b9c69445eea07ab13',
//     user_name: 'honghuynhit',
//   },
//   {
//     avatar: 'https://upload.wikimedia.org/wikipedia/vi/a/a1/Man_Utd_FC_.svg',
//     user_id: '6156dfe69c69445eea07ab14',
//     user_name: 'tranle trongthuc',
//   },
// ]
// const groupNames = arr => {
//   const map = arr.reduce((acc, val) => {
//     let char = val.user_name.charAt(0).toUpperCase()
//     acc.user_name[char] = [].concat(val)
//     return acc
//   }, {})
//   console.log('map', map)
//   const res = Object.keys(map).map(el => ({
//     letter: el,
//     names: map[el],
//   }))
//   return res
// }

// console.log(groupNames(arr))

const ModalAddGroupChat = ({modal, toggleModal, chats}) => {
  const [openMember, setOpenMember] = useState(false)

  const userData = JSON.parse(localStorage.getItem('userData'))
  // *** MUTATION
  const {mutate} = ChatMutation.useCreateGroup()
  return (
    <Formik
      initialValues={{
        owner_id: userData.uid,
        group_name: '',
        description: '',
        group_avatar: '',
        members: [],
      }}
      validationSchema={formSchema}
      onSubmit={values => {
        console.log('value', values)
        const data = {
          ...values,
          group_avatar:
            'https://topshare.vn/wp-content/uploads/2020/08/H%C3%ACnh-%E1%BA%A3nh-avatar-%C4%91en-%C4%91%E1%BA%B9p-13.jpg',
        }
        mutate(data)
        toggleModal()
      }}
    >
      {({handleSubmit, values, setFieldValue}) => (
        <Form>
          <Modal
            isOpen={modal}
            toggle={toggleModal}
            className="modal-dialog-centered modal-lg"
            scrollable
          >
            <ModalHeader
              toggle={toggleModal}
              close={
                <div className="cursor-pointer" onClick={toggleModal}>
                  <X />
                </div>
              }
            >
              Tạo nhóm chat
            </ModalHeader>

            <PerfectScrollbar>
              <ModalBody>
                <Row>
                  <Col md="5">
                    <AvatarUploadFieldV1
                      name="group_avatar"
                      label="Avatar nhóm"
                      file={values['group_avatar']}
                      onChange={(name, value) => setFieldValue(name, value)}
                    />
                  </Col>
                  <Col md="7">
                    <TextField
                      type="text"
                      name="group_name"
                      label="Tên nhóm"
                      //   isRequired
                    />
                  </Col>
                </Row>

                <TextareaField
                  maxLength={200}
                  name="description"
                  label="Mô tả"
                  minRows={2}
                  placeholder="Mô tả nhóm"
                />

                <div>
                  <p>
                    Thành viên nhóm <sup style={{color: '#FF0000'}}>*</sup>
                  </p>
                  <Button.Ripple
                    color="light-secondary"
                    className="text-dark"
                    size="sm"
                    onClick={() => setOpenMember(true)}
                  >
                    Thêm thành viên
                  </Button.Ripple>

                  {openMember && (
                    <div>
                      <p className="text-right">Danh sách thành viên</p>
                      <div style={{height: 300}}>
                        <PerfectScrollbar>
                          <ListGroup>
                            {chats?.map(ele => (
                              <ListGroupItem key={ele.user_id}>
                                <div className="d-flex align-items-center justify-content-between cursor-pointer">
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-40 mr-3">
                                      <Avatar img={ele.avatar} />
                                    </div>

                                    <div className="d-flex flex-column">
                                      <Link
                                        to="#"
                                        className="text-dark-75 text-hover-primary font-weight-bold font-size-lg"
                                      >
                                        {ele.user_name}
                                      </Link>
                                    </div>
                                  </div>
                                  <CustomInput
                                    inline
                                    type="checkbox"
                                    id={ele.user_id}
                                    onChange={e => {
                                      if (
                                        e.target.checked &&
                                        !values.members.includes(ele.user_id)
                                      ) {
                                        setFieldValue('members', [
                                          ...values.members,
                                          ele.user_id,
                                        ])
                                      }
                                      if (
                                        !e.target.checked &&
                                        values.members.includes(ele.user_id)
                                      ) {
                                        setFieldValue(
                                          'members',
                                          values.members.filter(
                                            it => it !== ele.user_id,
                                          ),
                                        )
                                      }
                                    }}
                                  />
                                </div>
                              </ListGroupItem>
                            ))}
                          </ListGroup>
                        </PerfectScrollbar>
                      </div>
                    </div>
                  )}
                </div>
              </ModalBody>
            </PerfectScrollbar>
            <ModalFooter>
              <Button
                color="primary"
                type="submit"
                className="mr-2"
                onClick={handleSubmit}
              >
                Tạo nhóm
              </Button>{' '}
              <Button
                color="secondary"
                outline
                type="button"
                onClick={toggleModal}
              >
                Hủy
              </Button>{' '}
            </ModalFooter>
          </Modal>
        </Form>
      )}
    </Formik>
  )
}

export default ModalAddGroupChat
