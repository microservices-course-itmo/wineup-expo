import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import styled from 'styled-components/native'
import ROUTES from '../../routes'

export type TProps = StackScreenProps<any, typeof ROUTES.AGE_DENIED>

const AgeDenied: React.FC<TProps> = ({ navigation }) => (
  <StyledViewContainer>
    <StyledHeaderText>Спасибо за честный ответ!</StyledHeaderText>
    <StyledTextView>
      <StyledTextBodyHeader>К сожалению, наше приложение</StyledTextBodyHeader>
      <StyledTextBody>содержит информацию,</StyledTextBody>
      <StyledDenyTextBody>не предназначенную</StyledDenyTextBody>
      <StyledTextBody>для лиц младше 18 лет</StyledTextBody>
    </StyledTextView>
    <StyledBackButton activeOpacity={0.8} onPress={() => navigation.goBack()}>
      <StyledTextBackButton>Вернуться назад</StyledTextBackButton>
    </StyledBackButton>
  </StyledViewContainer>
)

export default AgeDenied

const StyledViewContainer = styled.View`
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`
const StyledHeaderText = styled.Text`
  font-size: 22px;
  font-family: 'PTSans_700Bold';
  color: 'rgb(255, 255, 255)';
  margin-top: 36px;
`
const StyledTextView = styled.View`
  display: flex;
  flex-direction: column;
`
const StyledTextBodyHeader = styled.Text`
  font-size: 20px;
  font-family: 'PTSans_400Regular';
  color: 'rgb(255, 255, 255)';
  margin-top: 33px;
  text-align: center;
`
const StyledTextBody = styled.Text`
  font-size: 20px;
  font-family: 'PTSans_400Regular';
  color: 'rgb(255, 255, 255)';
  text-align: center;
`
const StyledDenyTextBody = styled.Text`
  font-size: 20px;
  font-family: 'PTSans_700Bold';
  color: 'rgb(255, 255, 255)';
  text-align: center;
`
const StyledBackButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 217px;
  margin-top: 52px;
  max-height: 57px;
  min-height: 57px;
  background-color: 'rgb(147, 19, 50)';
  border-radius: 5px;
`
const StyledTextBackButton = styled.Text`
  font-size: 16px;
  color: 'rgb(255, 255, 255)';
  font-family: 'PTSans_700Bold';
`
