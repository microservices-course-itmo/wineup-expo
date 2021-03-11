import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useResource } from 'rest-hooks'
import { useNavigation } from '@react-navigation/native'
import CatalogResource from '../../resources/catalog'
import WineCard from '../../molecules/WineCard'
import ROUTES from '../../routes'
import { useFilters } from '../FiltersBar/FiltersContext'
import usePaginator from '../../hooks/usePaginator'

const POSITIONS_PER_PAGE = 5

function CatalogView() {
  const { query } = useFilters()

  const startingPageState = {
    pageStats: {
      pageNumber: 1,
      firstItem: 0,
      nextPageAvailable: true,
    },
  }

  const [page, setPage] = useState(startingPageState)

  const catalog = useResource(CatalogResource.list(), {
    to: POSITIONS_PER_PAGE,
    searchParameters: query,
  })
  const getNextPage = usePaginator(CatalogResource.list(), {
    to: POSITIONS_PER_PAGE,
    searchParameters: query,
  })

  const handleScroll = async (event: any) => {
    if (!page.pageStats.nextPageAvailable) {
      return
    }

    const yOffset = event.nativeEvent.contentOffset.y
    const contentSize = event.nativeEvent.contentSize.height

    if (yOffset >= 0.7 * contentSize) {
      const currentPage = {
        pageNumber: page.pageStats.pageNumber + 1,
        firstItem: page.pageStats.pageNumber * POSITIONS_PER_PAGE,
      }

      const results = await getNextPage(currentPage.firstItem)

      setPage({
        pageStats: {
          ...currentPage,
          nextPageAvailable: (results as string[]).length === 5,
        },
      })
    }
  }

  const navigation = useNavigation()

  const navigate = (
    winePositionId: CatalogResource['winePositionId']
  ) => () => {
    navigation.navigate(ROUTES.WINE_PAGE, { winePositionId })
  }

  return (
    <ScrollView onScroll={handleScroll}>
      {catalog.map((position) => (
        <TouchableOpacity
          key={position.pk()}
          onPress={navigate(position.winePositionId)}
        >
          <WineCard position={position} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default CatalogView
