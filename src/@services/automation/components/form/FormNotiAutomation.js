import React, {Fragment, useState} from 'react'
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Spinner,
} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import ReactPaginate from 'react-paginate'

// *** query
import AutomationQuery from '@services/automation/hook/query'
// ** component
import TextField from 'components/form/TextField'
import EditorField from 'components/form/EditorField'

const formSchema = Yup.object().shape({
  title: Yup.string().required('Yêu cầu nhập tiêu đề'),
  subtitle: Yup.string().required('Yêu cầu nhập tiêu đề phụ'),
  content: Yup.string().required('Yêu cầu nhập nội dung'),
})

const FormNotiAutomation = ({setSetting, setting, id, onDelete}) => {
  const [active, setActive] = useState('1')
  const [activePage, setActivePage] = useState(0)

  const {data: libraryNotification} =
    AutomationQuery.useListLibraryNotification({
      page: activePage + 1,
      limit: 5,
    })

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  //*** const
  const numberPage = libraryNotification?.metadata?.num_pages

  // function
  // const queryClient = useQueryClient()
  // useEffect(() => {
  // if (libraryNotification?.data) {
  //   debugger
  //   queryClient.prefetchQuery(
  //     [queryKeys.automation.getListLibraryNotification, activePage + 1],
  //     () => getListLibraryNotificationQuery({page: activePage + 1, limit: 1}),
  //   )
  // }
  // }, [libraryNotification, activePage, queryClient])

  const handlePagination = page => {
    setActivePage(page.selected)
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
            Tạo thông báo
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
              title: setting?.title || '',
              subtitle: setting?.subtitle || '',
              content: setting?.content || '',
            }}
            validationSchema={formSchema}
            onSubmit={values => {
              setSetting(values, id)
            }}
            enableReinitialize
          >
            {({values}) => (
              <Form>
                <div className="mt-4">
                  <TextField
                    type="text"
                    name="title"
                    label="Tiêu đề"
                    placeholder="Nhập tiêu đề"
                    isRequired
                  />
                  <TextField
                    type="text"
                    name="subtitle"
                    label="Tiêu đề phụ"
                    placeholder="Nhập tiêu đề phụ"
                    isRequired
                  />
                  <EditorField
                    data={values?.content}
                    name="content"
                    label="Nội dung"
                    isRequired
                  />
                  <div className="text-right">
                    <Button type="submit" className="mr-2" color="primary">
                      Lưu
                    </Button>
                    <Button
                      onClick={() => onDelete(id)}
                      type="button"
                      color="danger"
                    >
                      Xóa
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </TabPane>
        <TabPane tabId="2">
          <div className="mt-4">
            <div
              className="tab-pane p-3 px-lg-7 py-lg-5 fade show active"
              id="kt_aside_tab_1"
            >
              {/*begin::List*/}
              <div className="mb-12">
                <Row className="align-items-center mb-3">
                  {libraryNotification && libraryNotification.data ? (
                    libraryNotification.data.map(item => (
                      <Col lg="12" key={item.id}>
                        <Card className="bg-transparent border-info shadow-none">
                          <CardBody>
                            <CardTitle tag="div">
                              <div className="d-flex flex-wrap justify-content-between align-items-start">
                                <div>
                                  {item.title} <br />
                                  <small className="text-muted  ">
                                    {item.subtitle}
                                  </small>
                                </div>
                                <Button.Ripple
                                  size="sm"
                                  className="mt-2"
                                  onClick={() => {
                                    setSetting(
                                      {
                                        title: item.title,
                                        subtitle: item.subtitle,
                                        content: item.content,
                                      },
                                      id,
                                    )
                                  }}
                                  color="light"
                                >
                                  Chọn
                                </Button.Ripple>
                              </div>
                            </CardTitle>

                            <div className="cart-text">{item.content}</div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))
                  ) : (
                    <Button.Ripple color="flat-primary">
                      <Spinner color="primary" size="sm" type="grow" />
                      <span className="ml-50">Loading...</span>
                    </Button.Ripple>
                  )}
                </Row>
              </div>
            </div>
          </div>

          <ReactPaginate
            previousLabel=""
            nextLabel=""
            forcePage={activePage}
            onPageChange={page => handlePagination(page)}
            pageCount={numberPage || 1}
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

export default FormNotiAutomation
