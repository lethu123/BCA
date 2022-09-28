import React, {useState} from 'react'
import {Badge, CardBody} from 'reactstrap'
import './DetailGroup.style.scss'
// import avatarGroup from 'assets/images/home/avatarGroup.png'
import {Camera} from 'react-feather'

// *** Components
import UploadAvatarGroup from './UploadAvatarGroup'
import InfomationGroup from './InfomationGroup'

import defaultAvatar from 'assets/images/portrait/small/avatar-s-11.jpg'

const DetailGroup = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div>
      <div className="position-relative">
        <img
          src="https://bacgiangweb.com/wp-content/uploads/dich-vu-thiet-ke-hinh-anh-quang-cao-bgw.jpg"
          alt="bannerGroup"
          style={{width: '100%', height: 400, borderRadius: 13}}
        />
        <p
          style={{
            // width: 30,
            // height: 30,
            border: '1px solid #fffcfc',
            textAlign: 'center',
            lineHeight: '26px',
            borderRadius: '50%',
            top: 0,
            right: 0,
            backgroundColor: '#fffcfc',
          }}
          className="text-primary cursor-pointer position-absolute m-5 p-2"
          onClick={() => setCenteredModal(true)}
        >
          <Camera size={26} />
        </p>
        <p className="mineGroup w-100 mb-0">
          Nhóm của bạn:{' '}
          <span className="text-primary">Nhóm New Alpha - Trainning 1</span>{' '}
        </p>
      </div>
      <div className="mt-5" style={{backgroundColor: 'white', borderRadius: 5}}>
        <CardBody>
          <div className="d-flex align-items-center mt-5">
            <div style={{position: 'relative'}}>
              <img
                src={defaultAvatar}
                alt="avatarGroup"
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: '50%',
                }}
                onError={e => {
                  e.target.onerror = null
                  e.target.src = defaultAvatar
                }}
              />
              <p
                style={{
                  width: 30,
                  height: 30,
                  border: '1px solid #fffcfc',
                  textAlign: 'center',
                  lineHeight: '26px',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: '#fffcfc',
                }}
                className="text-primary cursor-pointer"
                onClick={() => setCenteredModal(true)}
              >
                <Camera size={15} />
              </p>
            </div>

            <div style={{marginLeft: 20}}>
              <Badge color="warning" className="text-white">
                Nhóm của bạn
              </Badge>
              <h4 className="mb-0 text-primary my-2">New Alpha Tranning 1</h4>
              <p className="w-50">
                Mô tả ngắn về dự án: Đây là một dự án vô cùng hay: It is a long
                established fact that a reader will be distracted by the
                readable
              </p>
            </div>
          </div>
        </CardBody>
        <InfomationGroup />
      </div>

      <UploadAvatarGroup
        centeredModal={centeredModal}
        setCenteredModal={setCenteredModal}
      />
    </div>
  )
}

export default DetailGroup
