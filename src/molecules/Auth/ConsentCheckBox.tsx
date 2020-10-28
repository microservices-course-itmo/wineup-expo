import React, { ReactElement } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import styles from './styles'

interface CheckBoxProps {
  onPress: React.Dispatch<React.SetStateAction<boolean>>
  hasFilled: boolean
}

function ConsentCheckBox({
  onPress,
  hasFilled,
}: CheckBoxProps): ReactElement<CheckBoxProps> {
  const checkBoxText = () => {
    return (
      <Text style={styles.checkBoxText}>
        <Text>Даю согласие на </Text>
        <Text style={{ textDecorationLine: 'underline' }}>
          обработку персональных данных
        </Text>
      </Text>
    )
  }

  return (
    <View style={styles.checkBoxContainer}>
      <CheckBox
        Component={TouchableWithoutFeedback}
        size={20}
        center
        title={checkBoxText()}
        checked={hasFilled}
        onPress={() => onPress(!hasFilled)}
        checkedColor='#931332'
      />
    </View>
  )
}

export default ConsentCheckBox
