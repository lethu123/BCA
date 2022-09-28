import React from 'react'

import img1 from 'assets/images/pages/hschool/1.jpg'
import img2 from 'assets/images/pages/hschool/2.jpg'
import img3 from 'assets/images/pages/hschool/3.jpg'
import img4 from 'assets/images/pages/hschool/4.jpg'

const PopularPosts = () => {
  return (
    <div>
      <h5 className="blog-title">popular courses</h5>
      <div className="sidebar-container">
        <div className="post-container d-flex">
          <div className="w-35 m-r-25">
            <img alt="" className="img-fluid" src={img1} />
            <div className="badge">2020</div>
          </div>
          <div>
            <h5 className="post-head">IT & Software</h5>
            <h6 className="date">nov 22, 2020</h6>
            <div>
              <span className="course-one__stars-wrap">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="post-container d-flex">
          <div className="w-35 m-r-25">
            <img alt="" className="img-fluid" src={img2} />
            <div className="badge badge-red">2020</div>
          </div>
          <div>
            <h5 className="post-head">Development</h5>
            <h6 className="date">nov 22, 2020</h6>
            <div>
              <span className="course-one__stars-wrap">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="far fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="post-container d-flex">
          <div className="w-35 m-r-25">
            <img alt="" className="img-fluid" src={img3} />
            <div className="badge badge-yellow">2020</div>
          </div>
          <div>
            <h5 className="post-head">IT & Software</h5>
            <h6 className="date">nov 22, 2020</h6>
            <div>
              <span className="course-one__stars-wrap">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="post-container d-flex">
          <div className="w-35 m-r-25">
            <img alt="" className="img-fluid" src={img4} />
            <div className="badge badge-blue">2020</div>
          </div>
          <div>
            <h5 className="post-head">Marketing</h5>
            <h6 className="date">nov 22, 2020</h6>
            <div>
              <span className="course-one__stars-wrap">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularPosts
