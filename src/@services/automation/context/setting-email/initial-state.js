export const initialStateEmail = {
  // step1: choose email in system
  email_system_send: '',
  title: '',
  send_email_mode: 'cc',

  // step 2: Build template email
  lib_email: [], // List email in system
  is_use_template_builder: true, // mode template email
  email_template: null, // Chọn template có sẵn của hệ thống (object) sử dụng với is_use_template_builder = true
  email_content: '', // Soạn email thường sử dụng với is_use_template_builder = false
  email_content_review: '', // Soạn email thường sử dụng với is_use_template_builder = false

  // step 3: attach link email
  type_attached_link: 'link_system',
  list_seo_link_system: [],
  seo_link_system: [],
  seo_link_external: [],
  metadata: {},
  sid_current: {
    sid: null,
    url: '',
  },

  // email builder
  html_template_email: '', // save html after save design. (Lưu html để tiện cho việc add link vào template mà không cần gọi api để get template về)
  template_design: null,
}
