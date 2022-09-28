import React, {useEffect, useState} from 'react'
import {Plus} from 'react-feather'
import {
  Button,
  Col,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
} from 'reactstrap'
import CardStaticProgramExp from './CardStaticProgramExp.component'

import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {useDropzone} from 'react-dropzone'
import {useDispatch, useSelector} from 'react-redux'
// import {
//   createProgramEpx,
//   getListProgramExp,
//   updateProgramExp,
// } from 'redux/actions/hschools/courseAction'
// import {
//   selectDetailCourse,
//   selectProgramExp,
// } from 'redux/reselects/hschools/course.reselect'
import {ToastContainer, toast} from 'react-toastify'

const formSchema = Yup.object().shape({
  title: Yup.string().required('Title is Required'),
  quantity: Yup.number().required('Quantity is Required'),
  image: Yup.mixed().required('image is Required'),
})

const ProgramExperience = () => {
  const [modal, setModal] = useState(false)
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  // const programExps = useSelector(selectProgramExp)
  // const courseDetail = useSelector(selectDetailCourse)
  const [initProgramEpx, setInitProgramEpx] = useState({
    id: null,
    title: '',
    quantity: '',
    image: null,
    course: null,
    title_en: '',
    imagePreview: '',
  })

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files],
  )
  // useEffect(() => {
  //   dispatch(getListProgramExp())
  // }, [dispatch])

  // useEffect(() => {
  //   if (courseDetail)
  //     setInitProgramEpx({...initProgramEpx, course: courseDetail.id})
  // }, [courseDetail])

  const toggleModal = () => {
    setModal(!modal)
    setFiles([])
  }

  // const handleSubmit = values => {
  //   if (values.id) {
  //     setLoading(true)
  //     let id = values.id
  //     if (values.image === 'no-img') delete values.image
  //     delete values.imagePreview
  //     delete values.id
  //     dispatch(updateProgramExp(id, values)).then(res => {
  //       if (res === 'success') {
  //         toggleModal()
  //         toast.success('Update success!')
  //         setLoading(false)
  //       } else {
  //         setLoading(false)
  //         toast.error('Update fail!')
  //       }
  //     })
  //   } else {
  //     delete values.id
  //     setLoading(true)
  //     dispatch(createProgramEpx(values)).then(res => {
  //       if (res === 'success') {
  //         toggleModal()
  //         toast.success('Add success!')
  //         setLoading(false)
  //       } else {
  //         setLoading(false)
  //         toast.error('Please check your data again!')
  //       }
  //     })
  //   }
  // }
  const handleInitProgramEpx = value => {
    setInitProgramEpx({
      ...initProgramEpx,
      id: value.id,
      title: value.title,
      quantity: value.quantity,
      image: 'no-img',
      course: value.course_info.id,
      title_en: value.title_en,
      imagePreview: value._image,
    })
  }

  const UploadImage = ({setFieldValue}) => {
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setFieldValue('image', acceptedFiles[0])
        setFieldValue('imagePreview', '')
        setInitProgramEpx({
          ...initProgramEpx,
          imagePreview: '',
        })
        setFiles(
          acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          ),
        )
      },
    })
    return (
      <section className="py-0">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p className="mx-1">
            Drag 'n' drop some files here, or click to select files
          </p>
        </div>
        <aside className="thumb-container">{thumbs}</aside>
      </section>
    )
  }

  const thumbs = files.map(file => (
    <div className="dz-thumb" key={file.name}>
      <div className="dz-thumb-inner">
        <img src={file.preview} className="dz-img" alt={file.name} />
      </div>
    </div>
  ))

  return (
    <div>
      <Row className="w-100">
        <Col lg="12" className="text-right my-3">
          <span
            onClick={() => {
              toggleModal()
              setInitProgramEpx({
                ...initProgramEpx,
                id: null,
                title: '',
                quantity: '',
                image: null,
                title_en: '',
                imagePreview: '',
              })
            }}
            className="thm-btn banner-one__mc-btn cursor-pointer py-1"
          >
            <span>
              <Plus size="20" /> New program experince
            </span>
          </span>
        </Col>

        {/* {programExps &&
          courseDetail &&
          programExps
            .filter(ele => ele.course_info.id === courseDetail.id)
            .map((item, index) => (
              <Col lg="3" md="6" key={index}>
                <CardStaticProgramExp
                  item={item}
                  handleInitProgramEpx={handleInitProgramEpx}
                  toggleModal={toggleModal}
                />
              </Col>
            ))} */}
      </Row>

      <ToastContainer />
      {/* ======================== Modal ================= */}

      <Modal
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered modal-lg"
      >
        <Formik
          initialValues={initProgramEpx}
          validationSchema={formSchema}
          onSubmit={(values, {resetForm}) => {
            // handleSubmit(values)
            resetForm({})
          }}
        >
          {({errors, touched, setFieldValue}) => (
            <Form>
              <ModalHeader toggle={toggleModal} className="bg-primary">
                {!initProgramEpx.id
                  ? ' Add program experince'
                  : ' Edit program experince'}
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col lg="6">
                    <FormGroup className=" ">
                      <Label for="required">Title (Vietnamemes)</Label>
                      <Field
                        name="title"
                        id="title"
                        className={`form-control ${
                          errors.title && touched.title && 'is-invalid'
                        }`}
                      />
                      {errors.title && touched.title ? (
                        <div className="text-danger mt-25">{errors.title}</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className=" ">
                      <Label for="title_en">Title (English)</Label>
                      <Field
                        name="title_en"
                        id="title_en"
                        className={`form-control `}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className=" ">
                      <Label for="required">Image</Label>
                      <UploadImage setFieldValue={setFieldValue} />
                      {initProgramEpx.imagePreview && (
                        <aside className="thumb-container">
                          <div className="dz-thumb">
                            <div className="dz-thumb-inner">
                              <img
                                src={initProgramEpx.imagePreview}
                                className="dz-img"
                                alt="6fcfef6aad895cd70598.jpg"
                              />
                            </div>
                          </div>
                        </aside>
                      )}

                      {errors.image && touched.image ? (
                        <div className="text-danger mt-25">{errors.image}</div>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup className=" ">
                      <Label for="required">Quantity</Label>
                      <Field
                        name="quantity"
                        id="quantity"
                        type="number"
                        className={`form-control ${
                          errors.quantity && touched.quantity && 'is-invalid'
                        }`}
                      />
                      {errors.quantity && touched.quantity ? (
                        <div className="text-danger mt-25">
                          {errors.quantity}
                        </div>
                      ) : null}
                    </FormGroup>
                    <Field
                      name="course"
                      id="course"
                      value=""
                      // value={courseDetail.id}
                      className={`form-control d-none`}
                    />
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">
                  {!loading ? (
                    <> {!initProgramEpx.id ? 'Save' : 'Update'}</>
                  ) : (
                    <Spinner />
                  )}
                </Button>
                <Button color="light" onClick={toggleModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}

export default ProgramExperience
