import React from 'react'
import {Card, CardBody, Col, Row, Media} from 'reactstrap'
import {Swiper, SwiperSlide} from 'swiper/react'

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual,
} from 'swiper'

import {TrendingUp, Box, Clock} from 'react-feather'
import Avatar from '@core/components/avatar'

import img1 from 'assets/images/banner/banner-12.jpg'
import img2 from 'assets/images/banner/banner-9.jpg'
import img3 from 'assets/images/banner/banner-8.jpg'
import img4 from 'assets/images/banner/banner-7.jpg'
import img5 from 'assets/images/banner/banner-20.jpg'

import '@core/scss/react/libs/swiper/swiper.scss'
import '../CourseStartup.style.scss'

const params = {
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
}

SwiperCore.use([
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual,
])

const data = [
  {
    title: 'Bài học hoàn thành ',
    color: 'light-primary',
    icon: <Box size={24} />,
    total: 12,
    complete: 10,
  },
  {
    title: 'Bài tập hoàn thành',
    color: 'light-info',
    icon: <Box size={24} />,
    total: 12,
    complete: 10,
  },
  {
    title: 'Số giờ học trong tuần',
    color: 'light-danger',
    icon: <Clock size={24} />,
    hours: 72,
  },
  {
    title: 'Tỉ lệ số câu trả lời đúng',
    color: 'light-success',
    icon: <TrendingUp size={24} />,
    percentage: 69,
  },
]

const HeaderMainCourseStartup = () => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col lg="12" xl="7" md="12" className="mb-1 swiper-image">
            <Swiper dir="rtl" {...params}>
              <SwiperSlide>
                <img
                  src={img1}
                  alt="swiper 1"
                  className="img-fluid rounded"
                  style={{height: '360px'}}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img2}
                  alt="swiper 2"
                  className="img-fluid rounded"
                  style={{height: '360px'}}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img3}
                  alt="swiper 3"
                  className="img-fluid rounded"
                  style={{height: '360px'}}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img4}
                  alt="swiper 4"
                  className="img-fluid rounded"
                  style={{height: '360px'}}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img5}
                  alt="swiper 5"
                  className="img-fluid rounded"
                  style={{height: '360px'}}
                />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col lg="12" xl="5" className="mb-1">
            <Row>
              {data.map((item, index) => (
                <Col md="6" key={index}>
                  <Card style={{background: '#F2F2F2', boxShadow: 'none'}}>
                    <CardBody>
                      <Media>
                        <Avatar
                          color={item.color}
                          icon={item.icon}
                          className="mr-2"
                        />
                        <Media className="my-auto" body>
                          <h4
                            style={{textTransform: 'uppercase'}}
                            className="  mb-0"
                          >
                            {item.title}
                          </h4>
                        </Media>
                      </Media>
                      <h1 className="pt-3">
                        <span>{item.complete ?? null}</span>
                        <span style={{color: '#8B8B8B'}}>
                          {item.total ? ' / ' + item.total : null}
                        </span>
                        {item.hours ? (
                          <>
                            <span>{item.hours} </span>
                            <span style={{fontSize: '19px'}}>hrs</span>
                          </>
                        ) : null}
                        <span>
                          {item.percentage ? item.percentage + '%' : null}{' '}
                        </span>
                      </h1>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default HeaderMainCourseStartup
