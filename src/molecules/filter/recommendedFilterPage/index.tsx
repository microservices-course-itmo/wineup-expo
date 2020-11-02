import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RadioButton from './radioButton'

export default RecommendedFilterPage

function RecommendedFilterPage(): ReactElement {
  const [optionMoreSuit, setOptionMoreSuit] = useState<boolean>(true)
  const [optionRate, setOptionRate] = useState<boolean>(false)

  const radioHandler = (): void => {
    setOptionRate(false)
    setOptionMoreSuit(true)
  }
  const radioHandler2 = (): void => {
    setOptionMoreSuit(false)
    setOptionRate(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Рекомендованное</Text>

      <View style={styles.radioContainer}>
        <RadioButton checked={optionMoreSuit} onPress={radioHandler} />
        <Text onPress={radioHandler} style={styles.radioText}>
          Наиболее вам подходящее
        </Text>
      </View>

      <View style={styles.radioContainer}>
        <RadioButton checked={optionRate} onPress={radioHandler2} />
        <Text onPress={radioHandler2} style={styles.radioText}>
          По рейтингу
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 250,
    width: '100%',
  },
  title: {
    alignContent: 'flex-start',
    paddingLeft: 25,
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  radioContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingLeft: 40,
  },
  radioText: {
    fontSize: 18,
    // For vertical align with radio
    marginTop: -3,
  },
})
