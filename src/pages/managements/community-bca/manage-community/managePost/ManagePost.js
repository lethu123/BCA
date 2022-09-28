import React, {useState} from 'react'
// Third Libary
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import {Grid} from 'react-feather'
// *** Components
import StatisticManagePost from './StatisticManagePost'
import TableManagePost from './TableManagePost'
// ** query
import {PostQuery} from '@services/post'
import {Alert} from 'reactstrap'

const ManagePost = () => {
  const [page, setPage] = useState(1)

  const {data: statistic, isFetching} = PostQuery.useStatisticPost({page})
  if (isFetching)
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="fw-bold">Đang lấy dữ liệu</span>
        </div>
      </Alert>
    )
  if (!statistic)
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="fw-bold">Chưa có dữ liệu</span>
        </div>
      </Alert>
    )
  return (
    <div style={{backgroundColor: '#fff', padding: 20}}>
      <div className="d-flex">
        <Grid
          color="#E6641F"
          stroke="#E6641F"
          fill="#E6641F"
          size={50}
          className="mr-2"
        />
        <div>
          <h4 className="font-weight-bold">Quản lý bài đăng</h4>
          <p className="mb-0">Quản lý chi tiết các bài đăng</p>
        </div>
      </div>

      <div>
        <StatisticManagePost data={statistic.post_data} />
        <TableManagePost
          data={statistic.user_data}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  )
}

export default ManagePost
