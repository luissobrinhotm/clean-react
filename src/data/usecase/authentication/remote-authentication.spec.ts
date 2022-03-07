import { RemoteAuthentication } from '@/data/usecase/authentication/remote-authentication'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import faker from '@faker-js/faker'
import { mokeAuthntication } from '@/domain/test/moke-authntication'
import { InvalidCredentialsError } from '@/domain/erros/invalid-credentials-error'
import { HttpStatusCode } from '@/data/protocols/http/http-response'

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
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mokeAuthntication())
    expect(httpPostClientSpy.url).toEqual(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mokeAuthntication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mokeAuthntication())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
})
