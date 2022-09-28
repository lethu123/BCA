import keys from './key'
import {PROXY} from '../../proxy'

const secret_key = localStorage.getItem('refreshToken')

const get_list_auto_job_automation_api = PROXY + '/automation/auto-job/'
const get_list_auto_task_automation_api = PROXY + '/automation/auto-task/'
const get_list_data_filter_automation_api =
  PROXY + '/automation/get-list-filters'

/**
 * helper function
 */
const optionsCallApi = url => {
  return {
    url: url,
    headers: {'s-key': secret_key},
  }
}

// *** Lấy danh sách autojob
// *** Data table
const useGetListAutoJob = () => {
  return {
    ...optionsCallApi(get_list_auto_job_automation_api),
    key: [keys.GET_LIST_AUTO_JOB],
  }
}

/**
https://api.sasamviet.vn/redoc#operation/The_list_auto_task_automation_auto_task__get
 * Danh sách autotask
 * Datatable 
 */
const useGetListAutoTask = () => {
  return {
    ...optionsCallApi(get_list_auto_task_automation_api),
    key: [keys.GET_LIST_AUTO_TASK],
  }
}

/**
https://api.sasamviet.vn/redoc#operation/Get_list_filters_for_auto_job_automation_get_list_filters_get
 * Danh sách data filter
 * Datatable 
 */
const useGetListDataFilter = () => {
  return {
    ...optionsCallApi(get_list_data_filter_automation_api),
    key: [keys.GET_LIST_DATA_FILTER_AUTOMATION],
  }
}

const AutomationDatatable = {
  useGetListAutoJob,
  useGetListAutoTask,
  useGetListDataFilter,
}

export default AutomationDatatable
