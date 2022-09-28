const onRestore = ({
  elementHistories,
  setDataSubmit,
  setElements,
  setElementHistories,
}) => {
  let newIndex = elementHistories.length - 1
  const arrCurrent = elementHistories.slice(0, newIndex)

  setDataSubmit(arrCurrent[newIndex - 1].dataSubmit)
  setElements(arrCurrent[newIndex - 1].elements)
  setElementHistories(arrCurrent)
}

export default onRestore
