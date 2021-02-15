import React from 'react'
import { Modal, View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import PrimaryButton from '../atoms/PrimaryButton'

const StyledView = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`
const StyledModalView = styled.View`
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

const StyledButtonText = styled.Text`
  font-size: 14px;
  color: #ffffff;
`

const StyledButton = styled(PrimaryButton)`
  width: 203px;
  height: 55px;
  border-radius: 5px;
  margin-top: 40px;
  color: #fff;
`

const UnauthorizedProfile = () => {
  const modalVisible = true

  return (
    <StyledView>
      <Modal animationType='slide' transparent visible={modalVisible}>
        <View>
          <StyledModalView style={styles.modalView}>
            <StyledText>Вы ещё не вошли в аккаунт</StyledText>
            <StyledButton>
              <StyledButtonText>ВОЙТИ В АККАУНТ</StyledButtonText>
            </StyledButton>
          </StyledModalView>
        </View>
      </Modal>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  modalView: {
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

export default UnauthorizedProfile
