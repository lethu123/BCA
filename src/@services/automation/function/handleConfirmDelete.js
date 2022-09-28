const handleConfirmDelete = async ({
  element,
  MySwal,
  dataSubmit,
  elements,
  isEdge,
  setDataSubmit,
  setElements,
  setElementHistories,
  updateMultipleArrState,
  currentItem,
  setCurrentItem,
}) => {
  if (!element) return
  let titleElement = element.data?.title || ''
  const result = await MySwal.fire({
    title: 'Bạn phải liên kết để cài đặt!!!',
    text: dataSubmit[element.id]
      ? `Các liên kết và cài đặt với ${titleElement} sẽ mất`
      : 'Bạn có chắc chắn xóa?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: `Xóa ${titleElement}`,
    customClass: {
      confirmButton: 'btn btn-danger',
      cancelButton: 'btn btn-outline-secondary ml-1',
    },
    buttonsStyling: false,
  })

  if (result.value) {
    let newDataSubmit = {...dataSubmit}
    let newElements = [...elements]

    // Xóa exit
    // if (element.id && element.id.includes('exit')) {
    //   if (newDataSubmit[element.id]) {
    //     let sourceIds = newDataSubmit[element.id].source

    //     newElements = elements.filter(el => {
    //       if (isEdge(el)) {
    //         return !(sourceIds.includes(el.source) && el.target === element.id)
    //       } else {
    //         return el.id !== element.id
    //       }
    //     })

    //     sourceIds.forEach(key => {
    //       if (newDataSubmit[key]) {
    //         newDataSubmit = {
    //           ...newDataSubmit,
    //           [key]: {
    //             ...newDataSubmit[key],
    //             target: newDataSubmit[key].target.filter(
    //               el => el.id !== element.id,
    //             ),
    //           },
    //         }
    //       }
    //     })

    //     // 3 - Delete datasubmit choosen
    //     delete newDataSubmit[element.id]
    //     setDataSubmit(newDataSubmit)
    //     setElements(newElements)
    //   } else {
    //     newElements = elements.filter(el => el.id !== element.id)
    //     setElements(newElements)
    //   }

    //   setElementHistories(elementHistoriesEl => [
    //     ...elementHistoriesEl,
    //     {elements: newElements, dataSubmit: newDataSubmit},
    //   ])

    //   return
    // } else {

    // }
    let keyDataSubmits = Object.keys(newDataSubmit)
    if (newDataSubmit[element.id]) {
      // *** Handle datasubmit
      // 1 - Remove target connect
      let sourceId = newDataSubmit[element.id].source

      if (sourceId) {
        if (newDataSubmit[sourceId]) {
          let targetArr = newDataSubmit[sourceId].target
          newDataSubmit = {
            ...newDataSubmit,
            [sourceId]: {
              ...newDataSubmit[sourceId],
              target: targetArr.filter(ele => ele.id !== element.id),
            },
          }
        }
      }
      // 2 - Remove source connect
      let targetIds = newDataSubmit[element.id].target
      if (targetIds?.length > 0) {
        targetIds.forEach(ele => {
          if (newDataSubmit[ele.id]) {
            newDataSubmit = {
              ...newDataSubmit,
              [ele.id]: {...newDataSubmit[ele.id], source: null},
            }
          }
        })
      }

      // 3 - Delete datasubmit choosen
      delete newDataSubmit[element.id]
    }

    keyDataSubmits.forEach(key => {
      if (
        newDataSubmit[key] &&
        newDataSubmit[key].source === null &&
        newDataSubmit[key].target.length === 0 &&
        newDataSubmit[key].type !== 'data_source'
      ) {
        delete newDataSubmit[key]
      }
    })

    setDataSubmit(newDataSubmit)

    // *** Handle elements
    newElements = elements.filter(ele => {
      if (isEdge(ele)) {
        return ele.source !== element.id && ele.target !== element.id
      } else {
        return ele.id !== element.id
      }
    })

    // *** Update branching
    let connectBranchingEdge = elements.find(
      el =>
        isEdge(el) &&
        el.source.includes('branching') &&
        !el.source.includes('branching_condition') &&
        el.target === element.id,
    )
    let sourceConnect = connectBranchingEdge && connectBranchingEdge.source
    if (sourceConnect && newDataSubmit[sourceConnect]) {
      let setting = newDataSubmit[sourceConnect].setting
      if (setting) {
        let branchingEdges = newElements.filter(
          el => isEdge(el) && el.source === sourceConnect,
        )
        if (branchingEdges.length > 0) {
          branchingEdges = branchingEdges.map((el, idx) => ({
            ...el,
            label: `Nhánh ${idx + 1}: ${setting[`percent${idx + 1}`]}%`,
          }))
          newElements = updateMultipleArrState(
            branchingEdges,
            newElements,
            'id',
          )
        }
      }
    }

    setElements(newElements)
    setElementHistories(elementHistoriesEl => [
      ...elementHistoriesEl,
      {elements: newElements, dataSubmit: newDataSubmit},
    ])
    setCurrentItem({...currentItem, id: null})
  }
}
export default handleConfirmDelete
