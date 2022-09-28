import React from 'react'
import {Card, Col, Row} from 'reactstrap'

const CourseHot = () => {
  return (
    <div>
      <h4>Các khóa học nổi bật</h4>
      <Row>
        <Col lg="3">
          <Card>
            <img
              src="https://img.freepik.com/free-vector/back-school-banner-screen-with-backpacks-leaves-pencils-books-notebooks-apple-brush-sale-promotional-stock-stationery-backpacks-school-vector-illustration-eps10_542399-680.jpg?w=1060"
              alt="images"
              className="mx-0 "
              height="220px"
              style={{objectFit: 'cover'}}
            />
            <div className="card-body">
              <h4 className="text-primary"> Chuyên mục tọa đàm</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <img
              src="https://img.freepik.com/free-vector/back-school-abstract-banner-vector-image_155957-670.jpg?w=996"
              alt="images"
              className="mx-0 "
              height="220px"
              style={{objectFit: 'cover'}}
            />
            <div className="card-body">
              <h4 className="text-primary">Chuyên mục tọa đàm</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <img
              src="https://img.freepik.com/free-vector/watercolor-back-school-background_52683-67280.jpg?w=996"
              alt="images"
              className="mx-0 "
              height="220px"
              style={{objectFit: 'cover'}}
            />
            <div className="card-body">
              <h4 className="text-primary">Chuyên mục tọa đàm</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <img
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=996"
              alt="images"
              className="mx-0 "
              height="220px"
              style={{objectFit: 'cover'}}
            />
            <div className="card-body">
              <h4 className="text-primary">Chuyên mục tọa đàm</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CourseHot
