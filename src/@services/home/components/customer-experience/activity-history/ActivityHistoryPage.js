import React from 'react'
import {Card} from 'reactstrap'
import NotificationItem from 'components/notification-item/NotificationItem'
//image
import edit from 'assets/images/datacenter/edit.png'
import excel from 'assets/images/datacenter/excel.png'
import addUser from 'assets/images/datacenter/add-user.png'

const data = [
  {
    id: 1,
    image: edit,
    title: 'Bạn đã chỉnh sửa thông tin - Cập nhật ký cuộc gọi của ',
    user: 'ID-B21013424 Danny Nguyễn',
    time: new Date(),
  },
  {
    id: 2,
    image: excel,
    label: 'Xuất file excel Thành Công ',
    title: 'Dữ liệu mới - Hồ sơ dữ liệu ',
    user: 'ID-B21013424 Danny Nguyễn',
    time: new Date(),
  },
  {
    id: 3,
    image: addUser,
    title: 'Bạn đã thêm thành công ứng viên mới ',
    user: 'ID-B21013424 Denis Dang',
    time: new Date(),
  },
  {
    id: 4,
    image: edit,
    title: 'Bạn đã chỉnh sửa thông tin - Cập nhật ký cuộc gọi của ',
    user: 'ID-B21013424 Danny Nguyễn',
    time: new Date(),
  },
  {
    id: 5,
    image: excel,
    label: 'Xuất file excel Thành Công ',
    title: 'Dữ liệu mới - Hồ sơ dữ liệu ',
    user: 'ID-B21013424 Danny Nguyễn',
    time: new Date(),
  },
  {
    id: 6,
    image: addUser,
    title: 'Bạn đã thêm thành công ứng viên mới ',
    user: 'ID-B21013424 Denis Dang',
    time: new Date(),
  },
]

const ActivityHistoryPage = () => {
  return (
    <Card className=" w-lg-50  p-3 mx-auto mt-1">
      <h4 className="font-weight-bolder mb-3">
        Các hoạt động chỉnh sửa gần đây
      </h4>
      <NotificationItem data={data} />
      <u className="text-center cursor-pointer text-primary mt-10">Xem thêm</u>
    </Card>
  )
}

export default ActivityHistoryPage
