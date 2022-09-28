import React, {useState} from 'react'

import slidestrech from 'static/images/slider-1-scratch.png'
import person1 from 'static/images/slider-1-person-1.png'
const SliderOne = ({handleActiveModal}) => {
  return (
    <div className="banner-wrapper">
      <section
        className="banner-one banner-carousel__one no-dots"
        style={{padding: '0'}}
      >
        <div className="banner-one__slide banner-one__slide-one">
          <div className="container">
            <div className="banner-one__bubble-1"></div>
            <div className="banner-one__bubble-2"></div>
            <div className="banner-one__bubble-3"></div>
            <img src={slidestrech} alt="" className="banner-one__scratch" />
            <img src={person1} className="banner-one__person" alt="" />
            <div className="row no-gutters">
              <div className="col-xl-12">
                <h3 className="banner-one__title banner-one__light-color">
                  We Can <br />
                  Teach You
                </h3>
                <p className="banner-one__tag-line">are you ready to learn?</p>
                <div
                  onClick={handleActiveModal}
                  className="thm-btn banner-one__btn cursor-pointer"
                >
                  <span>Start learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner-one__cta">
        <div className="banner-one__cta-icon">
          <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
        </div>
        <div className="banner-one__cta-title">
          <h3 className="banner-one__cta-text">
            <a href="#none">Read how we encourage our students to learn</a>
          </h3>
        </div>
        <div className="banner-one__cta-link">
          <a href="#none">
            <i className="kipso-icon-right-arrow"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
export default SliderOne
