import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export default class UiBlockingCondition {
  private routeName?: string | null

  public constructor(fields?: {
    routeName?: string | null
    requestConfig?: AxiosRequestConfig
    response?: AxiosResponse<any>
  }) {
    if (fields) {
      Object.assign(this, fields)
    }
  }

  public isFromLoginPage(): boolean {
    if (this.routeName && this.routeName === 'login') {
      return true
    }
    return false
  }
}
