import {
  createAccountAuthQuery,
  resetPasswordAuthQuery,
  loginAuthQuery,
  sendMailResetPasswordAuthQuery,
  // requestChangePasswordAuthQuery,
  updatePasswordAuthQuery,
} from 'service/query/auth/authQuery'
import {useMutation} from 'react-query'
import {toast} from 'react-toastify'

// *** Util
// import {queryErrorHandler} from 'utility/Utils'

export const useRegister = (email, history) => {
  const {mutate, isLoading} = useMutation(createAccountAuthQuery, {
    onSuccess: () => {
      toast.success('Đăng ký tài khoản thành công, vui lòng kiểm tra mail!')
      history.push(`/verify-email?email=${email}`)
    },
  })
  return {mutate, isLoading}
}

export const useLogin = onSuccess => {
  return useMutation(loginAuthQuery, {
    onSuccess: res => {
      onSuccess(res)
    },
  })
}

export const useForgotPassword = history => {
  return useMutation(sendMailResetPasswordAuthQuery, {
    onSuccess: res => {
      toast.success(res.msg)
      history.push('/reset-password')
    },
  })
}

export const useResetPassword = history => {
  return useMutation(resetPasswordAuthQuery, {
    onSuccess: res => {
      toast.success(res?.msg)
      history.push(`/login`)
    },
  })
}

export const useChangePassword = () => {
  return useMutation(updatePasswordAuthQuery, {
    onSuccess: res => {
      toast.success(res?.msg)
    },
  })
}
