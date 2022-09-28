const onLayout = ({
  elementHistories,
  getLayoutedElements,
  direction,
  setElementHistories,
}) => {
  let lastElement = elementHistories[elementHistories.length - 1].elements
  const layoutedElements = getLayoutedElements(lastElement, direction)

  setElementHistories(elementHistoriesEl =>
    elementHistoriesEl.map((el, idx) =>
      idx === elementHistories.length - 1
        ? {...el, elements: layoutedElements}
        : el,
    ),
  )
}

export default onLayout
