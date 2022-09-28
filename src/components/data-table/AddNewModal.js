import {X} from 'components/icon'
import {Modal, UncontrolledTooltip} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

// *** Styles
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

// *** Asset
import DefaultAvatar from 'assets/media/avatars/150-1.jpg'
import {Edit2} from 'react-feather'

const AddNewModal = ({open, handleModal}) => {
  return (
    <Modal
      scrollable
      isOpen={open}
      toggle={handleModal}
      className="modal-dialog-centered modal-lg"
      contentClassName="pt-0"
    >
      <div className="modal-header">
        {/*begin::Modal title*/}
        <h3 className="fw-bolder">Add Record</h3>
        {/*end::Modal title*/}
        {/*begin::Close*/}
        <div
          className="btn btn-icon btn-sm btn-active-icon-primary"
          onClick={handleModal}
        >
          <X />
        </div>
        {/*end::Close*/}
      </div>
      <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
        <PerfectScrollbar>
          {/*begin::Form*/}
          <form
            id="kt_modal_add_user_form"
            className="form fv-plugins-bootstrap5 fv-plugins-framework"
            action="#"
          >
            {/*begin::Scroll*/}
            <div
              className="d-flex flex-column scroll-y me-n7 pe-7"
              style={{maxHeight: 454}}
            >
              {/*begin::Input group*/}
              <div className="fv-row mb-3">
                {/*begin::Label*/}
                <label className="d-block fw-bold fs-6 mb-5">Avatar</label>
                {/*end::Label*/}
                {/*begin::Image input*/}
                <div className="image-input image-input-outline ml-10">
                  {/*begin::Preview existing avatar*/}
                  <div
                    className="image-input-wrapper w-125px h-125px"
                    style={{
                      backgroundImage: `url(${DefaultAvatar})`,
                    }}
                  />
                  {/*end::Preview existing avatar*/}
                  {/*begin::Label*/}
                  <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow">
                    <Edit2 id="Change_avatar" size={12} />
                    {/*begin::Inputs*/}
                    <input
                      type="file"
                      name="avatar"
                      accept=".png, .jpg, .jpeg"
                    />
                    <input type="hidden" name="avatar_remove" />
                    <UncontrolledTooltip placement="top" target="Change_avatar">
                      Change avatar
                    </UncontrolledTooltip>
                    {/*end::Inputs*/}
                  </label>
                  {/*end::Label*/}
                </div>
                {/*end::Image input*/}
                {/*begin::Hint*/}
                <div className="form-text">
                  Allowed file types: png, jpg, jpeg.
                </div>
                {/*end::Hint*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className="fv-row mb-3 fv-plugins-icon-container">
                {/*begin::Label*/}
                <label className="required fw-bold fs-6 mb-2">Full Name</label>
                {/*end::Label*/}
                {/*begin::Input*/}
                <input
                  type="text"
                  name="user_name"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="Full name"
                  defaultValue="Emma Smith"
                />
                {/*end::Input*/}
                <div className="fv-plugins-message-container invalid-feedback" />
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className="fv-row mb-3 fv-plugins-icon-container">
                {/*begin::Label*/}
                <label className="required fw-bold fs-6 mb-2">Email</label>
                {/*end::Label*/}
                {/*begin::Input*/}
                <input
                  type="email"
                  name="user_email"
                  className="form-control form-control-solid mb-3 mb-lg-0"
                  placeholder="example@domain.com"
                  defaultValue="e.smith@kpmg.com.au"
                />
                {/*end::Input*/}
                <div className="fv-plugins-message-container invalid-feedback" />
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className="mb-3">
                {/*begin::Label*/}
                <label className="required fw-bold fs-6 mb-5">Role</label>
                {/*end::Label*/}
                {/*begin::Roles*/}
                {/*begin::Input row*/}
                <div className="d-flex fv-row">
                  {/*begin::Radio*/}
                  <div className="form-check form-check-custom form-check-solid">
                    {/*begin::Input*/}
                    <input
                      className="form-check-input me-3"
                      name="user_role"
                      type="radio"
                      defaultValue={0}
                      id="kt_modal_update_role_option_0"
                      defaultChecked="checked"
                    />
                    {/*end::Input*/}
                    {/*begin::Label*/}
                    <label
                      className="form-check-label"
                      htmlFor="kt_modal_update_role_option_0"
                    >
                      <div className="fw-bolder text-gray-800">
                        Administrator
                      </div>
                      <div className="text-gray-600">
                        Best for business owners and company administrators
                      </div>
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Radio*/}
                </div>
                {/*end::Input row*/}
                <div className="separator separator-dashed my-5" />
                {/*begin::Input row*/}
                <div className="d-flex fv-row">
                  {/*begin::Radio*/}
                  <div className="form-check form-check-custom form-check-solid">
                    {/*begin::Input*/}
                    <input
                      className="form-check-input me-3"
                      name="user_role"
                      type="radio"
                      defaultValue={1}
                      id="kt_modal_update_role_option_1"
                    />
                    {/*end::Input*/}
                    {/*begin::Label*/}
                    <label
                      className="form-check-label"
                      htmlFor="kt_modal_update_role_option_1"
                    >
                      <div className="fw-bolder text-gray-800">Developer</div>
                      <div className="text-gray-600">
                        Best for developers or people primarily using the API
                      </div>
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Radio*/}
                </div>
                {/*end::Input row*/}
                <div className="separator separator-dashed my-5" />
                {/*begin::Input row*/}
                <div className="d-flex fv-row">
                  {/*begin::Radio*/}
                  <div className="form-check form-check-custom form-check-solid">
                    {/*begin::Input*/}
                    <input
                      className="form-check-input me-3"
                      name="user_role"
                      type="radio"
                      defaultValue={2}
                      id="kt_modal_update_role_option_2"
                    />
                    {/*end::Input*/}
                    {/*begin::Label*/}
                    <label
                      className="form-check-label"
                      htmlFor="kt_modal_update_role_option_2"
                    >
                      <div className="fw-bolder text-gray-800">Analyst</div>
                      <div className="text-gray-600">
                        Best for people who need full access to analytics data,
                        but don't need to update business settings
                      </div>
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Radio*/}
                </div>
                {/*end::Input row*/}
                <div className="separator separator-dashed my-5" />
                {/*begin::Input row*/}
                <div className="d-flex fv-row">
                  {/*begin::Radio*/}
                  <div className="form-check form-check-custom form-check-solid">
                    {/*begin::Input*/}
                    <input
                      className="form-check-input me-3"
                      name="user_role"
                      type="radio"
                      defaultValue={3}
                      id="kt_modal_update_role_option_3"
                    />
                    {/*end::Input*/}
                    {/*begin::Label*/}
                    <label
                      className="form-check-label"
                      htmlFor="kt_modal_update_role_option_3"
                    >
                      <div className="fw-bolder text-gray-800">Support</div>
                      <div className="text-gray-600">
                        Best for employees who regularly refund payments and
                        respond to disputes
                      </div>
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Radio*/}
                </div>
                {/*end::Input row*/}
                <div className="separator separator-dashed my-5" />
                {/*begin::Input row*/}
                <div className="d-flex fv-row">
                  {/*begin::Radio*/}
                  <div className="form-check form-check-custom form-check-solid">
                    {/*begin::Input*/}
                    <input
                      className="form-check-input me-3"
                      name="user_role"
                      type="radio"
                      defaultValue={4}
                      id="kt_modal_update_role_option_4"
                    />
                    {/*end::Input*/}
                    {/*begin::Label*/}
                    <label
                      className="form-check-label"
                      htmlFor="kt_modal_update_role_option_4"
                    >
                      <div className="fw-bolder text-gray-800">Trial</div>
                      <div className="text-gray-600">
                        Best for people who need to preview content data, but
                        don't need to make any updates
                      </div>
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Radio*/}
                </div>
                {/*end::Input row*/}
                {/*end::Roles*/}
              </div>
              {/*end::Input group*/}
            </div>
            {/*end::Scroll*/}
            {/*begin::Actions*/}
            <div className="text-center pt-15">
              <button
                type="reset"
                className="btn btn-white me-3"
                onClick={handleModal}
              >
                Discard
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleModal}
              >
                <span className="indicator-label">Submit</span>
              </button>
            </div>
            {/*end::Actions*/}
            <div />
          </form>
          {/*end::Form*/}
        </PerfectScrollbar>
      </div>
    </Modal>
  )
}

export default AddNewModal
