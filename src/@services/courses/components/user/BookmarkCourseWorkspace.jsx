import React, {useState} from 'react'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from 'reactstrap'

import {
  Aperture,
  Bookmark,
  Check,
  Edit2,
  Heart,
  MoreVertical,
  Share2,
} from 'react-feather'
import {subStr} from 'utility/Utils'
import {Link, useHistory} from 'react-router-dom'

import ReactPaginate from 'react-paginate'

import img1 from 'assets/images/slider/04.jpg'
import TextField from 'components/form/TextField'

const BookmarkCourseWorkspace = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const history = useHistory()

  // *** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  return (
    <div>
      <Row className="justify-content-end">
        <div className="col-12 col-lg-5 col-xl-4">
          <TextField
            // icon={<Search size={16} />}
            type="text"
            name="search_header"
            placeholder="Tìm kiếm khóa học"
            onChange={() => {}}
            autoComplete="off"
            // disabled={loading}
            // value={searchValue}
          />
        </div>
      </Row>
      <Row className="match-height">
        <Col className="col-xxl-4" md="6">
          <Card>
            <div className="position-relative">
              <CardImg top src={img1} alt="Card cap" />
              <div className="actiion-more m-2">
                <UncontrolledDropdown
                  tag="div"
                  className="bg-white rounded nav-item cursor-pointer"
                >
                  <DropdownToggle tag="span" className="nav-link  px-2">
                    <MoreVertical />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag="dev">
                      <Share2 size={14} className="mr-75" />
                      <span className="align-middle">Chia sẻ khóa học</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Heart size={14} className="mr-75" />
                      <span className="align-middle">Thêm vào yêu thích</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Bookmark size={14} className="mr-75" />
                      <span className="align-middle">Lưu trữ khóa học</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Edit2 size={14} className="mr-75" />
                      <span className="align-middle">Tạo mới Collection</span>
                    </DropdownItem>
                    <hr />
                    <DropdownItem tag="dev" style={{cursorPointer: 'default'}}>
                      <Aperture size={14} className="mr-75" />
                      <span className="align-middle">My Collection</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Check size={14} className="mr-75 text-success" />
                      <span className="align-middle text-danger">
                        Collection 1
                      </span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Check size={14} className="mr-75" />
                      <span className="align-middle">Collection 2</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <CardBody>
              <div className="d-flex mb-2 justify-content-between align-items-center">
                <Link to="#">
                  <CardTitle
                    tag="h4"
                    className="mb-0 cursor-pointer text-hover-primary font-weight-bolder"
                  >
                    {subStr('Học phần 1', 37)}
                  </CardTitle>
                </Link>
                <Heart className="text-danger" />
              </div>
              <CardText tag="div" className="mb-2">
                {subStr(
                  "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                  110,
                )}
              </CardText>
              <Button.Ripple
                onClick={() =>
                  history.push(`/my-course/start/con-tau-dinh-duong-mien-dich`)
                }
                className="w-100 round"
                color="primary"
                outline
              >
                Bắt đầu khóa học
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xxl-4" md="6">
          <Card>
            <div className="position-relative">
              <CardImg top src={img1} alt="Card cap" />
              <div className="actiion-more m-2">
                <UncontrolledDropdown
                  tag="div"
                  className="bg-white rounded nav-item cursor-pointer"
                >
                  <DropdownToggle tag="span" className="nav-link  px-2">
                    <MoreVertical />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag="dev">
                      <Share2 size={14} className="mr-75" />
                      <span className="align-middle">Chia sẻ khóa học</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Heart size={14} className="mr-75" />
                      <span className="align-middle">Thêm vào yêu thích</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Bookmark size={14} className="mr-75" />
                      <span className="align-middle">Lưu trữ khóa học</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Edit2 size={14} className="mr-75" />
                      <span className="align-middle">Tạo mới Collection</span>
                    </DropdownItem>
                    <hr />
                    <DropdownItem tag="dev" style={{cursorPointer: 'default'}}>
                      <Aperture size={14} className="mr-75" />
                      <span className="align-middle">My Collection</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Check size={14} className="mr-75 text-success" />
                      <span className="align-middle text-danger">
                        Collection 1
                      </span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Check size={14} className="mr-75" />
                      <span className="align-middle">Collection 2</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <CardBody>
              <div className="d-flex mb-2 justify-content-between">
                <Link to="#">
                  <CardTitle
                    tag="h4"
                    className="mb-0 cursor-pointer text-hover-primary font-weight-bolder"
                  >
                    {subStr('Học phần 2', 37)}
                  </CardTitle>
                </Link>
                <Heart className="text-danger" />
              </div>
              <CardText tag="div" className="mb-2">
                {subStr(
                  "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                  110,
                )}
              </CardText>
              <Button.Ripple
                onClick={() =>
                  history.push(`/my-course/start/con-tau-dinh-duong-mien-dich`)
                }
                className="w-100 round"
                color="primary"
                outline
              >
                Bắt đầu khóa học
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xxl-4" md="6">
          <Card>
            <div className="position-relative">
              <CardImg top src={img1} alt="Card cap" />
              <div className="actiion-more m-2">
                <UncontrolledDropdown
                  tag="div"
                  className="bg-white rounded nav-item cursor-pointer"
                >
                  <DropdownToggle tag="span" className="nav-link  px-2">
                    <MoreVertical />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag="dev">
                      <Share2 size={14} className="mr-75" />
                      <span className="align-middle">Chia sẻ khóa học</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Heart size={14} className="mr-75" />
                      <span className="align-middle">Thêm vào yêu thích</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Bookmark size={14} className="mr-75" />
                      <span className="align-middle">Lưu trữ khóa học</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Edit2 size={14} className="mr-75" />
                      <span className="align-middle">Tạo mới Collection</span>
                    </DropdownItem>
                    <hr />
                    <DropdownItem tag="dev" style={{cursorPointer: 'default'}}>
                      <Aperture size={14} className="mr-75" />
                      <span className="align-middle">My Collection</span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Check size={14} className="mr-75 text-success" />
                      <span className="align-middle text-danger">
                        Collection 1
                      </span>
                    </DropdownItem>
                    <DropdownItem tag="dev">
                      <Check size={14} className="mr-75" />
                      <span className="align-middle">Collection 2</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <CardBody>
              <div className="d-flex mb-2 justify-content-between">
                <Link to="#">
                  <CardTitle
                    tag="h4"
                    className="mb-0 cursor-pointer text-hover-primary font-weight-bolder"
                  >
                    {subStr('Học phần 3', 37)}
                  </CardTitle>
                </Link>
                <Heart className="text-danger" />
              </div>
              <CardText tag="div" className="mb-2">
                {subStr(
                  "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                  110,
                )}
              </CardText>
              <Button.Ripple
                onClick={() =>
                  history.push(`/my-course/start/con-tau-dinh-duong-mien-dich`)
                }
                className="w-100 round"
                color="primary"
                outline
              >
                Bắt đầu khóa học
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <ReactPaginate
        previousLabel=""
        nextLabel=""
        forcePage={currentPage}
        onPageChange={page => handlePagination(page)}
        pageCount={2}
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
        // pageLinkClassName={`page-link ${
        //   data?.metadata?.total_page > 1000 ? 'mx-3 p-5' : ''
        // }`}
        containerClassName="pagination react-paginate separated-pagination pagination-md justify-content-center p-5 mt-1 mx-3"
      />
    </div>
  )
}

export default BookmarkCourseWorkspace
