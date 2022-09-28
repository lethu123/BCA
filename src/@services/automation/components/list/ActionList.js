import {useEffect, useState} from 'react'
import {Badge, ListGroup, ListGroupItem} from 'reactstrap'
import ReactPaginate from 'react-paginate'
import NodeItem from '../../auto-flow/NodeItem'

const types = [
  {id: 0, text: 'Tất cả', color: 'secondary', count: 17, type: 'all'},
  {id: 1, text: 'Cá nhân', color: 'warning', count: 6, type: 'personal'},
  {id: 2, text: 'Nhóm', color: 'danger', count: 4, type: 'group'},
  {id: 3, text: 'Trang', color: 'info', count: 3, type: 'page'},
  {id: 4, text: 'Sasam', color: 'primary', count: 4, type: 'sasam'},
]

const handleData = (data, start, end) => {
  let newData = []
  data.forEach((ele, idx) => {
    if (idx > start - 1 && idx < end) {
      newData = [...newData, ele]
    }
  })
  return newData
}

const DataList = ({data = [], isFacebook = false, metadata}) => {
  const [selectType, setSelectType] = useState('all')
  const [listActions, setListActions] = useState(() =>
    isFacebook && data.length > 0 ? handleData(data, 0, 5) : data,
  )

  // *** Function to handle Pagination
  const handlePagination = page => {
    setListActions(handleData(data, page.selected * 5, (page.selected + 1) * 5))
  }

  // *** Filter pagination
  useEffect(() => {
    if (isFacebook) {
      if (selectType !== 'all') {
        setListActions(data.filter(ele => ele.type === selectType))
      } else {
        setListActions(handleData(data, 0, 5))
      }
    }
  }, [data, isFacebook, selectType])

  // *** onDrag
  const onDragStart = (event, data) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify({type: 'action', data}),
    )
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <>
      {isFacebook && (
        <div className="d-flex mb-3 flex-wrap">
          {types.map(ele => (
            <Badge
              key={ele.id}
              color={`light-${ele.color}`}
              className="m-2 cursor-pointer"
              onClick={() => setSelectType(ele.type)}
            >
              <span className="align-middle">
                {ele.text} ({ele.count})
              </span>
            </Badge>
          ))}
        </div>
      )}
      <ListGroup>
        {listActions.length > 0 &&
          listActions.map(ele => (
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
      {isFacebook && selectType === 'all' && (
        <ReactPaginate
          previousLabel=""
          nextLabel=""
          forcePage={0}
          onPageChange={page => handlePagination(page)}
          pageCount={data.length / 5}
          breakLabel="..."
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          activeClassName="active"
          pageClassName="page-item"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          nextClassName="page-item next"
          previousClassName="page-item prev"
          previousLinkClassName="page-link"
          pageLinkClassName="page-link"
          containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"
        />
      )}
    </>
  )
}

export default DataList
