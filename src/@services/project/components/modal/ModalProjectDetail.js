import {X} from 'react-feather'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from 'reactstrap'
import {Bizxu} from 'components/icon'

// *** Custom Components
import PerfectScrollbar from 'react-perfect-scrollbar'
import Avatar from '@core/components/avatar'

// ** images
const coverDefault =
  'https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2019/07/doanh-nghiep.png'

const ModalProjectData = ({modal, toggleModal, project}) => {
  if (!project) return null
  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader
        close={<X className="cursor-pointer" size={20} onClick={toggleModal} />}
        toggle={toggleModal}
      >
        <span className="text-primary">Chi tiết Gói Dữ liệu</span>
      </ModalHeader>
      <ModalBody>
        <PerfectScrollbar>
          <div className="container-fluid p-0">
            <Row className="border-bottom m-0">
              <div className="m-auto">
                <Card
                  style={{
                    backgroundColor: '#eee',
                  }}
                >
                  <CardBody>
                    <p className="mb-0">Dự án</p>
                    <div
                      className="d-flex align-items-center  my-1 p-2"
                      style={{
                        backgroundColor: '#F2FAFA',
                        borderRadius: '10px',
                      }}
                    >
                      <Avatar
                        img={project.pro_avatar || coverDefault}
                        className=" "
                        onError={e => {
                          e.target.onerror = null
                          e.target.src = coverDefault
                        }}
                        size="lg"
                      />

                      <div className="user-info font-weight-bolder text-truncate ml-1">
                        {project.pro_name}
                        {project.partner_name_or_id && (
                          <p
                            className="text-danger mb-0"
                            style={{fontSize: 12}}
                          >
                            Đối tác: {project.partner_name_or_id}
                          </p>
                        )}
                        {project.is_done ? (
                          <div>
                            <Badge
                              color={'success'}
                              className="text-white mb-1"
                              pill
                            >
                              Hoàn thành
                            </Badge>
                          </div>
                        ) : (
                          <div>
                            <Badge
                              color={'primary'}
                              className="text-white mb-1"
                              pill
                            >
                              Đang bán
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Row>

            <Row className="  py-2 m-0">
              {project.pro_project_type_info && (
                <>
                  <Col lg="3" md="6" sm="12" className=" ">
                    <span>Loại dự án</span>
                  </Col>
                  <Col md="6" lg="9" sm="12" className=" ">
                    <Badge color="light-primary">
                      {project.pro_project_type_info.name}
                    </Badge>
                  </Col>
                </>
              )}

              {project.pro_project_kind_info && (
                <>
                  <Col lg="3" md="6" sm="12" className=" ">
                    <span>Kiểu dự án</span>
                  </Col>
                  <Col md="6" lg="9" sm="12" className=" ">
                    <Badge color="light-info">
                      {project.pro_project_kind_info.name}
                    </Badge>
                  </Col>
                </>
              )}

              <Col lg="3" md="6" sm="12" className=" ">
                <span>Tổng liên hệ</span>
              </Col>
              <Col md="6" lg="9" sm="12" className=" ">
                <span className="font-weight-bolder">{project.c_data}</span>{' '}
                <span>Liên hệ</span>
              </Col>
              <Col lg="3" md="6" sm="12" className=" ">
                <span>Liên hệ đang có</span>
              </Col>
              <Col md="6" lg="9" sm="12" className=" ">
                <span className="font-weight-bolder">
                  {project.c_data - project.c_data_buyed}
                </span>{' '}
                <span>Liên hệ</span>
              </Col>
              <Col lg="3" md="6" sm="12" className=" ">
                <span>Giá mỗi liên hệ</span>
              </Col>
              <Col md="6" lg="9" sm="12" className=" ">
                <span className="text-primary font-weight-bolder">
                  {project.pro_price_per_data} BizXu <Bizxu color="primary" />
                </span>
              </Col>

              <Col lg="3" md="6" sm="12" className=" ">
                <span>Mô tả ngắn </span>
              </Col>
              <Col md="6" lg="9" sm="12" className=" ">
                <div>{project.pro_short_description}</div>
              </Col>
            </Row>
          </div>
        </PerfectScrollbar>
      </ModalBody>
      <ModalFooter>
        <Row className="text-end">
          <Button
            className="px-3 py-1"
            size="sm"
            color="secondary"
            type="button"
            onClick={toggleModal}
            block
          >
            OK
          </Button>
        </Row>
      </ModalFooter>
    </Modal>
  )
}

export default ModalProjectData
