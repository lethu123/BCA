import {useCallback, useEffect, useState} from 'react'
import FieldLayout from './FieldLayout'

const CheckboxField = ({
  name = '',
  type = 'inline',
  options = [],
  helpText,
  color = 'primary',
  outline = false,

  ...rest
}) => {
  // Options props name UNIQUE!!!

  const renderComponent = useCallback(
    (onChange, field, values, meta) => (
      <div className={`checkbox-${type === 'inline' ? 'inline' : 'list'}`}>
        {options.length > 0 &&
          options.map(ele => (
            <label
              className={`checkbox ${ele.disabled ? 'checkbox-disabled' : ''} ${
                ele.size ? `checkbox-${ele.size}` : ''
              } ${ele.color ? `checkbox-${ele.color}` : `checkbox-${color}`} 
                    ${outline ? 'checkbox-outline' : ''}
                    `}
              key={ele.name}
            >
              <input
                type="checkbox"
                name={ele.name}
                disabled={ele.disabled}
                defaultChecked={ele.checked}
                onChange={e => {
                  onChange(name, {...ele, checked: e.target.checked})
                }}
              />
              <span></span>
              {ele.label}
            </label>
          ))}
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </div>
    ),
    [color, name, options, outline, type],
  )
  if (!name) return null
  return (
    <FieldLayout renderComponent={renderComponent} name={name} {...rest}>
      {helpText && <span className="form-text text-muted">{helpText}</span>}
    </FieldLayout>
  )
}

export default CheckboxField
