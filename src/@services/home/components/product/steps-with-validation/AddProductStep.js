import {useState} from 'react'
import {Fragment} from 'react'
import {
  Label,
  FormGroup,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Alert,
  Input,
  Button,
} from 'reactstrap'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'
import {ChevronRight} from 'react-feather'
import './Step.style.scss'

const AddProductStep = ({stepper, type}) => {
  let initialState = {
    name: '',
    description: '',
    type: 0,
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    description: Yup.string().required('Bạn phải nhập mô tả sản phẩm'),
    type: Yup.number().min(1, 'Bạn phải chọn loại'),
  })

  const group = [
    {id: 1, name: 'Mỹ phẩm', sub: [{id: 1, name: 'Đẹp da'}]},
    {id: 2, name: 'Thuốc', sub: [{id: 1, name: 'Đẹp da'}]},
    {id: 3, name: 'Thuốc bổ trợ', sub: [{id: 1, name: 'Thể lực'}]},
    {
      id: 4,
      name: 'Sâm',
      sub: [
        {id: 1, name: 'Đẹp da'},
        {id: 2, name: 'Huyết áp'},
        {id: 3, name: 'Bổ thận'},
        {id: 1, name: 'Sức khỏe'},
        {id: 2, name: 'Tim mạch'},
        {id: 3, name: 'Mắt'},
      ],
    },
  ]
  const [typeCategory, setTypeCategory] = useState(group[0])
  const [choose, setChoose] = useState(group[0].sub[0].name)
  const [active, setActive] = useState({
    activeType: 0,
    activeProduct: 0,
  })

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0 text-primary">Thêm sản phẩm mới</h5>
      </div>
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
                  <Label for="name">
                    Tên sản phẩm <span style={{color: '#EA5455'}}>*</span>
                  </Label>
                  <Field
                    placeholder="Tên sản phẩm ..."
                    name="name"
                    id="name"
                    className={`form-control ${
                      errors.name && touched.name && 'is-invalid'
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="field-error text-danger"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="type">
                    Loại thuốc <span style={{color: '#EA5455'}}>*</span>
                  </Label>
                  <Select
                    placeholder="Chọn loại thuốc ..."
                    theme={selectThemeColors}
                    classNamePrefix="select"
                    name="type"
                    options={[
                      {id: 1, label: 'Bổ não', value: 'Bổ não'},
                      {id: 2, label: 'Thể lực', value: 'Thể lực'},
                      {id: 3, label: 'Sức khỏe', value: 'Sức khỏe'},
                    ]}
                    onChange={e => {
                      setFieldValue('type', e.id)
                    }}
                    // styles={colourStyles}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label for="group">
                    Nhóm hàng <span style={{color: '#EA5455'}}>*</span>
                  </Label>
                  <ListGroup>
                    {group.map((item, idx) => (
                      <ListGroupItem
                        className={`d-flex justify-content-between align-items-center cursor-pointer ${
                          active.activeType === idx ? 'active' : ''
                        }`}
                        key={item.id}
                        onClick={() => {
                          setTypeCategory(item)
                          setChoose(item.sub[0].name)
                          setActive({
                            ...active,
                            activeType: idx,
                            activeProduct: 0,
                          })
                        }}
                      >
                        <span>{item.name}</span>
                        <ChevronRight
                          size={18}
                          color={`${active.activeType === idx && '#28C76F'}`}
                        />
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </FormGroup>
              </Col>
              {typeCategory && typeCategory.sub.length > 0 ? (
                <Col md="6">
                  <FormGroup>
                    <div style={{maxHeight: 200, overflowY: 'scroll'}}>
                      <ListGroup style={{marginTop: 28}}>
                        {typeCategory && typeCategory.sub.length > 0 ? (
                          typeCategory.sub.map((item, idx) => (
                            <ListGroupItem
                              key={item.id}
                              onClick={() => {
                                setChoose(item.name)
                                setActive({
                                  ...active,
                                  activeProduct: idx,
                                })
                              }}
                              className={`cursor-pointer ${
                                active.activeProduct === idx
                                  ? 'activeProduct'
                                  : ''
                              }`}
                            >
                              {item.name}
                            </ListGroupItem>
                          ))
                        ) : (
                          <Alert color="primary">
                            <div className="alert-body">Chưa phân loại</div>
                          </Alert>
                        )}
                      </ListGroup>
                    </div>
                  </FormGroup>
                  {/* <div className="d-flex">
                    <p className="mr-2  text-danger font-weight-bolder fs-2">
                      Đã chọn:{' '}
                    </p>
                    <div style={{color: '#1EAC52'}}>
                      <span className="fs-4">
                        {typeCategory && typeCategory.name}{' '}
                      </span>
                      <ChevronRight size={16} />
                    </div>
                    <p style={{color: '#1EAC52'}} className="fs-4 mt-1 ml-1">
                      {choose}
                    </p>
                  </div> */}
                </Col>
              ) : (
                <Col md="6" style={{marginTop: 28}}>
                  <Alert color="primary">
                    <div className="alert-body">Chưa phân loại</div>
                  </Alert>
                </Col>
              )}
              <div className="addProductStep">
                <FormGroup>
                  <Label for="description">
                    Mô tả sản phẩm <span style={{color: '#EA5455'}}>*</span>
                  </Label>

                  <Input
                    className={`form-control ${
                      errors.description && touched.description && 'is-invalid'
                    }`}
                    type="textarea"
                    rows={5}
                    id="description"
                    name="description"
                    placeholder="Mô tả về sản phẩm ..."
                    value={values.description}
                    onChange={e => setFieldValue('description', e.target.value)}
                    onBlur={() => setFieldTouched('description', '')}
                  />

                  {values.description === '' && touched.description === '' && (
                    <div className="text-danger mt-3">{errors.description}</div>
                  )}
                </FormGroup>
              </div>
            </Row>
            <div className="text-right">
              <Button.Ripple
                type="submit"
                color="success"
                disabled={!(isValid && dirty)}
                onClick={() => {
                  if (isValid) {
                    stepper.next()
                  }
                }}
              >
                Tiếp tục <ChevronRight size={16} />
              </Button.Ripple>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  )
}

export default AddProductStep
