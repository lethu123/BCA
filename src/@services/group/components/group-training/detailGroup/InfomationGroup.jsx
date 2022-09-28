import React, {useState} from 'react'
import * as Icon from 'react-feather'
import {
  Button,
  Card,
  Col,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import Avatar from '@core/components/avatar'
// import CourseRelation from './CourseRelation'
import InstructionGroup from './InstructionGroup'

// *** Query
import {GroupQuery} from '@services/group'

const transactionsArr = data => [
  {
    title: 'Doanh số (KHTV)',
    color: 'light-primary',
    subtitle: 'revenue',
    amount: data.sales,
    Icon: Icon['DollarSign'],
    down: true,
  },
  {
    title: 'Số người (Biết làm NPPC)',
    color: 'light-success',
    subtitle: 'Amount people',
    amount: data.num_person,
    Icon: Icon['Users'],
  },
  {
    title: 'Điểm bán',
    color: 'light-danger',
    subtitle: 'Sale point',
    amount: data.num_place,
    Icon: Icon['MapPin'],
  },
  {
    title: 'Địa bàn',
    color: 'light-warning',
    subtitle: 'Locality',
    amount: data.local,
    Icon: Icon['Map'],
    down: true,
  },
  {
    title: 'Kiến thức',
    color: 'light-info',
    subtitle: 'Knowledge',
    amount: data.knowledge,
    Icon: Icon['TrendingUp'],
  },
  {
    title: 'Thời gian',
    color: 'light-info',
    subtitle: 'Time',
    amount: data.time + ' năm',
    Icon: Icon['Clock'],
  },
  {
    title: 'Thu nhập (Triệu/người)',
    color: 'light-info',
    subtitle: 'Income',
    amount: data.income,
    Icon: Icon['DollarSign'],
  },
]

const InfomationGroup = ({infoGroup}) => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)

  // *** Query ***
  const {data: infoAppellation} = GroupQuery.useGetInfoAppellation({
    label_id: infoGroup && infoGroup?.group_label?.label_id,
  })

  const renderTransactions = arr => {
    return arr.map(item => {
      return (
        <div key={item.title} className="transaction-item">
          <Media>
            <Avatar
              className="rounded"
              color={item.color}
              icon={<item.Icon size={18} />}
            />
            <Media body>
              <h6 className="transaction-title">{item.title}</h6>
              <small>{item.subtitle}</small>
            </Media>
          </Media>
          <div
            className={`font-weight-bolder ${item.color}
            }`}
          >
            {item.amount}
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <Row className="mt-1">
        <Col lg="6">
          <InstructionGroup infoGroup={infoGroup} />
        </Col>
        {/* <Col lg="6">
          <Card className="card-transaction h-100">
            <CardBody>
              <h6 className="mb-75">Danh hiệu hiện tại</h6>
              <p className="text-primary text-center" style={{fontSize: 20}}>
                {infoAppellation && infoAppellation.data?.name}
              </p>
              {infoAppellation &&
                infoAppellation.data &&
                renderTransactions(transactionsArr(infoAppellation.data))}
              <div className="text-right">
                <Button.Ripple color="info" outline onClick={toggleModal}>
                  Xem danh hiệu tiếp theo
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col> */}
      </Row>

      {/* <CourseRelation /> */}

      {/* modal danh hiệu */}
      <Modal
        isOpen={modal}
        toggle={toggleModal}
        className={'modal-dialog-centered  '}
      >
        <ModalHeader
          close={
            <Icon.X
              className="cursor-pointer"
              size={15}
              onClick={toggleModal}
            />
          }
          toggle={toggleModal}
        >
          Danh hiệu tiếp theo
        </ModalHeader>
        <ModalBody>
          <Card className="card-transaction bg-transparent border-0 box-shadow-0">
            <p className="text-primary text-center" style={{fontSize: 20}}>
              {infoAppellation?.data?.next_label?.name}
            </p>
            {infoAppellation &&
              infoAppellation.data &&
              infoAppellation.data.next_label &&
              renderTransactions(
                transactionsArr(infoAppellation.data.next_label),
              )}
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal} outline>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default InfomationGroup
