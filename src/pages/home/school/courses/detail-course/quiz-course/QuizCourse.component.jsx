import React, {useRef, useState} from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import QuizCourseResult from './QuizCourseResult.component'
import './QuizCourse.style.scss'

// ** Styles
import 'bs-stepper/dist/css/bs-stepper.min.css'
import '@core/scss/base/plugins/forms/form-wizard.scss'
// import Wizard from '@core/components/wizard/WizardComponent'
import Wizard from '@core/components/wizard'
// import AccountDetails from 'views/forms/wizard/steps-with-validation/AccountDetails'
import FormQuestionWizard from './FormQuestionWizard'

const QuizCourseWizard = () => {
  const [confirmCancel, setConfirmCancel] = useState(false)
  const [openResult, setOpenResult] = useState(false)
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const listQuestion = [
    {
      id: '1',
      question: 'How many types of heading does an HTML contain?',
      answers: [
        {
          id: '1_1',
          content: 'A: 3',
          result: false,
          isChoose: false,
        },
        {
          id: '1_2',
          content: 'B: 6',
          result: true,
          isChoose: false,
        },
        {
          id: '1_3',
          content: 'C: 5',
          result: false,
          isChoose: false,
        },
      ],
    },
    {
      id: '2',
      question: 'How many tag in HTML?',
      answers: [
        {
          id: '2_1',
          content: 'A: 10',
          result: false,
          isChoose: false,
        },
        {
          id: '2_2',
          content: 'B: 20',
          result: false,
          isChoose: false,
        },
        {
          id: '2_3',
          content: 'C: nhiều',
          result: true,
          isChoose: false,
        },
      ],
    },
    {
      id: '3',
      question: 'How many types of heading does an HTML contain?',
      answers: [
        {
          id: '3_1',
          content: 'A: 3',
          result: false,
          isChoose: false,
        },
        {
          id: '3_2',
          content: 'B: 6',
          result: true,
          isChoose: false,
        },
        {
          id: '3_3',
          content: 'C: 5',
          result: false,
          isChoose: false,
        },
      ],
    },
    {
      id: '4',
      question: 'How many tag in HTML?',
      answers: [
        {
          id: '4_1',
          content: 'A: 10',
          result: false,
          isChoose: false,
        },
        {
          id: '4_2',
          content: 'B: 20',
          result: false,
          isChoose: false,
        },
        {
          id: '4_3',
          content: 'C: nhiều',
          result: true,
          isChoose: false,
        },
      ],
    },
    {
      id: '5',
      question: 'How many types of heading does an HTML contain?',
      answers: [
        {
          id: '5_1',
          content: 'A: 3',
          result: false,
          isChoose: false,
        },
        {
          id: '5_2',
          content: 'B: 6',
          result: true,
          isChoose: false,
        },
        {
          id: '5_3',
          content: 'C: 5',
          result: false,
          isChoose: false,
        },
      ],
    },
  ]
  let [arrListQuestion, setArrListQuestion] = useState(listQuestion)

  // const handleSubmit = () => {
  //   if (!onSubmit) {
  //     setOnSubmit(true)
  //   } else {
  //     setConfirmCancel(true)
  //   }
  // }
  // const handleChangeRadioButton = (idQuestion, answers) => {
  //   let arrTmp = [...arrListQuestion]
  //   let arrFilter = arrTmp.filter(item => item.id === idQuestion)
  //   arrFilter[0].answers.map((item, index) => {
  //     if (item.id === answers.id) {
  //       arrFilter[0].answers[index].isChoose = true
  //     } else {
  //       arrFilter[0].answers[index].isChoose = false
  //     }
  //     return item
  //   })
  //   arrTmp.forEach(item => {
  //     if (item.id === arrFilter[0].id) {
  //       item = arrFilter[0]
  //     }
  //   })
  //   setArrListQuestion(arrTmp)
  // }

  const handleConfirm = () => {
    setOpenResult(true)
  }

  const listTabs = arrListQuestion.map((it, idx) =>
    Object.assign(it, {
      id: 'item' + idx,
      title: '',
      content: <FormQuestionWizard stepper={stepper} it={it} />,
    }),
  )

  return (
    <div>
      {openResult ? (
        <QuizCourseResult dataQuestion={arrListQuestion} />
      ) : (
        <div className="quizCourse">
          <h1
            style={{
              textAlign: 'center',
              color: '#FF6700',
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            Question
          </h1>

          <div className="horizontal-wizard">
            <Wizard
              instance={el => setStepper(el)}
              ref={ref}
              steps={listTabs}
            />
          </div>

          <SweetAlert
            title="Are you sure?"
            warning
            show={confirmCancel}
            showCancel
            reverseButtons
            cancelBtnBsStyle="danger"
            confirmBtnText="Yes!"
            cancelBtnText="Cancel"
            onConfirm={() => handleConfirm()}
            onCancel={() => setConfirmCancel(false)}
          ></SweetAlert>
        </div>
      )}
    </div>
  )
}
export default QuizCourseWizard
