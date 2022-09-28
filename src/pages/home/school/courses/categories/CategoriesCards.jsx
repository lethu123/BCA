// ** React Imports
import {Link, useHistory, useParams} from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import {Star, Heart, AlertCircle, List} from 'react-feather'
import {Card, CardBody, CardText, Button, Alert, Badge} from 'reactstrap'
import parse from 'html-react-parser'
import ReactPaginate from 'react-paginate'
import Rating from 'react-rating'
import Spinner from '@core/components/spinner/Fallback-spinner'
//scss
import './Categories.style.scss'
import banner from 'assets/images/banner/banner-9.jpg'

//redux
import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'
// import {
//   getListCourseCategoryFilterCenterAction,
//   postFavoriteCourseCenterAction,
// } from 'redux/actions/hschools/courseCenterAction'
import {useState} from 'react'
import {useRTL} from 'utility/hooks/useRTL'

//createSelect
// const listCourses = createSelector(
//   state => state.hSchoolRebuild.center,
//   category => category.listCourseCategoryFilter,
// )

// const numPages = createSelector(
//   state => state.hSchoolRebuild.center,
//   category => category.numPage,
// )

// const loadings = createSelector(
//   state => state.async,
//   load => load.loading,
// )

const CategoriesCards = ({activeView, typeFilter}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {id} = useParams()
  const [isRtl, setIsRtl] = useRTL()

  //useState
  const [activePage, setActivePage] = useState(0)

  //useSelect
  // const listCourse = useSelector(listCourses)
  // const numPage = useSelector(numPages)
  // const loading = useSelector(loadings)

  //function
  const handlePagination = page => {
    setActivePage(page.selected)
    // dispatch(
    //   getListCourseCategoryFilterCenterAction(
    //     page.selected + 1,
    //     9,
    //     id,
    //     typeFilter,
    //   ),
    // )
  }
  // ** Renders products
  // const renderProducts = () =>
  //   listCourse && listCourse.length > 0 ? (
  //     listCourse.map(item => (
  //       <Card className="ecommerce-card w-100 categoryCard" key={item.id}>
  //         <div className="item-img text-center mx-auto">
  //           <div>
  //             <img
  //               className="img-fluid card-img-top"
  //               src={item.picture ?? banner}
  //               alt={item.title ?? 'updating'}
  //               style={{position: 'relative'}}
  //             />
  //             {item.sub_category_name && (
  //               <Badge
  //                 color="warning"
  //                 className="badge-glow"
  //                 style={{
  //                   position: 'absolute',
  //                   top: '7%',
  //                   left: '3%',
  //                   maxWidth: '150px',
  //                   overflow: 'hidden',
  //                   textOverflow: 'ellipsis',
  //                   whiteSpace: 'nowrap',
  //                 }}
  //               >
  //                 {item.sub_category_name}
  //               </Badge>
  //             )}
  //           </div>
  //         </div>
  //         <CardBody className={activeView === 'grid' && 'pt-0'}>
  //           <div className="item-wrapper">
  //             <div className="item-rating">
  //               <ul className="unstyled-list list-inline">
  //                 <li className="ratings-list-item mr-25">
  //                   <Rating
  //                     emptySymbol={
  //                       <Star size={20} fill="#babfc7" stroke="#babfc7" />
  //                     }
  //                     fullSymbol={
  //                       <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
  //                     }
  //                     fractions={2}
  //                     initialRating={item.rating}
  //                     direction={isRtl ? 'rtl' : 'ltr'}
  //                     readonly
  //                   />
  //                   {/* <Star
  //                         className={classnames({
  //                           'filled-star': index + 1 <= item.rating,
  //                           'unfilled-star': index + 1 > item.rating,
  //                         })}
  //                       /> */}
  //                 </li>
  //                 <span className="course-one__count">{item.rating}</span>

  //                 <span className="course-one__stars-count">
  //                   {`( ${item.c_rating} )`}
  //                 </span>
  //               </ul>
  //             </div>
  //             <div className="item-cost">
  //               <h6 className="item-price">${item.price ?? ''}</h6>
  //             </div>
  //           </div>
  //           <h6 className="item-name">
  //             <Link
  //               className="text-body"
  //               to={`/hschool/courses/detail/${item.slug}`}
  //             >
  //               {item.title ?? 'updating'}
  //             </Link>
  //           </h6>
  //           <CardText className="item-description">
  //             {parse(item.about ?? 'updating')}
  //           </CardText>
  //           <div className="course-one__meta mt-0 pt-50" style={{order: '4'}}>
  //             <div>
  //               <i className="far fa-clock"></i>
  //               {Math.round(item.c_hours * 1) / 1} Hours
  //             </div>
  //             <div>
  //               <i className="far fa-folder-open"></i> {item.c_lesson} Lessons
  //             </div>
  //           </div>
  //         </CardBody>
  //         <div className="item-options text-center mt-1">
  //           <Button
  //             className="btn-wishlist"
  //             color="light"
  //             onClick={
  //               () => {}
  //               // dispatch(postFavoriteCourseCenterAction({course_id: item.id}))
  //             }
  //           >
  //             <Heart
  //               className={classnames('mr-50', {
  //                 'text-danger': item.is_favorite,
  //               })}
  //               size={14}
  //             />
  //             <span>Save</span>
  //           </Button>
  //           <Button
  //             color="danger"
  //             className="btn-cart move-cart"
  //             onClick={() =>
  //               history.push(`/hschool/courses/detail/${item.slug}`)
  //             }
  //           >
  //             <List className="mr-50" size={14} />
  //             <span>See Preview</span>
  //           </Button>
  //         </div>
  //       </Card>
  //     ))
  //   ) : (
  //     <Alert color="danger" className="w-100">
  //       <div className="alert-body">
  //         <AlertCircle size={15} /> <span className="ml-1">No Course !</span>
  //       </div>
  //     </Alert>
  //   )

  // if (loading) return <Spinner />
  return (
    <div>
      <div
        className={classnames({
          'grid-view': activeView === 'grid',
          'list-view': activeView === 'list',
        })}
      >
        {/* {renderProducts()} */}
      </div>
      {/* {listCourse.length > 0 && (
        <ReactPaginate
          previousLabel=""
          nextLabel=""
          forcePage={activePage}
          onPageChange={page => handlePagination(page)}
          pageCount={numPage || 1}
          breakLabel="..."
          marginPagesDisplayed={2}
          activeClassName="active"
          pageClassName="page-item"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          nextClassName="page-item next"
          previousClassName="page-item prev"
          previousLinkClassName="page-link"
          pageLinkClassName="page-link"
          containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center pr-1 mt-2"
        />
      )} */}
    </div>
  )
}

export default CategoriesCards
