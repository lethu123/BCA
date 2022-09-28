import React, {useEffect, useState} from 'react'

import {Button, Card, CardBody, ModalFooter} from 'reactstrap'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router'

// ** component
import TextareaField from 'components/form/TextareaField'
import TextField from 'components/form/TextField'
import SelectField from 'components/form/SelectField'

const formSchema = Yup.object().shape({
  title: Yup.string().required('Yêu cầu nhập tên chiến dịch'),
  description: Yup.string().required('Yêu cầu nhập mô tả'),
  autojob_id: Yup.object().required('Yêu cầu chọn autojob').nullable(),
})

const CampaignStep1 = ({stepper, autojobs, setRequestData, requestData}) => {
  const history = useHistory()

  let newAutojobs =
    autojobs?.data?.map(el => ({...el, label: el.name, value: el.id})) || []
  const [initialValues, setInitialValues] = useState({
    title: '',
    description: '',
    autojob_id: null,
  })

  useEffect(() => {
    if (requestData._id) {
      setInitialValues({
        title: requestData.title,
        description: requestData.description,
        autojob_id: newAutojobs.find(
          el => el._id === requestData.automation_id,
        ),
      })
    } else {
      setInitialValues({
        title: '',
        description: '',
        autojob_id: null,
      })
    }
  }, [requestData._id])

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        enableReinitialize
        onSubmit={values => {
          setRequestData(values)
          stepper.next()
        }}
      >
        {({values}) => (
          <Form>
            <SelectField
              name="autojob_id"
              label="Auto job"
              isRequired
              placeholder="Chọn Auto Job"
              isSearchable={true}
              options={newAutojobs}
            />
            {values.autojob_id && (
              <Card>
                <CardBody>
                  <div className="d-flex align-items-center flex-grow-1">
                    <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                      <div className="d-flex flex-column align-items-cente py-2 w-75">
                        <p className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1">
                          {values.autojob_id.name}
                          {/* <span
                            className={`label label-lg label-light-${
                              values.autojob_id?.data_field?.[0]?.value === 'cx'
                                ? 'warning '
                                : 'info'
                            } label-inline font-weight-bold py-4 ml-3`}
                          >
                            {values.autojob_id?.data_field?.[0].value === 'cx'
                              ? 'Khai thác KHTN'
                              : `Facebook - ${values.autojob_id?.data_field?.[0].label}`}
                          </span> */}
                          <span className="label label-lg label-light-warning label-inline font-weight-bold py-4 ml-3">
                            Khai thác KHTN
                          </span>
                        </p>

                        {/* <span className="text-muted font-weight-bold">
                          {values.autojob_id.description}
                        </span> */}
                      </div>
                      <div>
                        <Button.Ripple
                          className="round mt-2"
                          color="primary"
                          outline
                          onClick={() => {
                            return window.open(
                              `/admin/automation/auto-job/${values.autojob_id._id}`,
                            )
                          }}
                        >
                          Xem chi tiết
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}

            <TextField
              type="text"
              name="title"
              label="Tên chiến dịch"
              placeholder="Nhập tên chiến dịch ..."
              isRequired
            />
            <TextareaField
              minRows={4}
              name="description"
              label="Mô tả chiến dịch"
              placeholder="Nhập mô tả cho chiến dịch ..."
              // isRequired
            />

            <ModalFooter className="pt-5">
              <Button.Ripple
                color="secondary"
                className="btn-prev mr-3"
                size="sm"
                type="button"
                outline
                disabled
              >
                <ArrowLeft
                  size={14}
                  className="align-middle mr-sm-2 mr-0"
                ></ArrowLeft>
                <span className="align-middle d-sm-inline-block d-none">
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
                  Next
                </span>
                <ArrowRight
                  size={14}
                  className="align-middle ml-sm-2 ml-0"
                ></ArrowRight>
              </Button.Ripple>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CampaignStep1
