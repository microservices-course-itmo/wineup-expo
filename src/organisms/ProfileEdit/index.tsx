import React, { useState } from 'react'
import styled from 'styled-components/native'
import LabeledInput from '../../molecules/LabeledInput'
import PhoneNumberInput from '../../molecules/PhoneNumberInput'
import CityChooser, { CityID } from '../../molecules/CityChooser'
import UserResource from '../../resources/user'
import PrimaryButton from '../../atoms/PrimaryButton'
import Text from '../../atoms/Text'

interface ProfileEditProps {
  user: UserResource
  onSave: () => void
}

function ProfileEdit({ user, onSave }: ProfileEditProps) {
  const [name, setName] = useState<string>(user.name)
  const [phone, setPhone] = useState(user.phoneNumber)
  const [city, setCity] = useState<CityID>(user.cityId)

  return (
    <>
      <LabeledInput
        label='Имя:'
        labelStyle={{
          color: '#969696',
        }}
        inputStyle={{
          minHeight: 25,
          maxHeight: 25,
          borderBottomWidth: 0.5,
          borderBottomColor: '#000000',
          paddingLeft: 0,
        }}
        style={{
          marginTop: 20,
          marginLeft: 'auto',
          marginBottom: 30,
          marginRight: 'auto',
          width: 300,
        }}
        value={name}
        onChangeText={setName}
      />
      <PhoneNumberInput
        labelStyle={{ color: '#969696' }}
        value={phone}
        onChangeText={setPhone}
      />
      <CityChooser
        label='Город:'
        onChange={setCity}
        defaultValue={city}
        onFill={() => {}}
        hasFilled
      />
      <SaveButton onPress={onSave}>
        <SaveButtonLabel>СОХРАНИТЬ ИЗМЕНЕНИЯ</SaveButtonLabel>
      </SaveButton>
    </>
  )
}

export default ProfileEdit

const SaveButton = styled(PrimaryButton)`
  max-width: 270px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
`

const SaveButtonLabel = styled(Text)`
  text-align: center;
  color: #ffffff;
`
