import React, {useState, useEffect} from 'react'
import {Button, Col, FormGroup, ModalFooter, Row, Spinner} from 'reactstrap'
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {ArrowLeft} from 'react-feather'
import Select from 'react-select'
import {selectThemeColors} from 'utility/Utils'

import TextField from 'components/form/TextField'
import SelectField from 'components/form/SelectField'
import DatePickerField from 'components/form/DatePickerField'

// *** Query
import {AutomationMutation} from '@services/automation'

import {toast} from 'react-toastify'

const dateOptions = [
  {value: 0, label: 'Thứ 2'},
  {value: 1, label: 'Thứ 3'},
  {value: 2, label: 'Thứ 4'},
  {value: 3, label: 'Thứ 5'},
  {value: 4, label: 'Thứ 6'},
  {value: 5, label: 'Thứ 7'},
  {value: 6, label: 'Chủ nhật'},
]

const loopOptions = [
  {
    label: 'Một lần',
    value: false,
  },
  {
    label: 'Lặp lại',
    value: true,
  },
]

const typeOptions = [
  {
    label: 'Hàng ngày',
    value: 'DAILY',
  },
  {
    label: 'Hàng tuần',
    value: 'WEEKLY',
  },
  {
    label: 'Hàng tháng',
    value: 'MONTHLY',
  },
]

const formatDate = date => {
  let dateNew = new Date()
  dateNew.setDate(date[0].getDate())
  dateNew.setMonth(date[0].getMonth())
  dateNew.setFullYear(date[0].getFullYear())

  return dateNew.toISOString()
}

const formatHour = date => {
  let hour = new Date(date).getHours()
  if (hour < 10) {
    hour = `0${hour}`
  }
  let minute = new Date(date).getMinutes()
  if (minute < 10) {
    minute = `0${minute}`
  }
  return `${hour}:${minute}`
}

const initData = {
  loop: loopOptions[0],
  type_loop: typeOptions[0],
  start_date: '',
  end_date: '',
  weekly_days: dateOptions,
  start_time: '00:00:00',
  end_time: '23:59:59',
  from_date: 1,
  to_date: 30,
}

const formSchema = Yup.object().shape({
  loop: Yup.object().required('Bạn phải chọn loại lặp'),
  type_loop: Yup.object().required('Bạn phải chọn loại lịch'),
  start_date: Yup.date().required('Bạn phải nhập ngày bắt đầu'),
  end_date: Yup.date().required('Bạn phải nhập ngày kết thúc'),
  // start_time: Yup.date().required('Bạn phải nhập giờ kết thúc'),
  // end_time: Yup.date().required('Bạn phải nhập giờ bắt đầu'),
  from_date: Yup.number()
    .min(1, 'Bạn phải nhập ngày lớn hơn 0')
    .max(31, 'Bạn phải nhập ngày nhỏ hơn 32')
    .required('Bạn phải nhập ngày bắt đầu trong tháng'),
  to_date: Yup.number()
    .min(1, 'Bạn phải nhập ngày lớn hơn 0')
    .max(31, 'Bạn phải nhập ngày nhỏ hơn 32')
    .required('Bạn phải nhập ngày kết thúc trong tháng'),
  weekly_days: Yup.array()
    .min(1, 'Bạn phải chọn thứ trong tuần')
    .required('Bạn phải chọn thứ trong tuần'),
})

const CampaignStep2 = ({stepper, requestData, closeModal}) => {
  const {mutate, isLoading, isSuccess} = AutomationMutation.useHandleCampaign(
    requestData?._id,
  )

  if (isSuccess) {
    closeModal()
  }

  const [init, setInit] = useState(initData)

  useEffect(() => {
    if (requestData._id) {
      setInit({
        loop: requestData.loop ? loopOptions[1] : loopOptions[0],
        type_loop: {
          value: requestData.type_loop_info.key,
          label: requestData.type_loop_info.name,
        },
        start_date: requestData.start_date,
        end_date: requestData.end_date,
        weekly_days:
          requestData.weekly_days && requestData.weekly_days.length > 0
            ? dateOptions.filter(el =>
                requestData.weekly_days.includes(el.value),
              )
            : dateOptions,
        start_time: requestData.start_time,
        end_time: requestData.end_time,
        from_date: requestData.from_date || 1,
        to_date: requestData.to_date || 30,
      })
    } else {
      setInit(initData)
    }
  }, [requestData])

  return (
    <div>
      <Formik
        initialValues={init}
        validationSchema={formSchema}
        enableReinitialize
        onSubmit={values => {
          values = {
            ...values,
            ...requestData,
            start_date: formatDate(values.start_date),
            end_date: formatDate(values.end_date),
            // start_date: moment(values.start_date[0]).format('L'),
            // end_date: moment(values.end_date[0]).format('L'),
            start_time:
              (values.start_time[0] && formatHour(values.start_time[0])) ||
              values.start_time,
            end_time:
              (values.end_time === '23:59' ? '23:59' : values.end_time) ||
              (values.end_time[0] && formatHour(values.end_time[0])),
            from_date:
              values.from_date && values.type_loop?.value === 'MONTHLY'
                ? +values.from_date
                : 1,
            to_date:
              values.to_date && values.type_loop?.value === 'MONTHLY'
                ? +values.to_date
                : 30,
            loop: values.loop?.value,
            type_loop: values.type_loop?.value,
            weekly_days:
              values.type_loop?.value === 'WEEKLY'
                ? JSON.stringify(values.weekly_days.map(el => el.value))
                : [],
            campaign_type: 'SALE',
            autojob_id: requestData.autojob_id?._id || null,
          }

          if (
            values.end_time !== '23:59:59' &&
            +values.start_time?.split(':')[0] > +values.end_time?.split(':')[0]
          ) {
            toast.error('Giờ bắt đầu phải bé hơn giờ kết thúc, xin thử lại!')
            return
          }

          console.log('START_TIME', values.start_date)
          console.log('END_TIME', values.end_date)

          if (
            new Date(values.start_date).getTime() >
            new Date(values.end_date).getTime()
          ) {
            toast.error('Ngày bắt đầu phải bé hơn ngày kết thúc, xin thử lại!')
            return
          }

          let formData = new FormData()

          Object.keys(values).forEach(key => {
            formData.append(key, values[key])
          })

          // console.log(values)

          if (requestData._id) {
            mutate({data: formData, id: requestData._id})
          } else {
            mutate(formData)
          }
        }}
      >
        {({values, setFieldValue}) => (
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="font-weight-bold text-dark">
                    Loại lặp <sup style={{color: '#FF0000'}}>*</sup>
                  </label>
                  <Select
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={loopOptions[0]}
                    value={values.loop}
                    options={loopOptions}
                    isClearable={false}
                    onChange={option => {
                      setFieldValue('loop', option)
                    }}
                  />
                  <ErrorMessage
                    name="loop"
                    component="div"
                    className="field-error text-danger"
                  />
                </FormGroup>
              </Col>
              {values.loop?.value && (
                <Col md="6">
                  <FormGroup>
                    <label className="font-weight-bold text-dark">
                      Loại lịch <sup style={{color: '#FF0000'}}>*</sup>
                    </label>
                    <Select
                      theme={selectThemeColors}
                      className="react-select"
                      classNamePrefix="select"
                      defaultValue={typeOptions[0]}
                      value={values.type_loop}
                      name="type_loop"
                      options={typeOptions}
                      isClearable={false}
                      onChange={option => {
                        setFieldValue('type_loop', option)
                      }}
                    />
                    <ErrorMessage
                      name="type_loop"
                      component="div"
                      className="field-error text-danger"
                    />
                  </FormGroup>
                </Col>
              )}
            </Row>
            {values.loop?.value && values.type_loop?.value === 'WEEKLY' && (
              <Row>
                <Col lg="12">
                  <SelectField
                    name="weekly_days"
                    label="Lặp các thứ trong tuần"
                    isMulti
                    options={dateOptions}
                  />
                </Col>
              </Row>
            )}
            {values.loop?.value && values.type_loop?.value === 'MONTHLY' && (
              <Row>
                <Col lg="6">
                  <TextField
                    type="number"
                    name="from_date"
                    label="Từ ngày (trong tháng)"
                  />
                </Col>
                <Col lg="6">
                  <TextField
                    type="number"
                    name="to_date"
                    label="Đến ngày (trong tháng)"
                  />
                </Col>
              </Row>
            )}
            <Row>
              <Col lg="3">
                <DatePickerField name="start_date" label="Ngày bắt đầu" />
              </Col>
              <Col lg="3">
                <DatePickerField name="end_date" label="Ngày kết thúc" />
              </Col>

              <Col lg="3">
                <DatePickerField
                  name="start_time"
                  label="Giờ bắt đầu (trong ngày)"
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i',
                    time_24hr: true,
                  }}
                />
              </Col>
              <Col lg="3">
                <DatePickerField
                  name="end_time"
                  label="Giờ kết thúc (trong ngày)"
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i',
                    time_24hr: true,
                  }}
                />
                {}
              </Col>
              <Col md="12">
                <ModalFooter className="pt-5">
                  {!isLoading ? (
                    <>
                      <Button.Ripple
                        color="secondary"
                        className="btn-prev mr-3"
                        size="sm"
                        type="button"
                        outline
                        onClick={() => stepper.previous()}
                      >
                        <ArrowLeft
                          size={14}
                          className="align-middle mr-sm-2 mr-0"
                        ></ArrowLeft>
                        <span className="align-middle d-inline-block d-none">
                          Previous
                        </span>
                      </Button.Ripple>
                      <Button.Ripple
                        size="sm"
                        type="submit"
                        color="primary"
                        className="btn-next"
                      >
                        <span className="align-middle d-sm-inline-block d-none">
                          Submit
                        </span>
                      </Button.Ripple>
                    </>
                  ) : (
                    <Button.Ripple color="flat-primary">
                      <Spinner color="primary" size="sm" type="grow" />
                      <span className="ml-5 text-primary">Loading...</span>
                    </Button.Ripple>
                  )}
                </ModalFooter>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CampaignStep2
