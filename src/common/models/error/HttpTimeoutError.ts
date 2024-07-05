export default class HttpTimeoutError extends Error {
  public url: string
  public statusCode: number | undefined

  public constructor(message?: string, url?: string) {
    super(message)
    this.name = 'HttpTimeoutError'
    this.url = String(url)
    this.stack = new Error().stack
  }

  public toServerString = (): string => {
    return `[${this.name}][${this.statusCode || '??'}][${this.url}] ${this.message}`
  }

  public toString = (): string => {
    return '網路連線過慢，請重新嘗試！'
  }
}
