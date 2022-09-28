// ** Third Party Components
import {Trash, Plus, Edit} from 'react-feather'
import {Card, CardBody, Row, Col, Table, Button, Badge} from 'reactstrap'
import ReactPlayer from 'react-player'
import parse from 'html-react-parser'

// ** assets
import AvatarGroup from '@core/components/avatar-group'
import avatar1 from 'assets/images/portrait/small/avatar-s-5.jpg'

//  ** component 3rd
import AppCollapse from '@core/components/app-collapse'
import Avatar from '@core/components/avatar'

// ** Expandable table component
const ExpandableTable = ({data, toggleModalStudent, toggleModal}) => {
  return (
    <div className="expandable-content p-2">
      {/* Description */}
      <AppCollapse
        data={[
          {
            title: (
              <span style={{color: '#FF6700', fontSize: 18}}>30 Class</span>
            ),
            content: (
              <div>
                <div className="mb-1">
                  <Button.Ripple onClick={toggleModal} color="primary">
                    <Plus size={20} /> New Class
                  </Button.Ripple>
                </div>

                <Table hover responsive>
                  <thead>
                    <tr>
                      <th>Date Strat</th>
                      <th>Shadule</th>
                      <th>Time</th>
                      <th>Lecturer</th>
                      <th>List Student</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20/10/2021</td>
                      <td>Thứ 2-4-6</td>
                      <td>9h-12h</td>
                      <td>
                        <div className="d-flex align-items-center py-1">
                          <Avatar
                            size="lg"
                            img={
                              require(`assets/images/avatars/avatar-blank.png`)
                                .default
                            }
                          />
                          <div className="user-info text-truncate ml-1">
                            <span className="d-block font-weight-bold text-truncate text-primary">
                              Hatake Kakashi
                            </span>
                            <small>thu@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          onClick={toggleModalStudent}
                          className="text-primary"
                          style={{textDecoration: 'underline'}}
                        >
                          30 student
                        </div>
                      </td>
                      <td>
                        <div>
                          <Button.Ripple
                            className="btn-icon m-50"
                            color="relief-info"
                            size="sm"
                          >
                            <Edit size={14} />
                          </Button.Ripple>

                          <Button.Ripple
                            className="btn-icon m-50"
                            color="relief-danger"
                            size="sm"
                          >
                            <Trash size={14} />
                          </Button.Ripple>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>20/10/2021</td>
                      <td>Thứ 2-4-6</td>
                      <td>9h-12h</td>
                      <td>
                        <div className="d-flex align-items-center py-1">
                          <Avatar
                            size="lg"
                            img={
                              require(`assets/images/avatars/avatar-blank.png`)
                                .default
                            }
                          />
                          <div className="user-info text-truncate ml-1">
                            <span className="d-block font-weight-bold text-truncate text-primary">
                              Hatake Kakashi
                            </span>
                            <small>thu@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          onClick={toggleModalStudent}
                          className="text-primary"
                          style={{textDecoration: 'underline'}}
                        >
                          30 student
                        </div>
                      </td>
                      <td>
                        <div>
                          <Button.Ripple
                            className="btn-icon m-50"
                            color="relief-info"
                            size="sm"
                          >
                            <Edit size={14} />
                          </Button.Ripple>

                          <Button.Ripple
                            className="btn-icon m-50"
                            color="relief-danger"
                            size="sm"
                          >
                            <Trash size={14} />
                          </Button.Ripple>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            ),
          },
        ]}
        type="margin"
        accordion
      />

      {/* Overview Course */}

      <Card>
        <CardBody>
          <Row>
            <Col lg="8" className="mx-auto ">
              <ReactPlayer
                url={data.video_url_introduce}
                className="react-player-video my-2 rounded overflow-hidden mx-auto"
                width="600px"
                height="330px"
                controls={true}
              />
            </Col>
          </Row>
          <hr />
          <p style={{color: '#FF6700', fontSize: 18}}>Overview Detail</p>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sub Category</td>
                <td>
                  <Badge color="light-primary">
                    {data.sub_category_name ?? 'updating'}
                  </Badge>
                </td>
              </tr>
              <tr>
                <td>Online Hours</td>
                <td>
                  <div>{data.c_hours}</div>
                </td>
              </tr>
              <tr>
                <td>lesson</td>
                <td>
                  <p className="mb-0">{data.c_lesson}</p>
                </td>
              </tr>
              <tr>
                <td>Reviews</td>
                <td>
                  <p className="mb-0">{data.c_rating}</p>
                </td>
              </tr>
              <tr>
                <td>Level</td>
                <td>
                  <p className="mb-0">{data.level}</p>
                </td>
              </tr>
              <tr>
                <td>Creator</td>
                <td>
                  <p className="mb-0">
                    {data.creator && data.creator.username}
                  </p>
                </td>
              </tr>
              <tr>
                <td>Skills acquired</td>
                <td>
                  {data.skills_acquired.length > 0 &&
                    data.skills_acquired.map(ele => (
                      <Badge
                        color="light-danger"
                        className="mr-50"
                        key={ele.id}
                      >
                        {ele.name}
                      </Badge>
                    ))}
                </td>
              </tr>
              <tr>
                <td>Course For</td>
                <td>
                  {data.course_for.length > 0 &&
                    data.course_for.map(ele => (
                      <Badge
                        color="light-success"
                        className="mr-50"
                        key={ele.id}
                      >
                        {ele.name}
                      </Badge>
                    ))}
                </td>
              </tr>
              <tr>
                <td>Benefits</td>
                <td>
                  {data.benefit.length > 0 &&
                    data.benefit.map(ele => (
                      <Badge
                        color="light-warning"
                        className="mr-50"
                        key={ele.id}
                      >
                        {ele.content}
                      </Badge>
                    ))}
                </td>
              </tr>

              <tr>
                <td>Lecturer</td>
                <td>
                  <div style={{marginBottom: 7}}>
                    {data.instructors.length} Lecturer
                  </div>
                  <div className="card-text mb-0">
                    <AvatarGroup
                      data={data.instructors.map(ele => ({
                        title: ele.username,
                        img: ele.avatar ?? avatar1,
                        imgHeight: 26,
                        imgWidth: 26,
                      }))}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>About</td>
                <td>
                  <p className="mb-0">{parse(data.about)}</p>
                </td>
              </tr>
              <tr>
                <td>Career Orientation</td>
                <td>
                  <p className="mb-0">{parse(data.career_orientation)}</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}

export default ExpandableTable
