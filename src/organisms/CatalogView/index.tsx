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

  const defaultState = {
    layoutStats: {
      xPosition: 0,
      yPosition: 0,
      layoutWidth: 50,
      layoutHeight: 100,
    },
  }

  const startingPageState = {
    pageStats: {
      pageNumber: 1,
      firstItem: 0,
      lastItem: POSITIONS_PER_PAGE - 1,
    },
  }

  const [state, setState] = useState(defaultState)
  const [page, setPage] = useState(startingPageState)
  
  console.log(query)

  // const catalog: any[] = []
  const catalog = useResource(CatalogResource.filteredShape(), {
    from: page.pageStats.firstItem,
    to: page.pageStats.lastItem,
    searchParameters: '',
  })

  const getLayoutStats = (event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout
    const currentLayout = {
      xPosition: x,
      yPosition: y,
      layoutWidth: width,
      layoutHeight: height,
    }

    setState({ layoutStats: currentLayout })
  }

  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y

    if (yOffset > 0.6 * state.layoutStats.layoutHeight) {
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
    <ScrollView onScroll={handleScroll} onLayout={getLayoutStats}>
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
