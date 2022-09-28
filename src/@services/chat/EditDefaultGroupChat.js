import React from 'react'
import {
  Button,
  FormGroup,
  Input,
  Label,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextField from 'components/form/TextField'
import {Edit2} from 'react-feather'
import {useSelector} from 'react-redux'
import Select from 'react-select'

const editGroupInfoSchema = Yup.object().shape({
  roomName: Yup.string()
    .min(6, 'Must be longer than 6 characters')
    .max(50, 'Nice try, nobody has a first name that long')
    .required('Required'),
})

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? {...base, backgroundColor: 'gray'} : base
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? {...base, fontWeight: 'bold', color: 'white', paddingRight: 6}
      : base
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? {...base, display: 'none'} : base
  },
}

const EditDefaultGroupChat = ({
  closeEditModal,
  modalEditDefault,
  infoGroupChatSelect,
  listUserChatSuggest,
  handleEditInfoGroupChat,
}) => {
  const loading = useSelector(state => state.async.loading)

  const handleOptionsMembers = () => {
    let datas = []
    let idsMembers =
      infoGroupChatSelect.members.length > 0
        ? infoGroupChatSelect.members.map(ele => parseInt(ele.id))
        : []

    datas =
      listUserChatSuggest.length > 0 &&
      listUserChatSuggest
        .filter(ele => !idsMembers.includes(ele.id))
        .map(ele => ({
          id: ele.id,
          label: ele.name,
          value: ele.name,
        }))
    return datas
  }
  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  return (
    <React.Fragment>
      <Modal
        isOpen={modalEditDefault}
        toggle={closeEditModal}
        className={`modal-dialog-centered modal-lg`}
      >
        <Formik
          initialValues={{
            img: {preview: infoGroupChatSelect.avatar, file: null},
            roomName: infoGroupChatSelect.fullName,
            members:
              infoGroupChatSelect.members.length > 0
                ? infoGroupChatSelect.members.map((ele, idx) => ({
                    id: ele.user_id,
                    label: ele.username,
                    value: ele.username,
                    isFixed: true,
                  }))
                : [],
          }}
          validationSchema={editGroupInfoSchema}
          onSubmit={async (values, {setSubmitting, setErrors}) => {
            let currentMember = infoGroupChatSelect.members.map(ele =>
              parseInt(ele.user_id),
            )
            let newMember = values.members.filter(
              ele => !currentMember.includes(parseInt(ele.id)),
            )

            let data = {
              icon: values.img.file ? null : infoGroupChatSelect.photoURL,
              icon_base64: values.img.file
                ? await toBase64(values.img.file)
                : null,
              members: currentMember,
              name: values.roomName,
              active_members: infoGroupChatSelect.actives,
            }
            setSubmitting(false)
            handleEditInfoGroupChat(data, infoGroupChatSelect.id, newMember)
          }}
        >
          {({isSubmitting, isValid, dirty, errors, values, setFieldValue}) => (
            <Form>
              <ModalHeader toggle={closeEditModal} className="bg-primary">
                {`Edit ${infoGroupChatSelect.fullName} `}
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Media>
                    <Media className="mr-1" left href="#">
                      <Media
                        className="rounded-circle"
                        object
                        src={values.img.preview}
                        alt="User"
                        height="64"
                        width="64"
                      />
                    </Media>
                    <Media className="mt-25" body>
                      <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
                        <Button.Ripple
                          tag="label"
                          className="mr-50 cursor-pointer"
                          color="primary"
                          outline
                          onChange={e => {
                            setFieldValue('img', {
                              preview: URL.createObjectURL(e.target.files[0]),
                              file: e.target.files[0],
                            })
                          }}
                        >
                          Upload Icon
                          <Input
                            type="file"
                            name="file"
                            id="uploadImg"
                            accept="image/png, image/jpeg"
                            hidden
                          />
                        </Button.Ripple>
                        <Button.Ripple
                          color="flat-danger"
                          onClick={e =>
                            setFieldValue('img', {
                              preview: infoGroupChatSelect.photoURL,
                              file: null,
                            })
                          }
                        >
                          Remove
                        </Button.Ripple>
                      </div>
                      <p className="text-muted mt-50">
                        <small>
                          Allowed JPG, GIF or PNG. Max size of 800kB
                        </small>
                      </p>
                    </Media>
                  </Media>
                </FormGroup>
                <FormGroup>
                  <Label for="data-roomName" className="text-bold-600">
                    Room name<sup style={{color: '#FF0000'}}>*</sup>
                  </Label>
                  <TextField
                    name="roomName"
                    placeholder="Your room name"
                    type="text"
                    Icon={<Edit2 size={15} />}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="data-members" className="text-bold-600">
                    Add members
                    <sup style={{color: '#FF0000'}}>*</sup>
                  </Label>
                  <Select
                    className="React"
                    classNamePrefix="select"
                    name="members"
                    value={values.members}
                    options={handleOptionsMembers()}
                    onChange={option => {
                      setFieldValue('members', option)
                    }}
                    isMulti
                    styles={styles}
                    isClearable={values.members.some(v => !v.isFixed)}
                  />
                  {values.members.length === 0 && (
                    <div className="text-danger mt-25">
                      You must choose members*
                    </div>
                  )}
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <div className="d-flex justify-content-between">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                    style={
                      !isValid || !dirty || isSubmitting
                        ? {
                            cursor: 'not-allowed',
                          }
                        : {cursor: 'pointer'}
                    }
                  >
                    {loading ? (
                      <>
                        <Spinner color="white" size="sm" type="grow" />
                        <span className="ml-50">Loading</span>
                      </>
                    ) : (
                      'Update'
                    )}
                  </Button.Ripple>
                </div>
                <Button color="secondary" onClick={closeEditModal} outline>
                  Close
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </React.Fragment>
  )
}

export default EditDefaultGroupChat
