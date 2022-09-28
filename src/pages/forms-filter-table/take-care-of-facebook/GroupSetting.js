import React from 'react'
import {Formik, Form} from 'formik'
import TextField from 'components/form/TextField'
import * as Yup from 'yup'
import {Button, Col, FormGroup, Row} from 'reactstrap'
import {Save} from 'react-feather'

const formSchema = Yup.object().shape({
  c_join_new_group_of_day: Yup.number().required('không được bỏ trống'),
  c_comment_like_of_day: Yup.number().required('không được bỏ trống'),
  c_post_of_day: Yup.number().required('không được bỏ trống'),
  max_join_new_group_of_day: Yup.number().required('không được bỏ trống'),
  max_comment_like_of_day: Yup.number().required('không được bỏ trống'),
  max_post_of_day: Yup.number().required('không được bỏ trống'),
})
const GroupSetting = () => {
  return (
    <div>
      <Formik
        initialValues={{
          c_comment_like_of_day: '',
          c_join_new_group_of_day: '',
          c_post_of_day: '',
          max_join_new_group_of_day: '',
          max_comment_like_of_day: '',
          max_post_of_day: '',
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
            <p className="font-weight-bold mb-50 mt-2 text-primary  ">
              Tham gia group
            </p>

            <Row>
              <Col lg={7}>
                <TextField
                  label="Số lượng mỗi ngày của 1 FB"
                  placeholder="Số lượng < số lượng tối đa"
                  isRequired={true}
                  name="c_join_new_group_of_day"
                  type="number"
                />
              </Col>
              <Col lg={5}>
                <TextField
                  label="Tối đa"
                  placeholder="Nhập số vd: 10"
                  isRequired={true}
                  name="max_join_new_group_of_day"
                  type="number"
                />
              </Col>
            </Row>
            <span
              style={{
                display:
                  values.c_join_new_group_of_day !== '' &&
                  values.max_join_new_group_of_day !== '' &&
                  values.c_join_new_group_of_day >
                    values.max_join_new_group_of_day
                    ? 'block'
                    : 'none',
              }}
              className="field-error text-danger"
            >
              Số lượng không được quá số lượng tối đa
            </span>

            <p className="font-weight-bold mb-50 mt-2 text-primary ">
              Bình luận / like( Chỉ thực hiện khi loại group là tương tác)
            </p>
            <Row>
              <Col lg={7}>
                <TextField
                  label="Số lượt trên 1 ngày"
                  placeholder="Số lượng < số lượng tối đa"
                  isRequired={true}
                  name="c_comment_like_of_day"
                  type="number"
                />
              </Col>
              <Col lg={5}>
                <TextField
                  label="Tối đa"
                  placeholder="Nhập số vd: 10"
                  isRequired={true}
                  name="max_comment_like_of_day"
                  type="number"
                />
              </Col>
            </Row>
            <span
              style={{
                display:
                  values.c_comment_like_of_day !== '' &&
                  values.max_comment_like_of_day !== '' &&
                  values.c_comment_like_of_day > values.max_comment_like_of_day
                    ? 'block'
                    : 'none',
              }}
              className="field-error text-danger"
            >
              Số lượt không được quá số lượt tối đa
            </span>
            <p className="font-weight-bold mb-50 mt-2 text-primary ">
              Viết bài(chỉ thực hiện trên loại group là tương tác)
            </p>
            <Row>
              <Col lg={7}>
                <TextField
                  label="Số lượt trên 1 ngày"
                  placeholder="Số lượng < số lượng tối đa"
                  isRequired={true}
                  name="c_post_of_day"
                  type="number"
                />
              </Col>
              <Col lg={5}>
                <TextField
                  label="Tối đa"
                  placeholder="Nhập số vd: 10"
                  isRequired={true}
                  name="max_post_of_day"
                  type="number"
                />
              </Col>
            </Row>
            <span
              style={{
                display:
                  values.c_comment_like_of_day !== '' &&
                  values.max_comment_like_of_day !== '' &&
                  values.c_comment_like_of_day > values.max_comment_like_of_day
                    ? 'block'
                    : 'none',
              }}
              className="field-error text-danger"
            >
              Số lượt không được quá số lượt tối đa
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

export default GroupSetting
