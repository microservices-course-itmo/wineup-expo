import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import LabeledInput from '../../molecules/LabeledInput'
import PhoneNumberInput from '../../molecules/PhoneNumberInput'
import UserResource from '../../resources/user'
import { useAuthContext } from '../../screens/Auth/AuthContext'
import PrimaryButton from '../../atoms/PrimaryButton'
import ConfirmPopUp from '../../molecules/ConfirmPopUp'

interface ProfileInfoProps {
  onEdit: () => void
  user: UserResource
}

function ProfileInfo({ onEdit, user }: ProfileInfoProps) {
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false)

  const auth = useAuthContext()

  const changePhone = () => {
    console.log('change phone')
  }

  const changeCity = () => {
    console.log('change city')
  }

  const onModalOpen = (): void => {
    setModalVisible(true)
  }

  const onModalClose = (): void => {
    setModalVisible(false)
  }

  const handleLogOut = () => {
    auth.signout()
  }

  return (
    <>
      <Username>{user.name}</Username>
      <StyledPhoneNumberInput
        onChangeText={changePhone}
        value={user.phoneNumber}
        editable={false}
        labelStyle={styles.inputLabel}
        inputStyle={styles.input}
      />
      <LabeledInput
        value={user.city}
        onChangeText={changeCity}
        label='Город:'
        labelStyle={styles.inputLabel}
        editable={false}
        style={{
          marginTop: 20,
          height: 85,
          marginLeft: 'auto',
          marginBottom: 30,
          marginRight: 'auto',
          width: 300,
        }}
        inputStyle={styles.input}
      />
      <EditButton onPress={onEdit}>
        <ButtonText>РЕДАКТИРОВАТЬ ПРОФИЛЬ</ButtonText>
      </EditButton>
      <SignOutButton onPress={onModalOpen}>
        <SignOutLabel>ВЫЙТИ ИЗ АККАУНТА</SignOutLabel>
      </SignOutButton>
      <ConfirmPopUp
        onConfirm={handleLogOut}
        onDismiss={onModalClose}
        text='Вы уверены, что хотите выйти из аккаунта?'
        visible={isModalVisible}
        containerStyle={styles.modal}
      />
    </>
  )
}

export default ProfileInfo

const styles = StyleSheet.create({
  inputLabel: {
    color: '#969696',
    position: 'relative',
    top: 0,
    marginBottom: 5,
    marginRight: 'auto',
  },
  input: {
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
  },
  modal: {
    top: '50%',
    marginTop: '-35%',
    width: '95%',
    borderRadius: 10,
    marginLeft: '2.5%',
    marginRight: '2.5%',
  },
})

const ButtonText = styled.Text`
  color: white;
  width: 100%;
  text-align: center;
`

const Username = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`

const StyledPhoneNumberInput = styled(PhoneNumberInput)`
  margin-top: 0;
  height: 85px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`

const EditButton = styled(PrimaryButton)`
  max-width: 270px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
`

const SignOutButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 25px;
`

const SignOutLabel = styled.Text`
  font-family: 'Merriweather_400Regular';
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  text-align: center;
  letter-spacing: 0.7px;

  color: #931332;
  text-decoration: underline;
  text-decoration-color: #931332;
`
