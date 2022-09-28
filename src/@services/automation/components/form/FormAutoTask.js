import React from 'react'
import {Button, Col, Row} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
//** component */
import TextField from 'components/form/TextField'
import SelectField from 'components/form/SelectField'
import TextareaField from 'components/form/TextareaField'

// ** query
import AutomationQuery from '@services/automation/hook/query'

const formSchema = Yup.object().shape({
  name: Yup.string().required('Tên autojob không được để trống!'),
  description: Yup.string().required('Mô tả không được để trống!'),
  type_action: Yup.object().required('Bạn phải chọn Nguồn dữ liệu!').nullable(),
})

const FormAutoTask = ({setSetting, setting, id, onDelete}) => {
  const {data: actionAutotasks} =
    AutomationQuery.useGetListActionAutotaskAutomation()

  return (
    <div>
      <Formik
        initialValues={{
          name: setting?.name,
          description: setting?.description,
          type_action: setting?.type_action,
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          setSetting(values, id)
        }}
      >
        {() => (
          <Form>
            <Row>
              <Col md="12">
                <TextField
                  type="text"
                  name="name"
                  label="Tên auto task"
                  placeholder="Nhập tên auto task"
                  isRequired={true}
                />
              </Col>
              <Col md="12">
                <TextareaField
                  name="description"
                  label="Mô tả"
                  placeholder="Nhập mô tả..."
                  // isRequired={true}
                />
              </Col>
              <Col md="12">
                <SelectField
                  name="type_action"
                  label="Loại hành động"
                  isRequired={true}
                  options={
                    actionAutotasks
                      ? actionAutotasks.map(el => ({
                          label: el.title,
                          value: el.code,
                        }))
                      : []
                  }
                />
              </Col>
            </Row>
            <div className="text-right">
              <Button.Ripple color="primary" className="btn-next" type="submit">
                <span className="align-middle d-sm-inline-block d-none">
                  Lưu
                </span>
              </Button.Ripple>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormAutoTask
