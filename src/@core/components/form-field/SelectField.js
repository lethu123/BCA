// ** Styles

import {FormFeedback, Label} from 'reactstrap'

import Select, {components} from 'react-select'

// ** Utils
import {selectThemeColors} from 'utility/Utils'

import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'

import '@core/scss/react/libs/react-select/_react-select.scss'
import classNames from 'classnames'

const animatedComponents = makeAnimated()

const orderOptions = values => {
  if (values.length > 0)
    return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed))
  return values
}

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? {...base, opacity: '0.5'} : base
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? {...base, color: '#626262', paddingRight: 6}
      : base
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? {...base, display: 'none'} : base
  },
}

const SelectField = ({
  type = 'default',
  placeholder = 'Select...',
  options = [],
  label,
  isClearable = true,
  closeMenuOnSelect = true,
  animate = true,
  CustomOptions,
  value,
  onChange,
  style = {},
  required,
  className = '',
  feedback,
  invalid = false,
  ...rest
}) => {
  const renderComponent = () => {
    let component = {}
    if (animate) {
      component = {...component, ...animatedComponents}
    }

    if (CustomOptions) {
      component = {
        ...component,
        Option: ({data, ...props}) => {
          return (
            <components.Option {...props}>
              <CustomOptions data={data} props={props} />
            </components.Option>
          )
        },
      }
    }

    return component
  }

  const fixedOnChange = (value, {action, removedValue}) => {
    switch (action) {
      case 'remove-value':
      case 'pop-value':
        if (removedValue.isFixed) {
          return
        }
        break
      case 'clear':
        value = options.filter(v => v.isFixed)
        break
      default:
        break
    }

    value = orderOptions(value)

    onChange(Array.isArray(value) ? value : [value])
  }

  const SelectType =
    type === 'creatable'
      ? CreatableSelect
      : type === 'async'
      ? AsyncSelect
      : Select

  return (
    <>
      {label && (
        <Label className="form-label">
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
      <SelectType
        theme={selectThemeColors}
        // className={`react-select ${className} ${invalid ? 'is-invalid' : ''}`}
        className={classNames('react-select', className, {
          'is-invalid': invalid,
        })}
        classNamePrefix="select"
        options={options}
        isClearable={isClearable}
        closeMenuOnSelect={closeMenuOnSelect}
        components={renderComponent()}
        value={value}
        onChange={fixedOnChange}
        styles={{...styles, ...style}}
        placeholder={placeholder}
        {...rest}
      />
      {feedback && <FormFeedback>{feedback}</FormFeedback>}
    </>
  )
}

export default SelectField
