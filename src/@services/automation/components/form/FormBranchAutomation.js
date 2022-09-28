import React, {useState} from 'react'
import {ModalFooter, Button, Row, Col, FormGroup, Alert} from 'reactstrap'
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextField from 'components/form/TextField'
import {toast} from 'react-toastify'
import {AlertCircle} from 'react-feather'
// ** component

const options = [
  // {amount: 1, value: 'one', label: '1 Nhánh'},
  {amount: 2, value: 'two', label: '2 Nhánh'},
  {amount: 3, value: 'three', label: '3 Nhánh'},
  {amount: 4, value: 'four', label: '4 Nhánh'},
  {amount: 5, value: 'five', label: '5 Nhánh'},
]

const handleTotal = values => {
  let total = 0
  let arrPercent = [
    +values.percent1,
    +values.percent2,
    +values.percent3,
    +values.percent4,
    +values.percent5,
  ]
  arrPercent = arrPercent.slice(0, +values.branch)
  total = arrPercent.reduce((acc, val) => acc + val, 0)
  return total
}

const FormBranchAutomation = ({setSetting, setting, id, target, onDelete}) => {
  const [init, setInit] = useState({
    branch: setting?.branch || 0,
    percent1: setting?.percent1 || 0,
    percent2: setting?.percent2 || 0,
    percent3: setting?.percent3 || 0,
    percent4: setting?.percent4 || 0,
    percent5: setting?.percent5 || 0,
  })
  const formSchema = Yup.object().shape({
    branch: Yup.number().required('Yêu cầu chọn số nhánh'),
    percent1:
      init.branch < 6
        ? Yup.number()
            .min(1, 'Các nhánh phải ít nhất 1% nguồn dữ liệu')
            .required('Yêu cầu nhập % nhánh 1')
        : '',
    percent2:
      init.branch > 1 && init.branch < 6
        ? Yup.number()
            .min(1, 'Các nhánh phải ít nhất 1% nguồn dữ liệu')
            .required('Yêu cầu % nhánh 2')
        : '',
    percent3:
      init.branch > 2 && init.branch < 6
        ? Yup.number()
            .min(1, 'Các nhánh phải ít nhất 1% nguồn dữ liệu')
            .required('Yêu cầu % nhánh 3')
        : '',
    percent4:
      init.branch > 3 && init.branch < 6
        ? Yup.number()
            .min(1, 'Các nhánh phải ít nhất 1% nguồn dữ liệu')
            .required('Yêu cầu % nhánh 4')
        : '',
    percent5:
      init.branch === 5
        ? Yup.number()
            .min(1, 'Các nhánh phải ít nhất 1% nguồn dữ liệu')
            .required('Yêu cầu % nhánh 5')
        : '',
  })

  return (
    <Formik
      initialValues={init}
      validationSchema={formSchema}
      onSubmit={values => {
        if (values.branch) {
          let total = handleTotal(values)
          if (total === 100) {
            setSetting(
              {
                branch: values.branch,
                percent1: +values.percent1,
                percent2: +values.percent2,
                percent3: +values.percent3,
                percent4: +values.percent4,
                percent5: +values.percent5,
              },
              id,
            )
          } else {
            toast.error(
              'Tổng các nhánh của bạn không thể vượt quá hoặc ít hơn 100%',
            )
          }
        }
      }}
    >
      {({values, setFieldValue}) => (
        <Form>
          <Row>
            <Col lg="4">
              <FormGroup>
                <label htmlFor="branch" className="font-weight-bold text-dark">
                  Số nhánh
                  <sup style={{color: '#FF0000'}}>*</sup>
                </label>
                <div className="radio-list">
                  {options.length > 0 &&
                    options.map(ele => (
                      <label
                        className={`radio ${
                          target && ele.amount < target.length
                            ? 'text-muted cursor-not-allowed'
                            : ''
                        }`}
                        key={ele.value}
                      >
                        <input
                          type="radio"
                          name="branch"
                          value={ele.amount}
                          disabled={target && ele.amount < target.length}
                          defaultChecked={values.branch === ele.amount}
                          onChange={e => {
                            setFieldValue('branch', +e.target.value)
                            setInit({...init, branch: +e.target.value})
                          }}
                        />
                        <span></span>
                        {ele.label}
                      </label>
                    ))}
                </div>
                <ErrorMessage
                  name="branch"
                  component="div"
                  className="field-error text-danger mt-3"
                />
              </FormGroup>
            </Col>
            {values.branch > 0 && (
              <Col lg="8">
                <Row>
                  {new Array(values.branch).fill(0).map((item, index) => (
                    <Col lg="6" key={index + 1}>
                      <TextField
                        type="number"
                        name={`percent${index + 1}`}
                        label={`Phần trăm nhánh ${index + 1} (%)`}
                        // isRequired
                      />
                    </Col>
                  ))}
                  {handleTotal(values) > 0 && (
                    <Alert
                      color={handleTotal(values) === 100 ? 'success' : 'danger'}
                    >
                      <div className="alert-body">
                        <AlertCircle size={15} />{' '}
                        <span className="ml-1">
                          Tổng % nguồn dữ liệu của bạn là{' '}
                          <strong>{handleTotal(values)}%</strong>
                        </span>
                      </div>
                    </Alert>
                  )}
                </Row>
              </Col>
            )}
          </Row>
          <ModalFooter className="pb-0">
            <Button type="submit" className="mr-2" color="primary">
              Lưu
            </Button>
            <Button onClick={() => onDelete(id)} type="button" color="danger">
              Xóa
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  )
}

export default FormBranchAutomation
