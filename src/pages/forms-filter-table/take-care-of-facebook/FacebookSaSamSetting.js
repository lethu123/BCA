import React from 'react'
import {Formik, Form} from 'formik'
import TextField from 'components/form/TextField'
import * as Yup from 'yup'
import {Button, Col, FormGroup, Row} from 'reactstrap'
import {Save} from 'react-feather'

const formSchema = Yup.object().shape({
  c_new_post_of_day: Yup.number().required('không được bỏ trống'),
  max_new_post_of_day: Yup.number().required('không được bỏ trống'),
})
const FacebookSaSamSetting = () => {
  return (
    <div>
      <Formik
        initialValues={{
          c_new_post_of_day: '',
          max_new_post_of_day: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values)
        }}
      >
        {({isValid, dirty, values, setFieldValue, setFieldTouched}) => (
          <Form
            style={{
              borderRadius: '20px',
            }}
            className="p-5 mt-5 border"
          >
            <p className="font-weight-bold mb-50 mt-1 text-primary  ">
              Viết bài
            </p>

            <Row>
              <Col lg={7}>
                <TextField
                  label="Số lượng mỗi ngày của 1 FB"
                  placeholder="Số lượng < số lượng tối đa"
                  isRequired={true}
                  name="c_new_post_of_day"
                  type="number"
                />
              </Col>
              <Col lg={5}>
                <TextField
                  label="Tối đa"
                  placeholder="Nhập số vd: 10"
                  isRequired={true}
                  name="max_new_post_of_day"
                  type="number"
                />
              </Col>
            </Row>
            <span
              style={{
                display:
                  values.c_new_post_of_day !== '' &&
                  values.max_new_post_of_day !== '' &&
                  values.c_new_post_of_day > values.max_new_post_of_day
                    ? 'block'
                    : 'none',
              }}
              className="field-error text-danger"
            >
              Số lượng không được quá số lượng tối đa
            </span>

            <FormGroup className="mb-0 mt-2 w-100 text-center">
              <Button.Ripple
                disabled={!(isValid && dirty)}
                color="primary"
                type="submit"
              >
                <Save size={15} /> Lưu
              </Button.Ripple>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FacebookSaSamSetting
