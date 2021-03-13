import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Image, StyleSheet } from 'react-native'

import { useResource, useResetter } from 'rest-hooks'
import PrimaryButton from '../atoms/PrimaryButton'
import LabeledInput from '../molecules/Auth/LabeledInput'
import ConfirmPopUp from '../molecules/ConfirmPopUp'

import image from '../../assets/profile-main.png'
import { useAuthContext } from './Auth/AuthContext'
import UserResource from '../resources/user'

const AuthorizedProfile: React.FC = () => {
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false)
  const user = useResource(UserResource.me(), {})

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')

  const resetCache = useResetter()
  const auth = useAuthContext()

  useEffect(() => {
    return resetCache()
  }, [])

  useEffect(() => {
    setName(user.name)
    setPhone(user.phoneNumber)
    setCity(user.city)
  }, [user, name, phone, city, setName, setPhone, setCity])

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
    resetCache()
  }

  return (
    <Container>
      <MainImgBox>
        <Image source={image} />
      </MainImgBox>
      <Username>{name}</Username>
      <LabeledInput
        onChangeText={changePhone}
        label='Номер телефона:'
        value={phone}
        editable={false}
        labelStyle={styles.inputLabel}
        containerStyle={{
          marginTop: 0,
          height: 85,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 300,
        }}
        inputStyle={styles.input}
      />
      <LabeledInput
        value={city}
        onChangeText={changeCity}
        label='Город:'
        labelStyle={styles.inputLabel}
        editable={false}
        containerStyle={{
          marginTop: 20,
          height: 85,
          marginLeft: 'auto',
          marginBottom: 30,
          marginRight: 'auto',
          width: 300,
        }}
        inputStyle={styles.input}
      />
      <PrimaryButton
        onPress={onModalOpen}
        style={{
          maxWidth: 230,
          paddingLeft: 30,
          paddingRight: 30,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <ButtonText>Выйти из аккаунта</ButtonText>
      </PrimaryButton>
      <ConfirmPopUp
        onConfirm={handleLogOut}
        onDismiss={onModalClose}
        text='Вы уверены, что хотите выйти из аккаунта?'
        visible={isModalVisible}
        containerStyle={styles.modal}
      />
    </Container>
  )
}

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

const MainImgBox = styled.View`
  position: absolute;
  border: 10px solid #f4f4f4;
  left: 50%;
  top: -85px;
  transform: translateX(-85px);
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  background-color: #f4f4f4;
`

const Username = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`

const Container = styled.View`
  padding: 115px 0 60px;
  margin: 0 14px 0;
  background-color: white;
  position: relative;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  margin-top: auto;
`

export default AuthorizedProfile
