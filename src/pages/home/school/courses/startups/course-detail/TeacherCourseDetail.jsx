import React from 'react'
import {Row, Col, Card, CardBody} from 'reactstrap'

const TeacherCourseDetail = ({info}) => {
  if (!info)
    return (
      <Card className="mt-1">
        <CardBody>Chưa có dữ liệu</CardBody>
      </Card>
    )
  return (
    <Card className="mt-1">
      <CardBody>
        {info.length > 0 ? (
          <Row>
            {info.map(it => (
              <Col lg="6" key={it.id}>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://img.freepik.com/free-vector/happy-couple-walking-with-dog_133260-809.jpg?w=740"
                    alt="images"
                    className="rounded-circle mr-2"
                    width="70px"
                    height="70px"
                    style={{objectFit: 'cover'}}
                  />
                  <div>
                    <h6>Khac Vu</h6>
                    <span style={{fontSize: '12px'}}>
                      Chuyên gia tư vấn về Phần mềm
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          'Chưa có dữ liệu'
        )}
      </CardBody>
    </Card>
  )
}

export default TeacherCourseDetail
