import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function rightBordersHandler(value: number): number {
  if (value > 100) value = 100
  if (value < 0) value = 0
  return value
}

const Advice: React.FunctionComponent<{ ratioAdvice: number }> = ({
  ratioAdvice,
}) => {
  return (
    <View style={styles.adviceContainer} testID='advice-test'>
      <Text>Подходит Вам на {''}
        {rightBordersHandler(ratioAdvice)}
        %
        </Text>
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
