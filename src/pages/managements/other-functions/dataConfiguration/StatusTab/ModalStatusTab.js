import React, {useState} from 'react'
import {Save, X} from 'react-feather'
// *** Third Libary
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
// *** Components
import TextField from 'components/form/TextField'
import TextareaField from 'components/form/TextareaField'
import FilterColumn from 'components/filter-column/FilterColumn'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ModalStatusTab = ({centeredModal, setCenteredModal}) => {
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={20}
      onClick={() => setCenteredModal(false)}
    />
  )
  let initialState = {
    name: '',
    value1: '',
    value2: '',
    value3: '',
  }
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập tên sản phẩm'),
    value1: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
    value2: Yup.number().min(1, 'Số lượng phải lớn hơn 0'),
    value3: Yup.string().required('Bạn phải nhập ý nghĩa'),
  })
  const [dataFilter, setDataFilter] = useState([
    {id: 1, value: 'Khách hàng tiềm năng', color: 'primary', check: false},
    {id: 2, value: 'Ứng viên tiềm năng', color: 'primary', check: false},
  ])
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
          Tạo quy định về chuyển trạng thái
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
                      name="name"
                      size="lg"
                      label="Tên"
                      placeholder="Nguồn data ..."
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="text"
                      name="number"
                      size="lg"
                      label="Cờ trạng thái ban đầu"
                      placeholder="Nguồn số 1/0 ..."
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="number"
                      name="value2"
                      size="lg"
                      label="Level trạng thái"
                      placeholder="Nhập số ..."
                      isRequired
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextareaField
                      maxLength={20}
                      rows={4}
                      name="value3"
                      label="Mô tả ý nghĩa"
                      placeholder="Ý nghĩa của trạng thái  ..."
                    />
                  </FormGroup>
                  <FormGroup>
                    <FilterColumn
                      setDataFilter={setDataFilter}
                      dataFilter={dataFilter}
                      name="Hành động"
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
            <Save size={16} /> Tạo
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

export default ModalStatusTab
