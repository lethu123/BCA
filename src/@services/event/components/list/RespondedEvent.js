import {Col, Row} from 'reactstrap'
import EventItem from '../card/EventItem'

const image =
  'https://metronic-ui-kit.netlify.app/assets/media/project-logos/3.png'
const event = [
  {
    id: 1,
    title: ' Nexa - Next generation SAAS',
    date: ' May 25, 2020',
    isToday: true, // làm tạm hôm sau fix lại
    picture: image,
    address: 'TP Hồ Chí Minh',
    isOnline: false,
    description:
      ' I distinguish three main text objectives.First, your objective  could be merely to inform people.A second be to persuade people.',
  },
  {
    id: 2,
    title: 'B & Q - Food Company',
    date: ' May 25, 2020',
    isToday: false,
    picture: image,
    address: 'TP Hồ Chí Minh',
    isOnline: false,
    description:
      ' I distinguish three main text objectives.First, your objective  could be merely to inform people.A second be to persuade people.',
  },
]
const RespondedEvent = () => {
  return (
    <div className=" ">
      <span className="btn mt-5  btn-light-warning btn-sm font-weight-bold btn-upper btn-text">
        Đã phản hồi
      </span>

      {/*begin::Entry*/}
      <div className="d-flex flex-column-fluid mt-5">
        {/*begin::Row*/}
        <Row>
          {event &&
            event.map(item => (
              <Col xl="6" md="6" sm="12" key={item.id}>
                {/*begin::Card*/}
                <EventItem item={item} />
                {/*end:: Card*/}
              </Col>
            ))}
        </Row>
        {/*end::Row*/}

        {/*begin::Pagination*/}

        {/*end::Pagination*/}
      </div>
      {/*end::Entry*/}
    </div>
  )
}

export default RespondedEvent
