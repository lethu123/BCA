const onConnect = ({
  params,
  elements,
  toast,
  dataSubmit,
  handleAddEdge,
  setDataSubmit,
}) => {
  const sourceNode = elements.find(ele => ele.id === params.source)
  const targetNode = elements.find(ele => ele.id === params.target)

  let isExit = targetNode.typeNode === 'exit'

  // *** Validation type connect

  // 1. Validation connect concurrently vs exit
  if (
    targetNode.code === 'concurrently' &&
    !sourceNode.code.includes('_action')
  ) {
    toast.error('Song song chỉ có thể được liên kết trực tiếp với hành động !')
    return
  }

  // 2. Validation connect fork interaction vs action
  if (
    targetNode.code === 'fork_interaction' &&
    !sourceNode.code.includes('_action')
  ) {
    toast.error(
      'Tương tác rẽ nhánh chỉ có thể được liên kết trực tiếp với hành động !',
    )
    return
  }

  // 3. Validation connect datasource vs exit
  if (sourceNode.code === 'data_source' && targetNode.code === 'exit') {
    toast.error('Nguồn dữ liệu không kể liên kết trực tiếp với kết thúc!')
    return
  }

  // 4. Validation connect branching vs exit
  if (sourceNode.code === 'branching' && targetNode.code === 'exit') {
    toast.error('Chia nhánh không kể liên kết trực tiếp với kết thúc!')
    return
  }

  if (sourceNode && targetNode && sourceNode.id && targetNode.id) {
    let nodeA = dataSubmit[sourceNode.id]
    let nodeB = dataSubmit[targetNode.id]

    if (
      (nodeA && sourceNode.code === 'fork_interaction' && !nodeA.setting) ||
      (!nodeA && sourceNode.code === 'fork_interaction')
    ) {
      toast.error(`Bạn phải CÀI ĐẶT TƯƠNG TÁC RẼ NHÁNH trước khi liên kết!`)
      return
    }

    // *** Update Node
    if (!nodeA && !nodeB) {
      // ***  NODE A & NODE B chưa có liên kết
      let newData = {
        ...dataSubmit,
        [sourceNode.id]: {
          typeNode: sourceNode.typeNode,
          type:
            sourceNode.id === 'data_source'
              ? 'data_source'
              : sourceNode.data && sourceNode.data.type,
          title: sourceNode.title,
          source: null,
          target: [
            {
              id: targetNode.id,
              title: targetNode.title,
              type: targetNode.data.type,
            },
          ],
        },
        [targetNode.id]: {
          typeNode: targetNode.typeNode,
          type: targetNode.data.type,
          title: targetNode.title,
          source: isExit ? [sourceNode.id] : sourceNode.id,
          target: [],
        },
      }
      if (!sourceNode.id?.includes('fork_interaction')) {
        setDataSubmit(newData)
      }
      handleAddEdge(params, null, newData)
      return
    } else if (!nodeA && nodeB) {
      // ***  NODE A chưa có liên kết & NODE B đã có liên kết
      let newData = {...dataSubmit}
      if (!nodeB.source && !isExit) {
        newData = {
          ...newData,
          [sourceNode.id]: {
            typeNode: sourceNode.typeNode,
            type:
              sourceNode.id === 'data_source'
                ? 'data_source'
                : sourceNode.data && sourceNode.data.type,
            title: sourceNode.title,
            source: null,
            target: [
              {
                id: targetNode.id,
                title: targetNode.title,
                type: targetNode.data.type,
              },
            ],
          },
          [targetNode.id]: {
            ...nodeB,
            source: sourceNode.id,
          },
        }
      } else {
        if (isExit) {
          newData = {
            ...newData,
            [sourceNode.id]: {
              typeNode: sourceNode.typeNode,
              type:
                sourceNode.id === 'data_source'
                  ? 'data_source'
                  : sourceNode.data && sourceNode.data.type,
              title: sourceNode.title,
              source: null,
              target: [
                {
                  id: targetNode.id,
                  title: targetNode.title,
                  type: targetNode.data.type,
                },
              ],
            },
            [targetNode.id]: {
              ...nodeB,
              source: newData[targetNode.id].source
                ? [...newData[targetNode.id].source, sourceNode.id]
                : [sourceNode.id],
            },
          }
        } else {
          toast.error(`${nodeB.title} đã được liên kết xin thử cách khác!`)
          return
        }
      }
      if (!sourceNode.id?.includes('fork_interaction')) {
        setDataSubmit(newData)
      }
      handleAddEdge(params, null, newData)
      return
    } else if (nodeA && !nodeB) {
      // ***  NODE A đã có liên kết & NODE B chưa có liên kết
      let newData = {...dataSubmit}
      let typeNode = nodeA.typeNode
      let target = nodeA.target
      if (isExit) {
        let targetIds = target.map(el => el.id)
        let isValidExit = targetIds.find(id => id.includes('exit'))
        if (isValidExit && typeNode !== 'manual') {
          toast.error('Hành động chỉ được liên kết với 1 kết thúc')
          return
        }

        // let numMultipleForkInteraction = nodeA.setting
        //   ? nodeA.setting.length
        //   : 0
        // if (
        //   typeNode === 'manual' &&
        //   numMultipleForkInteraction > 0 &&
        //   target.length === numMultipleForkInteraction
        // ) {
        //   toast.error(
        //     `${nodeA.title} hiện chỉ liên kết với ${numMultipleForkInteraction} tác vụ , xin thử CÀI ĐẶT lại!`,
        //   )
        //   return
        // }
        newData = {
          ...newData,
          [sourceNode.id]: {
            ...nodeA,
            target: [
              ...target,
              {
                id: targetNode.id,
                title: targetNode.title,
                type: targetNode.data.type,
              },
            ],
          },
          [targetNode.id]: {
            typeNode: targetNode.typeNode,
            type: targetNode.data.type,
            title: targetNode.title,
            source: [sourceNode.id],
            target: [],
          },
        }
      } else {
        let numMultiple = nodeA.setting ? nodeA.setting.branch : 5
        // let numMultipleForkInteraction = nodeA.setting
        //   ? nodeA.setting.length
        //   : 0
        if (typeNode === 'single' && target.length === 1) {
          toast.error(
            `${nodeA.title} đã liên kết với ${target[0].title}, xin thử cách khác!`,
          )
          return
        } else if (typeNode === 'double' && target.length === 2) {
          toast.error(
            `${nodeA.title} đã liên kết với ${target[0].title} và ${target[1].title}, xin thử cách khác!`,
          )
          return
        } else if (typeNode === 'multiple' && target.length === numMultiple) {
          toast.error(
            `${nodeA.title} hiện chỉ liên kết với ${numMultiple} tác vụ và tối đa 5 tác vụ, xin thử cài đặt lại!`,
          )
          return
        }
        // else if (
        //   typeNode === 'manual' &&
        //   numMultipleForkInteraction > 0 &&
        //   target.length === numMultipleForkInteraction
        // ) {
        //   toast.error(
        //     `${nodeA.title} hiện chỉ liên kết với ${numMultipleForkInteraction} tác vụ , xin thử CÀI ĐẶT lại!`,
        //   )
        //   return
        // }
        else {
          newData = {
            ...newData,
            [sourceNode.id]: {
              ...nodeA,
              target: [
                ...target,
                {
                  id: targetNode.id,
                  title: targetNode.title,
                  type: targetNode.data.type,
                },
              ],
            },
            [targetNode.id]: {
              typeNode: targetNode.typeNode,
              type: targetNode.data.type,
              title: targetNode.title,
              source: sourceNode.id,
              target: [],
            },
          }
        }
      }
      if (!sourceNode.id?.includes('fork_interaction')) {
        setDataSubmit(newData)
      }
      handleAddEdge(params, {...nodeA, name: sourceNode.id}, newData)
      return
    } else {
      // ***  NODE A & NODE B đã có liên kết
      let newData = {...dataSubmit}
      let typeNode = nodeA.typeNode
      let target = nodeA.target
      // let numMultipleForkInteraction = nodeA.setting ? nodeA.setting.length : 0
      if (nodeB.source && !isExit) {
        toast.error(`${nodeB.title} đã được liên kết xin thử cách khác!`)
        return
      } else {
        if (isExit) {
          let targetIds = target.map(el => el.id)
          let isValidExit = targetIds.find(id => id.includes('exit'))
          if (isValidExit || target.length === 1) {
            toast.error(`${nodeA.title} đã có liên kết!`)
            return
          }
          // if (
          //   typeNode === 'manual' &&
          //   numMultipleForkInteraction > 0 &&
          //   target.length === numMultipleForkInteraction
          // ) {
          //   toast.error(
          //     `${nodeA.title} hiện chỉ liên kết với ${numMultipleForkInteraction} tác vụ , xin thử CÀI ĐẶT lại!`,
          //   )
          //   return
          // }
          newData = {
            ...newData,
            [sourceNode.id]: {
              ...nodeA,
              target: [
                ...target,
                {
                  id: targetNode.id,
                  title: targetNode.title,
                  type: targetNode.data.type,
                },
              ],
            },
            [targetNode.id]: {
              typeNode: targetNode.typeNode,
              type: targetNode.data.type,
              title: targetNode.title,
              source: [...newData[targetNode.id].source, sourceNode.id],
              target: [],
            },
          }
          if (!sourceNode.id?.includes('fork_interaction')) {
            setDataSubmit(newData)
          }
          handleAddEdge(params, {...nodeA, name: sourceNode.id}, newData)
          return
        } else {
          if (typeNode === 'single' && target.length === 1) {
            toast.error(
              `${nodeA.title} đã liên kết với ${target[0].title}, xin thử cách khác!`,
            )
            return
          } else if (typeNode === 'double' && target.length === 2) {
            toast.error(
              `${nodeA.title} đã liên kết với ${target[0].title} và ${target[1].title}, xin thử cách khác!`,
            )
            return
          } else if (typeNode === 'multiple' && target.length === 5) {
            toast.error(
              `${nodeA.title} chỉ liên kết tối đa 5 tác vụ, xin thử cách khác!`,
            )
            return
          }
          // else if (
          //   typeNode === 'manual' &&
          //   numMultipleForkInteraction > 0 &&
          //   target.length === numMultipleForkInteraction
          // ) {
          //   toast.error(
          //     `${nodeA.title} hiện chỉ liên kết với ${numMultipleForkInteraction} tác vụ , xin thử CÀI ĐẶT lại!`,
          //   )
          //   return
          // }
          else {
            newData = {
              ...dataSubmit,
              [sourceNode.id]: {
                ...nodeA,
                target: [
                  ...target,
                  {
                    id: targetNode.id,
                    title: targetNode.title,
                    type: targetNode.data.type,
                  },
                ],
              },
              [targetNode.id]: {
                ...nodeB,
                source: sourceNode.id,
              },
            }
          }
          if (!sourceNode.id?.includes('fork_interaction')) {
            if (!sourceNode.id?.includes('fork_interaction')) {
              setDataSubmit(newData)
            }
          }

          handleAddEdge(params, {...nodeA, name: sourceNode.id}, newData)
        }
      }
    }
  }
}
export default onConnect
