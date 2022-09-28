import React, {useContext} from 'react'

import {Check, Clock, Lock, Pause} from 'react-feather'
import classnames from 'classnames'
import {CourseContext} from '..'

const data = [
  {
    title: 'Bài 1: Con tàu dinh dưỡng miễn dịch Con tàu dinh dưỡng miễn dịch',
    icon: <Lock size={14} />,
    content: (
      <span className="media text-muted">
        <Clock size="18" className="mr-1" />
        <span className="media-body">15 phút</span>
      </span>
    ),
    color: 'info',
    status: 'complete',
    link: 'https://www.youtube.com/watch?v=DnyFJO_zqFc&t=188s',
  },
  {
    title: ' Bài 2: Chiến dịch xây dựng gia đình Alpha',
    icon: <Lock size={14} />,
    content: (
      <span className="media text-muted">
        <Clock size="18" className="mr-1" />
        <span className="media-body">15 phút</span>
      </span>
    ),
    color: 'info',
    status: 'studying',
    link: 'https://www.youtube.com/watch?v=PnqxN_gmEeg',
  },
  {
    title: 'Bài 1: Con tàu dinh dưỡng miễn dịch Con tàu dinh dưỡng miễn dịch',
    icon: <Lock size={14} />,
    content: (
      <span className="media text-muted">
        <Clock size="18" className="mr-1" />
        <span className="media-body">15 phút</span>
      </span>
    ),
    color: 'info',
    status: 'pedding',
    link: 'https://www.youtube.com/watch?v=6AA58ludJT8',
  },
  {
    title: ' Bài 2: Chiến dịch xây dựng gia đình Alpha',
    icon: <Lock size={14} />,
    content: (
      <span className="media text-muted">
        <Clock size="18" className="mr-1" />
        <span className="media-body">15 phút</span>
      </span>
    ),
    color: 'info',
    status: 'pedding',
    link: 'https://www.youtube.com/watch?v=kxL3LTIDi-w',
  },
]
const LessonCourse = () => {
  const {dispatch} = useContext(CourseContext)
  return (
    <div>
      <h2 className="text-center mb-5 text-primary">Nội dung khóa học</h2>
      <ul className="timeline">
        {data.map((item, i) => (
          <li key={i} className="timeline-item pb-3">
            {item.status === 'complete' ? (
              <span className="timeline-point timeline-point-primary">
                <Check size={14} />
              </span>
            ) : item.status === 'studying' ? (
              <span className="timeline-point timeline-point-success">
                <Pause size={14} />
              </span>
            ) : (
              <span className="timeline-point timeline-point-secondary">
                <Lock size={14} />
              </span>
            )}
            <div className="timeline-event">
              <h6
                className="font-weight-bolder text-truncate cursor-pointer"
                onClick={() =>
                  dispatch({type: 'CURRENT_LESSON', payload: item})
                }
              >
                {item.title}
              </h6>

              <p
                className={classnames({
                  'mb-0': i === data.length - 1,
                })}
              >
                {item.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LessonCourse
