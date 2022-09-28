import {useQuery} from 'react-query'
import keys from './key'
import CampaignApi from '../campaign-api'

/**
 * https://api.sasamviet.vn/redoc#operation/Get_detail_a_campain_history_automation_campaign_get_detail_campain___id__get
 * Block type action
 */
const useGetDetailCampaignHistory = id => {
  return useQuery([keys.GET_DETAIL_CAMPAIGN_HISTORY, id], () =>
    CampaignApi.get_detail_campaign_history(id),
  )
}

/**
 * https://dev.api.sasamviet.vn/redoc#operation/Detail_process_autojob_of_a_customer_automation_history_get_proccess_autojob__get
 * History campain uid
 */
const useGetDetailCampaignOfUidHistory = (uid, campaignId) => {
  return useQuery(
    [keys.GET_DETAIL_CAMPAIGN_OF_UID_HISTORY, uid, campaignId],
    () => CampaignApi.get_detail_campaign_of_uid_history(uid, campaignId),
  )
}

/**
 * https://dev.api.sasamviet.vn/redoc#operation/Detail_history_campaign_automation_history_detail_history_campaign__get
 * History campain flow
 */

const useGetDetailCampaignHistoryV2 = (campaignId, accountUid) => {
  return useQuery(
    [keys.GET_DETAIL_CAMPAIGN_HISTORY_V2, campaignId, accountUid],
    () => CampaignApi.get_detail_campaign_history_v2(campaignId, accountUid),
  )
}

const CampaignQuery = {
  useGetDetailCampaignHistory,
  useGetDetailCampaignHistoryV2,
  useGetDetailCampaignOfUidHistory,
}

export default CampaignQuery
