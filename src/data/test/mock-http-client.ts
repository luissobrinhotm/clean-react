import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post (param: HttpPostParams): Promise<void> {
    this.url = param.url
    this.body = param.body
    return await Promise.resolve()
  }
}
