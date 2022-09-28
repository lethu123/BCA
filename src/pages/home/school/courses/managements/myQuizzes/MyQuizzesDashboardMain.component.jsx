import React, {useState, useEffect} from 'react'
import './MyQuizzes.style.scss'
import {Row, Button, Card, CardBody} from 'reactstrap'
import MyQuizzesCard from './MyQuizzesCard.componennt'
import MyQuizzesAddTopic from './MyQuizzesAddTopic.component'
import {createSelector} from 'reselect'
import {useDispatch, useSelector} from 'react-redux'
import {getListTopicMyQuizzes} from 'redux/actions/hschools/courseAction'

const selectListTopic = createSelector(
  state => state.hSchool,
  course => course.listTopicMyQuizzes,
)

const MyQuizzesDashboardMain = () => {
  const listTopic = useSelector(selectListTopic)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListTopicMyQuizzes())
  }, [dispatch])

  const [edit, setEdit] = useState(false)

  const handleAddTopic = () => {
    setStatusAdd(true)
    setEdit(false)
    dispatch({
      type: 'VALUE_UPDATE_QUESTION',
      payload: null,
    })
  }
  const handleEditCard = () => {
    setStatusAdd(true)
    setEdit(true)
  }

  const [statusAdd, setStatusAdd] = useState(false)
  return (
    <div>
      {!statusAdd ? (
        <div className="myQuizzes">
          <Card style={{background: '#FAFAFA'}}>
            <CardBody>
              <Row
                style={{
                  justifyContent: 'space-between',
                  margin: '15px 0',
                  alignItems: 'center',
                }}
              >
                <h1 style={{fontWeight: 'bold', fontSize: '30px'}}>Quizzes</h1>
                <div>
                  <Button.Ripple
                    outline
                    color="warning"
                    onClick={() => handleAddTopic()}
                    style={{marginLeft: '15px'}}
                  >
                    Add Topic
                  </Button.Ripple>
                </div>
              </Row>
              <Row>
                {listTopic.length > 0 &&
                  listTopic.map(item => (
                    <MyQuizzesCard
                      key={item.id}
                      item={item}
                      handleEditCard={handleEditCard}
                      setStatusAdd={setStatusAdd}
                    />
                  ))}
              </Row>
            </CardBody>
          </Card>
        </div>
      ) : (
        <MyQuizzesAddTopic setStatusAdd={setStatusAdd} editQuestion={edit} />
      )}
    </div>
  )
}

export default MyQuizzesDashboardMain
