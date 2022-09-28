// ** Third Party Components
import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import {FormFeedback, Label} from 'reactstrap'

const InputMaskField = ({
  name,
  id,
  label,
  required,
  options = {},
  invalid,
  feedback,
  className = '',
  ...rest
}) => {
  return (
    <>
      {label && (
        <Label for={name || id}>
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
      <Cleave
        // className={`form-control ${className}`}
        className={classnames('form-control', className, {
          'is-invalid': invalid,
        })}
        options={options}
        id={name || id}
        {...rest}
      />
      {feedback && <FormFeedback>{feedback}</FormFeedback>}
    </>
  )
}

export default InputMaskField
