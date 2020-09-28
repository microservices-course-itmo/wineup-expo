import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from '@expo-google-fonts/merriweather'
import { AppLoading } from 'expo'
import LabeledInput from '../molecules/LabledInput'

function SignInScreen(): ReactElement {
  const [userEmail, getUserEmail] = useState('')
  const [userPassword, getUserPassword] = useState('')

  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const onSubmit = () => {
    console.log(userEmail, userPassword)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вход</Text>
      <LabeledInput label='Адрес эл. почты' onChangeText={getUserEmail} />
      <LabeledInput
        label='Пароль'
        onChangeText={getUserPassword}
        secureTextEntry
      />
      <Text
        style={styles.helper}
        onPress={() => Linking.openURL('https://vk.com/asuhovitskiy')}
      >
        Проблемы со входом?
      </Text>
      <TouchableOpacity onPress={onSubmit} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Merriweather_700Bold',
    color: '#C23232',
  },
  helper: {
    paddingTop: 20,
    textAlign: 'left',
    fontSize: 16,
    color: '#4A7DFF',
    fontFamily: 'Merriweather_400Regular',
  },
  container: {
    marginTop: 136,
    flex: 1,
    alignItems: 'center',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    width: 320,
    maxHeight: 56,
    backgroundColor: '#C23232',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Merriweather_400Regular',
  },
})
