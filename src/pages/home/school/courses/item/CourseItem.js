import {Star} from 'react-feather'
import {Link} from 'react-router-dom'
const CourseItem = ({
  product,
  handleAddWishList,
  inWishlist,
  handleWishlist,
}) => {
  return (
    <div>
      <div className=" ecommerce-card card">
        <div className="course-one__single mb-0">
          <div className="course-one__image">
            <img src={product.picture} alt="" />
            {!inWishlist.includes(product.id) ? (
              <i
                className="far fa-heart cursor-pointer"
                onClick={() => {
                  handleWishlist(product.id)
                  handleAddWishList(product)
                }}
              ></i>
            ) : (
              <i
                className="fas fa-heart cursor-pointer text-primary"
                onClick={() => {
                  handleWishlist(product.id)
                  handleAddWishList(product)
                }}
              ></i>
            )}
          </div>
          <div
            className="course-one__content border-0 px-2"
            // style={{minHeight: '410px'}}
          >
            <a href="#none" className="course-one__category">
              {product.category}
            </a>

            <div className="course-one__admin">
              <img src={product.creator.picture} alt="" />
              by{' '}
              <Link to={`/hschool/instructor/${product.creator.id}/detail`}>
                {product.creator.username}
              </Link>
            </div>

            <h4 className="course-one__title">
              <Link to={`/hschool/courses/detail/${product.slug}`}>
                {product.title.length > 60
                  ? `${product.title.slice(0, 60)}...`
                  : product.title}
              </Link>
            </h4>
            <div className="course-one__stars">
              <span className="course-one__stars-wrap">
                {[...Array(parseInt(product.rating))].map((_, idx) => (
                  <Star size={18} className="filled-star mr-25" key={idx} />
                ))}
                {[...Array(5 - parseInt(product.rating))].map((_, idx) => (
                  <Star size={18} className="unfilled-star mr-25" key={idx} />
                ))}
              </span>
              <span className="course-one__count">{product.rating}</span>
              <span className="course-one__stars-count">
                {product.c_rating}
              </span>
            </div>
            <div className="course-one__meta">
              <Link to={`/hschool/courses/detail/${product.slug}`}>
                <i className="far fa-clock"></i> {product.time} Hours
              </Link>
              <Link to={`/hschool/courses/detail/${product.slug}`}>
                <i className="far fa-folder-open"></i> 6 Lectures
              </Link>
              <Link to={`/hschool/courses/detail/${product.slug}`}>$18</Link>
            </div>
            <Link
              to={`/hschool/courses/detail/${product.slug}`}
              className="course-one__link"
            >
              See Preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
