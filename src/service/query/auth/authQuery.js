import * as link_api from '../../api/auth/authApi'
import axios from 'axios'

/**
 * https://api.sasamviet.vn/redoc#operation/create_account_account_post
 */
export const createAccountAuthQuery = async data => {
  return await axios
    .post(link_api.create_account_api, data)
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/login_account_login_post
 */
export const loginAuthQuery = async data => {
  return await axios.post(link_api.login_api, data).then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/verify_account_account_verify_get
 */
export const requestVerifyAccountAuthQuery = async verify_key => {
  return await axios
    .get(link_api.verify_account_api, {params: {verify_key}})
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/reset_password_account_password_reset_post
 */
export const sendMailResetPasswordAuthQuery = async data => {
  return await axios
    .post(link_api.reset_password_api, data)
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/reset_password_account_password_reset_put
 */
export const resetPasswordAuthQuery = async data => {
  return await axios
    .put(link_api.reset_password_api, data)
    .then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/change_password_account_password_change_get
 */
export const requestChangePasswordAuthQuery = async () => {
  let access_token = localStorage.getItem('accessToken')
  let secret_key = localStorage.getItem('refreshToken')
  const instance = axios.create({
    timeout: 5000,
    headers: {Authorization: 'Bearer ' + access_token, 's-key': secret_key},
  })
  return await instance.get(link_api.change_password_api).then(res => res.data)
}

/**
 * https://api.sasamviet.vn/redoc#operation/update_password_account_password_change_post
 */
export const updatePasswordAuthQuery = async data => {
  let access_token = localStorage.getItem('accessToken')
  let secret_key = localStorage.getItem('refreshToken')
  const instance = axios.create({
    timeout: 5000,
    headers: {Authorization: 'Bearer ' + access_token, 's-key': secret_key},
  })
  return await instance
    .post(link_api.change_password_api, data)
    .then(res => res.data)
}
