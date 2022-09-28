import React, {useState, useEffect} from 'react'
import {
  Button,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import ReactPaginate from 'react-paginate'

// ** component

import TextareaField from 'components/form/TextareaField'
import UploadImageField from 'components/form/UploadImageField'

// *** query
import AutomationQuery from '@services/automation/hook/query'

const formSchema = Yup.object().shape({
  content: Yup.string().required('Yêu cầu nhập nội dung bài viết'),
})

const FormPostAutomation = ({setSetting, setting, id, onDelete}) => {
  const [active, setActive] = useState('1')
  const [currentPage, setCurrentPage] = useState(0)
  // *** get data
  const {data: listSamplePost, refetch} =
    AutomationQuery.useGetListSampleLibary({
      page: currentPage + 1,
      limit: 5,
    })
  //  *** List Post
  const [listPost, setListPost] = useState([])
  const [totalPage, setTotalPage] = useState(1)
  useEffect(() => {
    if (listSamplePost) {
      setListPost(
        listSamplePost.data?.map(item => ({
          id: item._id,
          content: item.content,
          pictures: item.pictures,
          type: item.type,
        })),
      )
      setTotalPage(listSamplePost.metadata.num_pages)
    }
  }, [listSamplePost])
  useEffect(() => {
    setTimeout(() => {
      refetch()
    }, 10)
  }, [currentPage])

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
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className="border-0"
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            {id?.includes('reply_comment_sasam_action')
              ? 'Trả lời bình luận'
              : ' Tạo bình luận'}
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
          <div className="mt-4">
            <Formik
              initialValues={{
                content: setting?.content || '',
                pictures: null,
              }}
              validationSchema={formSchema}
              onSubmit={values => {
                setSetting(values, id)
              }}
              enableReinitialize
            >
              {({values, setFieldValue}) => (
                <Form>
                  <TextareaField
                    name="content"
                    label="Nội dung"
                    placeholder="Nhập nội dung"
                    // isRequired
                  />
                  <UploadImageField
                    height="150px"
                    name="pictures"
                    label="Upload hình ảnh"
                    onChange={(name, value) => setFieldValue(name, value)}
                    defaultInitValues={
                      setting?.pictures
                        ? typeof setting?.pictures[0] === 'object'
                          ? setting?.pictures.map(file =>
                              URL.createObjectURL(file),
                            )
                          : setting?.pictures
                        : []
                    }
                    isMulti
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
                </Form>
              )}
            </Formik>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="mt-4">
            <Table hover responsive>
              <thead>
                <tr>
                  <th className="pl-3 ">Nội dung</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listPost.map((item, idx) => (
                  <tr key={idx}>
                    <td className="pl-3">
                      <p> {item.content} </p>
                      {item.pictures?.length > 0 && (
                        <Row className="mt-5">
                          {item.pictures.map((picture, index) => (
                            <Col lg="3" key={index} className="my-1">
                              <img
                                className="img-fluid"
                                src={picture}
                                alt="anh"
                                style={{
                                  width: 130,
                                  height: 90,
                                  borderRadius: 5,
                                }}
                              />
                            </Col>
                          ))}
                        </Row>
                      )}
                    </td>
                    <td className="text-right pr-3">
                      <Button.Ripple
                        size="sm"
                        onClick={() => {
                          setSetting(
                            {
                              content: item.content,
                              pictures: item.pictures,
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
            pageCount={totalPage}
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
    </div>
  )
}

export default FormPostAutomation
