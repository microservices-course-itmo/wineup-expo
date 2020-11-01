import React, { ReactElement, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface RadioButtonProps {
  checked: boolean
  onPress(value: boolean): void
  label: string
}

const RadioButton = ({
  checked,
  onPress = () => {},
  label = 'Country',
}: RadioButtonProps): ReactElement<RadioButtonProps> => {
  const [isChecked, setChecked] = useState(checked)

  useEffect(() => {
    setChecked(checked)
  }, [checked])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.square, isChecked && styles.filled]}
        onPress={() => {
          onPress(!isChecked)
          setChecked(!isChecked)
        }}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  square: {
    height: 14,
    width: 14,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#757575',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginRight: 20,
  },

  filled: {
    backgroundColor: '#757575',
  },

  label: {
    fontSize: 11,
  },
})

export default RadioButton
