import React, {useState} from 'react'
import {
  Col,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  Input,
  Row,
} from 'reactstrap'
import Green from 'assets/images/ideationStartUpTool/green-active.svg'
import Red from 'assets/images/ideationStartUpTool/red-active.svg'
import Purple from 'assets/images/ideationStartUpTool/purple-active.svg'
import GreenDark from 'assets/images/ideationStartUpTool/green-dark.svg'
import RedDark from 'assets/images/ideationStartUpTool/red-dark.svg'
import PurpleDark from 'assets/images/ideationStartUpTool/purple-dark.svg'
import {Plus, Search} from 'react-feather'
import CustomerProfileCard from './CustomerProfileCard.component'
import './ValueCreation.style.scss'
import {useHistory} from 'react-router'
const CustomerProfile = () => {
  const history = useHistory()
  const dataCustomer = [
    {
      id: 1,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Job-to-be-done',
      name:
        'the functional, emotional, social jobs your customers need to have done.',
    },
    {
      id: 2,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Job-to-be-done',
      name:
        'the functional, emotional, social jobs your customers need to have done.',
    },
    {
      id: 3,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Job-to-be-done',
      name:
        'the functional, emotional, social jobs your customers need to have done.',
    },
    {
      id: 4,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Job-to-be-done',
      name:
        'the functional, emotional, social jobs your customers need to have done.',
    },
  ]
  const dataPains = [
    {
      id: 1,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Pain',
      name:
        'Identify blockages and problems your customers may face trying to get the jobs done',
    },
    {
      id: 2,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Pain',
      name:
        'Identify blockages and problems your customers may face trying to get the jobs done',
    },
    {
      id: 3,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Pain',
      name:
        'Identify blockages and problems your customers may face trying to get the jobs done',
    },
    {
      id: 4,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Pain',
      name:
        'Identify blockages and problems your customers may face trying to get the jobs done',
    },
  ]
  const dataGains = [
    {
      id: 1,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Gain',
      name:
        'Describe positive outcomes the customer expects when the job is getting done',
    },
    {
      id: 2,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Gain',
      name:
        'Describe positive outcomes the customer expects when the job is getting done',
    },
    {
      id: 3,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Gain',
      name:
        'Describe positive outcomes the customer expects when the job is getting done',
    },
    {
      id: 4,
      time: '22 NOV 2020',
      type: 'OPPORTUNITY',
      typeName: 'Gain',
      name:
        'Describe positive outcomes the customer expects when the job is getting done',
    },
  ]
  const [activeCus, setActiveCus] = useState('Pain')
  const handleCustomer = value => {
    if (value === activeCus) {
      if (value === 'Pain') {
        history.push('/hStartup/startup/ideation/modal-problemsolutionfit')
      } else {
        history.push(
          '/hStartup/startup/ideation/ideation/problem/modal-problem-completed',
        )
      }
    }
    setActiveCus(value)
  }
  return (
    <div className="customer">
      <Row className="w-100">
        <Col xl={6}>
          <div
            style={{
              position: 'relative',
              minWidth: '600px',
              minHeight: '400px',
            }}
            className="px-0 px-xl-2 gridIdeation"
          >
            <div style={{position: 'relative'}} className="gridOne">
              <img
                src={activeCus === 'Gain' ? Green : GreenDark}
                alt="Gain"
                className="img-fluid"
                style={{cursor: 'pointer'}}
                onClick={() => handleCustomer('Gain')}
              />
              <p
                style={{
                  marginBottom: '0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff',
                  position: 'absolute',
                  top: '52%',
                  right: '42%',
                  cursor: 'pointer',
                }}
                onClick={() => handleCustomer('Gain')}
              >
                Gain
              </p>
              <p
                style={{
                  marginBottom: '0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff',
                  position: 'absolute',
                  bottom: '6%',
                  right: '35%',
                  cursor: 'pointer',
                }}
                onClick={() => handleCustomer('Gain')}
              >
                3
              </p>
            </div>

            <div style={{position: 'relative'}} className="gridTwo">
              <img
                src={activeCus === 'Pain' ? Red : RedDark}
                alt="Gain"
                className="img-fluid"
                style={{
                  cursor: 'pointer',
                  marginTop: '5px',
                }}
                onClick={() => handleCustomer('Pain')}
              />
              <p
                style={{
                  marginBottom: '0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff',
                  position: 'absolute',
                  top: '53%',
                  right: '40%',
                  cursor: 'pointer',
                }}
                onClick={() => handleCustomer('Pain')}
              >
                Pains
              </p>
              <p
                style={{
                  marginBottom: '0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff',
                  position: 'absolute',
                  top: '6%',
                  right: '35%',
                  cursor: 'pointer',
                }}
                onClick={() => handleCustomer('Pain')}
              >
                2
              </p>
            </div>
            <div className="gridAbsolute">
              <img
                src={activeCus === 'Job' ? Purple : PurpleDark}
                alt="Gain"
                className="img-fluid imgAbsolute"
                style={{
                  position: 'absolute',
                  top: '8%',
                  right: '21%',
                  cursor: 'pointer',
                }}
                onClick={() => handleCustomer('Job')}
              />
              <p
                className="nameAbsolute"
                style={{
                  marginBottom: '0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff',
                  position: 'absolute',
                  top: '54%',
                  right: '26%',
                  cursor: 'pointer',
                }}
                onClick={() => handleCustomer('Job')}
              >
                Customer Job(s)
              </p>
              <p
                className="numberAbsolute"
                style={{
                  marginBottom: '0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff',
                  position: 'absolute',
                  top: '48%',
                  right: '52%',
                  cursor: 'pointer',
                }}
                onClick={() => handleCustomer('Job')}
              >
                1
              </p>
            </div>
          </div>

          <h4 className="ml-2" style={{color: '#6EB144'}}>
            Customer Profile
          </h4>
          <p className="ml-2" style={{lineHeight: '30px'}}>
            Firstly, start with the part responsible for the customer profile.
            The circle is cut into three pieces where you have to define tasks
            and expectations the customers are going to fulfill, as well as
            positive and negative experiences associated therewith. You do not
            deal with the product now but only with the end user’s challenges.
          </p>
        </Col>
        <Col xl={6}>
          <div className="d-flex justify-content-between">
            <h3>Pains</h3>
            <Plus />
          </div>
          <p>
            {activeCus === 'Gain' && 'What does success look like?'}
            {activeCus === 'Pain' && 'What does failure look like?'}
            {activeCus === 'Job' && 'What are customers trying to get gone?'}
          </p>
          <InputGroup className="input-group-merge mb-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="search..." />
          </InputGroup>
          <div
            style={{
              maxHeight: '700px',
              minHeight: '700px',
              overflowY: 'scroll',
            }}
          >
            {activeCus === 'Job' &&
              dataCustomer.map(item => (
                <CustomerProfileCard item={item} key={item.id} />
              ))}
            {activeCus === 'Pain' &&
              dataPains.map(item => (
                <CustomerProfileCard item={item} key={item.id} />
              ))}
            {activeCus === 'Gain' &&
              dataGains.map(item => (
                <CustomerProfileCard item={item} key={item.id} />
              ))}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CustomerProfile
