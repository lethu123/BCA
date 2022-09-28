import TitleWithLine from '@core/components/title-with-line/TitleWithLine'
// import MyDropZoneImg from 'components/feed/create-post/modal/step/MyDropZoneImg'
import {AlertCircle} from 'react-feather'
import {Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap'

const ReportModal = ({open, toggle}) => {
  return (
    <>
      <Modal
        className="modal-dialog-centered custom_modal_job"
        isOpen={open}
        toggle={toggle}
        scrollable
        style={{maxWidth: '576px'}}
      >
        <ModalHeader
          className="custom_modal_header bg-white border-bottom pb-3"
          toggle={toggle}
          style={{border: 'none'}}
        >
          <TitleWithLine
            className="title-24-16 text-color-primary-dark"
            color="#F6C9CC"
            text="Report post"
          />
        </ModalHeader>
        <ModalBody className="p-0">
          <div className="mb-2">
            <p className="d-flex align-items-center mb-1">
              <Label className="title-16-700-24 m-0 me-1" for="searchtextarea">
                Description your event
              </Label>
              <AlertCircle />
            </p>
            <Input
              type="textarea"
              name="text"
              id="searchtextarea"
              rows="10"
              placeholder="Search for keyword"
            />
            <p className="text-14-600 mt-1 text-color-back60">
              Provide more information about your event so guests know what to
              expect.
            </p>
          </div>
          <div className="border-bottom pb-2 mb-2">
            <p className="d-flex align-items-center mb-1">
              <Label className="title-16-700-24 m-0 me-1" for="privacy">
                Attachments
              </Label>
              <AlertCircle />
            </p>
            {/* <MyDropZoneImg /> */}
            <p className="text-14-600 text-color-back60 mt-1">
              Add attachment to add more information to this challenge
            </p>
          </div>
          <div className="d-flex justify-content-end">
            {/* <MyButton
              className="title-16-700-24 text-color-primary-dark me-1"
              color="gray-1"
              text="Cancel"
              onClick={toggle}
            />
            <MyButton
              className="title-16-700-24 text-color-primary-dark"
              color="gray-1"
              text="Send"
              style={{width: '25%'}}
            /> */}
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ReportModal
