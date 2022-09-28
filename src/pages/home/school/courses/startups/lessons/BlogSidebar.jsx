import {useRef} from 'react'

import * as Icon from 'react-feather'

import Avatar from '@core/components/avatar'

// ** Styles
import 'bs-stepper/dist/css/bs-stepper.min.css'
import '@core/scss/base/plugins/forms/form-wizard.scss'
import '../CourseStartup.style.scss'

import classnames from 'classnames'

import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Media,
  Card,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap'
import React from 'react'
import {useHistory} from 'react-router'
// import PerfectScrollbar from 'react-perfect-scrollbar'

const listCourse = [
  {
    _id: '605432987cfa2b9c86738bb2',

    name: 'Khám phá Cơ hội Khởi nghiệp',
    part: 1,
    slug: 'kham-pha-co-hoi-khoi-nghiep',
    chapters: [
      {
        chapter: 1,
        name: 'Xây dựng nhóm làm việc hiệu quả',
        slug: 'xay-dung-nhom-lam-viec-hieu-qua',
        lesson: [],
      },
      {
        chapter: 2,
        name: ' Khám phá thách thức và xu hướng phát triển',
        slug: 'nhan-xet-ve-cac-van-de-trong-va-xuyen-nganh',
        lesson: [
          {
            name: ' Các thách thức trong và xuyên ngành',
            tool: 'Công cụ: Comprehension/Challenges',
          },
          {
            name: 'Các công nghệ mới ảnh hưởng đến ngành',
            tool: ' Công cụ: Comprehension/Exponential Technologies',
          },
          {
            name:
              ' Các công nghệ mới ảnh hưởng đến ngànhCác mô hình kinh doanh mới đột phá trong ngành.',
            tool: 'Công cụ: Comprehension/New Business Model',
          },
        ],
      },
      {
        chapter: 3,
        name: 'Phát triển Ý tưởng Kinh doanh',
        slug: 'phat-trien-y-tuong-kinh-doanh',
        lesson: [
          {
            name: 'Ý tưởng Kinh doanh là gì?',
          },
          {
            name: 'Thấu hiểu Khách Hàng',
          },
          {name: 'Lập Bản đồ Giá trị cho khách hàng'},
          {
            name: ' Kiểm chứng. và lựa chọn các vấn đề lớn của khách hàng',
          },
          {name: 'Hình thành các Ý tưởng/Sáng kiến'},
        ],
      },
      {
        chapter: 4,
        name: 'Xác định Cơ hội Kinh doanh',
        slug: 'xac-dinh-co-hoi-kinh-doanh',
        lesson: [],
      },
    ],
  },
  {
    _id: '605432986a6dace7b20d0e95',
    name: 'Chiến lược nắm bắt Cơ hội Kinh Doanh',
    slug: 'chien-luoc-nam-bat-co-hoi-kinh-doanh',

    chapters: [
      {
        chapter: 5,
        name: 'Xây dựng mô hình kinh doanh',
        slug: 'xay-dung-mo-hinh-kinh-doanh',
        lesson: [{name: 'Tổng quan về Mô hình Kinh doanh'}],
      },
      {
        chapter: 6,
        name: 'Thiết kế sản phẩm kinh doanh tối thiểu MVP và Prototype, Demo.',
        slug: 'thiet-ke-san-pham-toi-thieu-MVP-va-Prototype-Demo',
        lesson: [],
      },
      {
        chapter: 7,
        name: 'Phát triển sản phẩm mở rộng',
        slug: 'phat-trien-san-pham-mo-rong',
        lesson: [],
      },
    ],
  },
  {
    _id: '60543298c250026c630c8467',
    name: 'Vận hành & Tạo giá trị',
    slug: 'van-hanh-&-tao-gia-tri',
    part: 3,
    chapters: [
      {
        chapter: 8,
        name: ' Tạo giá trị',
        slug: 'tao-gia-tri',
        lesson: [],
      },
    ],
  },
]
// const chapters = [
//   {
//     chapter: 1,
//     name: 'Xây dựng nhóm làm việc hiệu quả',
//     slug: 'xay-dung-nhom-lam-viec-hieu-qua',
//     lesson: [],
//   },
//   {
//     chapter: 2,
//     name: ' Khám phá thách thức và xu hướng phát triển',
//     slug: 'nhan-xet-ve-cac-van-de-trong-va-xuyen-nganh',
//     lesson: [
//       {
//         name: ' Các thách thức trong và xuyên ngành',
//         tool: 'Công cụ: Comprehension/Challenges',
//       },
//       {
//         name: 'Các công nghệ mới ảnh hưởng đến ngành',
//         tool: ' Công cụ: Comprehension/Exponential Technologies',
//       },
//       {
//         name:
//           ' Các công nghệ mới ảnh hưởng đến ngànhCác mô hình kinh doanh mới đột phá trong ngành.',
//         tool: 'Công cụ: Comprehension/New Business Model',
//       },
//     ],
//   },
//   {
//     chapter: 3,
//     name: 'Phát triển Ý tưởng Kinh doanh',
//     slug: 'phat-trien-y-tuong-kinh-doanh',
//     lesson: [
//       {
//         name: 'Ý tưởng Kinh doanh là gì?',
//       },
//       {
//         name: 'Thấu hiểu Khách Hàng',
//       },
//       {name: 'Lập Bản đồ Giá trị cho khách hàng'},
//       {
//         name: ' Kiểm chứng. và lựa chọn các vấn đề lớn của khách hàng',
//       },
//       {name: 'Hình thành các Ý tưởng/Sáng kiến'},
//     ],
//   },
//   {
//     chapter: 4,
//     name: 'Xác định Cơ hội Kinh doanh',
//     slug: 'xac-dinh-co-hoi-kinh-doanh',
//     lesson: [],
//   },
// ]
const BlogSidebar = ({chapter, params}) => {
  const ref = useRef(null)
  const history = useHistory()

  const handleNextPage = (item, params, part) => {
    let course = listCourse.find(e => e.part === part)
    let index = course.chapters.findIndex(e => e.name === item.name)
    const itemNext = course.chapters.find((e, i) => i === index + 1)
    if (itemNext && params) {
      history.push(
        `/hschool/course/start-up/${params.name_course}/${itemNext.slug}`,
      )
    }
  }

  const handlePrevPage = (item, params, part) => {
    let course = listCourse.find(e => e.part === part)
    let index = course.chapters.findIndex(e => e.name === item.name)
    const itemPrev = course.chapters.find((e, i) => i === index - 1)
    if (itemPrev && params) {
      history.push(
        `/hschool/course/start-up/${params.name_course}/${itemPrev.slug}`,
      )
    }
  }
  return (
    <React.Fragment>
      {/* <PerfectScrollbar> */}

      {listCourse &&
        listCourse
          .filter(e => e.slug === params.name_course)
          .map((it, idx) => (
            <div key={idx} className="sidebar-detached col-lg-4 ">
              <div
                ref={ref}
                className="blog-sidebar sticky-menu right-sidebar my-2 my-lg-0"
              >
                <div className="right-sidebar-content">
                  <div className="blog-search">
                    <InputGroup className="input-group-merge">
                      <Input placeholder="Search here" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <Icon.Search size={14} />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>

                  {it.chapters
                    .filter(e => e.chapter === chapter)
                    .map((item, i) => (
                      <React.Fragment key={i}>
                        <Card className="card-developer-meetup mt-2">
                          <CardBody>
                            <div className="meetup-header d-flex align-items-center">
                              <div className="meetup-day">
                                <h6 className="mb-0">CHƯƠNG</h6>
                                <h3 className="mb-0">{item.chapter}</h3>
                              </div>
                              <div className="my-auto">
                                <CardTitle tag="h4" className="mb-25">
                                  {item.name}
                                </CardTitle>
                              </div>
                            </div>
                            {item.lesson.map((_lesson, _idx) => (
                              <Media
                                key={_idx}
                                className={classnames({'mt-2': _idx !== 0})}
                              >
                                <Avatar
                                  color={
                                    _idx !== 0 ? 'light-primary' : 'primary'
                                  }
                                  className="rounded mr-1"
                                  icon={_idx + 1}
                                />
                                <Media body>
                                  <h5
                                    className={
                                      'mb-0 ' +
                                      classnames({'text-primary': _idx === 0})
                                    }
                                  >
                                    {_lesson.name}
                                  </h5>
                                  <small>{_lesson.tool ?? ''}</small>
                                </Media>
                              </Media>
                            ))}
                          </CardBody>
                        </Card>
                        <div className="d-flex justify-content-between mt-3">
                          <Button.Ripple
                            color="primary"
                            onClick={() => {
                              handlePrevPage(item, params, it.part)
                            }}
                            disabled={item.name === it.chapters[0].name}
                          >
                            Chương trước
                          </Button.Ripple>
                          <Button.Ripple
                            color="primary"
                            onClick={() =>
                              handleNextPage(item, params, it.part)
                            }
                            disabled={
                              item.name ===
                              it.chapters[it.chapters.length - 1].name
                            }
                          >
                            Chương tiếp
                          </Button.Ripple>
                        </div>
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          ))}
      {/* </PerfectScrollbar> */}
    </React.Fragment>
  )
}

export default BlogSidebar
