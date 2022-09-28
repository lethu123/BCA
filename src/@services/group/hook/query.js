import keys from './key'
import {useQuery} from 'react-query'
import GroupApi from '../group-api'

// ** lấy danh sách tất cả các danh hiệu
const useListAppellation = () => {
  return useQuery([keys.GET_LIST_APPELLATION], () =>
    GroupApi.get_list_appellation(),
  )
}

// ** lấy thông tin chi tiết danh hiệu
const useGetInfoAppellation = params => {
  return useQuery(
    [keys.GET_INFO_APPELLATION, params],
    () => GroupApi.get_info_appellation(params),
    {enabled: !!params.label_id},
  )
}

// ** lấy danh sách tất cả các nhóm do mình tạo
const useListGroupCreated = (uid, params) => {
  return useQuery(
    [keys.GET_LIST_GROUP_CREATED, uid, params],
    () => GroupApi.get_list_group_created(uid, params),
    {enabled: !!uid},
  )
}

// ** lấy danh sách tất cả các khám phá nhóm
const useListGroupExplored = (uid, params) => {
  return useQuery(
    [keys.GET_LIST_GROUP_EXPLORED, uid, params],
    () => GroupApi.get_list_group_explored(uid, params),
    {enabled: !!uid},
  )
}

// ** lấy danh sách tất cả các nhóm bạn tham gia
const useListGroupJoined = (uid, params) => {
  return useQuery(
    [keys.GET_LIST_GROUP_JOINED, uid, params],
    () => GroupApi.get_list_group_joined(uid, params),
    {enabled: !!uid},
  )
}

// ** lấy thông tin một nhóm
/**
 * https://uat.api.bca.hspace.biz/redoc#operation/get_group_info_group_info__group_id__get
 * @param {*} id
 * @param {*} userID
 * @returns
 */
const useInfoGroup = (id, userID) => {
  return useQuery(
    [keys.GET_INFO_GROUP, id, userID],
    () => GroupApi.get_info_group(id, userID),
    {enabled: !!id},
  )
}

const useGetAddress = () => {
  return useQuery([keys.GET_ADDRESS], () => GroupApi.get_address())
}

/**
 * https://group.api.hspace.biz/docs#/Group/list_group_members_list_group_members_get
 * @param {*} id
 * @param {*} userID
 * @returns
 */
const useMembersGroup = id => {
  return useQuery(
    [keys.GET_MEMBERS_GROUP, id],
    () => GroupApi.get_members_group(id),
    {enabled: !!id},
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/statitic_of_group_group_statitic_get
 * @param {*} id
 * @param {*} userID
 * @returns
 */
const useStatisticGroup = () => {
  return useQuery([keys.STATISTIC_GROUP], () => GroupApi.get_statistic_group())
}

const GroupQuery = {
  useListAppellation,
  useListGroupCreated,
  useListGroupExplored,
  useListGroupJoined,
  useInfoGroup,
  useGetAddress,
  useGetInfoAppellation,
  useMembersGroup,
  useStatisticGroup,
}

export default GroupQuery
