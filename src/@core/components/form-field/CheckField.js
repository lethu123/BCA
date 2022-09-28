import {Input, Label} from 'reactstrap'

const CheckField = ({
  type = 'checkbox',
  id,
  name,
  label,
  color = 'primary',
  required,
  ...rest
}) => {
  return (
    <>
      <div className={`form-check form-check-${color}`}>
        <Input type={type} id={id || name} {...rest} />
        {label && (
          <Label className="form-check-label" for={id || name}>
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
      </div>
    </>
  )
}

export default CheckField
