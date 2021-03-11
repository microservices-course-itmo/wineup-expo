import { WineUpResource } from './base'

export const TOKEN_TYPE = 'EXPO_TOKEN'

export default class NotificationTokenResource extends WineUpResource {
  // eslint-disable-next-line class-methods-use-this
  pk() {
    return undefined
  }

  static urlRoot =
    'http://77.234.215.138:18080/user-service/notification_tokens/'

  static add() {
    const endpoint = this.create()
    const { urlRoot } = this

    return endpoint.extend({
      url({ token }) {
        return `${urlRoot}?token=${encodeURIComponent(
          token
        )}&tokenType=${TOKEN_TYPE}`
      },
      schema: undefined,
    })
  }

  static remove() {
    const endpoint = this.delete()
    const { urlRoot } = this

    return endpoint.extend({
      url({ token }) {
        return `${urlRoot}?token=${token}`
      },
      schema: undefined,
    })
  }
}
