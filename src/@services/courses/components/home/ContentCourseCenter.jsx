import React, {useState} from 'react'
import {Clock, Lock} from 'react-feather'
import classnames from 'classnames'

const data = [
  {
    id: 1,
    title: ' Bài 1: Con tàu dinh dưỡng miễn dịch',
    duration: 5,
    content: `<div>
    <div className="text-center"> 
      <img
        src="https://vinmec-prod.s3.amazonaws.com/images/20200426_021946_155535_xay-dung-che-do-an-.max-1800x1800.jpg"
        alt=""
      />
    </div>
    <p className="mt-3">
      Trong số các bệnh lý không lây nhiễm liên quan đến dinh dưỡng, đứng
      đầu là các bệnh tim mạch, đái tháo đường, ung thư, thừa cân - béo phì,
      Gout, rối loạn mỡ máu...Chế độ dinh dưỡng không hợp lý là một yếu tố
      nguy cơ quan trọng hàng đầu dẫn đến sự gia tăng nhanh chóng của phần
      lớn các bệnh mạn tính không lây này.
    </p>
  </div>`,
    link_lesson: 'https://www.youtube.com/watch?v=DnyFJO_zqFc&t=188s',
    link_document:
      'https://xd.adobe.com/view/17a488dd-4ac1-494a-993a-93b8adbd8db0-42f7/screen/f1a54574-9dbf-43fd-9a8d-794068f78af8?fullscreen',
  },
  {
    id: 2,
    title: 'Bài 2: Chiến dịch xây dựng gia đình Alpha',
    duration: 5,
    content: `<div >
    <div className="text-center"> 
      <img
        src="https://vinmec-prod.s3.amazonaws.com/images/20200426_021946_155535_xay-dung-che-do-an-.max-1800x1800.jpg"
        alt=""
      />
    </div>
    <p className="mt-3">
      Trong số các bệnh lý không lây nhiễm liên quan đến dinh dưỡng, đứng
      đầu là các bệnh tim mạch, đái tháo đường, ung thư, thừa cân - béo phì,
      Gout, rối loạn mỡ máu...Chế độ dinh dưỡng không hợp lý là một yếu tố
      nguy cơ quan trọng hàng đầu dẫn đến sự gia tăng nhanh chóng của phần
      lớn các bệnh mạn tính không lây này.
    </p>
  </div>`,
    link_lesson: 'https://www.youtube.com/watch?v=DnyFJO_zqFc&t=188s',
    link_document:
      'https://xd.adobe.com/view/17a488dd-4ac1-494a-993a-93b8adbd8db0-42f7/screen/f1a54574-9dbf-43fd-9a8d-794068f78af8?fullscreen',
  },
]
const ContentCourseCenter = () => {
  const [item, setItem] = useState(data ? data[0] : null)
  return (
    <div className="mt-5">
      <ul className="timeline">
        {data.map((ele, i) => (
          <li key={i} className="timeline-item pb-3">
            <span className="timeline-point timeline-point-secondary">
              <Lock size={14} />
            </span>
            <div className="timeline-event">
              <h6
                onClick={() => setItem(ele)}
                className={`font-weight-bolder text-truncate cursor-pointer ${
                  ele.id === item?.id ? 'text-primary' : ''
                }`}
              >
                {ele.title}
              </h6>

              <p
                className={classnames({
                  'mb-0': i === data.length - 1,
                })}
              >
                <span className="media text-muted">
                  <Clock size="18" className="mr-1" />
                  <span className="media-body">{ele.duration} phút</span>
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentCourseCenter
