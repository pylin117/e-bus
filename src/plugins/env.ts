import axios from 'axios'
import { findSubdomain } from '@/common/utils'
const configPath = '/appConfig.json'
const envConfig: any = {}
const getEnvConfig = async (): Promise<any> => {
  const response = await axios.get(configPath)
  Object.assign(envConfig, response.data)
  return envConfig
}

const getSubdomain = (): string => {
  const hostUrl = envConfig.VUE_APP_HOST_URL.replace('https://', '')
  const domain = hostUrl.includes(':') ? '' : '.' + findSubdomain(envConfig.VUE_APP_HOST_URL) // use domain should not have port
  return domain
}

export { getEnvConfig, getSubdomain, envConfig }
