import React from 'react'
import styled from 'styled-components/native'
import { Modal, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export interface ExtraOptionsProps {
  data: Array<any>
  visible: boolean
  handleClose: () => void
}

function ExtraOptions({ data, visible, handleClose }: ExtraOptionsProps) {
  return (
    <Modal animated animationType='slide' visible={visible} transparent>
      <ModalOverlay
        onPress={() => handleClose()}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      />
      <Container>
        <ModalTitle>Дополнительные параметры:</ModalTitle>
        <ModalCloseIcon>
          <TouchableOpacity onPress={() => handleClose()}>
            <Ionicons name='md-close' size={24} color='rgb(157,74,91)' />
          </TouchableOpacity>
        </ModalCloseIcon>

        <ModalItemsWrapper>
          {data &&
            data.map((item, index) =>
              index % 2 ? (
                <ModalItem key={index}>
                  <Text>{item.param}:</Text>
                  <ModalTextBold>{item.answ}</ModalTextBold>
                </ModalItem>
              ) : (
                <ModalItemGray key={index}>
                  <Text>{item.param}:</Text>
                  <ModalTextBold>{item.answ}</ModalTextBold>
                </ModalItemGray>
              )
            )}
        </ModalItemsWrapper>
      </Container>
    </Modal>
  )
}

export default ExtraOptions

const Container = styled.View`
  padding: 30px 20px;
  background: white;
  width: 90%;
  margin: auto auto 0;
  box-shadow: 0px 3px 4px rgba(178, 178, 178, 0.5);
  border-radius: 12px;
  position: relative;
`

const ModalTitle = styled.Text`
  text-align: center;
`

const ModalItem = styled.View`
  padding: 15px 20px;
  border-radius: 5px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ModalItemGray = styled(ModalItem)`
  background: rgb(238, 238, 238);
`

const ModalItemsWrapper = styled.View`
  margin-top: 20px;
`

const ModalTextBold = styled.Text`
  font-weight: 700;
`
const ModalCloseIcon = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`
const ModalOverlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`
