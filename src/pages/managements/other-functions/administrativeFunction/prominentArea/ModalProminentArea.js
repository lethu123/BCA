import React, {useState} from 'react'
import {X, Save} from 'react-feather'
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
} from 'reactstrap'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
// *** Components
import TextField from 'components/form/TextField'
import EditorField from 'components/form/EditorField'
import FilterColumn from 'components/filter-column/FilterColumn'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalProminentArea = ({centeredModal, setCenteredModal}) => {
  // *** State
  const [dataMember, setDataMember] = useState([
    {id: 1, value: 'UVTN ', color: 'primary', check: false},
    {id: 2, value: 'KHTN ', color: 'primary', check: false},
    {id: 3, value: 'Đại lý ', color: 'primary', check: false},
  ])
  const [dataProduct, setDataProduct] = useState([
    {id: 1, value: 'BHNT ', color: 'primary', check: false},
    {id: 2, value: 'BHPNT ', color: 'primary', check: false},
  ])
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    title: '',
    content: '',
  }
  const formSchema = Yup.object().shape({
    title: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    content: Yup.string().required('Bạn phải nhập mô tả'),
  })
  return (
    <div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          close={CloseBtn}
          toggle={() => setCenteredModal(!centeredModal)}
        >
          Tạo tin nổi bật
        </ModalHeader>
        <ModalBody>
          <PerfectScrollbar>
            <Formik
              initialValues={initialState}
              enableReinitialize={true}
              validationSchema={formSchema}
            >
              {({
                values,
                setFieldValue,
                setFieldTouched,
                isValid,
                isSubmitting,
                dirty,
                errors,
                touched,
              }) => (
                <Form>
                  <FormGroup>
                    <TextField
                      type="text"
                      name="title"
                      size="lg"
                      label="Tiêu đề"
                      placeholder="Nhập tiêu đề ..."
                      isRequired
                    />
                  </FormGroup>
                  <Row className="px-0 mx-0">
                    <Col md="6">
                      <FormGroup>
                        <FilterColumn
                          dataFilter={dataMember}
                          setDataFilter={setDataMember}
                          name="Cấp thành viên"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <FilterColumn
                          dataFilter={dataProduct}
                          setDataFilter={setDataProduct}
                          name="Tag sản phẩm"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <EditorField
                      name="content"
                      label="Nội dung"
                      onChange={(name, value) => console.log(value)}
                      isRequired
                    />
                  </FormGroup>
                </Form>
              )}
            </Formik>
          </PerfectScrollbar>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            <Save size={16} /> Tạo tin
          </Button>{' '}
          <Button
            color="secondary"
            onClick={() => setCenteredModal(!centeredModal)}
          >
            Hủy
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalProminentArea
