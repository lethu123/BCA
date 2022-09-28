import {Col, Row} from 'reactstrap'

// ** component
import CourseItem from './CourseItem'

const data = [
  {
    id: 1,
    url: '#',
    title: 'Khóa học Xây dựng Văn Hóa Doanh Nghiệp ',
    picture:
      'https://viennewalpha.com/wp-content/uploads/2021/12/XAY-DUNG-VAN-HOA-DAONH-NGHIEP-691x400.jpg',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description:
      'Văn hóa doanh nghiệp có thể tạo ra 20% – 30% sự khác biệt về...',
  },
  {
    id: 2,
    url: '#',
    title: 'Khóa học Kỹ Năng Xây Dựng Chuỗi Bán Lẻ',
    picture:
      'https://viennewalpha.com/wp-content/uploads/2021/12/XAY-DUNG-CHUOI-BAN-LE-691x400.jpg',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description:
      'Khóa học giúp bạn phát triển kênh bán lẻ, xây dựng chuỗi, lập kế hoạch...',
  },
  {
    id: 3,
    url: '#',
    title: 'Khóa học Kỹ Năng Xây dựng Các Mối Quan Hệ Hòa Hợp',
    picture:
      'https://viennewalpha.com/wp-content/uploads/2021/12/XAY-DUNG-CAC-MO-QUAN-HE-HOA-HOP-691x400.jpg',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description:
      'Khóa học giúp nâng cao kỹ năng tạo mối quan hệ với các đối tác...',
  },
]
const CourseRelation = () => {
  return (
    <div>
      <Row className="my-5">
        {data &&
          data.map(item => (
            <Col lg="4" md="6" sm="12" key={item.id}>
              <CourseItem item={item} />
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default CourseRelation
