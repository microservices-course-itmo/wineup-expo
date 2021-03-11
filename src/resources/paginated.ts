import { WineUpResource } from './base'

export default abstract class PaginatedWineUpResource extends WineUpResource {
  static appendList(
    newResults: string[],
    existingResults: string[] | undefined
  ) {
    const set = new Set([...(existingResults || []), ...newResults])

    return Array.from(set.values())
  }
}
