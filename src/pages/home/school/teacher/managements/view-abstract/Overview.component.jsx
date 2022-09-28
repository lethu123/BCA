import React from 'react'
import {Col, Row} from 'reactstrap'
import {Link} from 'react-router-dom'

const Overview = () => {
  return (
    <div>
      <div className="  font-size-16">
        <h1 className="font-weight-bold mt-2">About this course</h1>
        <p className="">
          Hướng dẫn tìm hiểu, xây dựng và phát triển web app sử dụng ReactJS
        </p>
        <hr />
        <Row>
          <Col sm={3}>
            <span>By the numbers</span>
          </Col>
          <Col sm={9}>
            <Row>
              <Col ms={12} md={6}>
                <div>
                  <span>Skill level: Beginner Level</span> <br />
                  <span>Students: 48</span> <br />
                  <span>Languages: Vietnamese</span>
                </div>
              </Col>
              <Col ms={12} md={6}>
                <div>
                  <span>Lectures: 30</span> <br />
                  <span>Video: 1.5 total hours</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3}>
            <span>Features</span>
          </Col>
          <Col sm={9}>
            <span>
              Available on <Link to="#">iOS</Link> and{' '}
              <Link to="#">Android</Link>{' '}
            </span>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3}>
            <span>Description</span>
          </Col>
          <Col sm={9}>
            <span>
              Trong khoá học này các bạn sẽ được tìm hiểu và tiếp cận với thư
              viện ReactJS, một thư viện phổ biến hỗ trợ xây dựng các web app do
              Facebook phát triển. Khoá học này sẽ hướng dẫn các bạn tiếp cận
              React một cách cơ bản, từ việc thiết lập sử dụng tới việc tạo ra
              các web component để tái sử dụng và kết hợp tạo ra web app. What
              you’ll learn hiểu được khái niệm cơ bản về web component và web
              app tìm hiểu cách thức hoạt động của ReactJS học cách tạo web
              component với ReactJS tạo một ứng dụng web app đơn giản Are there
              any course requirements or prerequisites? cần một chiếc máy tính
              để lập trình có một trình soạn thảo code có kinh nghiệm phát triển
              web với HTML và CSS có hiểu biết cơ bản về lập trình Javascript
              Who this course is for: khoá học này dành cho các bạn quan tâm, có
              hứng thú và muốn tiếp cận phương pháp tạo web component và web app
              với ReactJS Instructor
            </span>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Overview
