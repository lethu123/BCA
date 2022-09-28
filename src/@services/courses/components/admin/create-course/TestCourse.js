import RadioField from 'components/form/RadioField'
import React, {useState} from 'react'
import {ArrowLeft} from 'react-feather'
import {Button, Col, Row} from 'reactstrap'
import {ModalCreateQuestion} from '@services/courses'
import {useHistory} from 'react-router-dom'

const question = [
  {
    id: 1,
    title:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    answer: ['A: Dolor', 'B: Nullum', 'C: Consectetur', 'D: Pele'],
  },
  {
    id: 2,
    title:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    answer: ['A: Dolor', 'B: Nullum', 'C: Consectetur', 'D: Pele'],
  },
  {
    id: 3,
    title:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    answer: ['A: Dolor', 'B: Nullum', 'C: Consectetur', 'D: Pele'],
  },
  {
    id: 4,
    title:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    answer: ['A: Dolor', 'B: Nullum', 'C: Consectetur', 'D: Pele'],
  },
]

const TestCourse = ({stepper}) => {
  const history = useHistory()
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)

  return (
    <div>
      <Button.Ripple
        onClick={toggleModal}
        type="button"
        color="primary"
        className=" mb-5"
      >
        <span className="align-middle d-sm-inline-block d-none">
          Thêm câu hỏi
        </span>
      </Button.Ripple>
      <Row className="mx-0">
        {question.map(item => (
          <Col key={item.id} lg="6">
            <div>
              <div className="mb-2">
                <span className="text-primary"> Câu hỏi {item.id}:</span>
                <span> {item.title}</span>
                <div>
                  <RadioField
                    name={item.id}
                    list
                    options={item.answer.map(ele => ({label: ele, value: ele}))}
                    onChange={(name, value) => console.log(value)}
                  />
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <hr />
      <div className="d-flex justify-content-center">
        <Button.Ripple
          color="secondary"
          className="btn-prev"
          outline
          type="button"
          onClick={() => stepper.previous()}
        >
          <ArrowLeft
            size={14}
            className="align-middle mr-sm-3 mr-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>

        <Button.Ripple
          onClick={() => history.goBack()}
          type="submit"
          color="success"
          className=" ml-3"
        >
          <span className="align-middle d-sm-inline-block d-none">
            Hoàn thành
          </span>
        </Button.Ripple>
        <Button.Ripple type="button" color="danger" className="ml-3">
          <span className="align-middle d-sm-inline-block d-none">Hủy</span>
        </Button.Ripple>
      </div>

      <ModalCreateQuestion modal={modal} toggleModal={toggleModal} />
    </div>
  )
}

export default TestCourse
