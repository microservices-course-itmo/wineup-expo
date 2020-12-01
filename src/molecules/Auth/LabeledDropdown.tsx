import React, { ReactElement } from 'react'
import { Text, View, Platform } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles'

enum CityPicker {
  mskLabel = 'Москва',
  spbLabel = 'Санкт-Петербург',
  mskValue = 1,
  spbValue = 2,
}

interface PickerProps {
  label: string
  onChange: React.Dispatch<React.SetStateAction<number>>
  hasFilled: boolean
  onFill: React.Dispatch<React.SetStateAction<boolean>>
}

function LabeledDropdown({
  label,
  onChange,
  hasFilled,
  onFill,
}: PickerProps): ReactElement<PickerProps> {
  const handleChange = (selectedValue: number) => {
    onChange(selectedValue)
    onFill(true)
  }

  return (
    <View
      style={[
        styles.container,
        Platform.OS !== 'android' && {
          zIndex: 10,
        },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        items={[
          {
            label: CityPicker.mskLabel,
            value: CityPicker.mskValue,
          },
          {
            label: CityPicker.spbLabel,
            value: CityPicker.spbValue,
          },
        ]}
        showArrow={false}
        defaultValue={1}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdownStyle}
        labelStyle={styles.textAreaStyle}
        selectedLabelStyle={
          hasFilled ? { color: '#000000' } : { color: '#A3A3A3' }
        }
        dropDownStyle={styles.dropdownItems}
        onChangeItem={(item) => handleChange(item.value)}
      />
    </View>
  )
}

export default LabeledDropdown
