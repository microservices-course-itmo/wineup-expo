import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import * as SecureStore from 'expo-secure-store'
import { AuthContext } from './Auth/AuthContext'

const SettingsScreen: React.FC = () => {
  const { setIsAuth } = useContext(AuthContext)
  const handleLogOut = () => {
    SecureStore.deleteItemAsync('accessToken')
    SecureStore.deleteItemAsync('refreshToken')
    setIsAuth(false)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleLogOut}>
        <Text style={styles.buttonText}>ВЫЙТИ ИЗ АККАУНТА</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 203,
    height: 55,
    backgroundColor: '#931332',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { fontSize: 14, color: '#fff' },
})

export default SettingsScreen
