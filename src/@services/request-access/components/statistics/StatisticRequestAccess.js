import React, {useState} from 'react'
import {Button, Card, CardBody} from 'reactstrap'
import {CornerLeftUp, Grid} from 'react-feather'
//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

// *** Components
import ModalCancellationTime from '../modal/ModalCancellationTime'
import StatisticComponent from 'components/statistic/StatisticComponent'

const statistic = [
  {
    id: 1,
    value: 400,
    label: 'Yêu cầu mới',
    sub: 'Cập nhật gần nhất',
    color: 'warning',
  },
  {
    id: 2,
    value: 200,
    label: 'Lời mời',
    sub: '% mời thành công: 50%',
    color: 'success',
  },
  {
    id: 3,
    value: 100,
    label: 'Yêu cầu nhận Bizxu',
    sub: '% Nhận Bizxu: 50%',
    color: 'warning',
  },
  {
    id: 4,
    value: 100,
    label: 'Nhận thành viên',
    sub: '% Nhận thành viên: 50%',
    color: 'warning',
  },
  {
    id: 5,
    value: 10,
    label: 'Số Bizxu nhận từ đại lý',
    sub: '% Đại lý: 10%',
    color: 'danger',
  },
  {
    id: 6,
    value: 20,
    label: 'Đại lý nhận thành viên',
    sub: '% Đại lý: 20%',
    color: 'primary',
  },
]

const StatisticRequestAccess = () => {
  const [statusCancelTime, setStatusCancelTime] = useState(false)

  return (
    <div>
      <div className="p-2 ">
        <Card className="pt-5">
          <StatisticComponent statistic={statistic} />
        </Card>
        <Card>
          <CardBody>
            <div className="d-flex justify-content-between">
              <div>
                <h6>Tổng số yêu cầu chờ duyệt</h6>
                <p className="text-primary font-weight-bolder fs-2 mb-0">
                  65 Yêu cầu
                </p>
              </div>
              <div>
                <Button.Ripple
                  color="danger"
                  onClick={() => setStatusCancelTime(true)}
                >
                  {' '}
                  <Grid size={17} /> Thời gian hủy
                </Button.Ripple>
                <Button.Ripple color="warning" className="ml-3">
                  <CornerLeftUp size={17} /> Chuyển trạng thái
                </Button.Ripple>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <ModalCancellationTime
        setCenteredModal={setStatusCancelTime}
        centeredModal={statusCancelTime}
      />
    </div>
  )
}

export default StatisticRequestAccess
