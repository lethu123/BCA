import {PROXY} from '../proxy'
import {handleAxios} from '@services/ultils'

export const create_account_api = PROXY + '/account'
export const login_api = PROXY + '/account/login'
export const verify_account_api = PROXY + '/account/verify'
export const reset_password_api = PROXY + '/account/password/reset'
export const change_password_api = PROXY + '/account/password/change'
export const get_user_info = uid =>
  handleAxios(`/profile/get-detail/${uid}`, 'get')
export const create_profile_reference_api = PROXY + '/profile-ref'
