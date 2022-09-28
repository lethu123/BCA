import {useEffect, useState} from 'react'
import {Button, FormGroup, Label} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

// *** Component
// import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'

// *** Query
import {useAddLinkCrawl} from 'hook/customer/customerHook'
import SmallSpinner from 'components/small-spinner'

const checkValidType = (value, type, checkValues, index) => {
  let isValid = false

  if (value && value.length > 0) {
    if (value.charAt(value.length - 1) !== '/') {
      value = value + '/'
    }
    console.log(value)
    let url = value.split('//')
    if (url.length > 1) {
      let domain = url[1].split('/')
      if (type === 'group') {
        isValid =
          domain.length > 1 &&
          !value.includes('permalink') &&
          domain[index] === checkValues
      } else if (type === 'fanpage' || type === 'user') {
        isValid =
          domain.length > 1 &&
          domain[1].length > 0 &&
          domain[index] === ('' && checkValues)
      } else {
        isValid =
          domain.length > 1 &&
          (value.includes('posts') || value.includes('permalink'))
      }
    }
  }

  return isValid
}

const FormExtractionDataFB = ({
  type = '',
  placeholder = 'Nhập link Facebook khai thác',
}) => {
  // *** State
  const [typeVi, setTypeVi] = useState('')
  const {mutate, isLoading} = useAddLinkCrawl()

  // *** User id
  const userData = localStorage.getItem('userData')
  const userDataParse = userData ? JSON.parse(userData) : null

  // *** handle type Vi
  useEffect(() => {
    if (type === 'group') {
      setTypeVi('nhóm')
    } else if (type === 'post') {
      setTypeVi('bài viết')
    } else if (type === 'fanpage') {
      setTypeVi('Fanpage')
    } else if (type === 'user') {
      setTypeVi('trang cá nhân')
    } else {
      setTypeVi('nguồn dữ liệu')
    }
  }, [type])

  // *** Validation Form
  const formSchema = Yup.object().shape({
    type: Yup.string().required('Bắt buộc bạn phải chọn loại liên kết'),
    name: Yup.string().required(`Tên ${typeVi} không được để trống`),
    link: Yup.string()
      .matches(
        /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i,
        'Đây không phải đường dẫn từ Facebook',
      )
      .required(`Đường dẫn ${typeVi} không được để trống`)
      .test(
        'is-incorrect',
        `Đường dẫn ${typeVi} không hợp lệ, xin thử lại!`,
        async value => {
          let isValid = false

          switch (type) {
            case 'group':
              return checkValidType(value, type, 'groups', 1)
            case 'post':
              return checkValidType(value, type, 'posts')
            case 'fanpage':
              return checkValidType(value, type, undefined, 2)
            case 'user':
              return checkValidType(value, type, undefined, 2)

            default:
              return isValid
          }
        },
      ),
  })

  // *** onSubmit form
  const handleSubmit = (values, {resetForm}) => {
    mutate({
      ...values,
      user_id: userDataParse ? userDataParse.uid : null,
    })
    resetForm()
  }

  return (
    <div className="mb-2">
      <Formik
        initialValues={{
          name: '',
          link: '',
          is_interaction: true,
          type: type,
        }}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({isValid, values, setFieldValue, setFieldTouched, dirty}) => (
          <Form
            style={{
              borderRadius: '20px',
            }}
            className="p-3 mt-3 border"
          >
            <TextareaField
              label="Đường dẫn"
              placeholder={placeholder}
              // isRequired={true}
              name="link"
            />

            <TextareaField
              label={`Tên ${typeVi}`}
              placeholder={`Tên ${typeVi}`}
              // isRequired={true}
              name="name"
            />

            <FormGroup className="mt-2">
              <div>
                <Label className="font-weight-bold text-dark">Phân loại</Label>
              </div>
              <Button.Ripple
                className="round mr-2 py-1"
                color="primary"
                outline={!values.is_interaction}
                style={{borderRadius: '1.5rem'}}
                onClick={() => setFieldValue('is_interaction', true)}
              >
                Tương tác
              </Button.Ripple>
              <Button.Ripple
                className="round py-1"
                style={{borderRadius: '1.5rem'}}
                color="primary"
                outline={values.is_interaction}
                onClick={() => setFieldValue('is_interaction', false)}
              >
                Đối thủ
              </Button.Ripple>
            </FormGroup>
            <FormGroup className="mb-0">
              <Button
                disabled={!isValid || !dirty || isLoading}
                color="info"
                type="submit"
              >
                <SmallSpinner
                  text="Thêm nguồn trích xuất"
                  isLoading={isLoading}
                />
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormExtractionDataFB
