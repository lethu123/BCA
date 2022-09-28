const handleSubmitData = ({
  data,
  findEdgesUnconnectDataSourse,
  edges,
  dataSubmit,
  automationType,
  elements,
  onSubmit,
}) => {
  let {name, description} = data

  let {newEdgeArrs, unConnectEdgeIds} = findEdgesUnconnectDataSourse(edges)

  let newDataSubmit = {...dataSubmit}

  unConnectEdgeIds.forEach(ele => {
    delete newDataSubmit[ele]
  })

  newDataSubmit = Object.keys(newDataSubmit).reduce((acc, key) => {
    if (key !== 'data_source') {
      if (key.includes('exit')) {
        if (newDataSubmit[key].source?.length !== 0) {
          return {...acc, [key]: newDataSubmit[key]}
        }
      } else {
        if (
          !(
            newDataSubmit[key].target?.length === 0 &&
            newDataSubmit[key].source === null
          )
        ) {
          return {...acc, [key]: newDataSubmit[key]}
        }
      }
    } else {
      return {...acc, [key]: newDataSubmit[key]}
    }
    return acc
  }, {})

  let keys = Object.keys(newDataSubmit)
  newDataSubmit = keys.reduce((acc, key) => {
    let code = key !== 'data_source' ? key.split('_') : key
    if (Array.isArray(code)) {
      code = code.slice(0, code.length - 1)
      code = code.join('_')
    }
    return {...acc, [key]: {...newDataSubmit[key], code}}
  }, {})

  let requestData = {
    name,
    description,
    data_field:
      automationType === 'job'
        ? {
            label: 'Khai thác khách hàng tiềm năng',
            value: 'cx',
          }
        : newDataSubmit?.data_source?.setting?.type_action,
    account: newDataSubmit?.data_source?.setting?.account,
    datasubmit: newDataSubmit,
    edges: newEdgeArrs,
    elements,
    status: '615bc93d2d6536fd7de38956',
  }

  onSubmit(requestData)
}

export default handleSubmitData
