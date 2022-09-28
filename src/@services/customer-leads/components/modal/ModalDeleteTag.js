import React, {useEffect, useState} from 'react'
import {AlertCircle, X} from 'react-feather'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  CustomInput,
  Row,
  Col,
  Alert,
} from 'reactstrap'

import {CustomerLeadsMutation} from '@services/customer-leads'

const ModalDeleteTag = ({modalDeleteTag, setDeleteTag, listTags}) => {
  console.log('listTags', listTags)
  const [listTagChecked, setListTagChecked] = useState([])
  useEffect(() => {
    if (listTags) {
      setListTagChecked(listTags)
    }
  }, [listTags])

  // *** useMutation
  const {mutate} = CustomerLeadsMutation.useDeleteTagCustomerLead()

  return (
    <Modal
      isOpen={modalDeleteTag}
      toggle={() => setDeleteTag(!modalDeleteTag)}
      className="modal-dialog-centered modal-delete-tag modal-lg "
    >
      <ModalHeader
        toggle={() => setDeleteTag(!modalDeleteTag)}
        close={
          <div
            className="cursor-pointer"
            onClick={() => setDeleteTag(!modalDeleteTag)}
          >
            <X />
          </div>
        }
      >
        Xóa Tags
      </ModalHeader>
      <ModalBody>
        {listTagChecked.length > 0 ? (
          <div className="overflow-auto">
            <CustomInput
              type="checkbox"
              id="ChooseAllDelete"
              label="Chọn tất cả"
              className="mb-3 font-weight-bold"
              onChange={e =>
                setListTagChecked(
                  listTagChecked.map(ele => ({
                    ...ele,
                    checked: e.target.checked,
                  })),
                )
              }
            />

            <Row>
              {listTagChecked?.map(ele => (
                <Col md="6" key={ele.tag_id}>
                  <CustomInput
                    type="checkbox"
                    id={ele.tag_id}
                    label={ele.label}
                    className="mb-2"
                    checked={ele.checked}
                    onChange={e =>
                      setListTagChecked(
                        listTagChecked.map(item =>
                          ele.tag_id === item.tag_id
                            ? {...item, checked: !item.checked}
                            : item,
                        ),
                      )
                    }
                  />
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <Alert color="danger">
            <div className="alert-body">
              <AlertCircle size={15} />{' '}
              <span className="ml-1">Hiện tại không có tags để xóa</span>
            </div>
          </Alert>
        )}
      </ModalBody>

      <ModalFooter>
        <Button
          color="danger"
          onClick={() => {
            let listDelete = listTagChecked
              ?.filter(ele => ele.checked === true)
              ?.map(item => item.name)

            let formData = new FormData()
            formData.append('tags', JSON.stringify(listDelete))
            mutate({form: formData, data: listDelete})

            setDeleteTag(!modalDeleteTag)
          }}
          disabled={
            listTagChecked
              ?.filter(ele => ele.checked === true)
              ?.map(item => item.name).length > 0
              ? false
              : true
          }
        >
          Xóa
        </Button>{' '}
        <Button
          color="primary"
          outline
          onClick={() => setDeleteTag(!modalDeleteTag)}
        >
          Thoát
        </Button>{' '}
      </ModalFooter>
    </Modal>
  )
}

export default ModalDeleteTag
