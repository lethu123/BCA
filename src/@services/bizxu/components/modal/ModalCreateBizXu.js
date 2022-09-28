import {Formik, Form, ErrorMessage} from 'formik'
import TextField from 'components/form/TextField'
import * as Yup from 'yup'
import React, {useEffect, useState} from 'react'
import {X} from 'react-feather'
import Cleave from 'cleave.js/react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  FormGroup,
} from 'reactstrap'

// ** component
import RadioField from 'components/form/RadioField'
import SelectField from 'components/form/SelectField'

// ** mutation
import {BizxuMutation} from '@services/bizxu'

const formSchema = Yup.object().shape({
  name_bizxu: Yup.string().required('không được bỏ trống'),
  sales: Yup.number().required('không được bỏ trống').nullable(),
  price: Yup.number().required('không được bỏ trống').nullable(),
  price_history: Yup.number().required('không được bỏ trống').nullable(),
})

const CurrencyTypeOptions = [
  {
    label: 'VNĐ',
    value: 1,
    id: 1,
  },
]

const ModalCreateBizXu = ({toggleModal, modal, info = null}) => {
  const [init, setInit] = useState({
    id: null,
    is_active: true,
    name_bizxu: '',
    sales: null,
    price: '',
    price_history: '',
    currency_type: null,
  })
  const {mutate: createBizxu} = BizxuMutation.useCreateBizxuPackage()
  const {mutate: updateBizxu} = BizxuMutation.useUpdateBizxuPackage()

  useEffect(() => {
    if (info) {
      setInit({
        id: info.id,
        is_active: info.is_active,
        name_bizxu: info.name,
        sales: info.sales,
        price: info.price,
        price_history: info.price_history,
        currency_type: CurrencyTypeOptions?.find(
          it => it.id === info.currency_type_info?.id,
        ),
      })
    }
  }, [info])
  //function
  const CloseBtn = (
    <X className="cursor-pointer" size={20} onClick={toggleModal} />
  )

  return (
    <div>
      <Modal
        // scrollable
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={toggleModal} close={CloseBtn}>
          Tạo gói BizXu
        </ModalHeader>

        <ModalBody>
          <Formik
            initialValues={init}
            enableReinitialize
            validationSchema={formSchema}
            onSubmit={values => {
              console.log(values)
              const dataSubmit = {
                id: values.id,
                is_active: values.is_active,
                name: values.name_bizxu,
                sales: +values.sales,
                price: +values.price,
                price_history: +values.price_history,
              }
              if (values.id) {
                updateBizxu(dataSubmit)
              } else createBizxu(dataSubmit)

              toggleModal()
            }}
          >
            {({isValid, dirty, values, setFieldValue}) => (
              <Form className="px-2">
                <RadioField
                  name="is_active"
                  label="Trạng thái"
                  inline
                  options={[
                    {
                      value: true,
                      label: 'Active',
                      checked: values.is_active,
                    },
                    {
                      value: false,
                      label: 'Deactive',
                      checked: !values.is_active,
                    },
                  ]}
                />

                <Row>
                  <Col md="8">
                    <TextField
                      label="Tên gói BizXu"
                      isRequired
                      name="name_bizxu"
                      type="text"
                    />
                  </Col>
                  <Col md="4">
                    <TextField
                      label="Số lượng BizXu"
                      isRequired
                      name="sales"
                      type="number"
                    />
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        htmlFor="price"
                        className="font-weight-bolder text-dark"
                      >
                        Giá bán <sup style={{color: '#FF0000'}}>*</sup>
                      </label>
                      <Cleave
                        onChange={e => {
                          setFieldValue('price', e.target.rawValue)
                        }}
                        className="form-control"
                        options={{
                          numeral: true,
                          numeralThousandsGroupStyle: 'thousand',
                        }}
                        value={values.price}
                        id="numeral-formatting-price"
                      />
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label
                        htmlFor="price_history"
                        className="font-weight-bolder text-dark"
                      >
                        Giá gốc <sup style={{color: '#FF0000'}}>*</sup>
                      </label>
                      <Cleave
                        onChange={e => {
                          setFieldValue('price_history', e.target.rawValue)
                        }}
                        className="form-control"
                        options={{
                          numeral: true,
                          numeralThousandsGroupStyle: 'thousand',
                        }}
                        value={values.price_history}
                        id="numeral-formatting-price_history"
                      />
                      <ErrorMessage
                        name="price_history"
                        component="div"
                        className="field-error text-danger"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <SelectField
                      name="currency_type"
                      label="Đơn vị tiền tệ"
                      defaultValue={CurrencyTypeOptions[0]}
                      options={CurrencyTypeOptions}
                    />
                  </Col>
                </Row>

                <FormGroup className="mb-0 mt-2 w-100 text-center">
                  <Button.Ripple
                    disabled={!(isValid && dirty)}
                    color="primary"
                    type="submit"
                    className="mr-2"
                  >
                    Tạo gói BizXu
                  </Button.Ripple>
                  <Button.Ripple
                    color="secondary"
                    outline
                    onClick={toggleModal}
                  >
                    Hủy
                  </Button.Ripple>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalCreateBizXu
