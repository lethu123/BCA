import React, {useState} from 'react'
// *** Components
import TableManageEvent from '../table/TableManageEvent'
import ModalEvent from '@services/event/components/modal/ModalCreateEvent'
// *** Third Libary
import {
  Archive,
  Calendar,
  Copy,
  Grid,
  MoreVertical,
  Trash2,
} from 'react-feather'
import {
  Button,
  Card,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap'
// ** query
import {EventQuery} from '@services/event'
import StatisticEvent from '../statistic/StatisticEvent'

const ManageEvent = () => {
  const [showEvent, setShowEvent] = useState(false)

  const {data: statisticEvent} = EventQuery.useStatisticEvent()

  return (
    <div style={{backgroundColor: '#fff', padding: 20}}>
      <div className="row justify-content-between align-items-center">
        <div className="d-flex col=lg-9">
          <Grid
            color="#E6641F"
            stroke="#E6641F"
            fill="#E6641F"
            size={50}
            className="mr-2"
          />
          <div>
            <h4 className="font-weight-bold">Quản lý sự kiện</h4>
            <p className="mb-0">Xem và quản lý các sự kiện</p>
          </div>
        </div>
        <div className="col-lg-3 text-right mt-3 mt-lg-0">
          <Button.Ripple color="primary" onClick={() => setShowEvent(true)}>
            <Calendar size={18} /> Tạo sự kiện
          </Button.Ripple>
          <UncontrolledButtonDropdown>
            <DropdownToggle color="flat-primary" style={{padding: 0}}>
              <MoreVertical />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <div className="d-flex align-items-center">
                  <Archive size={19} className="mr-3" />
                  <div>
                    <h6 className="mb-0">Thêm vào lịch hẹn</h6>
                    <small>
                      Thêm và đồng bộ sự kiện vào Microsoft Outlook <br /> Lịch
                      Google hoặc Lịch Apple
                    </small>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div>
                  <Copy size={19} className="mr-3" />
                  <span>Nhân bản sự kiện</span>
                </div>
              </DropdownItem>
              <DropdownItem>
                <Trash2 size={19} className="mr-3" />
                <span>Xóa sự kiện</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </div>

      {statisticEvent?.data && (
        <Card className="pt-2 mt-2">
          <StatisticEvent statistic={statisticEvent.data} />
        </Card>
      )}

      <TableManageEvent setCenteredModal={setShowEvent} />

      <ModalEvent
        modal={showEvent}
        toggleModal={() => setShowEvent(!showEvent)}
      />
    </div>
  )
}

export default ManageEvent
