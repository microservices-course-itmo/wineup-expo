import React, { RefObject, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Dimensions, Modal, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export interface ExtraOptionsProps {
  data: Array<any>
  visible: boolean
  handleClose: () => void
  target: RefObject<Text>
}

function ExtraOptions({
  data,
  visible,
  handleClose,
  target,
}: ExtraOptionsProps) {
  const [position, setPosition] = useState({ bottom: 0 })
  const onClose = () => {
    handleClose()
  }

  useEffect(() => {
    target.current!.measureInWindow((x, y) => {
      const { height: windowHeight } = Dimensions.get('window')

      setPosition({ bottom: windowHeight - y })
    })
  }, [visible])

  return (
    <Modal animated animationType='fade' visible={visible} transparent>
      <ModalOverlay onPress={onClose} />
      <Container style={position}>
        <ModalTitle>Дополнительные параметры:</ModalTitle>
        <ModalCloseIcon>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name='md-close' size={24} color='rgb(157,74,91)' />
          </TouchableOpacity>
        </ModalCloseIcon>

        <ModalItemsWrapper>
          {data &&
            data.map((item, index) => (
              <ModalItem key={index} odd={!!(index % 2)}>
                <Text>{item.param}:</Text>
                <ModalTextBold>{item.answ}</ModalTextBold>
              </ModalItem>
            ))}
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
  left: 5%;
  margin-bottom: -20px;
  box-shadow: 0px 3px 4px rgba(178, 178, 178, 0.5);
  border: 1px solid #b2b2b220;
  border-radius: 12px;
  position: absolute;
`

const ModalTitle = styled.Text`
  text-align: center;
`

const ModalItem = styled.View<{ odd: boolean }>`
  padding: 15px 20px;
  border-radius: 5px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ odd }) => (odd ? '#eeeeee' : 'transparent')};
`

const ModalItemsWrapper = styled.View`
  margin-top: 20px;
`

const ModalTextBold = styled.Text`
  font-weight: 700;
  max-width: 50%;
  text-align: right;
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
