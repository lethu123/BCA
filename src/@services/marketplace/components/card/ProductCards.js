// *** React Imports
import {Link} from 'react-router-dom'

// *** Third Party Components
import classnames from 'classnames'
import {ShoppingCart, Heart} from 'react-feather'
import {Card, CardBody, CardText, Button, Badge} from 'reactstrap'
import {Bizxu} from 'components/icon'

const ProductCards = ({item}) => {
  // *** Renders products

  return (
    <div className="grid-view mt-0" style={{gridTemplateColumns: '1fr'}}>
      <Card className="ecommerce-card" key={item.name}>
        <div className="item-img text-center mx-auto">
          <Link to={`#`}>
            <img
              className="img-fluid card-img-top"
              src={item.image}
              alt={item.name}
            />
          </Link>
        </div>
        <CardBody>
          <div className="item-wrapper">
            <div className="item-rating">
              <p className="mb-0">Giá sản phẩm </p>
            </div>
            <div className="item-cost">
              <h6 className="item-price text-primary">
                {item.price} Bizxu <Bizxu color="primary" />
              </h6>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item-rating">
              <p className="mb-0">Nhóm sản phẩm </p>
            </div>
            <div className="item-cost">
              <h6 className="item-price font-weight-normal text-warning">
                Sản phẩm 1
              </h6>
            </div>
          </div>
          <h6 className="item-name">
            <Link className="text-body" to={`#`}>
              {item.name}
            </Link>
            <CardText tag="span" className="item-company">
              By{' '}
              <a
                className="company-name"
                href="/"
                onClick={e => e.preventDefault()}
              >
                {item.brand}
              </a>
            </CardText>
          </h6>
          <CardText className="item-description">{item.description}</CardText>
        </CardBody>
        <div className="item-options text-center">
          <div className="item-wrapper">
            <div className="item-cost">
              <h4 className="item-price">${item.price}</h4>
              {item.hasFreeShipping ? (
                <CardText className="shipping">
                  <Badge color="light-success">Free Shipping</Badge>
                </CardText>
              ) : null}
            </div>
          </div>
          <Button
            className="btn-wishlist"
            color="light"
            // onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
          >
            <Heart
              className={classnames('mr-50', {
                'text-danger': item.isInWishlist,
              })}
              size={14}
            />
            <span>Wishlist</span>
          </Button>
          <Button.Ripple
            color="primary"
            // tag={CartBtnTag}
            className="btn-cart move-cart"
            // onClick={() => handleCartBtn(item.id, item.isInCart)}
            /*eslint-disable */
            {...(item.isInCart
              ? {
                  to: '#',
                }
              : {})}
            /*eslint-enable */
          >
            <ShoppingCart className="mr-50" size={14} />
            <span className=''>{item.isInCart ? 'View In Cart' : 'Add To Cart'}</span>
          </Button.Ripple>
        </div>
      </Card>
    </div>
  )
}

export default ProductCards
