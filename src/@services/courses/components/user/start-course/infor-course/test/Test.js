import RadioField from 'components/form/RadioField'
import TextareaField from 'components/form/TextareaField'
import React from 'react'
import {Package} from 'react-feather'
import {Button} from 'reactstrap'

const Test = () => {
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
  ]
  return (
    <div>
      <div>
        <p>
          <Package size={16} className="text-danger" /> Số câu hỏi: 2/8
        </p>
        <p>
          <Package size={16} className="text-primary" /> Số câu trả lời đúng:
          2/8
        </p>
        <p>
          <Package size={16} className="text-success" /> Số câu trả lời sai: 6/8
        </p>
      </div>
      <hr />
      <div className="row mx-0">
        {question.map(item => (
          <div key={item.id} className=" px-0">
            <div className="mb-2">
              <span className="text-primary">
                <Package size={16} className="text-primary mb-1" /> Câu hỏi{' '}
                {item.id}:
              </span>
              <span> {item.title}</span>
              <div>
                <RadioField
                  name={item.id}
                  // helpText="Some help text goes here"
                  // color="warning"
                  // outline
                  // accent
                  inline
                  options={item.answer.map(ele => ({label: ele, value: ele}))}
                  onChange={(name, value) => console.log(value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-6">
          <Package size={16} className="text-primary mb-1" />
          <span className="text-primary"> Câu hỏi 3:</span> Lorem Ipsum is that
          it has a more-or-less normal distribution of letters, as opposed to
          using 'Content here, content here', making it look like readable
          English?
          <TextareaField
            minRows={2}
            name="textarea"
            placeholder="Nhập câu trả lời"
            onChange={(name, value) => console.log(value)}
          />
        </div>
        <div className="col-md-6">
          <Package size={16} className="text-primary mb-1" />
          <span className="text-primary"> Câu hỏi 4:</span> Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt?
          <TextareaField
            minRows={2}
            name="textarea"
            placeholder="Nhập câu trả lời"
            onChange={(name, value) => console.log(value)}
          />
        </div>
      </div>

      <Button.Ripple color="primary">Kiểm Tra</Button.Ripple>
    </div>
  )
}

export default Test
