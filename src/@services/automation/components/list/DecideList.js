import {ListGroup, ListGroupItem} from 'reactstrap'
import NodeItem from '../../auto-flow/NodeItem'

const DecideList = ({data = []}) => {
  // *** onDrag
  const onDragStart = (event, data) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify({type: 'decide', data}),
    )
    event.dataTransfer.effectAllowed = 'move'
  }
  return (
    <ListGroup>
      {data.length > 0 &&
        data.map(ele => (
          <ListGroupItem
            key={ele._id}
            style={{cursor: 'grab'}}
            onDragStart={event => onDragStart(event, ele)}
            draggable
          >
            <NodeItem item={ele} />
          </ListGroupItem>
        ))}
    </ListGroup>
  )
}

export default DecideList
