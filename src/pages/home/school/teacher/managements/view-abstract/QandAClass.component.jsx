import React from 'react'
import {
  CardBody,
  Card,
  FormGroup,
  Label,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {Delete, Edit, MessageSquare, MoreHorizontal} from 'react-feather'
// ** assets
import img1 from 'assets/images/avatars/avatar-blank.png'
import './CustomViewAbstract.style.scss'

// ** Component
import Avatar from '@core/components/avatar'

const formSchema = Yup.object().shape({
  content: Yup.string().required('Comment is required!'),
})
const QandAClass = () => {
  return (
    <div>
      <div>
        <h6 className="section-label">Comment</h6>
        <Card className="mb-3">
          <CardBody>
            <div className={'comment my-1 '}>
              <div className="action-comment">
                <div className="d-flex align-items-start ">
                  <Avatar
                    img={img1}
                    className="mt-25 mr-75"
                    imgHeight="34"
                    imgWidth="34"
                  />
                  <div className="profile-user-info w-100 d-flex align-items-start justify-content-between">
                    <div className="">
                      <h6 className="mb-0">Thu kara</h6>
                      <small>This is comment</small>
                    </div>

                    <div className="ml-auto user-like popup-action-cmt">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a">
                          <MoreHorizontal className="cursor-pointer" />
                        </DropdownToggle>
                        <DropdownMenu right tag="ul">
                          <DropdownItem style={{outline: 'none'}} tag="li">
                            <Edit size={14} className="mr-1" /> Edit comment
                          </DropdownItem>
                          <DropdownItem style={{outline: 'none'}} tag="li">
                            <Delete
                              size={14}
                              className="fas fa-comment-slash mr-1"
                            ></Delete>
                            Delete comment
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                </div>

                <div className="ml-3">
                  <span style={{cursor: 'pointer'}} onClick={() => {}}>
                    <MessageSquare className="mr-50 text-success" size={12} />
                    <span className="font-small-2">reply</span>
                  </span>
                  <span className="ml-50 font-italic font-small-2">
                    2min ago
                  </span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div>
        <h6 className="section-label">Leave a Comment</h6>
        <Card>
          <CardBody>
            <Formik
              initialValues={{
                content: '',
              }}
              validationSchema={formSchema}
              onSubmit={(values, {resetForm}) => {
                resetForm({})
              }}
            >
              {({isValid}) => (
                <Form>
                  <FormGroup>
                    <Label for="content" className="text-black">
                      Comment <sup style={{color: '#FF0000'}}>*</sup>
                    </Label>
                    <Field
                      as="textarea"
                      name="content"
                      className="form-control"
                    />
                  </FormGroup>
                  <Button.Ripple disabled={!isValid} color="primary" size="sm">
                    Post Comment
                  </Button.Ripple>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default QandAClass
