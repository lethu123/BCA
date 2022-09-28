import React, {useState} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import {MoreHorizontal} from 'react-feather'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import moment from 'moment'
import {
  deleteTopicMyQuizzes,
  getQuestionMyQuizzes,
} from 'redux/actions/hschools/courseAction'
import "./MyQuizzesCard.style.scss"
const MyQuizzesCard = props => {
  const dispatch = useDispatch()
  let history = useHistory()
  const item = props.item
  const handleDetailQuestion = () => {
    dispatch(getQuestionMyQuizzes())
    history.push(`/hschool/dashboard/my-quizzes/detail-question/${item.id}`)
  }

  const [dropdownOpen, setDropdown] = useState(false)
  const toggleDropdown = () => {
    setDropdown(!dropdownOpen)
  }
  const handleEditCard = item => {
    props.setStatusAdd(true)
    dispatch({
      type: 'VALUE_UPDATE_QUESTION',
      payload: {
        data: item,
        id: item.id,
      },
    })
  }
  const handleDelete = item => {
    dispatch(deleteTopicMyQuizzes(item.id))
  }
  return (
    <Col lg="6">
      <Card style={{cursor: 'pointer', borderRadius: '10px'}}>
        <CardBody onClick={() => handleDetailQuestion()}>
          <Row
            style={{
              justifyContent: 'space-between',
              margin: '0 0 11px',
            }}
          >
            <div>
              <Row>
                <img
                  src={item.picture_url}
                  alt="image_topic"
                  style={{width: 110, height: 110, borderRadius: '8px'}}
                />
                <div style={{marginLeft: 15, marginTop: 15}}>
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontSize: 17,
                      marginBottom: 15,
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'black',
                      width: 500,
                      margin: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Course: {item.course_info.name}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'black',
                      width: 450,
                      // minHeight: 60,
                      marginBottom: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      margin: 0,
                      // text-overflow: ellipsis;
                      // white-space: nowrap;
                    }}
                  >
                    Module: {item.module_info.name}
                  </p>
                  <p style={{color: 'gray', fontSize: 14}}>
                    Date created:{' '}
                    {moment(item.datetime_created).format('YYYY-MM-DD')}
                  </p>
                </div>
              </Row>
            </div>
          </Row>
        </CardBody>
        <CardFooter className="p-0 myQuizzesCard" style={{background: 'white'}}>
          <div>
            <Row
              style={{
                justifyContent: 'flex-end',
                margin: '7px 20px',
              }}
            >
              <div className="dropdown">
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle color="flat-primary" caret>
                    <MoreHorizontal size={18} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      tag="a"
                      onClick={() =>
                        history.push(
                          `/hschool/course/dashboard/my-quizzes/add-question/${item.id}`,
                        )
                      }
                      style={{color:'black'}}
                    >
                      Add Question
                    </DropdownItem>
                    <DropdownItem tag="a" onClick={() => handleEditCard(item)}>
                      Edit
                    </DropdownItem>
                    <DropdownItem tag="a" onClick={() => handleDelete(item)}>
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
            </Row>
          </div>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default MyQuizzesCard
