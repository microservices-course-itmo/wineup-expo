import React, { Suspense } from 'react'
import { ScrollView, Text } from 'react-native'
import { useResource } from 'rest-hooks'
import WineCard from '../../molecules/WineCard'
import PositionResource from '../../resources/position'

function CatalogView() {
  const positions = useResource(PositionResource.listShape(), {})

  return (
    <ScrollView>
      {positions.map((position, index) => (
        <Suspense key={index} fallback={<Text>Loading...</Text>}>
          <WineCard position={position} />
        </Suspense>
      ))}
    </ScrollView>
  )
}

export default CatalogView
