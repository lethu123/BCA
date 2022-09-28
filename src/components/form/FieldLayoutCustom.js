import Require from '@services/event-v1/components/Require'
import {Field} from 'formik'
import {Label} from 'reactstrap'

const FieldLayoutCustom = ({
  children,
  name,
  isRequired,
  label,
  onChange,
  renderComponent,
}) => {
  return (
    <div className="form-group w-100">
      <Label for="challenge-name" className="d-flex align-items-center mb-50">
        <h5 className="mb-0">
          <span className="text-capitalize">{label}</span>
        </h5>
        <Require />
      </Label>
      {/* <label htmlFor={name} className="font-weight-bolder text-dark">
        {label} {isRequired && <sup style={{color: '#FF0000'}}>*</sup>}
      </label> */}
      {onChange ? (
        renderComponent(onChange, null, {}, null)
      ) : (
        <Field name={name}>
          {({field, form: {values, setFieldValue}, meta}) =>
            renderComponent(setFieldValue, field, values, meta)
          }
        </Field>
      )}

      {children}
    </div>
  )
}

export default FieldLayoutCustom
