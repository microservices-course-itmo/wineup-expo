import React from 'react'
import { View, StyleSheet } from 'react-native'
import WineTitle from '../../atoms/WineTitle'
import WineShopName, { Shop } from '../../atoms/WineShopName'

export interface Wine {
  name: string
  country: string
  dryness: string
  color: string
  volume: number
  shop: Shop
}

interface WineCardProps {
  wine: Wine
}

function WineCard({
  wine: { name, country, dryness, color, volume, shop },
}: WineCardProps) {
  const description = [country, color, dryness].join(', ')

  return (
    <View style={styles.container}>
      <WineTitle name={name} description={description} volume={volume} />
      <WineShopName {...shop} />
    </View>
  )
}

export default WineCard

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 6,
    backgroundColor: '#cccccc',
  },
})
