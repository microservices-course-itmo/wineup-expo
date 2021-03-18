import { Resource } from '@rest-hooks/rest'
import { WineUpResource } from './base'
import { CityID } from '../molecules/CityChooser'

export default class UserResource extends WineUpResource {
  readonly birthdate: string = ''

  readonly id: string = ''

  readonly name: string = ''

  readonly cityId: CityID = 0

  readonly phoneNumber: string = ''

  get city() {
    return this.cityId === 1 ? 'Москва' : 'Санкт-Петербург'
  }

  static async fetch(...args: [RequestInfo, RequestInit]) {
    return Resource.fetch(...args)
  }

  static urlRoot = 'http://77.234.215.138:18080/user-service/users'

  pk() {
    return this.id
  }

  static me(this: typeof UserResource) {
    const endpoint = this.detail()
    const { urlRoot } = this

    return endpoint.extend({
      url() {
        return `${urlRoot}/me`
      },
    })
  }

  static updateMe(this: typeof UserResource) {
    const endpoint = this.partialUpdate()
    const { urlRoot } = this

    return endpoint.extend({
      url() {
        return `${urlRoot}/me`
      },
    })
  }
}
