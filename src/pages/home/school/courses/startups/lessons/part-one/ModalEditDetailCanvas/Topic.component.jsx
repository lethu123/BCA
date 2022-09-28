import React from 'react'
import {Card, CardBody, CardHeader, CardTitle} from 'reactstrap'
import {Swiper, SwiperSlide} from 'swiper/react'
import '@core/scss/react/libs/swiper/swiper.scss'

const params = {
  className: 'swiper-centered-slides p-1',
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  navigation: true,
  slideToClickedSlide: true,
}
const Topic = ({listTopic, title}) => {
  const imgDefault =
    'https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress/2019/02/sb-blog-ai.png'
  return (
    <div className="explore">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>
          {listTopic && (
            <Swiper {...params} slideClass="category-course">
              {/* <div
                onClick={() => history.push('/hschool/categories')}
                className="swiper-slide rounded swiper-shadow"
                style={{
                  color: 'white',
                  background: `url(${imgDefault}) no-repeat center`,
                  backgroundSize: 'center',
                  padding: '2rem 4rem',
                  border: 'none',
                  minWidth: '280px',
                }}
              >
                <span className="swiper-text pt-md-1 pt-sm-50 d-block">
                  All categories
                </span>
              </div> */}
              {listTopic.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slide rounded swiper-shadow mr-2"
                  style={{
                    color: 'white',
                    background: `url(${
                      item.img ? item.img : imgDefault
                    }) no-repeat center`,
                    backgroundSize: 'cover',
                    padding: '2rem 4rem',
                    border: 'none',
                    minWidth: '280px',
                  }}
                >
                  <span className="swiper-text pt-md-1 pt-sm-50 d-block">
                    {item.name}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </CardBody>
      </Card>
    </div>
  )
}

export default Topic
