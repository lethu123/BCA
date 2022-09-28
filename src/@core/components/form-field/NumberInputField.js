import React from 'react'
// ** Third Party Components
import InputNumber from 'rc-input-number'
import {Plus, Minus} from 'react-feather'

// ** Styles
import '@core/scss/react/libs/input-number/input-number.scss'
import {Label} from 'reactstrap'

const NumberInputField = ({
  name,
  id,
  label,
  required,
  lg = true,
  className = '',
  defaultValue = 0,
  color = 'primary',
  ...rest
}) => {
  return (
    <>
      {label && (
        <Label className="form-label" for={name || id}>
          {label}{' '}
          {required && (
            <sup
              style={{
                color: '#FF0000',
                fontSize: '1rem',
                top: '0',
              }}
            >
              *
            </sup>
          )}
        </Label>
      )}
      <InputNumber
        upHandler={<Plus />}
        downHandler={<Minus />}
        id={name || id}
        className={`${lg ? 'input-lg' : ''} input-${color} ${className}`}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  )
}

export default NumberInputField
