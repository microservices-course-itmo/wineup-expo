import React, { useState } from 'react'
import LabeledInput, { LabeledInputProps } from '../LabeledInput'
import { isPhoneValid } from '../../helpers'

function PhoneNumberInput({ onChangeText, ...props }: LabeledInputProps) {
  const [isValid, setIsValid] = useState(true)

  const onChange = (phone: string) => {
    setIsValid(isPhoneValid(phone))

    onChangeText(phone)
  }

  return (
    <LabeledInput
      maxLength={12}
      isValid={isValid}
      onChangeText={onChange}
      label='Номер телефона:'
      placeholder='+7 (9XX) XXX XX XX'
      keyBoardType='phone-pad'
      {...props}
    />
  )
}

export default PhoneNumberInput
