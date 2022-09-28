import {useState} from 'react'
import ReactPaginate from 'react-paginate'
import {Alert, Col, Row} from 'reactstrap'

// ** component
import EventItemNewfeed from '@services/event/components/card/EventItemNewfeed'

// ** query
import {EventQuery} from '@services/event'

const data = [
  {
    id: 1,
    url: '#',
    title: 'Tuyển dụng IT HCM',
    picture: '',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description:
      ' Mô tả ngắn về nhóm: This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    id: 2,
    url: '#',
    title: 'Việc làm IT',
    picture: '',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description:
      ' Mô tả ngắn về nhóm: This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    id: 3,
    url: '#',
    title: 'Cộng đồng designer',
    picture: '',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description:
      ' Mô tả ngắn về nhóm: This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
]
const EventNewfeed = () => {
  const [currentPage, setCurrentPage] = useState(0)

  // ** query
  const {data: events} = EventQuery.useListEvent({page: currentPage + 1})

  console.log('event', events)

  // *** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  if (!events)
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="fw-bold">Chưa có dữ liệu</span>
        </div>
      </Alert>
    )

  const {data, metadata} = events

  return (
    <div>
      {data.length < 1 ? (
        <Alert color="primary">
          <div className="alert-body">
            <span className="fw-bold">Chưa có dữ liệu</span>
          </div>
        </Alert>
      ) : (
        <>
          <Row className="mt-1">
            {data &&
              data.map(item => (
                <Col lg="6" md="12" sm="6" key={item.id}>
                  <EventItemNewfeed item={item} />
                </Col>
              ))}
          </Row>
          <ReactPaginate
            previousLabel=""
            nextLabel=""
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={metadata.num_pages || 1}
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
            containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center pr-1 my-1"
          />
        </>
      )}
    </div>
  )
}

export default EventNewfeed
