import {X} from 'react-feather'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'

import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {Bizxu} from 'components/icon'

// *** Custom Components
import NumberInput from '@core/components/number-input'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {formatCurrency} from '@services/ultils'

// *** mutation
import {DataProjectMutation} from '@services/project'
import Avatar from '@core/components/avatar'

// ** images
const coverDefault =
  'https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2019/07/doanh-nghiep.png'

const formSchema = Yup.object().shape({
  amount: Yup.number().required('Required'),
})
const BuyDataUser = ({modal, toggleModal, project}) => {
  const {mutate: buyData} = DataProjectMutation.useBuyProjectData()
  if (!project) return null
  const max = project.c_data - project.c_data_buyed
  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-lg"
    >
      <Formik
        initialValues={{amount: 1, project_id: project.id}}
        validationSchema={formSchema}
        onSubmit={values => {
          buyData(values)
          toggleModal()
        }}
      >
        {({isValid, setFieldValue, values}) => (
          <Form>
            <ModalHeader
              close={
                <X className="cursor-pointer" size={20} onClick={toggleModal} />
              }
              toggle={toggleModal}
            >
              <span className="text-primary">Mua Dữ liệu</span>
            </ModalHeader>
            <ModalBody>
              <PerfectScrollbar>
                <div className="container-fluid p-0">
                  <Row className="border-bottom m-0">
                    <div className="m-auto">
                      <Card
                        style={{
                          backgroundColor: '#eee',
                        }}
                      >
                        <CardBody>
                          <p className="mb-0">Dự án</p>
                          <div
                            className="d-flex align-items-center  my-1 p-2"
                            style={{
                              backgroundColor: '#F2FAFA',
                              borderRadius: '10px',
                            }}
                          >
                            <Avatar
                              img={project.pro_avatar || coverDefault}
                              className=" "
                              onError={e => {
                                e.target.onerror = null
                                e.target.src = coverDefault
                              }}
                              size="lg"
                            />
                            <div className="user-info font-weight-bolder text-truncate ml-1">
                              {project.pro_name}
                              {project.partner_name_or_id && (
                                <p
                                  className="text-danger mb-0"
                                  style={{fontSize: 12}}
                                >
                                  Đối tác: {project.partner_name_or_id}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </Row>
                  <Row className="border-bottom py-2 m-0">
                    {project.pro_project_type_info && (
                      <>
                        <Col lg="3" md="6" sm="12" className=" ">
                          <span>Loại dự án</span>
                        </Col>
                        <Col md="6" lg="9" sm="12" className=" ">
                          <Badge color="light-primary">
                            {project.pro_project_type_info.name}
                          </Badge>
                        </Col>
                      </>
                    )}

                    {project.pro_project_kind_info && (
                      <>
                        <Col lg="3" md="6" sm="12" className=" ">
                          <span>Kiểu dự án</span>
                        </Col>
                        <Col md="6" lg="9" sm="12" className=" ">
                          <Badge color="light-info">
                            {project.pro_project_kind_info.name}
                          </Badge>
                        </Col>
                      </>
                    )}

                    <Col lg="3" md="6" sm="12" className=" ">
                      <span>Tổng liên hệ</span>
                    </Col>
                    <Col md="6" lg="9" sm="12" className=" ">
                      <span className="font-weight-bolder">
                        {project.c_data}
                      </span>{' '}
                      <span>Liên hệ</span>
                    </Col>
                    <Col lg="3" md="6" sm="12" className=" ">
                      <span>Liên hệ đang có</span>
                    </Col>
                    <Col md="6" lg="9" sm="12" className=" ">
                      <span className="font-weight-bolder">
                        {project.c_data - project.c_data_buyed}
                      </span>{' '}
                      <span>Liên hệ</span>
                    </Col>
                    <Col lg="3" md="6" sm="12" className=" ">
                      <span>Giá mỗi liên hệ</span>
                    </Col>
                    <Col md="6" lg="9" sm="12" className=" ">
                      <span className="text-primary font-weight-bolder">
                        {project.pro_price_per_data} BizXu{' '}
                        <Bizxu color="primary" />
                      </span>
                    </Col>
                  </Row>
                  <Row className="mt-3 m-0">
                    <Col lg="12">
                      <div>Số liên hệ cần mua</div>
                      <p className="text-danger">
                        <small className="mr-5">Lượt mua tối đa:</small>{' '}
                        <small>{max > 200 ? 200 : max} liên hệ</small>
                      </p>
                    </Col>
                    <Col lg="5" md="12" className="mb-1">
                      <div className="d-flex">
                        <div>
                          <NumberInput
                            value={values.amount}
                            min={1}
                            max={max > 200 ? 200 : max}
                            size="sm"
                            onChange={number => setFieldValue('amount', number)}
                          />
                          <ErrorMessage
                            name="amount"
                            component="div"
                            className="field-error text-danger"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col lg="7" md="12" className="mb-1">
                      <Row className="align-items-center">
                        <Col lg="6" md="6" className="text-md-right">
                          <div className="mb-1">Tổng thanh toán:</div>
                        </Col>
                        <Col lg="6" md="6">
                          <Button.Ripple
                            className="p-1"
                            color="secondary"
                            size="sm"
                            block
                            type="button"
                          >
                            {formatCurrency(
                              values.amount * project.pro_price_per_data,
                            )}{' '}
                            BizXu
                          </Button.Ripple>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </PerfectScrollbar>
            </ModalBody>
            <ModalFooter>
              <Row className="w-100 justify-content-start">
                <Col md="6">
                  <Button
                    className="p-1"
                    color="primary"
                    size="sm"
                    disabled={!isValid}
                    type="submit"
                    block
                  >
                    Mua ngay
                  </Button>
                </Col>
                <Col md="6">
                  <Button
                    className="p-1"
                    size="sm"
                    color="secondary"
                    type="button"
                    onClick={toggleModal}
                    block
                    outline
                  >
                    Hủy
                  </Button>
                </Col>
              </Row>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default BuyDataUser
