// ** Third Party Components
import {Trash, Plus, Edit2} from 'react-feather'
import {Card, CardBody, Row, Col, Table, Button, CardImg} from 'reactstrap'

//  ** component 3rd
import AppCollapse from '@core/components/app-collapse'
import Avatar from '@core/components/avatar'

// ** Expandable table component
const ExpandableTable = ({data, toggleModalStudent}) => {
  return (
    <div className="expandable-content p-2">
      <Card>
        <CardBody>
          <CardImg
            top
            src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/timeline.91041dd4.jpg"
            alt="card-top"
          />
          <hr />

          <div>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <div>Nguyễn Khắc Vũ</div>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <div>khacvu0505@gmail.com</div>
                  </td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>
                    <div>0399652356</div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>

      {/* Description */}
      {/* <AppCollapse
        data={[
          {
            title: <span className=" text-dark">30 Class</span>,
            content: (
              <div>
                <Table hover responsive>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Lecturer</th>
                      <th>Date Strat</th>
                      <th>Shadule</th>
                      <th>Time</th>
                      <th> List Student</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center py-1">
                          <Avatar
                            size="xl"
                            imgClassName="rounded"
                            img={
                              require(`assets/images/avatars/avatar-blank.png`)
                                .default
                            }
                          />
                          <div className="user-info text-truncate ml-1">
                            <span className="d-block font-weight-bold text-truncate text-primary">
                              Khóa học 1
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center py-1">
                          <Avatar
                            size="md"
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
                      <td>20/10/2021</td>
                      <td>Thứ 2-4-6</td>
                      <td>9h-12h</td>

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
                        <Button.Ripple className="btn-icon" color="danger">
                          <Trash size={20} />
                        </Button.Ripple>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center py-1">
                          <Avatar
                            size="xl"
                            imgClassName="rounded"
                            img={
                              require(`assets/images/avatars/avatar-blank.png`)
                                .default
                            }
                          />
                          <div className="user-info text-truncate ml-1">
                            <span className="d-block font-weight-bold text-truncate text-primary">
                              Khóa học 1
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center py-1">
                          <Avatar
                            size="md"
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
                      <td>20/10/2021</td>
                      <td>Thứ 2-4-6</td>
                      <td>9h-12h</td>

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
                        <Button.Ripple className="btn-icon" color="danger">
                          <Trash size={20} />
                        </Button.Ripple>
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

      <p>
        <span className="font-weight-bold">Information:</span> Một số thông tin
        của khóa học nằm ở đây
      </p> */}
    </div>
  )
}

export default ExpandableTable
