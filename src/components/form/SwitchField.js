import {useCallback} from 'react'
import FieldLayout from './FieldLayout'

const SwitchField = ({
  name = '',
  color = '',
  outline = false,
  icon = false,
  ...rest
}) => {
  const renderComponent = useCallback(
    (onChange, field, values, meta) => (
      <>
        <span
          className={`switch ${icon ? 'switch-icon' : ''} ${
            color ? `switch-${color}` : ''
          } ${outline ? 'switch-outline' : ''}`}
        >
          <label>
            <input
              type="checkbox"
              name={name}
              {...rest}
              onChange={e => onChange(name, e.target.checked)}
            />
            <span></span>
          </label>
        </span>
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </>
    ),
    [color, icon, name, outline, rest],
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

export default SwitchField
