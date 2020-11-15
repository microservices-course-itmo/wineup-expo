import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useResource } from 'rest-hooks'
import { useNavigation } from '@react-navigation/native'
import WineCard from '../../molecules/WineCard'
import PositionResource from '../../resources/position'
import ROUTES from '../../routes'

function CatalogView() {
  const positions = useResource(PositionResource.listShape(), {})
  const navigation = useNavigation()

  const navigate = (
    winePositionId: PositionResource['winePositionId']
  ) => () => {
    navigation.navigate(ROUTES.WINE_PAGE, { winePositionId })
  }

  return (
    <ScrollView>
      {positions.map((position) => (
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
