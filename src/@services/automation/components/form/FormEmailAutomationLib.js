import React, {useEffect, useState} from 'react'
import {
  Row,
  Col,
  Label,
  Input,
  Button,
  Badge,
  // Alert,
  CardLink,
} from 'reactstrap'
import ReactPaginate from 'react-paginate'
import EmailItem from './EmailItem'
import {FormattedMessage} from 'react-intl'
import {ArrowLeft, ArrowRight, PlusCircle, RefreshCcw} from 'react-feather'
// import {useDebounce} from 'ahooks'

// *** component
import RadioField from 'components/form/RadioField'
// import TextareaField from 'components/form/TextareaField'
import EditorField from 'components/form/EditorField'

// *** CONTEXT
import {useSettingEmailCtx} from '@services/automation/context'

// *** query
// import {AutomationQuery} from '@services/automation'

const LIST_KEYS = ['FULLNAME', 'EMAIL', 'PHONE', 'ADDRESS', 'LINKS']

const FormEmailAutomationLib = ({stepper}) => {
  const {state, settingSendEmail} = useSettingEmailCtx()
  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('dataTemplate')),
  )
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('dataTemplate')))
  }, [])
  // const [err, setErr] = useState([])

  // const {data} = AutomationQuery.useGetTemplateEmail()

  console.log('data', data)

  // *** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  // const key = useDebounce(state.email_content, {wait: 400})
  // useEffect(() => {
  //   const firstIndex = key.indexOf('{')
  //   const lastIndex = key.lastIndexOf('}')

  //   let data =
  //     firstIndex !== -1 &&
  //     lastIndex !== -1 &&
  //     key
  //       .slice(firstIndex + 2, lastIndex - 1)
  //       .trim()
  //       .replaceAll('{', '')
  //       .replaceAll('}', '')
  //   if (data) {
  //     console.log('KEY: ', data)

  //     let dataCheck = data.split(' ')
  //     let dataErr = []
  //     dataCheck.forEach(d => {
  //       if (d && !LIST_KEYS.includes(d)) {
  //         dataErr.push(d)
  //       }
  //     })
  //     setErr(dataErr)
  //   } else {
  //     setErr([])
  //   }
  // }, [key])

  return (
    <div>
      <div className="d-flex justify-content-center">
        <RadioField
          name="is_use_template_builder"
          label="Chọn dùng template"
          inline
          options={[
            {
              value: true,
              label: 'Dùng template builder',
              size: 'lg',
              checked: state.is_use_template_builder,
            },
            {
              value: false,
              label: 'Không dùng template builder',
              size: 'lg',
              checked: !state.is_use_template_builder,
            },
          ]}
          onChange={(name, value) => {
            settingSendEmail({name, value})
          }}
        />
      </div>
      <div className="divider divider-primary mb-5">
        <div className="divider-text">
          {state.is_use_template_builder
            ? 'Chọn Email từ hệ thống'
            : 'Soạn nội dung Email'}
        </div>
      </div>
      {state.is_use_template_builder ? (
        <div>
          <Row className="justify-content-between mx-0 my-5">
            <Col
              className="d-flex align-items-center justify-content-end mt-1"
              md="6"
              sm="12"
            >
              <Label className="mr-1" for="search-input-20">
                <FormattedMessage id="Search" />
              </Label>
              <Input
                className="dataTable-filter mb-50"
                type="text"
                bsSize="sm"
                id="search-input-20"
                // value={searchValue}
              />
            </Col>
            <Col md="6" sm="12">
              <div className="text-right mb-4">
                <Button
                  onClick={() =>
                    setData(JSON.parse(localStorage.getItem('dataTemplate')))
                  }
                  color="secondary"
                  type="button"
                  className="mr-2"
                >
                  <RefreshCcw size="18" className="mb-1 mr-2" />
                  Làm mới
                </Button>
                <CardLink
                  href="/admin/automation/email-builder/create"
                  target="blank"
                  className="text-white"
                >
                  <Button color="primary" type="submit">
                    <PlusCircle size="18" className="mb-1 mr-2" />
                    Email Builder
                  </Button>
                </CardLink>
              </div>
            </Col>
          </Row>
          <Row>
            {data?.length > 0 &&
              data?.map(ele => (
                <Col md={6} xl="4" key={ele.id} className="my-3">
                  <EmailItem item={ele} stepper={stepper} />
                </Col>
              ))}
          </Row>
          <ReactPaginate
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={data?.length / 10 || 1}
            breakLabel={'...'}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName={'active'}
            pageClassName={'page-item'}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item next'}
            previousClassName={'page-item prev'}
            previousLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={
              'pagination my-3 react-paginate pagination-sm justify-content-center pr-1 mt-1'
            }
            nextLabel={''}
            previousLabel={''}
          />
        </div>
      ) : (
        <div>
          <div className="row align-items-center my-3">
            <div className="col-md-6">
              {LIST_KEYS.map(el => (
                <Badge
                  color="primary"
                  onClick={() =>
                    settingSendEmail({
                      name: 'email_content',
                      value: `${state.email_content} {{${el}}}`,
                    })
                  }
                  className="mx-1 cursor-pointer"
                  key={el}
                >
                  {`{{${el}}}`}
                </Badge>
              ))}
            </div>
            {/* {err && err.length > 0 && (
              <div className="col-md-6 my-1">
                <Alert color="danger">
                  <div className="alert-body">
                    <AlertCircle size={15} className="mr-3" />{' '}
                    <span className="ms-1">
                      Biến {err.map(er => `{{${err}}}`)} Không hợp lệ
                    </span>
                  </div>
                </Alert>
              </div>
            )} */}
          </div>

          <EditorField
            name="email_content"
            label="Nhập nội dung email..."
            data={state.email_content}
            onChange={(name, value) => {
              settingSendEmail({name, value})
            }}
          />

          {/* <TextareaField
            name="email_content"
            placeholder="Nhập nội dung email..."
            value={state.email_content}
            onChange={(name, value) => {
              settingSendEmail({name, value})
            }}
          /> */}
        </div>
      )}

      <div className="text-right mt-20">
        <Button.Ripple
          color="secondary"
          outline
          className="btn-prev"
          size="sm"
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
          className="btn-next ml-2"
          size="sm"
          onClick={() => {
            stepper.next()
          }}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
          <ArrowRight size={14} className="align-middle ml-5"></ArrowRight>
        </Button.Ripple>
      </div>
    </div>
  )
}

export default FormEmailAutomationLib
