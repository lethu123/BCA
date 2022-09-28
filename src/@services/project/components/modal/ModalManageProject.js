import React from 'react'
import {useState} from 'react'
import {Clock, Settings, X} from 'react-feather'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Badge,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

// *** components
import FormManageProject from '../project-info/FormManageProject'
import HistoryManageProject from '../project-info/HistoryManageProject'

const ModalManageProject = ({modalProject, setModalProject}) => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setModalProject(!modalProject)}
    />
  )
  return (
    <div>
      <Modal
        scrollable
        isOpen={modalProject}
        toggle={() => setModalProject(!modalProject)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          toggle={() => setModalProject(!modalProject)}
          close={CloseBtn}
        >
          Thiết lập dự án Thi Phương Insurance{' '}
          <Badge color="danger">Dự án đối tác</Badge>
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Nav className="justify-content-center" tabs>
              <NavItem>
                <NavLink
                  active={active === '1'}
                  onClick={() => {
                    toggle('1')
                  }}
                  style={{border: 'none'}}
                >
                  <Settings size={20} className="mr-2" />
                  Thiết lập dự án
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
                  <Clock size={20} className="mr-2" />
                  Lịch sử chỉnh sửa dự án
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="py-50" activeTab={active}>
              <TabPane tabId="1">
                <FormManageProject
                  setModalProject={setModalProject}
                  modalProject={modalProject}
                />
              </TabPane>
              <TabPane tabId="2">
                <HistoryManageProject />
              </TabPane>
            </TabContent>
          </PerfectScrollbar>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalManageProject
