import { HttpResponse } from '@/data/protocols/http/http-response'

export type HttpPostParams = {
  url: string
  body?: object
}
export interface HttpPostClient {
  post: (param: HttpPostParams) => Promise<HttpResponse>
}
