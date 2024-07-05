export default class HttpNoStatusError extends Error {
  public url: string
  public statusCode: number | undefined

  public constructor(error?: string, url?: string) {
    super(error)
    this.name = 'HttpNoStatusError'
    this.url = String(url)
    this.stack = new Error().stack
  }

  public toServerString = (): string => {
    return `[${this.name}][${this.statusCode || '??'}][${this.url}] ${this.message}`
  }

  public toString = (): string => {
    return '目前無法完成您的要求，請重新嘗試！'
  }
}
