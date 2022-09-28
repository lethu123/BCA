import React from 'react'
import {Formik, Form} from 'formik'

// ** component
import UploadImageField from 'components/form/UploadImageField'
import {Button} from 'reactstrap'
import {ArrowLeft, ArrowRight} from 'react-feather'

const Certification = ({stepper}) => {
  return (
    <div>
      <Formik
        initialValues={{
          images: '',
        }}
        onSubmit={() => stepper.next()}
      >
        {({setFieldValue}) => (
          <Form>
            <UploadImageField
              name="images"
              label="Chọn chứng chỉ được cấp sau khóa học"
              height="150px"
              // defaultInitValues={{
              //   files: ['file'],
              //   previews: [
              //     'https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg',
              //   ],
              // }}
              onChange={(name, value) => setFieldValue(name, value)}
            />
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
                type="submit"
                color="primary"
                className="btn-next ml-3"
              >
                <span className="align-middle d-sm-inline-block d-none">
                  Tiếp
                </span>
                <ArrowRight
                  size={14}
                  className="align-middle ml-sm-3 ml-0"
                ></ArrowRight>
              </Button.Ripple>
              <Button.Ripple type="button" color="danger" className="ml-3">
                <span className="align-middle d-sm-inline-block d-none">
                  Hủy
                </span>
              </Button.Ripple>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Certification
