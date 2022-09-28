import {useCallback} from 'react'
import {CustomInput} from 'reactstrap'
import FieldLayoutCustom from './FieldLayoutCustom'

const RadioFieldCustom = ({
  name = '',
  inline = false,
  options = [],
  helpText,
  color = 'primary',
  ...rest
}) => {
  const renderComponent = useCallback(
    (onChange, field, values, meta) => (
      <div>
        {options.length > 0 &&
          options.map(ele => (
            <CustomInput
              key={ele.value}
              type="radio"
              inline={inline}
              id={`${name}_${ele.value}`}
              label={ele.label}
              defaultChecked={ele.checked}
              onChange={e => {
                onChange(name, ele.value)
              }}
              disabled={ele.disabled}
              className={`custom-control-${color} mb-1`}
              name={name}
            />
          ))}
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </div>
    ),
    [color, inline, name, options],
  )
  if (!name) return null
  return (
    <FieldLayoutCustom renderComponent={renderComponent} name={name} {...rest}>
      {helpText && <span className="form-text text-muted">{helpText}</span>}
    </FieldLayoutCustom>
  )
}

export default RadioFieldCustom

{
  /* <div className={`radio-${inline ? 'inline' : 'list'}`}>
{options.length > 0 &&
  options.map(ele => (
    <label
      className={`radio ${ele.disabled ? 'radio-disabled' : ''} ${
        ele.size ? `radio-${ele.size}` : ''
      } ${ele.color ? `radio-${ele.color}` : `radio-${color}`} ${
        outline ? 'radio-outline' : ''
      } ${accent ? 'radio-accent' : ''}
        `}
      key={ele.value}
    >
      <input
        type="radio"
        name={name}
        disabled={ele.disabled}
        defaultChecked={ele.checked}
        onChange={e => {
          onChange(name, ele.value)
        }}
      />
      <span></span>
      {ele.label}
    </label>
  ))}
{meta && meta.touched && meta.error && (
  <div className="text-danger field-error">{meta.error}</div>
)}
</div> */
}
