import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import PrimaryButton from '../atoms/PrimaryButton'

// import NotFoundImage from '../../assets/404.png'

interface Props {
  errorCode?: number
  errorMessage?: string
}

const Error = (props: Props): React.ReactNode => {
  const { goBack } = useNavigation()

  const { errorCode, errorMessage } = props

  return (
    <Container>
      <StyledHeader>Ошибка</StyledHeader>
      <StyledErrorCode>{errorCode || 503}</StyledErrorCode>
      <StyledText>
        {errorMessage ||
          'В настоящее время сервер недоступен из-за технического обслуживания'}
      </StyledText>
      <StyledButton onPress={goBack}>
        <ButtonLabel>Вернуться назад</ButtonLabel>
      </StyledButton>
      <StyledLink>Перейти на главную страницу</StyledLink>
    </Container>
  )
}

const Container = styled.View`
  width: 100vw;
  height: 100vh;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15%;
`
const StyledText = styled.Text`
  font-size: 20px;
  line-height: 15px;
  text-align: center;
  margin: 30px 0;
`

const StyledHeader = styled.Text`
  font-size: 25px;
  color: #000;
  font-weight: 500;
  text-align: center;
`

const StyledErrorCode = styled.Text`
  font-size: 60px;
  font-weight: 500;
  text-align: center;
`

const StyledLink = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #931332;
  text-decoration: underline;
  margin: 30px 0;
`

const ButtonLabel = styled.Text`
  font-size: 14px;
  color: #931332;
  font-weight: 300;
`

const StyledButton = styled(PrimaryButton)`
  border-radius: 5px;
  margin-top: 40px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #931332;
  padding: 15px 23px;
`

export default Error
