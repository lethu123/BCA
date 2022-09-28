import React, {useState} from 'react'
import {X} from 'react-feather'
import {
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

//component
import InfoBizXu from '../manage-bizxu/InfoBizXu'
import HistoryBizXu from '../manage-bizxu/HistoryBizXu'

const ModalInfoBizXu = ({setInfoBizXu, infoBizXu}) => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  //function
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setInfoBizXu(!infoBizXu)}
    />
  )

  return (
    <div>
      <Modal
        scrollable
        isOpen={infoBizXu}
        toggle={() => setInfoBizXu(!infoBizXu)}
        className="modal-dialog-centered modal-xl"
      >
        <ModalHeader toggle={() => setInfoBizXu(!infoBizXu)} close={CloseBtn}>
          Thông tin gói
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={active === '1'}
                  onClick={() => {
                    toggle('1')
                  }}
                  style={{border: 'none'}}
                >
                  Thông tin gói
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === '2'}
                  onClick={() => {
                    toggle('2')
                  }}
                  style={{border: 'none'}}
                >
                  Lịch sử giao dịch BizXu
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="py-50" activeTab={active}>
              <TabPane tabId="1">
                <InfoBizXu />
              </TabPane>
              <TabPane tabId="2">
                <HistoryBizXu />
              </TabPane>
            </TabContent>
          </PerfectScrollbar>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalInfoBizXu
