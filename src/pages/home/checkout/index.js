// ** React Imports
import {Fragment, useEffect, useRef, useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

// ** Custom Components
import Wizard from '@core/components/wizard'
import BreadCrumbs from '@core/components/breadcrumbs'

// ** Steps
import Cart from './steps/Cart'
import CreditCardCheckout from './steps/CreditCard'

import InstructorTable from './InstructorTable'

// ** Third Party Components
import {ShoppingCart, CreditCard} from 'react-feather'

// ** Store & Actions
import {useDispatch, useSelector} from 'react-redux'
// import {
//   handleAddInstructorToCourseAction,
//   getListInstructorsAction,
//   handleAddCourseToCartAction,
//   toggleWishlistAction,
// } from 'redux/actions/hschools/courseAction'

// ** Styles
import '@core/scss/base/pages/app-ecommerce.scss'
import {createSelector} from 'reselect'

// const selectCart = createSelector(
//   state => state.hSchool,
//   course => course.carts,
// )

// const selectWishList = createSelector(
//   state => state.hSchool,
//   course => course.wishlists,
// )

// const selectInstructorList = createSelector(
//   state => state.hSchool,
//   course => course.listInstructors,
// )

const Checkout = () => {
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)
  const [selectCourse, setSelectCourse] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  // const instructorLists = useSelector(selectInstructorList)
  const [selectInstructor, setSelectInstructor] = useState([])

  // const wishlists = useSelector(selectWishList)
  // const carts = useSelector(selectCart)
  // const [inWishlist, setInWishList] = useState(wishlists.map(ele => ele.id))

  let total = 0
  // if (carts.length > 0) {
  //   carts.forEach(ele => {
  //     total += parseFloat(ele.price)
  //   })
  // }

  // ** Store Vars
  const dispatch = useDispatch()

  // const handleRemoveInstructor = (instructors, item) =>
  //   dispatch(handleAddInstructorToCourseAction(instructors, item, 'delete'))

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

  // useEffect(() => {
  //   dispatch(getListInstructorsAction(''))
  // }, [dispatch])

  // const handleWishlist = i => {
  //   let wishlistArr = inWishlist
  //   if (!wishlistArr.includes(i)) wishlistArr.push(i)
  //   else wishlistArr.splice(wishlistArr.indexOf(i), 1)
  //   setInWishList(wishlistArr)
  // }

  const steps = [
    {
      id: 'cart',
      title: 'Cart',
      subtitle: 'Your Cart Items',
      icon: <ShoppingCart size={18} />,
      content: (
        <Cart
          stepper={stepper}
          dispatch={dispatch}
          // products={carts}
          // deleteCartItem={item => handleAddCourseToCartAction(item)}
          // toggleWishlist={item => toggleWishlistAction(item)}
          // handleRemoveInstructor={handleRemoveInstructor}
          setSelectCourse={setSelectCourse}
          setOpenModal={setOpenModal}
          // wishlists={wishlists}
          // handleWishlist={handleWishlist}
          // inWishlist={inWishlist}
          total={total}
        />
      ),
    },
    {
      id: 'Payment',
      title: 'Payment',
      subtitle: 'Enter Your Credit Card',
      icon: <CreditCard size={18} />,
      // content:
      //   carts.length > 0 ? (
      //     <CreditCardCheckout
      //       stepper={stepper}
      //       total={total}
      //       countCourse={carts.length}
      //       title={carts.map(ele => ele.title).join(', ')}
      //     />
      //   ) : (
      //     <div></div>
      //   ),
    },
  ]

  return (
    <Fragment>
      <BreadCrumbs
        breadCrumbTitle="Checkout"
        breadCrumbParentTo="/hschool/course/categories"
        breadCrumbParent="All Course"
        breadCrumbActive="Checkout"
      />
      <Wizard
        ref={ref}
        steps={steps}
        className="checkout-tab-steps"
        instance={el => setStepper(el)}
        options={{
          linear: false,
        }}
      />
      <Modal
        isOpen={openModal}
        toggle={() => setOpenModal(false)}
        className={`modal-dialog-centered modal-xl`}
      >
        <ModalHeader toggle={() => setOpenModal(false)}>
          List Instructors
        </ModalHeader>
        <ModalBody>
          {/* {instructorLists.length > 0 && (
            <InstructorTable
              instructors={handleSetdataInstructor(instructorLists)}
              handleSelectInstructor={data => setSelectInstructor(data)}
            />
          )} */}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              // dispatch(
              //   handleAddInstructorToCourseAction(
              //     selectInstructor,
              //     selectCourse,
              //   ),
              // )
              setOpenModal(false)
            }}
            outline
          >
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default Checkout
