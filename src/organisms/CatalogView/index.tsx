import React, { Suspense } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
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
      {positions.map((position, index) => (
        <Suspense key={index} fallback={<Text>Loading...</Text>}>
          <TouchableOpacity onPress={navigate(position.winePositionId)}>
            <WineCard position={position} />
          </TouchableOpacity>
        </Suspense>
      ))}
    </ScrollView>
  )
}

export default CatalogView
