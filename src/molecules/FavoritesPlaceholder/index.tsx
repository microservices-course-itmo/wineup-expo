import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import image from './src/arrow.png'

const FavoritesPlaceholder = () => {
  const [isPressed, setPressed] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Тут пока пусто</Text>
      <Text style={styles.flavorText}>
        Наш каталог поможет Вам{'\n'} что-нибудь найти..
      </Text>
      <Image style={styles.arrow} source={image} />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={1}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <Text
          style={[styles.buttonText, isPressed && styles.buttonTextPressed]}
        >
          Перейти в каталог
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  button: {
    width: 250,
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#931332',
    borderRadius: 2,
  },

  text: {
    fontSize: 25,
    fontFamily: 'PlayfairDisplay_400Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },

  buttonTextPressed: {
    opacity: 0.25,
  },

  flavorText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
    color: '#707070',
  },

  arrow: {
    height: 60,
    width: 25,
    position: 'absolute',
    right: -20,
    bottom: 68,
  },
})

export default FavoritesPlaceholder
