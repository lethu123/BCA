import React from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import {ArrowLeftCircle} from 'react-feather'
import {useHistory} from 'react-router-dom'

const BreadScrumbCourse = () => {
  const history = useHistory()
  return (
    <div>
      <div className="d-flex pl-3 align-items-lg-center">
        <ArrowLeftCircle
          className="cursor-pointer"
          onClick={() => history.goBack()}
        />
        <h1 className="ml-2 mb-0">Con tàu dinh dưỡng miễn dịch</h1>
      </div>
      <Breadcrumb className="breadcrumb-chevron">
        <BreadcrumbItem>
          <Link to="/home"> Trang chủ </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/hschool/course/start-up"> BCA traning </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/hschool/course/start-up/kham-pha-co-hoi-khoi-nghiep">
            Học phần 1{' '}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Con tàu dinh dưỡng miễn dịch </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default BreadScrumbCourse
