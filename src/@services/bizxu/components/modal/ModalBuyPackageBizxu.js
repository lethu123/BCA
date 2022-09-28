import {X} from 'react-feather'
import {
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

// *** Custom Components
import NumberInput from '@core/components/number-input'
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** images
import bizxu from 'assets/images/datacenter/bizxu-gb.png'

// *** mutation
import {BizxuMutation} from '@services/bizxu'
import {formatCurrencyVN} from '@services/ultils'

const formSchema = Yup.object().shape({
  amount: Yup.number().required('Yêu cầu nhập số lượng.').nullable(),
})

const ModalBuyPackageBizxu = ({modal, toggleModal, bizxuPackage}) => {
  const {mutate: buyBizxuPackage} = BizxuMutation.useBuyBizxuPackage()

  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-lg"
    >
      <Formik
        initialValues={{
          amount: 1,
          package_id: bizxuPackage?.id,
        }}
        validationSchema={formSchema}
        enableReinitialize
        onSubmit={values => {
          const dataSubmit = {
            ...values,
            amount: +values.amount,
          }
          buyBizxuPackage(dataSubmit)
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
              <span className="text-primary">Mua gói BizXu</span>
            </ModalHeader>
            <ModalBody>
              <PerfectScrollbar>
                <div className="container-fluid p-0">
                  <h5>Phương thức thanh toán</h5>
                  <Row className="border-bottom m-0">
                    <Col lg="6" md="12" className="mb-2">
                      <Card
                        className="mb-0 h-100"
                        style={{
                          backgroundColor: '#eee',
                        }}
                      >
                        <CardBody>
                          <p className="mb-0">Gói mua</p>
                          <div
                            className="d-flex align-items-center  my-1   p-2"
                            style={{
                              backgroundColor: '#F2FAFA',
                              borderRadius: '25px',
                            }}
                          >
                            <img
                              src={bizxu}
                              alt="images"
                              className="img-fluid rounded-circle mr-1"
                              width="50px"
                              height="50px"
                            />
                            <div className="user-info text-truncate font-weight-bolder">
                              {bizxuPackage.name}
                              <p
                                className="text-danger mb-0 text-right"
                                style={{fontSize: 12}}
                              >
                                {bizxuPackage.sales} Bizxu
                              </p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-3 m-0">
                    <Col lg="5" md="12">
                      <div className="d-flex mb-1 justify-content-between align-items-center">
                        <span>Giá gói: </span>
                        <small className="ml-auto mr-1">
                          <strike>
                            {formatCurrencyVN(bizxuPackage.price_history)}{' '}
                            {/* {bizxuPackage.currency_type_info?.name} */}
                          </strike>{' '}
                        </small>{' '}
                        <h4 className="text-primary mb-0">
                          {formatCurrencyVN(bizxuPackage.price)}{' '}
                          {/* {bizxuPackage.currency_type_info?.name} */}
                        </h4>
                      </div>
                      <div className="d-flex">
                        <div>
                          <NumberInput
                            min={1}
                            max={10000}
                            size="sm"
                            readOnly={false}
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
                    <Col lg="7" md="12">
                      <Row className="align-items-center">
                        <Col lg="6" md="6" className="text-right">
                          <div>Tạm tính</div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="text-right font-weight-bolder">
                            {formatCurrencyVN(
                              values.amount * bizxuPackage.price,
                            )}{' '}
                            {/* {bizxuPackage.currency_type_info?.name} */}
                          </div>
                        </Col>
                      </Row>
                      <Row className="align-items-center my-2">
                        <Col lg="6" md="6" className="text-right">
                          <div>Phí giao dịch:</div>
                        </Col>
                        <Col lg="6" md="6" className="text-right">
                          <div>Miễn phí</div>
                        </Col>
                      </Row>
                      {/* <Row className="align-items-center">
                        <Col lg="6" md="6" className="text-right text-primary">
                          <div>Mã giảm giá:</div>
                        </Col>
                        <Col lg="6" md="6">
                          <TextField
                            placeholder="Nhập mã giảm giá"
                            isRequired={false}
                            name="discount_code"
                          />
                        </Col>
                      </Row> */}
                      <Row className="align-items-center">
                        <Col lg="6" md="6" className="text-right">
                          <div>Tổng thanh toán:</div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="text-primary font-weight-bolder text-right">
                            {formatCurrencyVN(
                              values.amount * bizxuPackage.price,
                            )}{' '}
                            {/* {bizxuPackage.currency_type_info?.name} */}
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </PerfectScrollbar>
            </ModalBody>
            <ModalFooter>
              <Row className="w-100 justify-content-center">
                <Col lg="4">
                  <Button
                    color="primary"
                    size="sm"
                    disabled={!isValid}
                    type="submit"
                    block
                  >
                    Mua ngay
                  </Button>
                </Col>
                <Col lg="4">
                  <Button
                    size="sm"
                    color="secondary"
                    type="button"
                    onClick={toggleModal}
                    outline
                    block
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

export default ModalBuyPackageBizxu
