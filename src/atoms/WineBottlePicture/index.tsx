import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

interface ComponentProps {
  image: string
}

const WineBottlePicture = ({ image }: ComponentProps) => {
  return (
    <View style={styles.imageContainer}>
      {/* @ts-ignore */}
      <Image style={styles.image} source={image} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 256,
    height: 256,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
})

export default WineBottlePicture
