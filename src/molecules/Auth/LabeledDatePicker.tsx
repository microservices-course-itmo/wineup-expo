import React, { ReactElement, useState } from 'react'
import { Text, TouchableOpacity, View, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import styles from './styles'

interface DatePickerProps {
  value: Date
  label: string
  onChange: React.Dispatch<React.SetStateAction<Date>>
  maximumDate: Date
  hasFilled: boolean
  onFill: React.Dispatch<React.SetStateAction<boolean>>
}

function LabeledDatePicker({
  value,
  label,
  onChange,
  maximumDate,
  hasFilled,
  onFill,
}: DatePickerProps): ReactElement<DatePickerProps> {
  const [showPicker, setShowPicker] = useState(false)
  const showDatePicker = () => {
    setShowPicker(true)
  }

  const handleChange = (event: any, selectedDate?: Date | undefined) => {
    setShowPicker(false)
    if (!selectedDate) return
    onChange(selectedDate)
    onFill(true)
  }

  return (
    <View
      style={[
        styles.container,
        Platform.OS !== 'android' && {
          zIndex: 99,
        },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        onPress={showDatePicker}
        style={styles.input}
        activeOpacity={1}
      >
        <Text
          style={[
            styles.textAreaStyle,
            hasFilled ? { color: '#000000' } : { color: '#A3A3A3' },
          ]}
        >
          {value.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          style={{ width: '100%' }}
          value={value}
          onChange={handleChange}
          maximumDate={maximumDate}
        />
      )}
    </View>
  )
}

export default LabeledDatePicker
