import React from 'react'
import { ScrollView } from 'react-native'
import { useResource } from 'rest-hooks'
import CatalogResource from '../../resources/CatalogResource'
import WineCard from '../../molecules/WineCard'
import PositionResource from '../../resources/position'

function CatalogView() {
  const positions = useResource(PositionResource.listShape(), {})

  // Add resource using
  const catalog = useResource(CatalogResource.listShape(), {})

  return (
    <ScrollView>
      {positions.map((position) => (
        <WineCard key={position.pk()} position={position} />
      ))}
      {/* {catalog} */}
    </ScrollView>
  )
}

export default CatalogView
