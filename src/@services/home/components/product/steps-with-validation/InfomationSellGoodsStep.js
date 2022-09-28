import {Fragment, useState} from 'react'

import {ArrowLeft, ArrowRight} from 'react-feather'
import {Button, Col, CustomInput, Input, Label, Row} from 'reactstrap'
import Cleave from 'cleave.js/react'

const InfomationSellGoodsStep = ({stepper, type}) => {
  const options = {numeral: true, numeralThousandsGroupStyle: 'thousand'}
  const [price, setPrice] = useState(0)

  return (
    <Fragment>
      <div className="content-header">
        <h5 className="mb-0 text-primary">Thông tin bán hàng</h5>
      </div>
      <Row>
        <Col md="6">
          <div>
            <Label for="name">
              Giá SP <span style={{color: '#EA5455'}}>*</span>
            </Label>

            <Cleave
              className="form-control"
              placeholder="100,000"
              options={options}
              id="numeral-formatting"
              onChange={e => {
                if (e.target.value !== '') {
                  setPrice(e.target.value)
                } else {
                  setPrice(0)
                }
              }}
            />
          </div>
        </Col>
        <Col md="6">
          <Label>Hàng đặt trước</Label>

          <div
            className="d-flex justify-content-around align-items-center w-50"
            style={{marginTop: 10}}
          >
            <CustomInput
              label="Có"
              type="radio"
              id="checked"
              name="customRadio"
              defaultChecked
            />
            <CustomInput
              label="Không"
              type="radio"
              id="unchecked"
              name="customRadio"
            />
          </div>
        </Col>
        <Col md="6">
          <div>
            <Label>Thông tin khác</Label>
            <Input
              name="khac"
              type="textarea"
              rows="4"
              placeholder="Thông tin thêm về bán hàng ..."
            />
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-between mt-20">
        <Button.Ripple color="primary" onClick={() => stepper.previous()}>
          <ArrowLeft size={14} className="align-middle mr-5 " />
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          type="submit"
          color="primary"
          className="btn-next"
          disabled={price === 0}
          onClick={() => stepper.next()}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
          <ArrowRight size={14} className="align-middle ml-5"></ArrowRight>
        </Button.Ripple>
      </div>
    </Fragment>
  )
}

export default InfomationSellGoodsStep
