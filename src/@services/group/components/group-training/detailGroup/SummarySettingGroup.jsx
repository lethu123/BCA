import React, {useEffect, useState} from 'react'
import {Button, Card, CardBody, Col, Row} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {components} from 'react-select'
import Avatar from '@core/components/avatar'

import RadioField from 'components/form/RadioField'
import SelectField from 'components/form/SelectField'
import TextareaField from 'components/form/TextareaField'
import TextField from 'components/form/TextField'

// *** query
import {GroupQuery, GroupMutation} from '@services/group'
import {Save} from 'react-feather'

// *** FAKE DATA
import {data_address} from '@services/group/data'

const formSchema = Yup.object().shape({
  group_name: Yup.string().required('Yêu cầu nhập tên nhóm!'),
  appellation: Yup.object().required('Yêu cầu chọn danh hiệu').nullable(),
})
const logo =
  'https://newalpha.asia/uploads/56/banner/logo/newalpha-troke-120.png'

const OptionComponent = ({data, ...props}) => {
  return (
    <components.Option {...props}>
      <Avatar img={data.icon} className="mr-50" />
      {data.label}
    </components.Option>
  )
}

const defaultValues = {
  group_name: '',
  group_description: '',
  group_type: '',
  appellation: '',
  group_city: '',
  group_district: '',
  group_commune: '',
}

const SummarySettingGroup = ({infoGroup}) => {
  const [initialValues, setInitialValues] = useState(defaultValues)

  // *** State
  const [address, setAddress] = useState({
    city: {
      value: {},
      options: data_address.map(d => ({
        value: d.name,
        label: d.name,
        id: d.level1_id,
      })),
    },
    district: {
      value: {},
      options: [],
    },
    commune: {
      value: {},
      options: [],
    },
  })

  useEffect(() => {
    if (infoGroup && infoGroup.group_address) {
      const city = infoGroup.group_address.group_city
      const district = infoGroup.group_address.group_district
      const commune = infoGroup.group_address.group_commune

      let objCity = data_address.find(d => d.name === city)
      let objDistrict = objCity?.level2s.find(d => d.name === district)
      let objCommune = objDistrict?.level3s.find(d => d.name === commune)

      setAddress(address => ({
        ...address,
        city: {
          ...address.city,
          value: {
            value: objCity?.name,
            label: objCity?.name,
            id: objCity?.level1_id,
          },
        },
        district: {
          value: {
            value: objDistrict?.name,
            label: objDistrict?.name,
            id: objDistrict?.level2_id,
          },
          options: objCity?.level2s.map(d => ({
            value: d.name,
            label: d.name,
            id: d.level2_id,
          })),
        },
        commune: {
          value: {
            value: objCommune?.name,
            label: objCommune?.name,
            id: objCommune?.level3_id,
          },
          options: objDistrict?.level3s.map(d => ({
            value: d.name,
            label: d.name,
            id: d.level3_id,
          })),
        },
      }))
    }
  }, [infoGroup])

  // *** query
  const {data: appellations} = GroupQuery.useListAppellation()
  const {mutate: mutateUpdateGroup} = GroupMutation.useUpdateGroup()

  useEffect(() => {
    if (infoGroup) {
      setInitialValues({
        group_name: infoGroup.group_name,
        group_description: infoGroup.group_description,
        group_type: infoGroup.group_type,
        appellation: {
          label: infoGroup.group_label?.label_name,
          value: infoGroup.group_label?.label_id,
        },
      })
    }
  }, [appellations?.data, infoGroup])

  return (
    <div>
      <Card>
        <CardBody>
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            enableReinitialize
            onSubmit={values => {
              const data = {
                group_id: infoGroup._id,
                owner_id: infoGroup.owner_id,
                group_name: values.group_name,
                group_description: values.group_description,
                group_type: values.group_type,
                group_label: values.appellation?.value,
                group_address: {
                  group_city: address.city.value?.value || '',
                  group_district: address.district.value?.value || '',
                  group_commune: address.commune.value?.value || '',
                },
              }

              mutateUpdateGroup(data)
            }}
          >
            {({values}) => (
              <Form>
                <Row className="px-0 mx-0">
                  <Col lg="8" md="12">
                    <TextField
                      name="group_name"
                      label="Tên nhóm"
                      placeholder="Nhập tên nhóm..."
                      isRequired
                    />
                  </Col>

                  <Col lg="4" md="12">
                    <SelectField
                      name="appellation"
                      label="Danh hiệu"
                      isSearchable
                      options={
                        appellations &&
                        appellations.data &&
                        appellations.data.map(op => ({
                          ...op,
                          icon: op.icon || logo,
                        }))
                      }
                      components={{
                        Option: OptionComponent,
                      }}
                      isRequired
                    />
                  </Col>

                  <Col xl="8" lg="6" md="12">
                    <TextareaField
                      name="group_description"
                      label="Mô tả ngắn"
                      placeholder="Mô tả ngắn về nhóm"
                      minRows={2}
                      isRequired
                    />
                  </Col>
                  <Col xl="4" lg="6" md="12">
                    <RadioField
                      name="group_type"
                      label="Quyền riêng tư của nhóm"
                      options={[
                        {
                          value: 'PUBLIC',
                          label: 'Nhóm công khai',
                          checked: infoGroup.group_type === 'PUBLIC',
                        },
                        {
                          value: 'PRIVATE',
                          label: 'Nhóm kín',
                          checked: infoGroup.group_type === 'PRIVATE',
                        },
                      ]}
                    />
                  </Col>
                  <Col lg="4" md="12">
                    <SelectField
                      name="city"
                      label="Tỉnh, thành phố"
                      isSearchable
                      value={address.city.value}
                      options={address.city.options}
                      onChange={(name, value) =>
                        setAddress({
                          ...address,
                          city: {...address.city, value},
                          district: {
                            value: {},
                            options: data_address
                              .find(d => d.level1_id === value.id)
                              .level2s.map(d => ({
                                value: d.name,
                                label: d.name,
                                id: d.level2_id,
                              })),
                          },
                          commune: {
                            value: {},
                            options: [],
                          },
                        })
                      }
                      isRequired
                    />
                  </Col>
                  <Col lg="4" md="12">
                    <SelectField
                      name="district"
                      label="Quận, huyện"
                      isSearchable
                      value={address.district.value}
                      options={address.district.options}
                      onChange={(name, value) =>
                        setAddress({
                          ...address,
                          district: {
                            ...address.district,
                            value,
                          },
                          commune: {
                            value: {},
                            options: data_address
                              .find(d => d.level1_id === address.city.value.id)
                              .level2s.find(d => d.level2_id === value.id)
                              .level3s.map(d => ({
                                value: d.name,
                                label: d.name,
                                id: d.level3_id,
                              })),
                          },
                        })
                      }
                      isRequired
                    />
                  </Col>
                  <Col lg="4" md="12">
                    <SelectField
                      name="commune"
                      label="Phường xã"
                      isSearchable
                      options={address.commune.options}
                      value={address.commune.value}
                      onChange={(name, value) =>
                        setAddress({
                          ...address,
                          commune: {...address.commune, value},
                        })
                      }
                      isRequired
                    />
                  </Col>
                </Row>
                <div className="mt-10">
                  <Button.Ripple color="primary" type="submit" className="mr-4">
                    <Save size={15} /> Lưu thay đổi
                  </Button.Ripple>
                </div>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </div>
  )
}

export default SummarySettingGroup
