import React, {useRef, useState} from 'react'
import Wizard from '@core/components/wizard'
import {Link} from 'react-router-dom'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'

// ** component
import InfoBasicCourse from './InfoBasicCourse'
import ContentCourse from './ContentCourse'
// import NotificationCourse from './NotificationCourse'
import Certification from './Certification'
import TestCourse from './TestCourse'

const CreateCourseIndex = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'info-basic',
      title: 'Thông tin cơ bản',
      subtitle: 'Infomation Basic',
      content: <InfoBasicCourse stepper={stepper} />,
    },
    {
      id: 'content-course',
      title: 'Nội dung khóa học',
      subtitle: 'Content Course',
      content: <ContentCourse stepper={stepper} />,
    },
    // {
    //   id: 'notification',
    //   title: 'Thông báo',
    //   subtitle: 'Notification',
    //   content: <NotificationCourse stepper={stepper} />,
    // },
    {
      id: 'cerfification',
      title: 'Chứng nhận',
      subtitle: 'Certification',
      content: <Certification stepper={stepper} />,
    },
    {
      id: 'test',
      title: 'Kiểm tra',
      subtitle: 'Test',
      content: <TestCourse stepper={stepper} />,
    },
  ]

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="#"> Admin </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/admin/khoa-hoc/quan-ly-khoa-hoc"> Khóa học </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Tạo khóa học </span>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="horizontal-wizard mb-0">
        <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
      </div>
    </div>
  )
}

export default CreateCourseIndex
