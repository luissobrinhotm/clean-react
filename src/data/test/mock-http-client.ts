import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (param: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = param.url
    this.body = param.body
    return this.response
  }
}
