import {Input, Label} from 'reactstrap'
import classnames from 'classnames'
import {useEffect, useState} from 'react'

const CheckGroupField = ({
  name,
  id,
  label,
  required,
  options = [],
  inline = false,
  color,
  type = 'checkbox',
  value = [],
  onChange = () => {},
}) => {
  const [data, setData] = useState(value)

  const handleChange = (id, checked) => {
    if (type === 'checkbox') {
      setData(d => (checked ? [...d, id] : d.filter(d => d !== id)))
    } else {
      setData(checked ? [id] : [])
    }
  }

  useEffect(() => onChange(data), [data])

  return (
    <>
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
      {options.length > 0 && (
        <div
          className={classnames('d-flex', {
            'flex-column': !inline,
          })}
        >
          {options.map(d => (
            <div
              key={d.id}
              className={`form-check mt-1 me-2 form-check-${color}`}
            >
              <Input
                type={type}
                id={d.name}
                checked={data.includes(d.id)}
                onChange={e => handleChange(d.id, e.target.checked)}
                {...d}
              />
              {d.name && (
                <label
                  className="form-check-label"
                  htmlFor={d.name}
                  onClick={() => handleChange(d.id, !data.includes(d.id))}
                >
                  {d.name}
                </label>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default CheckGroupField
