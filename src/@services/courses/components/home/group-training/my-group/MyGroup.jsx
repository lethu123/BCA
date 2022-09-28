import {Col, Row, Input} from 'reactstrap'

// ** component
import GroupItem from '../group-item/GroupItem'

const data = [
  {
    id: 1,
    url: '#',
    title: 'Tuyển IT',
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
    title: 'Tuyển Designer',
    picture: '',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description:
      ' Mô tả ngắn về nhóm: This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
]
const MyGroup = () => {
  return (
    <div>
      <h5 className="mt-3">nhóm quản lý trực tiếp bởi bạn</h5>
      <Input placeholder="Tìm kiếm ..." className="w-50" />
      <Row className="mt-5">
        {data &&
          data.map(item => (
            <Col lg="4" md="6" sm="12" key={item.id}>
              <GroupItem item={item} type="owner" />
            </Col>
          ))}
      </Row>
      <div>
        <h5>nhóm quản lý gián tiếp bởi bạn</h5>
        <p>Điểm nổi bật</p>
        <Row className="mt-5">
          {data &&
            data.map(item => (
              <Col lg="4" md="6" sm="12" key={item.id}>
                <GroupItem item={item} type="owner" />
              </Col>
            ))}
        </Row>
      </div>
      <div>
        <h5>Danh sách</h5>
        <Input placeholder="Tìm kiếm ..." className="w-50" />

        <Row className="mt-5">
          {data &&
            data.map(item => (
              <Col lg="4" md="6" sm="12" key={item.id}>
                <GroupItem item={item} type="owner" />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  )
}

export default MyGroup
