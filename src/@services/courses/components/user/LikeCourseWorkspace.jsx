import React, {useState} from 'react'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'

import {Lock} from 'react-feather'
import {subStr} from 'utility/Utils'
import {Link, useHistory} from 'react-router-dom'

import ReactPaginate from 'react-paginate'

import img1 from 'assets/images/slider/04.jpg'
import TextField from 'components/form/TextField'

const LikeCourseWorkspace = () => {
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
            <CardImg top src={img1} alt="Card cap" />
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
                <Lock />
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
            <CardImg top src={img1} alt="Card cap" />
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
                <Lock />
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
            <CardImg top src={img1} alt="Card cap" />
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

export default LikeCourseWorkspace
