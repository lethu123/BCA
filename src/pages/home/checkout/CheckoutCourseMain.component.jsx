import React, {useEffect, useState} from 'react'
import {ToastContainer} from 'react-toastify'
import {
  Card,
  CardBody,
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
// import {AvInput, AvGroup, AvFeedback} from 'availity-reactstrap-validation'
import {Star, X, Heart, ShoppingCart, CreditCard, File} from 'react-feather'
// import {mobileStyle} from 'theme/views/forms/form-elements/number-input/InputStyles'
import Breadcrumbs from 'components/breadCrumb/BreadCrumb'

import Wizard from 'theme/components/@vuexy/wizard/WizardComponent'

import 'theme/assets/scss/pages/app-ecommerce-shop.scss'
import 'react-toastify/dist/ReactToastify.css'
import 'theme/assets/scss/plugins/extensions/toastr.scss'
import {useDispatch, useSelector} from 'react-redux'
import {createSelector} from 'reselect'
import {history} from 'theme/history'
import {
  toggleWishlistAction,
  handleAddCourseToCartAction,
  getListInstructorsAction,
  handleAddInstructorToCourseAction,
} from 'theme/redux/actions/hschools/courseAction'

import InstructorCard from './InstructorCard'
import InstructorTable from './InstructorTable'
import CreditCardCheckout from './CreditCardCheckout'
import InvoiceCheckout from './InvoiceCheckout'

const selectCart = createSelector(
  state => state.courseReducer,
  course => course.carts,
)

const selectWishList = createSelector(
  state => state.courseReducer,
  course => course.wishlists,
)

const selectInstructorList = createSelector(
  state => state.courseReducer,
  course => course.listInstructors,
)

function Checkout() {
  const dispatch = useDispatch()
  const carts = useSelector(selectCart)
  const wishlists = useSelector(selectWishList)
  const instructorLists = useSelector(selectInstructorList)

  const [openModal, setOpenModal] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [inWishlist, setInWishList] = useState(wishlists.map(ele => ele.id))
  const [selectInstructor, setSelectInstructor] = useState([])
  const [selectCourse, setSelectCourse] = useState(null)

  const handleWishlist = i => {
    let wishlistArr = inWishlist
    if (!wishlistArr.includes(i)) wishlistArr.push(i)
    else wishlistArr.splice(wishlistArr.indexOf(i), 1)
    setInWishList(wishlistArr)
  }
  useEffect(() => {
    dispatch(getListInstructorsAction(''))
  }, [dispatch])

  const handleSetdataInstructor = instructors => {
    let arrId = []
    if (selectCourse && selectCourse.instructors.length > 0) {
      selectCourse.instructors.forEach(ele => arrId.push(ele.id))
      instructors = instructors.filter(ele => !arrId.includes(ele.id))
    }
    return instructors.map(ele => ({
      ...ele,
      status: ele.skills.length > 0 ? 'active' : 'inactive',
    }))
  }

  const handleRemoveInstructor = (instructors, item) =>
    dispatch(handleAddInstructorToCourseAction(instructors, item, 'delete'))

  let total = 0
  if (carts.length > 0) {
    carts.forEach(ele => {
      total += parseFloat(ele.price)
    })
  }

  const steps = [
    {
      title: <ShoppingCart size={22} />,
      content: (
        <div className="list-view product-checkout">
          <div className="checkout-items">
            {carts.length > 0 ? (
              carts.map((item, i) => (
                <Card className="ecommerce-card" key={i}>
                  <div className="card-content">
                    <div className="item-img text-center">
                      <img src={item.picture} alt="Product" />
                    </div>
                    <CardBody>
                      <div className="item-name">
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            history.push(`/hschool/courses/detail/${item.slug}`)
                          }
                        >
                          {item.title}
                        </span>
                        <p className="item-company">
                          <span className="company-name">{item.category}</span>
                        </p>

                        <p className="stock-status-in">{item.level}</p>
                      </div>
                      <h6 className="text-muted">List Instructors: </h6>
                      <InstructorCard
                        instructors={item.instructors}
                        handleRemoveInstructor={instructors =>
                          handleRemoveInstructor(instructors, item)
                        }
                      />
                      <Button.Ripple
                        className="mr-1 mb-1 bg-gradient-success"
                        color="none"
                        onClick={() => {
                          setSelectCourse(item)
                          setOpenModal(true)
                        }}
                      >
                        Invite Instructor
                      </Button.Ripple>
                    </CardBody>
                    <div className="item-options text-center">
                      <div className="item-wrapper">
                        <div className="item-rating">
                          <Badge color="primary" className="badge-md mr-25">
                            <span className="align-middle">{item.rating}</span>{' '}
                            <Star size={15} />
                          </Badge>
                        </div>
                        <div className="item-cost">
                          <h6 className="item-price">{item.price}$</h6>
                        </div>
                      </div>
                      <div
                        className="wishlist"
                        onClick={() => {
                          dispatch(handleAddCourseToCartAction(item))
                        }}
                      >
                        <X size={15} />
                        <span className="align-middle ml-25">Remove</span>
                      </div>
                      <div
                        className="cart"
                        onClick={() => {
                          dispatch(toggleWishlistAction(item))
                          handleWishlist(item.id)
                        }}
                      >
                        <Heart
                          size={15}
                          fill={
                            inWishlist.includes(item.id)
                              ? '#ffffff'
                              : 'transparent'
                          }
                          stroke={
                            inWishlist.includes(item.id) ? '#EA5455' : '#ffffff'
                          }
                        />
                        <span className="align-middle ml-25">Wishlist</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <h2>Cart is Emty</h2>
            )}
          </div>
          {carts.length > 0 && (
            <div className="checkout-options">
              <Card>
                <CardBody>
                  <p className="options-title">Options</p>
                  <div className="coupons">
                    <div className="coupons-title">
                      <p>Coupons</p>
                    </div>
                    <div className="apply-coupon">
                      <p>Apply</p>
                    </div>
                  </div>
                  <hr />
                  <div className="detail">
                    <div className="detail-title detail-total">Total</div>
                    <div className="detail-amt total-amt">${total}</div>
                  </div>
                  <Button.Ripple
                    type="submit"
                    block
                    color="primary"
                    className="btn-block"
                    onClick={() => setActiveStep(1)}
                  >
                    Place Order
                  </Button.Ripple>
                </CardBody>
              </Card>
            </div>
          )}
        </div>
      ),
    },
    {
      title: <CreditCard size={22} />,
      content: (
        <CreditCardCheckout
          setActiveStep={step => setActiveStep(step)}
          total={total}
          countCourse={carts.length}
          title={carts.map(ele => ele.title).join(', ')}
        />
      ),
    },
    {
      title: <File size={22} />,
      content: <InvoiceCheckout carts={carts} />,
    },
  ]

  // const onValidationError = errors => {
  //   toast.error('Please Enter Valid Details', {
  //     position: toast.POSITION.BOTTOM_RIGHT,
  //   })
  // }

  return (
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Checkout"
        breadCrumbParent="hschool"
        toBreadCrumbParent="/hschool/categories"
        breadCrumbActive="Checkout"
      />
      <div className="ecommerce-application">
        <Wizard
          steps={steps}
          activeStep={activeStep}
          pagination={false}
          enableAllSteps
          validate
          tabPaneClass="mt-5"
          // onValidationError={onValidationError()}
        />
        <ToastContainer />
      </div>

      <Modal
        isOpen={openModal}
        toggle={() => setOpenModal(false)}
        className={`modal-dialog-centered modal-xl`}
      >
        <ModalHeader toggle={() => setOpenModal(false)}>
          List Instructors
        </ModalHeader>
        <ModalBody>
          {instructorLists.length > 0 && (
            <InstructorTable
              instructors={handleSetdataInstructor(instructorLists)}
              handleSelectInstructor={data => setSelectInstructor(data)}
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              dispatch(
                handleAddInstructorToCourseAction(
                  selectInstructor,
                  selectCourse,
                ),
              )
              setOpenModal(false)
            }}
            outline
          >
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default Checkout
