import React, { ReactElement } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

interface RadioButtonProps {
  checked: boolean
  onPress(): void
}

const RadioButton = ({
  checked,
  onPress,
}: RadioButtonProps): ReactElement<RadioButtonProps> => {
  return (
    <TouchableOpacity style={styles.circle} onPress={onPress}>
      {checked && <View style={styles.checkedCircle} />}
    </TouchableOpacity>
  )
}

export default RadioButton

const styles = StyleSheet.create({
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#872434',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  checkedCircle: {
    width: 18,
    height: 18,
    borderRadius: 7,
    backgroundColor: '#872434',
  },
})
