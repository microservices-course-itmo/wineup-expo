import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 270,
    height: 55,
    backgroundColor: '#492048',
  },
  flexedContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 65,
    height: 40,
  },
  textContainer: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  name: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 26,
  },
  description: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
})

interface ComponentProps {
  image: string
  name: string
  description: string
}

const WineShopName = ({ image, name, description }: ComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexedContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  )
}

export default WineShopName
