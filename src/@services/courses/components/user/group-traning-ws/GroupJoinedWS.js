import {useState} from 'react'
import {Button, Col, Row} from 'reactstrap'
import {Plus} from 'react-feather'
// ** component
import {GroupItem} from '@services/courses'

const data = [
  {
    id: 1,
    url: '#',
    title: 'Tuyển dụng IT ',
    picture: '',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description: '',
  },
  {
    id: 2,
    url: '#',
    title: 'Việc làm IT',
    picture: '',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description: '',
  },
  {
    id: 3,
    url: '#',
    title: 'Tuyển Designer',
    picture: '',
    member: '18K',
    amout_post: 20,
    revenue: '200tr',
    description: '',
  },
]
const GroupJoinedWS = () => {
  const [currentPage, setCurrentPage] = useState(0)
  // *** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  return (
    <div>
      <div className="text-right mt-5 mt-lg-0 mr-3">
        <Button.Ripple
          color="primary"
          style={{paddingLeft: 5, paddingRight: 5}}
        >
          <span className="align-middle  ">
            <Plus size={16} /> Tạo nhóm của bạn
          </span>
        </Button.Ripple>
      </div>
      <Row className="mt-5 w-100 mx-0">
        {data &&
          data.map(item => (
            <Col xl="4" md="6" sm="12" key={item.id}>
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

export default GroupJoinedWS
