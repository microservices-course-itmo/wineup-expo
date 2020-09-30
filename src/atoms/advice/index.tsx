import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Advice: React.FunctionComponent<{ ratioAdvice: number }> = ({
  ratioAdvice,
}) => {
  let ratio = ratioAdvice
  if (ratioAdvice > 100) ratio = 100
  if (ratioAdvice < 0) ratio = 0

  return (
    <View style={styles.adviceContainer} testID='advice-test'>
      <Text>
        Подходит Вам на
        {ratio}%
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
