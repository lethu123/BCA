const onEdgeUpdate = ({
  dataSubmit,
  elements,
  oldEdge,
  newConnection,
  toast,
  setElements,
  setDataSubmit,
  setElementHistories,
}) => {
  let valid = true
  let newDataSubmit = {...dataSubmit}
  let newElements = [...elements]

  if (oldEdge.source !== newConnection.source) {
    toast.error('Bạn chỉ có thể THAY ĐỔI đầu phía dưới của liên kết')
    return
  } else {
    setElements(els => {
      const sourceNode = els.find(ele => ele.id === newConnection.source)
      const targetNode = els.find(ele => ele.id === newConnection.target)

      // *** Validation type connect
      // 1. Validation connect concurrently vs exit
      if (
        targetNode.code === 'concurrently' &&
        !sourceNode.code.includes('_action')
      ) {
        toast.error(
          'Song song chỉ có thể được liên kết trực tiếp với hành động!',
        )
        return els
      }

      // 2. Validation connect fork interaction vs action
      if (
        targetNode.code === 'fork_interaction' &&
        !sourceNode.code.includes('_action')
      ) {
        toast.error(
          'Tương tác rẽ nhánh chỉ có thể được liên kết trực tiếp với hành động !',
        )

        return els
      }

      // 3. Validation connect datasource vs exit
      if (sourceNode.code === 'data_source' && targetNode.code === 'exit') {
        toast.error('Nguồn dữ liệu không kể liên kết trực tiếp với kết thúc!')
        return els
      }

      // 4. Validation connect branching vs exit
      if (sourceNode.code === 'branching' && targetNode.code === 'exit') {
        toast.error('Chia nhánh không kể liên kết trực tiếp với kết thúc!')
        return els
      }

      // 5. Valida target fork interaction change
      if (oldEdge.target.includes('fork_interaction')) {
        toast.error(
          'Không thể cập nhật liên kết đã kết nối với tương tác rẽ nhánh !',
        )
        return els
      }

      if (sourceNode && targetNode && sourceNode.id && targetNode.id) {
        setDataSubmit(data => {
          let nodeA = data[sourceNode.id]
          let nodeB = data[targetNode.id]

          if (!nodeB || (nodeB && !nodeB.source && !nodeB.target.length)) {
            let newData = {
              ...data,
              [sourceNode.id]: {
                ...nodeA,
                target:
                  nodeA.target.length > 1
                    ? nodeA.target.map(ele =>
                        ele.id === oldEdge.target
                          ? {
                              id: targetNode.id,
                              title: targetNode.title,
                              type: targetNode.data.type,
                            }
                          : ele,
                      )
                    : [
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
              [oldEdge.target]: {
                ...data[oldEdge.target],
                source: null,
              },
            }

            newDataSubmit = newData
            return newData
          } else {
            if (!nodeB.source) {
              let newData = {...data}
              newData = {
                ...data,
                [sourceNode.id]: {
                  ...nodeA,
                  target:
                    nodeA.target.length > 1
                      ? nodeA.target.map(ele =>
                          ele.id === oldEdge.target
                            ? {
                                id: targetNode.id,
                                title: targetNode.title,
                                type: targetNode.data.type,
                              }
                            : ele,
                        )
                      : [
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
                [oldEdge.target]: {
                  ...data[oldEdge.target],
                  source: null,
                },
              }

              newDataSubmit = newData
              return newData
            } else {
              valid = false
              if (nodeB.source && nodeB.source !== sourceNode.id) {
                toast.error(
                  `${nodeB.title} đã được liên kết xin thử cách khác!`,
                )
              }
              return data
            }
          }
        })
      } else {
        return els
      }

      if (!valid) {
        return els
      } else {
        newElements = els.map(el =>
          el.id === oldEdge.id
            ? {
                ...el,
                target: newConnection.target,
                source: newConnection.source,
              }
            : el,
        )
        setElementHistories(elementHistoriesEl => [
          ...elementHistoriesEl,
          {elements: newElements, dataSubmit: newDataSubmit},
        ])
        return newElements
      }
    })
  }
}

export default onEdgeUpdate
