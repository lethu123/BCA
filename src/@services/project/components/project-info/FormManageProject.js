import {Formik, Form} from 'formik'
import TextField from 'components/form/TextField'
import * as Yup from 'yup'
import React, {useState} from 'react'
import {Save, X} from 'react-feather'
import {Button, Col, FormGroup, Row} from 'reactstrap'
import TextareaField from 'components/form/TextareaField'
import DatePickerField from 'components/form/DatePickerField'
import NumberInput from '@core/components/number-input'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import RadioField from 'components/form/RadioField'
import SwitchField from 'components/form/SwitchField'

//scss
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@core/scss/react/libs/file-uploader/file-uploader.scss'

const formSchema = Yup.object().shape({
  id_project: Yup.string().required('không được bỏ trống'),
  name_project: Yup.string().required('không được bỏ trống'),
  description_project: Yup.string().required('không được bỏ trống'),
  link_landingpage: Yup.string().required('không được bỏ trống'),
  // time_project: Yup.string().required('không được bỏ trống'),
})
const MySwal = withReactContent(Swal)

const FormManageProject = ({setModalProject, modalProject}) => {
  const [count, setCount] = useState(0)
  const handleSuccess = () => {
    return MySwal.fire({
      title: 'Thiết lập dự án thành công!',
      text: 'Nhấn ok để tiếp tục!',
      icon: 'success',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
      buttonsStyling: false,
    }).then(() => setModalProject(!modalProject))
  }

  return (
    <Formik
      initialValues={{
        id_project: '',
        type: '',
        type_project: '',
        name_project: '',
        status_project: '',
        description_project: '',
        link_landingpage: '',
        time_project: null,
      }}
      validationSchema={formSchema}
      onSubmit={(values, {setSubmitting}) => {
        console.log(values)
      }}
    >
      {({isValid, dirty, values, setFieldValue, setFieldTouched}) => (
        <Form className="p-5 ">
          <TextField
            label="Id dự án"
            placeholder="D987HY674"
            isRequired={true}
            name="id_project"
            type="text"
          />
          <TextField
            label="Tên dự án"
            placeholder="Tên dự án"
            isRequired={true}
            name="name_project"
            type="text"
          />
          <TextareaField
            maxLength={1000}
            label=" Nội dung mô tả dự án"
            name="description_project"
            // isRequired
            placeholder="Mô tả dự án của bạn tại đây"
            minRows="5"
          />

          <Row>
            <Col lg={6}>
              <FormGroup className="mb-3">
                <RadioField
                  name="type"
                  label="Loại dự án"
                  // helpText="Some help text goes here"
                  // color="warning"
                  // outline
                  // accent
                  inline
                  options={[
                    {
                      value: 'Đối tác',
                      label: 'Đối tác',
                    },
                    {
                      value: 'In-house',
                      label: 'In-house',
                      checked: true,
                    },
                  ]}
                />
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup className="mb-3">
                <RadioField
                  name="type_project"
                  label="Kiểu dự án"
                  // helpText="Some help text goes here"
                  // color="warning"
                  // outline
                  // accent
                  inline
                  options={[
                    {
                      value: 'KHTN',
                      label: 'KHTN',
                      color: 'success',
                      checked: true,
                    },
                    {
                      value: 'UVTN',
                      label: 'UVTN',
                      color: 'success',
                    },
                  ]}
                />
              </FormGroup>
            </Col>
          </Row>
          <TextField
            label="Link landingpage"
            placeholder="link landingpage của dự án"
            isRequired={true}
            name="link_landingpage"
            type="text"
          />

          <SwitchField
            name="status_project"
            label="Trạng thái"
            icon
            color="warning"
            outline
            onChange={(name, value) => console.log(value)}
          />

          <DatePickerField
            name="time_project"
            label="Thời gian chạy dự án"
            options={{mode: 'range'}}
            isRequired
            onChange={(name, value) => console.log(name, value)}
          />
          <p className="mb-5 font-weight-bold">Lượt mua liên hệ tối đa</p>
          <FormGroup className="w-50 mx-auto">
            <NumberInput
              id="basic-number-input"
              value={count}
              onChange={count => setCount(count)}
              size="sm"
            />
          </FormGroup>

          <FormGroup className="mb-0 mt-5 w-100 text-center">
            <Button.Ripple
              disabled={!(isValid && dirty)}
              color="primary"
              type="submit"
              className="mr-2"
              onClick={handleSuccess}
            >
              <Save size={15} /> Thiết lập
            </Button.Ripple>
            <Button.Ripple
              color="secondary"
              outline
              onClick={() => setModalProject(!modalProject)}
            >
              <X size={15} /> Hủy
            </Button.Ripple>
          </FormGroup>
        </Form>
      )}
    </Formik>
  )
}

export default FormManageProject
