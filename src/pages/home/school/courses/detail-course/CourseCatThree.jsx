import React from 'react'
import circleStripe from 'static/images/circle-stripe.png'
import category1 from 'static/images/course-category-1-1.png'
import category2 from 'static/images/course-category-1-2.png'
import category3 from 'static/images/course-category-1-3.png'
import category4 from 'static/images/course-category-1-4.png'
import {Link} from 'react-router-dom'
const CourseCatThree = () => {
  return (
    <section className="course-category-three">
      <img
        src={circleStripe}
        className="course-category-three__circle"
        alt=""
      />
      <div className="container">
        <div className="block-title">
          <h2 className="block-title__title">
            Browse online <br />
            course categories
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src={category1} alt="" />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="#none">IT & Software </a>
                </h3>
                <p className="course-category-three__text">Over 752 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src={category2} alt="" />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="#none">Development </a>
                </h3>
                <p className="course-category-three__text">Over 752 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src={category3} alt="" />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="#none">Photography</a>
                </h3>
                <p className="course-category-three__text">Over 752 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src={category4} alt="" />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="#none">Marketing</a>
                </h3>
                <p className="course-category-three__text">Over 752 Courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/hschool/course/categories"
            className="thm-btn course-category-three__more-link"
          >
            <span>View All Categories</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CourseCatThree
