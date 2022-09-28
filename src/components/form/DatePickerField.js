import {useCallback} from 'react'
import FieldLayout from './FieldLayout'
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import Flatpickr from 'react-flatpickr'

const suggestoptions = {
  'date-time': {enableTime: true},
  time: {
    enableTime: true,
    noCalendar: true,
    dateFormat: ' H:i',
    time_24hr: true,
  },
  multiple: {
    mode: 'multiple',
  },
  range: {
    mode: 'range',
  },
  inline: {
    inline: true,
  },
  friendly: {
    altInput: true,
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d',
  },
}

const DatePickerField = ({name = '', options, ...rest}) => {
  const renderComponent = useCallback(
    (onChange, field, values, meta) => (
      <>
        <Flatpickr
          className="form-control"
          options={options}
          {...field}
          {...rest}
          onChange={date => onChange(name, date)}
        />
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </>
    ),
    [name, options, rest],
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

export default DatePickerField
