import React from 'react'
import { ScrollView } from 'react-native'
import { useResource } from 'rest-hooks'
import CatalogResource from '../../resources/CatalogResource'
import WineCard from '../../molecules/WineCard'
import PositionResource from '../../resources/position'

function CatalogView() {
  const catalog = useResource(CatalogResource.listShape(), {})

  return (
    <ScrollView>
      {catalog.map((position) => (
        <WineCard key={position.pk()} position={position} />
      ))}
    </ScrollView>
  )
}

export default CatalogView
