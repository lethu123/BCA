import React from 'react'
import NotificationItem from 'components/notification-item/NotificationItem'
import {Card} from 'reactstrap'

//image
import edit from 'assets/images/datacenter/edit.png'

const data = [
  {
    id: 1,
    image: edit,
    label:
      'Bùi Quốc Anh đã sửa thông tin tên dự án từ Hoàng Quyên Insurance trờ thành Thi Phương Insurance ',
    user: '',
    time: new Date(),
  },
  {
    id: 2,
    image: edit,
    label:
      'Bùi Quốc Anh đã sửa thông tin tên dự án từ Hoàng Quyên Insurance trờ thành Thi Phương Insurance ',
    user: '',
    time: new Date(),
  },
  {
    id: 3,
    image: edit,
    label:
      'Bùi Quốc Anh đã sửa thông tin tên dự án từ Hoàng Quyên Insurance trờ thành Thi Phương Insurance ',
    user: '',
    time: new Date(),
  },
  {
    id: 4,
    image: edit,
    label:
      'Bùi Quốc Anh đã sửa thông tin tên dự án từ Hoàng Quyên Insurance trờ thành Thi Phương Insurance ',
    user: '',
    time: new Date(),
  },
  {
    id: 5,
    image: edit,
    label:
      'Bùi Quốc Anh đã sửa thông tin tên dự án từ Hoàng Quyên Insurance trờ thành Thi Phương Insurance ',
    user: '',
    time: new Date(),
  },
  {
    id: 6,
    image: edit,
    label:
      'Bùi Quốc Anh đã sửa thông tin tên dự án từ Hoàng Quyên Insurance trờ thành Thi Phương Insurance ',
    user: '',
    time: new Date(),
  },
]

const HistoryManageProject = () => {
  return (
    <div>
      <Card className=" w-lg-100  p-5 mx-auto">
        <h4 className="font-weight-bolder mb-3">
          Các hoạt động chỉnh sửa gần đây
        </h4>
        <NotificationItem data={data} />
        <u className="text-center cursor-pointer text-primary mt-10">
          Xem thêm
        </u>
      </Card>
    </div>
  )
}

export default HistoryManageProject
