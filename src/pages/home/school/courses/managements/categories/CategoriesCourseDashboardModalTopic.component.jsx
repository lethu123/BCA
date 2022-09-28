import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import {
  Form,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Input,
} from 'reactstrap'

const CategoriesCourseDashboardModalTopic = ({
  modalStateTopic,
  toggleModalTopic,
  editTopic,
  listOption,
  onSubmit,
}) => {
  const hanldeSubmitAddTopic = e => {
    e.preventDefault()
  }
  const [stateForm, setStateForm] = useState({
    subId: [],
    subCategory: '',
    skillTopic: '',
    arrSub: [],
  })
  useEffect(() => {
    if (editTopic) {
      setStateForm({
        ...stateForm,
        subCategory: editTopic.nameSub,
        skillTopic: editTopic.name,
        subId: [editTopic.idSub],
      })
    }
  }, [editTopic])

  return (
    <Modal
      isOpen={modalStateTopic}
      toggle={toggleModalTopic}
      className="modal-lg modal-dialog-centered"
    >
      <ModalHeader toggle={toggleModalTopic}>
        {editTopic ? 'EDIT  TOPIC/SKILLS' : 'ADD TOPIC/SKILLS'}
      </ModalHeader>
      <ModalBody>
        <Form
          // onSubmit={handleSubmitAddCategory}
          onSubmit={hanldeSubmitAddTopic}
        >
          <FormGroup>
            <Label for="SubCategories">Sub Categories</Label>
            <Select
              className="React"
              classNamePrefix="select"
              placeholder={editTopic ? '' : 'select topic/skills...'}
              defaultValue={
                editTopic
                  ? [
                      {
                        id: stateForm.subId[0],
                        label: stateForm.subCategory,
                        value: stateForm.subCategory,
                      },
                    ]
                  : []
              }
              name="TopicSkill"
              options={listOption
                .filter(item => item.id !== 0)
                .map(option => ({
                  id: option.id,
                  label: option.name,
                  value: option.name,
                }))}
              isMulti
              closeMenuOnSelect={false}
              onChange={e =>
                setStateForm({
                  ...stateForm,
                  subId: e ? e.map(item => item.id) : [],
                  arrSub: e,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="invalidState">Topic/Skill Category</Label>
            <Input
              type="text"
              id="invalidState"
              name="invalidState"
              value={stateForm.skillTopic}
              onChange={e =>
                setStateForm({
                  ...stateForm,
                  skillTopic: e.target.value,
                })
              }
            />
          </FormGroup>
          <div className="w-100 text-center text-md-right">
            <Button
              type="submit"
              color="primary"
              onClick={() => {
                let data = {
                  list_type_id: JSON.stringify(stateForm.subId),
                  area_name: stateForm.skillTopic,
                }
                if (editTopic && editTopic.id) {
                  data = {...data, area_id: editTopic.id_delete}
                }
                onSubmit(data, stateForm.arrSub)
                // console.log(stateForm.arrSub)
                toggleModalTopic()
              }}
            >
              {editTopic ? 'Update' : 'Add'}
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default CategoriesCourseDashboardModalTopic
