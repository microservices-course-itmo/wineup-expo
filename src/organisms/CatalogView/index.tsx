import React from 'react'
import { ScrollView } from 'react-native'
import WineCard, { Wine } from '../../molecules/WineCard'

interface CatalogViewProps {
  children: Wine[]
}

function CatalogView({ children }: CatalogViewProps) {
  return (
    <ScrollView>
      {children.map((wine, index) => (
        <WineCard key={index} wine={wine} />
      ))}
    </ScrollView>
  )
}

export default CatalogView
