import React from 'react'
import {Button} from 'reactstrap'

const MyQuizzesEditHeader = ({setModalState, setInitialState}) => {
  const AddQuestion = () => {
    setModalState(true)
    setInitialState({
      title: '',
      answerA: '',
      answerB: '',
      answerC: '',
    })
  }
  return (
    <div className="add-new text-left w-100">
      <Button.Ripple outline color="warning" onClick={() => AddQuestion()}>
        Add Question
      </Button.Ripple>
    </div>
  )
}

export default MyQuizzesEditHeader
