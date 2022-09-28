//react
import React, {useEffect, useState} from 'react'
//formik
import {Field, Formik, Form} from 'formik'
import * as Yup from 'yup'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {DragDrop} from '@uppy/react'
import ReactPlayer from 'react-player'
import EditorField from 'components/form/EditorField'

//3rd component
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  FormGroup,
  Label,
  Spinner,
} from 'reactstrap'
import Select from 'react-select'
import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'
// import {
//   createCourseHschoolAction,
//   getListCourseSubCategoryAction,
// } from 'redux/actions/hschools/hSchoolManagementAction'
import {selectThemeColors} from 'utility/Utils'

const selectSkills = createSelector(
  state => state.staticData,
  course =>
    course &&
    course.areas.map(ele => ({id: ele.id, value: ele.name, label: ele.name})),
)

const selectCourseFor = createSelector(
  state => state.staticData,
  course =>
    course &&
    course.positionRoles.map(ele => ({
      id: ele.id,
      value: ele.name,
      label: ele.name,
    })),
)

const selectListCategory = createSelector(
  state => state.hSchoolRebuild.management,
  category =>
    category &&
    category.listCategory.map(ele => ({
      id: ele.id,
      value: ele.name,
      label: ele.name,
    })),
)

const selecListCourseSubCategory = createSelector(
  state => state.hSchoolRebuild.management,
  subCategory =>
    subCategory &&
    subCategory.listCourseSubCategory.map(ele => ({
      id: ele.id,
      value: ele.name,
      label: ele.name,
    })),
)

const selectBenefit = createSelector(
  state => state.hSchoolRebuild.management,
  course =>
    course &&
    course.listBenefit.map(ele => ({
      id: ele.id,
      value: ele.content,
      label: ele.content,
    })),
)

const selectInstructor = createSelector(
  state => state.hSchoolRebuild.management,
  subCategory =>
    subCategory &&
    subCategory.listInstructor.map(ele => ({
      id: ele.id,
      value: ele.username,
      label: ele.username,
      title: ele.email,
      image: ele.avatar,
    })),
)

const levelOption = [
  {value: 'Beginer', id: 1, label: 'Beginer'},
  {value: 'Intermediate', id: 2, label: 'Intermediate'},
  {value: 'Advance', id: 3, label: 'Advance'},
]

const formSchema = Yup.object().shape({
  title_vi: Yup.string().required('Title vietnamese is equired!'),
  title_en: Yup.string().required('Title english is equired!'),
  online_hours: Yup.number().required('Online hour is equired!'),
  price: Yup.number().required('Price is equired!'),
  about_vi: Yup.string().required('About vietnamese is equired!'),
  about_en: Yup.string().required('About vietnamese is equired!'),
  career_orientation_vi: Yup.string().required('Career vietnamese is equired!'),
  career_orientation_en: Yup.string().required('Carrer vietnamese is equired!'),
  video_url_introduce: Yup.string().required('Video vietnamese is equired!'),
  category_name: Yup.string().required('Category vietnamese is equired!'),
  sub_category_id: Yup.number().required('Sub vietnamese is equired!'),
  skills_accquired: Yup.array().min(1, 'Skill vietnamese is equired!'),
  benefits: Yup.array().min(1, 'Benefit vietnamese is equired!'),
  course_for: Yup.array().min(1, 'Course for vietnamese is equired!'),
  level: Yup.string().required('Lever vietnamese is equired!'),
})
const ModalCreateCourse = ({centeredModal, setCenteredModal, editCourse}) => {
  const dispatch = useDispatch()

  //useSelect
  const skill = useSelector(selectSkills)
  const courseFors = useSelector(selectCourseFor)
  const listCategory = useSelector(selectListCategory)
  const listSub = useSelector(selecListCourseSubCategory)
  const listBenefits = useSelector(selectBenefit)
  const loading = useSelector(state => state.async.loading)
  const listInstructor = useSelector(selectInstructor)

  //useState
  const [defaultOption, setDefaultOption] = useState({
    category_name: '',
    sub_category_id: 0,
    skills_accquired: [],
    benefits: [],
    course_for: [],
    level: '',
    instructors: [],
  })
  const [listCourseFor, setListCourseFor] = useState(courseFors)
  const [listBenefit, setListBenefit] = useState([])

  const [initialState, setInitialState] = useState({
    title_vi: '',
    title_en: '',
    category_name: '',
    sub_category_id: 0,
    skills_accquired: [],
    level: '',
    online_hours: 0,
    about_vi: '',
    about_en: '',
    career_orientation_vi: '',
    career_orientation_en: '',
    benefits: [],
    course_for: [],
    video_url_introduce: '',
    price: 0,
    instructors: [],
    course_category_id: 0,
  })
  //useEffect
  useEffect(() => {
    if (listBenefits && listBenefits.length > 0) {
      setListBenefit(listBenefits)
    }
  }, [listBenefits])
  console.log(editCourse)
  useEffect(() => {
    if (editCourse) {
      setInitialState({
        title_vi: editCourse.title_vi,
        title_en: editCourse.title_en,
        category_name: editCourse.category,
        sub_category_id: 0,
        skills_accquired: [],
        level: '',
        online_hours: 0,
        about_vi: '',
        about_en: '',
        career_orientation_vi: '',
        career_orientation_en: '',
        benefits: [],
        course_for: [],
        video_url_introduce: '',
        price: 0,
        instructors: [],
        course_category_id: 0,
      })
    }
  }, [])

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
  const [img, setImg] = useState('')
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
      isOpen={centeredModal}
      toggle={() => setCenteredModal(!centeredModal)}
      className="modal-lg"
    >
      <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>
        {editCourse ? 'Edit' : 'Course'}
      </ModalHeader>
      <ModalBody>
        <div className="data-list-sidebar ">
          <Formik
            initialValues={initialState}
            validationSchema={formSchema}
            enableReinitialize={true}
            onSubmit={(values, {setSubmitting, setErrors}) => {
              let formData = new FormData()
              const data = {
                ...values,
                skills_accquired: JSON.stringify(values.skills_accquired),
                course_for: JSON.stringify(values.course_for),
                benefits: JSON.stringify(values.benefits),
                instructors: JSON.stringify(values.instructors),
                thumb: img.data,
              }
              console.log(data)
              let objKey = Object.keys(data)
              objKey.forEach(ele => formData.append(ele, data[ele]))
              // dispatch(createCourseHschoolAction(formData)).then(() =>
              //   setCenteredModal(!centeredModal),
              // )
            }}
          >
            {({
              values,
              isValid,
              isSubmitting,
              setFieldTouched,
              dirty,
              errors,
              touched,
              setFieldValue,
            }) => (
              <Form className="w-100">
                <FormGroup className="mb-1">
                  <Label for="data-name" className="text-bold-600">
                    Title(vietnamese)
                    <sup style={{color: '#FF0000'}}>*</sup>
                  </Label>
                  <Field
                    name="title_vi"
                    id="title_vi"
                    as="textarea"
                    className={`form-control ${
                      errors.title_vi && touched.title_vi && 'is-invalid'
                    }`}
                  />
                  {errors.title_vi && touched.title_vi ? (
                    <div className="text-danger mt-25">{errors.title_vi}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="mb-1">
                  <Label for="data-title_en" className="text-bold-600">
                    Title(english)
                    <sup style={{color: '#FF0000'}}>*</sup>
                  </Label>
                  <Field
                    name="title_en"
                    id="title_en"
                    as="textarea"
                    className={`form-control ${
                      errors.title_en && touched.title_en && 'is-invalid'
                    }`}
                  />
                  {errors.title_en && touched.title_en ? (
                    <div className="text-danger mt-25">{errors.title_en}</div>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <Label for="data-title_en" className="text-bold-600">
                    Instructor
                  </Label>
                  <Select
                    isMulti
                    // isDisabled={true}
                    className="React w-100"
                    classNamePrefix="select"
                    name="instructors"
                    value={defaultOption.instructors}
                    formatOptionLabel={formatOptionLabel}
                    options={listInstructor}
                    // theme={selectThemeColors}
                    onChange={option => {
                      setFieldValue(
                        'instructors',
                        option && option.length > 0
                          ? option.map(ele => ele.id)
                          : [],
                      )
                      setDefaultOption({
                        ...defaultOption,
                        instructors: option,
                      })
                    }}
                  />
                </FormGroup>

                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="data-category_name" className="text-bold-600">
                        Category
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Select
                        className="React"
                        classNamePrefix="select"
                        name="category_name"
                        theme={selectThemeColors}
                        value={defaultOption.category_name}
                        options={listCategory}
                        onChange={option => {
                          setFieldValue('category_name', option.value)
                          setFieldValue('course_category_id', option.id)
                          setDefaultOption({
                            ...defaultOption,
                            category_name: option,
                          })
                          // dispatch(getListCourseSubCategoryAction(option.id))
                        }}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup>
                      <Label
                        for="data-sub_category_id"
                        className="text-bold-600"
                      >
                        Sub Category
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Select
                        name="sub_category_id"
                        options={listSub}
                        value={defaultOption.sub_category_id}
                        theme={selectThemeColors}
                        className="React"
                        classNamePrefix="select"
                        onChange={option => {
                          setFieldValue('sub_category_id', option.id)
                          setDefaultOption({
                            ...defaultOption,
                            sub_category_id: option,
                          })
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label
                        for="data-skills_accquired"
                        className="text-bold-600"
                      >
                        Skills
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Select
                        isMulti
                        name="skills_accquired"
                        value={defaultOption.skills_accquired}
                        className="React"
                        theme={selectThemeColors}
                        classNamePrefix="select"
                        options={skill}
                        onChange={option => {
                          setFieldValue(
                            'skills_accquired',
                            option && option.length > 0
                              ? option.map(ele => ele.id)
                              : [],
                          )
                          setDefaultOption({
                            ...defaultOption,
                            skills_accquired: option,
                          })
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="data-course_for" className="text-bold-600">
                        Who Is This Course For?
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Select
                        isMulti
                        name="course_for"
                        value={defaultOption.course_for}
                        className="React"
                        theme={selectThemeColors}
                        classNamePrefix="select"
                        options={listCourseFor}
                        onChange={option => {
                          setFieldValue(
                            'course_for',
                            option && option.length > 0
                              ? option.map(ele => ({
                                  id: ele.id,
                                  name: ele.value,
                                }))
                              : [],
                          )
                          setDefaultOption({
                            ...defaultOption,
                            course_for: option,
                          })
                        }}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            setListCourseFor([
                              {
                                id: null,
                                label: e.target.value,
                                value: e.target.value,
                              },
                              ...listCourseFor,
                            ])
                          }
                        }}
                        noOptionsMessage={() => <div>Enter to add value</div>}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="data-level" className="text-bold-600">
                        Level
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Select
                        className="React"
                        classNamePrefix="select"
                        name="level"
                        theme={selectThemeColors}
                        options={levelOption}
                        value={defaultOption.level}
                        onChange={option => {
                          if (option) {
                            setFieldValue('level', option.value)
                          }
                          setDefaultOption({...defaultOption, level: option})
                        }}
                      />
                      {values.level.length === 0 && (
                        <div className="text-danger mt-25">
                          You must choose level*
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="data-online_hours" className="text-bold-600">
                        Online hours
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Field
                        name="online_hours"
                        id="online_hours"
                        type="number"
                        placeholder="3h"
                        className={`form-control ${
                          errors.online_hours &&
                          touched.online_hours &&
                          'is-invalid'
                        }`}
                      />
                      {errors.online_hours && touched.online_hours ? (
                        <div className="text-danger mt-25">
                          {errors.online_hours}
                        </div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="data-benefits" className="text-bold-600">
                        Benefits
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Select
                        className="React"
                        classNamePrefix="select"
                        name="benefits"
                        theme={selectThemeColors}
                        isMulti
                        options={listBenefit}
                        value={defaultOption.benefits}
                        onChange={option => {
                          setFieldValue(
                            'benefits',
                            option && option.length > 0
                              ? option.map(ele => ({
                                  id: ele.id,
                                  content: ele.value,
                                }))
                              : [],
                          )
                          setDefaultOption({...defaultOption, benefits: option})
                        }}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            setListBenefit([
                              {
                                id: null,
                                label: e.target.value,
                                value: e.target.value,
                              },
                              ...listBenefit,
                            ])
                          }
                        }}
                        noOptionsMessage={() => <div>Enter to add value</div>}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup className="mb-1">
                      <Label for="data-price" className="text-bold-600">
                        Price($usd)
                        <sup style={{color: '#FF0000'}}>*</sup>
                      </Label>
                      <Field
                        name="price"
                        id="price"
                        type="number"
                        className={`form-control ${
                          errors.price && touched.price && 'is-invalid'
                        }`}
                      />
                      {errors.price && touched.price ? (
                        <div className="text-danger mt-25">{errors.price}</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <Label
                    for="data-video_url_introduce"
                    className="text-bold-600"
                  >
                    Video url introduce
                    <sup style={{color: '#FF0000'}}>*</sup>
                  </Label>
                  <Field
                    name="video_url_introduce"
                    id="video_url_introduce"
                    type="text"
                    placeholder="https://youtube.com"
                    className={`form-control ${
                      errors.video_url_introduce &&
                      touched.video_url_introduce &&
                      'is-invalid'
                    }`}
                  />
                  {errors.video_url_introduce && touched.video_url_introduce ? (
                    <div className="text-danger mt-25">
                      {errors.video_url_introduce}
                    </div>
                  ) : null}
                </FormGroup>
                {values.video_url_introduce && (
                  <ReactPlayer
                    url={values.video_url_introduce}
                    className="react-player-video my-2 rounded overflow-hidden"
                    width="500px"
                    height="200px"
                    controls={true}
                  />
                )}

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

                <FormGroup>
                  <EditorField
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    value={values.about_vi}
                    label=" About(vietnamese)"
                    isRequired={true}
                    name="about_vi"
                  />
                </FormGroup>
                <FormGroup>
                  <EditorField
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    value={values.about_en}
                    label="About(english)"
                    isRequired={true}
                    name="about_en"
                  />
                </FormGroup>

                <FormGroup>
                  <EditorField
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    value={values.career_orientation_vi}
                    label=" Career orientation(vietnamese)"
                    isRequired={true}
                    name="career_orientation_vi"
                  />
                </FormGroup>

                <FormGroup>
                  <EditorField
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    value={values.career_orientation_en}
                    label=" Career orientation(english)"
                    isRequired={true}
                    name="career_orientation_en"
                  />
                </FormGroup>

                <FormGroup className="my-2 text-right">
                  <Button
                    color="primary"
                    type="submit"
                    className="mr-1"
                    disabled={!isValid || img === ''}
                  >
                    {loading ? (
                      <>
                        <Spinner color="white" size="sm" type="grow" />
                        <span className="ml-50">Loading</span>
                      </>
                    ) : editCourse ? (
                      'Update'
                    ) : (
                      'Create'
                    )}
                  </Button>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ModalCreateCourse
