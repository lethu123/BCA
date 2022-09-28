import React, {useEffect, useState} from 'react'
import {Button, CardHeader, CardBody, Card} from 'reactstrap'
// import Checkbox from '../../../../../../theme/components/@vuexy/checkbox/CheckboxesVuexy'
import Checkbox from 'components/checkbox/CheckboxesVuexy'
import {Row} from 'reactstrap'
import {Check, ArrowLeft} from 'react-feather'
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {createSelector} from 'reselect'
// import {updateTopicMyQuizzes} from 'redux/actions/hschools/courseAction'

const listQuestion = createSelector(
  state => state.hSchool,
  course => course.listQuestionMyQuizzes,
)
const listTopic = createSelector(
  state => state.hSchool,
  course => course.listTopicMyQuizzes,
)
const QuestionMyQuizzed = () => {
  const [listDataFilter, setListDataFilter] = useState([])
  const [arrSubmit, setArrSubmit] = useState([])
  const param = useParams()
  const listData = useSelector(listQuestion)
  const listDataTopic = useSelector(listTopic)
  const dispatch = useDispatch()
  let history = useHistory()
  const [checkNull, setArrCheckNull] = useState([])
  useEffect(() => {
    if (listData) {
      let arrTmp = listData.filter(
        item => item.topic === parseInt(param.id) && item.is_answer === false,
      )
      setListDataFilter(arrTmp)
      let arrCheckNull = listData.filter(
        item => item.topic === parseInt(param.id),
      )
      setArrCheckNull(arrCheckNull)
    }
  }, [listData])

  const [number, setNumber] = useState(0)
  const [disableSubmit, setDisableSubmit] = useState(false)

  const handleChooseAnswer = (value, question) => {
    let objTmp = listDataFilter[number].answer_set.find(
      item => item.id === value.id,
    )

    let idUser = JSON.parse(localStorage.getItem('userData'))

    let itemAnswer = {
      id: question.id,
      topic: question.topic,
      is_answer: question.is_answer,
      title: question.title,
      answer_set: [
        {
          answer_id: objTmp.id,
          content: objTmp.content,
          is_correct: objTmp.is_correct,
          question: objTmp.question,
          users_choosed: [idUser.id],
        },
      ],
    }

    let arrTmp = arrSubmit
    arrTmp.push(itemAnswer)
    setArrSubmit(arrTmp)
  }

  const handleNextQuestion = () => {
    if (number <= listDataFilter.length) {
      setNumber(number + 1)
    }
  }

  const handleSubmit = () => {
    let objTmp = listDataTopic.find(item => item.id === parseInt(param.id))
    let itemChoose = {
      name: objTmp.module_info.name,
      module: objTmp.module_info.id,
      question_answer: arrSubmit,
      is_submit: true,
    }

    // dispatch(updateTopicMyQuizzes(itemChoose, parseInt(param.id)))
    setDisableSubmit(true)
  }
  let numberTmp = number

  return (
    <div>
      <Card
        style={{
          // display: arrCheck ? 'block' : 'none',
          display: checkNull.length > 0 ? 'block' : 'none',
          height: '700px',
        }}
      >
        <CardHeader>
          <Row
            style={{justifyContent: 'space-between', margin: 0, width: '100%'}}
          >
            <h1 style={{fontWeight: 'bold', color: '#FF6700'}}>
              Question {++numberTmp} of {listDataFilter.length}
            </h1>
            <Button.Ripple
              outline
              color="warning"
              onClick={() =>
                history.push('/hschool/course/dashboard/statistic')
              }
            >
              <ArrowLeft size={16} />
              Go Back
            </Button.Ripple>
          </Row>
        </CardHeader>
        <CardBody>
          <div className="text-right">
            <Row style={{justifyContent: 'flex-end'}}>
              <Button.Ripple
                color="warning"
                onClick={() => handleNextQuestion()}
                style={{
                  marginLeft: '15px',
                  display:
                    number < listDataFilter.length - 1 ? 'block' : 'none',
                }}
              >
                Next Question
              </Button.Ripple>
              <Button.Ripple
                color="warning"
                onClick={handleSubmit}
                style={{
                  marginLeft: '15px',
                  display:
                    number === listDataFilter.length - 1 ? 'block' : 'none',
                }}
                disabled={disableSubmit ? true : false}
              >
                Submit
              </Button.Ripple>
            </Row>
          </div>
          <p style={{width: '70%', fontSize: '18px', color: '#05192D'}}>
            {listDataFilter && listDataFilter.length > 0
              ? listDataFilter[number].title
              : ''}
          </p>
          <p style={{fontSize: '20px', fontWeight: 'bold', color: 'black'}}>
            Your Answers:{' '}
          </p>
          {listDataFilter.length > 0 &&
            listDataFilter[number].answer_set.map(it => (
              <Row key={it.id} style={{marginLeft: '15px'}}>
                <span>
                  {/* <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id={it.id}
            label={it.content}
            onChange={() =>
              handleChooseAnswer(it, listDataFilter[number])
            }
            disabled={disableSubmit ? true : false}
          /> */}
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    onChange={() =>
                      handleChooseAnswer(it, listDataFilter[number])
                    }
                    disabled={disableSubmit ? true : false}
                  />
                </span>
                <span style={{color: '#05192D', fontSize: '15px'}}>
                  {it.content}
                </span>
              </Row>
            ))}
        </CardBody>
        <div style={{display: disableSubmit ? 'block' : 'none'}}>
          <h3
            style={{
              color: '#FF6700',
              marginBottom: 250,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            YOU SUBMITED
          </h3>
        </div>
      </Card>
      <div
        style={{
          display: checkNull.length === 0 ? 'block' : 'none',
        }}
      >
        <h3 style={{fontSize: 25, color: '#FF6700', fontWeight: 'bold'}}>
          Chưa có Question cho Topic này
        </h3>
        <Button.Ripple
          outline
          color="warning"
          onClick={() => history.push('/hschool/course/dashboard/statistic')}
        >
          <ArrowLeft size={16} />
          Go Back
        </Button.Ripple>
      </div>
    </div>
  )
}

export default QuestionMyQuizzed
