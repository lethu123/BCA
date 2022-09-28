import React, {useState} from 'react'
import {ListGroup} from 'reactstrap'
import {Edit3, X} from 'react-feather'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const DragAndDropLesson = ({
  lesson,
  handleLesson,
  handleSetInitLesson,
  titleModule,
  hadleDeleleLesson,
  idModule,
}) => {
  const [items, setItems] = useState(lesson)
  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const _items = reorder(items, result.source.index, result.destination.index)
    setItems(_items)
  }

  return (
    <React.Fragment>
      <ListGroup id="list-group-dnd" className="content-lesson">
        {items.map((item, index) => (
          <div
            className="course-details__meta"
            style={{
              borderRadius: '5px',
              border: '1px solid #f2ece1',
            }}
            key={index}
          >
            <div
              className="course-details__meta-link py-2 pl-2 bg-white justify-content-between flex-wrap"
              style={{borderRadius: '5px'}}
            >
              <span className="course-details__meta-icon">
                <i className="fas fa-play"></i>
              </span>
              <span className="mr-auto"> {item.title}</span>
              <div className="action-lesson">
                <Edit3
                  size={20}
                  className="mr-1 cursor-pointer "
                  style={{outline: 'none'}}
                  onClick={() => {
                    handleLesson()
                    handleSetInitLesson(item, titleModule)
                  }}
                />
                <X
                  className="cursor-pointer"
                  style={{outline: 'none'}}
                  onClick={() => hadleDeleleLesson(item.id, idModule)}
                />
              </div>
            </div>
          </div>
        ))}
      </ListGroup>
    </React.Fragment>
  )
}

export default DragAndDropLesson
