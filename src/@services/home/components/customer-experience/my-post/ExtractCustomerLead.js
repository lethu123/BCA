import {Button, CardText, Col, Media, Row, UncontrolledAlert} from 'reactstrap'
import {useState} from 'react'

// ** COMPONENT
import Avatar from '@core/components/avatar'
import FormExtractionDataFB from 'components/form-extraction-data-fb/FormExtractionDataFB'
import ModalMining from './ModalMining'
// import MiningItem from './MiningItem'
import StaticticMyPost from './StatisticMyPost'
import TableMyPost from './TableMyPost'

// ** assets
import image from 'assets/images/illustration/email.svg'

const ExtractCustomerLead = () => {
  const [modalMining, setModalMining] = useState(false)
  return (
    <div className="mt-1">
      <Row className="align-items-end">
        <Col lg="7">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="" style={{fontWeight: '100'}}>
              Trích xuất Dữ liệu Khách hàng Tiềm năng
            </h3>
            <Button.Ripple
              color="primary"
              onClick={() => setModalMining(!modalMining)}
            >
              Thư viện Bài viết Lan tỏa
            </Button.Ripple>
          </div>
          <UncontrolledAlert
            color="warning"
            className=" alert-white alert-shadow mt-2"
          >
            <div className="alert-body">
              <Media>
                <Avatar
                  color="warning"
                  icon={
                    <span className="svg-icon svg-icon-white svg-icon-3x">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle
                            fill="#000000"
                            opacity="0.3"
                            cx={12}
                            cy={12}
                            r={10}
                          />
                          <path
                            d="M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z M10.591,14.868 L10.591,13.209 L11.851,13.209 C13.447,13.209 14.602,11.991 14.602,10.395 C14.602,8.799 13.447,7.581 11.851,7.581 C10.234,7.581 9.121,8.799 9.121,10.395 L7.336,10.395 C7.336,7.875 9.31,5.922 11.851,5.922 C14.392,5.922 16.387,7.875 16.387,10.395 C16.387,12.915 14.392,14.868 11.851,14.868 L10.591,14.868 Z"
                            fill="#000000"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  }
                  className="mr-2 p-1"
                />
                <Media className="my-auto " body>
                  <CardText className="font-small-5 mb-0">Gợi ý</CardText>
                  <p className="mb-0 text-secondary">
                    Thêm đường dẫn cần trích xuấ có nội dung liên quan đến người
                    dùng bảo hiểm để đảm bảo chất lượng Dữ liệu thu được sau
                    trích xuất
                  </p>
                </Media>
              </Media>
            </div>
          </UncontrolledAlert>
          {/* form extraction data from link FB */}
          <FormExtractionDataFB />
        </Col>
        <Col lg="5">
          <img className="w-100" src={image} alt="" />
          {/* <MiningItem post={data} /> */}
        </Col>
      </Row>
      <StaticticMyPost />
      <TableMyPost />

      <ModalMining setModalMining={setModalMining} modalMining={modalMining} />
    </div>
  )
}

export default ExtractCustomerLead
