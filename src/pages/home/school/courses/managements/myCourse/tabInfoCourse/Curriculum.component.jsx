/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {Edit3, Plus, X} from 'react-feather'
import {
  Button,
  CardBody,
  Card,
  Col,
  Row,
  CardHeader,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Spinner,
  ModalFooter,
} from 'reactstrap'
import DragAndDropLesson from './DragAndDropLesson.component'
// import '../Custom.style.scss'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import SweetAlert from 'react-bootstrap-sweetalert'
import {useDispatch, useSelector} from 'react-redux'
// import {
//   selectDetailCourse,
//   selectListLesson,
//   selectMetadataLesson,
//   selectAllModule,
//   selectLessons,
// } from 'redux/reselects/hschools/course.reselect'
// import {
//   addLessonToModule,
//   addModuleToCourse,
//   deleteModuleOfCourse,
//   getListLesson,
//   updateLessonOfModule,
//   updateModuleOfCourse,
//   deleteLessonOfModule,
//   invitePreviewModule,
// } from 'redux/actions/hschools/courseAction'
// import 'theme/assets/scss/plugins/extensions/react-paginate.scss'
import classnames from 'classnames'
import {ToastContainer} from 'react-toastify'
import Select from 'react-select'
import ListOrgToReviewModule from './ListOrgToReviewModule.component'
// import DndMultiple from './DndMultiple'

const formSchema = Yup.object().shape({
  name_vi: Yup.string().required('Title Vietnames is equired!'),
  name_en: Yup.string().required('Title English is equired!'),
})
const formAddLessonSchema = Yup.object().shape({
  title_vi: Yup.string().required('Title Vietnamese is required!'),
  title_en: Yup.string().required('Title English is required!'),
  video_url: Yup.string().required('Video url is required!'),
  course_module: Yup.object().required('Module is required!'),
  duration: Yup.number().required('Duration is required!'),
})

const Curriculum = () => {
  const dispatch = useDispatch()
  // const course = useSelector(state => selectDetailCourse(state))
  // const module = useSelector(state => selectListLesson(state))
  // const allLesson = useSelector(selectLessons)
  // const allModule = useSelector(state => selectAllModule(state))
  // const metadata = useSelector(state => selectMetadataLesson(state))
  const loading = useSelector(state => state.async.loading)
  const [modal, setModal] = useState(false)
  const [modalLesson, setModalLesson] = useState(false)
  const [modalInvite, setModalInvite] = useState(false)
  const [cfDeleteSection, setCfDeleteSection] = useState(false)
  const [deleteLesson, setDeleteLesson] = useState(false)
  const [itemModule, setItemModule] = useState(null)
  const [valuesDeleteLesson, setValuesDeleteLesson] = useState(null)
  const [page, setPage] = useState(1)
  const limit = 5
  const [orgInfo, setOrgInfo] = useState(null)

  const [initModule, setInitModule] = useState({
    id: null,
    name_vi: '',
    name_en: '',
    description_vi: '',
    description_en: '',
    video_url_introduce: '',
  })

  const [initLesson, setInitLesson] = useState({
    id: null,
    title_vi: '',
    title_en: '',
    video_url: '',
    transcript: '',
    course_module: '',
    duration: 0,
  })
  const handleSetInitLesson = (item, titleModule) => {
    setInitLesson({
      id: item.id,
      title_vi: item.title_vi,
      title_en: item.title_en,
      video_url: item.video_url,
      transcript: item.transcript,
      course_module: {value: item.module_id, label: titleModule},
      duration: item.duration,
    })
  }

  // useEffect(() => {
  //   if (course) dispatch(getListLesson(course.slug, page, limit))
  // }, [dispatch, page, course])

  // useEffect(() => {
  //   if (allLesson && allLesson.length > 0) setDisplayInvite(true)
  //   else setDisplayInvite(false)
  // }, [allLesson])
  const handleEditSection = () => {
    setModal(!modal)
  }
  const handleDelSection = () => {
    setCfDeleteSection(true)
  }

  const handleLesson = () => {
    setModalLesson(!modalLesson)
  }

  const toggleModalInvite = () => {
    setModalInvite(!modalInvite)
  }

  const hadleDeleleLesson = (id, idModule) => {
    setValuesDeleteLesson({id, idModule})
    setDeleteLesson(true)
  }

  const handleInvite = () => {
    let content =
      'Please help me review modules in my course! Thank you so much. Have nice a day!'

    // let link_review = `http://${window.location.host}/hschool/course/review-course/${course.slug}`

    if (orgInfo) {
      // invitePreviewModule(course.id, orgInfo[0].admin.id, content, link_review)
      toggleModalInvite()
    }
  }

  return (
    <React.Fragment>
      <Row className="curriculum pb-3 no-gutters">
        <Col className="m-auto" md="10">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className=" py-3">
              <Button.Ripple
                outline
                className="mr-2 mb-1 round d-flex align-items-center"
                color="primary"
                onClick={() => {
                  handleEditSection()
                  setInitModule({
                    id: null,
                    name_vi: '',
                    name_en: '',
                    description_vi: '',
                    description_en: '',
                    video_url_introduce: '',
                  })
                }}
              >
                <Plus size={14} className="mr-1" />
                Add section
              </Button.Ripple>
              <Button.Ripple
                outline
                className="mr-2 mb-1 round  d-flex align-items-center"
                color="primary"
                onClick={() => {
                  handleLesson()
                  setInitLesson({
                    id: null,
                    title_vi: '',
                    title_en: '',
                    video_url: '',
                    transcript: '',
                    course_module: '',
                    duration: 0,
                  })
                }}
              >
                <Plus size={14} className="mr-1" />
                Add lesson
              </Button.Ripple>
              <Button.Ripple
                outline
                className="mr-1 mb-1 round d-flex align-items-center"
                color="primary"
              >
                <i className="fa fa-sort mr-1"></i>
                Sort section
              </Button.Ripple>
            </div>
            {/* {allLesson && allLesson.length > 0 && (
              <span
                onClick={toggleModalInvite}
                className="mb-1 thm-btn banner-one__mc-btn cursor-pointer py-1"
              >
                <span>Invite an expert to review </span>
              </span>
            )} */}
          </div>

          <div className="lesson-content">
            {loading ? (
              <Spinner color="primary" />
            ) : (
              <React.Fragment>
                {module && module.length > 0 && (
                  <React.Fragment>
                    {module.map((ele, index) => (
                      <Card key={index} className="section">
                        <CardHeader className="pb-2 pt-3 ">
                          <CardTitle className="font-weight-bold">
                            Module {5 * (page - 1) + index + 1}: {ele.name}
                          </CardTitle>
                          <div className="action-section">
                            <Edit3
                              size={20}
                              className="mr-1 cursor-pointer "
                              style={{outline: 'none'}}
                              onClick={() => {
                                handleEditSection()
                                setInitModule({
                                  id: ele.id,
                                  name_vi: ele.name_vi,
                                  name_en: ele.name_en,
                                  description_vi: ele.description_vi,
                                  description_en: ele.description_en,
                                  video_url_introduce: ele.video_url_introduce,
                                })
                              }}
                            />
                            <X
                              className="cursor-pointer"
                              style={{outline: 'none'}}
                              onClick={() => {
                                handleDelSection()
                                setItemModule(ele.id)
                              }}
                            />
                          </div>
                        </CardHeader>
                        <CardBody className="pb-3 px-3 pt-0">
                          <DragAndDropLesson
                            handleLesson={handleLesson}
                            handleSetInitLesson={handleSetInitLesson}
                            lesson={ele.lessons}
                            titleModule={ele.name_vi}
                            hadleDeleleLesson={hadleDeleleLesson}
                            idModule={ele.id}
                          />
                        </CardBody>
                      </Card>
                    ))}
                    {/* <section className="course-one course-page p-0">
                      <div className="post-pagination">
                        <a
                          onClick={() =>
                            setPage(metadata.previous_page_number || 1)
                          }
                        >
                          <i className="fa fa-angle-double-left"></i>
                        </a>
                        {metadata &&
                          metadata.page_range.map((ele, idx) => (
                            <a
                              className={classnames({
                                active: ele === metadata.current_page,
                              })}
                              key={idx}
                              onClick={() => {
                                if (ele !== metadata.current_page) {
                                  setPage(ele)
                                }
                              }}
                            >
                              {ele}
                            </a>
                          ))}

                        <a
                          onClick={() =>
                            setPage(
                              metadata.next_page_number ||
                                metadata.current_page,
                            )
                          }
                        >
                          <i className="fa fa-angle-double-right"></i>
                        </a>
                      </div>
                    </section> */}
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </div>
        </Col>
      </Row>

      <ToastContainer />
      {/* ===================== MODAL ======================== */}

      <Modal
        isOpen={modal}
        toggle={handleEditSection}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={handleEditSection} className="bg-light">
          {!initModule.id ? 'Add section' : 'Edit section'}
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          <Formik
            initialValues={initModule}
            validationSchema={formSchema}
            onSubmit={(values, {resetForm}) => {
              try {
                // values.course = course.id
                if (values.id) {
                  let id = values.id
                  delete values.id
                  // dispatch(updateModuleOfCourse(id, values))
                  resetForm({})
                } else {
                  delete values.id
                  // dispatch(
                  //   addModuleToCourse(
                  //     values,
                  //     course,
                  //     limit,
                  //     page,
                  //     metadata.count,
                  //   ),
                  // )
                }

                setModal(!modal)
              } catch (error) {
                setModal(!modal)
              }
            }}
          >
            {({isValid, dirty, errors, touched}) => (
              <Form className="w-100">
                <p className="text-primary font-weight-bold">
                  You can use both Vietnamese and English.
                </p>
                <FormGroup className="mb-1">
                  <Label for="title">Title (Vietnamemes)</Label>
                  <Field
                    name="name_vi"
                    id="name_vi"
                    className={`form-control ${
                      errors.name_vi && touched.name_vi && 'is-invalid'
                    }`}
                  />
                  {errors.name_vi && touched.name_vi ? (
                    <div className="text-danger mt-25">{errors.name_vi}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="mb-1">
                  <Label for="title_en">Title (English)</Label>
                  <Field
                    name="name_en"
                    id="title_en"
                    className={`form-control `}
                  />
                  {errors.name_en && touched.name_en ? (
                    <div className="text-danger mt-25">{errors.name_en}</div>
                  ) : null}
                </FormGroup>
                <div className="des d-flex align-items-center justify-content-between">
                  <FormGroup className="mb-1 w-100">
                    <Label for="description">Description (Vietnamemes)</Label>
                    <Field
                      as="textarea"
                      name="description_vi"
                      className="form-control"
                    />
                  </FormGroup>
                </div>
                <div className="des d-flex align-items-center justify-content-between">
                  <FormGroup className="mb-1 w-100">
                    <Label for="description">Description (English)</Label>
                    <Field
                      as="textarea"
                      name="description_en"
                      className="form-control"
                    />
                  </FormGroup>
                </div>
                <div className="des d-flex align-items-center justify-content-between">
                  <FormGroup className="mb-1 w-100">
                    <Label for="video_preview">Video preview module</Label>
                    <Field
                      name="video_url_introduce"
                      className="form-control"
                    />
                  </FormGroup>
                </div>
                <hr />
                <FormGroup className="my-2 text-right">
                  <Button
                    color="primary"
                    type="submit"
                    className="mr-1"
                    disabled={!isValid && !dirty}
                    style={
                      !isValid && !dirty
                        ? {
                            cursor: 'not-allowed',
                          }
                        : {cursor: 'pointer'}
                    }
                  >
                    Submit
                  </Button>
                  <Button.Ripple
                    color="light"
                    type="button"
                    onClick={handleEditSection}
                  >
                    Cancel
                  </Button.Ripple>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>

      {/* -------------------------- Add lesson ---------------- */}
      <Modal
        isOpen={modalLesson}
        toggle={handleLesson}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={handleLesson} className="bg-light">
          {initLesson.id ? 'Edit Lesson' : 'Add Lesson'}
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          <Formik
            initialValues={initLesson}
            validationSchema={formAddLessonSchema}
            onSubmit={(values, {resetForm}) => {
              if (values.id) {
                values.course_module =
                  values.course_module.id ?? initLesson.course_module.value
                let id = values.id
                delete values.id
                // dispatch(updateLessonOfModule(id, values))
                resetForm({})
                setModalLesson(!modalLesson)
              } else {
                try {
                  values.course_module = values.course_module.id
                  delete values.id
                  // dispatch(addLessonToModule(values))
                  setModalLesson(!modalLesson)
                } catch (error) {
                  setModalLesson(!modalLesson)
                }
              }
            }}
          >
            {({isValid, setFieldValue, dirty, errors, touched}) => (
              <Form className="w-100">
                <FormGroup className="mb-1">
                  <Label for="title_vi">Title (Vietnamese)</Label>
                  <Field
                    name="title_vi"
                    id="title_vi"
                    className={`form-control ${
                      errors.title_vi && touched.title_vi && 'is-invalid'
                    }`}
                  />
                  {errors.title_vi && touched.title_vi ? (
                    <div className="text-danger mt-25">{errors.title_vi}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="mb-1">
                  <Label for="title_en">Title (English)</Label>
                  <Field
                    name="title_en"
                    id="title_en"
                    className={`form-control ${
                      errors.title_en && touched.title_en && 'is-invalid'
                    }`}
                  />
                  {errors.title_en && touched.title_en ? (
                    <div className="text-danger mt-25">{errors.title_en}</div>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <Label for="select">Course module</Label>
                  <Select
                    className="React"
                    classNamePrefix="select"
                    name="course_module"
                    // options={allModule}
                    onChange={option => setFieldValue('course_module', option)}
                    // isClearable={true}
                    defaultValue={initLesson.course_module}
                  />
                  {errors.course_module && touched.course_module ? (
                    <div className="text-danger mt-25">
                      Please select module!
                    </div>
                  ) : null}
                </FormGroup>
                <FormGroup className="mb-1">
                  <Label for="video_url">Video url</Label>
                  <Field
                    name="video_url"
                    id="video_url"
                    className={`form-control ${
                      errors.video_url && touched.video_url && 'is-invalid'
                    }`}
                  />
                  {errors.video_url && touched.video_url ? (
                    <div className="text-danger mt-25">{errors.video_url}</div>
                  ) : null}
                </FormGroup>

                <FormGroup className="mb-1">
                  <Label for="transcript">Transcript</Label>
                  <Field
                    name="transcript"
                    id="transcript"
                    className={`form-control ${
                      errors.transcript && touched.transcript && 'is-invalid'
                    }`}
                  />
                  {errors.transcript && touched.transcript ? (
                    <div className="text-danger mt-25">{errors.transcript}</div>
                  ) : null}
                </FormGroup>
                <FormGroup className="mb-1">
                  <Label for="duration">Duration (min)</Label>
                  <Field
                    name="duration"
                    id="duration"
                    type="number"
                    placeholder="min"
                    className={`form-control ${
                      errors.duration && touched.duration && 'is-invalid'
                    }`}
                  />
                  {errors.duration && touched.duration ? (
                    <div className="text-danger mt-25">{errors.duration}</div>
                  ) : null}
                </FormGroup>
                <hr />
                <FormGroup className="my-2 text-right">
                  <Button
                    color="primary"
                    type="submit"
                    className="mr-1"
                    disabled={!isValid && !dirty}
                    style={
                      !isValid && !dirty
                        ? {
                            cursor: 'not-allowed',
                          }
                        : {cursor: 'pointer'}
                    }
                  >
                    Submit
                  </Button>
                  <Button.Ripple
                    color="light"
                    type="button"
                    onClick={handleLesson}
                  >
                    Cancel
                  </Button.Ripple>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>

      {/* ====================== invite org ========================= */}
      <Modal
        isOpen={modalInvite}
        toggle={toggleModalInvite}
        className="modal-dialog-centered modal-xl"
      >
        <ModalHeader toggle={toggleModalInvite} className="bg-primary">
          Danh sách tổ chức
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          <div className="w-100">
            {/* <ListOrgToReviewModule course={course} setOrgInfo={setOrgInfo} /> */}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" disabled={!orgInfo} onClick={handleInvite}>
            Invite
          </Button>
        </ModalFooter>
      </Modal>
      {/* =========================== SWEET ALERT ========================== */}
      <SweetAlert
        title="Are you sure?"
        warning
        show={cfDeleteSection}
        showCancel
        reverseButtons
        cancelBtnBsStyle="light"
        confirmBtnText="Detele"
        cancelBtnText="Cancel"
        onConfirm={() => {
          //delete module
          // dispatch(deleteModuleOfCourse(itemModule, course))
          setCfDeleteSection(false)
        }}
        onCancel={() => setCfDeleteSection(false)}
      >
        You won't be able to revert this!
      </SweetAlert>

      <SweetAlert
        title="Are you sure?"
        warning
        show={deleteLesson}
        showCancel
        reverseButtons
        cancelBtnBsStyle="light"
        confirmBtnText="Detele"
        cancelBtnText="Cancel"
        onConfirm={() => {
          //delete module
          // dispatch(
          //   deleteLessonOfModule(
          //     valuesDeleteLesson.id,
          //     valuesDeleteLesson.idModule,
          //   ),
          // )
          setDeleteLesson(false)
        }}
        onCancel={() => setDeleteLesson(false)}
      >
        You won't be able to revert this!
      </SweetAlert>
    </React.Fragment>
  )
}

export default Curriculum
