import React from 'react'
import {Calendar, Square, User} from 'react-feather'
import {Card} from 'reactstrap'

const ProfileMember = () => {
  return (
    <Card className="p-5 pl-lg-10">
      <h4 className="mb-3 text-secondary">Thông tin ứng viên</h4>
      <div className="d-flex mb-2">
        <Square size={16} fill="#E6641F" stroke="#E6641F" className="mr-3" />
        <p>
          <span>Mã ứng viên : </span> 001234564
        </p>
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
        <User size={17} className="text-primary mr-3" />
        <p>
          Tình trạng hôn nhân:
          <span className="font-weight-bolder"> Độc thân</span>
        </p>
      </div>
      <div className="d-flex mb-2">
        <Calendar size={17} className="text-primary mr-3" />
        <p>
          Ngày được thêm:<span className="font-weight-bolder"> 02/08/2021</span>
        </p>
      </div>
      <div className="d-flex mb-2">
        <Calendar size={17} className="text-primary mr-3" />
        <p>
          Ngày đăng kí:<span className="font-weight-bolder"> 09/08/2021</span>
        </p>
      </div>
    </Card>
  )
}

export default ProfileMember
