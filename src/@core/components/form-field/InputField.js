import React from 'react'
import {
  Col,
  FormFeedback,
  FormText,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap'
import classnames from 'classnames'

const InputField = ({
  label,
  type = 'text',
  id,
  help,
  value,
  onChange,
  helperText,
  readonlyStatic,
  size = 'md',
  isHorizontal = false,
  required = false,
  floating = false,
  invalid = false,
  feedback,
  groupTexts,
  groupButtons,
  groupMerge,
  counter,
  className = '',
  ...rest
}) => {
  const renderInputContent = () => {
    return (
      <>
        {help && (
          <small className="text-muted ms-25">
            <i>{help}</i>
          </small>
        )}
        {readonlyStatic ? (
          <p className="form-control-static" id={id || 'StaticInput'}>
            {value}
          </p>
        ) : groupTexts || groupButtons ? (
          <InputGroup
            className={`mb-2 ${groupMerge ? 'input-group-merge' : ''}`}
            size={size}
          >
            {groupTexts && (
              <InputGroupText>
                {Array.isArray(groupTexts) ? groupTexts[0] : groupTexts}
              </InputGroupText>
            )}
            {groupButtons && Array.isArray(groupButtons)
              ? groupButtons[0]
              : groupButtons}
            <Input
              type={type}
              id={id}
              bsSize={size}
              invalid={invalid}
              value={value}
              onChange={onChange}
              className={`form-control ${className}`}
              {...rest}
            />
            {groupTexts &&
              Array.isArray(groupTexts) &&
              groupTexts.length === 2 && (
                <InputGroupText>{groupTexts[1]}</InputGroupText>
              )}
            {groupButtons &&
              Array.isArray(groupButtons) &&
              groupButtons.length === 2 &&
              groupButtons[1]}
          </InputGroup>
        ) : (
          <Input
            type={type}
            id={id}
            bsSize={size}
            invalid={invalid}
            className={classnames('form-control ', className, {
              'text-danger': counter && value.length > 20,
            })}
            value={value}
            onChange={onChange}
            {...rest}
          />
        )}
        {helperText && <FormText className="text-muted">{helperText}</FormText>}
        {feedback && <FormFeedback>{feedback}</FormFeedback>}
        {counter && (
          <span
            className={classnames('textarea-counter-value float-end', {
              'bg-danger': value.length > counter,
            })}
          >
            {`${value.length}/${counter}`}
          </span>
        )}
      </>
    )
  }

  const renderContent = () =>
    isHorizontal ? (
      <Row className="mb-1">
        {label && (
          <Label sm="3" size="lg" className="form-label" for={id}>
            {label}{' '}
            {required && (
              <sup
                style={{
                  color: '#FF0000',
                  fontSize: '1rem',
                  top: '0',
                }}
              >
                *
              </sup>
            )}
          </Label>
        )}
        <Col sm="9">{renderInputContent()}</Col>
      </Row>
    ) : (
      <div className={floating ? 'form-floating' : ''}>
        {!floating && label && (
          <Label className="form-label" for={id}>
            {label}{' '}
            {required && (
              <sup
                style={{
                  color: '#FF0000',
                  fontSize: '1rem',
                  top: '0',
                }}
              >
                *
              </sup>
            )}
          </Label>
        )}
        {renderInputContent()}
        {floating && <label htmlFor={id}>{label}</label>}
      </div>
    )

  return renderContent()
}

export default InputField
