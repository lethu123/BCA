import {useCallback} from 'react'
import FieldLayout from './FieldLayout'
import TextareaAutosize from 'react-textarea-autosize'
const TextareaField = ({
  size = '',
  name = '',
  maxLength = 500,
  icon,
  limit = true,
  ...rest
}) => {
  const renderComponent = useCallback(
    (onChange, field, values, meta) => (
      <>
        <TextareaAutosize
          minRows={4}
          className={`form-control ${
            meta && meta.touched && meta.error && 'is-invalid'
          } ${size ? `form-control-${size}` : ''}`}
          {...field}
          {...rest}
          onChange={e => onChange(name, e.target.value)}
        />

        {values && values[name] && limit && (
          <span
            className={`textarea-counter-value float-right ${
              values[name].length > maxLength && 'bg-danger'
            }`}
          >
            {`${values[name].length}/${maxLength}`}
          </span>
        )}

        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </>
    ),
    [maxLength, name, rest, size],
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

export default TextareaField
