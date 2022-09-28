import React from 'react'
import {Card, CardBody, CardHeader, Button, CardTitle} from 'reactstrap'
// import Radio from 'theme/components/@vuexy/radio/RadioVuexy'

import {PlusSquare} from 'react-feather'
// import bankLogo from 'theme/assets/img/pages/eCommerce/bank.png'
// import {AvInput} from 'availity-reactstrap-validation'

// import PaypalButton from 'components/payment/PaypalButton'
import {useHistory} from 'react-router'

const CreditCardCheckout = ({setActiveStep, total, countCourse, title}) => {
  const history = useHistory()
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
              {/* <PaypalButton total={total} title={title} /> */}

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
                  Price of {countCourse} items : {title}
                </div>
              </div>

              <hr />
              <div className="detail">
                <div className="details title">Amount Payable</div>
                <div className="my-1 text-center">
                  <strong>${total}</strong>
                </div>
              </div>
              <Button.Ripple
                type="submit"
                block
                color="primary"
                className="btn-block"
                onClick={() => history.push('/hschool/course/invoice/4987')}
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
