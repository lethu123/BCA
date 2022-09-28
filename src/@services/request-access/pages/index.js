import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Media,
  Row,
  UncontrolledAlert,
} from 'reactstrap'
import {Plus} from 'react-feather'
import {useState} from 'react'

import Avatar from '@core/components/avatar'

// ** component
import TableRequestAccess from '../components/table/TableRequestAccess'
import ModalInviteMember from '../components/modal/ModalInviteMember'
import {News} from 'components/icon'

// ** assets
// import './Custom.style.scss'

const RequestAccessIndex = () => {
  // *** State
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)

  return (
    <div>
      <Card>
        <CardHeader className=" py-2 border-bottom">
          <Row className="w-100">
            <Col lg="9" md="12">
              <div className="d-flex justify-content-start align-items-center mb-1">
                <News color="primary" size="3x" className="mr-2" />
                <div className="profile-user-info ">
                  <h4 className="mb-0 ">Yêu cầu truy cập</h4>
                  <p className="mb-0">
                    Quản lý yêu cầu truy câp và giới thiệu thành viên của Đại lý
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="3" md="12" className="text-right">
              <Button.Ripple color="primary" onClick={toggleModal}>
                <Plus size={14} />
                <span className="align-middle ml-1">Mời thành viên</span>
              </Button.Ripple>
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="pt-1">
          <TableRequestAccess />
        </CardBody>
      </Card>
      <ModalInviteMember modal={modal} toggleModal={toggleModal} />
    </div>
  )
}

export default RequestAccessIndex
