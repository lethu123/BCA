import {Card, CardBody, Row, Col} from 'reactstrap'

const GroupLatestPhotos = ({data}) => {
  const renderPhotos = () => {
    return data.map((item, index) => {
      return (
        <Col key={index} md="4" xs="4" className="profile-latest-img">
          <a href="/" onClick={e => e.preventDefault()}>
            <img className="img-fluid rounded" src={item.img} alt="latest" />
          </a>
        </Col>
      )
    })
  }

  return (
    <Card>
      <CardBody>
        <h5 className="mb-0">Latest Photos</h5>
        <Row>{renderPhotos()}</Row>
      </CardBody>
    </Card>
  )
}

export default GroupLatestPhotos
