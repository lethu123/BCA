import React from 'react'
import {Plus} from 'react-feather'
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
const Outcome = () => {
  return (
    <div>
      <Row className="outcome no-gutters">
        <Col className="m-auto" md="8">
          <Form>
            <Row>
              <Col md="10">
                <FormGroup>
                  <Label for="data-level" className="text-bold-600">
                    Outcomes
                  </Label>
                  <Input
                    className="w-100"
                    value="Have the skills to start making money on the side, as a casual freelancer "
                    onChange={() => console.log('outcome')}
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <Button.Ripple
                  type="button"
                  className="px-1"
                  style={{marginTop: '20px'}}
                  color="success"
                >
                  <Plus size={14} />
                </Button.Ripple>
              </Col>
            </Row>
            <hr />
            <FormGroup className="text-right">
              <Button.Ripple type="submit" className="mr-1 " color="primary">
                Submit
              </Button.Ripple>
              <Button.Ripple type="button" className=" " color="light">
                Cancel
              </Button.Ripple>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Outcome
