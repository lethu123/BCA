import React from 'react'
import {Layers, Server, Settings, Slack, X} from 'react-feather'
import {Modal, ModalHeader, ModalBody, Row, Col, CustomInput} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

const role = [
  {
    id: 1,
    type: 'Quản trị cộng đồng B-Alpha: ',
    content: [
      {
        id: 1,
        name: 'Người dùng',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xem trang cộng đồng B-Alpha',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Viết bài',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Sửa bài viết',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa bài viết',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo nhóm',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Chat',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Bình luận bài viết',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Sửa bình luận',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa bình luận',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Follow trang khác',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tham gia nhóm',
          },
        ],
      },
      {
        id: 2,
        name: 'Quản trị',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Khóa trang',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa bài viết',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Mở trang',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa comment',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'BCA đào tạo ',
    content: [
      {
        id: 1,
        name: 'Người dùng',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tham gia khóa học',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa bình luận',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Chấm điểm',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Sửa bình luận',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Bình luận',
          },
        ],
      },
      {
        id: 2,
        name: 'Quản trị',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo khóa học',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Sửa khóa học',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa khóa học',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Duyệt khóa học',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa bình luận',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa điểm',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: 'Dịch vụ Data Center',
    content: [
      {
        id: 1,
        name: 'Người dùng',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Mua Data',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Mua BizXu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Chuyển trạng thái Data',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Chuyển BizXu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Đưa Data vào sọt rác',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Kích hoạt LandingPage',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Chuyển đại lý',
          },
        ],
      },
      {
        id: 2,
        name: 'Quản lý dự án',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo mới',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xem thông tin dự án',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Chỉnh sửa dự án',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xuất file',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa dự án',
          },
        ],
      },
      {
        id: 3,
        name: 'Quản lý Data',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo mới',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Duyệt chuyển Data',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xem thông tin dữ liệu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Duyệt hoàn Data',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Chỉnh sửa gói Data',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Thông báo yêu cầu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xuất file',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xuất gói Data',
          },
        ],
      },
      {
        id: 4,
        name: 'Quản lý BizXu',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo mới',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Bình luận bài viết',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xem thông tin gói BizXu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Duyệt chuyển BizXu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Chỉnh sửa gói BizXu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Duyệt hoàn BizXu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Thông báo yêu cầu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xuất file',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xuất gói BizXu',
          },
        ],
      },
      {
        id: 5,
        name: 'Quản lý LandingPage',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xem LandingPage',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Thông báo yêu cầu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xem thông tin LandingPage',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: 'Báo cáo ',
    content: [
      {
        id: 1,
        name: 'Người dùng',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Báo cáo thành viên',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Báo cáo BizXu',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Báo cáo Data',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Báo cáo cộng đồng B-Alpha',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: 'Quản lý thành viên ',
    content: [
      {
        id: 1,
        name: 'Cấu hình chức năng',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo Level Đata',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa Level Data',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo Level Quản lý',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa Level Quản lý',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo phòng ban',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa phòng ban',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo vai trò',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa vai trò',
          },
        ],
      },
      {
        id: 2,
        name: 'Thông báo',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo thông báo',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Xóa thông báo',
          },
        ],
      },
      {
        id: 3,
        name: 'Quản lý Tài khoản',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Tạo tài khoản',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Thay đổi quyền vai trò',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Thay đổi thông tin tài khoản',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Mở/Khóa tài khoản',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    type: 'Nguồn dữ liệu',
    content: [
      {
        id: 1,
        name: 'Thành viên',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Thêm bài Post',
          },
        ],
      },
      {
        id: 2,
        name: 'Quản trị',
        permission: [
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Thêm bài Post',
          },
          {
            id: Math.random(26).toString().substr(2, 7),
            name: 'Thêm Link',
          },
        ],
      },
    ],
  },
]

const permission = [
  {
    id: '1p',
    icon: <Server className="mr-2 text-primary" size={20} />,
    name: 'Thành viên BCA',
    permission: '13 quyền',
    check: true,
  },
  {
    id: '2p',
    icon: <Settings className="mr-2 text-primary" size={20} />,
    name: 'Quản trị viên A1',
    permission: '23 quyền',
    check: false,
  },
  {
    id: '3p',
    icon: <Slack className="mr-2 text-primary" size={20} />,
    name: 'Quản trị viên A2',
    permission: '33 quyền',
    check: false,
  },
  {
    id: '4p',
    icon: <Layers className="mr-2 text-primary" size={20} />,
    name: 'Quản trị viên A3',
    permission: '43 quyền',
    check: false,
  },
]

const ModalSettingAdminRole = ({adminRole, setAdminRole}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setAdminRole(!adminRole)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={adminRole}
        toggle={() => setAdminRole(!adminRole)}
        className="modal-dialog-centered modal-xl"
      >
        <ModalHeader toggle={() => setAdminRole(!adminRole)} close={CloseBtn}>
          Thiết lập vai trò quản trị
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Row>
              <Col lg={4} style={{borderRight: '1px solid #ccc'}}>
                {permission.length > 0 &&
                  permission.map(ele => (
                    <div className="d-flex align-items-center justify-content-between mb-5">
                      <div className="d-flex">
                        {ele.icon}
                        <p className={ele.check ? 'mb-0 text-primary' : 'mb-0'}>
                          {ele.name} <span className="mx-2">|</span>
                          <span className="font-weight-bolder">
                            {ele.permission}
                          </span>
                        </p>
                      </div>
                      <CustomInput
                        type="checkbox"
                        id={ele.id}
                        defaultChecked={ele.check}
                      />
                    </div>
                  ))}
              </Col>
              <Col lg={8}>
                <div style={{height: 500, overflowY: 'scroll'}}>
                  {role.map(item => (
                    <div
                      key={item.id}
                      style={{borderBottom: '1px dashed #c8c8c8'}}
                      className="py-5"
                    >
                      <h6 className="text-primary">{item.type}</h6>
                      <Row className="mx-0">
                        {item.content.map(ele => (
                          <div>
                            <p className="text-danger">{ele.name}</p>
                            <Row>
                              {ele.permission.map(ele2 => (
                                <Col md="6" key={ele2.id} className="mb-2">
                                  <CustomInput
                                    type="checkbox"
                                    id={ele2.id}
                                    label={ele2.name}
                                  />
                                </Col>
                              ))}
                            </Row>
                          </div>
                        ))}
                      </Row>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </PerfectScrollbar>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalSettingAdminRole
