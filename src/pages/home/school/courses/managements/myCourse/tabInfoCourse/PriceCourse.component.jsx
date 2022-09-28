import React from 'react'
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  CustomInput,
} from 'reactstrap'
const PriceCourse = () => {
  return (
    <div>
      <Row className="no-gutters py-2">
        <Col md="8" className="m-auto">
          <Form>
            <FormGroup>
              <CustomInput
                id="priceCourse"
                inline
                type="checkbox"
                label="Check if this course is free"
                defaultChecked={true}
              />
            </FormGroup>
            <FormGroup>
              <Label for="data-category" className="text-bold-600">
                Price ($)
                <sup style={{color: '#FF0000'}}>*</sup>
              </Label>
              <Input placeholder="200$" />
            </FormGroup>
            <FormGroup>
              <CustomInput
                inline
                id="Discount"
                type="checkbox"
                label="Discount (%)"
                defaultChecked={true}
              />
            </FormGroup>
            <FormGroup>
              <Label for="data-category" className="text-bold-600">
                Percentage Discount (%)
              </Label>
              <Input placeholder="10%" />
            </FormGroup>
            <FormGroup className="my-2 text-right">
              <Button color="primary" type="submit" className="mr-1">
                Submit
              </Button>
              <Button.Ripple color="light" type="button">
                Cancel
              </Button.Ripple>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default PriceCourse
