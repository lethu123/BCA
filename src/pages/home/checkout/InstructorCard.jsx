import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Collapse,
  Media,
  Button,
  Badge,
} from 'reactstrap'
import {
  ChevronDown,
  X,
  Briefcase,
  Facebook,
  Instagram,
  Star,
  Twitter,
} from 'react-feather'
import classnames from 'classnames'

import {history} from 'utility/history'

class CardActions extends React.Component {
  state = {
    collapse: true,
    reload: false,
    isVisible: true,
    status: 'Opened',
    isVisibleAll: true,
    reloadAll: false,
    collapseAll: true,
    statusAll: 'Opened',
    collapseId: null,
    isOpen: false,
  }

  refreshCard = () => {
    this.setState({reload: true})
    setTimeout(() => {
      this.setState({reload: false})
    }, 2000)
  }
  refreshCardAll = () => {
    this.setState({reloadAll: true})
    setTimeout(() => {
      this.setState({reloadAll: false})
    }, 2000)
  }

  toggle = () => {
    this.setState(state => ({collapse: !state.collapse}))
  }
  toggleAll = () => {
    this.setState(state => ({collapseAll: !state.collapseAll}))
  }
  onEntered = () => {
    this.setState({status: 'Opened'})
  }
  onEnteredAll = () => {
    this.setState({status: 'Opened'})
  }

  onEntering = () => {
    this.setState({status: 'Opening...'})
  }
  onEnteringAll = () => {
    this.setState({statusAll: 'Opening...'})
  }

  onEnteredAll = () => {
    this.setState({statusAll: 'Opened'})
  }

  onExited = () => {
    this.setState({status: 'Closed'})
  }

  onExiting = () => {
    this.setState({status: 'Closing...'})
  }

  onExitingAll = () => {
    this.setState({statusAll: 'Closing...'})
  }
  onExitedAll = () => {
    this.setState({statusAll: 'Closed'})
  }

  removeCard = () => {
    this.setState({isVisible: false})
  }
  removeCardAll = () => {
    this.setState({isVisibleAll: false})
  }

  render() {
    let instructors = this.props.instructors

    return (
      <React.Fragment>
        <Row style={{width: '100%'}}>
          {instructors.length > 0 &&
            instructors.map(ele => (
              <Col sm={12} key={ele.id}>
                <Card
                  className={classnames('card-action card-reload ', {
                    refreshing: this.state.reloadAll,
                    'card-collapsed':
                      this.state.collapseId === ele.id && this.state.isOpen,
                    closing:
                      this.state.collapseId === ele.id && this.state.isOpen,
                    opening:
                      this.state.collapseId === ele.id && this.state.isOpen,
                  })}
                >
                  <CardHeader
                    style={{padding: '0.5rem'}}
                    className="cursor-pointer"
                    onClick={() =>
                      this.setState({
                        collapseId: ele.id,
                        isOpen: !this.state.isOpen,
                      })
                    }
                  >
                    <CardTitle>
                      <Media>
                        <Media left href="#">
                          <Media
                            object
                            src={ele.avatar}
                            height="32"
                            width="32"
                            alt="Generic placeholder image"
                            className="rounded-circle mr-50"
                          />
                        </Media>
                        <Media
                          body
                          style={{alignSelf: 'center'}}
                          className="text-bold-600 cursor-pointer"
                        >
                          <Media
                            onClick={() =>
                              history.push(
                                `/hschool/instructor/${ele.id}/detail`,
                              )
                            }
                          >
                            {ele.username}
                          </Media>
                        </Media>
                      </Media>
                    </CardTitle>
                    <div className="actions">
                      <ChevronDown className="collapse-icon mr-50" size={15} />

                      <X
                        size={15}
                        onClick={() =>
                          this.props.handleRemoveInstructor(
                            instructors.filter(ele1 => ele1.id !== ele.id),
                            ele.id,
                          )
                        }
                      />
                    </div>
                  </CardHeader>
                  <Collapse
                    isOpen={
                      this.state.collapseId === ele.id && this.state.isOpen
                    }
                  >
                    <CardBody style={{borderRight: 'unset'}}>
                      <div>
                        <CardBody
                          className="text-center"
                          style={{borderRight: 'unset'}}
                        >
                          <h4
                            className="text-bold-600 cursor-pointer"
                            onClick={() =>
                              history.push(`/user/${ele.url}/profile`)
                            }
                          >
                            {ele.short_bio}
                          </h4>
                          <p>{ele.email}</p>
                          <p>
                            {ele.skills.length > 0 ? (
                              ele.skills.map(data => (
                                <Badge
                                  key={data.id}
                                  pill
                                  className="badge-glow mr-50"
                                  style={{
                                    backgroundColor: 'rgba(83, 105, 248, 0.6)',
                                  }}
                                >
                                  {data.name}
                                </Badge>
                              ))
                            ) : (
                              <Badge
                                pill
                                className="badge-glow"
                                style={{
                                  backgroundColor: 'rgba(83, 105, 248, 0.6)',
                                }}
                              >
                                Development
                              </Badge>
                            )}
                          </p>
                          <div>
                            <Badge
                              style={{backgroundColor: '#0676E8'}}
                              className="mr-1 mb-1 cursor-pointer"
                            >
                              <Facebook size={12} />
                            </Badge>
                            <Badge
                              style={{backgroundColor: '#E53880'}}
                              className="mr-1 mb-1 cursor-pointer"
                            >
                              <Instagram size={12} />
                            </Badge>
                            <Badge
                              style={{backgroundColor: '#51A9EC'}}
                              className="mr-1 mb-1 cursor-pointer"
                            >
                              <Twitter size={12} />
                            </Badge>
                          </div>
                          <div className="card-btns d-flex justify-content-between">
                            <Button.Ripple className="gradient-light-primary">
                              Follow
                            </Button.Ripple>
                            <Button.Ripple
                              color="primary"
                              outline
                              onClick={() =>
                                history.push(
                                  `/hschool/instructor/${ele.id}/detail`,
                                )
                              }
                            >
                              Profile
                            </Button.Ripple>
                          </div>
                          <hr className="my-2" />
                          <div className="card-btns d-flex justify-content-between">
                            <div className="float-left">
                              <Star size="15" className="warning" />
                              <span className="ml-50 align-middle">
                                {ele.rating.toFixed(1)}
                              </span>
                            </div>
                            <div className="float-right">
                              <Briefcase size="15" className="primary" />
                              <span className="ml-50 align-middle">
                                {ele.c_course + 1} Courses
                              </span>
                            </div>
                          </div>
                        </CardBody>
                      </div>
                    </CardBody>
                  </Collapse>
                </Card>
              </Col>
            ))}
        </Row>
      </React.Fragment>
    )
  }
}
export default CardActions
