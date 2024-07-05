import { EnumHttpStatusCode } from '@/common/models/enum'

export default class HttpUnauthorizedError extends Error {
  public url: string
  public statusCode: number = EnumHttpStatusCode.UNAUTHORIZED

  constructor(error?: string, url?: string) {
    super(error)
    this.name = 'HttpUnauthorizedError'
    this.url = String(url)
    this.stack = new Error().stack
  }

  public toServerString = (): string => {
    return `[${this.name}][${String(this.statusCode)}][${this.url}] ${this.message}`
  }

  public toString = (): string => {
    return '權限不足，請重新嘗試！'
  }
}
