// *** Query
import {
  getStatisticPersonalFacebookQuery,
  getStatisticUserLinkMyPostQuery,
  getListAllLinkCrawlOfUserQuery,
  getStatisticGroupExploitedQuery,
  postAddLinkCrawlQuery,
  getGroupExploitedInfoQuery,
  getListRecentlyExtractedLinkQuery,
  getListGroupExploitedQuery,
  getStatisticPostExploitedQuery,
  getListPostExploitedQuery,
  getStatisticFanpageExploitedQuery,
  getPostExploitedInfoQuery,
  getStatisticProfileExploitedQuery,
  getUserProfileExploitedInfoQuery,
  getListUidExploitedQuery,
  getFanpageExploitedInfoQuery,
  getListProfileExploitedQuery,
  getListProfileLeadsQuery,
  getListCustomerKeywordsQuery,
} from 'service/query/customer/customerQuery'
import {queryKeys} from '../../react-query/constants'
import {useMutation, useQuery, useQueryClient} from 'react-query'
import {data} from 'redux/reducers/customer/data'
import {toast} from 'react-toastify'

const initialStatisticData = {
  total_fanpage: 0,
  total_personal_page: 0,
  total_group: 0,
  total_post: 0,
  total_uid: 0,
  total_lead: 0,
  total_customer: 0,
  total_revenue: 0,
}

// *** Lấy thông tin thống kê tổng của chăm sóc facebook / facebook cá nhân
export const usePersonalFacebookStatistic = () => {
  const initialData = data.personalFacebookStatistic
  const {data: dataQuery} = useQuery(
    ['fb', queryKeys.customer.personalFacebookStatistic],
    () => getStatisticPersonalFacebookQuery(),
  )
  return {dataQuery, initialData}
}

// *** Lấy thông tin thống kê link của user đăng nhập đã post lên hệ thống
export const useUserLinkMyPostStatistic = () => {
  const initialData = data.linkMyPostStatistic
  const {data: dataQuery} = useQuery(
    ['cx', queryKeys.customer.linkMyPostStatistic],
    () => getStatisticUserLinkMyPostQuery(),
  )
  return {dataQuery, initialData}
}

// *** Lấy danh sách link của user đăng nhập đã post lên hệ thống
// *** Data table
export const useListAllLinkCrawlOfUser = () => {
  return {
    ...getListAllLinkCrawlOfUserQuery(),
    key: ['cx', queryKeys.customer.listMyPostLink],
  }
}

// *** Lấy thông tin thống kê dữ liệu tổng của khai thác nhóm (Admin)
export const useGroupExploitedStatistic = () => {
  const {data: dataQuery} = useQuery(
    ['cx', queryKeys.customer.groupExploitedStatistic],
    () => getStatisticGroupExploitedQuery(),
    {
      staleTime: 0,
      cacheTime: 3000,
    },
  )
  return {dataQuery, initialData: initialStatisticData}
}

// *** Thêm link khai thác khách hàng tiềm năng
// *** Mutation
export const useAddLinkCrawl = () => {
  const queryClient = useQueryClient()

  return useMutation(postAddLinkCrawlQuery, {
    onSuccess: res => {
      queryClient.invalidateQueries('cx')
      toast.success(res?.message || res?.msg)
    },
  })
}

// *** Lấy thông tin chi tiết của một nhóm (Khai thác nhóm - Cx)
export const useGroupExploitedInfo = id => {
  return useQuery([queryKeys.customer.detailGroupExploiteds, id], () =>
    getGroupExploitedInfoQuery(id),
  )
}

// *** Lấy danh sách các link trích xuất gần đây khai thách khách hàng tiềm năng
export const useRecentlyExtractedLink = type => {
  const {data: dataQuery} = useQuery(
    ['cx', queryKeys.customer.recentlyExtractedLink, type],
    () => getListRecentlyExtractedLinkQuery(type),
  )
  return {dataQuery}
}

// *** Lấy danh sách các nhóm của khai thác nhóm
// *** Data table
export const useListLinkExploited = () => {
  return {
    ...getListGroupExploitedQuery(),
    key: ['cx', queryKeys.customer.listGroupExploiteds],
  }
}

// *** Lấy thông tin thống kê dữ liệu tổng của khai thác post
export const usePostExploitedStatistic = () => {
  const {data: dataQuery} = useQuery(
    ['cx', queryKeys.customer.postExploitedStatistic],
    () => getStatisticPostExploitedQuery(),
  )
  return {dataQuery, initialData: initialStatisticData}
}

// *** Lấy danh sách các nhóm của khai thác nhóm
// *** Data table
export const useListPostExploited = () => {
  return {
    ...getListPostExploitedQuery(),
    key: ['cx', queryKeys.customer.listPostExploiteds],
  }
}

// *** Lấy thông tin chi tiết của một bài post
export const usePostExploitedInfo = id => {
  return useQuery([queryKeys.customer.detailPostExploited, id], () =>
    getPostExploitedInfoQuery(id),
  )
}

// *** Lấy thông tin thống kê tổng của khai thác fanpage
export const useFanpageExploitedStatistic = () => {
  const {data: dataQuery} = useQuery(
    ['cx', queryKeys.customer.fanpageExploitedStatistic],
    () => getStatisticFanpageExploitedQuery(),
  )
  return {dataQuery, initialData: initialStatisticData}
}

// *** Lấy thông tin thống kê tổng của khai thác fanpage
export const useFanpageExploitedInfo = id => {
  return useQuery([queryKeys.customer.fanpageExploitedInfo], () =>
    getFanpageExploitedInfoQuery(id),
  )
}

// *** Lấy thông tin thống kê tổng của khai thác profile
export const useProfileExploitedStatistic = () => {
  const {data: dataQuery} = useQuery(
    ['cx', queryKeys.customer.profileExploitedStatistic],
    () => getStatisticProfileExploitedQuery(),
  )
  return {dataQuery, initialData: initialStatisticData}
}

// *** Lấy thông tin chi tiết của một trang cá nhân
export const useProfileExploitedInfo = id => {
  return useQuery([queryKeys.customer.profileExploitedInfo, id], () =>
    getUserProfileExploitedInfoQuery(id),
  )
}

// *** Lấy danh sách các uid
// *** Data table
export const useListUidExploited = () => {
  return {
    ...getListUidExploitedQuery(),
    key: [queryKeys.customer.listUidExploiteds],
  }
}

// *** Lấy danh sách các profile
// *** Data table
export const useListProfileExploited = () => {
  return {
    ...getListProfileExploitedQuery(),
    key: [queryKeys.customer.listProfileExploiteds],
  }
}

// ** lấy danh sách các profile (khách hàng tiềm năng)
export const useListProfileLeads = (
  search,
  page = 1,
  limit = 20,
  params = {},
) => {
  return useQuery(
    [queryKeys.customer.listProfileExploiteds, page, search, params],
    () => getListProfileLeadsQuery(search, page, limit, params),
    {staleTime: 0},
  )
}

// ** lấy danh sách các profile EXPORT (khách hàng tiềm năng)
export const useListProfileLeadExports = (
  search,
  page = 1,
  limit,
  params = {},
  enabled = true,
) => {
  return useQuery(
    [
      queryKeys.customer.listProfileExploitedExports,
      page,
      search,
      params,
      limit,
    ],
    () => getListProfileLeadsQuery(search, page, limit, params, enabled),
  )
}

// ** lấy danh sách tất cả các từ khóa
export const useListCustomerKeywords = () => {
  return useQuery([queryKeys.customer.listCustomerKeywords], () =>
    getListCustomerKeywordsQuery(),
  )
}
