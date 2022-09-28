import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Media,
  Row,
  UncontrolledAlert,
} from 'reactstrap'
import {Gift} from 'react-feather'
import {useState} from 'react'

// ** COMPONENT
import Avatar from '@core/components/avatar'
import FormExtractionDataFB from 'components/form-extraction-data-fb/FormExtractionDataFB'
import ExtractedDataTable from './ExtractedDataTablePage'
import StatisticExtractionPage from './StatisticExtractionPage'
import ModalMining from './ModalMining'

const DataMiningPage = () => {
  const [modalMining, setModalMining] = useState(false)
  return (
    <div>
      <Card>
        <div className="alert alert-custom border-bottom alert-white alert-shadow fade show gutter-b">
          <div className="alert-icon">
            <span className="svg-icon svg-icon-info svg-icon-2x">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                    fill="#000000"
                    fillRule="nonzero"
                    opacity="0.3"
                  />
                  <path
                    d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                    fill="#000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
              {/*end::Svg Icon*/}
            </span>
          </div>
          <h3 className="alert-text   mb-0 text-primary">Lan tỏa cùng SASAM</h3>
        </div>
        <CardBody className="pt-0">
          <StatisticExtractionPage />
          <Row className="pt-5">
            <Col lg="6">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="" style={{fontWeight: '100'}}>
                  Trích xuất Dữ liệu Khách hàng Tiềm năng
                </h3>
                <Button.Ripple
                  color="info"
                  onClick={() => setModalMining(!modalMining)}
                >
                  Thư viện Bài viết Lan tỏa
                </Button.Ripple>
              </div>
              <UncontrolledAlert
                color="warning"
                className="   alert-white alert-shadow mt-5"
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
                      className="mr-2 p-4"
                    />
                    <Media className="my-auto" body>
                      <CardText className="font-small-5 mb-0">Gợi ý</CardText>
                      <h4 className="  mb-0">
                        Thếm đường dẫn cần trích xuấ có nội dung liên quan đến
                        người dùng bảo hiểm để đảm bảo chất lượng Dữ liệu thu
                        được sau trích xuất
                      </h4>
                    </Media>
                  </Media>
                </div>
              </UncontrolledAlert>
              {/* form extraction data from link FB */}
              <FormExtractionDataFB />
            </Col>
            <Col lg="6">
              <div
                style={{
                  borderRadius: '20px',
                  background: '#2980B9',
                  height: '400px',
                  background:
                    '-webkit-linear-gradient(to right,rgb(255, 255, 255), rgb(202 246 251), rgb(176 223 253))' /* Chrome 10-25, Safari 5.1-6 */,
                  background:
                    'linear-gradient(to bottom, rgb(255, 255, 255), rgb(202 246 251), rgb(176 223 253)) ' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                }}
                className="p-5 mt-5 border position-relative"
              >
                <div className="alert alert-custom border-bottom alert-white alert-shadow fade show gutter-b">
                  <div className="alert-icon">
                    <Gift className="text-danger" />
                  </div>
                  <h3 className="alert-text   mb-0 text-danger">
                    Lan tỏa cùng nhận quà
                  </h3>
                </div>
                <h3
                  style={{
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                  }}
                  className="text-info text-center position-absolute"
                >
                  Bạn sẽ được tặng N<span className="text-danger"> $</span> điểm
                  sau 10 ngày từ ngày thêm bài viết
                </h3>
              </div>
            </Col>
          </Row>

          <ExtractedDataTable />
        </CardBody>
      </Card>

      <ModalMining setModalMining={setModalMining} modalMining={modalMining} />
    </div>
  )
}

export default DataMiningPage
