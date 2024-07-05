import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { envConfig } from '@/plugins/env'
import { useUserStore } from '@/stores/user'
import { EnumHttpStatusCode } from '@/common/models/enum'
import { errorNotify } from '@/modules/notify'
import router from '@/router'
import { hideUiBlocker, resetUiBlockCounter, showUiBlocker } from '@/modules/apiExtensions'

let isRefreshTokenInProgress = false
const user = useUserStore()
const api = axios.create()

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const routeName: any = router.currentRoute?.value?.name
    showUiBlocker(routeName, config)

    config.baseURL = `${envConfig.VUE_APP_HOST_BACKEND_URL}api/crm`
    config.timeout = 60000
    config.headers['Content-Type'] = 'application/json'

    if (user.tokens.accessToken) {
      config.headers.Authorization = `Bearer ${user.tokens.accessToken}`
    }

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

    const { config: originalRequest, response } = error
    let isRefreshOk: boolean = false
    let status: any

    if (!response) {
      errorNotify('目前無法完成您的要求，請重新嘗試！')
      return Promise.reject(httpErr)
    } else {
      status = response.status
    }

    if (status === EnumHttpStatusCode.INVALID_TOKEN) {
      if (!isRefreshTokenInProgress) {
        isRefreshTokenInProgress = true
        isRefreshOk = await user.refreshToken()
        isRefreshTokenInProgress = false
      }

      if (isRefreshOk) {
        const res = await api(originalRequest)
        const retryOriginalRequest = new Promise((resolve) => {
          // DANGER: here will clean store
          location.reload()
          resolve(res)
        })

        return retryOriginalRequest
      } else {
        return Promise.reject(httpErr) // Return original response
      }
    } else if (status === EnumHttpStatusCode.TOKEN_ERROR) {
      await user.logout()
    } else {
      if (status >= EnumHttpStatusCode.INTERNAL_SERVER_ERROR) {
        errorNotify(
          '唉唷! 不好意思，服務發生一些問題，請稍後再試! 若持續遇到，請透過右下角客服聯絡服務人員，將盡快為您處理。'
        )
      }

      return Promise.reject(httpErr)
    }

    return httpErr
  }
)

export default api
