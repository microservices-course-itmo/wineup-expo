import { Resource } from 'rest-hooks'
import { WineUpResource} from './WineUpResource'

export default class RegionResource extends WineUpResource {
  readonly id: string = ''

  readonly name: string = ''

  readonly country: string = ''

  pk(): string | undefined {
    return this.id
  }

  urlRoot = super.urlHandler('/region/')
}
