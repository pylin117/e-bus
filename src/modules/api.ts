import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { errorNotify } from '@/modules/notify'
import router from '@/router'
import { hideUiBlocker, resetUiBlockCounter, showUiBlocker } from '@/modules/apiExtensions'

const api = axios.create()

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const routeName: any = router.currentRoute?.value?.name
    showUiBlocker(routeName, config)

    config.baseURL = '/api'
    config.timeout = 60000
    config.headers['Content-Type'] = 'application/json'
    config.withCredentials = true

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    hideUiBlocker(response)
    return response
  },
  async (error: any) => {
    resetUiBlockCounter()

    const httpErr: any = error

    // Start Handling issues
    if (error.code === 'ECONNABORTED') {
      // Timeout error
      errorNotify('網路連線過慢，請重新嘗試！')
      return Promise.reject(httpErr) // Return original response
    }

    const { config: response } = error
    let status: any

    if (!response) {
      errorNotify('目前無法完成您的要求，請重新嘗試！')
      return Promise.reject(httpErr)
    } else {
      status = response.status
    }
    return httpErr
  }
)

export default api
