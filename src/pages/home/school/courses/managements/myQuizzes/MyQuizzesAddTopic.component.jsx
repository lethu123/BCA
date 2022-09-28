import React from 'react'
import {Row, Button, Card, CardHeader, CardBody} from 'reactstrap'
import {ArrowLeft} from 'react-feather'
import MyQuizzesEditQuestion from './MyQuizzesAddQuestion.component'
import MyQuizzesFormik from './MyQuizzesFormik.component'

const MyQuizzesAddTopic = ({setStatusAdd, editQuestion}) => {
  const handlBack = () => {
    setStatusAdd(false)
  }
  const handleBackFromEdit = () => {
    setStatusAdd(false)
  }
  return (
    <div>
      {!editQuestion ? (
        <div style={{position: 'relative'}}>
          <Card>
            <CardHeader>
              <Row
                style={{
                  justifyContent: 'space-between',
                  margin: 0,
                  width: '100%',
                }}
              >
                <h2 style={{fontSize: '20px', fontWeight: 'bold'}}>
                  {' '}
                  New Topic
                </h2>
                <div className="text-right" style={{display: 'inline'}}>
                  <Button.Ripple outline color="warning" onClick={handlBack}>
                    <ArrowLeft size={16} /> Go back
                  </Button.Ripple>
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              <MyQuizzesFormik setStatusAdd={setStatusAdd} />
            </CardBody>
          </Card>
        </div>
      ) : (
        <MyQuizzesEditQuestion handleBackFromEdit={handleBackFromEdit} />
      )}
    </div>
  )
}

export default MyQuizzesAddTopic
