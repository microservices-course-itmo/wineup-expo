import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Advice: React.FunctionComponent<{ ratioAdvice: number }> = (props) => {
  let ratio = props.ratioAdvice
  if (props.ratioAdvice > 100) ratio = 100
  if (props.ratioAdvice < 0) ratio = 0

  return (
    <View style={styles.adviceContainer} testID={'advice-test'}>
      <Text>Подходит Вам на {ratio}%</Text>
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
