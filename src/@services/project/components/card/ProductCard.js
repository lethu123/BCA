// *** Third Party Components
import {Bookmark} from 'react-feather'
import {
  Card,
  CardBody,
  Button,
  Progress,
  Row,
  Col,
  CardImg,
  CardTitle,
  Badge,
} from 'reactstrap'
// import {Bizxu} from 'components/icon'
const coverDefault =
  'https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2019/07/doanh-nghiep.png'
const ProductCards = ({item, toggleModal, setProject, setIsView}) => {
  if (!item) return null
  return (
    <Card className="plan-card ">
      <CardImg
        top
        src={item.pro_avatar || coverDefault}
        alt="Card cap"
        height="200px"
        onError={e => {
          e.target.onerror = null
          e.target.src = coverDefault
        }}
      />
      <CardBody>
        {/* <div className="d-flex justify-content-end align-items-start mb-1">
          <div
            className="py-1 px-2  text-white"
            style={{background: '#E6641F', borderRadius: '100px'}}
          >
            <Bizxu fill="#ffffff" className="mr-1" /> 240 BizXu / Liên hệ
          </div>
        </div> */}
        <div className="d-flex justify-content-end mb-1">
          <div className="d-flex justify-content-center ">
            {/* <sup className="h5 pricing-currency text-primary mt-1 mb-0">$</sup> */}
            <span className="font-weight-bolder display-4 mb-0 text-primary">
              {item.pro_price_per_data}
            </span>
            <sub className="pricing-duration font-small-4 font-weight-bolder ms-25 mt-auto mb-2">
              BizXu/Liên hệ
            </sub>
          </div>
        </div>
        <CardTitle tag="h2">{item.pro_name}</CardTitle>
        <ul className="pl-1 mb-2">
          <li className="mb-50 " style={{listStyleType: 'disc'}}>
            <span> Loại dự án: </span>
            <Badge color="light-primary">
              {item.pro_project_type_info?.name}
            </Badge>
          </li>
          <li className="mb-50 " style={{listStyleType: 'disc'}}>
            <span> Kiểu dự án: </span>
            <Badge color="light-info">{item.pro_project_kind_info?.name}</Badge>
          </li>
          <li className="mb-50 " style={{listStyleType: 'disc'}}>
            <span> Giá gói: </span>
            <span className="text-primary font-medium-4 font-weight-bolder">
              {' '}
              {item.pro_price_per_data * item.c_data}{' '}
            </span>{' '}
            <span className="font-weight-bolder"> BizXu</span>
            {/* <Bizxu fill="#ffffff" className="mr-1" /> */}
          </li>
          <li className="mb-50" style={{listStyleType: 'disc'}}>
            Số liên hệ: {item.c_data} Liên hệ
          </li>
          {item.partner_name_or_id ? (
            <li className="mb-50" style={{listStyleType: 'disc'}}>
              Đối tác: {item.partner_name_or_id}
            </li>
          ) : (
            <li className="mb-50" style={{listStyleType: 'disc'}}>
              Dự án hệ thống
            </li>
          )}
        </ul>
        <div className="d-flex justify-content-between align-items-center font-weight-bolder mb-50">
          <span>Đã bán</span>
          <span>
            {item.c_data_buyed} trên {item.c_data} Liên hệ
          </span>
        </div>
        <Progress
          color="success"
          className="mb-50"
          value={Math.round((item.c_data_buyed / item.c_data) * 1000) / 10}
        />
        <span>Còn lại {item.c_data - item.c_data_buyed} liên hệ</span>
        <Row className=" mt-1">
          {!item.is_done && (
            <Col md="4">
              <Button
                block
                color="primary"
                onClick={() => {
                  setProject(item)
                  toggleModal()
                }}
                className="mr-1 mb-1"
              >
                Mua ngay
              </Button>
            </Col>
          )}

          <Col md={item.is_done ? 6 : 4}>
            <Button block outline color="secondary" className="mr-1 mb-1">
              <Bookmark size="15" /> Lưu
            </Button>
          </Col>
          <Col md={item.is_done ? 6 : 4}>
            <Button
              onClick={() => {
                setProject(item)
                setIsView(true)
              }}
              block
              outline
              color="success "
              className="mb-1"
            >
              Xem chi tiết
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ProductCards
