/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {
  Input,
  Card,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap'

import Categories from './feature/CategoryFeature'
import PopularCourse from './feature/PopularCourseFeature'
import CallToApplyFeature from './feature/CallToApplyFeature'
import CallToActionFour from '../landingpage/components/CallToActionFour'

// import {getListInstructorsAction} from 'redux/actions/hschools/courseAction'
import {useDispatch} from 'react-redux'
import {Search} from 'react-feather'

// const selectInstructors = createSelector(
//   state => state.hSchool,
//   course => course.listInstructors,
// )

// const selectMetadata = createSelector(
//   state => state.hSchool,
//   course => (course.metadata ? course.metadata.instructors : null),
// )

const TeacherMain = () => {
  const dispatch = useDispatch()
  // const instructors = useSelector(selectInstructors)
  // const metadata = useSelector(selectMetadata)
  const [page, setPage] = useState(1)

  // useEffect(() => {
  //   dispatch(getListInstructorsAction('', page, 12))
  // }, [dispatch, page])

  return (
    <React.Fragment>
      <CallToActionFour />
      <Card>
        <CallToApplyFeature />
        <CardBody>
          <section className="course-one course-page">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  {/* <ListInstructorFeature instructors={instructors} /> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="blog-sidebar">
                  <div className="sidebar-container">
                    <h5 className="blog-title">Search</h5>
                    <InputGroup className="input-group-merge mb-2">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <Search size={14} />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="search..." />
                    </InputGroup>
                  </div>
                  <Categories />
                  <PopularCourse />
                </div>
              </div>
            </div>
            <div className="post-pagination">
              {/* <a onClick={() => setPage(metadata.previous_page_number || 1)}>
                <i className="fa fa-angle-double-left"></i>
              </a> */}
              {/* {metadata &&
                metadata.page_range.map((ele, idx) => (
                  <a
                    className={classnames({
                      active: ele === metadata.current_page,
                    })}
                    key={idx}
                    onClick={() => {
                      if (ele !== metadata.current_page) {
                        setPage(ele)
                      }
                    }}
                  >
                    {ele}
                  </a>
                ))} */}

              {/* <a
                onClick={() =>
                  setPage(metadata.next_page_number || metadata.current_page)
                }
              >
                <i className="fa fa-angle-double-right"></i>
              </a> */}
            </div>
          </section>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default TeacherMain
