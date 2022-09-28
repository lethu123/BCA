import React, {useState} from 'react'
import classnames from 'classnames'
import * as Icon from 'react-feather'
import {
  Button,
  Col,
  CustomInput,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap'
import './EditDetalCanvas.style.scss'
import {useHistory} from 'react-router-dom'
import iconHypothese from 'assets/images/ideationStartUpTool/hypothesis-icon.svg'

const EditDetalCanvasHeader = props => {
  let history = useHistory()
  const handleBackModal = () => {
    history.goBack()
  }

  const [switchNew, setSwitchNew] = useState(false)

  const toggle = tab => {
    if (props.active !== tab) {
      props.setActive(tab)
    }
  }

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const handleClickShare = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const [dropdownOpenMore, setDropdownOpenMore] = useState(false)
  const handleClickShareMore = () => {
    setDropdownOpenMore(!dropdownOpenMore)
  }
  const hanldeChangeSwitch = () => {
    setSwitchNew(!switchNew)
  }
  return (
    <Row className="w-100 mx-0">
      <Col md="6" className="text-left pb-1 pb-lg-0">
        <Row
          style={{
            alignItems: 'center',
            padding: '0 15px',
            justifyContent: 'space-between',
          }}
        >
          <Row className="mx-0">
            <img
              src={iconHypothese}
              alt="hypotheses"
              className="img-fluid mr-1"
            />
            <div>
              <p style={{color: 'white', fontSize: 16, marginBottom: 0}}>
                Customer Profile
              </p>
              <h4
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  letterSpacing: 1.5,
                  marginBottom: 0,
                }}
              >
                Customer Profile: Customer Proplem FIT
              </h4>
            </div>
          </Row>
        </Row>
      </Col>

      <Col md="6">
        <Row className="mx-0 justify-content-between align-items-center">
          <CustomInput
            type="switch"
            id="exampleCustomSwitch"
            name="customSwitch"
            inline
            className="switchIdeation  d-none d-xl-block"
            onChange={hanldeChangeSwitch}
          >
            <span
              className="ml-0 ml-md-1"
              style={{color: switchNew ? '#fff' : '#888888'}}
            >
              {switchNew ? 'Active' : 'Completed'}
            </span>
          </CustomInput>
          <div className="custom-header-modal-right">
            <Button.Ripple color="primary" className="p-1 mr-0 mr-lg-1 ">
              Update
            </Button.Ripple>

            <Dropdown isOpen={dropdownOpen} style={{display: 'inline-block'}}>
              <DropdownToggle className="p-0">
                <div
                  className="mr-0   p-1"
                  color="light"
                  onClick={handleClickShare}
                >
                  <Icon.Share2
                    size={14}
                    style={{color: '#426A29', marginRight: 3}}
                  />
                  <span
                    className="align-middle"
                    style={{color: '#426A29', fontWeight: 'bold'}}
                  >
                    Share
                  </span>
                </div>
              </DropdownToggle>
              <DropdownMenu style={{backgroundColor: 'white'}}>
                <DropdownItem
                  // onClick={() => handleClickDropdownItem('1')}
                  className="dropdownItem"
                  style={{outline: 'none'}}
                >
                  <Icon.Share size={18} className="mr-1 fonticon-wrap" />
                  Share to KPIs
                </DropdownItem>
                <DropdownItem
                  // onClick={() => handleClickDropdownItem('2')}
                  className="dropdownItem"
                  style={{outline: 'none'}}
                >
                  <Icon.Facebook size={18} className="mr-1 fonticon-wrap" />
                  Share to Facebook
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              isOpen={dropdownOpenMore}
              style={{display: 'inline-block'}}
            >
              <DropdownToggle
                caret
                className="p-0 m-0 dropdownMore custom-dropdown-more-header-right"
                style={{
                  cursor: 'revert',
                  justifyContent: 'center',
                }}
              >
                <Icon.MoreVertical
                  size={28}
                  className="mx-0 mx-lg-1 fonticon-wrap "
                  color="gray"
                  style={{cursor: 'pointer'}}
                  onClick={handleClickShareMore}
                />
              </DropdownToggle>
              <DropdownMenu style={{backgroundColor: 'white'}}>
                <DropdownItem
                  // onClick={() => handleClickDropdownItem('1')}
                  className="dropdownItem"
                  style={{outline: 'none'}}
                >
                  <Icon.File size={18} className="mr-1 fonticon-wrap" />
                  Duplicate Hypothesis
                </DropdownItem>
                <DropdownItem
                  // onClick={() => handleClickDropdownItem('2')}
                  className="dropdownItem"
                  style={{outline: 'none'}}
                >
                  <Icon.Delete size={18} className="mr-1 fonticon-wrap" />
                  Delete Hypothesis
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Nav pills style={{display: 'inline-flex', marginBottom: '0px'}}>
              <NavItem className="modalStartUpTool">
                <NavLink
                  className={classnames({
                    active: props.active === '1',
                  })}
                  onClick={() => {
                    toggle('1')
                  }}
                >
                  <Icon.AlertOctagon size={24} className="fonticon-wrap" />
                </NavLink>
              </NavItem>
              <NavItem
                className="modalStartUpTool mr-0 mr-lg-1 pr-0 pr-lg-1"
                style={{borderRight: '2px solid #babfc7'}}
              >
                <NavLink
                  className={classnames({
                    active: props.active === '2',
                  })}
                  onClick={() => {
                    toggle('2')
                  }}
                >
                  <Icon.MessageSquare size={24} className="fonticon-wrap" />
                </NavLink>
              </NavItem>
            </Nav>
            <Icon.X
              size={42}
              className=" fonticon-wrap "
              style={{
                backgroundColor: '#D3D3D3',
                color: '#fff',
                borderRadius: '50%',
                padding: 8,
                cursor: 'pointer',
              }}
              onClick={handleBackModal}
            />
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default EditDetalCanvasHeader
