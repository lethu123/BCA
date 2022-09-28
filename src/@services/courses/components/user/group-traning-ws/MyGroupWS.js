import {useState} from 'react'
import {Col, Row} from 'reactstrap'

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
    description: ' ',
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
    description: ' ',
  },
]
const MyGroupWS = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)
  // *** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  return (
    <div>
      {/* <div className="text-right">
        <Button.Ripple color="primary" onClick={toggleModal}>
          <Plus size={14} />
          <span className="align-middle ml-2">Tạo nhóm</span>
        </Button.Ripple>
      </div> */}
      <Row className="mt-5 w-100">
        {data &&
          data.map(item => (
            <Col xl="4" md="6" sm="12" key={item.id}>
              <GroupItem item={item} type="cus" />
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
      {/* <ModalFormGroup modal={modal} toggleModal={toggleModal} /> */}
    </div>
  )
}

export default MyGroupWS
