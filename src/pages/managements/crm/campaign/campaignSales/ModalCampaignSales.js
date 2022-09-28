import SelectField from 'components/form/SelectField'
import TextareaField from 'components/form/TextareaField'
import TextField from 'components/form/TextField'
import React from 'react'
import {Save, X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Badge,
} from 'reactstrap'
import imgautojob from 'assets/images/home/autojob.png'
import DatePickerField from 'components/form/DatePickerField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalCampaignSales = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-xl"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          <span className="text-primary"> Tạo chiến dịch</span>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Row>
              <Col md="5">
                <TextField
                  type="text"
                  name="nameCampaign"
                  size="md"
                  label="Tên chiến dịch"
                  placeholder="Nhập tên chiến dịch ..."
                  isRequired
                  onChange={(name, value) => console.log(value)}
                />
                <TextareaField
                  maxLength={100}
                  minRows={4}
                  name="description"
                  label="Mô tả chiến dịch"
                  placeholder="Nhập mô tả cho chiến dịch ..."
                  // isRequired
                  onChange={(name, value) => console.log(value)}
                />
              </Col>
              <Col md="7">
                <SelectField
                  name="select"
                  label="Auto job"
                  placeholder="Chọn Auto Job"
                  options={[
                    {
                      label: 'Option 1',
                      value: 'value1',
                    },
                    {
                      label: <Badge color="warning">Option2</Badge>,
                      value: 'value2',
                    },
                  ]}
                  onChange={(name, value) => console.log(value)}
                />
                <p style={{marginTop: 20}}>Auto job</p>
                <div
                  style={{
                    padding: 20,
                    border: '1px solid #c8c8c8',
                    borderRadius: 5,
                  }}
                >
                  <img src={imgautojob} alt="images" className="img-fluid" />
                </div>
                <div className="d-flex">
                  <div className="p-3">
                    <DatePickerField
                      name="picker"
                      label="Thời gian chạy"
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: 'H:i',
                        time_24hr: true,
                      }}
                      onChange={(name, value) => console.log(value)}
                    />
                  </div>
                  <div className="p-3">
                    <DatePickerField
                      name="picker"
                      label="Ngày bắt đầu"
                      onChange={(name, value) => console.log(value)}
                    />
                  </div>
                  <div className="p-3">
                    <DatePickerField
                      name="picker"
                      label="Ngày kết thúc"
                      onChange={(name, value) => console.log(value)}
                    />
                  </div>
                </div>
                <Row className=" p-3">
                  <Col md="6">
                    <div>
                      <SelectField
                        name="typeCalendar"
                        label="Loại lịch"
                        placeholder="Loại lịch"
                        options={[
                          {
                            label: 'Option 1',
                            value: 'value1',
                          },
                          {
                            label: <Badge color="warning">Option2</Badge>,
                            value: 'value2',
                          },
                        ]}
                        onChange={(name, value) => console.log(value)}
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <div>
                      <SelectField
                        name="typeloop"
                        label="Loại lặp"
                        placeholder="Loại Post"
                        options={[
                          {
                            label: 'Option 1',
                            value: 'value1',
                          },
                          {
                            label: <Badge color="warning">Option2</Badge>,
                            value: 'value2',
                          },
                        ]}
                        onChange={(name, value) => console.log(value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Hủy
          </Button>{' '}
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            <Save size={15} /> Tạo
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalCampaignSales
