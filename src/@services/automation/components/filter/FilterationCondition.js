import React, {useCallback, useContext, useEffect, useState} from 'react'
import {ArrowLeft, ArrowRight, CheckCircle} from 'react-feather'
import {Button, Col, FormGroup, Label, Row} from 'reactstrap'
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {InputDataContext} from '../step'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'
//** component */
import TextField from 'components/form/TextField'
import DatePickerField from 'components/form/DatePickerField'
import SelectField from 'components/form/SelectField'

const formSchema = Yup.object().shape({
  option: Yup.object().required('Required').nullable(),
})

const queryOptions = [
  {value: '$e', label: '='},
  {value: '$lt', label: '<'},
  {value: '$lte', label: '<='},
  {value: '$gt', label: '>'},
  {value: '$gte', label: '>='},
  {value: '$lt_or_$gt', label: '<>'},
  {value: '$gt_and_$lt', label: '><'},
  {value: '$exist_true', label: 'not null'},
  {value: '$exist_false', label: 'is null'},
  {value: '$text', label: 'exit-text'},
]

const FilterationCondition = ({stepper, onSave}) => {
  const {
    dataFilter: [data],
    properties: [properties, setProperties],
    fakeDataOptions,
  } = useContext(InputDataContext)

  // const [fieldData, setFieldData] = useState()
  // useEffect(() => {
  //   if (data && data.filter) {
  //     setFieldData(data?.filter(ele => ele.checked))
  //   }
  // }, [data])
  let fieldData = data?.filter(ele => ele.checked)

  const [field, setField] = useState(null)

  const [operatorOptions, setOperatorOptions] = useState(queryOptions)

  const [isValid, setIsValid] = useState(false)
  const [optionsSelect, setOptionsSelect] = useState(null)

  useEffect(() => {
    if (field) {
      if (field.type !== 'number') {
        if (field.subtype) {
          field.subtype === 'text'
            ? setOperatorOptions([
                {value: '$eq', label: '='},
                {value: '$exist_true', label: 'not null'},
                {value: '$exist_false', label: 'is null'},
                {value: '$text', label: 'exit-text'},
              ])
            : setOperatorOptions([{value: '$eq', label: '='}])
        } else {
          if (field.type === 'date') {
            setOperatorOptions([
              {value: '$eq', label: '='},
              {value: '$lt_or_$gt', label: '<>'},
              {value: '$gt_and_$lt', label: '><'},
              {value: '$exist_true', label: 'not null'},
              {value: '$exist_false', label: 'is null'},
            ])
          } else {
            setOperatorOptions([
              {value: '$eq', label: '='},
              {value: '$exist_true', label: 'not null'},
              {value: '$exist_false', label: 'is null'},
              {value: '$text', label: 'exit-text'},
            ])
          }
        }
      } else {
        setOperatorOptions(queryOptions)
      }
    }
  }, [field])

  useEffect(() => {
    if (field) {
      setOptionsSelect(
        fakeDataOptions.find(item => item.type === field.key)?.options,
      )
    }
  }, [fakeDataOptions, field])

  const handleOnchangeField = useCallback(
    (value, label) => {
      if (field.key) {
        setProperties({
          ...properties,
          [field.key]: label
            ? label === 'Giá trị bé'
              ? {
                  ...properties[field.key],
                  value: [
                    value,
                    properties[field.key].value?.length > 1
                      ? properties[field.key].value[1]
                      : '',
                  ],
                }
              : {
                  ...properties[field.key],
                  value: [
                    properties[field.key].value?.length > 0
                      ? properties[field.key].value[0]
                      : '',
                    value,
                  ],
                }
            : {...properties[field.key], value},
        })
      }
    },
    [field?.key, properties, setProperties],
  )

  const renderInputType = useCallback(
    (type, label, range) => {
      switch (type) {
        case 'text':
        case 'number':
        case 'email':
          return (
            <TextField
              type={type}
              name={field?.key || 'text'}
              label={label}
              placeholder="Nhập giá trị"
              value={properties[field?.key]?.value}
              onChange={(name, value) => handleOnchangeField(value)}
              isRequired
            />
          )
        case 'date':
          return (
            <DatePickerField
              name={field?.key || 'datepicker'}
              label="Date picker Field"
              value={
                range === 'min'
                  ? properties[field.key]?.value &&
                    properties[field.key]?.value[0]
                  : range === 'max'
                  ? properties[field.key]?.value &&
                    properties[field.key]?.value[1]
                  : properties[field.key]?.value
              }
              options={{mode: 'single'}}
              onChange={(name, value) => handleOnchangeField(value[0], label)}
            />
          )
        case 'select':
          return (
            <SelectField
              name={field?.key || 'select'}
              label="Select Field"
              options={optionsSelect || []}
              value={properties[field.key]?.value || ''}
              onChange={(name, value) => handleOnchangeField([value])}
            />
          )

        default:
          break
      }
    },
    [field?.key, handleOnchangeField, optionsSelect, properties],
  )
  const renderInputOption = useCallback(() => {
    switch (properties[field.key]?.operator) {
      case '$eq':
      case '$lt':
      case '$lte':
      case '$gt':
      case '$gte':
      case '$text': {
        return renderInputType(field.type, 'Giá trị')
      }
      case '$lt_or_$gt':
      case '$gt_and_$lt':
        return (
          <Row>
            <Col lg="6">{renderInputType(field.type, 'Giá trị bé', 'min')}</Col>
            <Col lg="6">
              {renderInputType(field.type, 'Giá trị lớn', 'max')}
            </Col>
          </Row>
        )
      case '$exist_true':
        return <p>Lọc những data phải có trường dữ liệu này</p>
      case '$exist_false':
        return (
          <p className="text-danger">
            Lọc những data không có trường dữ liệu này
          </p>
        )
      default:
        break
    }
  }, [field?.key, field?.type, properties, renderInputType])

  useEffect(() => {
    if (fieldData) {
      let keys = Object.keys(properties)
      let count = 0
      keys.forEach(key => {
        if (properties[key].value) {
          count += 1
        }
      })

      if (
        fieldData.length > 0 &&
        // fieldData.filter(el => el.checked).length === fieldData.length &&
        keys.length === count
      ) {
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    }
  }, [fieldData, properties])

  return (
    <div>
      <Formik
        initialValues={{field: []}}
        validationSchema={formSchema}
        onSubmit={values => {
          stepper.next()
        }}
      >
        {() => (
          <Form>
            <Row>
              <Col lg="3">
                <div
                  className="w-100"
                  style={{maxHeight: 'calc(100vh - 500px', overflowY: 'auto'}}
                >
                  <FormGroup className="mb-3">
                    <div className="radio-list">
                      {fieldData?.map(item => (
                        <label className="radio" key={item.key}>
                          <input
                            type="radio"
                            name="radios2"
                            value=""
                            className="form-control"
                            onChange={() => setField(item)}
                          />
                          <span></span>
                          {item.label}
                          {properties[item.key]?.value?.length > 0 && (
                            <CheckCircle
                              size="14"
                              className="ml-2 text-primary"
                            />
                          )}
                        </label>
                      ))}
                    </div>
                  </FormGroup>
                </div>
              </Col>
              <Col lg="9">
                {field && (
                  <Row className="align-items-center">
                    <Col lg="3">
                      <FormGroup>
                        <Label className="font-weight-bold">
                          Điều kiện lọc <sup style={{color: '#FF0000'}}>*</sup>
                        </Label>

                        <Select
                          theme={selectThemeColors}
                          className="react-select"
                          classNamePrefix="select"
                          options={operatorOptions}
                          name={field.key}
                          value={
                            {
                              label: properties[field.key]?.label,
                              value: properties[field.key]?.operator,
                            } || {}
                          }
                          onChange={option => {
                            setProperties({
                              ...properties,
                              [field.key]: {
                                operator: option.value,
                                label: option.label,
                                value:
                                  option.value === '$exist_true' ||
                                  option.value === '$exist_false'
                                    ? option.label
                                    : '',
                              },
                            })
                          }}
                        />
                        <ErrorMessage
                          name="option"
                          component="div"
                          className="field-error text-danger"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="9">{renderInputOption()}</Col>
                  </Row>
                )}
              </Col>
            </Row>

            <div className="border-top pt-5 d-flex justify-content-between">
              <Button.Ripple
                color="secondary"
                className="btn-prev"
                type="button"
                onClick={() => stepper.previous()}
              >
                <ArrowLeft size={14} className="align-middle mr-2"></ArrowLeft>
                <span className="align-middle d-sm-inline-block d-none">
                  Quay lại
                </span>
              </Button.Ripple>
              <Button.Ripple
                color="primary"
                className="btn-next"
                disabled={!isValid}
                onClick={onSave}
              >
                <span className="align-middle d-sm-inline-block d-none">
                  Lưu
                </span>
                <ArrowRight
                  size={14}
                  className="align-middle ml-2"
                ></ArrowRight>
              </Button.Ripple>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FilterationCondition
