import {QueryClient} from 'react-query'
import {toast} from 'react-toastify'

export function queryErrorHandler(error) {
  if (error.response) {
    const title = error.response.data
    if (title && title.detail === 'Token is expired') {
      localStorage.clear()
      window.location.reload()
      // toast.error('Bạn cần đăng nhập để thực hiện chức năng này')
    } else {
      return toast.error(
        title && title.msg
          ? title.msg
          : 'Không thể thực hiện yêu cầu, xin thử lại!',
      )
    }
  }
}

export function queryErrorGetHandler(error) {
  if (error.response) {
    const title = error.response.data
    if (title && title.detail === 'Token is expired') {
      // toast.error('Bạn cần đăng nhập !')
      localStorage.clear()
      window.location.reload()
    }
  }
}

export const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorGetHandler,
    // staleTime: 600000, // 10 minutes
    // cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  },
  mutations: {
    onError: queryErrorHandler,
  },
}

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
})
