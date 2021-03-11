export default class UnauthenticatedError extends Error {
  constructor(url: string) {
    super(`Got 401 response on request to ${url}`)
  }
}
