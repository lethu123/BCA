import {useCallback, useEffect, useRef} from 'react'
import FieldLayout from './FieldLayout'
import DragSort from '@yaireo/dragsort'

import Tags from '@yaireo/tagify/dist/react.tagify'

import './TagInputField.style.scss'

const TagInputField = ({
  name = '',
  suggestions = [],
  blacklist = [],
  maxTags = 6,
  placeholder = 'Nhấn tab hoặc enter để tạo tag...',
  size = '',
  helpText = 'Nhấn tab hoặc enter để tạo tag',
  ...rest
}) => {
  const tagifyRefDragSort = useRef()

  useEffect(() => {
    if (tagifyRefDragSort.current)
      new DragSort(tagifyRefDragSort.current.DOM.scope, {
        selector: '.tagify__tag',
        callbacks: {
          dragEnd: onDragEnd,
        },
      })
  }, [])

  // must update Tagify's value according to the re-ordered nodes in the DOM
  function onDragEnd(elm) {
    tagifyRefDragSort.current.updateValueByDOMTags()
  }

  const renderComponent = useCallback(
    (onChange, field, values, meta) => (
      <>
        <Tags
          tagifyRef={tagifyRefDragSort}
          settings={{
            blacklist,
            whitelist: suggestions,
            maxTags,
            placeholder,
            dropdown: {
              enabled: 0, // a;ways show suggestions dropdown
            },
          }}
          className={`form-control ${size ? `form-control-${size}` : ''}`}
          {...rest}
          onChange={e => {
            if (e.detail.value) {
              let valuesArr = JSON.parse(e.detail.value)
              if (valuesArr.length > 0) {
                onChange(
                  name,
                  valuesArr.map(e => e.value),
                )
              }
            } else {
              onChange(name, [])
            }
          }}
        />
        {meta && meta.touched && meta.error && (
          <div className="text-danger field-error">{meta.error}</div>
        )}
      </>
    ),
    [blacklist, maxTags, name, placeholder, rest, size, suggestions],
  )
  if (!name) return null

  return (
    <FieldLayout renderComponent={renderComponent} name={name} {...rest}>
      {' '}
      {helpText && <span className="form-text text-muted">{helpText}</span>}
    </FieldLayout>
  )
}

export default TagInputField
