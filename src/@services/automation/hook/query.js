// *** Query
import keys from './key'
import {queryKeys} from 'react-query/constants'
import {useQuery} from 'react-query'
import AutomationApi from '../automation-api'

const initialStatisticAutomation = {
  total: 0,
  complete: 0,
  draft: 0,
  running: 0,
  cancel: 0,
}

/**
 * https://api.sasamviet.vn/redoc#operation/Automation_Block_Type__Action__automation_automation_block_action__get
 * Block type action
 */
// *** Block type action
const useBlockTypeAction = () => {
  const {data: dataQuery} = useQuery(
    ['block_automation', keys.GET_BLOCK_TYPE_ACTION],
    () => AutomationApi.common.getBlockTypeActionQuery,
  )
  return {dataQuery}
}

const prefetchBlockTypeAction = () => {
  return {
    key: [keys.GET_BLOCK_TYPE_ACTION],
    fn: AutomationApi.common.getBlockTypeActionQuery,
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/Automation_Block_Type__Decision__automation_automation_block_decision__get
 * Block type decision
 */
// *** Block type decision
const useBlockTypeDecision = () => {
  const {data: dataQuery} = useQuery(
    ['block_automation', keys.GET_BLOCK_TYPE_DECISION],
    () => AutomationApi.common.getBlockTypeDecisionQuery,
  )
  return {dataQuery}
}

const prefetchBlockTypeDecision = () => {
  return {
    key: [keys.GET_BLOCK_TYPE_DECISION],
    fn: AutomationApi.common.getBlockTypeDecisionQuery,
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/Automation_Block_Type__Fb_Ation__automation_automation_block_fb_action__get
 * Block type fb action
 */
// *** Block type fb action
const useBlockTypeFacebookAction = data => {
  const {data: dataQuery} = useQuery(
    ['block_automation', data.page, keys.GET_BLOCK_TYPE_FB_ACTION],
    () => AutomationApi.common.getBlockTypeFacebookActionQuery(data),
  )
  return {dataQuery}
}

const prefetchBlockTypeFacebookAction = data => {
  return {
    key: [keys.GET_BLOCK_TYPE_FB_ACTION],
    fn: AutomationApi.common.getBlockTypeFacebookActionQuery(data),
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/List_Of_Phones_Number_Available_In_The_System_automation_mst_phone_number__get
 * Get List Phone To SMS
 */
// *** Danh s??ch Phone ????? g???i SMS
const useGetListPhoneToSMS = () => {
  return useQuery(
    ['listphone', keys.GET_LIST_PHONE_TO_SMS],
    () => AutomationApi.common.getListPhoneToSMSQuery,
  )
}

const prefetchListPhoneToSMS = () => {
  return {
    key: [keys.GET_LIST_PHONE_TO_SMS],
    fn: AutomationApi.common.getListPhoneToSMSQuery,
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/List_Of_Templates_Sms_Available_In_The_System_automation_mst_template_sms__get
 * Get List Template SMS Query
 */
// *** Danh s??ch Th?? vi???n tin nh???n m???u
const useGetListTemplateSMS = data => {
  return useQuery(['listsms', keys.GET_LIST_TEMPLATE_SMS], () =>
    AutomationApi.common.getListTemplateSMSQuery(data),
  )
}

const prefetchListTemplateSMS = data => {
  return {
    key: [keys.GET_LIST_TEMPLATE_SMS],
    fn: AutomationApi.common.getListTemplateSMSQuery(data),
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/List_Of_Sample_Post_Libraries_automation_mst_template_post_fb__get
 * Get List Template post library
 */
// *** Danh s??ch Th?? vi???n b??i vi???t m???u
const useGetListSampleLibary = data => {
  return useQuery(['listsamplelibary', keys.GET_LIST_SAMPLE_LIBARY], () =>
    AutomationApi.common.getListSampleLibaryQuery(data),
  )
}
const prefetchListSampleLibary = data => {
  return {
    key: [keys.GET_LIST_SAMPLE_LIBARY],
    fn: AutomationApi.common.getListSampleLibaryQuery(data),
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/List_Of_Sample_Comment_Libraries_automation_mst_template_comment_fb__get
 * Get List Comment
 */

// *** Danh s??ch b??nh lu???n m???u
const useGetListCommentLibary = data => {
  return useQuery(['listcommentlibary', keys.GET_LIST_COMMENT], () =>
    AutomationApi.common.getListCommentQuery(data),
  )
}
const prefetchListComment = data => {
  return {
    key: [keys.GET_LIST_COMMENT],
    fn: AutomationApi.common.getListCommentQuery(data),
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/List_Of_Facebook_Accounts_Available_In_The_System_automation_mst_fb_account__get
 * Danh s??ch c??c t??i kho???n facebook ????? ch??m s??c facebook
 */

// *** Danh s??ch c??c t??i kho???n facebook ????? ch??m s??c facebook
const useListAccountFB = () => {
  const {data: dataQuery} = useQuery(
    ['accountfb', keys.GET_LIST_ACCOUNT_FB],
    () => AutomationApi.common.getListAccountFBQuery,
  )
  return {dataQuery}
}

const prefetchListAccountFB = () => {
  return {
    key: [keys.GET_LIST_ACCOUNT_FB],
    fn: AutomationApi.common.getListAccountFBQuery,
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/List_Of_Email_Available_In_The_System_automation_mst_system_email__get
 * Danh s??ch email d??ng ????? g???i mail
 */

// *** Danh s??ch email d??ng ????? g???i mail
const useListEmailToSendEmail = () => {
  const {data: dataQuery} = useQuery(
    ['listemail', keys.GET_LIST_EMAIL_TO_SEND_EMAIL],
    () => AutomationApi.common.getListEmailToSendEmailQuery,
  )
  return {dataQuery}
}

const prefetchListEmailToSendEmail = () => {
  return {
    key: [keys.GET_LIST_EMAIL_TO_SEND_EMAIL],
    fn: AutomationApi.common.getListEmailToSendEmailQuery,
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/List_Of_Templates_Notification_Available_In_The_System_automation_mst_template_notification__get
 * Danh s??ch th?? vi???n th??ng b??o m???u - GET
 */
// *** Danh s??ch th?? vi???n th??ng b??o m???u - GET
const useListLibraryNotification = data => {
  return useQuery(
    [
      'librarynotification',
      data.page,
      queryKeys.automation.getListLibraryNotification,
    ],
    () => AutomationApi.common.getListLibraryNotificationQuery(data),
  )
}

const ListLibraryNotification = data => {
  return {
    key: [keys.GET_LIST_LIBRARY_NOTIFICATION],
    fn: AutomationApi.common.getListLibraryNotificationQuery(data),
  }
}

/**
 * https://api.sasamviet.vn/redoc#operation/Automation_Status_automation_automation_status__get
 * Get List Status
 */
// *** Danh s??ch c??c lo???i tr???ng th??i c???a automation
const useGetListStatus = () => {
  return useQuery(
    [keys.GET_LIST_STATUS_AUTOMATION],
    AutomationApi.common.get_list_status_query,
  )
}

/**
https://api.sasamviet.vn/redoc#operation/Automation_block_type__autotask_ation__automation_block_autotask_action_get
 * Danh s??ch c??c lo???i h??nh ?????ng c???a Auto Task
 */
// *** Danh s??ch c??c lo???i h??nh ?????ng c???a Auto Task
const useGetListActionAutotaskAutomation = () => {
  return useQuery(
    [keys.GET_LIST_ACTION_AUTO_TASK_AUTOMATION],
    () => AutomationApi.autotask.get_list_action_autotask_automation_query,
  )
}

/**
https://api.sasamviet.vn/redoc#operation/List_of_data_fields_in_the_data_source_automation_data_fields__get
 * Danh s??ch c??c c???t d??? li???u trong c??i ?????t ngu???n d??? li???u c???a Ngu???n d??? li???u ( kh??ch h??ng, kh??ch h??ng ti???m n??ng, khai th??c kh??ch h??ng ti???m n??ng
 */
// *** Danh s??ch c??c c???t d??? li???u trong c??i ?????t ngu???n d??? li???u c???a Ngu???n d??? li???u ( kh??ch h??ng, kh??ch h??ng ti???m n??ng, khai th??c kh??ch h??ng ti???m n??ng
const useGetListDataFieldSaleCampaignAutomation = () => {
  return useQuery(
    [keys.GET_LIST_DATA_FIELD_SALE_CAMPAIGN_AUTOMATION],
    () => AutomationApi.common.get_list_data_field_sale_campaign_automation,
  )
}

// *** Statistic Automation
const useStatisticAutomation = type => {
  const {data: dataQuery} = useQuery(
    [queryKeys.automation.getStatisticAutomation, type],
    // () => AutomationService.getStatisticAutomationQuery(type),
    () => AutomationApi.common.get_statistic_automation_query(type),
  )
  return {dataQuery, initialStatisticAutomation}
}

// *** L???y danh s??ch autojob select options
const useGetListAutojobSelect = () => {
  return useQuery([queryKeys.automation.GET_LIST_AUTOJOB_SELECT], () =>
    AutomationApi.autojob.get_list_auto_job_select_option_query(),
  )
}

// ** danh s??ch tr???ng th??i c???a chi???n d???ch
const useGetListStatusCampain = () => {
  return useQuery(
    [queryKeys.automation.GET_STATUS_CAMPAIGN],

    () => AutomationApi.common.get_status_campaign_query,
  )
}

// *** Th??ng tin chi ti???t 1 autojob / autotask
const useInfoAutomation = id => {
  return useQuery(
    [queryKeys.automation.info, id],
    () => AutomationApi.common.get_automation_info_query(id),
    {enabled: id !== 'create', staleTime: 0, refetchOnMount: true},
  )
}

// *** Statistic sale campaign
const useStatisticSaleCampaign = () => {
  return useQuery(
    [queryKeys.automation.GET_STATISTIC_SALE_CAMPAIGN],
    () => AutomationApi.common.get_statistic_sale_campaign_query,
  )
}

// *** Detail campain
const useGetDetailCampain = (id, type) => {
  return useQuery(
    [queryKeys.automation.GET_DETAIL_CAMPAIGN, id],
    () => AutomationApi.common.get_detail_campaign_query(id, type),
    {enabled: !!id, staleTime: 0, refetchOnMount: true},
  )
}

// *** Danh s??ch t???t c??? c??c b??? l???c ???? t???o trong c??i ?????t ngu???n d??? li???u
const useGetListDataFilterAutomation = () => {
  return useQuery(
    [queryKeys.automation.GET_LIST_DATA_FILTER],
    () => AutomationApi.common.get_list_data_filter_automation_query,
  )
}

// *** Danh s??ch c??c c???t d??? li???u trong c??i ?????t ngu???n d??? li???u ch??m s??c facebook
const useGetListDataFieldFBAutomation = () => {
  return useQuery(
    [queryKeys.automation.GET_LIST_DATA_FIELD_FB_AUTOMATION],
    () => AutomationApi.common.get_list_data_field_fb_automation_query,
  )
}

const getAllMetadataWebsite = async params =>
  await AutomationApi.common.get_all_metadata_website(params)

const createMetadata = async url =>
  await AutomationApi.common.get_metadata_website(url)

// *** status automation approve
const useGetStatusAutomationApprove = type => {
  return useQuery([keys.GET_AUTOMATION_STATUS_APPROVE, type], () =>
    AutomationApi.common.get_list_status_query(type),
  )
}

/**
 * https://dev.api.sasamviet.vn/redoc#operation/Get_email_template_email_template__get
 * Danh s??ch template email c???a h??? th???ng
 */
const useGetTemplateEmail = () => {
  return useQuery([keys.GET_TEMPLATE_EMAIL], () =>
    AutomationApi.common.get_template_email(),
  )
}

const AutomationQuery = {
  prefetchBlockTypeAction,
  useBlockTypeAction,

  prefetchBlockTypeDecision,
  useBlockTypeDecision,

  prefetchBlockTypeFacebookAction,
  useBlockTypeFacebookAction,

  prefetchListPhoneToSMS,
  useGetListPhoneToSMS,

  prefetchListTemplateSMS,
  useGetListTemplateSMS,

  prefetchListSampleLibary,
  useGetListSampleLibary,

  prefetchListComment,
  useGetListCommentLibary,

  prefetchListAccountFB,
  useListAccountFB,

  prefetchListEmailToSendEmail,
  useListEmailToSendEmail,

  ListLibraryNotification,
  useListLibraryNotification,

  useGetListStatus,
  useGetListActionAutotaskAutomation,
  useGetListDataFieldSaleCampaignAutomation,
  useStatisticAutomation,
  useGetListAutojobSelect,
  useGetListStatusCampain,
  useInfoAutomation,
  useStatisticSaleCampaign,
  useGetDetailCampain,
  useGetListDataFilterAutomation,
  useGetListDataFieldFBAutomation,

  getAllMetadataWebsite,
  createMetadata,

  useGetStatusAutomationApprove,

  useGetTemplateEmail,
}

export default AutomationQuery
