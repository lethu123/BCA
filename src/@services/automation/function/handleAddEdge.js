const handleAddEdge = ({
  params,
  renderLabelEdge,
  setElements,
  addEdge,
  elements,
  elementHistories,
  setElementHistories,
  newDataSubmit,
  source,
  setSourceForkInteraction,
}) => {
  let newElement = {
    ...params,
    id: `${+new Date()}`,
    type: 'smoothstep',
    animated: true,
    style: {stroke: '#fff'},
    arrowHeadType: 'arrow',
    label: renderLabelEdge,
    labelStyle: {
      fill: '#f6ab6c',
      fontWeight: 700,
    },
  }

  if (source && source.name.includes('fork_interaction')) {
    setSourceForkInteraction({
      ...source,
      newElement,
      newDataSubmit,
    })
    return
  } else {
    setElements(els => addEdge(newElement, els))
    if (!(elements.length > elementHistories.length)) {
      setElementHistories(elementHistoriesEl => [
        ...elementHistoriesEl,
        {elements: [...elements, newElement], dataSubmit: newDataSubmit},
      ])
    }
  }
}

export default handleAddEdge
