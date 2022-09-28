import {handleAxios} from '../ultils'

const secret_key = localStorage.getItem('refreshToken')
const setupHeader = (url, method = 'get', params = {}) =>
  handleAxios(url, method, null, {'s-key': secret_key}, params)

const CampaignApi = {
  get_detail_campaign_history: id =>
    setupHeader(`/automation/campaign/get-detail-campain/${id}`, 'get'),
  get_detail_campaign_history_v2: (campaignId, accountUid) =>
    setupHeader('/automation/history/detail-history-campaign/', 'get', {
      campaign_id: campaignId,
      account_uid: accountUid,
    }),
  get_detail_campaign_of_uid_history: (uid, campaignId) =>
    setupHeader(`/automation/history/get-proccess-autojob/`, 'get', {
      campaign_id: campaignId,
      customer_uid: uid,
    }),
}

export default CampaignApi
