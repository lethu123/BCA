import React, {useState} from 'react'
import {
  Button,
  Card,
  UncontrolledButtonDropdown,
  DropdownToggle,
} from 'reactstrap'
import {Calendar, Grid, MoreVertical, XCircle} from 'react-feather'
import Flatpickr from 'react-flatpickr'
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

// *** Image
import AvatarImg from 'assets/images/datacenter/bizxu.png'
import bizxuWhite from 'assets/images/datacenter/bizxu-icon-white.png'

// *** Components
import StatisticMarketPlace from './StatisticMarketPlace'
import MarketPlaceTab from './MarketPlaceTab'

const MarketPlace = () => {
  //useState
  const [closeNoti, setCloseNoti] = useState(false)
  const [picker, setPicker] = useState(new Date())

  return (
    <div className="p-5" style={{backgroundColor: 'white'}}>
      <div className="d-flex row justify-content-between align-items-center mb-3">
        <div className="d-flex col-lg-9">
          {/* <img
            src={AvatarImg}
            alt="images"
            className="img-fluid mr-3"
            width="50px"
            height="50px"
          /> */}
          <Grid
            color="#E6641F"
            stroke="#E6641F"
            fill="#E6641F"
            size={50}
            className="mr-3"
          />
          <div>
            <h4 className="font-weight-bold">Quản lý Marketplace</h4>
            <p className="mb-0">Quản lý các sản phẩm trên marketplace</p>
          </div>
        </div>
        <div className="col-lg-3 text-right mt-3 mt-lg-0">
          <Button.Ripple color="primary" className="mr-2">
            {/* <UserPlus className="mr-1" size={20} /> */}
            <img
              src={bizxuWhite}
              alt="images"
              style={{width: 20, height: 20, marginRight: 7}}
            />
            Tạo mới
          </Button.Ripple>
          <UncontrolledButtonDropdown>
            <DropdownToggle color="flat-primary" caret style={{padding: 0}}>
              <MoreVertical />
            </DropdownToggle>
            {/* <DropdownMenu>
              <DropdownItem>
                <div className="d-flex align-items-center">
                  <Archive size={19} className="mr-3" />
                  <div>
                    <h6 className="mb-0">Cài đặt thời gian tự hủy</h6>
                    <small>
                      Hệ thống tự động Hủy/Yêu cầu tham gia <br /> sau 48 giờ kể
                      từ lúc được mời
                    </small>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div>
                  <Copy size={19} className="mr-3" />
                  <span>Tạo thêm trạng thái yêu cầu</span>
                </div>
              </DropdownItem>
              <DropdownItem>
                <Trash2 size={19} className="mr-3" />
                <span>Xóa yêu cầu</span>
              </DropdownItem>
            </DropdownMenu> */}
          </UncontrolledButtonDropdown>
        </div>
      </div>
      {!closeNoti && (
        <Card className="mt-3">
          <div className="d-flex justify-content-between p-5">
            <div className="d-flex">
              <p
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'red',
                  textAlign: 'center',
                  lineHeight: '40px',
                  color: 'white',
                  marginRight: 10,
                }}
              >
                5
              </p>
              <div>
                <h6 className="font-weight-bolder">Thông báo</h6>
                <p className="mb-0">
                  Bạn có 5 yêu cầu giao dịch cần xem xét.{' '}
                  <span className="text-primary cursor-pointer text-decoration-underline font-italic">
                    Xem ngay!
                  </span>
                </p>
              </div>
            </div>
            <div className="cursor-pointer" onClick={() => setCloseNoti(true)}>
              <XCircle className="text-primary" />
            </div>
          </div>
        </Card>
      )}
      <div className="text-right">
        {' '}
        <div>
          <Calendar className="text-primary" />
          <div style={{display: 'inline-block', width: 220, marginLeft: 5}}>
            <Flatpickr
              value={picker}
              id="range-picker"
              className="form-control"
              onChange={date => setPicker(date)}
              options={{
                mode: 'range',
                defaultDate: ['2020-02-01', '2020-02-15'],
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{backgroundColor: '#fff', borderRadius: '20px'}}
        className="px-5 py-2"
      >
        <div style={{width: '95%', margin: '0px auto'}} className="pb-3">
          <StatisticMarketPlace />
          <MarketPlaceTab />
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
