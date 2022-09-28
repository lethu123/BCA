import React, {useState, useEffect} from 'react'
import {
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Spinner,
} from 'reactstrap'
import Select from 'react-select'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {DragDrop} from '@uppy/react'
import {useDispatch} from 'react-redux'
// import {
//   updateCourseCategoryAction,
//   createCourseCategoryAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'

const CategoriesCourseDashboardModal = ({
  modalStateCategory,
  toggleModalCategory,
  editCategory,
  listTypeCategory,
}) => {
  const dispatch = useDispatch()
  const formSchema = Yup.object().shape({
    type: Yup.number().min(1, 'Type is required !'),
    name: Yup.string().required('Name is required !'),
  })
  const [loading, setLoading] = useState(true)
  const [initialState, setInitialState] = useState({
    type: 0,
    name: '',
  })
  const [defaultValue, setDefaultValue] = useState(null)
  const [img, setImg] = useState('')

  useEffect(() => {
    if (editCategory) {
      setInitialState({
        type: editCategory && editCategory.type_info.id,
        name: editCategory && editCategory.name,
      })
      setDefaultValue(
        listTypeCategory.find(item => item.id === editCategory.type_info.id),
      )
      setImg(editCategory.thumb_url)
    } else {
      setInitialState({
        type: 0,
        name: '',
      })
      setDefaultValue(null)
      setImg('')
    }
  }, [editCategory])

  const uppy = new Uppy({
    meta: {type: 'avatar'},
    restrictions: {maxNumberOfFiles: 1},
    autoProceed: true,
  })
  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setImg(file)
  })

  return (
    <Modal
      isOpen={modalStateCategory}
      toggle={toggleModalCategory}
      className="modal-lg modal-dialog-centered"
    >
      <ModalHeader toggle={toggleModalCategory}>
        {' '}
        {editCategory ? 'Edit Category' : 'Add Category'}
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialState}
          validationSchema={formSchema}
          enableReinitialize
          onSubmit={values => {
            setLoading(false)
            const obj = {
              type: values.type,
              name: values.name,
              thumb: img.data ? img.data : img,
            }
            let formData = new FormData()
            Object.keys(obj).map((e, i) => formData.append(e, obj[e]))
            if (editCategory) {
              // dispatch(
              //   updateCourseCategoryAction(editCategory.id, formData),
              // ).then(res => {
              //   toggleModalCategory()
              //   setLoading(true)
              // })
            } else {
              // dispatch(createCourseCategoryAction(formData)).then(res => {
              //   toggleModalCategory()
              //   setLoading(true)
              //   setInitialState({
              //     type: 0,
              //     name: '',
              //   })
              //   setDefaultValue(null)
              //   setImg('')
              // })
            }
          }}
        >
          {({values, setFieldValue, errors, touched, isValid}) => (
            <Form className="ml-3">
              <FormGroup>
                <Label for="type">Type</Label>
                <Select
                  className="React"
                  classNamePrefix="select"
                  placeholder={'Select Type...'}
                  name="type"
                  value={
                    editCategory
                      ? {
                          id: editCategory.type_info.id,
                          label: editCategory.type_info.name,
                          value: editCategory.type_info.name,
                        }
                      : defaultValue
                  }
                  onChange={option => {
                    setFieldValue('type', option.id)
                    setDefaultValue(option)
                  }}
                  options={
                    editCategory
                      ? [
                          {
                            id: editCategory.type_info.id,
                            label: editCategory.type_info.name,
                            value: editCategory.type_info.name,
                          },
                          ...listTypeCategory,
                        ]
                      : listTypeCategory
                  }
                />
                {errors.type && touched.type ? (
                  <div className="text-danger mt-25">{errors.type}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <label htmlFor="name_category" className="font-weight-bold">
                  Category Name
                </label>
                <Field
                  placeholder="Input Category Name ..."
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
                  disabled={!isValid || img === ''}
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

export default CategoriesCourseDashboardModal
