import {Alert, Col, Row} from 'reactstrap'
import ReactPaginate from 'react-paginate'
import {toast} from 'react-toastify'

// ** component
import SearchHeader from '../search-header/SearchHeader'
import EventItem from '../card/EventItem'
import ModalCreateEvent from '../modal/ModalCreateEvent'

// ** query
import {EventQuery} from '@services/event'
import {useEffect, useState} from 'react'

const GenaralEvent = ({events, filter, setFilter, isWS = false}) => {
  // ** state
  const [id, setId] = useState(null)
  const [dataFormEvent, setDataFormEvent] = useState(null)

  // ** query
  const {data: detailEvent, isError: errorGetEventDetail} =
    EventQuery.useDetailEvent(id)

  useEffect(() => {
    if (detailEvent) {
      setDataFormEvent(detailEvent)
    }
  }, [detailEvent])

  useEffect(() => {
    if (errorGetEventDetail) {
      toast.error('Can not get detail event.')
    }
  }, [errorGetEventDetail])

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
    <div className="card-event">
      <SearchHeader isWS={isWS} filter={filter} setFilter={setFilter} />
      {data.length > 0 ? (
        <Row className="mt-1">
          {data?.map(item => (
            <Col
              xl={isWS ? 6 : 4}
              lg="6"
              md="6"
              className="mb-2"
              sm="12"
              key={item.id}
            >
              {/*begin::Card*/}
              <EventItem item={item} type="day" setId={setId} />
              {/*end:: Card*/}
            </Col>
          ))}

          <Col lg="12">
            <ReactPaginate
              previousLabel=""
              nextLabel=""
              forcePage={filter.page - 1}
              onPageChange={page =>
                setFilter(state => ({...state, page: page.selected + 1}))
              }
              pageCount={metadata?.num_pages || 1}
              breakLabel={'...'}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              activeClassName={'active'}
              pageClassName={'page-item'}
              nextLinkClassName={'page-link'}
              nextClassName={'page-item next'}
              previousClassName={'page-item prev'}
              previousLinkClassName={'page-link'}
              pageLinkClassName={'page-link'}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName={
                'pagination react-paginate pagination-sm justify-content-center pr-1 mt-1'
              }
            />
          </Col>
        </Row>
      ) : (
        <div className="text-center mt-2">Chưa có sự kiện</div>
      )}

      <ModalCreateEvent
        detailEvent={dataFormEvent}
        modal={dataFormEvent !== null}
        toggleModal={() => {
          setId(null)
          setDataFormEvent(null)
        }}
      />
    </div>
  )
}

export default GenaralEvent
