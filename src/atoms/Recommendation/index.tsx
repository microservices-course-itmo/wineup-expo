import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function correctValueHandler(value: number): number {
  let correctVal = value

  if (value > 100) correctVal = 100
  if (value < 0) correctVal = 0

  return correctVal
}

const Recommendation: React.FunctionComponent<{ ratioAdvice: number }> = ({
  ratioAdvice,
}) => {
  return (
    <View style={styles.adviceContainer} testID='advice-test'>
      <Text>Подходит вам на {correctValueHandler(ratioAdvice)}%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  adviceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Recommendation
