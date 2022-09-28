import {handleAxios} from '../ultils'

const PROXY = ''

const EventApi = {
  create_event: data => handleAxios('/event/event', 'post', data),
  delete_event: id => handleAxios(`/event/event/${id}`, 'delete'),
  update_event: data =>
    handleAxios(`/event/event/${data.id}`, 'put', data.dataSubmit),

  get_list_event: params =>
    handleAxios(PROXY + '/event/event', 'get', null, {}, params),
  get_detail_event: id =>
    handleAxios('/event/event-detail', 'get', null, {}, {id}),
  invite_join_event: data => handleAxios('/event/invite-event', 'post', data),
  user_join_event: data => handleAxios('/event/join-event', 'post', data),
  // type event
  get_type_event: params =>
    handleAxios(PROXY + '/event/event-type', 'get', null, {}, params),

  // privacy
  get_privacy_event: params =>
    handleAxios(PROXY + '/event/privacy', 'get', null, {}, params),

  // formality
  get_formality_event: params =>
    handleAxios(PROXY + '/event/formality', 'get', null, {}, params),

  // participant
  get_list_participant: params =>
    handleAxios('/event/event-participant', 'get', null, {}, params),
  // statistic
  get_statistic_event: () => handleAxios('/event/statistics', 'get'),
}

export default EventApi
