import {Users} from 'react-feather'
import {Alert, Table} from 'reactstrap'
import moment from 'moment'

// *** Asset
import imgDefault from 'assets/images/avatars/avatar-blank.png'

const TableUidBlockHistory = ({data}) => {
  if (!data)
    return (
      <Alert color="primary">
        <div className="alert-body">Không tìm thấy dữ liệu</div>
      </Alert>
    )
  const formatTime = time => moment(time).startOf('day').fromNow()
  return (
    <Table responsive striped>
      <tbody>
        <tr>
          <td className="font-weight-bold">Người gửi</td>

          <td>
            <div className="d-flex align-items-center mt-5 mb-5">
              <div className="symbol symbol-40 symbol-light-white mr-5">
                <div>
                  <img
                    src={imgDefault}
                    className="h-100 rounded align-self-end"
                    alt=""
                  />
                </div>
              </div>

              <div className="d-flex flex-column font-weight-bold">
                <a
                  href={`https://www.facebook.com/profile.php?id=${data.sender_info?.uid}`}
                  target="_blank"
                  className="text-dark text-hover-primary mb-1 font-size-lg"
                  rel="noreferrer"
                >
                  {data.sender_info?.username}
                </a>
                <span className="text-muted">
                  <Users className="mr-2" size="12" />
                  {data.sender_info?.c_friends}
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="font-weight-bold">Nội dung</td>
          <td className="text-wrap">{data.content}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">Lý do</td>
          <td className="text-wrap">{data.reason}</td>
        </tr>

        <tr>
          <td className="font-weight-bold">Thời gian bắt đầu</td>
          <td className="text-wrap">
            {data.time_called && formatTime(data.time_called)}
          </td>
        </tr>

        <tr>
          <td className="font-weight-bold">Thời gian hoàn thành</td>
          <td className="text-wrap">
            {data.time_done && formatTime(data.time_done)}
          </td>
        </tr>

        <tr>
          <td className="font-weight-bold">Thời gian kết thúc</td>
          <td className="text-wrap">
            {data.time_stop && formatTime(data.time_stop)}
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableUidBlockHistory
