import React, {useState} from 'react'
import ModalVideo from 'react-modal-video'
import BlockTitle from './BlockTitle'
import videoBG from 'static/images/resources/video-bg-1-1.jpg'
import 'react-modal-video/scss/modal-video.scss'

const VideoOne = ({videoIntro}) => {
  const [open, setOpen] = useState({
    isOpen: false,
  })
  const openModal = e => {
    e.preventDefault()
    setOpen({
      isOpen: true,
    })
  }
  return (
    <section
      className="video-one-apiton"
      style={{
        overflow: 'unset',
        paddingBottom: '50px',
        padding: '60px 0 30px 0',
      }}
    >
      <div
        className="container-fluid"
        style={{backgroundImage: `url(${videoBG})`}}
      >
        <div
          className="video-one-apiton__content wow fadeInLeft"
          data-wow-duration="1500ms"
          style={{
            zIndex: 1,
            width: '400px',
            height: '300px',
            paddingTop: '130px',
            top: '-15%',
          }}
        >
          <BlockTitle
            textAlign="left"
            paraText="Video preview"
            titleText={`Watch Now \n Our Video \n Preview`}
          />
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId={
            videoIntro.split('=')[1]
              ? videoIntro.split('=')[1].substring(0, 11)
              : videoIntro
          }
          onClose={() => setOpen({isOpen: false})}
        />
        <a
          href="#none"
          onClick={openModal}
          className="video-one-apiton__btn video-popup"
        >
          <i className="fa fa-play"></i>
        </a>
      </div>
    </section>
  )
}
export default VideoOne
