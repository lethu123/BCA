const updateDataSubmitSetting = ({
  data,
  elements,
  dataSubmit,
  id,
  setElements,
  updateMultipleArrState,
  setElementHistories,
  setDataSubmit,
  currentItem,
  setCurrentItem,
}) => {
  if (data) {
    let newElement = [...elements]
    let newDataSubmit = {
      ...dataSubmit,
      [id]: {...dataSubmit[id], setting: data},
    }

    // *** Cập nhật khoảng thời gian
    if (id.includes('duration_time')) {
      let edgeLabel = elements.find(ele => ele.source === id)
      if (edgeLabel && newDataSubmit[id]) {
        let newLabel = `${data.time} ${data.period}${data.time > 1 ? 's' : ''}`
        newElement = elements.map(el =>
          el.id === edgeLabel.id ? {...el, label: newLabel} : el,
        )
        setElements(newElement)
      }
    }

    // *** Cập nhật chia nhánh
    if (id.includes('branching') && !id.includes('branching_condition')) {
      let arrEdge = elements.filter(e => e.source && e.source === id)
      arrEdge = arrEdge.slice(0, data?.branch || 0)
      if (arrEdge.length > 0) {
        arrEdge = arrEdge.map((el, idx) => ({
          ...el,
          label: `Branching ${idx + 1}: ${data[`percent${idx + 1}`]}%`,
        }))
        newElement = updateMultipleArrState(arrEdge, elements, 'id')
        setElements(newElement)
      }
    }

    // *** Cập nhật điều kiện rẽ nhánh
    if (id.includes('branching_condition')) {
      let arrEdge = elements.filter(e => e.source && e.source === id)
      if (arrEdge.length === 1) {
        if (arrEdge[0].label === 'True') {
          arrEdge[0].label = 'True'
        } else {
          arrEdge[0].label = 'False'
        }
      }

      if (arrEdge.length === 2) {
        if (arrEdge[0].label === 'True') {
          arrEdge[0].label = 'True'
          arrEdge[1].label = 'False'
        } else {
          arrEdge[1].label = 'True'
          arrEdge[0].label = 'False'
        }
      }
      newElement = updateMultipleArrState(arrEdge, elements, 'id')
      setElements(newElement)
    }

    // *** Cập nhật tương tác rẽ nhánh
    if (id.includes('fork_interaction')) {
      let arrEdge = elements.filter(e => e.source && e.source === id)
      let labels = data.map(d => d.label)
      let deleteEdges = arrEdge.filter(edge => !labels.includes(edge.label))
      let arrTargetDelete = deleteEdges.map(edge => edge.target)

      newDataSubmit = {
        ...newDataSubmit,
        [id]: {
          ...newDataSubmit[id],
          target: newDataSubmit[id]?.target.filter(
            el => !arrTargetDelete.includes(el.id),
          ),
        },
      }

      if (arrTargetDelete.length > 0) {
        arrTargetDelete.forEach(target => {
          if (!target.includes('exit')) {
            newDataSubmit = {
              ...newDataSubmit,
              [target]: {...newDataSubmit[target], source: null},
            }
          } else {
            newDataSubmit = {
              ...newDataSubmit,
              [target]: {
                ...newDataSubmit[target],
                source: newDataSubmit[target]?.source.filter(el => el !== id),
              },
            }
          }
        })
      }

      newElement = elements.filter(
        el => !deleteEdges.find(el1 => el1.label === el.label),
      )

      setElements(newElement)
    }

    setDataSubmit(newDataSubmit)
    setElementHistories(elementHistoriesEl => [
      ...elementHistoriesEl,
      {elements: newElement, dataSubmit: newDataSubmit},
    ])
    setCurrentItem({...currentItem, id: null})
  }
}

export default updateDataSubmitSetting
