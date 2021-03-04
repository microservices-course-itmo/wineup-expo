import React from 'react'
import { Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import styled from 'styled-components/native'
import ROUTES from '../../routes'
import confirmButtonTick from '../../../assets/confirmButtonTick.png'
import welcomeHandShake from '../../../assets/handShake.png'
import confirmButtonCross from '../../../assets/confirmButtonCross.png'

export type TProps = StackScreenProps<any, typeof ROUTES.CONFIRM_AGE>

const AgeConfirm: React.FC<TProps> = ({ navigation }) => {
  const navigateToSignIn = (): void => {
    navigation.push(ROUTES.SIGN_IN)
  }

  const navigateToAgeDenied = (): void => {
    navigation.push(ROUTES.AGE_DENIED)
  }

  return (
    <StyledViewContainer>
      <Image source={welcomeHandShake} />
      <StyledWelcomeText> Добро пожаловать!</StyledWelcomeText>
      <StyledHeaderText> Вам уже исполнилось 18 лет?</StyledHeaderText>
      <StyledViewButton>
        <StyledButtonConfirm activeOpacity={0.8} onPress={navigateToSignIn}>
          <Image source={confirmButtonTick} />
          <StyledButtonConfirmText>Да</StyledButtonConfirmText>
        </StyledButtonConfirm>
        <StyledButtonDeny activeOpacity={0.8} onPress={navigateToAgeDenied}>
          <Image source={confirmButtonCross} />
          <StyledButtonDenyText>Нет</StyledButtonDenyText>
        </StyledButtonDeny>
      </StyledViewButton>
    </StyledViewContainer>
  )
}

export default AgeConfirm

const StyledViewContainer = styled.View`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`
const StyledWelcomeText = styled.Text`
  margin-top: 13px;
  font-size: 16px;
  font-family: 'PlayfairDisplay_400Regular_Italic';
  color: 'rgb(255, 255, 255)';
`
const StyledHeaderText = styled.Text`
  font-size: 22px;
  font-family: 'PTSans_700Bold';
  color: 'rgb(255, 255, 255)';
  margin-top: 36px;
`
const StyledViewButton = styled.View`
  flex-direction: row;
  margin-top: 47px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`
const StyledButtonConfirm = styled.TouchableOpacity`
  width: 97px;
  height: 46px;
  background-color: 'rgb(255, 255, 255)';
  border-radius: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const StyledButtonConfirmText = styled.Text`
  margin-left: 8px;
  font-family: 'PTSans_700Bold';
  color: 'rgb(69, 208, 158)';
`
const StyledButtonDeny = styled.TouchableOpacity`
  width: 97px;
  height: 46px;
  background-color: 'rgb(255, 255, 255)';
  border-radius: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 42px;
`
const StyledButtonDenyText = styled.Text`
  margin-left: 11px;
  font-family: 'PTSans_700Bold';
  color: 'rgb(226, 3, 56)';
`
