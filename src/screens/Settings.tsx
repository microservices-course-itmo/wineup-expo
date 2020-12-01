import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { AuthContext } from './Auth/AuthContext'

const SettingsScreen: React.FC = () => {
  const { setIsAuth } = useContext(AuthContext)
  const { setUserTokens } = useContext(AuthContext)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          setUserTokens({ accessToken: '', refreshToken: '' })
          setIsAuth(false)
        }}
      >
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
