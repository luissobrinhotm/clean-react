import { RemoteAuthentication } from '@/data/usecase/authentication/remote-authentication'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import faker from '@faker-js/faker'
import { mokeAuthntication } from '@/domain/test/moke-authntication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mokeAuthntication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})
