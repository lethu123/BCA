export const queryKeys = {
  auth: {
    register: 'register',
    login: 'login',
    verify_account: 'verify_account',
    reset_password: 'reset_password',
    send_mail_reset_password: 'send_mail_reset_password',
    change_password: 'change_password',
    update_password: 'update_password',
  },
  customer: {
    // *** Chăm sóc facebook
    personalFacebookStatistic: 'personalFacebookStatistic',

    // *** Khai thác khách hàng tiềm năng
    // *** User
    linkMyPostStatistic: 'linkMyPostStatistic',
    listMyPostLink: 'listMyPostLink',

    // *** Admin
    // *** Group
    groupExploitedStatistic: 'groupExploitedStatistic',
    recentlyExtractedLink: 'recentlyExtractedLink',
    detailGroupExploiteds: 'detailGroupExploiteds',
    listGroupExploiteds: 'listGroupExploiteds',

    // *** Post
    postExploitedStatistic: 'postExploitedStatistic',
    listPostExploiteds: 'listPostExploiteds',
    detailPostExploited: 'detailPostExploiteds',

    // *** Fanpage
    fanpageExploitedStatistic: 'fanpageExploitedStatistic',
    fanpageExploitedInfo: 'fanpageExploitedInfo',

    // *** Profile
    profileExploitedStatistic: 'profileExploitedStatistic',
    profileExploitedInfo: 'profileExploitedInfo',
    listUidExploiteds: 'listUidExploiteds',
    listProfileExploiteds: 'listProfileExploiteds',
    listProfileExploitedExports: 'LIST_PROFILE_EXPLOITED_EXPORTS',
    listCustomerKeywords: 'LIST_CUSTOMER_KEYWORDS',
  },
  automation: {
    status: 'ALL_STATUS_AUTOMATION',
    createautojob: 'CREATE_AUTO_JOB',
    getStatisticAutomation: 'GET_STATISTIC_AUTOMATION',
    getBlockTypeAction: 'GET_BLOCK_TYPE_ACTION',
    getBlockTypeDecision: 'GET_BLOCK_TYPE_DECISION',
    getBlockTypeFBAction: 'GET_BLOCK_TYPE_FB_ACTION',
    getListautojob: 'GET_LIST_AUTO_JOB',
    getListAutoTask: 'GET_LIST_AUTO_TASK',
    info: 'GET_AUTOMATION_INFOMATION',
    getListAccountFB: 'GET_LIST_ACCOUNT_FB',
    getListEmailToSendEmail: 'GET_LIST_EMAIL_TO_SEND_EMAIL',
    getListLibraryNotification: 'GET_LIST_LIBRARY_NOTIFICATION',
    getListStatusAutomation: 'GET_LIST_STATUS_AUTOMATION',
    getListPhoneToSMS: 'GET_LIST_PHONE_TO_SMS',
    getListTemplateSMS: 'GET_LIST_TEMPLATE_SMS',
    getListSampleLibraries: 'GET_LIST_SAMPLE_LIBARY',
    getListComment: 'GET_LIST_COMMENT',
    getListautojobSelect: 'GET_LIST_autojob_SELECT',
    getStatisticSaleCampaign: 'GET_STATISTIC_SALE_CAMPAIGN',
    getListAllCampaign: 'GET_LIST_ALL_CAMPAIGN',
    getDetailCampain: 'GET_DETAIL_CAMPAIN',
    getListFBCareCampain: 'GET_LIST_FB_CARE_CAMPAIN',
    getListDataFilterAutomation: 'GET_LIST_DATA_FILTER_AUTOMATION',
    getListDataFieldSaleCampaignAutomation:
      'GET_LIST_DATA_FIELD_SALE_CAMPAIGN_AUTOMATION',
    getListDataFieldFBAutomation: 'GET_LIST_DATA_FIELD_FB_AUTOMATION',
    getListActionAutotaskAutomation: 'GET_LIST_ACTION_AUTO_TASK_AUTOMATION',
    getStatusCampain: 'GET_STATUS_CAMPAIN',
  },
}
