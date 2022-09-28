import {Field} from 'formik'

const FieldLayout = ({
  children,
  name,
  isRequired,
  label,
  onChange,
  renderComponent,
}) => {
  return (
    <div className="form-group w-100">
      <label htmlFor={name} className="font-weight-bolder text-dark">
        {label} {isRequired && <sup style={{color: '#FF0000'}}>*</sup>}
      </label>
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

export default FieldLayout
