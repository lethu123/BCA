const findEdgesUnconnectDataSourse = ({edges, findDiffElementTwoArr}) => {
  let newEdgeArrs = []

  let dataSource = edges.find(edge => edge.source === 'data_source')

  if (dataSource) {
    newEdgeArrs.push(dataSource)

    let edgeIds = newEdgeArrs.map(edge => edge.id)

    edgeIds = Array.from(new Set(edgeIds))

    let stepIds = [newEdgeArrs[0].target]

    edges.forEach(edge => {
      stepIds = Array.from(new Set(stepIds))

      stepIds.forEach(target => {
        let nextStepEdge = edges.filter(el => el.source === target)

        if (nextStepEdge.length === 1) {
          if (!edgeIds.includes(nextStepEdge[0].id)) {
            newEdgeArrs.push(nextStepEdge[0])
          }
          stepIds = [...stepIds, nextStepEdge[0].target]
        }
        if (nextStepEdge.length > 1) {
          let arr = []

          nextStepEdge.forEach(el => {
            arr.push(el.target)
          })

          let difference = nextStepEdge.filter(
            step => !edgeIds.includes(step.id),
          )
          newEdgeArrs = [...newEdgeArrs, ...difference]

          stepIds = [...stepIds, ...arr]
        }
      })
    })
  }
  let edgeIds = newEdgeArrs.map(edge => edge.id)

  edgeIds = Array.from(new Set(edgeIds))

  newEdgeArrs = edgeIds.map(id => ({
    ...newEdgeArrs.find(edge => edge.id === id),
  }))

  let unConnectEdges = findDiffElementTwoArr(newEdgeArrs, edges, 'id')

  unConnectEdges = unConnectEdges.reduce((acc, current) => {
    let exitTarget = current.target.includes('exit') ? current.target : null
    if (exitTarget) {
      let edgeTargetExit = edges.filter(edge => edge.target === exitTarget)
      if (edgeTargetExit.length > 1) {
        acc = [...acc, {...current, target: null}]
      } else {
        acc = [...acc, current]
      }
    } else {
      acc = [...acc, current]
    }
    return acc
  }, [])

  let unConnectEdgeIds = []
  unConnectEdges.forEach(ele => {
    if (ele.source) {
      unConnectEdgeIds.push(ele.source)
    }
    if (ele.target) {
      unConnectEdgeIds.push(ele.target)
    }
  })

  unConnectEdgeIds = Array.from(new Set(unConnectEdgeIds))
  return {unConnectEdgeIds, newEdgeArrs}
}

export default findEdgesUnconnectDataSourse
