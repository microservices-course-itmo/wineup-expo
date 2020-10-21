import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ComponentProps {
  price: number
}

const WineBottlePrice = ({ price }: ComponentProps) => {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.price}>₽</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  priceContainer: {
    width: 256,
    height: 75,
    backgroundColor: '#e5e5e5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  price: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'Merriweather_900Black',
    fontSize: 48,
  },
})

export default WineBottlePrice
