import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import {
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Spinner,
} from 'reactstrap'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {DragDrop} from '@uppy/react'
// import {
//   createCourseSubCategory,
//   updateCourseSubCategory,
// } from 'redux/actions/hschools/hSchoolManagementAction'
import {useDispatch} from 'react-redux'
import {selectThemeColors} from 'utility/Utils'
import {Plus} from 'react-feather'

const CatrgoriesCourseDashboardModalSub = ({
  modalStateSub,
  toggleModalSub,
  editSub,
  subCategory,
  listArea,
}) => {
  const dispatch = useDispatch()
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Name is required !'),
  })
  const [loading, setLoading] = useState(true)
  const [initialState, setInitialState] = useState({
    name: '',
  })
  const [img, setImg] = useState('')
  const [skill, setSkill] = useState([])
  const [valueSelect, setValueSelect] = useState('')
  const [option, setOption] = useState([])
  useEffect(() => {
    if (listArea && listArea.length > 0) {
      setOption(listArea)
    }
  }, [listArea])
  useEffect(() => {
    if (editSub) {
      setInitialState({
        name: editSub.name,
      })
      setImg(editSub.thumb_url)
      setSkill(
        editSub.area_info.map(item => ({
          id: item.id,
          label: item.name,
          value: item.name,
        })),
      )
    } else {
      setInitialState({
        name: '',
      })
      setImg('')
      setSkill([])
    }
  }, [editSub])

  const uppy = new Uppy({
    meta: {type: 'avatar'},
    restrictions: {maxNumberOfFiles: 1},
    autoProceed: true,
  })
  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setImg(file)
  })

  const handleInputChange = inputValue => {
    setValueSelect(inputValue)
  }

  return (
    <Modal
      isOpen={modalStateSub}
      toggle={toggleModalSub}
      className="modal-lg modal-dialog-centered"
    >
      <ModalHeader toggle={toggleModalSub}>
        {editSub ? 'EDIT SUB CATEGORY' : 'ADD SUB CATEGORY'}
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialState}
          validationSchema={formSchema}
          enableReinitialize
          onSubmit={values => {
            setLoading(false)
            const obj = {
              category: subCategory,
              name: values.name,
              thumb: img.data ? img.data : img,
              area: JSON.stringify(
                skill.map(item => ({
                  id: item.id,
                  name: item.value,
                })),
              ),
            }
            let formData = new FormData()
            Object.keys(obj).map((e, i) => formData.append(e, obj[e]))
            if (!editSub) {
              // dispatch(createCourseSubCategory(formData)).then(res => {
              //   setLoading(true)
              //   toggleModalSub()
              //   setInitialState({
              //     name: '',
              //   })
              //   setImg('')
              //   setSkill([])
              // })
            } else {
              // dispatch(updateCourseSubCategory(editSub.id, formData)).then(
              //   res => {
              //     setLoading(true)
              //     toggleModalSub()
              //   },
              // )
            }
          }}
        >
          {({values, setFieldValue, errors, touched, isValid}) => (
            <Form className="ml-3">
              <FormGroup>
                <Label for="invalidState">Name Sub Category</Label>
                <Field
                  placeholder="Input Sub Category Name ..."
                  className="form-control bg-white"
                  name="name"
                  type="text"
                  id="name"
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <div className="text-danger mt-25">{errors.name}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label for="invalidState">Choose Skill</Label>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  isMulti
                  name="skill"
                  options={option || []}
                  className="react-select"
                  classNamePrefix="select"
                  onChange={option => {
                    setSkill(option)
                  }}
                  noOptionsMessage={() => (
                    <div>
                      <p
                        style={{
                          border: '1px solid #FF6700',
                          display: 'inline',
                          padding: '7px 3px',
                          borderRadius: 5,
                          cursor: 'pointer',
                          color: 'white',
                          background: '#FF6700',
                          fontSize: 10,
                        }}
                        onClick={() => {
                          setOption([
                            {
                              id: null,
                              label: valueSelect,
                              value: valueSelect,
                            },
                            ...option,
                          ])
                        }}
                      >
                        <Plus size={14} style={{marginBottom: 2}} /> Add New
                        Value
                      </p>
                    </div>
                  )}
                  onInputChange={handleInputChange}
                  value={skill}
                />
              </FormGroup>
              <FormGroup>
                <Label for="invalidState" className="mt-1">
                  Image Category
                </Label>
                <DragDrop uppy={uppy} />

                {img.preview ? (
                  <img className="rounded mt-2" src={img.preview} alt="" />
                ) : (
                  <img className="rounded mt-2" src={img} alt="" />
                )}
              </FormGroup>

              <div className="w-100 text-center text-md-right">
                <Button
                  type="submit"
                  color="primary"
                  disabled={!isValid || img === '' || skill.length === 0}
                >
                  {!loading ? (
                    <>
                      <Spinner color="white" size="sm" type="grow" />
                      <span className="ml-50">Loading</span>
                    </>
                  ) : (
                    <>
                      <span className="ml-50">Submit</span>
                    </>
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  )
}

export default CatrgoriesCourseDashboardModalSub
