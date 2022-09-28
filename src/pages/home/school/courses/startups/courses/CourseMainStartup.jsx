import React, {useState} from 'react'
import {Row, Col} from 'reactstrap'
import CourseStartupItem from './CourseStartupItem'
import HeaderMainCourseStartup from './HeaderMainCourseStartup'

import startupSearchingImg from 'assets/images/pages/hschool/startup-execution.jpg'
import startupImplementationImg from 'assets/images/pages/hschool/startup-implementation.jpg'
import startupExecutionImg from 'assets/images/pages/hschool/startup-searching.jpg'
import Timeline from './Timeline'

const listCourse = [
  {
    _id: '605432987cfa2b9c86738bb2',
    percentage: 50,
    isStart: true,
    isComplete: false,
    picture: startupSearchingImg,
    name: 'Khám phá Cơ hội Khởi nghiệp',
    slug: 'kham-pha-co-hoi-khoi-nghiep',
    description: '',
    secction: 'Page',
    total_lesson: 17,
    total_lesson_complete: 20,
    total_exercise: 11,
    total_exercise_complete: 12,
    lessons: [
      {
        id: 0,
        title: 'Chương 1: Xây dựng nhóm làm việc hiệu quả',
        total: 17,
        complete: 17,
        slug: 'xay-dung-nhom-lam-viec-hieu-qua',
      },
      {
        id: 1,
        title: 'Chương 2: Khám phá thách thức và xu hướng phát triển',
        slug: 'nhan-xet-ve-cac-van-de-trong-va-xuyen-nganh',
        total: 10,
        complete: 10,
      },
      {
        id: 2,
        title: 'Chương 3: Phát triển ý tưởng kinh doanh',
        slug: 'phat-trien-y-tuong-kinh-doanh',
        total: 23,
        complete: 20,
      },
      {
        id: 3,
        title: 'Chương 4: Xác định cơ hội kinh doanh',
        slug: 'xac-dinh-co-hoi-kinh-doanh',
        total: 14,
        complete: 0,
      },
    ],
  },
  {
    _id: '605432986a6dace7b20d0e95',
    percentage: 0,
    isStart: false,
    isComplete: false,
    picture: startupImplementationImg,
    name: 'Chiến lược nắm bắt Cơ hội Kinh Doanh',
    slug: 'chien-luoc-nam-bat-co-hoi-kinh-doanh',
    description: '',
    secction: 'Warren',
    total_lesson: 13,
    total_lesson_complete: 10,
    total_exercise: 11,
    total_exercise_complete: 18,
    lessons: [
      {
        id: 0,
        title: 'Chương 5: Xây dựng mô hình kinh doanh',
        total: 17,
        complete: 17,
        slug: 'xay-dung-mo-hinh-kinh-doanh',
      },
      {
        id: 1,
        title:
          'Chương 6: Thiết kế sản phẩm kinh doanh tối thiểu MVP và Prototype, Demo.',
        slug: 'thiet-ke-san-pham-toi-thieu-MVP-va-Prototype-Demo',
        total: 10,
        complete: 10,
      },
      {
        id: 2,
        title: 'Chương 7: Phát triển sản phẩm mở rộng',
        slug: 'phat-trien-san-pham-mo-rong',
        total: 23,
        complete: 20,
      },
    ],
  },
  {
    _id: '60543298c250026c630c8467',
    percentage: 0,
    isStart: false,
    isComplete: false,
    picture: startupExecutionImg,
    name: 'Vận hành & Tạo giá trị',
    slug: 'van-hanh-&-tao-gia-tri',
    description: '',
    secction: 'Conway',
    total_lesson: 15,
    total_lesson_complete: 13,
    total_exercise: 19,
    total_exercise_complete: 18,
    lessons: [
      {
        id: 0,
        title: 'Chương 8: Tạo giá trị',
        total: 17,
        complete: 17,
        slug: 'tao-gia-tri',
      },
    ],
  },
]
const CourseStartup = () => {
  const [active, setActive] = useState('1')

  const [toolActive, setToolActive] = useState(0)
  const handleActive = index => {
    setToolActive(index)
  }
  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const renderContent = () => {
    switch (toolActive) {
      case 0:
        return (
          <React.Fragment>
            {listCourse &&
              listCourse.map((item, index) => (
                <CourseStartupItem key={index} item={item} index={index + 1} />
              ))}
          </React.Fragment>
        )
      case 1:
        return (
          <React.Fragment>
            {listCourse &&
              listCourse.map((item, index) => (
                <CourseStartupItem key={index} item={item} index={index + 1} />
              ))}
          </React.Fragment>
        )

      case 2:
        return (
          <React.Fragment>
            {listCourse &&
              listCourse.map((item, index) => (
                <CourseStartupItem key={index} item={item} index={index + 1} />
              ))}
          </React.Fragment>
        )
      case 3:
        return (
          <React.Fragment>
            {listCourse &&
              listCourse.map((item, index) => (
                <CourseStartupItem key={index} item={item} index={index + 1} />
              ))}
          </React.Fragment>
        )
      case 4:
        return (
          <React.Fragment>
            {listCourse &&
              listCourse.map((item, index) => (
                <CourseStartupItem key={index} item={item} index={index + 1} />
              ))}
          </React.Fragment>
        )
      case 5:
        return (
          <React.Fragment>
            {listCourse &&
              listCourse.map((item, index) => (
                <CourseStartupItem key={index} item={item} index={index + 1} />
              ))}
          </React.Fragment>
        )
      default:
        break
    }
  }
  return (
    <div>
      <HeaderMainCourseStartup />

      <Row>
        <Col lg="4" md="12" className="mb-1">
          <div style={{position: 'sticky', top: '100px'}}>
            <div
              className="round  alert-warning text-center py-1"
              block
              style={{fontSize: '20px', borderRadius: '100px'}}
            >
              BCA khởi nghiệp
            </div>
            <div>
              <Timeline toolActive={toolActive} setToolActive={handleActive} />
            </div>
          </div>
        </Col>
        <Col lg="8" md="12" className="mb-1">
          {renderContent()}
        </Col>
      </Row>
    </div>
  )
}

export default CourseStartup
