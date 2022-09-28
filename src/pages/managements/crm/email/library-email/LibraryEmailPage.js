import React, {useState} from 'react'
import LibEmailItem from './LibEmailItem'
import {Row, Col, Label, Input} from 'reactstrap'

//image
import avatarUser3 from 'assets/media/svg/avatars/001-boy.svg'
import imagePost from 'assets/media/product-demos/demo2.png'
import {FormattedMessage} from 'react-intl'
import ReactPaginate from 'react-paginate'
import {Search} from 'react-feather'
import TextField from 'components/form/TextField'

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

const LibraryEmailPage = () => {
  //usestate
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // *** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  return (
    <div>
      <Row className="justify-content-between mx-0  align-items-center">
        <Col md="9" sm="12">
          <div className="w-md-50 mb-2">
            <TextField
              icon={<Search size={16} />}
              type="text"
              //text || email || password || number || datetime-local || date
              // month || week || time || color || range
              name="text"
              placeholder="Search"
              onChange={(name, value) => console.log(value)}
            />
          </div>
        </Col>
        <Col lg="3" className="text-right">
          <button
            className="btn btn-warning "
            onClick={() => setIsOpen(!isOpen)}
          >
            Thêm
          </button>
        </Col>
      </Row>
      <Row>
        {data.length > 0 &&
          data.map(ele => (
            <Col md={6} xl="4" key={ele.id}>
              <LibEmailItem post={ele} setIsOpen={setIsOpen} isOpen={isOpen} />
            </Col>
          ))}
      </Row>
      <ReactPaginate
        forcePage={currentPage}
        onPageChange={page => handlePagination(page)}
        pageCount={
          searchValue.length ? filteredData.length / 10 : data.length / 10 || 1
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
    </div>
  )
}

export default LibraryEmailPage
