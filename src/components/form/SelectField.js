import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'
import {useCallback, useState} from 'react'
import FieldLayout from './FieldLayout'
import {FormGroup, Input, Label} from 'reactstrap'

import '@core/scss/react/libs/react-select/_react-select.scss'

const SelectField = ({name = '', isSearchable = false, ...rest}) => {
  const [checked, setChecked] = useState(false)
  const renderComponent = useCallback(
    (onChange, field, values, meta) => {
      return (
        <>
          <Select
            theme={selectThemeColors}
            className="React react-select"
            classNamePrefix="select"
            isSearchable={isSearchable}
            {...field}
            {...rest}
            onChange={value => {
              onChange(name, value)
              if (
                (rest.isMulti && rest.isCheckAll && value?.length === 0) ||
                value?.length !== rest.options
              ) {
                setChecked(false)
              }
            }}
          />

          {rest?.isMulti && rest?.isCheckAll && (
            <FormGroup check inline>
              <Input
                type="checkbox"
                onChange={e => {
                  if (e.target.checked) {
                    onChange(name, rest.options)
                  } else {
                    onChange(name, [])
                  }
                  setChecked(e.target.checked)
                }}
                id={name}
                checked={checked}
              />
              <Label for={name} check>
                Chọn tất cả
              </Label>
            </FormGroup>
          )}
          {meta && meta.touched && meta.error && (
            <div className="text-danger field-error">{meta.error}</div>
          )}
        </>
      )
    },
    [checked, isSearchable, name, rest],
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

export default SelectField
