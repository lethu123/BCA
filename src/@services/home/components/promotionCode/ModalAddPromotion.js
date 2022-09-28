import React, {useState} from 'react'
import {Save, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Row,
  Col,
  Label,
  CustomInput,
  Input,
} from 'reactstrap'
// *** Third Libary
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

import TextField from 'components/form/TextField'
import CheckboxField from 'components/form/CheckboxField'
import RadioField from 'components/form/RadioField'
import DatePickerField from 'components/form/DatePickerField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalAddPromotion = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    promotionCode: '',
    valuePromotionCode: '',
    valuePromotionCodeMax: '',
    description: '',
    type: 0,
  }
  const formSchema = Yup.object().shape({
    promotionCode: Yup.string().required('Bạn phải nhập mã khuyến mãi'),
    valuePromotionCode: Yup.string().required(
      'Bạn phải nhập giá trị khuyến mãi',
    ),
    valuePromotionCodeMax: Yup.string().required(
      'Bạn phải nhập giá trị khuyến mãi',
    ),
    description: Yup.string().required('Bạn phải nhập mô tả sản phẩm'),
    type: Yup.number().min(1, 'Bạn phải chọn loại'),
  })
  return (
    <div>
      <Modal
        // scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          <span className="text-primary">Thêm mới mã khuyến mãi</span>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
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
                  <FormGroup>
                    <div className="d-flex justify-content-lg-between">
                      <Label for="promotionCode">
                        Mã khuyến mãi <span style={{color: '#EA5455'}}>*</span>
                      </Label>
                      <p className="text-primary cursor-pointer">
                        Sinh mã ngẫu nhiên
                      </p>
                    </div>
                    <TextField
                      type="text"
                      name="promotionCode"
                      size="md"
                      // label="Tên"
                      placeholder="Mã khuyến mãi ..."
                      isRequired
                    />
                    {/* <CheckboxField
                      type="inline" //inline || list
                      name="checkbox"
                      // color="warning"
                      // outline
                      inline
                      options={[
                        {
                          name: 'promotion',
                          label: 'Áp dụng với chương trình khuyến mãi khác',
                        },
                      ]}
                    /> */}
                    <CustomInput
                      type="checkbox"
                      className="custom-control-secondary"
                      id="secondary"
                      label="Áp dụng với chương trình khuyến mãi khác"
                      name="promotion"
                      inline
                    />
                  </FormGroup>
                  <FormGroup>
                    <RadioField
                      name="radio"
                      label="Loại khuyến mãi"
                      // color="warning"
                      // outline
                      // accent
                      inline
                      isRequired
                      options={[
                        {
                          value: 'percent',
                          label: 'Theo phần trăm',
                          checked: true,
                        },
                        {
                          value: 'money',
                          label: 'Theo số tiền',
                        },
                        {
                          value: 'freeship',
                          label: 'Miễn phí vận chuyển',
                        },
                      ]}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="value">
                      Giá trị
                      <span style={{color: '#EA5455'}}>*</span>
                    </Label>
                    <Row className="px-0 mx-0">
                      <Col md="6">
                        <FormGroup>
                          <TextField
                            type="text"
                            name="valuePromotionCode"
                            size="md"
                            label="Giá trị khuyến mãi(%)"
                            placeholder="Giá trị khuyến mãi ..."
                            isRequired
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <TextField
                            type="text"
                            name="valuePromotionCodeMax"
                            size="md"
                            label="Giá trị giảm tối đa(tùy chọn)"
                            placeholder="Giá trị giảm tối đa ..."
                            isRequired
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <RadioField
                      name="radio"
                      label="Áp dụng cho"
                      // color="warning"
                      // outline
                      // accent
                      inline
                      options={[
                        {
                          value: 'Tất cả sản phẩm',
                          label: 'Tất cả sản phẩm',
                          checked: true,
                        },
                        {
                          value: 'Danh mục sản phẩm',
                          label: 'Danh mục sản phẩm',
                        },
                        {
                          value: 'Sản phẩm',
                          label: 'Sản phẩm',
                        },
                      ]}
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <RadioField
                      name="condition"
                      label=" Điều kiện áp dụng"
                      // color="warning"
                      // outline
                      // accent

                      options={[
                        {
                          value: 'Không có',
                          label: 'Không có',
                          checked: true,
                        },
                        {
                          value: 'Tổng giá trị đơn hàng tối thiểu',
                          label: 'Tổng giá trị đơn hàng tối thiểu',
                        },
                        {
                          value:
                            'Tổng giá trị sản phẩm được khuyến mãi tối thiểu',
                          label:
                            'Tổng giá trị sản phẩm được khuyến mãi tối thiểu',
                        },
                        {
                          value:
                            'Tổng số lượng sản phẩm được khuyến mãi tối thiểu',
                          label:
                            'Tổng số lượng sản phẩm được khuyến mãi tối thiểu',
                        },
                      ]}
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <RadioField
                      name="customer"
                      label="Nhóm khách hàng"
                      // color="warning"
                      // outline
                      // accent
                      inline
                      options={[
                        {
                          value: 'Tất cả',
                          label: 'Tất cả',
                          checked: true,
                        },
                        {
                          value: 'Nhóm khách hàng đã lưu',
                          label: 'Nhóm khách hàng đã lưu',
                        },
                      ]}
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <CheckboxField
                      type="inline" //inline || list
                      name="checkbox"
                      label="Giới hạn sử dụng"
                      // color="warning"
                      // outline
                      inline
                      options={[
                        {
                          name: 'Giới hạn số lần mã giảm giá được áp dụng',
                          label: 'Giới hạn số lần mã giảm giá được áp dụng',
                        },
                        {
                          name: 'Giới hạn mỗi khách hàng chỉ được sử dụng mã giảm giá này 1 lần',
                          label:
                            'Giới hạn mỗi khách hàng chỉ được sử dụng mã giảm giá này 1 lần',
                        },
                      ]}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>
                      Thời gian<span style={{color: '#EA5455'}}>*</span>
                    </Label>
                    <Row className="px-0 mx-0">
                      <Col md="6">
                        <DatePickerField
                          name="startTime"
                          label="Thời gian bắt đầu"
                          options={{
                            time: {
                              enableTime: true,
                              noCalendar: true,
                              dateFormat: 'H:i',
                              time_24hr: true,
                            },
                          }}
                          data-enable-time
                        />
                      </Col>
                      <Col md="6">
                        <DatePickerField
                          name="endTime"
                          label="Thời gian kết thúc"
                          data-enable-time
                          options={{
                            time: {
                              enableTime: true,
                              noCalendar: true,
                              dateFormat: 'H:i',
                              time_24hr: true,
                            },
                          }}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              )}
            </Formik>
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Hủy
          </Button>{' '}
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            <Save size={16} /> Tạo
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalAddPromotion
