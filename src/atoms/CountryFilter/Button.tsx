import React, { useState, ReactElement } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface ButtonProps {
  onPress?(): void
}

export default ({
  onPress = () => {},
}: ButtonProps): ReactElement<ButtonProps> => {
  const [pressed, setPressed] = useState(false)
  const pressHandler = () => {
    setPressed(!pressed)

    onPress()
  }

  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>ПРИМЕНИТЬ</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 256,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2c6cb',
    borderRadius: 2,
  },

  text: {
    fontSize: 9,
    color: '#ffffff',
  },

  pressed: {
    backgroundColor: '#9fa2a7',
  },
})
