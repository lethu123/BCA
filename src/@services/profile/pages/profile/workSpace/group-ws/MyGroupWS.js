import {useState} from 'react'
import ReactPaginate from 'react-paginate'
import {Button, Col, Row} from 'reactstrap'
import {Plus} from 'react-feather'

// ** component
import GroupItem from '@services/group/components/card/GroupItem'
// import ModalFormGroup from 'pages/forms-filter-table/form-group-center/ModalFormGroup'

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
      <div className="text-right">
        <Button.Ripple color="primary" onClick={toggleModal}>
          <Plus size={14} />
          <span className="align-middle ml-2">Tạo nhóm</span>
        </Button.Ripple>
      </div>
      <Row className="mt-5 w-100">
        {data &&
          data.map(item => (
            <Col md="6" sm="12" key={item.id}>
              <GroupItem item={item} type="owner" />
            </Col>
          ))}
      </Row>
      <ReactPaginate
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
      />
      {/* <ModalFormGroup modal={modal} toggleModal={toggleModal} /> */}
    </div>
  )
}

export default MyGroupWS
