import React, {Fragment, useState, useEffect} from 'react'
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
  Row,
  Col,
  Alert,
} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import ReactPaginate from 'react-paginate'
import {AlertCircle} from 'react-feather'

// ** component
import TextareaField from 'components/form/TextareaField'
import SelectField from 'components/form/SelectField'

// *** query
import AutomationQuery from '@services/automation/hook/query'

const formSchema = Yup.object().shape({
  content: Yup.string().required('Yêu cầu nhập nội dung'),
  phone: Yup.object().required('Yêu cầu chọn số điện thoại gửi').nullable(),
})

const FormSMSAutomation = ({setSetting, setting, id, onDelete, target}) => {
  const [active, setActive] = useState('1')
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(1)
  let targetForkInteraction =
    target?.length > 0 &&
    target.find(el => el.id && el.id.includes('fork_interaction'))
  let idTargetForkInteraction = targetForkInteraction?.id || false

  // *** get data
  const {data: list_Phone} = AutomationQuery.useGetListPhoneToSMS()
  console.log('list_Phone', list_Phone)
  const {data: list_sms, refetch} = AutomationQuery.useGetListTemplateSMS({
    page: currentPage + 1,
    limit: 5,
  })

  // *** List Phone
  const [listPhone, setListPhone] = useState([])
  useEffect(() => {
    if (list_Phone) {
      setListPhone(
        list_Phone.map(item => ({
          id: item._id,
          label: item.phone_number,
          value: item._id,
        })),
      )
    }
  }, [list_Phone])

  useEffect(() => {
    setTimeout(() => {
      refetch()
    }, 10)
  }, [currentPage])

  // *** List SMS
  const [listSMS, setListSMS] = useState([])
  useEffect(() => {
    if (list_sms) {
      setListSMS(
        list_sms.data?.map(item => ({
          id: item._id,
          content: item.content,
          phone: item.phone,
        })),
      )
      setTotalPage(list_sms.metadata.num_pages)
    }
  }, [list_sms])

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  // *** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  return (
    <Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className="border-0"
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            Tạo SMS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="border-0"
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            Thư viện mẫu
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={active}>
        <TabPane tabId="1">
          <Formik
            initialValues={{
              content: setting?.content || '',
              phone: setting?.phone
                ? listPhone.find(
                    phone_number => phone_number.value === setting.phone,
                  )
                : listPhone[0],
            }}
            validationSchema={formSchema}
            onSubmit={values => {
              setSetting(
                {content: values.content, phone: values.phone.value},
                id,
              )
            }}
            enableReinitialize
          >
            {() => (
              <Form>
                <div className="mt-4">
                  <Row>
                    <Col lg="6">
                      <SelectField
                        name="phone"
                        label="Chọn số điện thoại gửi"
                        isRequired
                        options={listPhone}
                      />
                    </Col>
                    <Col lg="12">
                      <TextareaField
                        isRequired
                        name="content"
                        label="Nội dung"
                        placeholder="Nhập nội dung SMS"
                        minRows={4}
                      />
                    </Col>
                    <Col lg="12">
                      {idTargetForkInteraction && (
                        <Alert color="danger">
                          <div className="alert-body py-0">
                            <AlertCircle size={15} />{' '}
                            <span className="ml-1">
                              <strong>{targetForkInteraction.title}</strong> đã
                              được liên kết, không thể xóa!
                            </span>
                          </div>
                        </Alert>
                      )}
                      <div className="text-right">
                        <Button type="submit" className="mr-2" color="primary">
                          Lưu
                        </Button>
                        <Button
                          onClick={() => onDelete(id)}
                          disabled={idTargetForkInteraction}
                          type="button"
                          color="danger"
                          style={{
                            cursor: idTargetForkInteraction
                              ? 'not-allowed'
                              : 'pointer',
                          }}
                        >
                          Xóa
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            )}
          </Formik>
        </TabPane>
        <TabPane tabId="2">
          <div className="mt-4">
            <Table hover responsive>
              <thead>
                <tr>
                  <th className="pl-3">Nội dung</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listSMS.map(item => (
                  <tr key={item.id}>
                    <td className="pl-3">
                      {/* <ul className="pl-3 py-0 list-style-none">
                        <li>
                          Số điện thoại gửi:{' '}
                          <span className="font-weight-bold text-dark">
                            {item.phone}
                          </span>
                        </li>
                        <li>Nội dung: {item.content}</li>
                      </ul> */}
                      <p className="mb-0 text-primary">{item.content}</p>
                    </td>
                    <td className="text-right pr-3">
                      <Button.Ripple
                        size="sm"
                        onClick={() => {
                          setSetting(
                            {
                              content: item.content,
                              phone: listPhone[0].value,
                            },
                            id,
                          )
                        }}
                        color="light"
                      >
                        Chọn
                      </Button.Ripple>{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <ReactPaginate
            previousLabel=""
            nextLabel=""
            forcePage={currentPage}
            onPageChange={page => handlePagination(page)}
            pageCount={totalPage || 1}
            breakLabel="..."
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName="active"
            pageClassName="page-item"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            nextLinkClassName="page-link"
            nextClassName="page-item next"
            previousClassName="page-item prev"
            previousLinkClassName="page-link"
            pageLinkClassName="page-link"
            containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center pr-1 mt-1"
          />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}

export default FormSMSAutomation
