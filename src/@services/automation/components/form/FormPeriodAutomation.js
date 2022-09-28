import React from 'react'
import {ModalFooter, Button, Row, Col, FormGroup} from 'reactstrap'
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextField from 'components/form/TextField'
// ** component

const options = [
  {value: 'day', label: 'Ngày'},
  {value: 'hour', label: 'Giờ'},
  {value: 'min', label: 'Phút'},
  {value: 'second', label: 'Giây'},
]

const FormPeriodAutomation = ({setSetting, setting, id, onDelete}) => {
  const formSchema = Yup.object().shape({
    period: Yup.string().required('Required'),
    time: Yup.number().required('Required'),
  })
  return (
    <Formik
      initialValues={{
        period: setting?.period || '',
        time: setting?.time || '',
      }}
      validationSchema={formSchema}
      onSubmit={values => {
        setSetting(values, id)
      }}
    >
      {({values, setFieldValue}) => (
        <Form>
          <Row>
            <Col lg="4">
              <FormGroup>
                <label htmlFor="period" className="font-weight-bold text-dark">
                  Cài đặt khoảng thời gian
                  <sup style={{color: '#FF0000'}}>*</sup>
                </label>
                <div className="radio-list">
                  {options.length > 0 &&
                    options.map(ele => (
                      <label className="radio" key={ele.value}>
                        <input
                          type="radio"
                          name="period"
                          value={ele.value}
                          defaultChecked={values.period === ele.value}
                          onChange={e => {
                            setFieldValue('period', e.target.value)
                            setFieldValue('time', '')
                          }}
                        />
                        <span></span>
                        {ele.label}
                      </label>
                    ))}
                </div>
                <ErrorMessage
                  name="period"
                  component="div"
                  className="field-error text-danger mt-3"
                />
              </FormGroup>
            </Col>
            {values.period && (
              <Col lg="4">
                <TextField
                  type="number"
                  name="time"
                  label="Thời gian"
                  isRequired
                />
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

export default FormPeriodAutomation
