import {useState} from 'react'

import {TabContent, TabPane, Nav, NavItem, NavLink, Label} from 'reactstrap'

const ProfileAbout = ({data}) => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <div className="nav-vertical">
      <Nav tabs className="nav-left">
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Tổng quát
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Công việc và học vấn
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '3'}
            onClick={() => {
              toggle('3')
            }}
          >
            Nơi từng sống
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '4'}
            onClick={() => {
              toggle('4')
            }}
          >
            Thông tin liên hệ và cơ bản
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '5'}
            onClick={() => {
              toggle('5')
            }}
          >
            Gia đình và các mối quan hệ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '6'}
            onClick={() => {
              toggle('6')
            }}
          >
            Chi tiết về {data.username}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '7'}
            onClick={() => {
              toggle('7')
            }}
          >
            Sự kiện trong đời
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId="1">
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/2b4AYlZqdlw.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">Không có nơi làm việc để hiển thị</Label>
          </div>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/_kTTuiBidlL.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">
              Đã học tại THPT Nguyễn Huệ TP.Vũng Tàu
            </Label>
          </div>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/HNzy6p26p_d.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">Sống tại Vũng Tàu</Label>
          </div>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/aw-eU53JG-u.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">Đến từ Vũng Tàu</Label>
          </div>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/iUBrJ7osqwj.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">
              Không có thông tin mối quan hệ nào để hiển thị
            </Label>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <h6 className="mt-3">Công Việc</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/2b4AYlZqdlw.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">Không có nơi làm việc để hiển thị</Label>
          </div>
          <h6 className="mt-3">Đại học</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/_kTTuiBidlL.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">
              Đã học tại THPT Nguyễn Huệ TP.Vũng Tàu
            </Label>
          </div>
          <h6 className="mt-3">Trường trung học</h6>
          <div className="mt-5">
            <img
              src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.18169-1/c16.0.100.100a/p100x100/1000740_586140391421748_651924693_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=OjQI_fypJkQAX-aq4xc&_nc_ht=scontent.fhan3-4.fna&oh=00_AT_P_XHPdD1T04fEZciZhehsXw7-CVcg5Sz30qstqdsWxA&oe=6204E3B4"
              height="40"
              width="40"
              alt=""
            />
            <Label className="ml-3">
              Đã học tại THPT Nguyễn Huệ TP.Vũng Tàu
            </Label>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <h6 className="mt-3">Nơi từng sống</h6>
          <div className="mt-5">
            <img
              src="https://d25tv1xepz39hi.cloudfront.net/2017-12-12/files/eos-6d-mark-ii-sample-image_1723-1.jpg"
              height="40"
              width="40"
              alt=""
            />{' '}
            Vũng Tàu
          </div>
        </TabPane>
        <TabPane tabId="4">
          <h6 className="mt-3">Thông tin liên hệ cơ bản</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/-4WTE54LPlQ.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">
              Không có thông tin liên hệ nào để hiển thị
            </Label>
          </div>
          <h6 className="mt-3">Các trang web và liên kết xã hội</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/818_smvA4S2.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">Không có liên kết để hiển thị</Label>
          </div>
          <h6 className="mt-3">Thông tin cơ bản</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/qXTmWu_dlXK.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">Nam</Label>
          </div>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/fzYWd7dALbn.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">10 tháng 10</Label>
          </div>
        </TabPane>
        <TabPane tabId="5">
          <h6 className="mt-3">Mối quan hệ</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/iUBrJ7osqwj.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">
              Không có thông tin mối quan hệ nào để hiển thị
            </Label>
          </div>
          <h6 className="mt-3">Mối quan hệ</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/1V4mKJoU7m_.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">
              Không có thành viên gia đình nào để hiển thị
            </Label>
          </div>
        </TabPane>
        <TabPane tabId="6">
          <h6 className="mt-3">Giới thiệu về {data.username}</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/L4Asply86_Q.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">
              Không có chi tiết nào khác để hiển thị
            </Label>
          </div>
          <h6 className="mt-3">Cách phát âm tên</h6>
          <div className="mt-5">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/J3FbIqp275E.png"
              height="24"
              width="24"
              alt=""
            />
            <Label className="ml-3">Không có cách đọc tên để hiển thị</Label>
          </div>
          <h6 className="mt-3">Các tên khác</h6>
          <div className="mt-5">
            <Label className="ml-3">Không có tên khác để hiển thị</Label>
          </div>
        </TabPane>
        <TabPane tabId="7"></TabPane>
      </TabContent>
    </div>
  )
}

export default ProfileAbout
