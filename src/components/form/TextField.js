import {useCallback} from 'react'
import FieldLayout from './FieldLayout'
const TextField = ({type = 'text', size = '', name = '', icon, ...rest}) => {
  const renderComponent = useCallback(
    (onChange, field, values, meta) => (
      <>
        <div
          className={`input-group ${
            meta && meta.touched && meta.error ? 'is-invalid' : ''
          }`}
        >
          {icon && (
            <div className="input-group-prepend">
              <span className="input-group-text">{icon}</span>
            </div>
          )}

          <input
            type={type}
            className={`form-control ${
              meta && meta.touched && meta.error ? 'is-invalid' : ''
            } ${size ? `form-control-${size}` : ''}`}
            {...field}
            {...rest}
            onChange={e => onChange(name, e.target.value)}
          />
        </div>
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </>
    ),
    [icon, name, rest, size, type],
  )
  if (!name) return null
  return (
    <FieldLayout
      renderComponent={renderComponent}
      name={name}
      {...rest}
    ></FieldLayout>
  )
}

export default TextField
