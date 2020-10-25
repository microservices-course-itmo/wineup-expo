import React, { ReactElement } from 'react'
import { Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles'
import { City } from '../../helpers'

interface PickerProps {
  label: string
  onChange: React.Dispatch<React.SetStateAction<City>>
  hasFilled: boolean
  onFill: React.Dispatch<React.SetStateAction<boolean>>
}

function LabeledDropdown({
  label,
  onChange,
  hasFilled,
  onFill,
}: PickerProps): ReactElement<PickerProps> {
  const handleChange = (selectedValue: City) => {
    onChange(selectedValue)
    onFill(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        items={[
          {
            label: 'Москва',
            value: 'Москва',
          },
          {
            label: 'Санкт-Петербург',
            value: 'Санкт-Петербург',
          },
        ]}
        showArrow={false}
        defaultValue='Москва'
        containerStyle={styles.dropdownContainer}
        style={styles.dropdownStyle}
        labelStyle={styles.dropdownLabel}
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
