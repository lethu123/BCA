import React from 'react'
import {Button, Card, CustomInput} from 'reactstrap'
import TextareaField from 'components/form/TextareaField'

const SurveyCourseDetail = () => {
  return (
    <div>
      <Card className="p-5 mt-3">
        <h4 className="text-primary">Tham gia khảo sát để nhận thêm Bizxu</h4>
        <p className="mb-5">
          Cảm ơn bạn đã tham gia khóa học của BCA. Khảo sát được tạo ra để chúng
          tôi hoàn thiện khóa học hơn
        </p>
        <div className="mb-5">
          <p>1. Khóa học có đáp ứng được sự mong đợi của bạn?</p>
          <div className="ml-5">
            <CustomInput
              type="radio"
              id="1"
              name="customRadio"
              inline
              label="Có"
              defaultChecked
            />
            <CustomInput
              type="radio"
              id="2"
              name="customRadio"
              inline
              label="Không"
            />
          </div>
        </div>

        <div className="mb-5">
          <p>2. Khóa học có giúp được bạn nhiều trong thực tế?</p>
          <div className="ml-5">
            <CustomInput
              type="radio"
              id="3"
              name="customRadio1"
              inline
              label="Có"
              defaultChecked
            />
            <CustomInput
              type="radio"
              id="4"
              name="customRadio1"
              inline
              label="Không"
            />
          </div>
        </div>

        <div className="mb-5">
          <p>
            3. Khóa học được bố cục và trình bày 1 cách hợp lý, dễ theo dõi?
          </p>
          <div className="ml-5">
            <CustomInput
              type="radio"
              id="5"
              name="customRadio2"
              inline
              label="Đồng ý"
              defaultChecked
            />
            <CustomInput
              type="radio"
              id="6"
              name="customRadio2"
              inline
              label="Không đồng ý"
            />
          </div>
        </div>

        <div className="mb-5">
          <p>4. Thời lượng khóa học phù hợp để truyền tải nội dung?</p>
          <div className="ml-5">
            <CustomInput
              type="radio"
              id="7"
              name="customRadio3"
              inline
              label="Đồng ý"
              defaultChecked
            />
            <CustomInput
              type="radio"
              id="8"
              name="customRadio3"
              inline
              label="Không đồng ý"
            />
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <h4>Ý kién đóng góp của bạn</h4>
        <TextareaField
          maxLength={500}
          name="textarea"
          placeholder="Để lại ý kiến của bạn"
          onChange={() => {}}
        />
        <div className="d-flex justify-content-end">
          <Button.Ripple color="primary">Gửi</Button.Ripple>
        </div>
      </Card>
    </div>
  )
}

export default SurveyCourseDetail
