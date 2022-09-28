import React from 'react'
import {ModalFooter, Button} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
// ** component
import DatePickerField from 'components/form/DatePickerField'

const formSchema = Yup.object().shape({
  day: Yup.date().required('Required'),
})

const FormTimelineAutomation = ({setSetting, setting, id, onDelete}) => {
  return (
    <Formik
      initialValues={{
        day: setting?.date || new Date(),
      }}
      validationSchema={formSchema}
      onSubmit={values => {
        setSetting(values, id)
      }}
    >
      {({values}) => (
        <Form>
          <DatePickerField
            name="date"
            label="Chọn mốc thời gian"
            options={{mode: 'single'}}
            data-enable-time
            values={values.day}
          />
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

export default FormTimelineAutomation
