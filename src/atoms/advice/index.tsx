import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function correctValueHandler(value: number): number {
  let correctVal = value

  if (value > 100) correctVal = 100
  if (value < 0) correctVal = 0

  return correctVal
}

const Advice: React.FunctionComponent<{ ratioAdvice: number }> = ({
  ratioAdvice,
}) => {
  const displayData = `Подходит Вам на ${correctValueHandler(ratioAdvice)}%`

  return (
    <View style={styles.adviceContainer} testID='advice-test'>
      <Text>{displayData}</Text>
    </View>
  )
}

export default Advice

const styles = StyleSheet.create({
  adviceContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})
