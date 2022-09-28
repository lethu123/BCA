import React from 'react'

import {Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup'
import {Star} from 'react-feather'
import Rating from 'react-rating'
import {Button, Card, Col, Row} from 'reactstrap'
import Avatar from '@core/components/avatar'

// *** img
import avatarImg from 'assets/images/avatars/avatar-blank.png'
import TextareaField from 'components/form/TextareaField'

const formSchema = Yup.object().shape({
  rating: Yup.number().required('Bạn đánh giá khóa học bao nhiều sao ?'),
  content: Yup.string().required('Yêu cầu nội dung đánh giá!'),
})
const EnvaluateCourse = () => {
  return (
    <div className="mt-5">
      <div className="mb-4">
        <h2 className="card-label font-size-md text-primary mb-0">
          Để lại đánhh giá của bạn
        </h2>
        <p className="text-muted mt-3 font-weight-bold mb-0">
          Bạn đang nhận xét và đánh giá cho khóa học{' '}
          <span className="text-primary">"Khởi nghiệp 4.0"</span>
        </p>
      </div>
      <Formik
        initialValues={{
          rating: '',
          content: '',
        }}
        validationSchema={formSchema}
      >
        {({errors, touched}) => (
          <Form>
            <div className="d-flex flex-wrap align-items-center">
              <h3 className="mb-sm-0 mr-10 mb-2">Rating</h3>
              <Card className="mb-0 box-shadow-1">
                <div className="p-5">
                  <Rating
                    emptySymbol={
                      <Star size={32} fill="#babfc7" stroke="#babfc7" />
                    }
                    fullSymbol={
                      <Star size={32} fill="#ff9f43" stroke="#ff9f43" />
                    }
                    initialRating={2}
                  />
                  <ErrorMessage
                    name="rating"
                    component="div"
                    className="field-error text-danger"
                  />
                </div>
              </Card>
            </div>
            <div className="my-5">
              <h3>Nội dung đánh giá</h3>
              <Row>
                <Col md="1" sm="2" className="text-center d-none d-sm-block">
                  <Avatar img={avatarImg} size="xl" />
                </Col>
                <Col md="11" sm="10">
                  <Field
                    as="textarea"
                    name="content"
                    rows="4"
                    className={`form-control ${
                      errors.content && touched.content && 'is-invalid'
                    }`}
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="field-error text-danger"
                  />
                </Col>
                <Col lg="12" className="text-right mt-3">
                  <Button.Ripple color="primary">Gửi đánh giá</Button.Ripple>
                </Col>
              </Row>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EnvaluateCourse
