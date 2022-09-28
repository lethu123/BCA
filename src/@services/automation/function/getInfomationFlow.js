const getInfomationFlow = ({
  automationInfo,
  system,
  getLayoutedElements,
  setElements,
  setDataSubmit,
  renderInitialElements,
  setIsEdit,
  setGeneralData,
}) => {
  if (automationInfo) {
    let elementRes = automationInfo.elements
    elementRes = elementRes.map(el => {
      if (el.source) {
        return {
          ...el,
          sourceHandle: null,
          targetHandle: null,
          type: 'smoothstep',
          animated: true,
          style: {
            stroke: '#fff',
          },
          arrowHeadType: 'arrow',
          labelStyle: {
            fill: '#f6ab6c',
            fontWeight: 700,
          },
        }
      } else {
        if (el.code === 'data_source') {
          return {
            ...el,
            data: {
              id: 1001,
              title: 'Nguồn dữ liệu',
              subtitle: 'Cài đặt nguồn dữ liệu đầu vào',
              icon: system,
              code: 'data_source',
              type: 'data_source',
            },
          }
        } else if (el.code === 'auto_task') {
          return {
            ...el,
            data: {
              id: 1001,
              icon: system,
              type: 'data_source',
              title: 'Nhãn hành động',
              subtitle: 'Cài đặt gán nhãn hành động',
              code: 'auto_task',
            },
          }
        } else {
          return {
            ...el,
            data: {
              ...el?.data,
              type:
                el.code === 'exit'
                  ? 'exit'
                  : el?.data?.block_type?.includes('ACTION')
                  ? 'action'
                  : 'decide',
            },
          }
        }
      }
    })
    const layoutedElements = getLayoutedElements(elementRes, 'TB')
    setElements(layoutedElements)
    setDataSubmit(automationInfo.datasubmit)
    setIsEdit(true)
    setGeneralData({
      name: automationInfo.name,
      description: automationInfo.description,
    })
  } else {
    setIsEdit(false)
    setElements([renderInitialElements()])
  }
}

export default getInfomationFlow
