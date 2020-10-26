import React, { ReactElement } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function AgeBackScreen(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontStyle: 'italic' }}>
        Спасибо за честный ответ
      </Text>
      <Text style={{ marginTop: 36, marginBottom: 47, marginLeft: 10 }}>
        К сожалению, наше приложение содержит информацию, не предназначенную для
        младше 18 лет
      </Text>
      <TouchableOpacity style={styles.buttonStyle}>
        {/* //onPress={useLinking} */}
        <Text>Вернуться назад</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AgeBackScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 20,
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 320,
    maxHeight: 56,
    backgroundColor: '#C23232',
    borderRadius: 10,
  },
})
