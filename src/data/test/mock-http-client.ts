import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (param: HttpPostParams): Promise<HttpResponse> {
    this.url = param.url
    this.body = param.body
    return this.response
  }
}
