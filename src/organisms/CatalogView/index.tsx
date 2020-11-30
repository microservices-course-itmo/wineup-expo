import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useResource } from 'rest-hooks'
import { useNavigation } from '@react-navigation/native'
import CatalogResource from '../../resources/catalog'
import WineCard from '../../molecules/WineCard'
import ROUTES from '../../routes'

function CatalogView() {
  const catalog = useResource(CatalogResource.filteredShape(), {
    from: 0,
    to: 10,
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
