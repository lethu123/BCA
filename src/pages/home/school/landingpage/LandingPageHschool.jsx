import React from 'react'
import {Helmet} from 'react-helmet'
import SliderOne from './components/SliderOne'
import AboutTwo from './components/AboutTwo'
import CourseOne from './components/CourseOne'
import VideoTwo from './components/VideoTwo'
import CountdownKipso from './components/CountdownKipso'
import CourseCatOne from './components/CourseCatOne'
import CallToActionThree from './components/CallToActionThree'
import BrandsTwo from './components/BrandsTwo'
import SubscribeOne from './components/SubscribeOne'
import FunFact from './components/FunFact'
import Services from './components/Services'
import TeamLanding from './components/TeamLanding'
import TestimonialLanding from './components/TestimonialLanding'
import AboutOne from './components/AboutOne'
import MeetingOne from './components/MeetingOne'
import CallToActionSix from './components/CallToActionSix'
import TestimonialOne from './components/TestimonialOne'
import CallToActionFive from './components/CallToActionFive'

import 'swiper/swiper-bundle.min.css'

const LandingPageHschool = () => {
  return (
    <div>
      <Helmet>
        <title>Hschool - Online Education Learning</title>

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="page-wrapper">
        <SliderOne />
        <CourseCatOne />
        <CourseOne />
        <AboutTwo />
        <VideoTwo />
        <CallToActionSix />
        <Services />
        <AboutOne />
        <TeamLanding />
        <FunFact />
        <TestimonialOne />
        <TestimonialLanding />
        <MeetingOne />
        <CountdownKipso />
        <CallToActionThree />
        <BrandsTwo />
        <CallToActionFive />
        <SubscribeOne />
      </div>
    </div>
  )
}

export default LandingPageHschool
