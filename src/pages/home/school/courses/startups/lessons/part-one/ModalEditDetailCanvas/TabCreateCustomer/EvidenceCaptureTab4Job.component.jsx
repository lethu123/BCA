import React, {useState} from 'react'
import {Search} from 'react-feather'
import {
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap'
import EvidenceCaptureTab4Card from './EvidenceCaptureTab4Card.component'
import chartImpotant from 'assets/images/ideationStartUpTool/chartImpotant.svg'
import '../EditDetalCanvas.style.scss'

const EvidenceCaptureTab4Job = () => {
  const dataJob = [
    {
      id: 1,
      time: '22 NOV 2020',
      type: 'Job-to-be-done',
      name:
        'The functional, emotional, social jobs your customers need to have done.1',
      progress: 2,
    },
    {
      id: 2,
      time: '22 NOV 2020',
      type: 'Job-to-be-done',
      name:
        'The functional, emotional, social jobs your customers need to have done.2',
      progress: 3.5,
    },
    {
      id: 3,
      time: '22 NOV 2020',
      type: 'Job-to-be-done',
      name:
        'The functional, emotional, social jobs your customers need to have done.3',
      progress: 1.5,
    },
    {
      id: 4,
      time: '22 NOV 2020',
      type: 'Job-to-be-done',
      name:
        'The functional, emotional, social jobs your customers need to have done.4',
      progress: 4.5,
    },
  ]
  const [listJob, setListJob] = useState(dataJob)
  const [searchJob, setSearchJob] = useState(null)
  const [listJobRight, setListJobRight] = useState([])
  const [clickRight, setClickRight] = useState(false)
  const handleFilterJob = value => {
    if (value.length > 0) {
      let arrTmp = dataJob.filter(item =>
        item.name.toLowerCase().includes(value.trim().toLowerCase()),
      )
      setListJob(arrTmp)
    }
    setSearchJob(value)
  }
  const handleClickLeft = () => {
    let arr = dataJob
    let arrSort = arr.sort((a, b) => b.progress - a.progress)
    setListJobRight(arrSort)
    setListJob([])
    setClickRight(true)
  }
  const handleClickRight = () => {
    setClickRight(false)
    setListJobRight([])
  }
  return (
    <div>
      <Row>
        <Col lg={6}>
          <h3 className="text-center">Customer Job Hypotheses</h3>
          <InputGroup className="input-group-merge mb-2 ">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Search by Customer Pain name..."
              onChange={event => handleFilterJob(event.target.value)}
              disabled={clickRight ? true : false}
            />
          </InputGroup>
          <div
            style={{maxHeight: '720px', overflowY: 'scroll'}}
            onClick={handleClickLeft}
          >
            {searchJob &&
              !clickRight &&
              listJob.map(item => (
                <EvidenceCaptureTab4Card item={item} key={item.id} />
              ))}
            {!searchJob &&
              !clickRight &&
              dataJob.map(item => (
                <EvidenceCaptureTab4Card item={item} key={item.id} />
              ))}
          </div>
        </Col>
        <Col lg={6}>
          <Row onClick={handleClickRight}>
            <div
              className="col-10"
              style={{maxHeight: '800px', overflowY: 'scroll'}}
            >
              {listJobRight.map(item => {
                return <EvidenceCaptureTab4Card item={item} key={item.id} />
              })}
            </div>
            <div className="col-2">
              <img
                src={chartImpotant}
                alt="chartImpotant"
                className="img-fluid"
              />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default EvidenceCaptureTab4Job
