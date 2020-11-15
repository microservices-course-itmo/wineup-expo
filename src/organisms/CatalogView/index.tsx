import React from 'react'
import { ScrollView } from 'react-native'
import { useResource } from 'rest-hooks'
import WineCard from '../../molecules/WineCard'
import PositionResource from '../../resources/position'

function CatalogView() {
  const positions = useResource(PositionResource.listShape(), {})

  return (
    <ScrollView>
      {positions.map((position) => (
        <WineCard key={position.pk()} position={position} />
      ))}
    </ScrollView>
  )
}

export default CatalogView
