import {Formik, Form} from 'formik'
import {Card, CardBody, Row, Col, CardFooter, Button, Badge} from 'reactstrap'

import * as Yup from 'yup'

// *** Components
import TextField from './TextField'

// *** icon
import {Mail} from 'react-feather'
import TextareaField from './TextareaField'
import CheckboxField from './CheckboxField'
import RadioField from './RadioField'
import SwitchField from './SwitchField'
import DatePickerField from './DatePickerField'
import EditorField from './EditorField'
import TagInputField from './TagInputField'
import SelectField from './SelectField'

import AvatarUploadField from './AvatarUploadField'
import AvatarUploadFieldV1 from './AvatarUploadField.v1'

import UploadImageField from './UploadImageField'

import UploadFile from './UploadFile'

const formSchema = Yup.object().shape({
  text: Yup.string().required('Required'),
  textarea: Yup.string().min(3).max(10).required('Required'),
  picker: Yup.array().min(2, 'The error message if length === 0'),
  editor: Yup.string().required('Required'),
  tag: Yup.array().min(1, 'The error message if length === 0'),
  select: Yup.object().nullable().required('This field is required.'),
  // select: Yup.array().min(1, 'The error message if length === 0'), // multiple
})

const FormField = () => {
  return (
    <div>
      <Formik
        initialValues={{
          text: '',
          textarea: '',
          picker: [new Date(), new Date('2021-08-30')],
          editor: '',
          select: [],
          avatar: null,
          avatar_v1: null,
          images: [],
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({values, setFieldValue}) => (
          <Form>
            <Card>
              <CardBody>
                <Row>
                  {/* TEXT FIELD */}
                  <Col md="6">
                    <TextField
                      icon={<Mail size={16} />}
                      type="text"
                      //text || email || password || number || datetime-local || date
                      // month || week || time || color || range
                      name="text"
                      size="lg"
                      label="Text Field"
                      placeholder="Placeholder text"
                      isRequired
                    />
                  </Col>
                  {/* TEXTAREA FIELD */}
                  <Col md="6">
                    <TextareaField
                      maxLength={40}
                      name="textarea"
                      label="Textarea Field"
                      placeholder="Placeholder textarea"
                    />
                  </Col>
                  {/* CHECKBOX FIELD*/}
                  <Col md="6">
                    <CheckboxField
                      type="list" //inline || list
                      name="checkbox"
                      label="Checkbox Field"
                      helpText="Some help text goes here"
                      color="warning"
                      // outline
                      inline
                      options={[
                        {
                          name: 'Nomal',
                          label: 'Nomal',
                        },
                        {
                          name: 'Color',
                          label: 'Color',
                          color: 'danger',
                          checked: true,
                        },
                        {
                          name: 'Checked',
                          label: 'Checked',
                          checked: true,
                        },
                        {
                          name: 'Size lg',
                          label: 'Size lg',
                          size: 'lg',
                          checked: false,
                        },

                        {
                          name: 'Disabled',
                          label: 'Disabled',
                          disabled: true,
                          checked: true,
                        },
                      ]}
                      // onChange={(name, value) => console.log(value)}
                    />
                  </Col>
                  {/* RADIO FIELD */}
                  <Col md="6">
                    <RadioField
                      name="radio"
                      label="Radio Field"
                      // helpText="Some help text goes here"
                      // color="warning"
                      // outline
                      // accent
                      options={[
                        {
                          value: 'Nomal',
                          label: 'Nomal',
                        },
                        {
                          value: 'Color',
                          label: 'Color',
                          color: 'danger',
                        },
                        {
                          value: 'Checked',
                          label: 'Checked',
                          checked: true,
                        },
                        {
                          value: 'Size lg',
                          label: 'Size lg',
                          size: 'lg',
                        },
                        {
                          value: 'Disabled',
                          label: 'Disabled',
                          disabled: true,
                        },
                      ]}
                    />
                  </Col>
                  {/* SWITCH FIELD */}
                  <Col md="6">
                    <SwitchField
                      name="switch"
                      label="Switch Field"
                      icon
                      // color="warning"
                      outline
                      // checked={true}
                    />
                  </Col>
                  {/* DatePicker FIELD */}
                  <Col md="6">
                    <DatePickerField
                      name="picker"
                      label="Date picker Field"
                      options={{mode: 'range'}}
                    />
                  </Col>
                  {/* Editor FIELD */}
                  <Col md="12">
                    <EditorField
                      name="editor"
                      label="Editor Field"
                      data={'<p>Sâm cung cấp collagen 123&nbsp;</p>'}
                      module="test"
                      getUrl={url => console.log('URL', url)}
                    />
                  </Col>
                  {/* TAG FIELD */}
                  <Col md="6">
                    <TagInputField
                      name="tag"
                      label="Tag Field"
                      defaultValue="tagify, is , awesome, in so many way"
                      placeholder="Nhấn enter hoặc tab"
                      blacklist={['thu']}
                      suggestions={[
                        'apple',
                        'banana',
                        'cucumber',
                        'dewberries',
                        'elderberry',
                        'farkleberry',
                        'grapes',
                        'hackberry',
                        'imbe',
                        'jambolan',
                        'kiwi',
                        'lime',
                        'mango',
                        'nectarine',
                        'orange',
                        'papaya',
                        'quince',
                        'raspberries',
                        'strawberries',
                        'tangerine',
                        'ugni',
                        'voavanga',
                        'watermelon',
                        'xigua',
                        'yangmei',
                        'zucchini',
                      ]}
                      // readOnly
                      // onEditInput={() => console.log('onEditInput')}
                      // onEditBeforeUpdate={() => console.log`onEditBeforeUpdate`}
                      // onEditUpdated={() => console.log('onEditUpdated')}
                      // onEditStart={() => console.log('onEditStart')}
                      // onEditKeydown={() => console.log('onEditKeydown')}
                      // onDropdownShow={() => console.log('onDropdownShow')}
                      // onDropdownHide={() => console.log('onDropdownHide')}
                      // onDropdownSelect={() => console.log('onDropdownSelect')}
                      // onDropdownScroll={() => console.log('onDropdownScroll')}
                      // onDropdownNoMatch={() => console.log('onDropdownNoMatch')}
                      // onDropdownUpdated={() => console.log('onDropdownUpdated')}
                    />
                  </Col>

                  {/* SELECT FIELD */}
                  <Col md="6">
                    <SelectField
                      name="select"
                      label="Select Field"
                      isSearchable
                      // onChange={(name, value) =>{console.log(value)}}
                      // isMulti
                      options={[
                        {
                          label: 'Option 1',
                          value: 'value1',
                        },
                        {
                          label: (
                            <>
                              {' '}
                              <Badge color="warning">Option2</Badge>{' '}
                              <span className="text-danger">Option 2</span>{' '}
                            </>
                          ),
                          value: 'value2',
                        },
                      ]}
                    />
                  </Col>

                  {/* AVATAR FIELD */}
                  <Col md="6">
                    <AvatarUploadField name="avatar" label="Avatar Field" />
                  </Col>

                  {/* AVATAR FIELD V1*/}
                  <Col md="6">
                    <AvatarUploadFieldV1
                      name="avatar_v1"
                      label="Avatar Field V1"
                      file={values['avatar_v1']}
                      onChange={(name, value) => setFieldValue(name, value)}
                    />
                  </Col>
                  {/* IMAGE UPLOAD FIELD */}
                  <Col md="6">
                    <UploadImageField
                      name="images"
                      label="Images upload Field"
                      // maxFile={4}
                      // isMulti
                      onChange={(name, value) => setFieldValue(name, value)}
                      files={values['images']}
                    />
                  </Col>

                  {/* FILES FILE FIELD */}
                  <Col md="6">
                    <UploadFile
                      name="files"
                      label="Files upload Field"
                      onChange={(name, value) => setFieldValue(name, value)}
                    />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormField
