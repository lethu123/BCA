import {AlertCircle, Check, TrendingUp} from 'react-feather'
import {Button, CardBody, CardHeader, Col, Row} from 'reactstrap'
import {Bizxu} from 'components/icon'

const DataExtension = () => {
  return (
    <div>
      <Row className="justify-content-center ">
        <Col lg="6">
          <div className="shadow rounded bg-white">
            <CardHeader className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Gói Tự động mua Liên hệ</h4>
              <span className="switch">
                <label>
                  <input type="checkbox" name="select" />
                  <span></span>
                </label>
              </span>
            </CardHeader>
            <CardBody className="">
              <Button.Ripple
                size="sm"
                style={{borderRadius: '1.5rem'}}
                color="primary"
              >
                Tự động nhận Data
              </Button.Ripple>
              <p className="mt-2">
                Nhận Liên hệ tự động từ BCA: Lorem ipsum dolor sit amet, consect
                adipiscing elit. Vivamus eu lacus quis urna consequat fermentum.
              </p>
              <p>Tắt mua Tự động bất kỳ lúc nào</p>
              <p className="text-primary font-weight-bold">
                Quyền lợi khi Đăng ký Nhận liên hệ Tự động:
              </p>
              <ul style={{listStyle: 'none'}}>
                <li>
                  <Check className="text-primary" size="20" />{' '}
                  <span>
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </span>
                </li>
                <li>
                  <Check className="text-primary" size="20" />{' '}
                  <span>
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </span>
                </li>
                <li>
                  <Check className="text-primary" size="20" />{' '}
                  <span>
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </span>
                </li>
              </ul>
            </CardBody>
          </div>
        </Col>
        <Col lg="4">
          <Button.Ripple color="primary" className="text-left">
            <div>Số Bizxu đã mua: </div>
            <h5 className="text-white d-flex">
              <TrendingUp size="18" />
              <span className="align-middle mx-2">400000 Bizxu</span>
              <Bizxu color="white" fill="#ffffff" />
            </h5>
          </Button.Ripple>
          <div className="mt-2">
            <AlertCircle className="text-muted" size="14" />
            <small className="text-muted">
              *Giá Data liên hệ có thể thay đổi tuỳ vào thời điểm
            </small>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DataExtension
