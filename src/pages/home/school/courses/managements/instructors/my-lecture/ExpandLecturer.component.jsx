// ** Third Party Components
import {Trash} from 'react-feather'
import {Card, CardBody, Table, Button, CardImg, Badge} from 'reactstrap'

//  ** component 3rd
import AppCollapse from '@core/components/app-collapse'
import Avatar from '@core/components/avatar'

// ** Expandable table component
const ExpandableTable = ({data, toggleModalStudent, toggleModal}) => {
  return (
    <div className="expandable-content p-2">
      <Card>
        <CardBody>
          <CardImg
            top
            src={
              data.cover_picture
                ? data.cover_picture
                : ' https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/timeline.91041dd4.jpg'
            }
            alt="card-top"
          />
          <hr />
          <div>
            <p>Educator Skills</p>
            <div style={{maxWidth: 500}}>
              {data.skills.length > 0 &&
                data.skills.map(item => (
                  <Badge color="light-warning" className="mr-1 mb-1">
                    {item.name}
                  </Badge>
                ))}
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Description */}
      <AppCollapse
        data={[
          {
            title: <span className=" text-dark">10 Course</span>,
            content: (
              <div>
                <Table hover responsive>
                  <thead>
                    <tr>
                      <th>Lecturer</th>
                      <th>Date Strat</th>
                      <th>Shadule</th>
                      <th>Time</th>
                      <th>List Student</th>
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
                              Khóa học 2
                            </span>
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
        của user nằm ở đây
      </p>
    </div>
  )
}

export default ExpandableTable
