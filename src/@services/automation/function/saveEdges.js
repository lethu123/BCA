const saveEdges = ({elementHistories, isEdge, dataSubmit, setEdges}) => {
  if (elementHistories.length > 1) {
    if (elementHistories[elementHistories.length - 1].elements.length > 1) {
      let lists = []
      elementHistories[elementHistories.length - 1].elements.forEach(ele => {
        if (isEdge(ele)) {
          let commonEdge = {
            id: ele.id,
            source: ele.source,
            target: ele.target,
            label: ele.label,
          }
          let newEdge =
            ele.source.includes('branching') &&
            !ele.source.includes('branching_condition')
              ? {
                  ...commonEdge,
                  data:
                    dataSubmit[ele.source]?.setting && ele.label
                      ? dataSubmit[ele.source].setting[
                          `percent${+ele.label.split('')[10]}`
                        ]
                      : null,
                }
              : ele.source.includes('fork_interaction')
              ? {
                  ...commonEdge,
                  data: dataSubmit[ele.source]?.setting
                    ? dataSubmit[ele.source].setting.find(el =>
                        ele.label?.includes(el.label),
                      )
                    : null,
                }
              : commonEdge
          lists = [...lists, newEdge]
        }
      })
      setEdges(lists)
    }
  }
}

export default saveEdges
