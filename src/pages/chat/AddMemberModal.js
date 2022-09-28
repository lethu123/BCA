import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {Link} from 'react-router-dom'

// ** assets
import imgGoogle from 'assets/media/svg/brand-logos/google-icon.svg'
import img from 'assets/media/avatars/150-4.jpg'
import PerfectScrollbar from 'react-perfect-scrollbar'

const AddMemberModal = ({modal, toggleModal}) => {
  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered modal-xl"
      scrollable
    >
      <ModalHeader toggle={toggleModal}>Add Member</ModalHeader>
      <ModalBody>
        <PerfectScrollbar>
          <div
            className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"
            data-select2-id="select2-data-123-ealw"
          >
            {/*begin::Heading*/}
            <div className="text-center mb-13">
              {/*begin::Title*/}
              <h1 className="mb-3">Invite a Friend</h1>
              {/*end::Title*/}
              {/*begin::Description*/}
              <div className="text-gray-400 fw-bold fs-5">
                If you need more info, please check out
                <Link to="#" className="link-primary fw-bolder">
                  FAQ Page
                </Link>
                .
              </div>
              {/*end::Description*/}
            </div>
            {/*end::Heading*/}
            {/*begin::Google Contacts Invite*/}
            <div className="btn btn-light-primary fw-bolder w-100 mb-8">
              <img alt="Logo" src={imgGoogle} className="h-20px me-3" />
              Invite Gmail Contacts
            </div>
            {/*end::Google Contacts Invite*/}
            {/*begin::Separator*/}
            <div className="separator d-flex flex-center mb-8">
              <span className="text-uppercase bg-white fs-7 fw-bold text-gray-400 px-3">
                or
              </span>
            </div>
            {/*end::Separator*/}
            {/*begin::Textarea*/}
            <textarea
              className="form-control form-control-solid mb-8"
              rows={3}
              placeholder="Type or paste emails here"
              defaultValue={''}
            />
            {/*end::Textarea*/}
            {/*begin::Users*/}
            <div className="mb-10" data-select2-id="select2-data-122-v2q0">
              {/*begin::Heading*/}
              <div className="fs-6 fw-bold mb-2">Invite to conversation</div>
              {/*end::Heading*/}
              {/*begin::List*/}
              <div
                className="mh-300px scroll-y me-n7 pe-7"
                data-select2-id="select2-data-121-c7bd"
              >
                {/*begin::User*/}
                <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                  {/*begin::Details*/}
                  <div className="d-flex align-items-center">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src={img} />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-5">
                      <Link
                        to="#"
                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                      >
                        Emma Smith
                      </Link>
                      <div className="fw-bold text-gray-400">
                        e.smith@kpmg.com.au
                      </div>
                    </div>
                    {/*end::Details*/}
                  </div>
                  {/*end::Details*/}
                  {/*begin::Access menu*/}
                  <div className="ms-2 w-100px">
                    <Button.Ripple className="round" color="primary">
                      Add
                    </Button.Ripple>
                  </div>
                  {/*end::Access menu*/}
                </div>
                {/*end::User*/}
                {/*begin::User*/}
                <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                  {/*begin::Details*/}
                  <div className="d-flex align-items-center">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle">
                      <span className="symbol-label bg-light-danger text-danger fw-bold">
                        M
                      </span>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-5">
                      <Link
                        to="#"
                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                      >
                        Melody Macy
                      </Link>
                      <div className="fw-bold text-gray-400">
                        melody@altbox.com
                      </div>
                    </div>
                    {/*end::Details*/}
                  </div>
                  {/*end::Details*/}
                  {/*begin::Access menu*/}
                  <div className="ms-2 w-100px">
                    <Button.Ripple className="round" color="primary">
                      Add
                    </Button.Ripple>
                  </div>
                  {/*end::Access menu*/}
                </div>
                {/*end::User*/}
                {/*begin::User*/}
                <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                  {/*begin::Details*/}
                  <div className="d-flex align-items-center">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src={img} />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-5">
                      <Link
                        to="#"
                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                      >
                        Max Smith
                      </Link>
                      <div className="fw-bold text-gray-400">max@kt.com</div>
                    </div>
                    {/*end::Details*/}
                  </div>
                  {/*end::Details*/}
                  {/*begin::Access menu*/}
                  <div className="ms-2 w-100px">
                    <Button.Ripple className="round" color="primary">
                      Add
                    </Button.Ripple>
                  </div>
                  {/*end::Access menu*/}
                </div>
                {/*end::User*/}
                {/*begin::User*/}
                <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                  {/*begin::Details*/}
                  <div className="d-flex align-items-center">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src={img} />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Details*/}
                    <div className="ms-5">
                      <Link
                        to="#"
                        className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                      >
                        Sean Bean
                      </Link>
                      <div className="fw-bold text-gray-400">
                        sean@dellito.com
                      </div>
                    </div>
                    {/*end::Details*/}
                  </div>
                  {/*end::Details*/}
                  {/*begin::Access menu*/}
                  <div className="ms-2 w-100px">
                    <Button.Ripple className="round" color="primary">
                      Add
                    </Button.Ripple>
                  </div>
                  {/*end::Access menu*/}
                </div>
                {/*end::User*/}
              </div>
              {/*end::List*/}
            </div>
            {/*end::Users*/}
          </div>
        </PerfectScrollbar>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleModal}>
          Submit
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddMemberModal
