import React, {useEffect, useState} from 'react'
import {X} from 'react-feather'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Badge,
  ModalFooter,
  Button,
  Input,
} from 'reactstrap'
// import PerfectScrollbar from 'react-perfect-scrollbar'
import moment from 'moment'
import Avatar from '@core/components/avatar'
import {uploadMedia} from '@services/ultils'
import {formatCurrencyVN} from '@services/ultils'
// ** query
import {BizxuQuery, BizxuMutation} from '@services/bizxu'

//image
import bizxuPack from 'assets/images/datacenter/bizxu-gb.png'

const ModalChangeStatus = ({
  setChangeStatus,
  changeStatus,
  id,
  readOnly = false,
}) => {
  const [avatar, setAvatar] = useState({
    file: null,
    preview: '',
  })

  const {data: bizxu} = BizxuQuery.useDetailBizxuPackage(id)
  const {mutate: updateStatusBizxuTransction} =
    BizxuMutation.useUpdateBizxuTransaction()

  useEffect(() => {}, [])

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar({
        preview: reader.result,
        file: files[0],
      })
    }
    reader.readAsDataURL(files[0])
  }

  //function
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setChangeStatus(!changeStatus)}
    />
  )

  // change status bizxu transaction
  const approval = async state_code => {
    const dataSubmit = {
      state_code,
      transaction_id: bizxu.id,
    }

    if (typeof avatar.file !== 'string') {
      dataSubmit.attachment = await uploadMedia(avatar.file)
    }
    updateStatusBizxuTransction(dataSubmit)
    setAvatar('')
    setChangeStatus(!changeStatus)
  }

  if (!bizxu) return null

  return (
    <div>
      <Modal
        // scrollable
        isOpen={changeStatus}
        toggle={() => setChangeStatus(!changeStatus)}
        className="modal-dialog-centered modal-xl"
      >
        <ModalHeader
          toggle={() => setChangeStatus(!changeStatus)}
          close={CloseBtn}
        >
          Thông tin Giao dịch mua BizXu
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={8}>
              <div className="text-right w-100">
                Ngày: {moment(new Date()).format('DD/MM/YYYY')}
              </div>
              <div className="mb-3">
                <h6 className="font-weight-bolder">Mã giao dịch</h6>
                <p
                  className="mb-0 p-1"
                  style={{backgroundColor: '#eee', borderRadius: '5px'}}
                >
                  {bizxu.code}
                </p>
              </div>
              <Row className="">
                <Col md={6}>
                  <div className="mb-3">
                    <h6 className="font-weight-bolder">Gói mua</h6>
                    <div className="d-inline-block mt-1">
                      <div
                        className="d-flex align-items-center  justify-content-center p-2"
                        style={{backgroundColor: '#eee', borderRadius: '25px'}}
                      >
                        <img
                          src={bizxuPack}
                          alt="images"
                          className="img-fluid rounded-circle"
                          width="50px"
                          height="50px"
                        />
                        <div className="user-info text-truncate font-weight-bolder ml-1">
                          {bizxu.bizxu_package_info?.name}
                          <p
                            className="text-danger mb-0 text-right"
                            style={{fontSize: 12}}
                          >
                            {bizxu.bizxu_package_info?.sales} Bizxu
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <h6 className="font-weight-bolder">Người yêu cầu</h6>
                    <div className="d-flex align-items-center mt-2">
                      <Avatar
                        className="mr-75"
                        content={bizxu.user_info?.username}
                        color="light-primary"
                        initials
                        size="lg"
                      />
                      <div className="user-info text-truncate">
                        {bizxu.user_info?.username}
                        <Badge
                          color={'success'}
                          className="text-white  ml-2"
                          pill
                        >
                          AA
                        </Badge>
                        <p className="font-weight-bolder mb-0">
                          {bizxu.user_info?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg="12">
                  <div className="mb-3">
                    <h6 className="font-weight-bolder">Số lượng mua</h6>
                    <p
                      className="mb-0 p-1"
                      style={{backgroundColor: '#eee', borderRadius: '5px'}}
                    >
                      {bizxu.amount} gói
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="mb-3">
                    <h6 className="font-weight-bolder">Đơn giá</h6>
                    <p
                      className="mb-0 p-1"
                      style={{backgroundColor: '#eee', borderRadius: '5px'}}
                    >
                      {formatCurrencyVN(bizxu.unit_price)}{' '}
                      {/* {bizxu.bizxu_package_info?.currency_type_info?.name} */}
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="mb-3">
                    <h6 className="font-weight-bolder">Thành tiền</h6>
                    <p
                      className="mb-0 p-1"
                      style={{backgroundColor: '#eee', borderRadius: '5px'}}
                    >
                      {formatCurrencyVN(bizxu.total_price)}{' '}
                      {/* {bizxu.bizxu_package_info?.currency_type_info?.name} */}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <p className="font-weight-bolder">Hình ảnh đính kèm</p>
              {!avatar.preview && !bizxu.attachment && readOnly && (
                <span className="text-danger">Không có hình ảnh đính kèm</span>
              )}
              {(avatar.preview || bizxu.attachment) && (
                <div className="mb-1">
                  <img
                    src={avatar.preview || bizxu.attachment}
                    alt="images1"
                    className="img-fluid rounded"
                    width="240px"
                  />
                </div>
              )}

              {!readOnly && (
                <Input
                  onChange={onChange}
                  type="file"
                  className="form-control"
                />
              )}
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          {readOnly ? (
            <div className="text-end">
              <Button
                color="secondary"
                onClick={() => setChangeStatus(!changeStatus)}
                className="my-1"
                block
              >
                Đóng
              </Button>
            </div>
          ) : (
            <Row className="w-100">
              <Col md="4">
                <Button
                  color="success"
                  onClick={() => approval('APPROVED')}
                  className="my-1"
                  block
                >
                  Duyệt
                </Button>
              </Col>
              <Col md="4">
                <Button
                  color="primary"
                  outline
                  onClick={() => approval('REJECTED')}
                  className="my-1"
                  block
                >
                  Từ chối
                </Button>
              </Col>
              <Col md="4">
                <Button
                  color="secondary"
                  onClick={() => setChangeStatus(!changeStatus)}
                  className="my-1"
                  block
                >
                  Hủy
                </Button>
              </Col>
            </Row>
          )}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalChangeStatus
