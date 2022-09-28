import {FormFeedback, Label} from 'reactstrap'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'

// ** Styles
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import classnames from 'classnames'

const DateTimeField = ({
  id,
  name,
  label,
  required,
  className = '',
  invalid = false,
  feedback,
  ...rest
}) => {
  return (
    <>
      {label && (
        <Label className="form-label" for={id || name}>
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
      <Flatpickr
        // className={`form-control form-date-picker ${className} ${
        //   invalid ? 'is-invalid' : ''
        // }`}
        className={classnames('form-control form-date-picker', className, {
          'is-invalid': invalid,
        })}
        id={name || id}
        {...rest}
      />
      {feedback && <FormFeedback>{feedback}</FormFeedback>}
    </>
  )
}

export default DateTimeField
