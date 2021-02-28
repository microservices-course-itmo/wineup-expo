import React, { useState } from 'react'
import styled from 'styled-components/native'
import { StackScreenProps } from '@react-navigation/stack'
import ROUTES from '../../routes'
import phoneEnterIcon from '../../../assets/phoneEnterIcon.png'

export type TProps = StackScreenProps<any, typeof ROUTES.SIGN_IN>

const SignInScreen: React.FC<TProps> = ({ navigation }) => {
  const [userPhone, setUserPhone] = useState('')

  const navigateToSignInConfirm = (): void => {
    navigation.navigate(ROUTES.SIGN_IN_CONFIRM)
    console.log(userPhone)
  }

  return (
    <StyledContainer>
      <StyledEnterNumberText>
        Введите номер телефона для авторизации
      </StyledEnterNumberText>
      <StyledPhoneEnterForm>
        <StyledInputPhone
          keyboardType='number-pad'
          maxLength={12}
          onChangeText={setUserPhone}
          placeholder='+7 (9XX) XXX XX XX'
          textAlignVertical='center'
          textContentType='telephoneNumber'
          editable
          selectionColor='#000'
        />
        <StyledImagePhone source={phoneEnterIcon} />
      </StyledPhoneEnterForm>
      <StyledEnterButton
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(ROUTES.SIGN_IN_CONFIRM)
          console.log(userPhone)
        }}
      >
        <StyledEnterTextButton>Войти</StyledEnterTextButton>
      </StyledEnterButton>
      <StyledUnregButton>
        <StyledUnregEnterTextButton>
          Продолжить без авторизации
        </StyledUnregEnterTextButton>
      </StyledUnregButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justifycontent: center;
`
const StyledEnterNumberText = styled.Text`
  font-size: 20px;
  font-family: 'PTSans_700Bold';
  color: 'rgb(255, 255, 255)';
  text-align: center;
`
const StyledPhoneEnterForm = styled.View`
  background-color: 'rgb(255, 255, 255)';
  width: 268px;
  height: 57px;
  margin-top: 30px;
  border-radius: 10px;
`
const StyledInputPhone = styled.TextInput`
  flex: 1;
  min-height: 57px;
  max-height: 57px;
  min-width: 268px;
  justifycontent: center;
  align-items: center;
  border-radius: 5px;
  color: 'rgb(0, 0, 0)';
  background-color: 'rgb(255, 255, 255)';
  text-align: center;
  font-size: 16px;
  font-family: 'PTSans_400Regular';
  font-weight: normal;
`
const StyledImagePhone = styled.Image`
  position: absolute;
  top: 17px;
  left: 30px;
`
const StyledEnterButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justifycontent: center;
  width: 268px;
  max-height: 57px;
  min-height: 57px;
  background-color: 'rgb(147, 19, 50)';
  border-radius: 5px;
  margin-top: 23px;
`
const StyledEnterTextButton = styled.Text`
  font-size: 16px;
  color: 'rgb(255, 255, 255)';
  font-family: 'PTSans_700Bold';
`
const StyledUnregButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justifycontent: center;
  margin-top: 30px;
  width: 316px;
  max-height: 35px;
`
const StyledUnregEnterTextButton = styled.Text`
  text-decoration-line: underline;
  font-size: 16px;
  color: 'rgb(255, 255, 255)';
`

export default SignInScreen
