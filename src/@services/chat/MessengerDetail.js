import React, {useEffect, useState} from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  // CardTitle,
  // CardHeader,
  Card,
  CardBody,
  Row,
  Col,
} from 'reactstrap'
// import {Edit3, Trash2} from 'react-feather'

const ChatContentModal = ({
  open,
  close,
  content,
  setContent,
  currentUser,
  deleteMessenger,
  updateMessenger,
}) => {
  const [images, setImages] = useState([])
  // const inputFileRef = useRef()
  useEffect(() => {
    if (content) {
      setImages(content.images)
    }
  }, [content])

  return (
    <React.Fragment>
      <Modal
        isOpen={open}
        toggle={close}
        className={`modal-dialog-centered modal-lg`}
      >
        <ModalHeader toggle={close}>Chat content</ModalHeader>
        <ModalBody>
          {images.length > 0 && (
            <>
              <h5>
                <span className="text-bold-600">Photos </span>
              </h5>
              <Row>
                {images.map((ele, index) => (
                  <Col md="4" sm="6" className="user-latest-img" key={index}>
                    <Card>
                      <CardBody style={{padding: '0'}}>
                        <img
                          src={ele}
                          alt="upload1"
                          className="img-fluid rounded-sm"
                        />
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}

          <FormGroup className="form-label-group">
            <Input
              disabled={currentUser.uid !== (content && content.senderId)}
              type="textarea"
              rows="3"
              bsSize="sm"
              value={content && content.msg}
              onChange={e => setContent(e.target.value)}
              placeholder="Small Input"
            />
          </FormGroup>
          <p className="text-muted">{content && content.time}</p>
        </ModalBody>
        <ModalFooter>
          {currentUser.uid === (content && content.senderId) ? (
            <>
              <Button
                color="primary"
                className="mr-1"
                onClick={updateMessenger}
              >
                Update
              </Button>

              <Button color="danger" className="mr-1" onClick={deleteMessenger}>
                Delete
              </Button>
            </>
          ) : (
            <Button color="info" className="mr-1" onClick={() => {}}>
              Report
            </Button>
          )}
          <Button color="light" className="mr-1" onClick={close}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default ChatContentModal
