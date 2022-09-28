// *** Custom Components
import Avatar from '@core/components/avatar'

// *** Third Party Components
import {X, Check, AlertTriangle, Clock} from 'react-feather'
import {Media, Row, Col, CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'

const NotifyBizXuPage = () => {
  // *** Notification Array
  const notificationsArray = [
    {
      avatarIcon: <Check size={18} />,
      color: 'light-primary',
      subtitle: '9h trước',
      title: (
        <Media tag="div" heading className="text-dark ">
          <span className="font-weight-bolder">Bạn đã mua</span>{' '}
          <span className="font-weight-bolder text-primary">Thành công</span>
          &nbsp;gói <span className="font-weight-bolder">
            242.000 Bizxu
          </span>{' '}
          .Bạn được tặng thêm
          <span className="font-weight-bolder"> 38.000 Bizxu</span>. Mã giao
          dịch là <span className="font-weight-bolder">BT12905</span>{' '}
        </Media>
      ),
    },
    {
      avatarIcon: <X size={18} />,
      color: 'light-danger',
      subtitle: '12h trước',
      title: (
        <Media tag="div" heading className="text-dark ">
          Thanh toán mua
          <span className="font-weight-bolder"> 99.000 BizXu </span> của bạn
          <span className="font-weight-bolder"> Thất bại</span>. Kiểm tra lại số
          dư tài khoản thanh toán.{' '}
          <span className="text-primary" style={{textDecoration: 'underline'}}>
            Thử lại
          </span>
        </Media>
      ),
    },
    {
      avatarIcon: <AlertTriangle size={18} />,
      color: 'light-warning',
      subtitle: 'BLR Server using high memory',
      title: (
        <Media tag="div" heading className="text-dark ">
          <span className="font-weight-bolder ">High memory</span>&nbsp;usage
        </Media>
      ),
    },
    {
      avatarIcon: <Check size={18} />,
      color: 'light-primary',
      subtitle: '9h trước',
      title: (
        <Media tag="div" heading className="text-dark ">
          <span className="font-weight-bolder">Bạn đã mua</span>{' '}
          <span className="font-weight-bolder text-primary">Thành công</span>
          &nbsp;gói <span className="font-weight-bolder">
            242.000 Bizxu
          </span>{' '}
          .Bạn được tặng thêm
          <span className="font-weight-bolder"> 38.000 Bizxu</span>. Mã giao
          dịch là <span className="font-weight-bolder">BT12905</span>{' '}
        </Media>
      ),
    },
    {
      avatarIcon: <X size={18} />,
      color: 'light-danger',
      subtitle: 'August 21st 2',
      title: (
        <Media tag="div" heading className="text-dark ">
          Thanh toán mua
          <span className="font-weight-bolder"> 99.000 BizXu </span> của bạn
          <span className="font-weight-bolder"> Thất bại</span>. Kiểm tra lại số
          dư tài khoản thanh toán.{' '}
          <span className="text-primary" style={{textDecoration: 'underline'}}>
            Thử lại
          </span>
        </Media>
      ),
    },
    {
      avatarIcon: <AlertTriangle size={18} />,
      color: 'light-warning',
      subtitle: 'BLR Server using high memory',
      title: (
        <Media tag="div" heading className="text-dark ">
          <span className="font-weight-bolder">High memory</span>&nbsp;usage
        </Media>
      ),
    },
    {
      avatarIcon: <X size={18} />,
      color: 'light-danger',
      subtitle: '12h trước',
      title: (
        <Media tag="div" heading className="text-dark ">
          Thanh toán mua
          <span className="font-weight-bolder"> 99.000 BizXu </span> của bạn
          <span className="font-weight-bolder"> Thất bại</span>. Kiểm tra lại số
          dư tài khoản thanh toán.{' '}
          <span className="text-primary" style={{textDecoration: 'underline'}}>
            Thử lại
          </span>
        </Media>
      ),
    },
    {
      avatarIcon: <Check size={18} />,
      color: 'light-primary',
      subtitle: '9h trước',
      title: (
        <Media tag="div" heading className="text-dark ">
          <span className="font-weight-bolder">Bạn đã mua</span>{' '}
          <span className="font-weight-bolder text-primary">Thành công</span>
          &nbsp;gói <span className="font-weight-bolder">
            242.000 Bizxu
          </span>{' '}
          .Bạn được tặng thêm
          <span className="font-weight-bolder"> 38.000 Bizxu</span>. Mã giao
          dịch là <span className="font-weight-bolder">BT12905</span>{' '}
        </Media>
      ),
    },
  ]

  return (
    <div>
      Thông báo hoạt động giao dịch BizXu đang cập nhật
      {/* <Row className="mt-1">
        <Col lg="7" className="m-auto">
          <CardBody className="shadow round">
            <div className="media-list">
              <Media className="d-flex align-items-start">
                <Media body>
                  <h4>Lịch sử mua BizXu</h4>
                </Media>
              </Media>
              {notificationsArray.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="d-flex"
                    to="#"
                    onClick={e => e.preventDefault()}
                  >
                    <Media className="d-flex align-items-start pt-0">
                      <Media left>
                        <Avatar
                          {...(item.avatarContent
                            ? {
                                content: item.avatarContent,
                                color: item.color,
                              }
                            : item.avatarIcon
                            ? {
                                icon: item.avatarIcon,
                                color: item.color,
                              }
                            : null)}
                        />
                      </Media>
                      <Media body>
                        {item.title}
                        <small
                          className="notification-text d-flex align-items-center"
                          style={{marginTop: '5px'}}
                        >
                          <Clock size="14" style={{marginRight: '5px'}} />
                          {item.subtitle}
                        </small>
                      </Media>
                    </Media>
                  </Link>
                )
              })}
            </div>

            <div
              className="text-primary text-center cursor-pointer"
              style={{textDecoration: 'underline'}}
            >
              Xem thêm
            </div>
          </CardBody>
        </Col>
      </Row> */}
    </div>
  )
}

export default NotifyBizXuPage
