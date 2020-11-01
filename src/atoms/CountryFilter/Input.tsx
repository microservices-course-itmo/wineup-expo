import React, { ReactElement, useEffect, useState } from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'
import searchIcon from './src/loupe.png'

interface InputProps {
  value: string
  onChange(value: string): void
}

const Input = ({
  value = '',
  onChange = () => {},
}: InputProps): ReactElement<InputProps> => {
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={searchIcon} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => {
          onChange(newValue)
          setInputValue(newValue)
        }}
        value={inputValue}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    borderRadius: 2,
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    height: '100%',
  },

  input: {
    width: '100%',
  },

  image: {
    resizeMode: 'cover',
    height: 15,
    width: 15,
  },
})

export default Input
