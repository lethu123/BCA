import MyButton from '@core/components/button/MyButton'
import {Col, Row} from 'reactstrap'
import MemberCard from './MemberCard'
const data = [
  {
    id: 1,
  },
]
const MemberLists = () => {
  return (
    <>
      <div className="container-fluid">
        <Row>
          {data &&
            data.map(item => (
              <Col key={item.id} md={3}>
                <MemberCard data={item} />
              </Col>
            ))}
          <div className="text-center">
            <MyButton
              className="title-16-700-24"
              color="gray-1"
              textcl="#1C3218"
              text="Load more"
            />
          </div>
        </Row>
      </div>
    </>
  )
}

export default MemberLists
