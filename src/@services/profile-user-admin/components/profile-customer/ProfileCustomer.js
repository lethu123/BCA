import React from 'react'
import {Calendar, Mail, MapPin, PhoneCall, Square, User} from 'react-feather'

const ProfileCustomer = () => {
  return (
    <div>
      <div className="d-flex mb-2">
        <Square size={16} fill="#E6641F" stroke="#E6641F" className="mr-3" />
        <p>
          <span>Mã ứng viên : </span> 001234564
        </p>
      </div>
      <div className="d-flex mb-2">
        <Square size={16} fill="#E6641F" stroke="#E6641F" className="mr-3" />
        <div className="d-flex align-items-center">
          <p style={{marginBottom: 12}}>
            Nguồn dữ liệu : <u className="text-primary mt-0">Landingpage</u>
          </p>
        </div>
      </div>
      <div className="d-flex mb-2">
        <Square size={16} fill="#E6641F" stroke="#E6641F" className="mr-3" />
        <p className="text-primary font-weight-bolder">
          <span className="text-dark font-weight-normal">
            Người phụ trách :{' '}
          </span>{' '}
          Bùi Quốc Anh
        </p>
      </div>
      <div className="d-flex mb-2">
        <Square size={16} fill="#E6641F" stroke="#E6641F" className="mr-3" />
        <p>
          <span>Làm việc tại : </span> Đh KHXH và Nhân văn
        </p>
      </div>
      <div className="d-flex mb-2">
        <Square size={16} fill="#E6641F" stroke="#E6641F" className="mr-3" />
        <p>
          Giới tính:{' '}
          <span className="font-weight-bolder text-primary">Nữ </span>
        </p>
      </div>
      <div className="d-flex mb-2">
        <Square size={16} fill="#E6641F" stroke="#E6641F" className="mr-3" />
        <p>
          Nghề nghiệp:{' '}
          <span className="font-weight-bolder text-primary">Giáo viên </span>
        </p>
      </div>
      <div className="d-flex mb-2">
        <MapPin size={17} className="text-primary mr-3" />
        <p>
          Nơi ở:{' '}
          <span className="font-weight-bolder">Thành phố Hồ Chí Minh </span>
        </p>
      </div>

      <div className="d-flex mb-2">
        <Mail size={17} className="text-primary mr-3" />
        <p className="font-weight-bold">hoangquyen@gmail.com</p>
      </div>
      <div className="d-flex mb-2">
        <PhoneCall size={17} className="text-primary mr-3" />
        <p className="font-weight-bold">0947268390</p>
      </div>
      <div className="d-flex mb-2">
        <User size={17} className="text-primary mr-3" />
        <p>
          Tình trạng hôn nhân:
          <span className="font-weight-bolder"> Độc thân</span>
        </p>
      </div>
      <div className="d-flex mb-2">
        <Calendar size={17} className="text-primary mr-3" />
        <p>
          Ngày tạo:<span className="font-weight-bolder"> 02/08/2021</span>
        </p>
      </div>
      <div className="d-flex mb-2">
        <Calendar size={17} className="text-primary mr-3" />
        <p>
          Ngày duyệt KYC:<span className="font-weight-bolder"> 09/08/2021</span>
        </p>
      </div>
    </div>
  )
}

export default ProfileCustomer
