import axios from 'axios'

import {handleAxios} from '../ultils'

const secret_key = localStorage.getItem('refreshToken')
const setupHeader = (url, params = {}) =>
  handleAxios(url, 'get', null, {'s-key': secret_key}, params)

const AutomationApi = {
  autojob: {
    get_list_auto_job_select_option_query: () =>
      handleAxios('/automation/autojob-select/', 'get', null),
    create_auto_job_automation_query: data =>
      handleAxios('/automation/auto-job/', 'post', data),
  },
  autotask: {
    get_list_auto_task_query: handleAxios('/automation/auto-task/', 'get'),
    create_auto_task_automation_query: data =>
      handleAxios('/automation/auto-task/', 'post', data),
    get_list_action_autotask_automation_query: setupHeader(
      '/automation/block-autotask-action',
    ),
  },
  common: {
    getBlockTypeActionQuery: setupHeader(
      '/automation/automation-block-action/',
    ),
    getBlockTypeDecisionQuery: setupHeader(
      '/automation/automation-block-decision/',
    ),
    getBlockTypeFacebookActionQuery: data =>
      setupHeader('/automation/automation-block-fb-action/', {
        page: data.page,
        limit: data.limit,
      }),
    getListPhoneToSMSQuery: setupHeader('/automation/mst-phone-number/'),
    getListTemplateSMSQuery: data =>
      setupHeader('/automation/mst-template-sms/', {
        page: data.page,
        limit: data.limit,
      }),
    getListSampleLibaryQuery: data =>
      setupHeader('/automation/mst-template-post-fb/', {
        page: data.page,
        limit: data.limit,
      }),
    getListCommentQuery: data =>
      setupHeader('/automation/mst-template-comment-fb/', {
        page: data.page,
        limit: data.limit,
      }),
    getListAccountFBQuery: setupHeader('/automation/mst-fb-account/'),
    getListEmailToSendEmailQuery: setupHeader('/automation/mst-system-email/'),
    getListLibraryNotificationQuery: data =>
      setupHeader('/automation/mst-template-notification/', {
        page: data.page,
        limit: data.limit,
      }),
    get_list_status_query: type =>
      setupHeader('/automation/automation-status/', type),
    get_list_data_field_sale_campaign_automation: setupHeader(
      '/automation/data-fields/',
    ),
    delete_auto_job_auto_task_query: id =>
      handleAxios(`/automation/action-flow/${id}/`, 'delete'),
    get_statistic_automation_query: type =>
      handleAxios('/automation/statistics/', 'get', null, {}, {type}),
    // get_block_type_action_query: handleAxios(
    //   '/automation/automation-block-action/',
    //   'get',
    // ),
    get_block_type_action_query: setupHeader(
      '/automation/automation-block-action/',
    ),
    get_block_type_decision_query: setupHeader(
      '/automation/automation-block-decision/',
    ),
    get_block_type_facebook_action_query: data =>
      handleAxios(
        '/automation/automation-block-fb-action/',
        'get',
        null,
        {},
        {page: data.page, limit: data.limit},
      ),
    update_action_flow_automation_query: data =>
      handleAxios('/automation/action-flow/', 'put', data),
    get_automation_info_query: id =>
      handleAxios(`/automation/action-flow/${id}/`, 'get'),
    get_list_account_fb_query: setupHeader('/automation/mst-fb-account/'),

    get_list_email_to_send_email_query: setupHeader(
      '/automation/mst-system-email/',
    ),
    get_list_phone_to_sms_query: setupHeader('/automation/mst-phone-number/'),
    get_list_library_notification_query: data =>
      handleAxios(
        '/automation/mst-template-notification/',
        'get',
        null,
        {},
        {page: data.page, limit: data.limit},
      ),
    get_list_template_sms_query: data =>
      handleAxios(
        '/automation/mst-template-sms/',
        'get',
        null,
        {},
        {page: data.page, limit: data.limit},
      ),
    get_list_sample_libary_query: data =>
      handleAxios(
        '/automation/mst-template-post-fb/',
        'get',
        null,
        {},
        {page: data.page, limit: data.limit},
      ),

    get_list_comment_query: data =>
      handleAxios(
        '/automation/mst-template-comment-fb/',
        'get',
        null,
        {},
        {page: data.page, limit: data.limit},
      ),
    create_campaign_query: data =>
      handleAxios('/automation/campaign/', 'post', data),

    update_campaign_query: data =>
      handleAxios(`/automation/campaign/${data.id}/`, 'put', data.data),

    get_statistic_sale_campaign_query: setupHeader(
      '/automation/campaign-statistics/',
    ),

    get_list_sale_campaign_query: setupHeader('/automation/campaign/get-all/'),

    get_status_campaign_query: setupHeader('/automation/campaign-status/'),
    delete_sale_campain_query: id =>
      handleAxios(`/automation/campaign/${id}/`, 'delete'),

    get_detail_campaign_query: (id, type) =>
      handleAxios(
        type === 'FB'
          ? `/automation/campaign-fb-care/${id}`
          : `/automation/campaign/${id}/`,
        'get',
      ),

    update_status_campaign_query: ({id, data}) =>
      handleAxios(`/automation/campaign-status/${id}/`, 'put', data),
    get_list_fb_careCampain: handleAxios(
      '/automation/campaign-fb-care/',
      'get',
    ),
    get_list_data_filter_automation_query: setupHeader(
      '/automation/filter-auto-job/',
    ),
    get_list_data_field_sale_campaign_automation_query: setupHeader(
      '/automation/data-fields/',
    ),
    get_list_data_field_fb_automation_query: setupHeader(
      '/automation/data-fields-fb-care/',
    ),

    get_metadata_website: url =>
      axios
        .post(
          'https://dev.cms.sasamviet.hspace.biz/api/v1/seo-engines/get-seo-by-url',
          {url},
        )
        .then(res => res.data),
    // get_metadata_website: () => {},

    get_all_metadata_website: params =>
      axios
        .get('https://dev.cms.sasamviet.hspace.biz/api/v1/seo-engines', {
          params,
        })
        .then(res => res.data),

    get_template_email: () => setupHeader('/email-template/'),
    create_template_email: data => {
      console.log(data)
      handleAxios('/email-template/', 'post', data, {'s-key': secret_key})
    },
  },

  filter: {
    // *** Create a filter
    create_automation_filter: data =>
      handleAxios('/automation/create-filters/', 'post', data),

    // *** delete a filter
    delete_automation_filter: _id =>
      handleAxios(`/automation/delete-filters/${_id}`, 'delete'),

    // *** update a filter
    update_automation_filter: data =>
      handleAxios(`/automation/update-filters/${data._id}`, 'put', data.data),
  },
}

export default AutomationApi
