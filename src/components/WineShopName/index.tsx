import React from 'react'
import { View, Image, Text, ImageSourcePropType } from 'react-native'

import styles from './styles'

export type TProps = {
  image: ImageSourcePropType
  name: string
  description: string
}

const WineShopName: React.FC<TProps> = ({
  image,
  name,
  description,
}: TProps) => {
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
