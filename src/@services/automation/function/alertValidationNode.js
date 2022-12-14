const alertValidationNode = ({
  setValidationEdges,
  dataSubmit,
  findEdgesUnconnectDataSourse,
  edges,
  elements,
  isEdge,
}) => {
  let {unConnectEdgeIds} = findEdgesUnconnectDataSourse(edges)

  let newDataSubmit = {...dataSubmit}

  newDataSubmit = Object.keys(newDataSubmit).reduce((acc, key) => {
    if (key !== 'data_source') {
      if (
        !(
          newDataSubmit[key].target?.length === 0 &&
          newDataSubmit[key].source === null
        )
      ) {
        return {...acc, [key]: newDataSubmit[key]}
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

  // *** SHOW DATA
  console.log('DATASUBMIT', newDataSubmit)

  unConnectEdgeIds.forEach(ele => {
    delete newDataSubmit[ele]
  })

  // *** Warning unconnects
  let unconnects = []
  elements.forEach(ele => {
    if (unConnectEdgeIds.includes(ele.id)) {
      unconnects.push(ele.title)
    }
  })
  let listNodeNoSettings = elements
    .filter(el => !isEdge(el) && el.data.isNoSetting)
    .map(el => el.id)
  // *** Danger nosetting node
  let keyNews = Object.keys(newDataSubmit)
  let noSettings = []
  if (keyNews.length > 0) {
    keyNews.forEach(key => {
      if (!newDataSubmit[key].setting && !listNodeNoSettings.includes(key)) {
        noSettings.push(newDataSubmit[key].title)
      }
    })
  }

  let decideInvalids = []
  let noExits = []

  let actionCount = 0
  keyNews.forEach(key => {
    if (key.includes('action')) {
      actionCount += 1
    }

    let title = newDataSubmit[key]?.title || ''
    let type = newDataSubmit[key].type
    let target = newDataSubmit[key].target?.length || 0

    // *** Danger validation decide node
    if (newDataSubmit[key]?.setting) {
      // *** Chia nh??nh
      if (key.includes('branching') && !key.includes('branching_condition')) {
        let branch = newDataSubmit[key].setting?.branch
        if (target < branch) {
          decideInvalids.push(`${title} Ch??a ????? ${branch} li??n k???t nh?? c??i ?????t`)
        }
      }

      // *** ??i???u ki???n r??? nh??nh
      if (
        key.includes('branching_condition') ||
        key.includes('fork_interaction')
      ) {
        if (target < 1) {
          decideInvalids.push(`${title} ch??a c?? li??n k???t`)
        }
      }
    }
    // *** Song song
    if (key.includes('concurrently')) {
      if (target < 2) {
        decideInvalids.push(`${title} ph???i c?? ??t nh???t 2 li??n k???t`)
      }
    }
    // *** Check last action is unconnect exit
    if (!target && type !== 'exit') {
      noExits.push(title)
    }
  })

  // *** Ph???i c?? ??t nh???t 1 h??nh ?????ng
  if (!actionCount) {
    decideInvalids.push('Ph???i c?? ??t nh???t 1 h??nh ?????ng ???????c li??n k???t')
  }

  // *** Save validation
  setValidationEdges(validation => ({
    ...validation,
    noSettings,
    unconnects,
    decideInvalids,
    noExits,
  }))
}

export default alertValidationNode
