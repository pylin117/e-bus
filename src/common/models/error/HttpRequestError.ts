export default class HttpRequestError extends Error {
  public url: string
  public statusCode: number | undefined
  public responseBody: any

  public constructor(message?: string, url?: string, status?: number, responseBody?: any) {
    super(message)
    this.name = 'HttpRequestError'
    this.url = String(url)
    this.statusCode = status
    this.stack = new Error().stack
    this.responseBody = responseBody
  }

  public toServerString = (): string => {
    return `[${this.name}][${this.statusCode || '??'}][${this.url}] ${this.message}`
  }

  public toString = (): string => {
    return '目前無法完成您的要求，請重新嘗試！'
  }
}
