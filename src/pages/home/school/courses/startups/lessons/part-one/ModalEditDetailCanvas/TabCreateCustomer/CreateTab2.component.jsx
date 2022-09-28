import React, {useState} from 'react'
import {AlertOctagon, Filter, Plus, Search} from 'react-feather'
import {
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap'
import CreateTab2Card from './CreateTab2Card.component'
import ModalNewValue from './ModalCreateCustomerTab2/ModalNewValue.component'
import ModalCreate from './ModalCreateCustomerTab2/ModalCreate.component'
import {uid} from 'uid'
import {toast} from 'react-toastify'
import '../EditDetalCanvas.style.scss'

const PlanningTab2 = () => {
  const listJob = [
    {
      id: 1,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name:
        'the functional, emotional,social jobs your customer need to have done1.',
    },
    {
      id: 2,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name:
        'the functional, emotional,social jobs your customer need to have done2.',
    },
    {
      id: 3,
      time: '22 NOV 2020',
      active: 'invalidated',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name:
        'the functional, emotional,social jobs your customer need to have done3.',
    },
    {
      id: 4,
      time: '22 NOV 2020',
      active: 'testing',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name:
        'the functional, emotional,social jobs your customer need to have done4.',
    },
    {
      id: 5,
      time: '22 NOV 2020',
      active: 'invalidated',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name:
        'the functional, emotional,social jobs your customer need to have done5.',
    },
    {
      id: 6,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name:
        'the functional, emotional,social jobs your customer need to have done6.',
    },
  ]
  const listPain = [
    {
      id: 1,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Pain',
      name:
        'Identify blockages and problems your customers may face trying to get the jobs done1',
    },
    {
      id: 2,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Pain',
      name:
        'Identify blockages and problems your customers may face trying to get the jobs done2',
    },
    {
      id: 3,
      time: '22 NOV 2020',
      active: 'invalidated',
      topic: 'OPPORTUNITY',
      type: 'Pain',
      name:
        'Identify blockages and problems your customers may face trying to get the jobs done3',
    },
    {
      id: 4,
      time: '22 NOV 2020',
      active: 'testing',
      topic: 'OPPORTUNITY',
      type: 'Pain',
      name:
        'Identify blockages and problems your customers may face trying to get the jobs done4',
    },
  ]
  const listGain = [
    {
      id: 1,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Gain',
      name:
        'Describe prositive outcomes the customer expects when the job is getting done1',
    },
    {
      id: 2,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Gain',
      name:
        'Describe prositive outcomes the customer expects when the job is getting done2',
    },
    {
      id: 3,
      time: '22 NOV 2020',
      active: 'invalidated',
      topic: 'OPPORTUNITY',
      type: 'Gain',
      name:
        'Describe prositive outcomes the customer expects when the job is getting done3',
    },
    {
      id: 4,
      time: '22 NOV 2020',
      active: 'testing',
      topic: 'OPPORTUNITY',
      type: 'Gain',
      name:
        'Describe prositive outcomes the customer expects when the job is getting done4',
    },
  ]
  const arrValueMap = [
    {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Pain',
      name: 'Quyeen tester',
    },
    {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Pain',
      name: 'Quyen mad',
    },
  ]
  const arrValueGain = [
    {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Gain',
      name: 'Quyeen cute',
    },
    {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'testing',
      topic: 'OPPORTUNITY',
      type: 'Gain',
      name: 'Quyen validate',
    },
  ]
  const arrValueJob = [
    {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'invalidated',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name: 'Quyeen hotme',
    },
    {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'testing',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name: 'Quyen dethuong',
    },
  ]

  const [listValueMap, setListValueMap] = useState(arrValueMap)
  const [listValueGain, setListValueGain] = useState(arrValueGain)
  const [listValueJob, setListValueJob] = useState(arrValueJob)
  const [listArrMap, setListArrMap] = useState(listPain)
  const [listArrGain, setListArrGain] = useState(listGain)
  const [listArrJob, setListArrJob] = useState(listJob)
  const [valueMap, setValueMap] = useState(arrValueMap)
  const [valueCreate, setValueCreate] = useState('')
  const [arrPain, setArrPain] = useState(listPain)
  const [arrGain, setArrGain] = useState(listGain)
  const [arrJob, setArrJob] = useState(listJob)
  const [valueGain, setValueGain] = useState(arrValueGain)
  const [valueJob, setValueJob] = useState(arrValueJob)
  const toggleModal = () => {
    setModal(!modal)
  }
  const handleRenderCard = value => {
    // setShow(true)
    setModal(false)
    if (value.type === 'Pain') {
      setArrPain([...arrPain, value])
      setListArrMap([...listArrMap, value])
    } else if (value.type === 'Gain') {
      setArrGain([...arrGain, value])
      setListArrGain([...listArrGain, value])
    } else {
      setArrJob([...arrJob, value])
      setListArrJob([...listArrJob, value])
    }
  }
  // const [show, setShow] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal, setModal] = useState(false)
  const [valueSearchCreate, setValueSearchCreate] = useState(null)
  const [valueSearchCreateGain, setValueSearchCreateGain] = useState(null)
  const [valueSearchCreateJob, setValueSearchCreateJob] = useState(null)
  const [valueSearchJob, setValueSearchJob] = useState(null)
  const [valueSearchPain, setValueSearchPain] = useState(null)
  const [valueSearchGain, setValueSearchGain] = useState(null)

  const [addCard, setAddCard] = useState(null)

  const handleFilter = event => {
    if (event.target.value.length > 0 && addCard === 'pain') {
      let arrTmp = listValueMap.filter(item =>
        item.name
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase()),
      )
      setValueMap(arrTmp)
    } else if (event.target.value.length > 0 && addCard === 'gain') {
      let arrTmp = listValueGain.filter(item =>
        item.name
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase()),
      )
      setValueGain(arrTmp)
    } else {
      let arrTmp = listValueJob.filter(item =>
        item.name
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase()),
      )
      setValueJob(arrTmp)
    }
    setValueSearchCreate(event.target.value)
    setValueSearchCreateGain(event.target.value)
    setValueSearchCreateJob(event.target.value)
  }

  const toggleModal2 = () => {
    setModal2(!modal2)
  }
  const handleCreateValueMap = () => {
    toggleModal2()
    let item = {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Pain',
      name: valueCreate,
    }
    let itemGain = {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'validated',
      topic: 'OPPORTUNITY',
      type: 'Gain',
      name: valueCreate,
    }
    let itemJob = {
      id: `a${uid()}`,
      time: '22 NOV 2020',
      active: 'invalidated',
      topic: 'OPPORTUNITY',
      type: 'Job-to-be-done',
      name: valueCreate,
    }
    if (addCard === 'pain') {
      setListValueMap([...listValueMap, item])
      setValueMap([...valueMap, item])
    } else if (addCard === 'gain') {
      setValueGain([...valueGain, itemGain])
      setListValueGain([...listValueGain, itemGain])
    } else {
      setValueJob([...valueJob, itemJob])
      setListValueJob([...listValueJob, itemJob])
    }

    setValueCreate('')
    toast.success('Add Success!')
  }
  const hanldePlus = value => {
    setAddCard(value)
    toggleModal()
  }
  const handleFilterJob = value => {
    if (value.length > 0) {
      let arrTmp = listArrJob.filter(item =>
        item.name.toLowerCase().includes(value.trim().toLowerCase()),
      )
      setArrJob(arrTmp)
    }
    setValueSearchJob(value)
  }
  const handleFilterPain = value => {
    if (value.length > 0) {
      let arrTmp = listArrMap.filter(item =>
        item.name.toLowerCase().includes(value.trim().toLowerCase()),
      )
      setArrPain(arrTmp)
    }
    setValueSearchPain(value)
  }
  const handleFilterGain = value => {
    if (value.length > 0) {
      let arrTmp = listArrGain.filter(item =>
        item.name.toLowerCase().includes(value.trim().toLowerCase()),
      )
      setArrGain(arrTmp)
    }
    setValueSearchGain(value)
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h3> Customer Jobs </h3>
          <AlertOctagon
            id="iconStateProblem"
            size={28}
            className=" fonticon-wrap ml-1"
            color="#fff"
            style={{backgroundColor: '#cccccc', padding: 3}}
          />
        </div>
        <Plus onClick={() => hanldePlus('job')} />
      </div>
      <p>What are customer trying to get gone?</p>
      <InputGroup className="input-group-merge mb-2">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Search size={14} />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Search by Customer Job name..."
          onChange={event => handleFilterJob(event.target.value)}
        />
      </InputGroup>
      <div className="d-flex justify-content-end">
        <Filter />
        <p className="mb-0" style={{fontWeight: 'bold'}}>
          Filter:{' '}
        </p>
        <ul className="d-flex">
          <li className="mr-2" style={{color: '#6EB144'}}>
            Validated
          </li>
          <li className="mr-2">Invalidated</li>
          <li className="mr-2" style={{color: '#ff6700'}}>
            Testing
          </li>
        </ul>
      </div>
      <Row style={{maxHeight: '600px', overflowY: 'scroll'}}>
        {valueSearchJob &&
          arrJob.map(item => {
            return (
              <Col lg={6} key={item.id}>
                <CreateTab2Card item={item} />
              </Col>
            )
          })}
        {!valueSearchJob &&
          listArrJob.map(item => {
            return (
              <Col lg={6} key={item.id}>
                <CreateTab2Card item={item} />
              </Col>
            )
          })}
      </Row>
      <h3>Define Pains/Gains</h3>
      <p>
        When you get started with the customer profile, you might simply put the
        same ideas in pains and gains as opposites of each other.
      </p>
      <Row>
        <Col lg={6}>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h3> Customer Pain </h3>
              <AlertOctagon
                id="iconStateProblem"
                size={28}
                className=" fonticon-wrap ml-1"
                color="#fff"
                style={{backgroundColor: '#cccccc', padding: 3}}
              />
            </div>
            <Plus
              onClick={() => hanldePlus('pain')}
              style={{cursor: 'pointer'}}
            />
          </div>
          <p>What are customer trying to get gone?</p>
          <InputGroup className="input-group-merge mb-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Search by Customer Pain name..."
              onChange={event => handleFilterPain(event.target.value)}
            />
          </InputGroup>
          <div className="d-flex justify-content-end">
            <Filter />
            <p className="mb-0" style={{fontWeight: 'bold'}}>
              Filter:{' '}
            </p>
            <ul className="d-flex">
              <li className="mr-2" style={{color: '#6EB144'}}>
                Validated
              </li>
              <li className="mr-2">Invalidated</li>
              <li className="mr-2" style={{color: '#ff6700'}}>
                Testing
              </li>
            </ul>
          </div>
          <div style={{maxHeight: '600px', overflowY: 'scroll'}}>
            {valueSearchPain &&
              arrPain.map(item => {
                return <CreateTab2Card key={item.id} item={item} />
              })}
            {!valueSearchPain &&
              listArrMap.map(item => {
                return <CreateTab2Card key={item.id} item={item} />
              })}
          </div>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h3> Customer Gain </h3>
              <AlertOctagon
                id="iconStateProblem"
                size={28}
                className=" fonticon-wrap ml-1"
                color="#fff"
                style={{backgroundColor: '#cccccc', padding: 3}}
              />
            </div>
            <Plus
              onClick={() => hanldePlus('gain')}
              style={{cursor: 'pointer'}}
            />
          </div>
          <p>What are customer trying to get gone?</p>
          <InputGroup className="input-group-merge mb-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Search by Customer Gain name..."
              onChange={event => handleFilterGain(event.target.value)}
            />
          </InputGroup>
          <div className="d-flex justify-content-end">
            <Filter />
            <p className="mb-0" style={{fontWeight: 'bold'}}>
              Filter:{' '}
            </p>
            <ul className="d-flex">
              <li className="mr-2" style={{color: '#6EB144'}}>
                Validated
              </li>
              <li className="mr-2">Invalidated</li>
              <li className="mr-2" style={{color: '#ff6700'}}>
                Testing
              </li>
            </ul>
          </div>
          <div style={{maxHeight: '600px', overflowY: 'scroll'}}>
            {valueSearchGain &&
              arrGain.map(item => {
                return <CreateTab2Card key={item.id} item={item} />
              })}
            {!valueSearchGain &&
              listArrGain.map(item => {
                return <CreateTab2Card key={item.id} item={item} />
              })}
          </div>
        </Col>
      </Row>
      <ModalNewValue
        toggleModal={toggleModal}
        modal={modal}
        handleFilter={handleFilter}
        handleRenderCard={handleRenderCard}
        toggleModal2={toggleModal2}
        valueMap={valueMap}
        valueSearchCreate={valueSearchCreate}
        valueSearchCreateGain={valueSearchCreateGain}
        arrValueMap={listValueMap}
        arrValueGain={listValueGain}
        addCard={addCard}
        valueGain={valueGain}
        valueSearchCreateJob={valueSearchCreateJob}
        valueJob={valueJob}
        arrValueJob={listValueJob}
      />
      <ModalCreate
        toggleModal2={toggleModal2}
        modal2={modal2}
        valueCreate={valueCreate}
        setValueCreate={setValueCreate}
        handleCreateValueMap={handleCreateValueMap}
      />
    </div>
  )
}

export default PlanningTab2
