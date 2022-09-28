import React, {useState} from 'react'
import {
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import './ValueCreation.style.scss'
import classnames from 'classnames'
import CustomerProfile from './CustomerProfile.component'
import {X} from 'react-feather'

const ValueCreationModal = ({toggleModal2, stateModal2}) => {
  const [stateModalValue, setStateModalValue] = useState('1')

  const toggleModalValue = tab => {
    if (stateModalValue !== tab) {
      setStateModalValue(tab)
    }
  }
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => toggleModal2(false)}
    />
  )
  return (
    <Modal
      isOpen={stateModal2}
      toggle={toggleModal2}
      className="modal-dialog-centered modal-xl"
    >
      <ModalHeader toggle={toggleModal2} close={CloseBtn}>
        Value Proposition Canvas Hypotheses
      </ModalHeader>
      <ModalBody>
        <div className="nav-toolbar">
          <Nav pills className="ml-1">
            <NavItem>
              <NavLink
                className={classnames({
                  active: stateModalValue === '1',
                })}
                onClick={() => {
                  toggleModalValue('1')
                }}
                style={{
                  fontSize: '16px',
                  marginRight: '15px',
                }}
              >
                Customer Profile
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={stateModalValue}>
            <TabPane tabId="1">
              <CustomerProfile />
            </TabPane>
          </TabContent>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ValueCreationModal
