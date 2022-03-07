export type HttpPostParams = {
  url: string
}
export interface HttpPostClient {
  post: (param: HttpPostParams) => Promise<void>
}
