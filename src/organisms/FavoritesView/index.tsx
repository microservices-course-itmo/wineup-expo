import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useResource } from 'rest-hooks'
import { useNavigation } from '@react-navigation/native'
import CatalogResource from '../../resources/catalog'
import WineCard from '../../molecules/WineCard'
import ROUTES from '../../routes'
import FavouritesPlaceholder from '../../molecules/FavoritesPlaceholder'
import FavoritesResource from '../../resources/favorites'

function FavoritesView() {
  const favorites = useResource(FavoritesResource.list(), {})

  const navigation = useNavigation()

  if (favorites.length === 0) {
    return <FavouritesPlaceholder />
  }

  const navigate = (
    winePositionId: CatalogResource['winePositionId']
  ) => () => {
    navigation.navigate(ROUTES.WINE_PAGE, { winePositionId })
  }

  return (
    <ScrollView>
      {favorites.map((position) => (
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

export default FavoritesView
