// *** Query
import keys from './key'
import {useQuery} from 'react-query'
import EventApi from '../event-api'

/**
 * https://event.api.hspace.biz/redoc/#operation/event_event_list
 * List event
 */
const useListEvent = params => {
  return useQuery([keys.LIST_EVENT, params], () =>
    EventApi.get_list_event(params),
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/Chi_ti_t_s__ki_n_event_event_get
 * Detail event
 */
const useDetailEvent = id => {
  return useQuery(
    [keys.DETAIL_EVENT, id],
    () => EventApi.get_detail_event(id),
    {enabled: !!id},
  )
}

/**
 * https://event.api.hspace.biz/redoc/#operation/event_event-type_list
 * List type event
 */
const useListTypeEvent = params => {
  return useQuery([keys.LIST_TYPE_EVENT, params], () =>
    EventApi.get_type_event(params),
  )
}

/**
 * https://event.api.hspace.biz/redoc/#operation/event_privacy_list
 * List privacy event
 */
const useListPrivacyEvent = params => {
  return useQuery([keys.LIST_PRIVACY_EVENT, params], () =>
    EventApi.get_privacy_event(params),
  )
}
/**
 * https://event.api.hspace.biz/redoc/#operation/event_formality_list
 * List formality event
 */
const useListFormalityEvent = params => {
  return useQuery([keys.LIST_FORMALITY_EVENT, params], () =>
    EventApi.get_formality_event(params),
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/get_detail_of_a_participant_event_following_ID_event_event_participant_get
 * List formality event
 */
const useListParticipantEvent = params => {
  return useQuery([keys.LIST_PARTICIPANT_EVENT, params], () =>
    EventApi.get_list_participant(params),
  )
}

const useStatisticEvent = () => {
  return useQuery([keys.STATISTIC_EVENT], () => EventApi.get_statistic_event())
}

const EventQuery = {
  useListEvent,
  useDetailEvent,
  useListTypeEvent,
  useListPrivacyEvent,
  useListFormalityEvent,
  useListParticipantEvent,
  useStatisticEvent,
}

export default EventQuery
