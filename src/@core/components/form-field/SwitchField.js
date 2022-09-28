import {Check, X} from 'react-feather'
import {Input, Label} from 'reactstrap'

const CustomLabel = ({htmlFor}) => {
  return (
    <Label className="form-check-label" htmlFor={htmlFor}>
      <span className="switch-icon-left">
        <Check size={14} />
      </span>
      <span className="switch-icon-right">
        <X size={14} />
      </span>
    </Label>
  )
}

const SwitchField = ({
  id,
  name,
  label,
  color = 'primary',
  icon,
  required,
  ...rest
}) => {
  return (
    <>
      <div className="d-flex flex-column">
        {label && (
          <Label for={id || name} className="form-check-label mb-50">
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
        <div className={`form-switch form-check-${color}`}>
          <Input type="switch" id={id || name} {...rest} />
          {icon && <CustomLabel htmlFor={id || name} />}
        </div>
      </div>
    </>
  )
}

export default SwitchField
