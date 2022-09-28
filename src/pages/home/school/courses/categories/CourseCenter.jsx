import React, {useState} from 'react'
// 3rd
import {InputGroup, InputGroupText, Input, Row, Col} from 'reactstrap'
import ReactPaginate from 'react-paginate'
import {BookOpen, Search} from 'react-feather'
// ** component
import CourseItem from './CourseItem'

// ** query
import {CourseQuery} from '@services/courses'

// ** assets
import img from 'assets/images/home/block.png'
import './Categories.style.scss'
import '@core/scss/base/pages/page-knowledge-base.scss'

const CourseCenter = () => {
  // ** state
  const [page, setPage] = useState(1)

  const {data: courses} = CourseQuery.useListCourse({page: page, limit: 12})
  console.log('courses', courses)
  if (!courses) return null

  const {metadata, data} = courses.data
  return (
    <div>
      <div className="d-flex align-items-center ">
        <BookOpen className="text-primary mr-3" size={50} />
        <div className="mb-0">
          <h4 className="mb-0 text-primary">BCA Trainning</h4>
          <p className="mb-0">Đào tạo kỹ năng</p>
        </div>
      </div>
      <div className="categoryCenter position-relative my-10">
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-40%,-50%)',
            width: '70%',
          }}
        >
          <div className="d-flex align-items-center">
            <img
              src={img}
              alt="imgs"
              className="img-fluid"
              style={{width: 180}}
            />
            <div className="w-50 ml-10">
              <h2 className="text-primary mb-5">Tìm kiếm khóa học</h2>
              <InputGroup className="input-group-merge mb-2">
                <InputGroupText className="test">
                  <Search size={14} />
                </InputGroupText>
                <Input
                  placeholder="Nhập nội dung tìm kiếm ..."
                  className="px-1 inputSearch"
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
      <Row className="mt-5">
        {data?.map(item => (
          <Col xl="3" md="4" sm="12" key={item.id} className="mb-2">
            <CourseItem item={item} />
          </Col>
        ))}

        <Col lg="12">
          <ReactPaginate
            previousLabel=""
            nextLabel=""
            forcePage={page - 1}
            onPageChange={page => setPage(page.selected + 1)}
            pageCount={metadata?.total_page || metadata?.num_pages || 1}
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
            pageLinkClassName={`page-link ${
              metadata?.total_page > 1000 ? 'mx-3 p-5' : ''
            }`}
            containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center p-2 mt-1 mx-3"
          />
        </Col>
      </Row>
    </div>
  )
}

export default CourseCenter
