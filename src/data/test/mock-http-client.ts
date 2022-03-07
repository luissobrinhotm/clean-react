import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post (param: HttpPostParams): Promise<void> {
    this.url = param.url
    return await Promise.resolve()
  }
}
