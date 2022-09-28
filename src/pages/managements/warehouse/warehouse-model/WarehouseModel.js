import {Card, CardBody, Col, Row} from 'reactstrap'
import {Link} from 'react-router-dom'
//** component */

// ** assets
import '../Custom.style.scss'
import warehouseModel from 'assets/images/warehouse/warehouse-model.png'
import warehouse from 'assets/images/warehouse/warehouse.png'
import dollarSign from 'assets/images/warehouse/dollar-sign.png'
import acUnit from 'assets/images/warehouse/ac-unit.png'
import boxOpen from 'assets/images/warehouse/box-open.png'

const WarehouseModel = () => {
  return (
    <div
      id="warehouse-model "
      className="  d-flex text-wrap flex-column flex-center w-100"
    >
      <div className="   w-75   p-6">
        <div className="border p-10">
          <img alt="" className="w-100" src={warehouseModel} />
        </div>
        <div>
          <Row className="mt-10">
            {/* Stats With Icons */}
            <Col xl="3" md="4" sm="6">
              <Link to="/admin/warehouse">
                <Card className="text-center bg-hover-light">
                  <CardBody className="">
                    <div className="symbol symbol-70  ">
                      <span className="symbol-label bg-white bg-hover-white">
                        <img
                          src={warehouse}
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>

                    <h5 className="font-weight-bolder mt-2">Kho</h5>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col xl="3" md="4" sm="6">
              <Link to="#">
                <Card className="text-center bg-hover-light">
                  <CardBody className="">
                    <div className="symbol symbol-70  ">
                      <span className="symbol-label bg-white bg-hover-white">
                        <img
                          src={boxOpen}
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>

                    <h5 className="font-weight-bolder mt-2">Hàng hóa</h5>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col xl="3" md="4" sm="6">
              <Link to="#">
                <Card className="text-center bg-hover-light">
                  <CardBody className="">
                    <div className="symbol symbol-70  ">
                      <span className="symbol-label bg-white bg-hover-white">
                        <img
                          src={acUnit}
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>

                    <h5 className="font-weight-bolder mt-2">Đơn vị</h5>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col xl="3" md="4" sm="6">
              <Link to="#">
                <Card className="text-center bg-hover-light">
                  <CardBody className="">
                    <div className="symbol symbol-70  ">
                      <span className="symbol-label bg-white bg-hover-white">
                        <img
                          src={dollarSign}
                          className="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>

                    <h5 className="font-weight-bolder mt-2">
                      Cập nhật đơn giá
                    </h5>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            {/* Stats With Icons */}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default WarehouseModel
