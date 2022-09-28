const onDrop = ({
  event,
  elements,
  toast,
  reactFlowWrapper,
  reactFlowInstance,
  uid,
  handleNodeType,
  elementHistories,
  setElementHistories,
  dataSubmit,
  setElements,
}) => {
  event.preventDefault()

  if (elements.length > 101) {
    toast.error('Bạn chỉ tạo tối đa 50 hành động/quyết định và 50 liên kết !')
    return
  }

  const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
  const dataTransfer = event.dataTransfer.getData('application/reactflow')
  const position = reactFlowInstance.project({
    x: event.clientX - reactFlowBounds.left,
    y: event.clientY - reactFlowBounds.top,
  })

  let {type, data} = JSON.parse(dataTransfer)

  if (type === 'action' || type === 'decide') {
    let uuid = uid().slice(0, 4)
    const newNode = {
      id: `${data.code}_${+new Date()}`,
      type: 'customNode',
      position,
      code: data.code,
      title: `${data.title} #${uuid}`,
      typeNode: handleNodeType(type, data.code),
      data: {
        ...data,
        title: `${data.title} #${uuid}`,
        type: data.code === 'exit' ? 'exit' : type,
      },
    }

    let newElements = elements.concat(newNode)
    if (!(elements.length > elementHistories.length)) {
      setElementHistories(elementHistoriesEl => [
        ...elementHistoriesEl,
        {elements: newElements, dataSubmit},
      ])
    }

    setElements(newElements)
  }
}

export default onDrop
