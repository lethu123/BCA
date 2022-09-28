import React from 'react'
import {
  Card,
  Col,
  FormGroup,
  Label,
  Row,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import img from 'assets/images/portrait/small/avatar-s-1.jpg'
// *** Components
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import SelectField from 'components/form/SelectField'

const optionSelect = [
  {value: 'quantam', label: 'Quan tâm'},
  {value: 'yeuthich', label: 'Yêu thích'},
  {value: 'tiepcan', label: 'Tiếp Cận'},
]
const DetailNotification = () => {
  let initialState = {
    name: '',
    content: '',
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Tên thông báo không được rỗng'),
    content: Yup.string().required('Nội dung thông báo không được rỗng'),
  })
  return (
    <div className="mt-3">
      <Row className="d-flex justify-content-between align-items-center">
        <Col className="d-flex" lg={6}>
          <Card className="p-5 mr-3">
            <h6>Thành viên đã xem</h6>
            <h4 className="text-success">328 lượt</h4>
            <p className="mb-0">cập nhật: 30/4/2021</p>
          </Card>

          <Card className="p-5">
            <h6>Chưa xem</h6>
            <h4 className="text-danger">150 lượt</h4>
            <p className="mb-0">cập nhật: 30/4/2021</p>
          </Card>
        </Col>
        <Col lg={6} className="text-lg-right text-left mb-3">
          <UncontrolledButtonDropdown direction="left">
            <DropdownToggle color="primary" caret>
              Lọc
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#" tag="a">
                7 ngày qua
              </DropdownItem>
              <DropdownItem href="#" tag="a">
                15 ngày qua
              </DropdownItem>
              <DropdownItem href="#" tag="a">
                30 ngày qua
              </DropdownItem>
              <DropdownItem href="#" tag="a">
                60 ngày qua
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Col>
      </Row>
      <div>
        <Formik
          initialValues={initialState}
          enableReinitialize={true}
          validationSchema={formSchema}
        >
          {({
            values,
            setFieldValue,
            setFieldTouched,
            isValid,
            isSubmitting,
            dirty,
            errors,
            touched,
          }) => (
            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <TextField
                      type="text"
                      name="name"
                      size="md"
                      label="Tên thông báo"
                      placeholder="Tên thông báo ..."
                      isRequired
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <SelectField
                      name="select"
                      label="Danh mục gửi"
                      options={optionSelect}
                      defaultValue={optionSelect[0]}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <TextareaField
                      maxLength={200}
                      name="content"
                      label="Nội dung thông báo"
                      placeholder="Nhập nội dung thông báo ..."
                      minRows={3}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>ID thông báo</Label>
                    <Field
                      type="number"
                      name="id"
                      id="id"
                      className={`form-control `}
                      disabled
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="description">Người tạo thông báo </Label>
                    <div className="d-flex align-items-center">
                      <img
                        src={img}
                        alt="images"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          marginRight: 7,
                        }}
                      />
                      <p className="mb-0">Admin: Nguyễn Khắc Vũ</p>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        <p>
          Ngày sửa đổi lần cuối: 20/11/2021 bởi{' '}
          <span className="cursor-pointer text-primary">Nguyễn Khắc Vũ</span>{' '}
        </p>
      </div>
    </div>
  )
}

export default DetailNotification
