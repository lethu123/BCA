import React, {useState} from 'react'
import {Save, X} from 'react-feather'
// *** Third Libary
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Col,
  CustomInput,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap'
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalAccountConfigurationTab = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    name: '',
    value1: '',
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    description: Yup.string().required('Bạn phải nhập mô tả'),
  })
  const administration = [
    {
      id: 1,
      name: 'Trong cộng đồng B-Alpha(15)',
    },
    {
      id: 2,
      name: 'Đào tạo(12)',
    },
    {
      id: 3,
      name: 'Dịch vụ Data Center(9)',
    },
    {
      id: 4,
      name: 'Quản lý thành viên(5)',
    },
    {
      id: 5,
      name: 'Báo cáo(13)',
    },
    {
      id: 6,
      name: 'Nguồn dữ liệu(9)',
    },
  ]
  const [chooseAdmin, setChooseAdmin] = useState(0)

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
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xem trang cộng đồng B-Alpha',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Viết bài',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Sửa bài viết',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa bài viết',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo nhóm',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Chat',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Bình luận bài viết',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Sửa bình luận',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa bình luận',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Follow trang khác',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tham gia nhóm',
            },
          ],
        },
        {
          id: 2,
          name: 'Quản trị',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Khóa trang',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa bài viết',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Mở trang',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
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
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tham gia khóa học',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa bình luận',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Chấm điểm',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Sửa bình luận',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Bình luận',
            },
          ],
        },
        {
          id: 2,
          name: 'Quản trị',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo khóa học',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Sửa khóa học',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa khóa học',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Duyệt khóa học',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa bình luận',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
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
              id: Math.random(26).toString().substr(2, 5),
              name: 'Mua Data',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Mua BizXu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Chuyển trạng thái Data',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Chuyển BizXu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Đưa Data vào sọt rác',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Kích hoạt LandingPage',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Chuyển đại lý',
            },
          ],
        },
        {
          id: 2,
          name: 'Quản lý dự án',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo mới',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xem thông tin dự án',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Chỉnh sửa dự án',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xuất file',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa dự án',
            },
          ],
        },
        {
          id: 3,
          name: 'Quản lý Data',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo mới',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Duyệt chuyển Data',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xem thông tin dữ liệu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Duyệt hoàn Data',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Chỉnh sửa gói Data',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Thông báo yêu cầu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xuất file',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xuất gói Data',
            },
          ],
        },
        {
          id: 4,
          name: 'Quản lý BizXu',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo mới',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Bình luận bài viết',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xem thông tin gói BizXu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Duyệt chuyển BizXu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Chỉnh sửa gói BizXu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Duyệt hoàn BizXu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Thông báo yêu cầu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xuất file',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xuất gói BizXu',
            },
          ],
        },
        {
          id: 5,
          name: 'Quản lý LandingPage',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xem LandingPage',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Thông báo yêu cầu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
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
              id: Math.random(26).toString().substr(2, 5),
              name: 'Báo cáo thành viên',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Báo cáo BizXu',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Báo cáo Data',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
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
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo Level Đata',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa Level Data',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo Level Quản lý',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa Level Quản lý',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo phòng ban',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa phòng ban',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo vai trò',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa vai trò',
            },
          ],
        },
        {
          id: 2,
          name: 'Thông báo',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo thông báo',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Xóa thông báo',
            },
          ],
        },
        {
          id: 3,
          name: 'Quản lý Tài khoản',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Tạo tài khoản',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Thay đổi quyền vai trò',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Thay đổi thông tin tài khoản',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
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
              id: Math.random(26).toString().substr(2, 5),
              name: 'Thêm bài Post',
            },
          ],
        },
        {
          id: 2,
          name: 'Quản trị',
          permission: [
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Thêm bài Post',
            },
            {
              id: Math.random(26).toString().substr(2, 5),
              name: 'Thêm Link',
            },
          ],
        },
      ],
    },
  ]
  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-xl customInputStyle"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          Thêm vai trò quản trị mới
        </ModalHeader>
        <ModalBody>
          <Row className="mx-0 px-0">
            <Col md="4">
              <Formik
                initialValues={initialState}
                enableReinitialize={true}
                validationSchema={formSchema}
              >
                {({
                  values,
                  setFieldValue,
                  setFieldTouched,
                  isValid,
                  isSubmitting,
                  dirty,
                  errors,
                  touched,
                }) => (
                  <Form>
                    <FormGroup>
                      <TextField
                        type="text"
                        name="name"
                        size="lg"
                        label="Tên vai trò"
                        placeholder="Tên vai trò ..."
                        isRequired
                      />
                    </FormGroup>

                    <FormGroup>
                      <TextareaField
                        maxLength={100}
                        minRows={3}
                        name="description"
                        label="Mô tả"
                        placeholder="Nhập mô tả cho vai trò  ..."
                      />
                    </FormGroup>
                  </Form>
                )}
              </Formik>
              <h6>Chọn quản trị theo nhóm chức năng</h6>
              <div>
                {administration.map((item, idx) => (
                  <p
                    key={item.id}
                    className={`cursor-pointer ${
                      chooseAdmin === idx ? 'text-primary' : ''
                    }`}
                    onClick={() => setChooseAdmin(idx)}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </Col>
            <Col md="8">
              <div style={{height: 450}}>
                <PerfectScrollbar>
                  {role.map(item => (
                    <div
                      key={item.id}
                      style={{borderBottom: '1px dashed #c8c8c8'}}
                    >
                      <h6 className="text-primary">{item.type}</h6>
                      <Row className="mx-0 px-0">
                        {item.content.map((ele, idx) => (
                          <div key={idx}>
                            <p style={{color: 'red'}}>{ele.name}</p>
                            <Row className="mx-0 px-0">
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
                </PerfectScrollbar>
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            <Save size={16} /> Tạo
          </Button>{' '}
          <Button
            color="secondary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Hủy
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalAccountConfigurationTab
