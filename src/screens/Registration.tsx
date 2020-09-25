import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Merriweather_700Bold',
    color: '#C23232',
  },
  label: {
    position: 'absolute',
    top: -28,
    fontSize: 16,
    color: '#888888',
    fontFamily: 'Merriweather_400Regular',
  },
  container: {
    marginTop: 136,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    marginTop: 40,
  },
  input: {
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BCBCBC',
    paddingLeft: 10,
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
})

const RegistrationScreen: React.FC = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const userRegister = () => {
    console.log(userName, userEmail, userPassword)

    // validation ? pass : highlight mistakes, return
    // fetch ? response.ok : response.error, return
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Регистрация</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ФИО</Text>
        <TextInput
          selectionColor='#4E4E4E'
          style={styles.input}
          onChangeText={(name) => setUserName(name)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Адрес эл. почты</Text>
        <TextInput
          selectionColor='#4E4E4E'
          style={styles.input}
          onChangeText={(email) => setUserEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput
          selectionColor='#4E4E4E'
          style={styles.input}
          onChangeText={(password) => setUserPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={userRegister} style={styles.buttonStyle}>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            fontFamily: 'Merriweather_400Regular',
          }}
        >
          Зарегистрироваться
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegistrationScreen
