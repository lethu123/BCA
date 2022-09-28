import React from 'react'
import avatar1 from 'assets/images/avatars/1.png'
import avatar2 from 'assets/images/avatars/2.png'

import avatar3 from 'assets/images/avatars/3.png'

import avatar4 from 'assets/images/avatars/4.png'

const Instructor = () => {
  const data = [
    {
      id: 1,
      avatar: avatar1,
      name: 'Ngoc Anh',
      title: 'Chuyên gia  tư vấn sức khỏe',
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'Truong Quynh',
      title: 'Chuyên gia  tư vấn sức khỏe',
    },
    {
      id: 3,
      avatar: avatar3,
      name: 'Bui Van Anh',
      title: 'Chuyên gia  tư vấn sức khỏe',
    },
    {
      id: 4,
      avatar: avatar4,
      name: 'Nguyen Van Anh',
      title: 'Chuyên gia  tư vấn sức khỏe',
    },
  ]
  return (
    <div className="row">
      {data.map(item => (
        <div key={item.id} className="col-md-5 d-flex align-item-center mb-5">
          <img
            alt="avatar"
            src={item.avatar}
            style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              marginRight: 7,
            }}
          />
          <div>
            <h5 className="text-primary">{item.name}</h5>
            <p className="mb-0">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Instructor
