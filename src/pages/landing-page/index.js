import React, {useEffect} from 'react'
import '../landing-page/LandingPage.style.scss'
import Countdown from 'react-countdown'
import {Swiper, SwiperSlide} from 'swiper/react'
import '@core/scss/react/libs/swiper/swiper.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
const LandingPage = () => {
  useEffect(() => {
    AOS.init({duration: 1500})
    AOS.refresh()
  }, [])
  const renderer = ({days, hours, minutes, seconds, completed}) => {
    // Render a countdown
    return (
      <>
        <div className="ladi-countdown">
          <div
            id="COUNTDOWN_ITEM438"
            className="ladi-element"
            data-item-type="day"
          >
            <div className="ladi-countdown-background" />
            <div className="ladi-countdown-text">
              <span>{days}</span>
            </div>
          </div>
          <div
            id="COUNTDOWN_ITEM439"
            className="ladi-element"
            data-item-type="hour"
          >
            <div className="ladi-countdown-background" />
            <div className="ladi-countdown-text">
              <span>{hours}</span>
            </div>
          </div>
          <div
            id="COUNTDOWN_ITEM440"
            className="ladi-element"
            data-item-type="minute"
          >
            <div className="ladi-countdown-background" />
            <div className="ladi-countdown-text">
              <span>{minutes}</span>
            </div>
          </div>
          <div
            id="COUNTDOWN_ITEM441"
            className="ladi-element"
            data-item-type="seconds"
          >
            <div className="ladi-countdown-background" />
            <div className="ladi-countdown-text">
              <span>{seconds}</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  const params = {
    // className: 'swiper-centered-slides p-1',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    // navigation: true,
    slideToClickedSlide: true,
  }
  return (
    <>
      <div>
        <div className="ladi-wraper">
          <div id="SECTION571" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-overlay" />
            <div className="ladi-container">
              <div id="BUTTON579" className="ladi-element">
                <div className="ladi-button">
                  <div className="ladi-button-background" />
                  <div id="BUTTON_TEXT579" className="ladi-element">
                    <p className="ladi-headline">MỜI BẠN ĐỌC TIẾP BÊN DƯỚI!</p>
                  </div>
                </div>
              </div>
              <div id="PARAGRAPH702" className="ladi-element">
                <p className="ladi-paragraph">
                  Chào bạn!&nbsp;
                  <br />
                  <span style={{color: 'rgb(255, 255, 255)'}}>
                    <span style={{fontWeight: 'bold'}}>
                      Tôi là Nguyễn Văn A - Chuyên viên tư vấn bảo hiểm
                    </span>
                    <br />
                  </span>
                  <span style={{fontStyle: 'italic'}}>
                    Rất vui được trò chuyện với bạn tại đây!
                  </span>
                  <br />
                </p>
              </div>
              <div id="SHAPE704" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 152.09 115.41"
                    className
                    fill="rgba(255, 254, 253, 1)"
                  >
                    <path d="M58.1,0l-.05,9Q38.31,19.22,29.91,30.33a40.08,40.08,0,0,0-8.48,24.45c0,5.12.66,8.68,2.1,10.68s3,3,4.82,3A26.62,26.62,0,0,0,36,66.88a29.07,29.07,0,0,1,9-1.62A22.13,22.13,0,0,1,61.16,72.2,22.51,22.51,0,0,1,67.9,88.74a24.7,24.7,0,0,1-2.23,10.15,24.06,24.06,0,0,1-6.22,8.3,32.69,32.69,0,0,1-9.37,5.61,29.81,29.81,0,0,1-11.35,2.1,31.72,31.72,0,0,1-14.31-3.59A42.77,42.77,0,0,1,12,101.73,47.08,47.08,0,0,1,0,69.66a64.62,64.62,0,0,1,4-22A68.78,68.78,0,0,1,15.26,27.91,81.41,81.41,0,0,1,33.53,11.52,94.2,94.2,0,0,1,58.1,0Z" />
                    <path d="M142,1.18l-.06,8.33A156.52,156.52,0,0,0,123,21.73a59.08,59.08,0,0,0-11.23,11.1A33.66,33.66,0,0,0,106.19,44a49.26,49.26,0,0,0-1.58,12.66q0,6.66,2.44,9.68t5.15,3a23,23,0,0,0,7.51-1.79,27.81,27.81,0,0,1,9.85-1.77,22.5,22.5,0,0,1,15.63,6.6,21.16,21.16,0,0,1,6.9,16.21,23.12,23.12,0,0,1-2.4,10.15,29.75,29.75,0,0,1-6.39,8.63,29.41,29.41,0,0,1-9.37,5.95,30.67,30.67,0,0,1-11.68,2.09A32,32,0,0,1,108.1,112,39.23,39.23,0,0,1,96,102.58a49.65,49.65,0,0,1-8.58-14,45.67,45.67,0,0,1-3.23-17.69,68.52,68.52,0,0,1,4-22.65,67.76,67.76,0,0,1,11.29-20.1A76.75,76.75,0,0,1,117.55,12,90.21,90.21,0,0,1,142,1.18Z" />
                  </svg>
                </div>
              </div>
              <div id="SHAPE705" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 152.09 115.41"
                    className
                    fill="rgba(255, 254, 253, 1)"
                  >
                    <path d="M58.1,0l-.05,9Q38.31,19.22,29.91,30.33a40.08,40.08,0,0,0-8.48,24.45c0,5.12.66,8.68,2.1,10.68s3,3,4.82,3A26.62,26.62,0,0,0,36,66.88a29.07,29.07,0,0,1,9-1.62A22.13,22.13,0,0,1,61.16,72.2,22.51,22.51,0,0,1,67.9,88.74a24.7,24.7,0,0,1-2.23,10.15,24.06,24.06,0,0,1-6.22,8.3,32.69,32.69,0,0,1-9.37,5.61,29.81,29.81,0,0,1-11.35,2.1,31.72,31.72,0,0,1-14.31-3.59A42.77,42.77,0,0,1,12,101.73,47.08,47.08,0,0,1,0,69.66a64.62,64.62,0,0,1,4-22A68.78,68.78,0,0,1,15.26,27.91,81.41,81.41,0,0,1,33.53,11.52,94.2,94.2,0,0,1,58.1,0Z" />
                    <path d="M142,1.18l-.06,8.33A156.52,156.52,0,0,0,123,21.73a59.08,59.08,0,0,0-11.23,11.1A33.66,33.66,0,0,0,106.19,44a49.26,49.26,0,0,0-1.58,12.66q0,6.66,2.44,9.68t5.15,3a23,23,0,0,0,7.51-1.79,27.81,27.81,0,0,1,9.85-1.77,22.5,22.5,0,0,1,15.63,6.6,21.16,21.16,0,0,1,6.9,16.21,23.12,23.12,0,0,1-2.4,10.15,29.75,29.75,0,0,1-6.39,8.63,29.41,29.41,0,0,1-9.37,5.95,30.67,30.67,0,0,1-11.68,2.09A32,32,0,0,1,108.1,112,39.23,39.23,0,0,1,96,102.58a49.65,49.65,0,0,1-8.58-14,45.67,45.67,0,0,1-3.23-17.69,68.52,68.52,0,0,1,4-22.65,67.76,67.76,0,0,1,11.29-20.1A76.75,76.75,0,0,1,117.55,12,90.21,90.21,0,0,1,142,1.18Z" />
                  </svg>
                </div>
              </div>
              <div id="PARAGRAPH707" className="ladi-element">
                <p className="ladi-paragraph">NẾU BẠN ĐANG QUAN TÂM</p>
              </div>
              <div id="LIST_PARAGRAPH708" className="ladi-element">
                <div className="ladi-list-paragraph">
                  <ul>
                    <li>
                      Cách xây dựng hệ thống thu nhập thụ động từ Bảo Hiểm&nbsp;
                    </li>
                    <li>Quan tâm đến mô hình Bảo hiểm công nghệ 4.0</li>
                    <li>Quan tâm tới các sản phẩm Bảo Hiểm&nbsp;&nbsp;</li>
                  </ul>
                </div>
              </div>
              <div id="SHAPE709" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    className
                    fill="rgba(255, 112, 25, 1)"
                  >
                    {' '}
                    <path d="M1472 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H117q-52 0-84.5-37.5T0 1024V896q0-53 32.5-90.5T117 768h704L528 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />{' '}
                  </svg>
                </div>
              </div>
              <div id="IMAGE924" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
            </div>
          </div>
          <div id="SECTION265" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="GROUP266" className="ladi-element ladi-animation">
                <div className="ladi-group">
                  <div id="IMAGE267" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE268" className="ladi-element">
                    <h3 className="ladi-headline">
                      LỜI TRÍCH DẪN HAY TRONG CÂU CHUYỆN
                    </h3>
                  </div>
                  <div id="HEADLINE269" className="ladi-element">
                    <h3 className="ladi-headline">
                      Tôi là ai! và Tôi đã làm được gì?
                    </h3>
                  </div>
                  <div id="PARAGRAPH270" className="ladi-element">
                    <p className="ladi-paragraph">
                      “Mãi sau này mình mới nghiệm ra: Tiền là thứ vô hạn, mình
                      có thể kiếm được nhiều, thậm chí rất nhiều tiền. Nhưng
                      tuổi thơ của con thì chỉ hữu hạn, thời gian bên con rất
                      ngắn. Thế nhưng ngày đó mình đã đánh đổi thứ hữu hạn để
                      lấy thứ vô hạn”&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <div id="GROUP271" className="ladi-element">
                <div className="ladi-group">
                  <div id="BOX272" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                  <div id="VIDEO273" className="ladi-element">
                    <div className="ladi-video">
                      <div className="ladi-video-background" />
                      <iframe
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          top: 0,
                          left: 0,
                        }}
                        src="https://www.youtube.com/embed/gKrH3ezZRwg"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div id="HEADLINE275" className="ladi-element">
                    <h3 className="ladi-headline">
                      <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                        Xem qua câu chuyện của tôi!
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div data-action="true" id="GROUP276" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE277" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE278" className="ladi-element">
                    <h3 className="ladi-headline">Tìm hiểu tiếp...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="SECTION713" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="HEADLINE714" className="ladi-element">
                <h3 className="ladi-headline">
                  <span style={{fontWeight: 'bold'}}>NHỮNG KẾT QUẢ</span>
                </h3>
              </div>
              <div id="HEADLINE715" className="ladi-element">
                <h3 className="ladi-headline">
                  <span style={{fontWeight: 'bold'}}>TÔI ĐÃ ĐẠT ĐƯỢC</span>
                </h3>
              </div>
              <div id="LIST_PARAGRAPH716" className="ladi-element">
                <div className="ladi-list-paragraph">
                  <ul>
                    <li className>
                      Mang lại doanh số hơn XX Tỷ Trong Gần 3 năm làm việc tại
                      B-Alpha Insurance
                    </li>
                    <li className>
                      Xây dựng đội nhóm hơn YY đại lí &amp; tư vấn viên trên
                      khắp toàn quốc và hơn ZZ khách hàng được bảo vệ
                    </li>
                    <li className>
                      Tổ chức hơn AA chương trình huấn luyện về đào tạo cho hơn
                      BB học viên, tư vấn viên bảo hiểm
                    </li>
                  </ul>
                </div>
              </div>
              <div id="GROUP717" className="ladi-element">
                <div className="ladi-group">
                  <div id="BOX718" className="ladi-element overflow-hidden">
                    <div className="ladi-box" />
                    <div className="swipper-custom-landingpage">
                      <Swiper {...params} slideClass="category-course">
                        <SwiperSlide>
                          <img src="https://w.ladicdn.com/s850x650/58cba6a02f8cbf8e6fd9e3a6/hinh-03-20211012140111.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://w.ladicdn.com/s850x650/58cba6a02f8cbf8e6fd9e3a6/hinh-03-20211012140111.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://w.ladicdn.com/s850x650/58cba6a02f8cbf8e6fd9e3a6/hinh-03-20211012140111.jpg" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              <div id="IMAGE720" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
            </div>
          </div>
          <div id="SECTION319" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="GROUP672" className="ladi-element">
                <div className="ladi-group">
                  <div id="GROUP320" className="ladi-element">
                    <div className="ladi-group">
                      <div id="GROUP321" className="ladi-element">
                        <div className="ladi-group">
                          <div id="SHAPE322" className="ladi-element">
                            <div className="ladi-shape">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 105.42 105.42"
                                fill="rgba(5, 31, 78, 0.2)"
                              >
                                <polygon points="52.6 95.5 9.92 95.5 9.92 9.92 95.5 9.92 95.5 52.25 105.42 52.25 105.42 0 0 0 0 105.42 52.6 105.42 52.6 95.5" />
                              </svg>
                            </div>
                          </div>
                          <div id="SHAPE323" className="ladi-element">
                            <div className="ladi-shape">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 144.083 144"
                                enableBackground="new 0 0 144.083 144"
                                xmlSpace="preserve"
                                preserveAspectRatio="none"
                                width="100%"
                                height="100%"
                                className
                                fill="rgba(0, 171, 169, 1)"
                              >
                                <path d="M72.041,14.165c-31.94,0-57.833,25.894-57.833,57.834c0,31.939,25.893,57.836,57.833,57.836s57.835-25.896,57.835-57.836  C129.875,40.059,103.981,14.165,72.041,14.165z M105.069,79.256c-2.605,16.552-16.941,28.401-33.197,28.401  c-1.73,0-3.481-0.135-5.243-0.411C48.316,104.36,35.76,87.114,38.64,68.803c1.396-8.872,6.163-16.67,13.423-21.956  c6.25-4.55,13.702-6.764,21.316-6.403l-5.601-5.334l3.671-3.852l8.594,8.189l0.002-0.001l3.844,3.668l-3.668,3.852l-0.002-0.003  l-8.188,8.596l-3.848-3.671l5.188-5.441c-6.345-0.36-12.571,1.461-17.777,5.251c-5.965,4.343-9.881,10.749-11.028,18.038  c-2.365,15.044,7.951,29.213,22.996,31.583c15.044,2.364,29.212-7.949,31.579-22.995c1.563-9.932-2.4-19.941-10.346-26.122  l3.686-4.735C102.147,54.987,106.971,67.168,105.069,79.256z M60.897,81.809L60.7,81.348l4.944-2.096l0.195,0.462  c0.786,1.866,3.504,3.273,6.321,3.273c1.266,0,5.396-0.231,5.396-3.215c0-1.563-1.766-2.499-5.558-2.946  c-4.255-0.477-10.087-1.129-10.087-7.552c0-3.938,2.946-6.691,7.907-7.424v-3.027h5.329v3.04c2.303,0.405,5.342,1.408,7.037,4.875  l0.225,0.459l-4.551,2.105l-0.23-0.383c-0.797-1.316-3.141-2.349-5.334-2.349c-1.479,0-4.918,0.264-4.918,2.703  c0,1.753,2.216,2.157,5.114,2.504c4.531,0.558,10.734,1.322,10.734,7.994c0,4.91-3.982,7.495-8.076,7.953v3.452H69.82v-3.286  C65.521,87.384,62.361,85.235,60.897,81.809z" />
                              </svg>
                            </div>
                          </div>
                          <div id="HEADLINE324" className="ladi-element">
                            <h3 className="ladi-headline">02</h3>
                          </div>
                        </div>
                      </div>
                      <div id="HEADLINE325" className="ladi-element">
                        <h3 className="ladi-headline">Sản phẩm đa dạng</h3>
                      </div>
                      <div id="PARAGRAPH326" className="ladi-element">
                        <p className="ladi-paragraph">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam leo leo, tincidunt ac lectus vel,
                          tincidunt scelerisque sapien
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="GROUP327" className="ladi-element">
                    <div className="ladi-group">
                      <div id="GROUP328" className="ladi-element">
                        <div className="ladi-group">
                          <div id="SHAPE329" className="ladi-element">
                            <div className="ladi-shape">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 105.42 105.42"
                                fill="rgba(5, 31, 78, 0.2)"
                              >
                                <polygon points="52.6 95.5 9.92 95.5 9.92 9.92 95.5 9.92 95.5 52.25 105.42 52.25 105.42 0 0 0 0 105.42 52.6 105.42 52.6 95.5" />
                              </svg>
                            </div>
                          </div>
                          <div id="SHAPE330" className="ladi-element">
                            <div className="ladi-shape">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 100 100"
                                x="0px"
                                y="0px"
                                preserveAspectRatio="none"
                                width="100%"
                                height="100%"
                                className
                                fill="rgba(0, 171, 169, 1)"
                              >
                                <title>Artboard 43</title>
                                <path d="M70,37.31H30.92a3,3,0,0,0-3,3v8.85H64v2H27.92v5.32h6v2h-6v1.6a3,3,0,0,0,3,3H70a3,3,0,0,0,3-3v-1.6H49.65v-2H73V40.31A3,3,0,0,0,70,37.31ZM46.82,58.48H38.29v-2h8.53Z" />
                                <path d="M50.48,14.19A36,36,0,1,0,75.94,24.74,35.76,35.76,0,0,0,50.48,14.19ZM75,60.08a5,5,0,0,1-5,5H30.92a5,5,0,0,1-5-5V40.31a5,5,0,0,1,5-5H70a5,5,0,0,1,5,5Z" />
                              </svg>
                            </div>
                          </div>
                          <div id="HEADLINE331" className="ladi-element">
                            <h3 className="ladi-headline">03</h3>
                          </div>
                        </div>
                      </div>
                      <div id="HEADLINE332" className="ladi-element">
                        <h3 className="ladi-headline">Văn hoá hệ thống</h3>
                      </div>
                      <div id="PARAGRAPH333" className="ladi-element">
                        <p className="ladi-paragraph">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam leo leo, tincidunt ac lectus vel,
                          tincidunt scelerisque sapien
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="GROUP334" className="ladi-element">
                    <div className="ladi-group">
                      <div id="GROUP335" className="ladi-element">
                        <div className="ladi-group">
                          <div id="SHAPE336" className="ladi-element">
                            <div className="ladi-shape">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 105.42 105.42"
                                fill="rgba(5, 31, 78, 0.2)"
                              >
                                <polygon points="52.6 95.5 9.92 95.5 9.92 9.92 95.5 9.92 95.5 52.25 105.42 52.25 105.42 0 0 0 0 105.42 52.6 105.42 52.6 95.5" />
                              </svg>
                            </div>
                          </div>
                          <div id="SHAPE337" className="ladi-element">
                            <div className="ladi-shape">
                              {/* <svg
                                xmlns:dc="http://purl.org/dc/elements/1.1/"
                                xmlns:cc="http://creativecommons.org/ns#"
                                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                                xmlns:svg="http://www.w3.org/2000/svg"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                                viewBox="0 0 48 48.000001"
                                version="1.1"
                                x="0px"
                                y="0px"
                                preserveAspectRatio="none"
                                width="100%"
                                height="100%"
                                className
                                fill="rgba(0, 171, 169, 1)"
                              >
                                <g transform="translate(0,-1004.3622)">
                                  <g transform="translate(-2.7640848e-5,-3.9608678)">
                                    <g transform="translate(-193.99997,107.96089)">
                                      <path
                                        style={{}}
                                        d="M 24 0 A 24 24 0 0 0 0 24 A 24 24 0 0 0 24 48 A 24 24 0 0 0 48 24 A 24 24 0 0 0 24 0 z M 16.498047 11.996094 A 0.50005 0.50005 0 0 1 16.578125 12 L 32.492188 12 L 32.507812 12 A 0.50005 0.50005 0 0 1 33.007812 12.5 L 33.007812 26.255859 C 33.141632 26.366409 33.273268 26.482252 33.398438 26.607422 C 35.542327 28.752432 35.543017 32.246055 33.398438 34.390625 C 31.253518 36.535555 27.760164 36.535545 25.615234 34.390625 C 25.196874 33.972355 24.862532 33.50078 24.607422 33 L 12.507812 33 A 0.50005 0.50005 0 0 1 12.007812 32.5 L 12.007812 16.591797 A 0.50005 0.50005 0 0 1 12.115234 16.1875 A 0.50005 0.50005 0 0 1 12.119141 16.181641 A 0.50005 0.50005 0 0 1 12.130859 16.169922 A 0.50005 0.50005 0 0 1 12.154297 16.146484 L 16.154297 12.146484 A 0.50005 0.50005 0 0 1 16.498047 11.996094 z M 16.714844 13 L 13.714844 16 L 28.300781 16 L 31.300781 13 L 16.714844 13 z M 32.007812 13.707031 L 29.007812 16.707031 L 29.007812 25.021484 C 30.029973 24.929134 31.073342 25.123989 32.007812 25.599609 L 32.007812 13.707031 z M 13.007812 17 L 13.007812 32 L 24.216797 32 C 23.693987 30.14377 24.157834 28.064822 25.615234 26.607422 C 26.303234 25.919542 27.131462 25.455764 28.007812 25.208984 L 28.007812 17 L 13.007812 17 z M 29.505859 25.992188 C 28.354519 25.992488 27.203656 26.433063 26.322266 27.314453 C 24.559876 29.077233 24.559486 31.920824 26.322266 33.683594 C 28.085046 35.446364 30.928626 35.446374 32.691406 33.683594 C 34.454176 31.920824 34.454176 29.077233 32.691406 27.314453 C 31.810016 26.432873 30.657189 25.991898 29.505859 25.992188 z M 14.007812 26 L 20.007812 26 L 20.007812 27 L 14.007812 27 L 14.007812 26 z M 27.503906 27.398438 L 27.509766 27.398438 L 28.275391 27.398438 L 31.509766 27.398438 L 31.509766 28.421875 L 30.132812 28.421875 C 30.221262 28.580635 30.286025 28.748555 30.328125 28.921875 L 31.509766 28.921875 L 31.509766 29.921875 L 30.322266 29.921875 C 30.241046 30.239655 30.090332 30.543992 29.851562 30.794922 C 29.649412 31.007352 29.384991 31.169927 29.082031 31.279297 L 31.136719 33.279297 L 30.4375 33.994141 L 27.798828 31.423828 L 27.503906 31.423828 L 27.503906 30.423828 L 28.275391 30.423828 C 28.698371 30.423828 28.952703 30.288589 29.126953 30.105469 C 29.176833 30.053099 29.203934 29.984175 29.240234 29.921875 L 27.509766 29.921875 L 27.509766 28.921875 L 29.255859 28.921875 C 29.216849 28.850335 29.183353 28.776097 29.126953 28.716797 C 28.996263 28.579457 28.82064 28.468475 28.5625 28.421875 L 27.509766 28.421875 L 27.509766 28.398438 L 27.503906 28.398438 L 27.503906 27.398438 z M 14.007812 28 L 18.007812 28 L 18.007812 29 L 14.007812 29 L 14.007812 28 z "
                                        transform="translate(194,900.36218)"
                                        fillOpacity={1}
                                        fillRule="evenodd"
                                        stroke="none"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </svg> */}
                            </div>
                          </div>
                          <div id="HEADLINE338" className="ladi-element">
                            <h3 className="ladi-headline">04</h3>
                          </div>
                        </div>
                      </div>
                      <div id="HEADLINE339" className="ladi-element">
                        <h3 className="ladi-headline">Nhiệt huyết</h3>
                      </div>
                      <div id="PARAGRAPH340" className="ladi-element">
                        <p className="ladi-paragraph">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam leo leo, tincidunt ac lectus vel,
                          tincidunt scelerisque sapien
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="GROUP344" className="ladi-element">
                    <div className="ladi-group">
                      <div id="HEADLINE345" className="ladi-element">
                        <h3 className="ladi-headline">
                          Mô hình Bảo hiểm công nghệ
                        </h3>
                      </div>
                      <div id="PARAGRAPH346" className="ladi-element">
                        <p className="ladi-paragraph">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam leo leo, tincidunt ac lectus vel,
                          tincidunt scelerisque sapien
                        </p>
                      </div>
                      <div id="SHAPE347" className="ladi-element">
                        <div className="ladi-shape">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            viewBox="0 0 105.42 105.42"
                            fill="rgba(0, 171, 169, 1)"
                          >
                            <polygon points="52.6 95.5 9.92 95.5 9.92 9.92 95.5 9.92 95.5 52.25 105.42 52.25 105.42 0 0 0 0 105.42 52.6 105.42 52.6 95.5" />
                          </svg>
                        </div>
                      </div>
                      <div id="SHAPE348" className="ladi-element">
                        <div className="ladi-shape">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                            enableBackground="new 0 0 100 100"
                            xmlSpace="preserve"
                            preserveAspectRatio="none"
                            width="100%"
                            height="100%"
                            className
                            fill="rgba(0, 171, 169, 1)"
                          >
                            <path d="M88.555,60.333C89.492,56.828,95,53.801,95,50c0-3.801-5.508-6.828-6.444-10.333c-0.969-3.627,2.258-8.996,0.421-12.172  c-1.864-3.221-8.145-3.098-10.759-5.713c-2.614-2.614-2.491-8.895-5.713-10.759c-3.176-1.837-8.545,1.39-12.172,0.421  C56.828,10.508,53.801,5,50,5c-3.801,0-6.828,5.508-10.333,6.444c-3.627,0.969-8.996-2.258-12.172-0.421  c-3.221,1.864-3.098,8.145-5.713,10.759c-2.614,2.614-8.895,2.491-10.759,5.713c-1.837,3.176,1.39,8.545,0.421,12.172  C10.508,43.172,5,46.199,5,50c0,3.801,5.508,6.828,6.444,10.333c0.969,3.627-2.258,8.996-0.421,12.172  c1.864,3.221,8.145,3.098,10.759,5.713c2.614,2.614,2.491,8.895,5.713,10.759c3.176,1.837,8.545-1.39,12.172-0.421  C43.172,89.492,46.199,95,50,95c3.801,0,6.828-5.508,10.333-6.444c3.627-0.969,8.996,2.258,12.172,0.421  c3.221-1.864,3.098-8.145,5.713-10.759c2.614-2.614,8.895-2.491,10.759-5.713C90.814,69.329,87.586,63.96,88.555,60.333z   M44.184,65.311L31.408,52.455l6.205-6.244l6.752,6.791l18.203-18.313l6.024,6.061L44.184,65.311z" />
                          </svg>
                        </div>
                      </div>
                      <div id="HEADLINE349" className="ladi-element">
                        <h3 className="ladi-headline">01</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="HEADLINE710" className="ladi-element">
                <h3 className="ladi-headline">
                  Mô hình bảo hiểm công nghệ&nbsp;
                </h3>
              </div>
              <div id="IMAGE711" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="HEADLINE860" className="ladi-element">
                <h3 className="ladi-headline">
                  <span style={{fontWeight: 'bold'}}>
                    4 LÝ DO GIÚP TÔI THÀNH CÔNG
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div id="SECTION487" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="HEADLINE494" className="ladi-element">
                <h3 className="ladi-headline">SẢN PHẨM ĐA DẠNG VỚI HƠN 200</h3>
              </div>
              <div id="PARAGRAPH495" className="ladi-element">
                <p className="ladi-paragraph">
                  <span style={{color: 'rgb(3, 139, 150)'}}>
                    TUỲ VÀO THẾ MẠNH BẠN HÃY CHỌN{' '}
                  </span>
                  <span
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: 'rgba(255, 112, 25, 0)',
                      color: 'rgb(255, 112, 25)',
                    }}
                  >
                    SẢN PHẨM CHỦ LỰC
                  </span>
                </p>
              </div>
              <div id="IMAGE489" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="IMAGE490" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="IMAGE491" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="IMAGE492" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="IMAGE493" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="PARAGRAPH712" className="ladi-element">
                <p className="ladi-paragraph">
                  <span
                    style={{
                      backgroundColor: 'rgb(255, 112, 25)',
                      fontWeight: 'bold',
                    }}
                  >
                    TÔI CHỌN PHÂN PHỐI CÁC SẢN PHẨM VỀ SỨC KHOẺ
                  </span>
                </p>
              </div>
              <div id="GROUP793" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE794" className="ladi-element">
                    <div className="ladi-image ladi-transition">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE795" className="ladi-element">
                    <h3 className="ladi-headline">
                      <span style={{fontWeight: 700}}>BẢO HIỂM SỨC KHỎE</span>
                      <br />
                    </h3>
                  </div>
                  <div id="LINE796" className="ladi-element">
                    <div className="ladi-line">
                      <div className="ladi-line-container" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="SECTION787" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-overlay" />
            <div className="ladi-container">
              <div id="HEADLINE788" className="ladi-element">
                <h3 className="ladi-headline">
                  <span style={{fontWeight: 'bold'}}>
                    NGOÀI RA CÒN PHÂN PHỐI NHỮNG SẢN PHẨM KHÁC
                  </span>
                </h3>
              </div>
              <div id="GROUP789" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE790" className="ladi-element">
                    <div className="ladi-image ladi-transition">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE791" className="ladi-element">
                    <h3 className="ladi-headline">
                      <span style={{fontWeight: 700}}>BẢO HIỂM NHÂN THỌ</span>
                      <br />
                    </h3>
                  </div>
                  <div id="LINE792" className="ladi-element">
                    <div className="ladi-line">
                      <div className="ladi-line-container" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP797" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE798" className="ladi-element">
                    <div className="ladi-image ladi-transition">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE799" className="ladi-element">
                    <h3 className="ladi-headline">
                      <span style={{fontWeight: 700}}>
                        BẢO HIỂM BỆNH HIỂM NGHÈO
                      </span>
                      <br />
                    </h3>
                  </div>
                  <div id="LINE800" className="ladi-element">
                    <div className="ladi-line">
                      <div className="ladi-line-container" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP801" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE802" className="ladi-element">
                    <div className="ladi-image ladi-transition">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE803" className="ladi-element">
                    <h3 className="ladi-headline">
                      <span style={{fontWeight: 700}}>BẢO HIỂM TAI NẠN</span>
                      <br />
                    </h3>
                  </div>
                  <div id="LINE804" className="ladi-element">
                    <div className="ladi-line">
                      <div className="ladi-line-container" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP805" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE806" className="ladi-element">
                    <div className="ladi-image ladi-transition">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE807" className="ladi-element">
                    <h3 className="ladi-headline">
                      <span style={{fontWeight: 700}}>
                        BẢO HIỂM ÔTÔ - XE GẮN MÁY
                      </span>
                      <br />
                    </h3>
                  </div>
                  <div id="LINE808" className="ladi-element">
                    <div className="ladi-line">
                      <div className="ladi-line-container" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP809" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE810" className="ladi-element">
                    <div className="ladi-image ladi-transition">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE811" className="ladi-element">
                    <h3 className="ladi-headline">
                      <span style={{fontWeight: 700}}>BẢO HIỂM DU LỊCH</span>
                      <br />
                    </h3>
                  </div>
                  <div id="LINE812" className="ladi-element">
                    <div className="ladi-line">
                      <div className="ladi-line-container" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="SECTION393" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="GROUP903" className="ladi-element">
                <div className="ladi-group">
                  <div id="BOX410" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                  <div id="GROUP456" className="ladi-element">
                    <div className="ladi-group">
                      <div id="PARAGRAPH457" className="ladi-element">
                        <p className="ladi-paragraph">
                          TÔI ĐÃ CỐ VẤN VÀ HƯỚNG DẪN CHO HƠN 1.000+ CTV
                        </p>
                      </div>
                      <div id="SHAPE458" className="ladi-element">
                        <div className="ladi-shape">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            viewBox="0 0 100.49 100.49"
                            fill="rgba(3, 139, 150, 1)"
                          >
                            <path d="M50.24,50.24h50.25a50.25,50.25,0,1,0-50.25,50.25Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="GROUP899" className="ladi-element">
                    <div className="ladi-group">
                      <div id="PARAGRAPH459" className="ladi-element">
                        <p className="ladi-paragraph">
                          HỌ ĐÃ THÀNH CÔNG VÀ ĐANG TỪNG BƯỚC XÂY DỰNG HỆ THỐNG
                          KINH DOANH RIÊNG CỦA MÌNH
                        </p>
                      </div>
                      <div id="GROUP412" className="ladi-element">
                        <div className="ladi-group">
                          <div id="GROUP413" className="ladi-element">
                            <div className="ladi-group">
                              <div id="BOX414" className="ladi-element">
                                <div className="ladi-box" />
                              </div>
                              <div id="SHAPE415" className="ladi-element">
                                <div className="ladi-shape">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 205.6 205.6"
                                    fill="rgba(255, 254, 253, 1.0)"
                                  >
                                    <path
                                      d="M58.6,143.6a17.8,17.8,0,0,1-25.2,0h0L5.2,115.4a17.8,17.8,0,0,1,0-25.2h0L33.4,62a17.8,17.8,0,0,1,25.2,0h0L86.8,90.2a17.8,17.8,0,0,1,0,25.2h0ZM90.2,86.8a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0L115.4,5.2a17.8,17.8,0,0,0-25.2,0h0L62,33.4a17.8,17.8,0,0,0,0,25.2h0Zm25.2,32a17.8,17.8,0,0,0-25.2,0h0L62,147a17.8,17.8,0,0,0,0,25.2h0l28.2,28.2a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0Zm85-28.6L172.2,62A17.8,17.8,0,0,0,147,62h0L118.8,90.2a17.8,17.8,0,0,0,0,25.2h0L147,143.6a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2Z"
                                      transform="translate(0)"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="PARAGRAPH416" className="ladi-element">
                            <p className="ladi-paragraph">
                              Lợi ích nổi bật&nbsp;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div id="GROUP417" className="ladi-element">
                        <div className="ladi-group">
                          <div id="GROUP418" className="ladi-element">
                            <div className="ladi-group">
                              <div id="BOX419" className="ladi-element">
                                <div className="ladi-box" />
                              </div>
                              <div id="SHAPE420" className="ladi-element">
                                <div className="ladi-shape">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 205.6 205.6"
                                    fill="rgba(255, 254, 253, 1.0)"
                                  >
                                    <path
                                      d="M58.6,143.6a17.8,17.8,0,0,1-25.2,0h0L5.2,115.4a17.8,17.8,0,0,1,0-25.2h0L33.4,62a17.8,17.8,0,0,1,25.2,0h0L86.8,90.2a17.8,17.8,0,0,1,0,25.2h0ZM90.2,86.8a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0L115.4,5.2a17.8,17.8,0,0,0-25.2,0h0L62,33.4a17.8,17.8,0,0,0,0,25.2h0Zm25.2,32a17.8,17.8,0,0,0-25.2,0h0L62,147a17.8,17.8,0,0,0,0,25.2h0l28.2,28.2a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2h0Zm85-28.6L172.2,62A17.8,17.8,0,0,0,147,62h0L118.8,90.2a17.8,17.8,0,0,0,0,25.2h0L147,143.6a17.8,17.8,0,0,0,25.2,0h0l28.2-28.2a17.8,17.8,0,0,0,0-25.2Z"
                                      transform="translate(0)"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="PARAGRAPH421" className="ladi-element">
                            <p className="ladi-paragraph">Cách tư vấn</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP406" className="ladi-element">
                <div className="ladi-group">
                  <div id="SHAPE408" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 29.77 29.77"
                        fill="rgba(0, 171, 169, 1)"
                      >
                        <circle cx="14.89" cy="14.89" r="14.89" />
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE409" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 29.77 29.77"
                        fill="rgba(13, 98, 242, 1.0)"
                      >
                        <circle cx="14.89" cy="14.89" r="14.89" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP394" className="ladi-element">
                <div className="ladi-group">
                  <div id="BOX395" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                  <div id="SHAPE396" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 214.5 150"
                        fill='url("#SHAPE396_desktop_gradient")'
                      >
                        <defs id="SHAPE396_defs">
                          <linearGradient
                            id="SHAPE396_desktop_gradient"
                            gradientTransform="rotate(56)"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(8, 34, 80, 0.1)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(7, 58, 145, 0.1)"
                            />
                          </linearGradient>
                        </defs>
                        <path d="M119.7,149.8H41.8c-19.7,0-26.6-11-18.4-29.5,1.4-3.2,3.5-6.1,5.4-9.2,5.9-9.8,4.2-16.5-4.3-24.1C13.3,77,4.6,65,.8,50.1s6.8-32.3,24.5-42C52.1-6.7,76.8.4,100.1,16.2S137,54.5,146.9,79.4c7.5,18.7,17,32.9,38.5,36.6,13.1,2.3,20.7,12.2,26.7,23.8,3.9,7.7,3.7,10.3-6,10.2C177.4,149.5,148.5,149.8,119.7,149.8Z" />
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE397" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 203.8 149.8"
                        fill='url("#SHAPE397_desktop_gradient")'
                      >
                        <defs id="SHAPE397_defs">
                          <linearGradient
                            id="SHAPE397_desktop_gradient"
                            gradientTransform="rotate(0)"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(7, 58, 145, 0.0)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(8, 34, 80, 0.2)"
                            />
                          </linearGradient>
                        </defs>
                        <path d="M87.9,60.4C65.6,50.5,56,38.7,36.8,40.9,22,42.6.6,64.4,0,90.4c-.8,32.1,21,59.4,21,59.4H167.7s2.3-2.1,5.8-6.1l1.8-2.1c2.1-2.6,4.6-5.7,7.1-9.3l2.6-3.9c12.7-19.7,26-51.6,14.2-89.2-14.4-46-33.7-42.7-45.3-33.8a35,35,0,0,0-10.8,13.8C137.5,32,116.8,73.1,87.9,60.4Z" />
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE398" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 218 218"
                        fill="rgba(236, 244, 255, 0.2)"
                      >
                        <path d="M109,0A109,109,0,1,0,218,109,109,109,0,0,0,109,0Zm0,178.66A69.66,69.66,0,1,1,178.66,109,69.66,69.66,0,0,1,109,178.66Z" />
                      </svg>
                    </div>
                  </div>
                  <div id="GROUP399" className="ladi-element">
                    <div className="ladi-group">
                      <div id="SHAPE400" className="ladi-element">
                        <div className="ladi-shape">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            viewBox="0 0 150.2 150"
                            fill="rgba(235, 243, 255, 0.5)"
                          >
                            <rect width="4.7" height="4.54" rx="2.2" ry="2.2" />
                            <rect
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div id="SHAPE401" className="ladi-element">
                        <div className="ladi-shape">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            viewBox="0 0 150.2 150"
                            fill="rgba(235, 243, 255, 0.5)"
                          >
                            <rect width="4.7" height="4.54" rx="2.2" ry="2.2" />
                            <rect
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="24.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="48.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="72.7"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="24.2"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="48.5"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="72.7"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x={97}
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="121.2"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y={97}
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="121.2"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                            <rect
                              x="145.5"
                              y="145.5"
                              width="4.7"
                              height="4.54"
                              rx="2.2"
                              ry="2.2"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="SHAPE402" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 171.59 198.14"
                        fill="rgba(235, 243, 255, 0.6)"
                      >
                        <path d="M0,0V198.14L171.59,99.07ZM26.63,46.13l91.7,52.94L26.63,152Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP403" className="ladi-element">
                <div className="ladi-group">
                  <div id="SHAPE404" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 150.2 150"
                        fill="rgba(235, 243, 255, 0.5)"
                      >
                        <rect width="4.7" height="4.54" rx="2.2" ry="2.2" />
                        <rect
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE405" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 150.2 150"
                        fill="rgba(235, 243, 255, 0.5)"
                      >
                        <rect width="4.7" height="4.54" rx="2.2" ry="2.2" />
                        <rect
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="24.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="48.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="72.7"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="24.2"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="48.5"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="72.7"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x={97}
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="121.2"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y={97}
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="121.2"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                        <rect
                          x="145.5"
                          y="145.5"
                          width="4.7"
                          height="4.54"
                          rx="2.2"
                          ry="2.2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="BOX454" className="ladi-element">
                <div className="ladi-box" />
              </div>
              <div id="GROUP902" className="ladi-element">
                <div className="ladi-group">
                  <div id="GROUP901" className="ladi-element">
                    <div className="ladi-group">
                      <div id="FRAME428" className="ladi-element">
                        <div className="ladi-frame">
                          <div className="ladi-frame-background" />
                          <div id="SHAPE429" className="ladi-element">
                            <div className="ladi-shape">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 296.4 296.4"
                                fill="rgba(236, 244, 255, 0.5)"
                              >
                                <path d="M118.3,211.2A92.2,92.2,0,0,0,142.8,274a85.1,85.1,0,1,1,0-125.6A92.2,92.2,0,0,0,118.3,211.2ZM85.2.1A85.1,85.1,0,0,0,22.4,142.7a92.9,92.9,0,0,1,125.6,0A85.1,85.1,0,0,0,85.2.1ZM296.4,85.2A85.1,85.1,0,0,0,153.7,22.4a92.9,92.9,0,0,1,0,125.6A85.1,85.1,0,0,0,296.4,85.2Zm-85.1,92.9a92.2,92.2,0,0,1-62.8-24.4,85.1,85.1,0,1,0,125.6,0,92.2,92.2,0,0,1-62.8,24.5Z" />
                              </svg>
                            </div>
                          </div>
                          <div id="PARAGRAPH432" className="ladi-element">
                            <p className="ladi-paragraph">
                              Cam kết bảo mật thông tin 100%
                            </p>
                          </div>
                          <div id="HEADLINE460" className="ladi-element">
                            <h3 className="ladi-headline">
                              ĐĂNG KÝ NHẬN TƯ VẤN 1-1
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div id="FORM448" data-config-id className="ladi-element">
                        <form
                          autoComplete="off"
                          method="post"
                          className="ladi-form"
                        >
                          <div id="BUTTON449" className="ladi-element">
                            <div className="ladi-button">
                              <div className="ladi-button-background" />
                              <div id="BUTTON_TEXT449" className="ladi-element">
                                <p className="ladi-headline">
                                  CALL TO ACTION&nbsp;
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="FORM_ITEM451" className="ladi-element">
                            <div className="ladi-form-item-container">
                              <div className="ladi-form-item-background" />
                              <div className="ladi-form-item">
                                <input
                                  autoComplete="off"
                                  tabIndex={1}
                                  name="name"
                                  className="ladi-form-control"
                                  type="text"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                          </div>
                          <div id="FORM_ITEM452" className="ladi-element">
                            <div className="ladi-form-item-container">
                              <div className="ladi-form-item-background" />
                              <div className="ladi-form-item">
                                <input
                                  autoComplete="off"
                                  tabIndex={2}
                                  name="email"
                                  required
                                  className="ladi-form-control"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div id="FORM_ITEM453" className="ladi-element">
                            <div className="ladi-form-item-container">
                              <div className="ladi-form-item-background" />
                              <div className="ladi-form-item">
                                <input
                                  autoComplete="off"
                                  tabIndex={3}
                                  name="phone"
                                  required
                                  className="ladi-form-control"
                                  type="tel"
                                  placeholder="Phone"
                                  pattern="(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}"
                                />
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="ladi-hidden" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div id="GROUP435" className="ladi-element">
                    <div className="ladi-group">
                      <div id="GROUP436" className="ladi-element">
                        <div className="ladi-group">
                          <div
                            id="COUNTDOWN437"
                            className="ladi-element"
                            data-type="countdown"
                            data-minute={720}
                            data-date-start={0}
                            data-date-end={1654356231453}
                          >
                            <Countdown
                              date={Date.now() + 5000000000}
                              renderer={renderer}
                            />
                            ,
                          </div>
                          <div id="PARAGRAPH442" className="ladi-element">
                            <p className="ladi-paragraph">
                              Mở đăng ký duy nhất hôm nay
                            </p>
                          </div>
                        </div>
                      </div>
                      <div id="GROUP443" className="ladi-element">
                        <div className="ladi-group">
                          <div id="PARAGRAPH444" className="ladi-element">
                            <p className="ladi-paragraph">
                              days
                              <br />
                            </p>
                          </div>
                          <div id="PARAGRAPH445" className="ladi-element">
                            <p className="ladi-paragraph">
                              hours
                              <br />
                            </p>
                          </div>
                          <div id="PARAGRAPH446" className="ladi-element">
                            <p className="ladi-paragraph">
                              min
                              <br />
                            </p>
                          </div>
                          <div id="PARAGRAPH447" className="ladi-element">
                            <p className="ladi-paragraph">sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="SECTION721" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="GROUP722" className="ladi-element">
                <div className="ladi-group">
                  <div id="BOX723" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                  <div id="BOX724" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                  <div id="BOX725" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                </div>
              </div>
              <div id="GROUP726" className="ladi-element">
                <div className="ladi-group">
                  <div id="BOX727" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                  <div id="BOX728" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                  <div id="BOX729" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                </div>
              </div>
              <div id="PARAGRAPH745" className="ladi-element">
                <p className="ladi-paragraph">
                  TẠI SAO CHỌN{' '}
                  <span style={{color: 'rgb(237, 125, 47)'}}>
                    KINH DOANH BẢO HIỂM TẠI B-ALPHA
                  </span>
                </p>
              </div>
              <div id="PARAGRAPH746" className="ladi-element">
                <p className="ladi-paragraph">
                  &nbsp;MÀ KHÔNG PHẢI MỘT{' '}
                  <span style={{color: 'rgb(237, 125, 47)'}}>
                    CÔNG TY TRUYỀN THỐNG
                  </span>
                  ?
                </p>
              </div>
              <div id="PARAGRAPH748" className="ladi-element ladi-animation">
                <p className="ladi-paragraph">
                  Một COT bảo hiểm từng chia sẻ rằng:
                  <br />
                </p>
              </div>
              <div id="PARAGRAPH749" className="ladi-element ladi-animation">
                <p className="ladi-paragraph">
                  “Tôi từ bỏ mô hình bảo hiểm truyền thống vì B-ALPHA có…”
                  <br />
                </p>
              </div>
              <div id="LINE750" className="ladi-element">
                <div className="ladi-line">
                  <div className="ladi-line-container" />
                </div>
              </div>
              <div id="LINE751" className="ladi-element">
                <div className="ladi-line">
                  <div className="ladi-line-container" />
                </div>
              </div>
              <div id="BOX752" className="ladi-element">
                <div className="ladi-box" />
              </div>
              <div id="VIDEO753" className="ladi-element">
                <div className="ladi-video">
                  <div className="ladi-video-background" />
                  <iframe
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                    }}
                    src="https://www.youtube.com/embed/eduh6m_O9Lg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>

                  {/* <div id="SHAPE753" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 408.7 408.7"
                        fill="rgba(0, 0, 0, 0.5)"
                      >
                        <polygon
                          fill="#fff"
                          points="163.5 296.3 286.1 204.3 163.5 112.4 163.5 296.3"
                        />
                        <path
                          d="M204.3,0C91.5,0,0,91.5,0,204.3S91.5,408.7,204.3,408.7s204.3-91.5,204.3-204.3S316.7,0,204.3,0ZM163.5,296.3V112.4l122.6,91.9Z"
                          transform="translate(0 0)"
                        />
                      </svg>
                    </div>
                  </div> */}
                </div>
              </div>
              <div data-aos="fade-down">
                <div id="GROUP731" className="ladi-element ladi-animation">
                  <div className="ladi-group">
                    <div id="BOX732" className="ladi-element">
                      <div className="ladi-box" />
                    </div>
                    <div id="PARAGRAPH733" className="ladi-element">
                      <p className="ladi-paragraph">
                        CHÍNH SÁCH KINH DOANH TUYỆT VỜI
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left">
                <div id="GROUP734" className="ladi-element ladi-animation">
                  <div className="ladi-group">
                    <div id="BOX735" className="ladi-element">
                      <div className="ladi-box" />
                    </div>
                    <div id="PARAGRAPH736" className="ladi-element">
                      <p className="ladi-paragraph">
                        THỜI GIAN LÀM VIỆC
                        <br />
                        THUẬN LỢI
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div id="GROUP737" className="ladi-element">
                  <div className="ladi-group">
                    <div id="BOX738" className="ladi-element">
                      <div className="ladi-box" />
                    </div>
                    <div id="PARAGRAPH739" className="ladi-element">
                      <p className="ladi-paragraph">
                        THUẬN LỢI THĂNG TIẾN NHỜ SỰ ĐỒNG HÀNH CỦA "DATA CENTER"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right">
                <div id="GROUP740" className="ladi-element ladi-animation">
                  <div className="ladi-group">
                    <div id="BOX741" className="ladi-element">
                      <div className="ladi-box" />
                    </div>
                    <div id="PARAGRAPH742" className="ladi-element">
                      <p className="ladi-paragraph">
                        VĂN HÓA
                        <br />
                        "ĐOÀN KẾT - TIÊN PHONG"
                        <br />
                        ĐỘC NHẤT VÔ NHỊ
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PARAGRAPH730" className="ladi-element ladi-animation">
                <p className="ladi-paragraph">
                  Tổng doanh thu vượt 9 con số trong vòng 1 năm nhờ DATA CENTER
                  với nỗ lực tuyệt vời đã giúp - một người hơn mới trong kinh
                  doanh đạt vị trí giám đốc "dễ như trở bàn tay"!
                  <br />
                </p>
              </div>
              <div id="PARAGRAPH747" className="ladi-element ladi-animation">
                <p className="ladi-paragraph">
                  Chị Nguyễn HÀ
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div id="SECTION651" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="GROUP652" className="ladi-element">
                <div className="ladi-group">
                  <div id="BOX653" className="ladi-element">
                    <div className="ladi-box" />
                  </div>
                  <div id="VIDEO654" className="ladi-element">
                    <div className="ladi-video">
                      {/* <div className="ladi-video-background" /> */}

                      <iframe
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          top: 0,
                          left: 0,
                        }}
                        src="https://www.youtube.com/embed/DS-7UDHY7xo"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      {/* <iframe
                        id="VIDEO654_player"
                        className="iframe-video-preload"
                        data-video-type="youtube"
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          top: 0,
                          left: 0,
                        }}
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={1}
                        title="YouTube video player"
                        width={640}
                        height={360}
                        src="DS-7UDHY7xo.html"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div id="HEADLINE656" className="ladi-element">
                <h3 className="ladi-headline">
                  HTV9 nói gì về tiềm năng của cơ hội kinh doanh này:
                </h3>
              </div>
              <div id="HEADLINE657" className="ladi-element">
                <h3 className="ladi-headline">
                  ĐÂY LÀ CƠ HỘI KINH DOANH TIỀM NĂNG ĐÃ ĐƯỢC CHỨNG MINH TRÊN THỊ
                  TRƯỜNG
                  <br />
                </h3>
              </div>
              <div id="HEADLINE658" className="ladi-element">
                <h3 className="ladi-headline">
                  ĐÂY LÀ CƠ HỘI KINH DOANH TIỀM NĂNG ĐÃ ĐƯỢC CHỨNG MINH TRÊN THỊ
                  TRƯỜNG
                  <br />
                </h3>
              </div>
              <div
                data-action="true"
                id="GROUP659"
                className="ladi-element ladi-animation-hidden ladi-animation"
              >
                <div className="ladi-group">
                  <div id="IMAGE660" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="HEADLINE661" className="ladi-element">
                    <h3 className="ladi-headline">ĐĂNG KÝ</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="SECTION813" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="HEADLINE814" className="ladi-element">
                <h3 className="ladi-headline">
                  VỀ B-ALPHA INSURANCE
                  <br />
                </h3>
              </div>
              <div id="HEADLINE815" className="ladi-element">
                <h3 className="ladi-headline">
                  NHẬN ĐỊNH CỦA CHUYÊN GIA
                  <br />
                </h3>
              </div>
              <div id="HEADLINE816" className="ladi-element">
                <h3 className="ladi-headline">
                  NHẬN ĐỊNH CỦA CHUYÊN GIA
                  <br />
                </h3>
              </div>
              <div id="PARAGRAPH854" className="ladi-element">
                <p className="ladi-paragraph" />
              </div>
              <div id="IMAGE830" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="PARAGRAPH843" className="ladi-element">
                <p className="ladi-paragraph" />
              </div>
              <div id="PARAGRAPH857" className="ladi-element">
                <p className="ladi-paragraph">
                  Mô hình hoạt động của B-Alpha tạo nên{' '}
                  <span style={{fontWeight: 'bold'}}>tính minh bạch</span> trong
                  hoạt động tư vấn. Bảo hiểm, khi có thêm quy trình tư vấn viên
                  độc lập, điều này giúp khách hàng hiểu rõ về được bảo vệ tốt
                  hơn khi lựa chọn gói bảo hiểm cho mình.
                </p>
              </div>
              <div id="IMAGE858" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="IMAGE842" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="HEADLINE851" className="ladi-element">
                <h6 className="ladi-headline">
                  TGĐ Công ty CP Dịch Vụ Tư Vấn Pháp Lý Bảo Hiểm Tila
                </h6>
              </div>
              <div id="HEADLINE850" className="ladi-element">
                <h6 className="ladi-headline">Ông Trương Minh Cát Nguyên</h6>
              </div>
              <div id="LINE852" className="ladi-element">
                <div className="ladi-line">
                  <div className="ladi-line-container" />
                </div>
              </div>
              <div id="HEADLINE838" className="ladi-element">
                <h6 className="ladi-headline">
                  Tiến Sĩ, Bác Sĩ Thương Hiệu Nguyễn Khánh Trung
                </h6>
              </div>
              <div id="IMAGE818" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="GROUP912" className="ladi-element">
                <div className="ladi-group">
                  <div id="SHAPE845" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE846" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE847" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE848" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE849" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP923" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE853" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="PARAGRAPH831" className="ladi-element">
                    <p className="ladi-paragraph">
                      3 yếu tố tạo nên sự khác biệt tại B-Alpha là <br />
                      <span style={{fontWeight: 'bold'}}>
                        Công nghệ - Đào Tạo - Văn Hoá.
                      </span>
                      <br />
                      Đặc biệt, thương Hiệu B-Alpha được xây dựng dựa trên những
                      giá trị cốt lõi, đó là{' '}
                      <span style={{fontWeight: 'bold'}}>
                        Tôn Trọng - Đoàn Kết - Tiên Phong
                      </span>
                      .
                      <br />
                      Những giá trị tuyệt vời này đã đi các chuẩn mực hoạt động
                      của từng thành viên từ cấp thấp đến cấp cao trong công ty.
                      Theo tôi, đây chính là cơ sở để B - Alpha trở nên khác
                      biệt so với các doanh nghiệp khác trên thị trường.
                      <br />
                    </p>
                  </div>
                  <div id="HEADLINE839" className="ladi-element">
                    <h6 className="ladi-headline">
                      Chủ Tịch Brand Doctor Group
                      <br />
                      Cố vấn Thương Hiệu Doanh Nghiệp
                      <br />
                      Giảng Viên ĐH Kinh Tế Luật.
                      <br />
                    </h6>
                  </div>
                  <div id="LINE840" className="ladi-element">
                    <div className="ladi-line">
                      <div className="ladi-line-container" />
                    </div>
                  </div>
                  <div id="SHAPE914" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE915" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE916" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE917" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE918" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="HEADLINE826" className="ladi-element">
                <h6 className="ladi-headline">Tiến Sĩ Dương Trọng Hải</h6>
              </div>
              <div id="GROUP920" className="ladi-element">
                <div className="ladi-group">
                  <div id="SHAPE821" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE822" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE823" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE824" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <div id="SHAPE825" className="ladi-element">
                    <div className="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="rgba(255,174,15,1)"
                      >
                        {' '}
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />{' '}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="LINE828" className="ladi-element">
                <div className="ladi-line">
                  <div className="ladi-line-container" />
                </div>
              </div>
              <div id="IMAGE855" className="ladi-element">
                <div className="ladi-image">
                  <div className="ladi-image-background" />
                </div>
              </div>
              <div id="PARAGRAPH856" className="ladi-element">
                <p className="ladi-paragraph">
                  B-Alpha là{' '}
                  <span style={{fontWeight: 'bold'}}>đơn vị tiên phong</span>{' '}
                  trong việc ứng dụng trí thông minh nhân tạo AI. Với hoạt động
                  Marketing trong lĩnh vực bảo hiểm, giúp các tư vấn viên dễ
                  dàng hơn trong việc tìm kiếm về chăm sóc khách hàng.
                  <br />
                  <br />
                </p>
              </div>
              <div id="HEADLINE827" className="ladi-element">
                <h6 className="ladi-headline">
                  Founder, CEO Công ty CP HSpace
                  <br />
                  Nguyên Trưởng Khoa CNTT ĐH Nguyễn Tất Thành
                  <br />
                  Tiến sĩ, Chuyên nghành Trí tuệ nhân tạo, Đại học Inha, Hàn
                  Quốc
                  <br />
                  Một trong 68 Nhà khoa học trẻ tiêu biểu, 2015
                  <br />
                  Nhận giải thưởng Quả cầu vàng, 2016
                  <br />
                </h6>
              </div>
            </div>
          </div>
          <div id="SECTION563" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container">
              <div id="GROUP564" className="ladi-element">
                <div className="ladi-group">
                  <div id="IMAGE565" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="IMAGE566" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="IMAGE567" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                  <div id="IMAGE568" className="ladi-element">
                    <div className="ladi-image">
                      <div className="ladi-image-background" />
                    </div>
                  </div>
                </div>
              </div>
              <div data-action="true" id="BUTTON569" className="ladi-element">
                <div className="ladi-button">
                  <div className="ladi-button-background" />
                  <div id="BUTTON_TEXT569" className="ladi-element">
                    <p className="ladi-headline">LIÊN HỆ VỚI TÔI&nbsp;</p>
                  </div>
                </div>
              </div>
              <div id="SHAPE859" className="ladi-element">
                <div className="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.0833"
                    className
                    fill="rgba(3, 139, 150, 1)"
                  >
                    {' '}
                    <path d="M1472 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H117q-52 0-84.5-37.5T0 1024V896q0-53 32.5-90.5T117 768h704L528 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />{' '}
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="SECTION_POPUP" className="ladi-section">
            <div className="ladi-section-background" />
            <div className="ladi-container" />
          </div>
        </div>
        <div id="backdrop-popup" className="backdrop-popup" />
        <div id="backdrop-dropbox" className="backdrop-dropbox" />
        <div id="lightbox-screen" className="lightbox-screen" />
      </div>
    </>
  )
}

export default LandingPage
