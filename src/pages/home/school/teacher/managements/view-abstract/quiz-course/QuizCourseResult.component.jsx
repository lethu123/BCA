import React, {useState, useEffect} from 'react'
import {CheckCircle, XCircle} from 'react-feather'

const QuizCourseResult = props => {
  const [arrQuestion, setArrQuestion] = useState(props.dataQuestion)
  // const [arrAnswers, setArrAnswers] = useState(props.dataAnswers)

  return (
    <div>
      <h1
        style={{
          textAlign: 'left',
          color: '#FF6700',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Result
      </h1>
      {/* <h2>Your Score: </h2> */}
      {arrQuestion.map((item, index) => {
        return (
          <div key={index + 1} style={{marginTop: '7px'}}>
            <h3>
              {index + 1}
              {item.question}
            </h3>
            {item.answers.map((item, idx) => {
              return (
                <div key={idx}>
                  <span>{item.content}</span>

                  <span>
                    {(item.result && item.isChoose) ||
                    (item.isChoose === false && item.result === true) ? (
                      <CheckCircle size={19} style={{color: 'green'}} />
                    ) : (
                      ''
                    )}
                  </span>
                  <span>
                    {item.isChoose === true && item.result === false ? (
                      <XCircle size={19} style={{color: 'red'}} />
                    ) : (
                      ''
                    )}
                  </span>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default QuizCourseResult
