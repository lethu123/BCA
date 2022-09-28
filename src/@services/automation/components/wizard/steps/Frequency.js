import React, {useCallback, useEffect, useState} from 'react'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {Button, Input} from 'reactstrap'
import SelectField from 'components/form/SelectField'
import TextField from 'components/form/TextField'
import DatePickerField from 'components/form/DatePickerField'
import moment from 'moment'

import {useDebounce} from 'ahooks'

// *** Import Context
import {useSettingCommentCtx} from '@services/automation/context'

const Frequency = ({setActiveIndex}) => {
  // *** CONTEXT
  const {state: accounts, choose_frequency: dispatchChooseFrequency} =
    useSettingCommentCtx()
  const accountActive = accounts.find(item => item.active)
  //  *** State
  const [frequencys, setFrequencys] = useState('n_per_unit_time')
  const option = [
    {
      label: 'Lặp n lần / DVTG',
      value: 'n_per_unit_time',
    },
    {
      label: 'Vào lúc',
      value: 'moment',
    },
    {
      label: 'Sau một DVTG',
      value: 'per_unit_time',
    },
    {
      label: 'Lặp sau m phút',
      value: 'loop_for_minute',
    },
  ]
  const [optionDefault, setOptionDefault] = useState([])
  const [time, setTime] = useState('date')
  const [values, setValues] = useState(1)
  //  *** End state

  const DVTG = useCallback(
    () => [
      {
        value: 'date',
        label: 'Ngày',
      },
      {
        value: 'hour',
        label: 'Giờ',
      },
      {
        value: 'week',
        label: 'Tuần',
      },
      {
        value: 'month',
        label: 'Tháng',
      },
    ],
    [],
  )

  const renderDVTG = useCallback(
    () =>
      DVTG().map(item => {
        return (
          <div className="d-flex align-items-center mb-3" key={item.value}>
            <label className={`radio radio-lg`}>
              <Input
                type="radio"
                name={item.value}
                onChange={() => {
                  setTime(item.value)
                  if (frequencys === 'n_per_unit_time') {
                    dispatchChooseFrequency({
                      type: 'n_per_unit_time',
                      value: {n: values, unit: item.value, selected: true},
                    })
                  } else {
                    dispatchChooseFrequency({
                      type: 'per_unit_time',
                      value: {
                        unit: item.value,
                        selected: true,
                      },
                    })
                  }
                }}
                checked={
                  accountActive?.config.frequency[frequencys].unit ===
                  item.value
                }
              />
              <span></span>
            </label>
            <p className="mb-0 ml-4">{item.label}</p>
          </div>
        )
      }),
    [
      DVTG,
      accountActive?.config.frequency,
      dispatchChooseFrequency,
      frequencys,
      values,
    ],
  )

  const debouncedValue = useDebounce(parseInt(values), {wait: 800})
  const optionChoose = Object.entries(accountActive.config.frequency).filter(
    item => item[1].selected,
  )[0][0]
  useEffect(() => {
    switch (frequencys) {
      case 'n_per_unit_time':
        dispatchChooseFrequency({
          type: 'n_per_unit_time',
          value: {n: debouncedValue || values, unit: time, selected: true},
        })
        break
      case 'loop_for_minute':
        console.log('DEBOUND', debouncedValue)
        console.log('VALUES', values)
        dispatchChooseFrequency({
          type: 'loop_for_minute',
          value: {n: debouncedValue || values, selected: true},
        })
        break
      case 'per_unit_time':
        dispatchChooseFrequency({
          type: 'per_unit_time',
          value: {
            unit: time,
            selected: true,
          },
        })
        break
      case 'moment':
        dispatchChooseFrequency({
          type: 'moment',
          value: {
            value: moment(new Date()).format('HH:mm:ss'),
            selected: true,
          },
        })
        break

      default:
        break
    }
  }, [debouncedValue, frequencys])

  useEffect(() => {
    if (accountActive) {
      setValues(accountActive.config.frequency[frequencys].n)

      switch (optionChoose) {
        case 'n_per_unit_time':
          setOptionDefault({
            label: 'Lặp n lần / DVTG',
            value: 'n_per_unit_time',
          })
          break
        case 'moment':
          setOptionDefault({
            label: 'Vào lúc',
            value: 'moment',
          })
          break
        case 'per_unit_time':
          setOptionDefault({
            label: 'Sau một DVTG',
            value: 'per_unit_time',
          })
          break
        case 'loop_for_minute':
          setOptionDefault({
            label: 'Lặp sau m phút',
            value: 'loop_for_minute',
          })
          break

        default:
          break
      }
    }
  }, [accountActive, frequencys])
  useEffect(() => {
    setFrequencys(optionChoose)
  }, [accountActive])

  return (
    <div>
      <div>
        <SelectField
          name="select"
          label="Chọn tần suất"
          isSearchable
          // isMulti
          options={option}
          value={[optionDefault]}
          onChange={(label, value) => setFrequencys(value.value)}
        />
      </div>
      {frequencys === 'n_per_unit_time' ? (
        <div className="row">
          <div className="col-md-6">
            <TextField
              type="text"
              name="number"
              size="lg"
              label="Nhập số lần"
              placeholder="Số lần"
              isRequired
              value={values}
              onChange={(name, value) => {
                setValues(value)
              }}
            />
          </div>
          <div className="col-md-6">
            <p>chọn DVTG</p>

            {renderDVTG()}
          </div>
        </div>
      ) : frequencys === 'moment' ? (
        <div className="w-50 ">
          <DatePickerField
            name="picker"
            label="Chọn thời gian"
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: ' H:i',
              time_24hr: true,
              defaultHour: new Date().getHours(),
              defaultMinute: new Date().getMinutes(),
            }}
            onChange={(name, value) => {
              dispatchChooseFrequency({
                type: 'moment',
                value: {
                  value: moment(value[0]).format('HH:mm:ss'),
                  selected: true,
                },
              })
            }}
          />
        </div>
      ) : frequencys === 'per_unit_time' ? (
        <div className="w-50">{renderDVTG()}</div>
      ) : (
        frequencys === 'loop_for_minute' && (
          <div className="w-50">
            <TextField
              type="number"
              name="text"
              size="lg"
              label="Nhập số phút"
              placeholder="Nhập số phút"
              isRequired
              value={values}
              onChange={(name, value) => {
                setValues(value)
              }}
            />
          </div>
        )
      )}

      <div className="d-flex justify-content-between">
        <Button.Ripple
          color="secondary"
          className="btn-prev"
          onClick={() => {
            setActiveIndex(active => active - 1)
          }}
        >
          <ArrowLeft
            size={14}
            className="align-middle mr-sm-25 mr-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          outline
          color="primary"
          className="btn-next"
          onClick={() => {
            setActiveIndex(active => active + 1)
          }}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
          <ArrowRight
            size={14}
            className="align-middle ml-sm-25 ml-0"
          ></ArrowRight>
        </Button.Ripple>
      </div>
    </div>
  )
}

export default Frequency
