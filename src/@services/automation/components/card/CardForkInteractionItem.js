import CheckboxField from 'components/form/CheckboxField'
import SelectField from 'components/form/SelectField'
import TagInputField from 'components/form/TagInputField'
import TextField from 'components/form/TextField'
import {useCallback, useEffect, useState} from 'react'
import {Badge, Card, CardBody, Col, FormGroup, Row} from 'reactstrap'

const timeOptions = [
  {value: 'day', label: 'Ngày'},
  {value: 'hour', label: 'Giờ'},
  {value: 'min', label: 'Phút'},
  {value: 'second', label: 'Giây'},
]

const CardForkInteractionItem = ({
  options,
  id,
  setDatas,
  data,
  keywords,
  setKeywords,
}) => {
  const [selectData, setSelectData] = useState(data)

  useEffect(() => {
    if (selectData) {
      setDatas(datas =>
        datas.map(dt => (dt.id === id ? {...dt, ...selectData} : dt)),
      )
    }
  }, [selectData])

  const renderSetting = useCallback(
    data => {
      switch (data.type) {
        case 'time':
          return (
            <Row>
              <Col lg="4">
                <FormGroup className="mb-1">
                  <label
                    htmlFor="period"
                    className="font-weight-bold text-dark my-4"
                  >
                    Cài đặt khoảng thời gian
                    <sup style={{color: '#FF0000'}}>*</sup>
                  </label>
                  <div className="radio-list">
                    {timeOptions.length > 0 &&
                      timeOptions.map(ele => (
                        <label className="radio" key={ele.value}>
                          <input
                            type="radio"
                            name={`time_radio_${data.value}_${id}`}
                            defaultChecked={data.config?.type === ele.value}
                            onChange={e =>
                              setSelectData(dt => ({
                                ...dt,
                                config: {type: ele.value, value: ''},
                              }))
                            }
                          />
                          <span></span>
                          {ele.label}
                        </label>
                      ))}
                  </div>
                </FormGroup>
              </Col>

              {data.config?.type && (
                <Col lg="4" className="mt-4">
                  <TextField
                    type="number"
                    name={`time_input_${data.value}_${id}`}
                    label="Thời gian"
                    isRequired
                    defaultValue={data.config?.value || ''}
                    onChange={(name, value) =>
                      setSelectData(dt => ({
                        ...dt,
                        config: {...dt.config, value},
                      }))
                    }
                  />
                </Col>
              )}
            </Row>
          )
        case 'tag':
          return (
            <div className="mt-3">
              <TagInputField
                name={`tag_${data.value}_${id}`}
                label="Keywords"
                placeholder="Nhấn keywords"
                maxTags={1000}
                value={keywords.length > 0 ? keywords.join(', ') : ''}
                onChange={(name, value) => {
                  setSelectData(dt => ({
                    ...dt,
                    config: value,
                  }))
                  setKeywords(value)
                }}
                isRequired
              />
            </div>
          )
        case 'checkbox':
          return (
            <CheckboxField
              type="list"
              name={`checkbox_${data.value}_${id}`}
              inline
              options={data.lists.map(el => ({
                ...el,
                checked: data.config?.includes(el.name),
              }))}
              onChange={(name, option) => {
                let reaction = data.lists.find(
                  list => list.name === option.name,
                )
                if (option.checked) {
                  setSelectData(dt => ({
                    ...dt,
                    config: [...dt.config, reaction.name],
                  }))
                } else {
                  setSelectData(dt => ({
                    ...dt,
                    config: dt.config.filter(ele => ele !== reaction.name),
                  }))
                }
              }}
            />
          )
        default:
          break
      }
    },
    [id, keywords, setKeywords],
  )

  const renderCardBody = useCallback(() => {
    return (
      <>
        <SelectField
          name="conditions"
          label="Chọn điều kiện"
          isSearchable
          isRequired
          options={options}
          defaultValue={
            (options && options.find(op => op.value === selectData.value)) || []
          }
          onChange={(name, option) => {
            setSelectData(option)
          }}
        />
        {selectData?.type && (
          <div>
            <Badge color="light-info">{selectData.label}</Badge>
            <div className="p-3" style={{marginTop: '-20px'}}>
              {renderSetting(selectData)}
            </div>
          </div>
        )}
      </>
    )
  }, [options, renderSetting, selectData])

  return (
    <Card>
      <CardBody>{renderCardBody()}</CardBody>
    </Card>
  )
}

export default CardForkInteractionItem
