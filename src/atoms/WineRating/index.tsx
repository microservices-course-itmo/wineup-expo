import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export interface WineRatingProps {
  rating?: Number
}

export function WineRatingComponent({ rating = 3 }: WineRatingProps) {
  return (
    <View>
      <Text>Оценка экспертов:</Text>
      <View style={styles.container}>
        {new Array(5).fill(0).map((_, index) => {
          return (
            <FontAwesome
              key={index}
              name={index + 1 > rating ? 'star-o' : 'star'}
              size={24}
              color='black'
            />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 120,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  text: {
    fontSize: 18,
  },
})

export default WineRatingComponent
