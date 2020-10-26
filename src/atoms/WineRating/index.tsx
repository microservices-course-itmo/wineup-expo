import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export interface WineRatingProps {
  rating: number
}

export default function ({ rating }: WineRatingProps) {
  return (
    <View>
      <Text>Оценка экспертов:</Text>
      <View style={styles.container}>
        {new Array(5).fill(0).map((star, index) => {
          return (
            <FontAwesome
              key={star}
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
