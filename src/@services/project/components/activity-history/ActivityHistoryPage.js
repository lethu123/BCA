import React from 'react'
import {Card} from 'reactstrap'
import NotificationItem from 'components/notification-item/NotificationItem'
//image
import projectNoti from 'assets/images/datacenter/project-noti.png'
import projectInfo from 'assets/images/datacenter/project-info.png'
import projectCheck from 'assets/images/datacenter/project-check.png'

const data = [
  {
    id: 1,
    image: projectInfo,
    title: 'Giao dịch mua dữ liệu từ ',
    user: 'Dự án thi phương Insurance của bạn không thành công',
    time: new Date(),
  },
  {
    id: 2,
    image: projectNoti,
    label: 'Dự án thi phương Insurance ',
    title: 'có thêm ',
    user: '+137 liên hệ mới Xem ngay',
    time: new Date(),
  },
  {
    id: 3,
    image: projectCheck,
    title: 'Giao dịch mua dữ liệu từ ',
    user: 'Dự án thi phương Insurance của bạn thành công',
    time: new Date(),
  },
  {
    id: 4,
    image: projectInfo,
    title: 'Giao dịch mua dữ liệu từ ',
    user: 'Dự án thi phương Insurance của bạn không thành công',
    time: new Date(),
  },
  {
    id: 5,
    image: projectNoti,
    label: 'Dự án thi phương Insurance ',
    title: 'có thêm ',
    user: '+137 liên hệ mới Xem ngay',
    time: new Date(),
  },
  {
    id: 6,
    image: projectCheck,
    title: 'Giao dịch mua dữ liệu từ ',
    user: 'Dự án thi phương Insurance của bạn thành công',
    time: new Date(),
  },
]

const ActivityHistoryPage = () => {
  return (
    <Card className=" w-lg-50  p-5 mx-auto">
      <h4 className="font-weight-bolder mb-3">Lịch sử hoạt động</h4>
      <NotificationItem data={data} />
      <u className="text-center cursor-pointer text-primary mt-10">Xem thêm</u>
    </Card>
  )
}

export default ActivityHistoryPage
