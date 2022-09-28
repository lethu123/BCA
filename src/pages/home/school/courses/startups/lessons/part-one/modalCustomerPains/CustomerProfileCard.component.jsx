import React from 'react'
import person1 from 'assets/images/portrait/small/avatar-s-1.jpg'
import person2 from 'assets/images/portrait/small/avatar-s-2.jpg'
import interrelationsIcon from 'assets/images/ideationStartUpTool/interrelations-icon.png'
import valueInactive from 'assets/images/ideationStartUpTool/value-inactive.svg'
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  UncontrolledTooltip,
} from 'reactstrap'
import {useHistory} from 'react-router-dom'

const CustomerProfileCard = ({item}) => {
  const history = useHistory()
  const handleClickCard = item => {
    switch (item.typeName) {
      case 'Job-to-be-done':
        history.push(
          '/hStartup/startup/ideation/vlcHypotheses/modal-customer-job',
        )
        break
      case 'Pain':
        history.push('/hStartup/startup/ideation/vlcHypotheses/modal-pain')
        break
      case 'Gain':
        history.push('/hStartup/startup/ideation/vlcHypotheses/modal-gain')
        break

      default:
        break
    }
  }
  return (
    <div>
      <Card
        onClick={() => handleClickCard(item)}
        style={{cursor: 'pointer', marginLeft: '20px', marginRight: '20px'}}
      >
        <CardHeader>
          <Col style={{padding: 0}}>
            <p style={{color: 'gray', fontSize: 12, margin: 0}}>{item.time}</p>
          </Col>
          <Col>
            <Row
              style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <img
                src={interrelationsIcon}
                alt="interrelationsIcon"
                className="mr-1 img-fluid"
              />

              <p
                id={`Value${item.id}`}
                style={{
                  backgroundColor: '#ff6700',
                  width: '20px',
                  height: '20px',
                  margin: 0,
                  borderRadius: '50%',
                  border: '5px solid #FFEFE5',
                }}
              ></p>
              <UncontrolledTooltip
                placement="bottom"
                target={`Value${item.id}`}
                autohide={false}
                hideArrow={true}
                style={{
                  background: 'none',
                  color: '#ff6700',
                  fontWeight: 'normal',
                  cursor: 'context-menu',
                }}
              >
                testing
              </UncontrolledTooltip>
            </Row>
          </Col>
        </CardHeader>
        <CardBody
          className="pb-0"
          style={{paddingTop: '10px', minHeight: '130px'}}
        >
          <div className="pb-1 d-flex align-items-center">
            <img
              src={valueInactive}
              alt="ideaIcon"
              className="mr-1 img-fluid"
              style={{width: '25px'}}
            />
            <p
              className=" mb-0"
              style={{fontWeight: 'bold', textTransform: 'uppercase'}}
            >
              {item.type}
            </p>
          </div>

          <div>
            <p style={{fontSize: 16, fontWeight: 'bold', marginBottom: 0}}>
              {item.typeName} :{' '}
              <span
                style={{
                  fontSize: 16,
                  marginBottom: 0,
                  fontWeight: 'normal',
                }}
              >
                {item.name}
              </span>
            </p>
          </div>
        </CardBody>
        <CardFooter
          style={{
            borderTop: 'none',
            backgroundColor: 'white',
            paddingTop: '5px',
          }}
        >
          <Row
            style={{
              justifyContent: 'space-between',
              padding: '0px 13px',
            }}
          >
            <div style={{marginTop: '10px'}}>
              <Badge className="badge-glow  badge-primary mr-2" color="#ff6700">
                #hastag1
              </Badge>
              <Badge className="badge-glow  badge-primary" color="#ff6700">
                #hastag2
              </Badge>
            </div>
            <div className="ml-2 avatarHypotheses">
              <ul className="list-unstyled users-list m-0 d-flex">
                <li
                  className="avatar pull-up m-0"
                  style={{background: 'transparent'}}
                >
                  <img src={person1} alt="avatar" height="30" width="30" />
                </li>
                <li
                  className="avatar pull-up m-0"
                  style={{background: 'transparent'}}
                >
                  <img src={person2} alt="avatar" height="30" width="30" />
                </li>
              </ul>
            </div>
          </Row>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CustomerProfileCard
