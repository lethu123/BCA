import React from 'react'
import {PlusCircle, Search} from 'react-feather'
import {
  Button,
  Card,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import ModalCardTab3 from './ModalCardTab3.component'

const ModalNewValueTab3 = ({
  toggleModal,
  modal,
  handleClickCard,
  valueSearch,
  handleFilter,
  listValue,
  arrValue,
  toggleModal2,
}) => {
  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggleModal}
        className="modal-dialog-centered"
        backdrop={false}
      >
        <ModalHeader toggle={toggleModal}>
          Interrelate with Evidence
        </ModalHeader>
        <ModalBody style={{overflowY: 'scroll', height: 400}}>
          <FormGroup
            className="form-label-group"
            style={{position: 'relative'}}
          >
            <Search
              size={18}
              style={{position: 'absolute', top: 12, left: 11}}
            />

            <Input
              type="text"
              placeholder="Search by Value Map name..."
              style={{paddingLeft: 33}}
              onChange={handleFilter}
            />
          </FormGroup>
          <div
            style={{
              width: '100%',
              background: '#6eb144',
              marginBottom: '20px',
            }}
          >
            <p
              className="mb-0 text-center py-1"
              style={{color: '#ffffff', fontSize: '16px'}}
            >
              02 Interrelated Evidence
            </p>
          </div>
          <div>
            {valueSearch &&
              arrValue.map((item, index) => {
                return (
                  <Card
                    key={item.id}
                    onClick={() => handleClickCard(item)}
                    style={{cursor: 'pointer'}}
                  >
                    <ModalCardTab3 item={item} />
                  </Card>
                )
              })}

            {!valueSearch &&
              listValue.map((item, index) => (
                <Card
                  key={item.id}
                  onClick={() => handleClickCard(item)}
                  style={{cursor: 'pointer'}}
                >
                  <ModalCardTab3 item={item} />
                </Card>
              ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex justify-content-center align-items-center w-100">
            <Button.Ripple color="flat-primary" onClick={toggleModal2}>
              <PlusCircle color="#ff6700" className="mr-1" />
              Add New Evidence Survey
            </Button.Ripple>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalNewValueTab3
