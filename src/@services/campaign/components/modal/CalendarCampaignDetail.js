import DataTableComponent from 'components/data-table/DataTableComponent'
import moment from 'moment'
import React from 'react'
import {
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'

// *** components ***
import FilterCampaignCalendarDetail from '@services/campaign/components/filter/FilterCampaignCalendarDetail'
import {X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'

const dataUser = [
  {
    id: 1,
    customer_info: {
      object_data: {
        username: 'Nguyễn Văn A',
        phone: '098376834',
        mail: 'nguyenvana@hspace.com',
      },
    },
    history_info: {
      created_at: '12-10-2021',
      twilio_status: 'Accepted',
      body: 'Content 1, some content',
      phone_from: '+8498762343',
      to: '+8497354728',
    },
  },
  {
    id: 2,
    customer_info: {
      object_data: {
        username: 'Nguyễn Văn B',
        phone: '098376834',
        mail: 'nguyenvana@hspace.com',
      },
    },
    history_info: {
      created_at: '12-10-2021',
      twilio_status: 'Accepted',
      body: 'Content 1, some content',
      phone_from: '+8498762343',
      to: '+8497354728',
    },
  },
]

const CalendarCampaignDetail = ({
  calenderCampaign,
  setCalendarCampaign,
  titleModal,
}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCalendarCampaign(!calenderCampaign)}
    />
  )
  return (
    <div>
      <Modal
        isOpen={calenderCampaign}
        toggle={() => setCalendarCampaign(!calenderCampaign)}
        className="modal-dialog-centered modal-xl"
        scrollable
      >
        <ModalHeader
          toggle={() => setCalendarCampaign(!calenderCampaign)}
          close={CloseBtn}
        >
          {titleModal}
        </ModalHeader>
        <ModalBody>
          <DataTableComponent
            // *** required
            columns={[
              {
                name: 'Thông tin khách hàng',
                // selector: 'customer',
                minWidth: '220px',
                cell: row => (
                  <ListGroup className="my-2">
                    <ListGroupItem className="d-flex">
                      <span className="mr-1 font-weight-bolder">Tên:</span>
                      <span>{row.customer_info?.object_data?.username}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex">
                      <span className="mr-1 font-weight-bolder">SĐT:</span>
                      <span>{row.customer_info?.object_data?.phone}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex">
                      <span className="mr-1 font-weight-bolder">Email:</span>
                      <span>{row.customer_info?.object_data?.mail}</span>
                    </ListGroupItem>
                  </ListGroup>
                ),
              },
              {
                name: 'Ngày gửi',
                // selector: 'date_sent',
                maxWidth: '200px',
                cell: row =>
                  row.history_info?.created_at &&
                  moment(row.history_info?.created_at).format('L'),
              },
              {
                name: 'Trạng thái',
                // selector: 'date_sent',
                minWidth: '100px',
                maxWidth: '200px',
                cell: row => (
                  <span className="font-weight-bold text-capitalize">
                    {row.history_info?.twilio_status ||
                      row.history_info?.response_status}
                  </span>
                ),
              },
              {
                name: 'Nội dung',
                // selector: 'date_sent',
                maxWidth: '400px',
                cell: row =>
                  row.history_info?.body || row.history_info?.subject,
              },
              {
                name: 'Gửi từ',
                // selector: 'date_sent',
                maxWidth: '200px',
                cell: row =>
                  row.history_info?.phone_from || row.history_info?.from_email,
              },
              {
                name: 'Gửi đến',
                // selector: 'date_sent',
                maxWidth: '200px',
                cell: row => row.history_info?.to || row.history_info?.to_email,
              },
            ]}
            query={{key: [], params: {}, url: '', headers: ''}}
            defaultData={dataUser}
            // ** optional  default undefined
            isNoShadow
            FilterComponent={FilterCampaignCalendarDetail}
            // isExport
            searchPlaceholder="Nhập nội dung tìm kiếm ..."
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="light-danger"
            onClick={() => setCalendarCampaign(!calenderCampaign)}
          >
            Đóng
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CalendarCampaignDetail
