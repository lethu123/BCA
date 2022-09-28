import React, {useEffect, useState} from 'react'
import {Button, Card, CardBody, CardHeader, FormGroup, Label} from 'reactstrap'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {Editor} from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

import {useDispatch} from 'react-redux'
// import {createCourseAnnouncement} from 'redux/actions/hschools/courseAction'
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from 'draft-js'

const AnnouncementEdit = ({editValue, setOpenForm, course}) => {
  const dispatch = useDispatch()

  const [initialState, setInitialState] = useState({
    course_id: course ? course.id : null,
    title: '',
    content: '',
    public: false,
  })
  const formSchema = Yup.object().shape({
    title: Yup.string().required('Title is equired!'),
  })
  const uploadImageCallBack = file => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', 'https://api.imgur.com/3/image')
      xhr.setRequestHeader('Authorization', 'Client-ID 7e1c3e366d22aa3')
      const data = new FormData()
      data.append('image', file)
      xhr.send(data)
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText)
        resolve(response)
      })
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText)
        reject(error)
      })
    })
  }

  useEffect(() => {
    if (editValue) {
      setInitialState({
        ...initialState,
        title: editValue.title,
        content: EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(editValue.content)),
        ),
      })
    }
  }, [editValue])

  return (
    <Card className="mt-2">
      <CardHeader style={{fontSize: '22px', fontWeight: 'bold'}}>
        {editValue ? 'Edit Announcement' : 'Create Announcement'}
      </CardHeader>
      <CardBody>
        <div className="data-list-sidebar ">
          <Formik
            initialValues={initialState}
            validationSchema={formSchema}
            enableReinitialize={true}
            onSubmit={(values, {setSubmitting, setErrors}) => {
              try {
                values = {
                  ...values,
                  content: draftToHtml(
                    convertToRaw(values.content.getCurrentContent()),
                  ),
                }
                // if (editValue) {
                //   dispatch(createCourseAnnouncement(values, editValue.id))
                // } else {
                //   dispatch(createCourseAnnouncement(values))
                // }

                setSubmitting(false)
                setOpenForm(false)
              } catch (error) {
                console.log(error)
              }
            }}
          >
            {({
              values,
              isValid,
              isSubmitting,
              dirty,
              errors,
              touched,
              setFieldValue,
            }) => (
              <Form className="w-100">
                <FormGroup className="mb-1">
                  <Label for="data-name" className="text-bold-600">
                    Title
                    <sup style={{color: '#FF0000'}}>*</sup>
                  </Label>
                  <Field
                    name="title"
                    id="title"
                    as="textarea"
                    rows="2"
                    className={`form-control ${
                      errors.title && touched.title && 'is-invalid'
                    }`}
                  />
                  {errors.title && touched.title ? (
                    <div className="text-danger mt-25">{errors.title}</div>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <Label for="data-content" className="text-bold-600">
                    Content
                  </Label>
                  <Editor
                    editorState={values.content}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={e => {
                      setFieldValue('content', e)
                    }}
                    toolbar={{
                      inline: {inDropdown: true},
                      list: {inDropdown: true},
                      textAlign: {inDropdown: true},
                      link: {inDropdown: true},
                      history: {inDropdown: true},
                      image: {
                        uploadCallback: uploadImageCallBack,
                        previewImage: true,
                        alt: {present: true, mandatory: true},
                      },
                    }}
                  />
                </FormGroup>

                <FormGroup className="my-2 text-right">
                  <Button
                    color="danger"
                    outline
                    className="mr-2"
                    onClick={() => setOpenForm(false)}
                  >
                    Back
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    className="mr-1"
                    disabled={
                      !isValid ||
                      isSubmitting ||
                      values.title.length === 0 ||
                      values.content.length === 0
                    }
                    style={
                      !isValid || isSubmitting
                        ? {
                            cursor: 'not-allowed',
                          }
                        : {cursor: 'pointer'}
                    }
                  >
                    {editValue ? 'Update' : 'Create'}
                  </Button>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </div>
      </CardBody>
    </Card>
  )
}

export default AnnouncementEdit
