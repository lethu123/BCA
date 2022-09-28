import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import {Row, Col, Button, Badge, Alert} from 'reactstrap'
import TextField from 'components/form/TextField'
import {ArrowLeft, ArrowRight, Users} from 'react-feather'
import TextareaField from 'components/form/TextareaField'
import SelectField from 'components/form/SelectField'
import {components} from 'react-select'
import imgDefault from 'assets/images/avatars/avatar-blank.png'

// *** Query
import {AutomationQuery} from '@services/automation/'

const OptionComponent = ({data, ...props}) => (
  <components.Option {...props}>
    <div className="d-flex align-items-center mt-5 mb-5">
      <div className="symbol symbol-40 symbol-light-white mr-5">
        <div>
          <img
            src={imgDefault}
            className="h-100 rounded align-self-end"
            alt=""
          />
        </div>
      </div>

      <div className="d-flex flex-column font-weight-bold">
        <a
          href={`https://www.facebook.com/profile.php?id=${data.uid}`}
          target="_blank"
          className="text-dark text-hover-primary mb-1 font-size-lg"
          rel="noreferrer"
        >
          {data.username}
        </a>
        <span className="text-muted">
          <Users className="mr-2" size="12" />
          {data.c_friends}
        </span>
      </div>
    </div>
  </components.Option>
)

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Tên không được để trống!'),
  description: Yup.string().required('Mô tả không được để trống!'),
  //table_type: Yup.object().required('Bạn phải chọn Nguồn dữ liệu!').nullable(),
  account: Yup.array().min(1, 'Bạn phải chọn ít nhất 1 tài khoản'),
})

const FilterStep1 = ({
  stepper,
  dataSubmit,
  setDataSubmit,
  handlePrevious,
  isEdit,
}) => {
  const {dataQuery: accountQuery} = AutomationQuery.useListAccountFB()

  console.log('DATASUBMIT', dataSubmit)

  return (
    <div>
      {!isEdit && (
        <Alert color="warning">
          <div className="alert-body">{dataSubmit.name} chỉ có thể xem</div>
        </Alert>
      )}
      <Formik
        initialValues={{
          ...dataSubmit,
          account: dataSubmit.account
            ? dataSubmit.account.map(acc => ({
                ...acc,
                value: acc._id,
                label: acc.username,
              }))
            : [],
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          setDataSubmit(values)
          stepper.next()
        }}
      >
        {({setFieldValue}) => (
          <Form>
            <Row>
              <Col md={6}>
                <TextField
                  type="text"
                  name="name"
                  label="Tên bộ lọc"
                  placeholder="Nhập tên bộ lọc . . ."
                  isRequired={true}
                  disabled={!isEdit}
                />
              </Col>
              <Col md="6">
                {isEdit ? (
                  <SelectField
                    name="account"
                    label="Chọn tài khoản"
                    isRequired={true}
                    components={{
                      Option: OptionComponent,
                    }}
                    isMulti
                    isCheckAll
                    defaultValue={dataSubmit.account.map(ele => ({
                      ...ele,
                      label: ele.username,
                      value: ele._id,
                    }))}
                    options={
                      accountQuery?.map(ele => ({
                        ...ele,
                        label: ele.username,
                        value: ele._id,
                      })) || []
                    }
                  />
                ) : (
                  <>
                    <div className="mb-2 font-weight-bold">
                      Danh sách tài khoản:
                    </div>
                    <div>
                      {dataSubmit.account.map(ele => (
                        <Badge
                          key={ele._id}
                          color="light-primary"
                          className="mr-2"
                        >
                          {ele.username}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
              </Col>
              <Col md="6">
                <SelectField
                  name="table_type"
                  label="Nguồn dữ liệu"
                  isRequired={true}
                  disabled={!isEdit}
                  defaultValue={[
                    {
                      label: 'Khai thác khách hàng tiềm năng',
                      value: 'cx',
                    },
                  ]}
                  options={[
                    {
                      label: 'Khai thác khách hàng tiềm năng',
                      value: 'cx',
                    },
                  ]}
                  onChange={(name, option) => {
                    setFieldValue(name, option)
                  }}
                />
              </Col>
              <Col md={6}>
                <TextareaField
                  disabled={!isEdit}
                  type="text"
                  name="description"
                  label="Mô Tả"
                  placeholder="Nhập mô tả cho bộ lọc..."
                  isRequired
                />
              </Col>
            </Row>

            <div className="d-flex justify-content-end">
              {handlePrevious !== undefined && (
                <div>
                  <Button.Ripple
                    color="secondary"
                    className="btn-prev mr-3"
                    size="sm"
                    type="button"
                    outline
                    onClick={handlePrevious}
                  >
                    <ArrowLeft
                      size={14}
                      className="align-middle mr-sm-2 mr-0"
                    ></ArrowLeft>
                    <span className="align-middle d-sm-inline-block d-none">
                      Quay lại
                    </span>
                  </Button.Ripple>
                </div>
              )}
              <div>
                <Button.Ripple
                  size="sm"
                  type="submit"
                  color="primary"
                  className="btn-next"
                >
                  <span className="align-middle d-inline-block">Tiếp theo</span>
                  <ArrowRight
                    size={14}
                    className="align-middle ml-sm-2 ml-0"
                  ></ArrowRight>
                </Button.Ripple>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FilterStep1
