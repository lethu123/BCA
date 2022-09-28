import keys from './key'
import {useQuery} from 'react-query'
import DataProjectApi from '../data-project-api'

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/data_project_list_data_project_get
 * Danh sách các dự án
 */
const useListProjectData = (params = null) => {
  return useQuery(
    [keys.DATA_PROJECT, params],
    () => DataProjectApi.get_list_project_data(params),
    {
      staleTime: 0,
    },
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/data_project_type_data_project_type_get
 * Danh sách loại dự án
 */
const useListProjectType = () => {
  return useQuery([keys.PROJECT_TYPE], () =>
    DataProjectApi.get_list_project_type(),
  )
}

/**
 * https://uat.api.bca.hspace.biz/redoc#operation/data_project_kind_data_project_kind_get
 * Danh sách kiểu dự án
 */
const useListProjectKind = () => {
  return useQuery([keys.PROJECT_KIND], () =>
    DataProjectApi.get_list_project_kind(),
  )
}

const DataProjectQuery = {
  useListProjectData,
  useListProjectType,
  useListProjectKind,
}

export default DataProjectQuery
