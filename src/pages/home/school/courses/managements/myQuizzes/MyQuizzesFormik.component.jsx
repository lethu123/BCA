import React, {useEffect, useState} from 'react'
import {FormGroup, Button, Label} from 'reactstrap'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import 'theme/assets/scss/plugins/extensions/editor.scss'
// import '@core/scss/react/libs/editor/editor.scss'

// import '@core/scss/react/libs/react-select/_react-select.scss'

import {useDispatch, useSelector} from 'react-redux'
import {createSelector} from 'reselect'
import {
  createTopicMyQuizzes,
  updateTopicMyQuizzes,
} from 'redux/actions/hschools/courseAction'
import MyQuizzesUploadFile from './MyQuizzesUploadFile.component'
// import {updateTopicMyQuizzes} from 'theme/redux/actions/hschools/courseAction'
// import {selectListCourseMyTeaching} from 'theme/redux/reselects/hschools/courses/course.reselect'

const moduleName = createSelector(
  state => state.hSchool,
  course => course.listCourse,
)
const listModuleTopic = createSelector(
  state => state.hSchool,
  course => course.listTopicMyQuizzes,
)

const editTopic = createSelector(
  state => state.hSchool,
  course => course.editTopicMyQuizzes,
)

const MyQuizzesFormik = ({setStatusAdd}) => {
  const [listCourse, setListCourse] = useState([])
  const nameModule = useSelector(moduleName)

  const [listModule, setListModule] = useState([])
  // const [count, setCount] = useState(0)
  const listModuleTopicc = useSelector(listModuleTopic)
  const [initialState, setInitialState] = useState({
    title: '',
    select: '',
    selectCourse: '',
  })
  const [chooseCourse, setChooseCourse] = useState(0)
  useEffect(() => {
    let arrTmp = []
    nameModule.forEach(item => {
      arrTmp.push({
        id: item.id,
        title: item.title,
        modules: item.modules,
      })
    })
    setListCourse(arrTmp)
  }, [])

  useEffect(() => {
    if (chooseCourse !== 0) {
      let arrCourse = listCourse.filter(item => item.id === chooseCourse)
      if (arrCourse.length > 0) {
        let filteredArray = arrCourse[0].modules.filter(function (array_el) {
          return (
            listModuleTopicc.filter(function (anotherOne_el) {
              return anotherOne_el.module_info.id === array_el.id
            }).length === 0
          )
        })
        setListModule(filteredArray)
      }
    } else {
      // console.log(infoEdit)
      if (infoEdit) {
        let arrCourse = listCourse.filter(
          item => item.id === infoEdit.data.course_info.id,
        )
        if (arrCourse.length > 0) {
          let filteredArray = arrCourse[0].modules.filter(function (array_el) {
            return (
              listModuleTopicc.filter(function (anotherOne_el) {
                return anotherOne_el.module_info.id === array_el.id
              }).length === 0
            )
          })
          setListModule(filteredArray)
        }
      }

      // console.log(listCourse)
    }
  }, [chooseCourse, listCourse])

  // if (listModule.length > 0) {
  //   let arrModuleIdChoose = []
  //   listModuleTopicc.forEach(item => {
  //     arrModuleIdChoose.push({id: item.module})
  //   })

  //   let filteredArray = listModule.filter(function (array_el) {
  //     return (
  //       arrModuleIdChoose.filter(function (anotherOne_el) {
  //         return anotherOne_el.id === array_el.id
  //       }).length === 0
  //     )
  //   })

  //   setListModule(filteredArray)
  // }
  // }, [chooseCourse, listCourse])

  const [fileImgSub, setFileImgSub] = useState(null)
  const infoEdit = useSelector(editTopic)
  useEffect(() => {
    if (infoEdit && infoEdit.data) {
      setInitialState({
        title: infoEdit.data.name,
        select: infoEdit.data.module_info.name,
        selectCourse: infoEdit.data.course_info.name,
      })
      setFileImgSub(infoEdit.data.picture_url)
    }
  }, [infoEdit])

  const dispatch = useDispatch()

  const formSchema = Yup.object().shape({
    title: Yup.string().required('Title is required!'),
  })
  const handleSubmit = values => {
    if (infoEdit) {
      let arrCourse = listCourse.filter(
        item => item.id === infoEdit.data.course_info.id,
      )

      let idDefault = arrCourse[0].modules.find(
        item => item.name === values.select,
      )

      if (infoEdit.data.picture_url === fileImgSub) {
        let formData = new FormData()
        formData.append('name', values.title)
        formData.append(
          'module',
          values.select.id ? values.select.id : idDefault.id,
        )
        // formData.append('picture', fileImgSub)
        dispatch(updateTopicMyQuizzes(formData, infoEdit.id))
        setStatusAdd(false)
      } else {
        let formData = new FormData()
        formData.append('name', values.title)
        formData.append(
          'module',
          values.select.id ? values.select.id : idDefault.id,
        )
        formData.append('picture', fileImgSub)
        dispatch(updateTopicMyQuizzes(formData, infoEdit.id))
        setStatusAdd(false)
      }
    } else {
      let formData = new FormData()
      formData.append('name', values.title)
      formData.append('module', values.select.id)
      formData.append('picture', fileImgSub)
      dispatch(createTopicMyQuizzes(formData))
      setStatusAdd(false)
    }
  }

  return (
    <div className="MyQuizzedFormik">
      {/* <h2 style={{fontSize: '20px', fontWeight: 'bold', display: 'inline'}}>
        {' '}
        New Topic
      </h2> */}
      <Formik
        initialValues={initialState}
        validationSchema={formSchema}
        enableReinitialize={true}
        onSubmit={values => handleSubmit(values)}
      >
        {({
          values,
          isValid,
          isSubmitting,
          dirty,
          errors,
          touched,
          placeHolder,
          setFieldValue,
        }) => (
          <Form className="w-100">
            <FormGroup className="mb-1">
              <Label for="data-name" className="text-bold-600">
                Content
                <sup style={{color: '#FF0000'}}>*</sup>
              </Label>
              <Field
                name="title"
                id="title"
                as="textarea"
                className={`form-control ${
                  errors.title && touched.title && 'is-invalid'
                }`}
              />
              {errors.title && touched.title ? (
                <div className="text-danger mt-25">{errors.title}</div>
              ) : null}
            </FormGroup>

            <FormGroup>
              <Label for="data-select" className="text-bold-600">
                Select Course
                <sup style={{color: '#FF0000'}}>*</sup>
              </Label>

              <Select
                name="selectCourse"
                className="React"
                classNamePrefix="selectCourse"
                // placeholder={infoEdit ? '' : 'select Course ...'}
                // placeholder={values.selectCourse}
                defaultInputValue={
                  infoEdit && infoEdit.data.course_info
                    ? infoEdit.data.course_info.name
                    : ''
                  // initialState.selectCourse
                }
                // defaultValue="hihihihi"
                // defaultInputValue={values.selectCourse}
                options={listCourse.map(option => ({
                  id: option.id,
                  label: option.title,
                  value: option.title,
                }))}
                onChange={option => {
                  setFieldValue('selectCourse', option)
                  setFieldValue('select', '')
                  // setInitialState({...initialState, select: ''})
                  setChooseCourse(option.id)
                }}
                style={{color: 'black'}}
              />
              {values.selectCourse.length === 0 && (
                <div className="text-danger mt-25">You must choose*</div>
              )}
            </FormGroup>

            <FormGroup>
              <Label for="data-select" className="text-bold-600">
                Select Module
                <sup style={{color: '#FF0000'}}>*</sup>
              </Label>

              <Select
                className="React"
                classNamePrefix="select"
                placeholder={values.select}
                value={values.select}
                // defaultInputValue={
                //   // && infoEdit.data.module_info
                //   infoEdit.data.module_info.name
                //     ? infoEdit.data.module_info.name
                //     : ''
                //   // initialState.select
                // }

                name="select"
                options={listModule.map(option => ({
                  id: option.id,
                  label: option.name,
                  value: option.name,
                }))}
                onChange={option => {
                  setFieldValue('select', option)
                }}
                style={{color: 'black'}}
              />
              {values.select.length === 0 && (
                <div className="text-danger mt-25">You must choose*</div>
              )}
            </FormGroup>

            <FormGroup>
              <Label for="data-select" className="text-bold-600">
                Upload image
                <sup style={{color: '#FF0000'}}>*</sup>
              </Label>
              <MyQuizzesUploadFile
                coverImgSub={infoEdit && infoEdit.data.picture_url}
                setFileImgSub={file => setFileImgSub(file)}
              />

              {fileImgSub === null && (
                <div className="text-danger mt-25">You must choose*</div>
              )}
            </FormGroup>

            <FormGroup className="my-2 text-right">
              <Button
                color="primary"
                type="submit"
                className="mr-1"
                disabled={
                  values.selectCourse.length === 0 ||
                  values.select.length === 0 ||
                  values.title.length === 0 ||
                  fileImgSub === null
                    ? true
                    : false
                }
              >
                <span>{infoEdit !== null ? 'Edit' : 'Add'}</span>
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MyQuizzesFormik
