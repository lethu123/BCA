import React, {useContext} from 'react'
import {
  Bookmark,
  Download,
  MessageSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from 'react-feather'
import ReactPlayer from 'react-player'
import {Col, Row} from 'reactstrap'

// *** component
import {CourseContext} from '../..'

// *** style
import '../../StartCourse.style.scss'

const PlayVideo = () => {
  const {currentLesson} = useContext(CourseContext)
  return (
    <div>
      <ReactPlayer
        url={
          (currentLesson && currentLesson.link) ||
          'http://youtube.com/watch?v=FCPdIvXo2rU'
        }
        className="react-player-video video-course-lesson h-lg-600px h-300px"
        width="100%"
        controls={true}
        style={{borderRadius: '15px', overflow: 'hidden'}}
        // height="300px"
      />
      <div className="py-10">
        <div className="d-flex align-items-center">
          <p> 15 Triệu lượt xem </p>
          <p className="mx-4">
            <i className="fa fa-circle text-dark" style={{fontSize: '8px'}}></i>
          </p>
          <p>2 tuần trước</p>
        </div>
        <Row>
          <Col md="2" className="col-4 my-2 text-center">
            <div className="cursor-pointer">
              <ThumbsUp />
              <div>3N</div>
            </div>
          </Col>
          <Col md="2" className="col-4 my-2 text-center">
            <div className="cursor-pointer">
              <ThumbsDown />
              <div>300</div>
            </div>
          </Col>
          <Col md="2" className="col-4 my-2 text-center">
            <div className="cursor-pointer">
              <MessageSquare />
              <div>Trò chuyện</div>
            </div>
          </Col>
          <Col md="2" className="col-4 my-2 text-center">
            <div className="cursor-pointer">
              <Share2 />
              <div>Chia sẽ</div>
            </div>
          </Col>
          <Col md="2" className="col-4 my-2 text-center">
            <div className="cursor-pointer">
              <Download />
              <div>Tải xuống</div>
            </div>
          </Col>
          <Col md="2" className="col-4 my-2 text-center">
            <div className="cursor-pointer">
              <Bookmark />
              <div>Lưu</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PlayVideo
