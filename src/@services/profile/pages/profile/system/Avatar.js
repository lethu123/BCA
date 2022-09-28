import React from 'react'
import avatar from 'assets/images/avatars/1.png'

const Avatar = () => {
  return (
    <div>
      <img
        alt="avatar"
        src={avatar}
        style={{width: 50, height: 50, borderRadius: '50%'}}
      />
      <div>
        <h6 className="text-primary cursor-pointer">Dongu Hangu</h6>
        <p className="mb-0">ID: 123</p>
        <p className="mb-0">0366958217</p>
        <p className="mb-0">khacvu0505@gmail.com</p>
      </div>
    </div>
  )
}

export default Avatar
