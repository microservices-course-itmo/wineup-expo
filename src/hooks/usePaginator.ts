import { ReadEndpoint, EndpointParam } from '@rest-hooks/rest'
import { useFetcher } from 'rest-hooks'
import { useCallback } from 'react'
import PaginatedWineUpResource from '../resources/paginated'

export default function usePaginator<
  E extends ReadEndpoint<any, any>,
  P extends Omit<EndpointParam<E>, 'from'> | null
>(endpoint: E, params: P) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getNextPage = useFetcher(endpoint, true)

  return useCallback(
    (page: number) => {
      return getNextPage({ ...params, page }, undefined, [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [endpoint, params, PaginatedWineUpResource.appendList],
      ])
    },
    [getNextPage, params && endpoint.key(params)]
  )
}
