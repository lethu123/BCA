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
import ModalCard from './ModalCard.component'

const ModalNewValue = ({
  toggleModal,
  modal,
  handleFilter,
  handleRenderCard,
  toggleModal2,
  valueMap,
  valueSearchCreate,
  valueSearchCreateGain,
  arrValueMap,
  arrValueGain,
  addCard,
  valueGain,
  valueJob,
  valueSearchCreateJob,
  arrValueJob,
}) => {
  return (
    <Modal
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered"
      backdrop={false}
    >
      <ModalHeader
        toggle={toggleModal}
      >{`Add Customer ${addCard}`}</ModalHeader>
      <ModalBody style={{overflowY: 'scroll', height: 400}}>
        <FormGroup className="form-label-group" style={{position: 'relative'}}>
          <Search size={18} style={{position: 'absolute', top: 12, left: 11}} />

          <Input
            type="text"
            placeholder="Search by Value Map name..."
            style={{paddingLeft: 33}}
            onChange={handleFilter}
          />
        </FormGroup>
        <div>
          {valueSearchCreate &&
            addCard === 'pain' &&
            valueMap.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  onClick={() => handleRenderCard(item)}
                  style={{cursor: 'pointer'}}
                >
                  <ModalCard item={item} />
                </Card>
              )
            })}

          {!valueSearchCreate &&
            addCard === 'pain' &&
            arrValueMap.map((item, index) => (
              <Card
                key={item.id}
                onClick={() => handleRenderCard(item)}
                style={{cursor: 'pointer'}}
              >
                <ModalCard item={item} />
              </Card>
            ))}
          {valueSearchCreateGain &&
            addCard === 'gain' &&
            valueGain.map((item, index) => (
              <Card
                key={item.id}
                onClick={() => handleRenderCard(item)}
                style={{cursor: 'pointer'}}
              >
                <ModalCard item={item} />
              </Card>
            ))}
          {!valueSearchCreateGain &&
            addCard === 'gain' &&
            arrValueGain.map((item, index) => (
              <Card
                key={item.id}
                onClick={() => handleRenderCard(item)}
                style={{cursor: 'pointer'}}
              >
                <ModalCard item={item} />
              </Card>
            ))}
          {valueSearchCreateJob &&
            addCard === 'job' &&
            valueJob.map((item, index) => (
              <Card
                key={item.id}
                onClick={() => handleRenderCard(item)}
                style={{cursor: 'pointer'}}
              >
                <ModalCard item={item} />
              </Card>
            ))}
          {!valueSearchCreateJob &&
            addCard === 'job' &&
            arrValueJob.map((item, index) => (
              <Card
                key={item.id}
                onClick={() => handleRenderCard(item)}
                style={{cursor: 'pointer'}}
              >
                <ModalCard item={item} />
              </Card>
            ))}
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex justify-content-center align-items-center w-100">
          <Button.Ripple color="flat-primary" onClick={toggleModal2}>
            <PlusCircle color="#ff6700" className="mr-1" />
            Add New Value Map
          </Button.Ripple>
        </div>
      </ModalFooter>
    </Modal>
  )
}

export default ModalNewValue
