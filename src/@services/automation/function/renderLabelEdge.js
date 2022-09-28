const renderLabelEdge = ({source, elements}) => {
  let label = null
  if (!source) {
    return label
  } else {
    if (source && source.type === 'decide' && source.setting) {
      if (source.name) {
        // *** Label khoảng thời gian
        if (source.name.includes('duration_time')) {
          label = `${source.setting?.time} ${source.setting?.period}${
            source.setting?.time > 1 ? 's' : ''
          }`
        }

        // *** Label nhánh
        if (
          source.name.includes('branching') &&
          !source.name.includes('branching_condition')
        ) {
          let arrEdgLabel = elements.filter(e => e.source === source.name)
          let index = arrEdgLabel.length + 1
          label = `Branching ${index}: ${source.setting[`percent${index}`]}%`
        }

        // *** Label điều kiện rẽ nhánh
        if (source.name.includes('branching_condition')) {
          let arrEdgLabel = elements.filter(e => e.source === source.name)
          if (arrEdgLabel.length === 0) {
            label = 'True'
          }
          if (arrEdgLabel.length === 1) {
            if (arrEdgLabel[0].label === 'True') {
              label = 'False'
            } else {
              label = 'True'
            }
          }
        }
      }
      return label
    } else {
      return label
    }
  }
}
export default renderLabelEdge
