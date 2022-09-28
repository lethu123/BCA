const onReset = ({
  setElements,
  renderInitialElements,
  setElementHistories,
  renderInitialDataSubmit,
  setDataSubmit,
  setEdges,
}) => {
  setElements([renderInitialElements()])
  setElementHistories([
    {
      elements: [renderInitialElements()],
      dataSubmit: renderInitialDataSubmit(),
    },
  ])
  setDataSubmit(renderInitialDataSubmit())
  setEdges([])
}

export default onReset
