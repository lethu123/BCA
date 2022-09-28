import React, {useState} from 'react'
import MiningItem from './MiningItem'
import {Modal, ModalHeader, ModalBody, Row, Col, Label, Input} from 'reactstrap'
import ReactPaginate from 'react-paginate'
//** component */
import ModalCreatePost from './ModalCreatePost'
import PerfectScrollbar from 'react-perfect-scrollbar'

//image
import avatarUser3 from 'assets/media/svg/avatars/001-boy.svg'
import imagePost from 'assets/media/product-demos/demo2.png'
import {FormattedMessage} from 'react-intl'
import {Plus, X} from 'react-feather'

const data = [
  {
    id: 1,
    username: 'Quyen Quyen',
    time: new Date(),
    description:
      ' Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post overall structure of your post overall structure of your post overall structure of your post quyen',
    avatar: avatarUser3,
    image: [imagePost],
    files: [imagePost],
    like: 10,
  },
  {
    id: 2,
    username: 'Quyen Quyen',
    time: new Date(),
    description:
      ' Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
    avatar: avatarUser3,
    image: [imagePost],
    files: [imagePost],
    like: 10,
  },
  {
    id: 3,
    username: 'Quyen Quyen',
    time: new Date(),
    description:
      ' Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
    avatar: avatarUser3,
    image: [imagePost],
    files: [imagePost],
    like: 9,
  },
  {
    id: 4,
    username: 'Quyen Quyen',
    time: new Date(),
    description:
      ' Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
    avatar: avatarUser3,
    image: [imagePost],
    files: [imagePost],
    like: 89,
  },
  {
    id: 5,
    username: 'Quyen Quyen',
    time: new Date(),
    description:
      ' Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
    avatar: avatarUser3,
    image: [imagePost],
    files: [imagePost],
    like: 4,
  },
  {
    id: 6,
    username: 'Quyen Hoang',
    time: new Date(),
    description:
      ' Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
    avatar: avatarUser3,
    image: [imagePost],
    files: [imagePost],
    like: 5,
  },
]
const ModalMining = ({setModalMining, modalMining}) => {
  //usestate
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  //function
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setModalMining(!modalMining)}
    />
  )
  return (
    <div>
      <Modal
        // scrollable
        isOpen={modalMining}
        toggle={() => setModalMining(!modalMining)}
        className="modal-dialog-centered modal-xl"
      >
        <ModalHeader
          toggle={() => setModalMining(!modalMining)}
          close={CloseBtn}
          className="p-2"
        >
          <span style={{fontSize: '20px'}}>Thư viện bài viết lan tỏa MXH</span>
        </ModalHeader>
        <ModalBody className="px-2">
          <PerfectScrollbar>
            <Row className="justify-content-between mx-0 my-2">
              <Col lg="3">
                <button
                  class="btn btn-warning "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Plus size={20} className="mr-1" /> Thêm
                </button>
              </Col>
              <Col
                className="d-flex align-items-center justify-content-end mt-1"
                md="4"
                sm="12"
              >
                <Label className="mr-1" for="search-input-1">
                  <FormattedMessage id="Search" />
                </Label>
                <Input
                  className="dataTable-filter mb-50"
                  type="text"
                  bsSize="sm"
                  id="search-input-1"
                  value={searchValue}
                />
              </Col>
            </Row>
            <Row>
              {data.length > 0 &&
                data.map((ele, idx) => (
                  <Col md={6} key={idx}>
                    <MiningItem
                      post={ele}
                      setIsOpen={setIsOpen}
                      isOpen={isOpen}
                    />
                  </Col>
                ))}
            </Row>
            <ReactPaginate
              forcePage={currentPage}
              onPageChange={page => handlePagination(page)}
              pageCount={
                searchValue.length
                  ? filteredData.length / 10
                  : data.length / 10 || 1
              }
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
                'pagination my-3 react-paginate pagination-sm justify-content-center pr-1 mt-1'
              }
              nextLabel={''}
              previousLabel={''}
            />
          </PerfectScrollbar>
        </ModalBody>
      </Modal>
      <ModalCreatePost setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  )
}

export default ModalMining
