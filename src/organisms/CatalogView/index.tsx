import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useResource } from 'rest-hooks'
import { useNavigation } from '@react-navigation/native'
import CatalogResource from '../../resources/catalog'
import WineCard from '../../molecules/WineCard'
import ROUTES from '../../routes'
import { useFilters } from '../FiltersBar/FiltersContext'

function CatalogView() {
  const { query } = useFilters()

  const catalog = useResource(CatalogResource.filtered(), {
    from: 0,
    to: 5,
    searchParameters: query,
  })

  const navigation = useNavigation()

  const navigate = (
    winePositionId: CatalogResource['winePositionId']
  ) => () => {
    navigation.navigate(ROUTES.WINE_PAGE, { winePositionId })
  }

  return (
    <ScrollView>
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
