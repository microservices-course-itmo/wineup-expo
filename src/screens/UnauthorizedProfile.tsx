import React from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import PrimaryButton from '../atoms/PrimaryButton'

const UnauthorizedProfile = () => (
  <Container style={styles.modalView}>
    <StyledText>Вы ещё не вошли в аккаунт</StyledText>
    <StyledButton>
      <ButtonLabel>ВОЙТИ В АККАУНТ</ButtonLabel>
    </StyledButton>
  </Container>
)

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 9,
  },
})

const Container = styled.View`
  width: 340px;
  height: 200px;
  background: #ffffff;
  border-radius: 9px;
  align-self: center;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledText = styled.Text`
  padding-top: 65px;
  font-size: 20px;
  line-height: 15px;
`

const ButtonLabel = styled.Text`
  font-size: 14px;
  color: #ffffff;
`

const StyledButton = styled(PrimaryButton)`
  width: 203px;
  height: 55px;
  border-radius: 5px;
  margin-top: 40px;
  color: #ffffff;
  padding: 0;
`

export default UnauthorizedProfile
