const saveHistoryElement = ({
  elements,
  elementHistories,
  setElementHistories,
  dataSubmit,
  renderInitialElements,
  renderInitialDataSubmit,
}) => {
  if (elements.length > 1) {
    if (elementHistories.length < elements.length) {
      setElementHistories(elementHistoriesEl => [
        ...elementHistoriesEl,
        {elements, dataSubmit},
      ])
    }
  } else {
    setElementHistories([
      {
        elements: [renderInitialElements()],
        dataSubmit: renderInitialDataSubmit(),
      },
    ])
  }
}

export default saveHistoryElement
