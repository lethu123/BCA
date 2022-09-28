import React, {useState} from 'react'
import {ArrowLeft, ArrowRight, MoreVertical, Plus} from 'react-feather'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Media,
  UncontrolledDropdown,
} from 'reactstrap'
import {Row} from 'reactstrap'
import Avatar from '@core/components/avatar'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

// ** image
import image from 'assets/images/icons/opera.png'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'

const NotificationCourse = ({stepper}) => {
  const [collapse, setCollapse] = useState(true)

  const formSchema = Yup.object().shape({
    title: Yup.string().required('Bạn phải nhập tiêu đề thông báo.'),
    content: Yup.string().required('Bạn phải nhập nội dung thông báo.'),
  })

  const toggleCollapse = () => setCollapse(!collapse)
  return (
    <div>
      <Row>
        <Col lg="12" className="mb-5">
          <Button.Ripple color="primary" onClick={toggleCollapse}>
            <Plus /> Tạo thông báo
          </Button.Ripple>

          <Collapse isOpen={collapse} className="mt-5">
            <Card>
              <CardBody>
                <Formik
                  initialValues={{
                    title: '',
                    content: '',
                  }}
                  validationSchema={formSchema}
                >
                  {() => (
                    <Form>
                      <TextField
                        type="text"
                        name="title"
                        label="Tiêu đề thông báo"
                        placeholder="Nhập tiêu đề thông báo"
                        isRequired
                      />
                      <TextareaField
                        maxLength={500}
                        isRequired
                        minRows={4}
                        name="content"
                        label="Nội dung thông báo"
                        placeholder="Nhậpnội dung thông báo"
                      />
                      <FormGroup className="text-right">
                        <Button.Ripple
                          type="submit"
                          color="success"
                          className="mr-2"
                        >
                          Tạo
                        </Button.Ripple>
                        <Button.Ripple
                          type="button"
                          onClick={toggleCollapse}
                          color="danger"
                        >
                          Hủy
                        </Button.Ripple>
                      </FormGroup>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Collapse>
        </Col>
        <Col lg="6">
          <Card className="card-browser-states">
            <CardHeader>
              <Media>
                <Avatar img={image} />
                <div className="ml-2">
                  <CardTitle tag="h4" className="font-weight-bolder">
                    Thông báo khóa học 07/07!
                  </CardTitle>
                  <CardText className="font-small-3 ">
                    <span className="text-muted">6-7-2021 bởi</span>
                    <span className="ml-1">Bùi Quốc Anh</span>
                  </CardText>
                </div>
              </Media>
              <UncontrolledDropdown className="chart-dropdown">
                <DropdownToggle
                  color=""
                  className="bg-transparent btn-sm border-0 p-50"
                >
                  <MoreVertical size={18} className="cursor-pointer" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="w-100">Last 28 Days</DropdownItem>
                  <DropdownItem className="w-100">Last Month</DropdownItem>
                  <DropdownItem className="w-100">Last Year</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardHeader>
            <CardBody>
              Design high-quality designs, graphics, mock-ups and layouts for
              both new and existing web sites/ web applications / mobile
              applications.
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-browser-states">
            <CardHeader>
              <Media>
                <Avatar img={image} />
                <div className="ml-2">
                  <CardTitle tag="h4" className="font-weight-bolder">
                    Thông báo khóa học 07/07!
                  </CardTitle>
                  <CardText className="font-small-3 ">
                    <span className="text-muted">6-7-2021 bởi</span>
                    <span className="ml-1">Bùi Quốc Anh</span>
                  </CardText>
                </div>
              </Media>
              <UncontrolledDropdown className="chart-dropdown">
                <DropdownToggle
                  color=""
                  className="bg-transparent btn-sm border-0 p-50"
                >
                  <MoreVertical size={18} className="cursor-pointer" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="w-100">Last 28 Days</DropdownItem>
                  <DropdownItem className="w-100">Last Month</DropdownItem>
                  <DropdownItem className="w-100">Last Year</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardHeader>
            <CardBody>
              Design high-quality designs, graphics, mock-ups and layouts for
              both new and existing web sites/ web applications / mobile
              applications.
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-browser-states">
            <CardHeader>
              <Media>
                <Avatar img={image} />
                <div className="ml-2">
                  <CardTitle tag="h4" className="font-weight-bolder">
                    Thông báo khóa học 07/07!
                  </CardTitle>
                  <CardText className="font-small-3 ">
                    <span className="text-muted">6-7-2021 bởi</span>
                    <span className="ml-1">Bùi Quốc Anh</span>
                  </CardText>
                </div>
              </Media>
              <UncontrolledDropdown className="chart-dropdown">
                <DropdownToggle
                  color=""
                  className="bg-transparent btn-sm border-0 p-50"
                >
                  <MoreVertical size={18} className="cursor-pointer" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="w-100">Last 28 Days</DropdownItem>
                  <DropdownItem className="w-100">Last Month</DropdownItem>
                  <DropdownItem className="w-100">Last Year</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardHeader>
            <CardBody>
              Design high-quality designs, graphics, mock-ups and layouts for
              both new and existing web sites/ web applications / mobile
              applications.
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-center">
        <Button.Ripple
          color="secondary"
          className="btn-prev"
          outline
          type="button"
          onClick={() => stepper.previous()}
        >
          <ArrowLeft
            size={14}
            className="align-middle mr-sm-3 mr-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          size="sm"
          type="button"
          color="primary"
          className="btn-next ml-3"
          onClick={() => stepper.next()}
        >
          <span className="align-middle d-sm-inline-block d-none">Tiếp</span>
          <ArrowRight
            size={14}
            className="align-middle ml-sm-3 ml-0"
          ></ArrowRight>
        </Button.Ripple>
        <Button.Ripple size="sm" type="button" color="danger" className="ml-3">
          <span className="align-middle d-sm-inline-block d-none">Hủy</span>
        </Button.Ripple>
      </div>
    </div>
  )
}

export default NotificationCourse
