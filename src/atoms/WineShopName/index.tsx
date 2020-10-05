import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './style'
import logo from './src/logo.png'

interface ComponentProps {
  image?: string
  name: string
  description: string
}

const WineShopName = ({ image = logo, name, description }: ComponentProps) => {
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
