import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Header() {
  const { goBack } = useNavigation()

  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <AntDesign name='close' color='#fff' size={20} />
      </TouchableOpacity>
    </Container>
  )
}

export default Header

const Container = styled.View`
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 35px;
  padding: 0 15px;
  background-color: #931332;
`
