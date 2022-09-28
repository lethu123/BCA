import React, {useEffect, useState} from 'react'
// *** Third Libary
import {Card, CardBody, Col, Row, FormGroup, Button} from 'reactstrap'
import {Formik, Form} from 'formik'

import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import {Save} from 'react-feather'
import {UserMutation} from '@services/profile'

const Overview = ({user}) => {
  const {mutate} = UserMutation.useUpdateProfileUser()
  const [initialState, setInitialState] = useState({
    name: '',
    link: '',
    address: '',
    email: '',
    phone_number: '',
    story: '',
    profile_id: '',
  })

  useEffect(() => {
    if (user) {
      setInitialState({
        name: user.name,
        link: user.link,
        address: user.address,
        email: user.email,
        phone_number: user.phone_number,
        story: user.story,
        profile_id: user.profile_id,
      })
    }
  }, [user])

  // const formSchema = Yup.object().shape({
  //   name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
  //   link: Yup.string().required('Bạn phải nhập link'),
  //   address: Yup.string().required('Bạn phải nhập địa chỉ'),
  //   email: Yup.string().required('Bạn phải nhập email'),
  //   phone_number: Yup.string().required('Bạn phải nhập số điện thoại'),
  //   story: Yup.string().required('Bạn phải nhập số điện thoại'),
  // })

  return (
    <div>
      <Card>
        <CardBody>
          <Formik
            initialValues={initialState}
            enableReinitialize={true}
            // validationSchema={formSchema}
          >
            {({isValid, values, dirty}) => (
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <TextField
                        type="text"
                        name="name"
                        size="md"
                        label="Tên hiển thị"
                        placeholder="Tên hiển thị ..."
                        isRequired
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col md="6">
                    <FormGroup>
                      <TextField
                        type="text"
                        name="link"
                        size="md"
                        label="Link mạng xã hội BCA"
                        placeholder="Link mạng xã hội của bạn ..."
                        isRequired
                      />
                    </FormGroup>
                  </Col> */}
                  <Col md="6">
                    <TextField
                      type="text"
                      name="address"
                      size="md"
                      label="Địa chỉ"
                      placeholder="Nhập địa chỉ  ..."
                      isRequired
                    />
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <TextField
                        type="text"
                        name="email"
                        size="md"
                        label="Email"
                        placeholder="Nhập Email ..."
                        disabled
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <TextField
                        type="text"
                        name="phone_number"
                        size="md"
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại ..."
                        isRequired
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <TextareaField
                        maxLength={100}
                        minRows={1}
                        name="story"
                        label="Tiểu sử"
                        placeholder="Nhập tiểu sử của bạn ..."
                      />
                    </FormGroup>
                  </Col>
                  <FormGroup className="mb-0 mt-2 w-100 text-center">
                    <Button.Ripple
                      disabled={!dirty}
                      color="primary"
                      type="submit"
                      onClick={() => {
                        mutate({
                          ...values,
                          uid: user.uid,
                        })
                      }}
                    >
                      <Save size={15} /> Lưu
                    </Button.Ripple>
                  </FormGroup>
                </Row>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </div>
  )
}

export default Overview
