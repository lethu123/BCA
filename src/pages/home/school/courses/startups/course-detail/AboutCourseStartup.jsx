import React from 'react'
import {Box} from 'react-feather'
import {Badge, Card, CardBody} from 'reactstrap'

const AboutCourseStartup = ({info}) => {
  return (
    <Card className="mt-1">
      <CardBody>
        <h4 className="mt-1">Giới thiệu</h4>
        <p className="ml-2">{info.description || 'Chưa có dữ liệu'}</p>
        {info.course_for?.length > 0 && (
          <>
            <h4 className="mt-2">Khóa học này dành cho ai?</h4>
            <div className="ml-2 my-2">
              {info.course_for.map(it => (
                <Badge key={it.id} color="light-primary" className="mr-2">
                  {it.name}
                </Badge>
              ))}
            </div>
          </>
        )}

        {info.skills_accquired?.length > 0 && (
          <>
            <h4 className="mt-2">Kĩ năng đạt được sau khóa học này?</h4>
            <div className="ml-2 my-2">
              {info.skills_accquired.map(it => (
                <Badge key={it.id} color="light-primary" className="mr-2">
                  {it.name}
                </Badge>
              ))}
            </div>
          </>
        )}

        {info.benefits?.length > 0 && (
          <>
            <h4 className="mt-2">Lợi ích sau khóa học? (Benefits)</h4>
            <div className="ml-2 my-2">
              {info.benefits.map(it => (
                <div key={it.id} className="d-flex align-items-center mb-2">
                  <Box className="mr-2" size={20} />
                  <p className="mb-0">{it.name}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {info.course_outcome?.length > 0 && (
          <>
            <h4 className="mt-2">Kết quả đạt được sau khóa học? (Outcomes)</h4>
            <div className="ml-2 my-2">
              {info.course_outcome.map(it => (
                <div key={it.id} className="d-flex align-items-center mb-2">
                  <Box className="mr-2" size={20} />
                  <p className="mb-0">{it.name}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </CardBody>
    </Card>
  )
}

export default AboutCourseStartup
