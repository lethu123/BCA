import React from 'react'
import {Badge} from 'reactstrap'

const PersionalInfocation = () => {
  const infomation = {
    preference: [
      'Mua sắm',
      'Chăm sóc sức khỏe',
      'Du lịch',
      'Ăn uống',
      'Thể thao',
    ],
    FavoriteTopics: [
      'Chăm sóc sức khỏe',
      'Đầu tư',
      'Khởi nghiệp',
      'Kinh doanh online',
    ],
    TopicCareer: [
      'Kiếm tiền online',
      'Chứng khoán',
      'Sức khỏe',
      'Hôn nhân',
      'Bảo hiểm',
    ],
  }
  return (
    <div>
      <div style={{marginBottom: 20}}>
        <div className="d-flex">
          {' '}
          <p
            style={{
              width: 15,
              height: 15,
              borderRadius: 4,
              backgroundColor: 'rgb(107, 192, 107)',
              marginTop: 4,
              marginRight: 5,
            }}
          ></p>
          <h5>Sở thích</h5>
        </div>
        <div>
          {infomation.preference.map((item, idx) => (
            <Badge color="light-success" className="mr-2 mb-2" key={idx}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <div style={{marginBottom: 20}}>
        <div className="d-flex mt-2">
          {' '}
          <p
            style={{
              width: 15,
              height: 15,
              borderRadius: 4,
              backgroundColor: '#FFC893',
              marginTop: 4,
              marginRight: 5,
            }}
          ></p>
          <h5>Chủ đề yêu thích</h5>
        </div>
        <div>
          {infomation.FavoriteTopics.map((item, idx) => (
            <Badge color="light-warning" className="mr-2 mt-2" key={idx}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <div style={{marginBottom: 20}}>
        <div className="d-flex mt-2">
          {' '}
          <p
            style={{
              width: 15,
              height: 15,
              borderRadius: 4,
              backgroundColor: '#EB5D5E',
              marginTop: 4,
              marginRight: 5,
            }}
          ></p>
          <h5>Chủ đề quan tâm</h5>
        </div>
        <div>
          {infomation.TopicCareer.map((item, idx) => (
            <Badge color="light-danger" className="mr-2 mt-2" key={idx}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <div style={{marginBottom: 20}}>
        <div className="d-flex mt-2">
          {' '}
          <p
            style={{
              width: 15,
              height: 15,
              borderRadius: 4,
              backgroundColor: '#34D9ED',
              marginTop: 4,
              marginRight: 5,
            }}
          ></p>
          <h5>Nhân khẩu học</h5>
        </div>
        <div>
          {infomation.TopicCareer.map((item, idx) => (
            <Badge color="light-info" className="mr-2 mt-2" key={idx}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersionalInfocation
