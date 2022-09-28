import React from 'react'
import {Card, CardBody, CardHeader, Button, CardTitle} from 'reactstrap'
// import Radio from 'theme/components/@vuexy/radio/RadioVuexy'

import {PlusSquare} from 'react-feather'
// import bankLogo from 'theme/assets/img/pages/eCommerce/bank.png'
// import {AvInput} from 'availity-reactstrap-validation'

import PaypalButton from 'components/payment/PaypalButton'

const CreditCardCheckout = ({setActiveStep, total, countCourse, title}) => {
  return (
    <React.Fragment>
      <div className="list-view product-checkout">
        <div className="payment-type">
          <Card>
            <CardHeader className="flex-column align-items-start">
              <CardTitle>Payment options</CardTitle>
              <p className="text-muted mt-25">
                Be sure to click on correct payment option
              </p>
            </CardHeader>

            <CardBody>
              <PaypalButton total={total} title={title} />
              {/* <div className="d-flex justify-content-between flex-wrap">
                <div className="vx-radio-con vx-radio-primary">
                  <input type="radio" name="bank" />
                  <span className="vx-radio">
                    <span className="vx-radio--border"></span>
                    <span className="vx-radio--circle"></span>
                  </span>
                  <img src={bankLogo} alt="img-placeholder" height="40" />
                  <span>US Unlocked Debit Card 12XX XXXX XXXX 0000</span>
                </div>
                <div className="card-holder-name mt-75">John Doe</div>
                <div className="card-expiration-date mt-75">11/2020</div>
              </div>
              <div className="customer-cvv mt-1">
                <div className="form-inline">
                  <Label for="cvv">Enter CVV:</Label>
                  <AvInput
                    type="number"
                    className="input-cvv ml-75 mb-50"
                    id="cvv"
                    name="cvv"
                    required
                  />
                  <Button color="primary" className="ml-50 mb-50">
                    {' '}
                    Continue{' '}
                  </Button>
                </div>
              </div>
              <hr className="my-2" />
              <ul className="other-payment-options list-unstyled">
                <li className="py-25">
                  <Radio
                    labelCustom="Credit / Debit / ATM Card"
                    color="primary"
                    defaultChecked={false}
                    name="paymentType"
                  />
                </li>
                <li className="py-25">
                  <Radio
                    labelCustom="Net Banking"
                    color="primary"
                    defaultChecked={false}
                    name="paymentType"
                  />
                </li>
                <li className="py-25">
                  <Radio
                    labelCustom="EMI (Easy Installment)"
                    color="primary"
                    defaultChecked={false}
                    name="paymentType"
                  />
                </li>
                <li className="py-25">
                  <Radio
                    labelCustom="Cash On Delivery"
                    color="primary"
                    defaultChecked={false}
                    name="paymentType"
                  />
                </li>
              </ul> */}
              <hr />
              <div className="gift-card">
                <p>
                  <PlusSquare size={22} />
                  <span className="align-middle ml-25">Add Gift Card</span>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="amount-payable checkout-options">
          <Card>
            <CardHeader>
              <CardTitle>Price Details</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="detail">
                <div className="details title">
                  Price of {countCourse} items
                </div>
                <div className="detail-amt">
                  <strong>${total}</strong>
                </div>
              </div>
              <div className="detail">
                <div className="details title">Delivery Charges</div>
                <div className="detail-amt discount-amt">
                  <strong>Free</strong>
                </div>
              </div>
              <hr />
              <div className="detail">
                <div className="details title">Amount Payable</div>
                <div className="detail-amt">
                  <strong>${total}</strong>
                </div>
              </div>
              <Button.Ripple
                type="submit"
                block
                color="primary"
                className="btn-block"
                onClick={() => setActiveStep(1)}
              >
                Invoice
              </Button.Ripple>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreditCardCheckout
