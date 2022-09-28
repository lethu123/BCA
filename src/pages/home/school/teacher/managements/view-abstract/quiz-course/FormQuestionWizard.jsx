import {Fragment} from 'react'
import {ArrowLeft, ArrowRight} from 'react-feather'
import {Button, Col} from 'reactstrap'
import {
  AvForm,
  AvGroup,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation-safe'

const FormQuestionWizard = ({stepper, it}) => {
  const onSubmit = (event, errors) => {
    event.preventDefault()
    if (!errors.length) {
      stepper.next()
    }
  }

  const handleChangeRadioButton = () => {}

  return (
    <Fragment>
      <AvForm onSubmit={onSubmit}>
        <Col sm="12">
          <h4 style={{display: 'inline'}}> {it.question}</h4>
          <p style={{fontSize: '16px', marginTop: '10px', color: '#FF6700'}}>
            Answers:{' '}
          </p>
          <div style={{fontSize: '16px'}}>
            <AvGroup>
              <AvRadioGroup name={`question${it.id}`} required>
                {it.answers.map((item, index) => (
                  <div style={{marginTop: '10px'}} key={index + 1}>
                    <AvRadio
                      label={item.content}
                      value={item.id}
                      customInput={true}
                      onChange={() => handleChangeRadioButton(it.id, item)}
                    />
                  </div>
                ))}
              </AvRadioGroup>
            </AvGroup>
          </div>
        </Col>
        <div className="d-flex justify-content-between">
          <Button.Ripple
            color="secondary"
            className="btn-prev"
            outline
            disabled
          >
            <ArrowLeft
              size={14}
              className="align-middle mr-sm-25 mr-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">
              Previous
            </span>
          </Button.Ripple>
          <Button.Ripple type="submit" color="primary" className="btn-next">
            <span className="align-middle d-sm-inline-block d-none">Next</span>
            <ArrowRight
              size={14}
              className="align-middle ml-sm-25 ml-0"
            ></ArrowRight>
          </Button.Ripple>
        </div>
      </AvForm>
    </Fragment>
  )
}

export default FormQuestionWizard
