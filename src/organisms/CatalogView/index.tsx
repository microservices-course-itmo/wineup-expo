import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useResource } from 'rest-hooks'
import { useNavigation } from '@react-navigation/native'
import CatalogResource from '../../resources/catalog'
import WineCard from '../../molecules/WineCard'
import ROUTES from '../../routes'
import { useFilters } from '../FiltersBar/FiltersContext'

const POSITIONS_PER_PAGE = 5

function CatalogView() {
  const { query } = useFilters()

  const startingPageState = {
    pageStats: {
      pageNumber: 1,
      firstItem: 0,
      lastItem: POSITIONS_PER_PAGE - 1,
    },
  }

  const [page, setPage] = useState(startingPageState)

  console.log(query)

  // const catalog: any[] = []
  const catalog = useResource(CatalogResource.filtered(), {
    from: page.pageStats.firstItem,
    to: page.pageStats.lastItem,
    searchParameters: query,
  })

  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y
    const contentSize = event.nativeEvent.contentSize.height

    if (yOffset >= 0.7 * contentSize) {
      const currentPage = {
        pageNumber: page.pageStats.pageNumber + 1,
        firstItem: page.pageStats.pageNumber * POSITIONS_PER_PAGE,
        lastItem:
          page.pageStats.pageNumber * POSITIONS_PER_PAGE +
          POSITIONS_PER_PAGE -
          1,
      }

      setPage({ pageStats: currentPage })
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
