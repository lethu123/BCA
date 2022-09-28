import keys from './key'
import {PROXY} from '../../proxy'

const secret_key = localStorage.getItem('refreshToken')

const get_list_history_campaign_api =
  PROXY + '/automation/history/get-take-care-history/'
const get_detail_block_history_campaign_api =
  PROXY + '/automation/get-block-task-history'
const get_all_campain_api = PROXY + '/automation/campaign/get-all/'
const get_list_fb_care_campain_api = PROXY + '/automation/campaign-fb-care/'

//** constant api */

/**
 * helper function
 */
const optionsCallApi = url => {
  return {
    url: url,
    headers: {'s-key': secret_key},
  }
}

// *** Lấy danh sách tất cả lịch sử hoạt động của chiến dịch
// *** Data table
const useGetListHistoryCampaigns = () => {
  return {
    ...optionsCallApi(get_list_history_campaign_api),
    key: [keys.GET_LIST_HISTORY_CAMPAIGN],
  }
}

// *** Thông tin chi tiết của 1 block lịch sử chiến dịch
// *** Data table
const useGetDetailBlockHistoryCampaigns = () => {
  return {
    ...optionsCallApi(get_detail_block_history_campaign_api),
    key: [keys.GET_DETAIL_BLOCK_HISTORY_CAMPAIGN],
  }
}

// *** Lấy danh sách tất cả chiến dịch trong hệ thống
// *** Data table
const useGetListSaleCampaign = () => {
  return {
    ...optionsCallApi(get_all_campain_api),
    key: [keys.GET_LIST_ALL_CAMPAIGN],
  }
}

// ** danh sach chien dich cham soc facebook
const useGetListFBCareCampain = () => {
  return {
    ...optionsCallApi(get_list_fb_care_campain_api),
    key: [keys.GET_LIST_FB_CARE_CAMPAIN],
  }
}

const CampaignDatatable = {
  useGetListHistoryCampaigns,
  useGetDetailBlockHistoryCampaigns,
  useGetListSaleCampaign,
  useGetListFBCareCampain,
}

export default CampaignDatatable
