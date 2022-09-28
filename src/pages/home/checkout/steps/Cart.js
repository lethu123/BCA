// ** React Imports
import {Link} from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import {X, Heart, Star} from 'react-feather'
import {
  Card,
  CardBody,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
} from 'reactstrap'

// ** Custom Components
import Avatar from '@core/components/avatar'
import InstructorCard from '../InstructorCard'

const Cart = props => {
  // ** Props
  const {
    products,
    stepper,
    deleteCartItem,
    dispatch,
    toggleWishlist,
    handleRemoveInstructor,
    setSelectCourse,
    setOpenModal,
    inWishlist,
    handleWishlist,
    total,
  } = props

  // ** Render cart items
  const renderCart = () => {
    return products.map(item => {
      return (
        <Card key={item.name} className="ecommerce-card">
          <div className="item-img">
            <Link to={`/hschool/courses/detail/${item.slug}`}>
              <img className="img-fluid" src={item.picture} alt={item.title} />
            </Link>
          </div>
          <CardBody>
            <div className="item-name">
              <h6 className="mb-0">
                <Link to={`/hschool/courses/detail/${item.slug}`}>
                  {item.title}
                </Link>
              </h6>
              <span className="item-company">
                By
                <Link
                  className="ml-25"
                  to={`/user/${item.creator.url}/profile`}
                  onClick={e => e.preventDefault()}
                >
                  <Avatar img={item.creator.picture} size="sm" />
                  {item.creator.username}
                </Link>
              </span>
              <div className="text-success mb-1">{item.category}</div>
              <div className="item-rating">
                <ul className="unstyled-list list-inline">
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className="ratings-list-item mr-25">
                        <Star
                          className={classnames({
                            'filled-star': index + 1 <= item.rating,
                            'unfilled-star': index + 1 > item.rating,
                          })}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="item-quantity flex-column">
              <span className="quantity-title mr-50 mb-1 text-primary">
                List Instructors:
              </span>
              <InstructorCard
                instructors={item.instructors}
                handleRemoveInstructor={instructors =>
                  handleRemoveInstructor(instructors, item)
                }
              />
              <Button.Ripple
                className="mr-1 mb-1 bg-gradient-success"
                color="none"
                size="sm"
                onClick={() => {
                  setSelectCourse(item)
                  setOpenModal(true)
                }}
              >
                Suggestion Instructor
              </Button.Ripple>
            </div>
          </CardBody>
          <div className="item-options text-center">
            <div className="item-wrapper">
              <div className="item-cost">
                <h4 className="item-price">${item.price}</h4>
              </div>
            </div>
            <Button
              className="mt-1 remove-wishlist"
              color="light"
              onClick={() => dispatch(deleteCartItem(item))}
            >
              <X size={14} className="mr-25" />
              <span>Remove</span>
            </Button>
            <Button
              className="btn-cart"
              color="primary"
              onClick={() => {
                dispatch(toggleWishlist(item))
                handleWishlist(item.id)
              }}
            >
              <Heart
                size={15}
                fill={inWishlist.includes(item.id) ? '#ffffff' : 'transparent'}
                stroke={inWishlist.includes(item.id) ? '#EA5455' : '#ffffff'}
              />
              <span className="text-truncate">Wishlist</span>
            </Button>
          </div>
        </Card>
      )
    })
  }

  return (
    <div className="list-view product-checkout">
      <div className="checkout-items">
        {products?.length ? renderCart() : <h4>Your cart is empty</h4>}
      </div>
      {products?.length ? (
        <div className="checkout-options">
          <Card>
            <CardBody>
              <label className="section-label mb-1">Options</label>
              <InputGroup className="input-group-merge coupons">
                <Input placeholder="Coupons" />
                <InputGroupAddon addonType="append">
                  <InputGroupText className="text-primary">
                    Apply
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <hr />
              <div className="price-details">
                <ul className="list-unstyled">
                  <li className="price-detail">
                    <div className="detail-title detail-total">Total</div>
                    <div className="detail-amt font-weight-bolder">
                      ${total}
                    </div>
                  </li>
                </ul>
                <Button.Ripple
                  color="primary"
                  classnames="btn-next place-order"
                  block
                  disabled={!products.length}
                  onClick={() => stepper.next()}
                >
                  Payout
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Cart
