import React from 'react'
import InsetShadow from 'react-native-inset-shadow'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

function SearchInput() {
  return (
    <InsetShadow
      shadowColor='#000000'
      shadowOffset={0}
      shadowRadius={2}
      shadowOpacity={0.25}
      containerStyle={{
        borderRadius: 50,
        height: 30,
        marginVertical: 15,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
      }}
    >
      <Container>
        <Ionicons name='ios-search' color='#d1d1d1' size={16} />
        <Input placeholder='Поиск...' placeholderTextColor='#d1d1d1' />
      </Container>
    </InsetShadow>
  )
}

export default SearchInput

const Container = styled.View`
  height: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 11px;
`

const Input = styled.TextInput`
  color: #333333;
  font-family: Roboto_400Regular;
  margin-left: 10px;
  font-size: 14px;
`
