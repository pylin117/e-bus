import { Mutex } from 'async-mutex'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Loading } from 'quasar'
import UiBlockingCondition from '@/modules/apiExtensions/uiBlockCondition'

const mutex = new Mutex()
const loader = Loading
let requestCounter: number = 0

/**
 * Show UI block if meets the condition
 * @param routeName - The route name
 * @param config - AXIOS request configuration
 */
export const showUiBlocker = (routeName: string | undefined, config: AxiosRequestConfig) => {
  if (checkUiBlockingCondition({ routeName, requestConfig: config })) {
    mutex.acquire().then((release: any) => {
      if (requestCounter === 0) {
        requestCounter += 1
        release()
        loader.show()
      } else {
        requestCounter += 1
        release()
      }
    })
  }
}

/**
 * Hide UI block
 * @param response - AXIOS response
 */
export const hideUiBlocker = (response: AxiosResponse<any>) => {
  // hide UI blocking
  if (checkUiBlockingCondition({ response })) {
    setTimeout(() => {
      mutex.acquire().then((release: any) => {
        requestCounter = requestCounter - 1 < 0 ? 0 : requestCounter - 1
        if (requestCounter === 0) {
          release()
          loader.hide()
        } else {
          release()
        }
      })
    }, 200)
  }
}

/**
 * Reset UI Block
 */
export const resetUiBlockCounter = () => {
  mutex.acquire().then((release: any) => {
    requestCounter = 0
    loader.hide()
    release()
  })
}

/**
 * Check UI Block condition
 * @param conditionParameter: Condition params
 */
const checkUiBlockingCondition = (conditionParameter: {
  routeName?: string | null
  requestConfig?: AxiosRequestConfig
  response?: AxiosResponse<any>
}) => {
  let excluded: boolean = false

  const condition = new UiBlockingCondition(conditionParameter)
  excluded = condition.isFromLoginPage()
  return !excluded
}
