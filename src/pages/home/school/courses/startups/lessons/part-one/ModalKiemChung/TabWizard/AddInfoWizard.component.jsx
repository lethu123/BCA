import React, {useState} from 'react'
import {
  Row,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
  Col,
} from 'reactstrap'
import avatarImg1 from 'assets/images/portrait/small/avatar-s-20.jpg'
import avatarImg2 from 'assets/images/portrait/small/avatar-s-10.jpg'
import avatarImg3 from 'assets/images/portrait/small/avatar-s-11.jpg'
import avatarImg4 from 'assets/images/portrait/small/avatar-s-12.jpg'
import avatarImg5 from 'assets/images/portrait/small/avatar-s-13.jpg'
import * as Icon from 'react-feather'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/light.css'
import '@core/scss/react/libs/flatpickr/flatpickr.scss'
import EditDetalCanvasUploadFile from '../EditDetalCanvasUploadFile.component'
import {uid} from 'uid'

const AddInfoWizard = () => {
  const [humanFriendly, setHumanFriendly] = useState(new Date())
  const optionMember = [
    {id: 1, name: 'Duong Trong Hai', image: avatarImg1},
    {id: 2, name: 'Nguyen Le Gia Huy', image: avatarImg2},
    {id: 3, name: 'Le Tanh Sang', image: avatarImg3},
    {id: 4, name: 'Le thi Thu', image: avatarImg4},
  ]
  const [arrMember, setArrMember] = useState(optionMember)
  const [arrAvatar, setArrAvatar] = useState([
    {id: uid(), image: avatarImg5, name: 'Nguyen Khac Vu'},
  ])
  const handleMember = item => {
    let arrTmp = arrMember.filter(ele => item.id !== ele.id)
    setArrAvatar([...arrAvatar, item])
    setArrMember(arrTmp)
  }
  const [hastag, setHastag] = useState([])
  const [statusAddHastag, setStatusAddHastag] = useState(false)
  const handleAddHastag = () => {
    if (hastag.length < 3) {
      let item = {
        id: Math.random().toString(26).substr(2, 6),
        content: '#hastag',
      }

      setHastag([...hastag, item])
    } else {
      setStatusAddHastag(false)
      setHastag([])
    }
  }
  const hanldeDeleteAvatar = value => {
    setArrMember([...arrMember, value])
    let arrTmpAva = arrAvatar.filter(ele => value.id !== ele.id)
    setArrAvatar(arrTmpAva)
  }
  return (
    <Row
      className="mx-0"
      style={{
        padding: '10px 20px',
        border: '1px solid #FF6700',
        borderRadius: 15,
      }}
    >
      <Col xl={8}>
        <Row
          style={{
            margin: 0,

            alignItems: 'center',
          }}
          className="mx-0"
        >
          <div style={{display: !statusAddHastag ? 'inherit' : 'none'}}>
            <h2
              style={{
                color: '#ff6700',
                fontWeight: 'bold',
                marginRight: 10,
                marginBottom: 0,
              }}
            >
              #
            </h2>
            <Icon.Plus
              size={28}
              className=" fonticon-wrap"
              color="#ff6700"
              style={{cursor: 'pointer'}}
              onClick={() => setStatusAddHastag(true)}
            />
          </div>
          <div style={{display: statusAddHastag ? 'block' : 'none'}}>
            <Button.Ripple
              outline
              color="warning"
              style={{padding: '7px 15px'}}
              onClick={handleAddHastag}
            >
              <span
                style={{
                  fontSize: '23px',
                  color: '#FF6700',
                  fontWeight: 'bold',
                }}
              >
                #
              </span>
              <span style={{fontSize: '13px', marginLeft: '9px'}}>
                Add hastag
              </span>
            </Button.Ripple>
            <span style={{marginLeft: '15px'}}>
              {hastag.map((item, index) => (
                <Badge
                  key={item.id}
                  style={{
                    color: 'white',
                    background: '#FF6700',
                    marginRight: '5px',
                  }}
                >
                  {item.content}
                  {++index}
                </Badge>
              ))}
            </span>
          </div>
        </Row>

        <div>
          <Row className="mx-0 align-items-center mt-2">
            <h3>Due Date</h3>
            <Flatpickr
              className="form-control formDateTime ml-1 w-50"
              value={humanFriendly}
              options={{
                altInput: true,
                altFormat: 'F j, Y',
                dateFormat: 'Y-m-d',
                enableTime: true,
              }}
              style={{border: '1px solid #FF6700'}}
              onChange={date => {
                setHumanFriendly(date)
              }}
            />
          </Row>
          <Row className=" mt-2 member align-items-center" style={{margin: 0}}>
            <h3 className="mr-1">Add Member</h3>

            {arrAvatar.map((item, index) => (
              <div style={{position: 'relative'}} key={item.id}>
                <img
                  src={item.image}
                  alt={item.id}
                  className="img-fluid rounded-circle mr-1"
                  style={{width: '60px'}}
                />
                {index > 0 && (
                  <Icon.XCircle
                    color="#ff6700"
                    size={16}
                    style={{position: 'absolute', top: '0%', right: '15%'}}
                    onClick={() => hanldeDeleteAvatar(item)}
                  />
                )}
              </div>
            ))}
            {arrMember.length > 0 && (
              <div>
                <Icon.Plus color="#ff6700" size={20} className="mr-1" />
                <UncontrolledButtonDropdown style={{borderRadius: 8}}>
                  <DropdownToggle
                    color="primary"
                    outline
                    style={{borderRadius: 8}}
                  >
                    Name Member
                    <Icon.ChevronDown size={15} className="ml-1" />
                  </DropdownToggle>
                  <DropdownMenu style={{width: '250px'}}>
                    {arrMember.map(item => {
                      return (
                        <DropdownItem
                          tag="a"
                          onClick={() => handleMember(item)}
                          key={item.id}
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src={item.image}
                              alt={item.id}
                              className="img-fluid rounded-circle mr-1"
                              style={{width: '40px'}}
                            />
                            <p className="mb-0">{item.name}</p>
                          </div>
                        </DropdownItem>
                      )
                    })}
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
            )}
          </Row>
        </div>
      </Col>

      <Col xl={4}>
        <div style={{marginBottom: 12}}>
          <h3 className="pt-1">Document</h3>
          <EditDetalCanvasUploadFile />
        </div>
      </Col>
    </Row>
  )
}

export default AddInfoWizard
