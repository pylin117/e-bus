import { EnumErrorType, EnumHttpStatusCode } from '@/common/models/enum'

export default class HttpInvalidTokenError extends Error {
  public url: string
  public statusCode: number = EnumHttpStatusCode.INVALID_TOKEN
  public errorType: EnumErrorType = EnumErrorType.HttpInvalidTokenError

  public constructor(error?: string, url?: string) {
    super(error)
    this.name = 'HttpInvalidTokenError'
    this.url = String(url)
    this.stack = new Error().stack
  }

  public toServerString = (): string => {
    return `[${this.name}][${String(this.statusCode)}][${this.url}] ${this.message}`
  }

  public toString = (): string => {
    return '目前無法完成您的要求，請重新整理您的頁面！'
  }
}
