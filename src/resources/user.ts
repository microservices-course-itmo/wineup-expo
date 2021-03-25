import { WineUpResource } from './base'
import { CityID } from '../molecules/Auth/LabeledDropdown'

export default class UserResource extends WineUpResource {
  readonly birthdate: string = ''

  readonly id: string = ''

  readonly name: string = ''

  readonly cityId: CityID = 0

  readonly phoneNumber: string = ''

  get city() {
    return this.cityId === 0 ? 'Москва' : 'Санкт-Петербург'
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
}
