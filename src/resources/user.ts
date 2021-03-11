import { Resource } from '@rest-hooks/rest'
import { WineUpResource } from './base'
import { CityID } from './../molecules/Auth/LabeledDropdown'

export default class UserResource extends WineUpResource {
  readonly birthdate: string = ''
  readonly id: string = ''
  readonly name: string = ''
  readonly cityId: CityID = 0
  readonly phoneNumber: string = ''

  get city() {
    return this.cityId === 0 ? 'Москва' : 'Санкт-Петербург'
  }

  pk() {
    return this.id
  }

  static me<T extends typeof Resource>(this: T) {
    const endpoint = this.detail()
    return endpoint.extend({
      fetch() {
        return endpoint(this)
      },
      url() {
        return '/me/'
      },
    })
  }

  static urlRoot = 'http://77.234.215.138:18080/user-service/users/'
}
