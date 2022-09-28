import AddPostNewfeed from '@services/post/components/AddPostNewfeed'
import {Col, Row} from 'reactstrap'

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
const StudyScore = () => {
  return (
    <div>
      <div className="mt-3">
        <AddPostNewfeed value="Thêm bài viết lên Nhóm" />
      </div>
      <Row className="mt-5">
        {data &&
          data.map(item => (
            <Col lg="6" md="12" sm="6" key={item.id}>
              <GroupItem item={item} />
            </Col>
          ))}
      </Row>
      {/* <ReactPaginate
        previousLabel=""
        nextLabel=""
        forcePage={currentPage}
        onPageChange={page => handlePagination(page)}
        pageCount={data.length / 7 || 1}
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
        containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center pr-1 my-3"
      /> */}
    </div>
  )
}

export default StudyScore
