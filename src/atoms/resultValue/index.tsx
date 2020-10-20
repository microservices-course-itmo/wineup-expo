import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { correctValueHandler } from '../advice/index'

function displayHandler(resultValue: number, discount: number) {
  const correctDiscount = correctValueHandler(discount)

  if (discount !== 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>{resultValue}</Text>
        <Text style={styles.discount}>{` -${correctDiscount}%`}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>{resultValue}</Text>
    </View>
  )
}

const ResultValue: React.FunctionComponent<{
  resultValue: number
  discount: number
}> = ({ resultValue, discount }) => {
  return displayHandler(resultValue, discount)
}

export default ResultValue

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  value: {
    textDecorationLine: 'line-through',
    fontWeight: '700',
  },
  discount: {
    color: 'red',
    fontWeight: '700',
  },
})
