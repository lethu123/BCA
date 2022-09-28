//**UI */
import {Button, Card, CardBody} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Plus} from 'react-feather'

//**Component */
import styles from './sidebar.module.css'

import listData from '../data'
import {useHistory} from 'react-router-dom'

const GroupMainSideBar = () => {
  const history = useHistory()
  return (
    <>
      <Card className="pt-2 p-2 rounded w-100">
        <PerfectScrollbar>
          <CardBody className={`${styles.custom_cardBody}`}>
            <Button
              onClick={() => history.push(`/v1/group/create-group`)}
              className="mt-1 w-100"
              color="primary-1"
            >
              <Plus size={24} className="me-1" /> Create New Group
            </Button>
            <div className="border-bottom py-2 mb-2">
              <p className="title-20">Nhóm do bạn quản lý</p>
              <ul className="p-0 mt-2">
                {listData.map(item => (
                  <li className="mb-2" key={item.id}>
                    <div className="d-flex align-items-center p-0 w-100 justify-content-between position-relative">
                      <div className="ms-1 d-flex align-items-center w-100">
                        <div style={{width: '45px', height: '45px'}}>
                          <img
                            src={item.avt}
                            alt={item.name}
                            className="rounded-circle w-100 h-100"
                          />
                        </div>
                        <div
                          style={{width: 'calc(100% - 60px)'}}
                          className="ml-auto"
                        >
                          <p className="mb-0">{item.name}</p>
                          <p className="mb-0">Lần hoạt động gần nhất : 1h10p</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="title-20">Nhóm do bạn đã tham gia</p>
              <ul className="p-0 mt-2">
                {listData.map(item => (
                  <li className="mb-2" key={item.id}>
                    <div className="d-flex align-items-center p-0 w-100 justify-content-between position-relative">
                      <div className="ms-1 d-flex align-items-center">
                        <div style={{width: '45px', height: '45px'}}>
                          <img
                            src={item.avt}
                            alt={item.name}
                            className="rounded-circle w-100 h-100"
                          />
                        </div>
                        <div
                          style={{width: 'calc(100% - 60px)'}}
                          className="ml-auto"
                        >
                          <p className="mb-0">{item.name}</p>
                          <p className="mb-0">Lần hoạt động gần nhất : 1h10p</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </PerfectScrollbar>
      </Card>
    </>
  )
}

export default GroupMainSideBar
